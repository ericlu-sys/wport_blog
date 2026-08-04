# Analytics Guide：為什麼這樣設定，怎麼使用

> 給**未來的 AI Agent 與新加入的維護者**看的入門文件。
>
> 詳細技術規格請看 [`docs/analytics.md`](./analytics.md)。這篇專講「**為什麼**這樣設計」與「**如何**執行常見任務」。

## 一分鐘總覽

- **一個 GTM container**（`GTM-MGLNLCG5`，與主站共用）
- **一個 GA4 property**（`WPORT-行銷總覽`，Measurement ID `G-WQWNNDZ22Y`）
- **一個 GSC domain property**（`sc-domain:wport.me`，涵蓋 blog）
- **前端事件**在 `src/pages/posts/[slug].astro`
- **已閱讀狀態**用 `localStorage`，同時送 GA4 事件

看到 `Blog - ` 開頭的 GTM 資源（variables／triggers／tags）都是 blog 專用。

---

## 為什麼這樣設計（決策紀錄）

### 決策 1：GTM 與 GA4 共用主站，不另開

**選項**：新開 blog 專屬 GTM container 或 GA4 property。

**決定**：不開。沿用主站 `GTM-MGLNLCG5` 與 `WPORT-行銷總覽`。

**理由**：

1. Blog 在 `wport.me/blog/` 是**同網域子路徑**，不是獨立站
2. 品牌一致：內容行銷 → 求職平台是同一個轉換漏斗
3. 拆開會失去「**讀 blog → 點找工作 → `apply_job`**」這條路徑
4. GA4 一個 property 內建 `page_path` / 自訂維度就能切 blog

**維護原則**：主站與 blog 的 tag 用**名稱前綴**區分——`Blog - CE - post_view`、`Blog - GA4 - share_click`。這樣搜尋、稽核、debug 都乾淨。

### 決策 2：事件命名不加 `blog_` 前綴

**選項 A**：GA4 event name 用 `blog_post_view`。
**選項 B**：event name 就是 `post_view`，另外帶 `page_type=post_detail`。

**決定**：選 B。

**理由**：

- GA4 event name 若加前綴，未來若有 `wport_platform_post_view` 或 `newsroom_post_view` 會很亂
- 用 `page_type` 這個 dimension 切，更符合 GA4 的建模風格
- 之後要跨產品分析同語意事件（例如「所有內容曝光」）也方便

### 決策 2.5：GTM 裡 Trigger 與 Tag 必須成對

**Trigger** = 何時開火；**Tag** = 開火後做什麼。

只有 `Blog - CE - *` Trigger、沒有 `Blog - GA4 - *` Tag，前端 `dataLayer` 有事件、GTM Preview 也可能亮 Trigger，但 **GA4 永遠收不到**。

正確對應（2026-07-09 已補齊）：

| Trigger | Tag |
|---------|-----|
| `Blog - CE - post_view` | `Blog - GA4 - post_view` |
| `Blog - CE - scroll_depth` | `Blog - GA4 - scroll_depth` |
| `Blog - CE - read_complete` | `Blog - GA4 - read_complete` |
| `Blog - CE - share_click` | `Blog - GA4 - share_click` |
| `Blog - CE - related_post_click` | `Blog - GA4 - related_post_click` |
| `Blog - CE - mark_read` | `Blog - GA4 - mark_read` |

用 [`scripts/gtm_build_blog_tags.py`](../scripts/gtm_build_blog_tags.py) 冪等建立；**不自動 Publish**，Preview 後再手動發布。

### 決策 3：文章追蹤事件的六種

僅追這六個，不追每個 hover / click：

| Event | 為什麼要追 |
|-------|-----------|
| `post_view` | 頁面熱度基準線 |
| `scroll_depth` | 判斷「載入 vs 有讀」的關鍵，避免只看 PV |
| `read_complete` | 唯一可信的「閱讀完成」訊號 |
| `share_click` | 內容傳播力，區分平台 |
| `related_post_click` | 站內導流健康度 |
| `mark_read` | 已閱讀首次寫入時打一次，避免同人重複計 |

**共通參數**：`post_id`、`post_title`、`post_tags`、`publish_date`、`page_type` —— 所有事件都帶，這樣 GA4 explorations 隨時可以切。

### 決策 4：「已閱讀」用 localStorage + event 雙軌

**選項**：只做 UI（無事件）、只做 event（無 UI）、雙軌。

**決定**：雙軌。UI 用 localStorage（key: `wport.readPosts`），事件用 `read_complete` / `mark_read`。

**理由**：

- UI 標記是**使用者體驗**（自己知道看過哪些），只需同瀏覽器有效
- 事件是**營運資料**（跨用戶聚合分析），要進 GA4
- 若只做 UI 沒事件 → 沒數據
- 若只做事件沒 UI → 用戶感受不到「已閱讀」
- 雙軌避免把 localStorage 當唯一真相

**注意**：分析請用 **GA4 事件**，不要用 localStorage 統計。localStorage 只代表**同一瀏覽器/裝置**。

### 決策 5：GSC 用 Domain property 而不是 URL prefix

**選項 A**：`https://wport.me/blog/` URL prefix property。
**選項 B**：`sc-domain:wport.me` Domain property。

**決定**：選 B。

**理由**：

- 一次驗證 DNS 就涵蓋所有子路徑、子網域、http / https
- Blog 只是 `/blog/` 子路徑，未來若加 `/newsroom/` 也不用重驗
- 搜尋表現本來就跟主站合看比較有意義（同網域 SEO）

**Blog 專屬報表怎麼看**：GSC → Performance → Pages → filter URL 含 `/blog/posts/`。

### 決策 6：RSS 加 XSL 樣式（不是為了 SEO）

RSS 加 `feed.xsl` 純粹是**瀏覽器友善**——訪客點 RSS 連結不會看到那句「This XML file does not appear to have any style information」，而是看到一頁 blog 樣式的最新文章列表。

**RSS Reader** 完全不受影響（會忽略 XSL）。

---

## 系統地圖：這些檔案分別做什麼

### 前端（送事件）

| 檔案 | 職責 |
|------|------|
| [`src/layouts/BlogLayout.astro`](../src/layouts/BlogLayout.astro) | 掛 GTM `<script>` 與 `<noscript>` 片段，注入 GSC 驗證 meta（若設定 env） |
| [`src/lib/analytics.ts`](../src/lib/analytics.ts) | Helper：`pushAnalyticsEvent`、`markPostAsRead`、`isPostRead`、`getGtmId` |
| [`src/lib/read-markers.ts`](../src/lib/read-markers.ts) | 純 client：把 `[data-post-id]` 卡片標記為「已閱讀」 |
| [`src/pages/posts/[slug].astro`](../src/pages/posts/[slug].astro) | 文章頁事件掛載（post_view / scroll / read / share / related） |
| [`src/pages/archive.astro`](../src/pages/archive.astro) | 列表頁載入時執行 `applyReadMarkers()` |
| [`src/pages/index.astro`](../src/pages/index.astro) | 首頁熱門文章區同樣做 read markers |

### 後端資源

| 檔案 | 職責 |
|------|------|
| [`src/pages/feed.xml.ts`](../src/pages/feed.xml.ts) | RSS 產生 + 掛 `xml-stylesheet` 指向 `/blog/feed.xsl` |
| [`public/feed.xsl`](../public/feed.xsl) | 瀏覽器友善 RSS 樣式 |
| [`public/robots.txt`](../public/robots.txt) | 宣告 sitemap 位置給爬蟲 |

### API 自動化腳本

| 檔案 | 職責 |
|------|------|
| [`scripts/google_api_auth_test.py`](../scripts/google_api_auth_test.py) | OAuth 一次通過 + 驗證 GSC / GTM / GA4 權限 |
| [`scripts/gtm_build_blog_tags.py`](../scripts/gtm_build_blog_tags.py) | 冪等建立 blog 事件所需 variables / triggers / tags |
| [`scripts/fetch_ga4_views.py`](../scripts/fetch_ga4_views.py) | 抓 GA4 每篇文章的 pageViews，寫入 `src/data/post-views.json` |

前端閱讀數：

| 檔案 | 職責 |
|------|------|
| [`src/lib/post-views.ts`](../src/lib/post-views.ts) | 讀 `src/data/post-views.json`，提供 `getPostViews`、`formatPostViews` |
| [`src/data/post-views.json`](../src/data/post-views.json) | GA4 Data API 快照，`{ "_meta": {...}, "views": { slug: count } }` |

Token 儲存位置（本機）：`~/.config/wport_blog/google_oauth_token.json`。

### 環境變數

| 變數 | 用途 |
|------|------|
| `PUBLIC_GTM_ID` | 覆寫 GTM container（預設 `GTM-MGLNLCG5`） |
| `PUBLIC_GSC_VERIFICATION` | GSC HTML meta 驗證碼（DNS 驗證就不用） |

---

## 我要做 X，該怎麼做？

### 我要看某一篇文章的熱度

**在 GA4：**

1. Explore → Free form
2. Dimension：`post_id`（若沒看到，先到 Admin → Custom definitions 註冊）
3. Metric：`views`、`event count: read_complete`、`event count: share_click`
4. 篩選：`post_id` = 你要看的 slug

**在 GSC：**

1. Performance → Pages
2. 直接搜這篇的 URL 或 `/blog/posts/<slug>/`
3. 看 impressions、clicks、CTR、position

**交叉判讀**：見 [`docs/analytics.md`](./analytics.md) 「判讀框架」。

### 我要更新前台顯示的「N 閱讀」

前台的閱讀數是 **build-time** 從 GA4 抓的，不是即時。要更新就要重跑腳本 + rebuild：

```bash
# 1. 抓最新資料寫入 src/data/post-views.json
/tmp/wport-oauth-venv/bin/python scripts/fetch_ga4_views.py

# 2. 重新 build 並 push
npm run build
git add src/data/post-views.json
git commit -m "chore(analytics): refresh GA4 view counts"
git push
```

若某篇文章沒出現「N 閱讀」，代表 GA4 目前該 pagePath 為 0 view（新上線的追蹤資料通常 24–72 小時後才穩定）。

想預覽會不會有數字，可 dry-run：

```bash
/tmp/wport-oauth-venv/bin/python scripts/fetch_ga4_views.py --dry-run
```

### 我要新增一個事件

1. 在 [`src/pages/posts/[slug].astro`](../src/pages/posts/[slug].astro) 用 `pushEvent("my_new_event", { ... })` 發送
2. 若參數是新的，更新 [`src/lib/analytics.ts`](../src/lib/analytics.ts) 的 `AnalyticsEventName` 型別
3. 更新 [`scripts/gtm_build_blog_tags.py`](../scripts/gtm_build_blog_tags.py)：加到 `CUSTOM_EVENTS`（與參數 `TAG_EXTRA_PARAMS`）
4. 執行腳本自動建 GTM trigger + tag：

   ```bash
   /tmp/wport-oauth-venv/bin/python scripts/gtm_build_blog_tags.py
   ```

5. 到 [GTM UI](https://tagmanager.google.com/) Preview 驗證 → Publish
6. 若參數要在 GA4 報表看，去 Admin → Custom definitions 註冊
7. 更新 [`docs/analytics.md`](./analytics.md) 「事件字典」段落

### 我要驗證 sitemap 是否進 GSC

```bash
# 1. 授權（第一次或 token 過期時）
/tmp/wport-oauth-venv/bin/python scripts/google_api_auth_test.py \
  "/Users/Eric/Documents/憑證/eric_mac_wport.json"

# 2. 讀 GSC sitemap 清單
/tmp/wport-oauth-venv/bin/python -c "
from google.oauth2.credentials import Credentials
from pathlib import Path
import urllib.request, urllib.parse, json
creds = Credentials.from_authorized_user_file(str(Path.home() / '.config/wport_blog/google_oauth_token.json'))
site = urllib.parse.quote('sc-domain:wport.me', safe='')
req = urllib.request.Request(
    f'https://www.googleapis.com/webmasters/v3/sites/{site}/sitemaps',
    headers={'Authorization': f'Bearer {creds.token}'},
)
print(json.dumps(json.load(urllib.request.urlopen(req)), indent=2, ensure_ascii=False))
"
```

現在（2026-07-09）三筆 sitemap 都是 `errors: 0`。

### 我要本地驗證事件有沒有送出

1. `npm run dev`
2. 開文章頁 `http://localhost:3000/blog/posts/<slug>/`
3. DevTools Console：

   ```js
   window.dataLayer.filter(e => typeof e.event === 'string' && e.event.startsWith('post') || e.event === 'scroll_depth')
   ```

4. 應該看到至少一筆 `post_view`，捲動後有 `scroll_depth`
5. 若要看 GA4：連上 GTM Preview（`tagmanager.google.com` → Preview → 貼網址），並在 GA4 Admin → DebugView 看事件

### 我要換 GTM container 做隔離測試

```bash
export PUBLIC_GTM_ID=GTM-XXXX-TEST
npm run build
npm run preview
```

之後改回 `.env` 或直接刪 env 變數就會回到預設。

### 我要停掉某個事件

- 短期：在 GTM UI 把對應 tag 停用（Pause）
- 長期：從 [`src/pages/posts/[slug].astro`](../src/pages/posts/[slug].astro) 移除呼叫，並更新 GTM

### 我要加新的 blog 頁面追蹤（不是文章）

前提：`BlogLayout.astro` 已經有 GTM，`page_view` 自動送。若要客製事件：

1. 在該頁面 script 用相同 `dataLayer.push({ event: ..., ... })` 語法
2. `page_type` 給對應語意（例如 `page_type: "archive"`）
3. GTM 建對應 trigger + tag

---

## 給未來的 AI Agent：從這裡開始

**你要接手 blog 分析，先做這件事：**

1. **讀這篇** + [`docs/analytics.md`](./analytics.md)
2. **確認 token**：若 `~/.config/wport_blog/google_oauth_token.json` 不存在或過期，跑 [`scripts/google_api_auth_test.py`](../scripts/google_api_auth_test.py)。第一次要人工在瀏覽器授權，後續 refresh 自動
3. **確認事件在跑**：
   - Blog 端：build 後產物中應含 `GTM-MGLNLCG5` snippet 與 `pushEvent("post_view")`
   - GTM 端：`Blog - CE - *` triggers 至少存在 6 個、`Blog - GA4 - *` tags 也 6 個
   - GA4 端：DebugView 應能看到 `post_view` 帶 `post_id` 參數
4. **要動 GTM 就用 [`scripts/gtm_build_blog_tags.py`](../scripts/gtm_build_blog_tags.py)**：冪等、不會覆蓋已存在資源、不會自動 publish
5. **要動 GA4 report 就用 Data API**：token 已含 `analytics.readonly` scope
6. **絕不做的事**：
   - 不改主站 tag（前綴沒有 `Blog - ` 的）
   - 不 auto-publish GTM（改動要人工 review）
   - 不把 `client_secret*.json`、`google_oauth_token.json` 提交進 git
   - 不建第二個 GA4 property「for blog」——見上文決策 1

**你可能被問到的問題與答案**：

| 問題 | 答案 / 該做什麼 |
|------|----------------|
| 「為什麼 GA4 沒看到 `post_view`？」 | 檢查 GTM 是否有 `Blog - GA4 - post_view` tag，且對應 trigger 啟用 |
| 「為什麼有些文章沒 `read_complete`？」 | 該文章可能太短（<30 秒讀完就跳出），或用戶開了 reader mode |
| 「GTM Preview 沒看到事件」 | 先開 blog 前端 DevTools 看 `dataLayer` 有沒有東西；沒有就是前端沒送 |
| 「Sitemap 沒被抓」 | 確認 `robots.txt` 有宣告，`sitemap-index.xml` 回 200，GSC 提交過 |
| 「我要新增一個 blog 站」 | 沿用同一個 GTM 與 GA4，用 `page_type` 或不同 `page_path` 前綴區分 |

---

## 資安

- OAuth JSON 與 token 檔絕不 commit（`.gitignore` 已排除 `.env`、`*.token.json`）
- `PUBLIC_*` 環境變數會出現在瀏覽器 HTML（GTM ID 本來就是公開的，沒關係）
- 敏感資料（GA4 API key、GSC 內部 URL）不要放 `PUBLIC_*`

---

## 相關文件

- 技術規格：[`docs/analytics.md`](./analytics.md)
- 授課備課：`~/Documents/obsidian/wport_obsidian/WPORT教學/AI-Agent操作Google行銷API完整指南.md`
- README 對外指引：[`README.md`](../README.md) 「Google CLI（Search Console / PageSpeed Insights）+ 追蹤 Key」段落
