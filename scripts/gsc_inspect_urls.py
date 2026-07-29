#!/usr/bin/env python3
"""Inspect every sitemap URL with the Search Console URL Inspection API.

Answers "why isn't this page indexed?" per URL, using the official
`urlInspection.index.inspect` endpoint (read-only, no indexing requests are sent).

Uses the OAuth token cached at `~/.config/wport_blog/google_gsc_token.json`
(scope: webmasters / webmasters.readonly).

Usage:
    python3 scripts/gsc_inspect_urls.py
    python3 scripts/gsc_inspect_urls.py --limit 20 --json out.json
    python3 scripts/gsc_inspect_urls.py --urls https://wport.me/blog/ https://wport.me/blog/archive/

Quota: 2000 inspections/day and 600/minute per property, so a full 115-URL
sweep costs about 6% of the daily budget.

Exit codes:
    0 success
    1 no OAuth token / refresh failed
    2 API returned a fatal error (auth, permission, quota)
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.error
import urllib.request
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

TOKEN_PATH = Path.home() / ".config/wport_blog/google_gsc_token.json"
DEFAULT_SITE_URL = "sc-domain:wport.me"
DEFAULT_SITEMAP = "https://wport.me/blog/sitemap-0.xml"
INSPECT_ENDPOINT = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"

LOC_PATTERN = re.compile(r"<loc>(.*?)</loc>", re.DOTALL)


def load_token() -> str:
    try:
        from google.auth.transport.requests import Request
        from google.oauth2.credentials import Credentials
    except ImportError as exc:
        raise SystemExit(
            "Missing dependencies. Install with: pip3 install google-auth google-auth-oauthlib"
        ) from exc

    if not TOKEN_PATH.exists():
        print(f"OAuth token not found at {TOKEN_PATH}", file=sys.stderr)
        print("Run scripts/google_api_auth_test.py once to authorise.", file=sys.stderr)
        raise SystemExit(1)

    creds = Credentials.from_authorized_user_file(str(TOKEN_PATH))
    if not creds.valid:
        if creds.expired and creds.refresh_token:
            creds.refresh(Request())
            TOKEN_PATH.write_text(creds.to_json(), encoding="utf-8")
        else:
            print("Token is invalid and cannot be refreshed.", file=sys.stderr)
            raise SystemExit(1)
    return creds.token


def fetch_sitemap_urls(sitemap_url: str) -> list[str]:
    # Cloudflare rejects urllib's default User-Agent with a 403.
    request = urllib.request.Request(
        sitemap_url, headers={"User-Agent": "wport-blog-seo-audit/1.0"}
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        body = response.read().decode()
    return [loc.strip() for loc in LOC_PATTERN.findall(body)]


def inspect(url: str, site_url: str, token: str) -> dict:
    payload = json.dumps(
        {"inspectionUrl": url, "siteUrl": site_url, "languageCode": "zh-TW"}
    ).encode()
    request = urllib.request.Request(
        INSPECT_ENDPOINT,
        data=payload,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            body = json.loads(response.read().decode())
    except urllib.error.HTTPError as error:
        detail = error.read().decode()
        try:
            message = json.loads(detail)["error"]["message"]
        except (json.JSONDecodeError, KeyError):
            message = detail[:200]
        return {"url": url, "error": f"HTTP {error.code}: {message}"}

    status = body.get("inspectionResult", {}).get("indexStatusResult", {})
    return {
        "url": url,
        "verdict": status.get("verdict"),
        "coverageState": status.get("coverageState"),
        "robotsTxtState": status.get("robotsTxtState"),
        "indexingState": status.get("indexingState"),
        "pageFetchState": status.get("pageFetchState"),
        "lastCrawlTime": status.get("lastCrawlTime"),
        "googleCanonical": status.get("googleCanonical"),
        "userCanonical": status.get("userCanonical"),
        "sitemaps": status.get("sitemap", []),
        "referringUrls": status.get("referringUrls", []),
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--site", default=DEFAULT_SITE_URL, help="GSC property, e.g. sc-domain:wport.me")
    parser.add_argument("--sitemap", default=DEFAULT_SITEMAP)
    parser.add_argument("--urls", nargs="*", help="Inspect these URLs instead of the sitemap")
    parser.add_argument("--limit", type=int, help="Only inspect the first N URLs")
    parser.add_argument("--workers", type=int, default=5)
    parser.add_argument("--json", dest="json_out", help="Write full results to this path")
    args = parser.parse_args()

    token = load_token()
    urls = args.urls or fetch_sitemap_urls(args.sitemap)
    if args.limit:
        urls = urls[: args.limit]

    print(f"Property : {args.site}")
    print(f"Inspecting {len(urls)} URLs ...\n", flush=True)

    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        results = list(pool.map(lambda u: inspect(u, args.site, token), urls))

    errors = [r for r in results if "error" in r]
    if errors and len(errors) == len(results):
        print("All inspections failed. First error:", errors[0]["error"], file=sys.stderr)
        return 2

    ok = [r for r in results if "error" not in r]
    by_coverage: dict[str, list[str]] = defaultdict(list)
    for r in ok:
        by_coverage[r["coverageState"] or "(unknown)"].append(r["url"])

    print("=" * 72)
    print("涵蓋狀態統計 (coverageState)")
    print("=" * 72)
    for state, members in sorted(by_coverage.items(), key=lambda kv: -len(kv[1])):
        print(f"{len(members):>4}  {state}")
        for url in members[:4]:
            print(f"        {url}")
        if len(members) > 4:
            print(f"        ... 另外 {len(members) - 4} 筆")

    print()
    print("=" * 72)
    print("其他訊號")
    print("=" * 72)
    for field in ("verdict", "robotsTxtState", "indexingState", "pageFetchState"):
        counts = Counter(r[field] or "(none)" for r in ok)
        print(f"{field:<16}", dict(counts))

    no_referrers = [r["url"] for r in ok if not r["referringUrls"]]
    print(f"\n無任何內部連結指向 (referringUrls 為空): {len(no_referrers)} / {len(ok)}")
    not_in_sitemap = [r["url"] for r in ok if not r["sitemaps"]]
    print(f"Google 未將其對應到 sitemap:            {len(not_in_sitemap)} / {len(ok)}")
    mismatched = [
        (r["url"], r["googleCanonical"])
        for r in ok
        if r["googleCanonical"] and r["userCanonical"] and r["googleCanonical"] != r["userCanonical"]
    ]
    print(f"Google 選了不同的標準網址:               {len(mismatched)} / {len(ok)}")
    for url, canonical in mismatched[:5]:
        print(f"    {url}\n      -> {canonical}")

    if errors:
        print(f"\n失敗 {len(errors)} 筆，例如: {errors[0]['error']}")

    if args.json_out:
        Path(args.json_out).write_text(
            json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"\n完整結果已寫入 {args.json_out}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
