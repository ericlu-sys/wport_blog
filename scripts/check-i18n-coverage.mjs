#!/usr/bin/env node
/**
 * 檢查 src/content/posts/ 的多語系覆蓋率與 frontmatter 一致性。
 * 用法：npm run check:i18n
 */

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const POSTS_DIR = "src/content/posts";
const SUFFIXES = ["en", "id", "vi", "th"];

// 與 src/lib/tags.ts 的 CANONICAL_TAGS 保持同步
const CANONICAL_TAGS = [
  "僑外生",
  "留台工作",
  "求職面試",
  "個人品牌",
  "AI 實作",
  "聰電站",
  "台大創創",
  "創業募資",
  "簡報 Pitch",
  "WPORT 功能",
];

// 這些欄位在翻譯檔必須與原文完全一致
const MIRRORED_FIELDS = ["publishDate", "tags", "featured", "cover", "draft"];

/** 極簡 frontmatter 解析，只支援本站用到的純量與行內陣列。 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }
    data[kv[1]] = value;
  }
  return data;
}

const norm = (v) => (Array.isArray(v) ? JSON.stringify(v) : String(v ?? ""));

const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
const suffixRe = new RegExp(`-(${SUFFIXES.join("|")})\\.md$`);
const bases = files.filter((f) => !suffixRe.test(f)).map((f) => f.replace(/\.md$/, ""));

const errors = [];
const warnings = [];
let draftCount = 0;

for (const base of bases.sort()) {
  const srcPath = join(POSTS_DIR, `${base}.md`);
  const srcRaw = readFileSync(srcPath, "utf8");
  const src = parseFrontmatter(srcRaw);

  if (!src) {
    errors.push(`${base}.md：找不到 frontmatter`);
    continue;
  }

  const isDraft = String(src.draft) === "true";
  if (isDraft) draftCount += 1;

  // — 原文自身的規範檢查 —
  if (srcRaw.includes("——")) {
    errors.push(`${base}.md：含破折號「——」（CLAUDE.md 禁用）`);
  }
  const hotlink = srcRaw.match(/https:\/\/(images\.unsplash\.com|images\.pexels\.com)[^\s")]*/);
  if (hotlink) {
    errors.push(`${base}.md：圖片熱連結未轉 Cloudinary → ${hotlink[0].slice(0, 60)}…`);
  }
  const tags = Array.isArray(src.tags) ? src.tags : [];
  const badTags = tags.filter((t) => !CANONICAL_TAGS.includes(t));
  if (badTags.length) {
    warnings.push(`${base}.md：非 canonical tag（不會被翻譯）→ ${badTags.join("、")}`);
  }

  // — 翻譯覆蓋率與一致性 —
  const missing = [];
  for (const sfx of SUFFIXES) {
    const tPath = join(POSTS_DIR, `${base}-${sfx}.md`);
    let tRaw;
    try {
      tRaw = readFileSync(tPath, "utf8");
    } catch {
      missing.push(sfx);
      continue;
    }

    const t = parseFrontmatter(tRaw);
    if (!t) {
      errors.push(`${base}-${sfx}.md：找不到 frontmatter`);
      continue;
    }
    if (tRaw.includes("——")) {
      errors.push(`${base}-${sfx}.md：含破折號「——」`);
    }
    for (const field of MIRRORED_FIELDS) {
      if (norm(src[field]) !== norm(t[field])) {
        errors.push(
          `${base}-${sfx}.md：${field} 與原文不一致（原文 ${norm(src[field]) || "(空)"} / 翻譯 ${norm(t[field]) || "(空)"}）`
        );
      }
    }
    if (t.title === src.title) {
      warnings.push(`${base}-${sfx}.md：title 與原文相同，可能忘了翻譯`);
    }
  }
  if (missing.length) {
    // 草稿還沒發布，缺翻譯是正常的，發布前補齊即可。
    const message = `${base}.md：缺少翻譯 → ${missing.join("、")}`;
    if (isDraft) {
      warnings.push(`${message}（draft，發布前需補齊）`);
    } else {
      errors.push(message);
    }
  }
}

const incomplete = new Set([...errors, ...warnings].filter((m) => m.includes("缺少翻譯")).map((m) => m.split("：")[0]));
console.log(
  `共 ${bases.length} 篇 zh-TW 文章（${draftCount} 篇 draft），` + `${bases.length - incomplete.size} 篇四語系齊全。\n`
);

for (const w of warnings) console.log(`  warn  ${w}`);
if (warnings.length) console.log("");
for (const e of errors) console.log(`  ERROR ${e}`);

if (errors.length) {
  console.log(`\n✗ ${errors.length} 個錯誤、${warnings.length} 個警告`);
  process.exit(1);
}
console.log(`✓ 通過（${warnings.length} 個警告）`);
