# 10x Astro Starter

![](./public/template.png)

A modern, opinionated starter template for building fast, accessible, and AI-friendly web applications.

## Tech Stack

- [Astro](https://astro.build/) v6.1.9 - Modern web framework for building fast, content-focused websites
- [React](https://react.dev/) v19.2.4 - UI library for building interactive components
- [TypeScript](https://www.typescriptlang.org/) v5.9.3 - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) v4.2.1 - Utility-first CSS framework
- [Supabase](https://supabase.com/) - Authentication and backend-as-a-service

## Prerequisites

- Node.js v22.14.0 (as specified in `.nvmrc`)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/przeprogramowani/10x-astro-starter.git
cd 10x-astro-starter
```

2. Install dependencies:

```bash
npm install
```

3. Set up Supabase and configure environment variables — see [Supabase Configuration](#supabase-configuration) below.

4. Run the development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Command Shortcut Script

This project includes a root command runner: `scripts.sh`.

1. Grant execute permission once:

```bash
chmod +x scripts.sh
```

2. Use shortcuts:

```bash
./scripts.sh help
./scripts.sh dev
./scripts.sh build
./scripts.sh lint
./scripts.sh git:status
./scripts.sh gh:pr-status
```

The script also supports custom ports and common Git/GitHub flows, with inline comments in `scripts.sh` for quick reference.

## Project Structure

```md
.
├── src/
│   ├── content/
│   │   └── posts/  # Blog posts (.md)
│   ├── layouts/    # Astro layouts
│   ├── pages/      # Astro pages
│   │   └── api/    # API endpoints
│   ├── components/ # UI components (Astro & React)
│   └── assets/     # Static assets
├── public/         # Public assets
```

## Writing Blog Posts

All blog posts live in `src/content/posts/` as `.md` files.

### File naming

Use lowercase kebab-case, ideally prefixed with the topic or date for easy sorting:

```
taiwan-job-search-tips.md
2026-06-11-my-post-title.md
```

### Frontmatter

Every post **must** include a frontmatter block at the top. Copy the template below and fill in the fields:

```yaml
---
title: "文章標題"
description: "一到兩句話的文章摘要，用於 SEO meta description 與文章列表預覽。"
publishDate: 2026-06-11
tags: ["標籤一", "標籤二"]
featured: false
cover: "https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/你的圖片名稱.jpg"
---
```

| 欄位 | 型別 | 必填 | 說明 |
|---|---|---|---|
| `title` | string | ✅ | 文章標題 |
| `description` | string | ✅ | 摘要，建議 50–160 字元，用於 SEO |
| `publishDate` | date | ✅ | 格式 `YYYY-MM-DD` |
| `tags` | string[] | — | 分類標籤，**必須從下方 canonical 清單挑選**，建議 2–4 個 |
| `featured` | boolean | — | `true` 會在首頁置頂顯示，預設 `false` |
| `cover` | string | — | 封面圖片 URL，**必須是 Cloudinary**（見下方 Images） |
| `draft` | boolean | — | `true` 則文章不對外顯示，預設發布 |

### Tags

`tags` 只能使用以下 10 個 canonical 標籤（定義在 `src/lib/tags.ts`）：

```
僑外生、留台工作、求職面試、個人品牌、AI 實作、
聰電站、台大創創、創業募資、簡報 Pitch、WPORT 功能
```

不在清單裡的標籤**不會被翻譯**（五個語系都會顯示中文原文），也不會併進 archive
頁的標籤分群。想用的詞不在清單裡時，請對照 `src/lib/tags.ts` 的
`LEGACY_TAG_REDIRECTS` 找到對應的叢集標籤，例如 `履歷`／`面試`／`求職` → `求職面試`，
`工作許可`／`居留證` → `留台工作`。

### Images

**不要將圖片檔案 commit 進 repo。** 所有圖片統一透過 Cloudinary 託管，文章內只放 URL。

**上傳流程：**

1. 登入 [Cloudinary Dashboard](https://cloudinary.com/)，使用 wport 公司帳號（cloud name: `dyebbsckc`）
2. 上傳圖片到 `wport-blog/` 資料夾
3. 複製圖片的 Public ID，組成以下格式的 URL 貼入文章：

```
https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/wport-blog/你的圖片名稱.jpg
```

**URL 參數說明：**

| 參數 | 說明 |
|---|---|
| `f_auto` | 自動選擇最佳格式（WebP / AVIF），依瀏覽器支援決定 |
| `q_auto:good` | 自動壓縮品質（約 80–85%），肉眼無感但檔案大幅縮小 |
| `w_1200,c_limit` | 最大寬度 1200px，只縮不放大，適合 Mobile 與 Retina 螢幕 |

> 上傳原始圖片尺寸不限，Cloudinary 會自動處理。行銷同仁可直接用 Cloudinary Dashboard 上傳，無需任何 API 金鑰。

要批次上傳的話，可以用 `scripts/upload_to_cloudinary.py`，來源支援本機檔案、遠端 URL 與 Google Drive：

```bash
python3 scripts/upload_to_cloudinary.py 圖片名稱=./photo.jpg 另一張=https://example.com/a.jpg
```

這個腳本會從專案根目錄的 `.env` 讀 `CLOUDINARY_API_KEY` 與 `CLOUDINARY_API_SECRET`（`.env` 已被 gitignore）。**金鑰不要寫進程式碼。**

### 多語系翻譯（i18n）

本站是五語系靜態站：zh-TW（預設）、en-US、id-ID、vi-VN、th-TH。
**每篇 zh-TW 文章都必須補齊四個語系的翻譯檔**，否則該文章在 `/en` `/id` `/vi` `/th`
底下不會存在，語言切換器會把讀者退回該語系首頁。

翻譯檔跟原文同一層，用連字號加語系前綴命名：

```
my-post.md      ← zh-TW 原文
my-post-en.md   ← English
my-post-id.md   ← Bahasa Indonesia
my-post-vi.md   ← Tiếng Việt
my-post-th.md   ← ภาษาไทย
```

翻譯檔只翻 `title`、`description` 與內文；`publishDate`、`tags`、`featured`、`cover`、
`draft` 必須跟原文完全一致（`tags` 保持中文原樣，渲染時會自動轉換成各語系）。

> ⚠️ zh-TW 原文的檔名不可以用 `-en` `-id` `-vi` `-th` 結尾，會被誤判成翻譯檔。

**使用 AI Agent 協助翻譯：**本 repo 內建 `i18n-translate` skill
（`.claude/skills/i18n-translate/SKILL.md`）。在 Claude Code 裡新增或修改文章時會自動
觸發，也可以直接輸入 `/i18n-translate` 呼叫。skill 內含完整的命名慣例、frontmatter
規則、翻譯風格指引與檢查流程。

**草稿階段不用先翻。** `draft: true` 的文章不會被 build，而且草稿還會改，提前翻譯只會在定稿後重做一次。但**把 `draft: true` 拿掉之前，必須先補齊四個翻譯檔**，否則文章一發布就只有中文版存在。

**檢查覆蓋率：**

```bash
npm run check:i18n
```

會列出缺少翻譯的文章、frontmatter 與原文不一致的欄位、非 canonical 標籤、
未轉 Cloudinary 的圖片熱連結，以及違反規範的破折號。

### Preview locally

```bash
npm run dev
```

開啟 `http://localhost:3000` 確認文章顯示正常後再 commit。多語系文章請一併確認
`http://localhost:3000/blog/en/posts/你的文章` 等四個語系路由。

## Design Kit & Template Reuse

This blog is now structured to support template reuse for client delivery.

### Design system source of truth

- `src/styles/global.css` is the primary design token file (color, typography, spacing, radius, transitions).
- Shared primitives should consume tokens via CSS variables (for example `var(--fg-heading)`, `var(--bg-tag)`, `var(--border-default)`).
- Avoid hardcoded color values in page-level styles unless there is a specific one-off visual requirement.

### Current styling architecture

- `src/layouts/Layout.astro` imports `src/styles/global.css`.
- `src/components/Topbar.astro`, `src/pages/archive.astro`, and `src/pages/posts/[slug].astro` have been refactored to remove inline styles and use class-based styling.
- These files now use token-based color/typography values so theme customization can be done centrally.

### Template customization workflow (for new clients)

1. Update brand tokens in `src/styles/global.css` (`:root` variables).
2. Replace logo and static assets in `public/`.
3. Adjust content tone/SEO in `src/content/posts/` and page metadata.
4. Only then apply page-specific style tweaks if needed.

### Conventions for future changes

- Keep reusable visual rules in `src/styles/global.css`.
- Keep component/page files focused on structure and behavior.
- Prefer classes over inline `style=...`.
- If adding new UI patterns, extract reusable classes/components first before duplicating styles.

## Supabase Configuration

This project uses [Supabase](https://supabase.com/) for authentication. Environment variables are declared via Astro's `astro:env` schema and are treated as **server-only secrets** — they are never exposed to the client.

### First-time setup (local, no cloud project needed)

Requires [Docker](https://www.docker.com/) and ~7 GB RAM.

1. Create your `.env` file:

```bash
cp .env.example .env
```

2. Initialize the local Supabase project (creates a `supabase/` config folder):

```bash
npx supabase init
```

3. Start the local stack (downloads Docker images on first run):

```bash
npx supabase start
```

4. Copy the credentials printed by the CLI into your `.env`:

```
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_KEY=<anon key from CLI output>
```

5. To stop the stack when done:

```bash
npx supabase stop
```

The local Studio UI is available at `http://localhost:54323`.

No database tables or migrations are required — this project uses Supabase Auth's built-in `auth.users` table only.

### Using a cloud Supabase project instead

If you prefer to use a hosted Supabase project, add these variables to your `.env` file:

| Variable | Description |
|---|---|
| `SUPABASE_URL` | Project URL from Supabase dashboard → Settings → API |
| `SUPABASE_KEY` | `anon` public key from Supabase dashboard → Settings → API |

```
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_KEY=<anon-key>
```

### Email confirmation in local development

By default Supabase requires email confirmation before a user can sign in. To skip this during local development:

1. Open the Supabase dashboard for your project
2. Go to **Authentication → Email → Confirm email**
3. Toggle it **off**

Users can then sign in immediately after sign-up without clicking a confirmation link.

### Auth routes

| Route | Description |
|---|---|
| `/auth/signin` | Email/password sign-in form |
| `/auth/signup` | Email/password sign-up form |
| `/auth/confirm-email` | Post-signup "check your inbox" page |
| `/dashboard` | Example protected page (redirects to `/auth/signin` if unauthenticated) |

Route protection is handled in `src/middleware.ts`. Add paths to the `PROTECTED_ROUTES` array there to require authentication.

## AI Development Support

This project is configured with AI development tools to enhance the development experience, providing guidelines for:

- Project structure
- Coding practices
- Frontend development
- Styling with Tailwind
- Accessibility best practices
- Astro and React guidelines

### Cursor IDE

The project includes AI rules in `.cursor/rules/` directory that help Cursor IDE understand the project structure and provide better code suggestions.

### GitHub Copilot

AI instructions for GitHub Copilot are available in `.github/copilot-instructions.md`

### Windsurf

The `.windsurfrules` file contains AI configuration for Windsurf.

## Contributing

Please follow the AI guidelines and coding practices defined in the AI configuration files when contributing to this project.

## License

MIT
