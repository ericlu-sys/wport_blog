#!/usr/bin/env python3
"""
上傳圖片到 Cloudinary 的 wport-blog 資料夾，並印出文章可直接貼用的 URL。

用法：
    python3 scripts/upload_to_cloudinary.py <公開名稱>=<來源> [<公開名稱>=<來源> ...]

來源支援三種：
    ./local/photo.jpg          本機檔案
    https://example.com/a.jpg  遠端圖片（由 Cloudinary 直接抓取）
    drive:<file_id>            Google Drive 檔案（需先 gcloud auth login）

範例：
    python3 scripts/upload_to_cloudinary.py \
        charging-station-banner=./banner.jpg \
        kaiyuan-seminar-large=drive:13DR5n-rmq2reF63Y1r5zWeyNNOBUAcdc

憑證從專案根目錄的 .env 讀取（.env 已被 gitignore，不要寫進程式碼）：
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
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


def main() -> None:
    args = sys.argv[1:]
    if not args or any("=" not in a for a in args):
        sys.exit(__doc__)

    CREDS.update(load_credentials())

    results = []
    with tempfile.TemporaryDirectory() as tmpdir:
        for arg in args:
            public_id, source = arg.split("=", 1)
            print(f"☁️  上傳 {public_id} …")
            url = optimized(upload(public_id, source, tmpdir))
            results.append((public_id, url))
            print(f"   ✅ {url}")

    print("\n" + "=" * 60)
    print("📋 貼進文章的 URL：\n")
    for public_id, url in results:
        print(f"  [{public_id}]")
        print(f"  {url}\n")


if __name__ == "__main__":
    main()
