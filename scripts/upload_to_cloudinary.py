#!/usr/bin/env python3
"""
上傳圖片到 Cloudinary 的 wport-blog 資料夾，並印出文章可直接貼用的 URL。

用法：
    python3 scripts/upload_to_cloudinary.py [--cover <文章 slug>] <公開名稱>=<來源> ...

來源支援三種：
    ./local/photo.jpg          本機檔案
    https://example.com/a.jpg  遠端圖片（由 Cloudinary 直接抓取）
    drive:<file_id>            Google Drive 檔案（需先 gcloud auth login）

範例：
    python3 scripts/upload_to_cloudinary.py \\
        charging-station-banner=./banner.jpg \\
        kaiyuan-seminar-large=drive:13DR5n-rmq2reF63Y1r5zWeyNNOBUAcdc

    # 上傳完直接寫進文章的 cover（含 en/id/vi/th 四個翻譯檔）：
    python3 scripts/upload_to_cloudinary.py --cover charging-station \\
        charging-station-banner=./banner.jpg

--cover 一次只能配一張圖，slug 用 zh-TW 原文的檔名（不帶 -en/-id/-vi/-th）。
cover 依規範必須四語系一致，所以會一起寫；缺少的翻譯檔只會提醒，不會自動建立。

憑證從專案根目錄的 .env 讀取（.env 已被 gitignore，不要寫進程式碼）：
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

金鑰請各自到 Cloudinary Dashboard → Settings → API Keys 產一組自己的，不要共用。
"""

import hashlib
import json
import os
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

FOLDER = "wport-blog"
TRANSFORM = "f_auto,q_auto:good,w_1200,c_limit"
DRIVE_ACCOUNT = "ericlu@wport.me"
POSTS_DIR = Path(__file__).resolve().parent.parent / "src" / "content" / "posts"
LOCALES = ("en", "id", "vi", "th")


def load_credentials():
    """先讀環境變數，缺的再從專案根目錄的 .env 補。"""
    keys = ("CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET")
    creds = {k: os.environ.get(k, "") for k in keys}

    env_file = Path(__file__).resolve().parent.parent / ".env"
    if env_file.is_file():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            key = key.strip()
            if key in keys and not creds[key]:
                creds[key] = value.strip()

    missing = [k for k in keys if not creds[k]]
    if missing:
        sys.exit(
            f"❌ 缺少憑證：{', '.join(missing)}\n"
            f"   請在 {env_file} 補上，或設成環境變數。\n"
            f"   金鑰可在 Cloudinary Dashboard → Settings → API Keys 取得。"
        )
    return creds


CREDS: dict = {}


def sign(params: dict) -> str:
    """產生 Cloudinary API 簽名。"""
    to_sign = "&".join(f"{k}={v}" for k, v in sorted(params.items()))
    return hashlib.sha256((to_sign + CREDS["CLOUDINARY_API_SECRET"]).encode()).hexdigest()


def download_from_drive(file_id: str, dest_path: str) -> None:
    try:
        token = subprocess.run(
            ["gcloud", "auth", "print-access-token", f"--account={DRIVE_ACCOUNT}"],
            capture_output=True,
            text=True,
            check=True,
        ).stdout.strip()
    except Exception as exc:
        sys.exit(f"❌ 無法取得 Google Drive token：{exc}\n   請先執行：gcloud auth login --enable-gdrive-access")

    url = f"https://www.googleapis.com/drive/v3/files/{file_id}?alt=media"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req) as resp, open(dest_path, "wb") as fh:
        fh.write(resp.read())


def upload(public_id: str, source: str, tmpdir: str) -> str:
    """回傳 secure_url。source 為本機路徑、遠端 URL 或 drive:<file_id>。"""
    ts = str(int(time.time()))
    params = {"folder": FOLDER, "public_id": public_id, "timestamp": ts}
    endpoint = f"https://api.cloudinary.com/v1_1/{CREDS['CLOUDINARY_CLOUD_NAME']}/image/upload"

    if source.startswith("drive:"):
        local = os.path.join(tmpdir, f"{public_id}.bin")
        download_from_drive(source[len("drive:") :], local)
        file_arg = f"file=@{local}"
    elif source.startswith(("http://", "https://")):
        # Cloudinary 直接從遠端抓取，不需要先下載到本機
        file_arg = f"file={source}"
    else:
        if not os.path.isfile(source):
            sys.exit(f"❌ 找不到檔案：{source}")
        file_arg = f"file=@{source}"

    cmd = [
        "curl", "-s", "-X", "POST", endpoint,
        "-F", file_arg,
        "-F", f"folder={FOLDER}",
        "-F", f"public_id={public_id}",
        "-F", f"timestamp={ts}",
        "-F", f"api_key={CREDS['CLOUDINARY_API_KEY']}",
        "-F", f"signature={sign(params)}",
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    data = json.loads(result.stdout)
    if "secure_url" not in data:
        sys.exit(f"❌ 上傳失敗（{public_id}）：{data}")
    return data["secure_url"]


def optimized(raw_url: str) -> str:
    return raw_url.replace("/image/upload/", f"/image/upload/{TRANSFORM}/")


def cover_targets(slug: str):
    """回傳 (要寫入的檔案清單, 缺少的語系清單)。slug 必須是 zh-TW 原文。"""
    if slug.endswith(tuple(f"-{loc}" for loc in LOCALES)):
        sys.exit(
            f"❌ --cover 要用 zh-TW 原文的 slug，不是翻譯檔：{slug}\n"
            f"   cover 會自動同步到四個翻譯檔，不用個別指定。"
        )

    source = POSTS_DIR / f"{slug}.md"
    if not source.is_file():
        sys.exit(f"❌ 找不到文章：{source}")

    files = [source]
    missing = []
    for loc in LOCALES:
        translated = POSTS_DIR / f"{slug}-{loc}.md"
        if translated.is_file():
            files.append(translated)
        else:
            missing.append(loc)
    return files, missing


def set_cover(md_path: Path, url: str) -> str:
    """把 cover 寫進 frontmatter。回傳 added / updated / unchanged。"""
    lines = md_path.read_text().splitlines()
    if not lines or lines[0].strip() != "---":
        sys.exit(f"❌ {md_path.name} 開頭不是 frontmatter，沒有動它。")
    end = next((i for i, line in enumerate(lines[1:], 1) if line.strip() == "---"), None)
    if end is None:
        sys.exit(f"❌ {md_path.name} 的 frontmatter 沒有收尾的 ---，沒有動它。")

    field = f'cover: "{url}"'
    for i in range(1, end):
        if lines[i].startswith("cover:"):
            if lines[i] == field:
                return "unchanged"
            lines[i] = field
            action = "updated"
            break
    else:
        # 依 content.config.ts 的欄位順序，插在 featured 後面（退而求其次往前找）
        anchor = None
        for key in ("featured:", "tags:", "publishDate:", "description:", "title:"):
            anchor = next((i for i in range(1, end) if lines[i].startswith(key)), None)
            if anchor is not None:
                break
        lines.insert(end if anchor is None else anchor + 1, field)
        action = "added"

    md_path.write_text("\n".join(lines) + "\n")
    return action


def parse_args(argv):
    """回傳 (cover_slug, [(public_id, source), ...])。"""
    cover_slug = None
    uploads = []
    i = 0
    while i < len(argv):
        arg = argv[i]
        if arg.startswith("--cover="):
            cover_slug = arg.split("=", 1)[1]
        elif arg == "--cover":
            i += 1
            if i >= len(argv):
                sys.exit("❌ --cover 後面要接文章 slug，例如：--cover charging-station")
            cover_slug = argv[i]
        elif arg.startswith("-"):
            sys.exit(f"❌ 不認識的選項：{arg}\n{__doc__}")
        elif "=" in arg:
            uploads.append(tuple(arg.split("=", 1)))
        else:
            sys.exit(__doc__)
        i += 1

    if not uploads:
        sys.exit(__doc__)
    if cover_slug and len(uploads) != 1:
        sys.exit("❌ --cover 一次只能配一張圖，請分開跑。")
    return cover_slug, uploads


def main() -> None:
    cover_slug, uploads = parse_args(sys.argv[1:])

    # 先驗證文章存在，免得圖上傳完才發現 slug 打錯
    targets, missing = cover_targets(cover_slug) if cover_slug else ([], [])

    CREDS.update(load_credentials())

    results = []
    with tempfile.TemporaryDirectory() as tmpdir:
        for public_id, source in uploads:
            print(f"☁️  上傳 {public_id} …")
            url = optimized(upload(public_id, source, tmpdir))
            results.append((public_id, url))
            print(f"   ✅ {url}")

    print("\n" + "=" * 60)
    print("📋 貼進文章的 URL：\n")
    for public_id, url in results:
        print(f"  [{public_id}]")
        print(f"  {url}\n")

    if not cover_slug:
        return

    cover_url = results[0][1]
    print("=" * 60)
    print(f"📝 寫入 cover（{cover_slug}）：\n")
    for md_path in targets:
        action = set_cover(md_path, cover_url)
        icon = {"added": "➕", "updated": "🔄", "unchanged": "＝"}[action]
        print(f"  {icon} {md_path.name}")
    if missing:
        print(
            f"\n  ⚠️  缺少翻譯檔：{'、'.join(missing)}"
            f"\n     發布前要補齊，並讓 cover 與原文一致（npm run check:i18n 會擋）。"
        )
    print()


if __name__ == "__main__":
    main()
