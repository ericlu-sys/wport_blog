---
name: i18n-translate
description: 為部落格文章補齊 en / id / vi / th 四語系翻譯，並檢查 frontmatter 是否符合本站規範。當新增、修改、翻譯 src/content/posts/ 底下的文章時使用；也用於檢查既有文章的翻譯覆蓋率。觸發詞：新增文章、寫文章、翻譯、i18n、多語系、locale、補翻譯、translate post。
---

# 部落格文章 i18n 翻譯

本站是五語系靜態站（zh-TW 為預設，另有 en-US / id-ID / vi-VN / th-TH）。
**每一篇 zh-TW 文章都必須有四個語系的翻譯檔**，否則該文章在 `/en` `/id` `/vi` `/th`
底下完全不存在，語言切換器會把讀者退回該語系首頁。

## 檔名慣例

翻譯檔跟原文放在同一層 `src/content/posts/`，用 **連字號 + 語系前綴** 命名：

```
my-post.md        ← zh-TW 原文（無後綴）
my-post-en.md     ← en-US
my-post-id.md     ← id-ID
my-post-vi.md     ← vi-VN
my-post-th.md     ← th-TH
```

解析邏輯在 `src/i18n/utils.ts` 的 `parsePostEntryId()`，比對 regex `^(.*)-(en|id|vi|th)$`。

> ⚠️ 因此 zh-TW 原文的 slug **不可以**以 `-en` `-id` `-vi` `-th` 結尾，
> 否則會被誤判成翻譯檔。例如 `taiwan-work-id.md` 會被當成 `taiwan-work` 的印尼文版。

## Frontmatter 規則

| 欄位 | 翻譯？ | 說明 |
|---|---|---|
| `title` | ✅ 翻 | 照目標語言重寫，不要逐字直譯 |
| `description` | ✅ 翻 | 50–160 字元，這是 SEO meta description |
| `publishDate` | ❌ 保持一致 | 跟原文完全相同，不要改成翻譯日期 |
| `tags` | ❌ 保持中文原樣 | **不要翻譯**，渲染時由 `translateTag()` 自動轉換 |
| `featured` | ❌ 保持一致 | |
| `cover` | ❌ 保持一致 | 用同一張 Cloudinary 圖 |
| `draft` | ❌ 保持一致 | |

## 三個硬性檢查（寫文章時一併確認）

### 1. tags 必須來自 canonical 清單

`src/lib/tags.ts` 的 `CANONICAL_TAGS` 只有這 10 個：

```
僑外生、留台工作、求職面試、個人品牌、AI 實作、
聰電站、台大創創、創業募資、簡報 Pitch、WPORT 功能
```

不在清單裡的 tag **不會被翻譯**（五個語系都顯示中文原文），也不會併進 archive 的
tag 分群。如果想用的詞不在清單裡，先去 `LEGACY_TAG_REDIRECTS` 找對應的叢集 tag，
例如 `履歷` `面試` `求職` → `求職面試`；`工作許可` `居留證` → `留台工作`。

### 2. 圖片一律走 Cloudinary

不要用 Unsplash / Pexels 熱連結，也不要 commit 圖片檔。格式：

```
https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/圖片名稱.jpg
```

翻譯檔沿用原文的同一組 URL，不需要重新上傳。

### 3. 禁止使用破折號「——」

見 `CLAUDE.md`。改用句號、逗號，或把句子拆開重寫。這條在**所有語系**都適用。

## 翻譯風格

- **不要逐字直譯。** 依目標語言的閱讀習慣重寫句子結構，保留原文的資訊與語氣。
- 台灣特有名詞第一次出現時保留原文並加簡短說明，例如
  `工作許可 (work permit)`、`僑外生 (overseas Chinese and international students)`。
- 機關名稱用官方英文譯名，例如勞動部 = Ministry of Labor。
- 保持原文的 Markdown 結構：標題層級、清單、表格、圖片位置都要一一對應。
- 圖片的 alt text 要翻譯，圖片 URL 不變。
- 金額、日期、法規條號等事實性內容不可改動。

## 執行步驟

1. 確認 zh-TW 原文已定稿，且通過上面三個硬性檢查。
2. 依序產出 `-en` `-id` `-vi` `-th` 四個檔案。
3. 跑覆蓋率檢查：

   ```bash
   npm run check:i18n
   ```

4. 跑 build 確認四語系路由都生成：

   ```bash
   npm run build
   ```

   每篇文章應該產生 5 個頁面（`/posts/x/`、`/en/posts/x/`、`/id/...`、`/vi/...`、`/th/...`）。

## 相關檔案

| 檔案 | 用途 |
|---|---|
| `src/i18n/locales.ts` | 語系清單、路徑前綴、檔名後綴對應 |
| `src/i18n/utils.ts` | `parsePostEntryId()`、`postPath()`、`localizedPath()` |
| `src/i18n/ui.ts` | 介面文字字典（非文章內容） |
| `src/i18n/tags.ts` | tag 的五語系對照表 |
| `src/lib/tags.ts` | `CANONICAL_TAGS`、`LEGACY_TAG_REDIRECTS` |
| `src/lib/posts.ts` | 依語系取文章、翻譯群組、語言切換器連結 |
| `scripts/check-i18n-coverage.mjs` | 覆蓋率與 frontmatter 一致性檢查 |
