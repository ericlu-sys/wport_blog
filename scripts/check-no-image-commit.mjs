#!/usr/bin/env node
/**
 * 擋住把文章圖片 commit 進 repo。
 *
 * 圖片一律託管在 Cloudinary（cloud name dyebbsckc，資料夾 wport-blog/），
 * 文章裡只放 URL。用 scripts/upload_to_cloudinary.py 上傳。
 *
 * public/ 底下是網站自己的 UI 資產（favicon、footer icon、吉祥物），不在此限。
 * 真的需要例外時：ALLOW_IMAGE_COMMIT=1 git commit ...
 */
import { execSync } from "node:child_process";

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|avif|bmp|tiff?|ico|heic)$/i;
const ALLOWED_DIRS = ["public/"];

if (process.env.ALLOW_IMAGE_COMMIT === "1") {
  process.exit(0);
}

const staged = execSync("git diff --cached --name-only --diff-filter=AM", {
  encoding: "utf8",
})
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const offenders = staged.filter((file) => IMAGE_EXT.test(file) && !ALLOWED_DIRS.some((dir) => file.startsWith(dir)));

if (offenders.length === 0) {
  process.exit(0);
}

console.error("\n❌ 圖片檔不要 commit 進 repo：\n");
for (const file of offenders) {
  console.error(`   ${file}`);
}
console.error(`
   請改上傳到 Cloudinary，文章裡只放 URL：

     python3 scripts/upload_to_cloudinary.py 圖片名稱=./你的圖.jpg

   要順便寫進文章封面就加 --cover <文章 slug>。詳見 README「Images」。

   先把檔案退出 staging：

     git restore --staged ${offenders.join(" ")}

   確定是網站 UI 資產（favicon／icon 之類）就放進 public/，
   或用 ALLOW_IMAGE_COMMIT=1 git commit ... 跳過這道檢查。
`);
process.exit(1);
