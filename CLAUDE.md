# Rules for AI

This file provides guidance to AI Agent when working with code in this repository.

## What this is

A **static Astro 5 blog** (the Wport blog), deployed as static files. Built with Astro content collections, a few React 19 islands for interactivity, Tailwind 4, and shadcn/ui primitives. There is **no backend, no auth, no database, and no SSR** — `output: "static"`.

## Commands

- `npm run dev` — start dev server on port 3000
- `npm run build` — static production build (outputs to `dist/`)
- `npm run preview` — preview the built site
- `npm run lint` — ESLint (flat config, eslint.config.js)
- `npm run lint:fix` — auto-fix lint issues
- `npm run format` — Prettier (includes prettier-plugin-astro)

Pre-commit hooks: husky + lint-staged runs `eslint --fix` on `*.{ts,tsx,astro}` and `prettier --write` on `*.{json,css,md}`.

## Architecture

### Rendering
- `astro.config.mjs`: `output: "static"`, `site: "https://wport.me"`, `base: "/blog"`. Integrations: `@astrojs/react`, `@astrojs/sitemap`; Tailwind via `@tailwindcss/vite`.
- All pages are prerendered to static HTML at build time. The site is served from the `/blog` base path.

### Content
- Blog posts live in `src/content/posts/` as Markdown. The collection schema (`title`, `description`, `publishDate`, `tags?`, `featured?`, `cover?`, `draft?`) is defined in `src/content.config.ts`. Posts with `draft: true` are excluded from the build.
- Pages: `src/pages/index.astro` (home), `src/pages/archive.astro` (all posts), `src/pages/posts/[slug].astro` (post page). The `src/pages/[lang]/` tree mirrors these for the four non-default locales. Both post routes are thin wrappers around `src/components/PostPage.astro`, which holds the actual post layout.

### i18n
- Five locales: `zh-TW` (default, no path prefix), `en-US` (`/en`), `id-ID` (`/id`), `vi-VN` (`/vi`), `th-TH` (`/th`). Config lives in `src/i18n/`.
- Translations are sibling files named `<base-slug>-<en|id|vi|th>.md`. A zh-TW post slug must therefore never end in `-en`, `-id`, `-vi`, or `-th`.
- Translation files translate `title`, `description`, and the body only. `publishDate`, `tags`, `featured`, `cover`, and `draft` must match the source exactly. Tags stay in Chinese and are translated at render time by `translateTag()`.
- Run `npm run check:i18n` to verify coverage, frontmatter consistency, canonical tags, image hotlinks, and the em-dash rule.
- The `i18n-translate` skill (`.claude/skills/i18n-translate/`) has the full conventions.

### Key conventions
- **Path alias**: `@/*` maps to `./src/*` (tsconfig paths).
- **Astro components** for static content/layout; **React components** only when interactivity is needed.
- **Tailwind class merging**: use the `cn()` helper from `@/lib/utils` (clsx + tailwind-merge) for conditional/merged class names. Do not concatenate class strings manually.
- **shadcn/ui**: components live in `src/components/ui/`, "new-york" style variant. Install new ones with `npx shadcn@latest add [name]`.
- **Design tokens**: `src/styles/global.css` is the source of truth for color/typography/spacing/radius. Prefer the token CSS variables over hardcoded values; keep reusable visual rules there.
- **Images**: never commit image files. Host them on Cloudinary (cloud name `dyebbsckc`, folder `wport-blog/`) and reference the URL — see README "Images". `scripts/upload_to_cloudinary.py` is the signed-upload helper for the Wport account.
- **Shared types** go in `src/types.ts`.

## Content Writing Rules

- **禁止使用「——」（破折號）**：撰寫或編輯任何部落格文章時，不得使用「——」這個標點符號。請改用句號、逗號或將句子拆開重寫。
- **發布前必須補齊四語系翻譯**：草稿階段（`draft: true`）不需要先翻譯，因為草稿還會改。但**把 `draft: true` 拿掉之前，必須先補齊 `-en` `-id` `-vi` `-th` 四個翻譯檔**，否則該文章在 `/en` `/id` `/vi` `/th` 底下不存在，語言切換器會把讀者退回該語系首頁。以 `npm run check:i18n` 為準：draft 缺翻譯只是警告，已發布文章缺翻譯是錯誤。
- **tags 只能用 canonical 標籤**：清單定義在 `src/lib/tags.ts` 的 `CANONICAL_TAGS`。不在清單裡的標籤不會被翻譯（五個語系都顯示中文原文），也不會併進 archive 的標籤分群。對應關係參考同檔的 `LEGACY_TAG_REDIRECTS`。
- **文章內的站內連結要帶語系前綴**：翻譯檔請用 `/blog/<lang>/posts/<slug>/`，讓讀者留在同一語系。若目標文章沒有該語系翻譯，才退回 `/blog/posts/<slug>/`。

### Environment
- Node.js v22.14.0 (see `.nvmrc`).
- No environment variables or secrets are required to build or run the blog.
