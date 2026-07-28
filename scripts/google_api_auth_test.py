#!/usr/bin/env python3
"""Authorize with a Desktop OAuth client JSON and test GSC / GTM / GA4 access."""

from __future__ import annotations

import json
import sys
import urllib.error
import urllib.request
from pathlib import Path

SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/analytics.edit",
    "https://www.googleapis.com/auth/tagmanager.readonly",
    "https://www.googleapis.com/auth/tagmanager.edit.containers",
    "https://www.googleapis.com/auth/tagmanager.edit.containerversions",
    "https://www.googleapis.com/auth/tagmanager.publish",
    "https://www.googleapis.com/auth/webmasters",
]

DEFAULT_CLIENT_JSON = Path.home() / "Documents/憑證/eric_mac_wport.json"
TOKEN_PATH = Path.home() / ".config/wport_blog/google_oauth_token.json"


def load_credentials(client_json: Path):
    try:
        from google.auth.transport.requests import Request
        from google.oauth2.credentials import Credentials
        from google_auth_oauthlib.flow import InstalledAppFlow
    except ImportError as exc:
        raise SystemExit(
            "Missing dependencies. Run: pip3 install google-auth-oauthlib google-auth-httplib2"
        ) from exc

    creds = None
    if TOKEN_PATH.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_PATH), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(str(client_json), SCOPES)
            creds = flow.run_local_server(port=0, open_browser=True)

        TOKEN_PATH.parent.mkdir(parents=True, exist_ok=True)
        TOKEN_PATH.write_text(creds.to_json(), encoding="utf-8")

    return creds


def api_get(url: str, token: str) -> tuple[int, dict | str]:
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            return response.status, json.loads(response.read().decode())
    except urllib.error.HTTPError as error:
        body = error.read().decode()
        try:
            return error.code, json.loads(body)
        except json.JSONDecodeError:
            return error.code, body


def main() -> int:
    client_json = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_CLIENT_JSON
    if not client_json.exists():
        print(f"OAuth client JSON not found: {client_json}")
        return 1

    print(f"Using OAuth client: {client_json}")
    creds = load_credentials(client_json)
    token = creds.token

    checks = [
        ("GSC", "https://www.googleapis.com/webmasters/v3/sites"),
        ("GTM", "https://tagmanager.googleapis.com/tagmanager/v2/accounts"),
        ("GA4", "https://analyticsadmin.googleapis.com/v1beta/accountSummaries"),
    ]

    all_ok = True
    for name, url in checks:
        status, body = api_get(url, token)
        ok = status == 200
        mark = "PASS" if ok else "FAIL"
        print(f"[{mark}] {name} HTTP {status}")
        all_ok = all_ok and ok

        if not ok:
            if isinstance(body, dict):
                print("  error:", body.get("error", {}).get("message", body))
            else:
                print("  error:", str(body)[:300])
            continue

        if name == "GSC":
            sites = [entry.get("siteUrl") for entry in body.get("siteEntry", [])]
            print("  sites:", sites)
        elif name == "GTM":
            accounts = body.get("account", [])
            print("  accounts:", len(accounts))
            for account in accounts:
                account_id = account.get("accountId")
                if not account_id:
                    continue
                c_status, c_body = api_get(
                    f"https://tagmanager.googleapis.com/tagmanager/v2/accounts/{account_id}/containers",
                    token,
                )
                if c_status != 200 or not isinstance(c_body, dict):
                    continue
                for container in c_body.get("container", []):
                    public_id = container.get("publicId")
                    if public_id == "GTM-MGLNLCG5":
                        print("  found container:", public_id, "-", container.get("name"))
        elif name == "GA4":
            summaries = body.get("accountSummaries", [])
            print("  accounts:", len(summaries))
            for summary in summaries[:5]:
                props = summary.get("propertySummaries", [])
                print("  -", summary.get("displayName"), f"({len(props)} properties)")

    print("token saved:", TOKEN_PATH)
    return 0 if all_ok else 2


if __name__ == "__main__":
    raise SystemExit(main())
