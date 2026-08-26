import { defaultLocale, type Locale } from "./locales";

export type UiKey =
  | "nav.home"
  | "nav.archive"
  | "nav.jobs"
  | "nav.language"
  | "footer.about"
  | "footer.contact"
  | "footer.siteLinks"
  | "footer.socials"
  | "footer.copyright"
  | "footer.facebook.alt"
  | "footer.facebook.aria"
  | "footer.instagram.alt"
  | "footer.instagram.aria"
  | "footer.tiktok.alt"
  | "footer.tiktok.aria"
  | "footer.youtube.alt"
  | "footer.youtube.aria"
  | "footer.linkedin.alt"
  | "footer.linkedin.aria"
  | "home.title"
  | "home.description"
  | "home.badge"
  | "home.h1.line1"
  | "home.h1.line2"
  | "home.h2"
  | "home.cta.archive"
  | "home.cta.popular"
  | "home.popular.label"
  | "home.popular.title"
  | "home.popular.seeAll"
  | "home.empty"
  | "bento.aria"
  | "bento.label"
  | "bento.title"
  | "bento.subtitle"
  | "bento.cta"
  | "bento.count"
  | "bento.overseasStudents.label"
  | "bento.overseasStudents.description"
  | "bento.overseasStudents.coverAlt"
  | "bento.ai.label"
  | "bento.ai.description"
  | "bento.ai.coverAlt"
  | "bento.startup.label"
  | "bento.startup.description"
  | "bento.startup.coverAlt"
  | "bento.features.label"
  | "bento.features.description"
  | "bento.features.coverAlt"
  | "archive.title"
  | "archive.heading"
  | "archive.subtitle"
  | "archive.rss"
  | "archive.searchPlaceholder"
  | "archive.empty"
  | "archive.allTags"
  | "hub.otherTopics"
  | "hub.description"
  | "home.recent.title"
  | "home.topics.title"
  | "archive.pageLabel"
  | "archive.prev"
  | "archive.next"
  | "post.back"
  | "post.followTitle"
  | "post.followDesc"
  | "post.followEvents"
  | "post.followSite"
  | "post.related"
  | "post.prev"
  | "post.next"
  | "post.toc"
  | "post.paginationNav"
  | "post.aiCopy.title"
  | "post.aiCopy.formatAria"
  | "post.aiCopy.open"
  | "post.aiCopy.copyUrl"
  | "post.aiCopy.copyAsMd"
  | "post.aiCopy.copyAsJson"
  | "post.aiCopy.openMdTitle"
  | "post.aiCopy.openMdAria"
  | "post.aiCopy.openJsonTitle"
  | "post.aiCopy.openJsonAria"
  | "post.aiCopy.copyMdUrlTitle"
  | "post.aiCopy.copyMdUrlAria"
  | "post.aiCopy.copyMdContentTitle"
  | "post.aiCopy.copyMdContentAria"
  | "post.aiCopy.copyJsonUrlTitle"
  | "post.aiCopy.copyJsonUrlAria"
  | "post.aiCopy.copyJsonContentTitle"
  | "post.aiCopy.copyJsonContentAria"
  | "post.aiCopy.mdUrlToast"
  | "post.aiCopy.mdContentToast"
  | "post.aiCopy.jsonUrlToast"
  | "post.aiCopy.jsonContentToast"
  | "post.aiCopy.fail"
  | "post.aiCopy.markdownAlternate"
  | "post.share.title"
  | "post.share.x"
  | "post.share.linkedin"
  | "post.share.line"
  | "post.share.facebook"
  | "post.share.threads"
  | "post.share.instagram"
  | "post.share.copyLink"
  | "post.share.copiedLink"
  | "post.share.copiedLinkInstagram"
  | "post.code.copy"
  | "post.code.copied"
  | "post.code.copiedToast"
  | "post.code.copyFail"
  | "post.backToTop"
  | "layout.siteName"
  | "layout.defaultDescription";

type UiDict = Record<UiKey, string>;

const zhTW: UiDict = {
  "nav.home": "首頁",
  "nav.archive": "所有文章",
  "nav.jobs": "找工作",
  "nav.language": "語言",
  "footer.about": "關於我們",
  "footer.contact": "聯絡我們",
  "footer.siteLinks": "網站連結",
  "footer.socials": "wport 官方社群連結",
  "footer.copyright": "© {year} WPORT-熱火數碼資訊股份有限公司",
  "footer.facebook.alt": "wport Facebook 專頁圖標",
  "footer.facebook.aria": "前往 wport Facebook 官方粉絲專頁",
  "footer.instagram.alt": "wport Instagram 圖標",
  "footer.instagram.aria": "追蹤 wport Instagram 官方帳號",
  "footer.tiktok.alt": "wport TikTok 圖標",
  "footer.tiktok.aria": "觀看 wport TikTok 最新影片",
  "footer.youtube.alt": "wport YouTube 圖標",
  "footer.youtube.aria": "訂閱 wport YouTube 頻道",
  "footer.linkedin.alt": "wport LinkedIn 企業專頁圖標",
  "footer.linkedin.aria": "在 LinkedIn 上與 wport 建立專業聯繫",
  "home.title": "Wport Blog — 在台僑外生求學求職完整指南",
  "home.description":
    "專為在台僑外生打造的求學求職資源。涵蓋評點制、AI 課程、實習與工作許可，透過文章學習第一手資訊，提前布局留台職涯。",
  "home.badge": "專為在台僑外生打造",
  "home.h1.line1": "在台僑外生",
  "home.h1.line2": "求學求職完整指南",
  "home.h2":
    "從評點制、AI 課程到實習與工作許可，Wport 彙整第一手資訊與實戰經驗。透過文章學習、掌握政策與職涯策略，讓你在台灣順利學習、求職、留台。",
  "home.cta.archive": "瀏覽所有文章 →",
  "home.cta.popular": "熱門文章",
  "home.popular.label": "POPULAR",
  "home.popular.title": "熱門文章",
  "home.popular.seeAll": "查看全部 →",
  "home.empty": "目前還沒有文章。",
  "bento.aria": "內容分類導覽",
  "bento.label": "EXPLORE",
  "bento.title": "依主題找你想看的文章",
  "bento.subtitle": "留台求職、AI 實作、新創募資到 WPORT 功能，各類文章幫你快速對到需求。",
  "bento.cta": "進入專區 →",
  "bento.count": "{n} 篇",
  "bento.overseasStudents.label": "僑外生指南",
  "bento.overseasStudents.description": "各種留台詳解，讓你不會對法規感到頭痛",
  "bento.overseasStudents.coverAlt": "僑外生指南專區封面，留台求職與法規相關活動現場",
  "bento.ai.label": "AI 技術",
  "bento.ai.description": "拆解各種 AI 工具與技術，讓你職場能力大加分",
  "bento.ai.coverAlt": "AI 技術專區封面，聰電站 AI 實作課程現場",
  "bento.startup.label": "新創知識",
  "bento.startup.description": "新創成長之路艱辛，避免走過其他人碰到的坑、知道怎樣與 VC 打交道",
  "bento.startup.coverAlt": "新創知識專區封面，台大創創拜訪活動現場",
  "bento.features.label": "WPORT 功能",
  "bento.features.description": "最新的功能、使用手冊、教學",
  "bento.features.coverAlt": "WPORT 功能專區封面，產品教學與實作現場",
  "archive.title": "所有文章 — Wport Blog",
  "archive.heading": "所有文章",
  "archive.subtitle": "分享觀點、紀錄思考",
  "archive.rss": "RSS 訂閱",
  "archive.searchPlaceholder": "搜尋文章…",
  "archive.empty": "找不到符合的文章。",
  "archive.allTags": "全部",
  "hub.otherTopics": "其他主題",
  "hub.description": "{tag}：這個主題底下的所有文章。",
  "home.recent.title": "最新文章",
  "home.topics.title": "依標籤瀏覽",
  "archive.pageLabel": "第 {n} 頁，共 {total} 頁",
  "archive.prev": "← 上一頁",
  "archive.next": "下一頁 →",
  "post.back": "返回文章列表",
  "post.followTitle": "追蹤 WPORT，不錯過每一場活動",
  "post.followDesc": "最新活動資訊、AI 工具教學、在台求職攻略，第一時間送到你面前。",
  "post.followEvents": "最新活動",
  "post.followSite": "WPORT 職航站",
  "post.related": "相關文章",
  "post.prev": "上一篇",
  "post.next": "下一篇",
  "post.toc": "目錄",
  "post.paginationNav": "文章導覽",
  "post.aiCopy.title": "AI 友善複製",
  "post.aiCopy.formatAria": "選擇格式",
  "post.aiCopy.open": "Open",
  "post.aiCopy.copyUrl": "Copy URL",
  "post.aiCopy.copyAsMd": "Copy as MD",
  "post.aiCopy.copyAsJson": "Copy as JSON",
  "post.aiCopy.openMdTitle": "在新分頁開啟 Markdown 原文",
  "post.aiCopy.openMdAria": "開啟 Markdown 原文",
  "post.aiCopy.openJsonTitle": "在新分頁開啟 JSON 原文",
  "post.aiCopy.openJsonAria": "開啟 JSON 原文",
  "post.aiCopy.copyMdUrlTitle": "複製 Markdown 連結",
  "post.aiCopy.copyMdUrlAria": "複製 Markdown 連結",
  "post.aiCopy.copyMdContentTitle": "複製 Markdown 全文",
  "post.aiCopy.copyMdContentAria": "複製 Markdown 全文",
  "post.aiCopy.copyJsonUrlTitle": "複製 JSON 連結",
  "post.aiCopy.copyJsonUrlAria": "複製 JSON 連結",
  "post.aiCopy.copyJsonContentTitle": "複製 JSON 全文",
  "post.aiCopy.copyJsonContentAria": "複製 JSON 全文",
  "post.aiCopy.mdUrlToast": "已複製 MD 連結",
  "post.aiCopy.mdContentToast": "已複製 Markdown 全文",
  "post.aiCopy.jsonUrlToast": "已複製 JSON 連結",
  "post.aiCopy.jsonContentToast": "已複製 JSON 全文",
  "post.aiCopy.fail": "複製失敗，請稍後再試",
  "post.aiCopy.markdownAlternate": "Markdown 原文（AI 友善）",
  "post.share.title": "分享",
  "post.share.x": "分享到 X",
  "post.share.linkedin": "分享到 LinkedIn",
  "post.share.line": "分享到 LINE",
  "post.share.facebook": "分享到 Facebook",
  "post.share.threads": "分享到 Threads",
  "post.share.instagram": "分享到 Instagram",
  "post.share.copyLink": "複製連結",
  "post.share.copiedLink": "已複製連結",
  "post.share.copiedLinkInstagram": "已複製連結，請貼到 Instagram",
  "post.code.copy": "複製",
  "post.code.copied": "已複製",
  "post.code.copiedToast": "已複製到剪貼簿",
  "post.code.copyFail": "複製失敗，請手動選取",
  "post.backToTop": "回到最上方",
  "layout.siteName": "WPORT 職航站",
  "layout.defaultDescription":
    "WPORT 職航站｜專為僑外生打造的台灣求職資源，提供求職攻略、工作許可指南、履歷工具與職缺媒合。",
};

const enUS: UiDict = {
  "nav.home": "Home",
  "nav.archive": "All posts",
  "nav.jobs": "Find jobs",
  "nav.language": "Language",
  "footer.about": "About us",
  "footer.contact": "Contact us",
  "footer.siteLinks": "Site links",
  "footer.socials": "WPORT official social links",
  "footer.copyright": "© {year} WPORT Hotfire Digital Co., Ltd.",
  "footer.facebook.alt": "WPORT Facebook page icon",
  "footer.facebook.aria": "Visit the official WPORT Facebook page",
  "footer.instagram.alt": "WPORT Instagram icon",
  "footer.instagram.aria": "Follow WPORT on Instagram",
  "footer.tiktok.alt": "WPORT TikTok icon",
  "footer.tiktok.aria": "Watch the latest WPORT TikTok videos",
  "footer.youtube.alt": "WPORT YouTube icon",
  "footer.youtube.aria": "Subscribe to the WPORT YouTube channel",
  "footer.linkedin.alt": "WPORT LinkedIn company page icon",
  "footer.linkedin.aria": "Connect with WPORT on LinkedIn",
  "home.title": "Wport Blog — Study & career guide for overseas students in Taiwan",
  "home.description":
    "Resources for overseas students in Taiwan: point system, AI courses, internships, and work permits. Learn from first-hand guides and plan your career path.",
  "home.badge": "Built for overseas students in Taiwan",
  "home.h1.line1": "Overseas students in Taiwan",
  "home.h1.line2": "Complete study & career guide",
  "home.h2":
    "From the point system and AI courses to internships and work permits, Wport gathers first-hand insights and practical experience so you can study, work, and stay in Taiwan with confidence.",
  "home.cta.archive": "Browse all posts →",
  "home.cta.popular": "Popular posts",
  "home.popular.label": "POPULAR",
  "home.popular.title": "Popular posts",
  "home.popular.seeAll": "See all →",
  "home.empty": "No posts yet.",
  "bento.aria": "Browse posts by topic",
  "bento.label": "EXPLORE",
  "bento.title": "Find posts by topic",
  "bento.subtitle":
    "From staying in Taiwan and AI hands-on to fundraising and WPORT features, jump straight to what you need.",
  "bento.cta": "Explore →",
  "bento.count": "{n} posts",
  "bento.overseasStudents.label": "Overseas student guide",
  "bento.overseasStudents.description":
    "Clear explainers on staying and working in Taiwan so regulations feel less overwhelming.",
  "bento.overseasStudents.coverAlt": "Cover for the overseas student guide section, career and regulation events",
  "bento.ai.label": "AI skills",
  "bento.ai.description": "Break down AI tools and workflows that level up your career skills.",
  "bento.ai.coverAlt": "Cover for the AI skills section, Charging Station hands-on workshop",
  "bento.startup.label": "Startup knowledge",
  "bento.startup.description": "Avoid common pitfalls on the startup path and learn how to work with VCs.",
  "bento.startup.coverAlt": "Cover for the startup knowledge section, NTUTEC visit",
  "bento.features.label": "WPORT features",
  "bento.features.description": "Latest product features, manuals, and how-to guides.",
  "bento.features.coverAlt": "Cover for the WPORT features section, product workshop",
  "archive.title": "All posts — Wport Blog",
  "archive.heading": "All posts",
  "archive.subtitle": "Share perspectives, record thinking",
  "archive.rss": "RSS feed",
  "archive.searchPlaceholder": "Search posts…",
  "archive.empty": "No matching posts found.",
  "archive.allTags": "All",
  "hub.otherTopics": "Other topics",
  "hub.description": "{tag}: every post in this topic.",
  "home.recent.title": "Latest posts",
  "home.topics.title": "Browse by tag",
  "archive.pageLabel": "Page {n} of {total}",
  "archive.prev": "← Previous",
  "archive.next": "Next →",
  "post.back": "Back to posts",
  "post.followTitle": "Follow WPORT so you never miss an event",
  "post.followDesc": "Event updates, AI tool guides, and job-search tips for staying in Taiwan, delivered first.",
  "post.followEvents": "Latest events",
  "post.followSite": "WPORT Job Station",
  "post.related": "Related posts",
  "post.prev": "Previous",
  "post.next": "Next",
  "post.toc": "Contents",
  "post.paginationNav": "Post navigation",
  "post.aiCopy.title": "AI-friendly copy",
  "post.aiCopy.formatAria": "Choose format",
  "post.aiCopy.open": "Open",
  "post.aiCopy.copyUrl": "Copy URL",
  "post.aiCopy.copyAsMd": "Copy as MD",
  "post.aiCopy.copyAsJson": "Copy as JSON",
  "post.aiCopy.openMdTitle": "Open Markdown source in a new tab",
  "post.aiCopy.openMdAria": "Open Markdown source",
  "post.aiCopy.openJsonTitle": "Open JSON source in a new tab",
  "post.aiCopy.openJsonAria": "Open JSON source",
  "post.aiCopy.copyMdUrlTitle": "Copy Markdown URL",
  "post.aiCopy.copyMdUrlAria": "Copy Markdown URL",
  "post.aiCopy.copyMdContentTitle": "Copy full Markdown",
  "post.aiCopy.copyMdContentAria": "Copy full Markdown",
  "post.aiCopy.copyJsonUrlTitle": "Copy JSON URL",
  "post.aiCopy.copyJsonUrlAria": "Copy JSON URL",
  "post.aiCopy.copyJsonContentTitle": "Copy full JSON",
  "post.aiCopy.copyJsonContentAria": "Copy full JSON",
  "post.aiCopy.mdUrlToast": "Markdown URL copied",
  "post.aiCopy.mdContentToast": "Full Markdown copied",
  "post.aiCopy.jsonUrlToast": "JSON URL copied",
  "post.aiCopy.jsonContentToast": "Full JSON copied",
  "post.aiCopy.fail": "Copy failed. Please try again.",
  "post.aiCopy.markdownAlternate": "Markdown source (AI-friendly)",
  "post.share.title": "Share",
  "post.share.x": "Share on X",
  "post.share.linkedin": "Share on LinkedIn",
  "post.share.line": "Share on LINE",
  "post.share.facebook": "Share on Facebook",
  "post.share.threads": "Share on Threads",
  "post.share.instagram": "Share on Instagram",
  "post.share.copyLink": "Copy link",
  "post.share.copiedLink": "Link copied",
  "post.share.copiedLinkInstagram": "Link copied. Paste it on Instagram.",
  "post.code.copy": "Copy",
  "post.code.copied": "Copied",
  "post.code.copiedToast": "Copied to clipboard",
  "post.code.copyFail": "Copy failed. Please select manually.",
  "post.backToTop": "Back to top",
  "layout.siteName": "WPORT Job Station",
  "layout.defaultDescription":
    "WPORT Job Station | Career resources for overseas students in Taiwan: job tips, work permits, resumes, and job matching.",
};

const idID: UiDict = {
  "nav.home": "Beranda",
  "nav.archive": "Semua artikel",
  "nav.jobs": "Cari kerja",
  "nav.language": "Bahasa",
  "footer.about": "Tentang kami",
  "footer.contact": "Hubungi kami",
  "footer.siteLinks": "Tautan situs",
  "footer.socials": "Tautan media sosial resmi WPORT",
  "footer.copyright": "© {year} WPORT Hotfire Digital Co., Ltd.",
  "footer.facebook.alt": "Ikon halaman Facebook WPORT",
  "footer.facebook.aria": "Kunjungi halaman Facebook resmi WPORT",
  "footer.instagram.alt": "Ikon Instagram WPORT",
  "footer.instagram.aria": "Ikuti WPORT di Instagram",
  "footer.tiktok.alt": "Ikon TikTok WPORT",
  "footer.tiktok.aria": "Tonton video TikTok terbaru WPORT",
  "footer.youtube.alt": "Ikon YouTube WPORT",
  "footer.youtube.aria": "Berlangganan saluran YouTube WPORT",
  "footer.linkedin.alt": "Ikon halaman perusahaan LinkedIn WPORT",
  "footer.linkedin.aria": "Terhubung dengan WPORT di LinkedIn",
  "home.title": "Wport Blog — Panduan studi & karier untuk mahasiswa luar negeri di Taiwan",
  "home.description":
    "Sumber daya untuk mahasiswa luar negeri di Taiwan: sistem poin, kursus AI, magang, dan izin kerja. Pelajari panduan langsung dan rencanakan karier Anda.",
  "home.badge": "Dibuat untuk mahasiswa luar negeri di Taiwan",
  "home.h1.line1": "Mahasiswa luar negeri di Taiwan",
  "home.h1.line2": "Panduan studi & karier lengkap",
  "home.h2":
    "Dari sistem poin dan kursus AI hingga magang dan izin kerja, Wport mengumpulkan wawasan langsung dan pengalaman praktis agar Anda bisa belajar, bekerja, dan tinggal di Taiwan dengan percaya diri.",
  "home.cta.archive": "Jelajahi semua artikel →",
  "home.cta.popular": "Artikel populer",
  "home.popular.label": "POPULAR",
  "home.popular.title": "Artikel populer",
  "home.popular.seeAll": "Lihat semua →",
  "home.empty": "Belum ada artikel.",
  "bento.aria": "Jelajahi artikel berdasarkan topik",
  "bento.label": "EXPLORE",
  "bento.title": "Temukan artikel berdasarkan topik",
  "bento.subtitle":
    "Dari tinggal di Taiwan dan praktik AI hingga penggalangan dana serta fitur WPORT, langsung ke yang Anda butuhkan.",
  "bento.cta": "Masuk ke topik →",
  "bento.count": "{n} artikel",
  "bento.overseasStudents.label": "Panduan mahasiswa luar negeri",
  "bento.overseasStudents.description":
    "Penjelasan jelas tentang tinggal dan bekerja di Taiwan agar regulasi tidak membingungkan.",
  "bento.overseasStudents.coverAlt": "Sampul panduan mahasiswa luar negeri, acara karier dan regulasi",
  "bento.ai.label": "Keterampilan AI",
  "bento.ai.description": "Uraikan alat dan alur AI yang meningkatkan kemampuan karier Anda.",
  "bento.ai.coverAlt": "Sampul keterampilan AI, lokakarya Charging Station",
  "bento.startup.label": "Pengetahuan startup",
  "bento.startup.description": "Hindari jebakan umum di jalur startup dan pelajari cara berurusan dengan VC.",
  "bento.startup.coverAlt": "Sampul pengetahuan startup, kunjungan NTUTEC",
  "bento.features.label": "Fitur WPORT",
  "bento.features.description": "Fitur produk terbaru, manual, dan panduan penggunaan.",
  "bento.features.coverAlt": "Sampul fitur WPORT, lokakarya produk",
  "archive.title": "Semua artikel — Wport Blog",
  "archive.heading": "Semua artikel",
  "archive.subtitle": "Berbagi sudut pandang, mencatat pemikiran",
  "archive.rss": "Langganan RSS",
  "archive.searchPlaceholder": "Cari artikel…",
  "archive.empty": "Tidak ada artikel yang cocok.",
  "archive.allTags": "Semua",
  "hub.otherTopics": "Topik lain",
  "hub.description": "{tag}: semua artikel dalam topik ini.",
  "home.recent.title": "Artikel terbaru",
  "home.topics.title": "Telusuri berdasarkan tag",
  "archive.pageLabel": "Halaman {n} dari {total}",
  "archive.prev": "← Sebelumnya",
  "archive.next": "Berikutnya →",
  "post.back": "Kembali ke daftar artikel",
  "post.followTitle": "Ikuti WPORT agar tidak ketinggalan acara",
  "post.followDesc": "Info acara, panduan AI, dan tips mencari kerja di Taiwan, langsung ke Anda.",
  "post.followEvents": "Acara terbaru",
  "post.followSite": "WPORT Job Station",
  "post.related": "Artikel terkait",
  "post.prev": "Sebelumnya",
  "post.next": "Berikutnya",
  "post.toc": "Daftar isi",
  "post.paginationNav": "Navigasi artikel",
  "post.aiCopy.title": "Salin ramah AI",
  "post.aiCopy.formatAria": "Pilih format",
  "post.aiCopy.open": "Open",
  "post.aiCopy.copyUrl": "Copy URL",
  "post.aiCopy.copyAsMd": "Copy as MD",
  "post.aiCopy.copyAsJson": "Copy as JSON",
  "post.aiCopy.openMdTitle": "Buka sumber Markdown di tab baru",
  "post.aiCopy.openMdAria": "Buka sumber Markdown",
  "post.aiCopy.openJsonTitle": "Buka sumber JSON di tab baru",
  "post.aiCopy.openJsonAria": "Buka sumber JSON",
  "post.aiCopy.copyMdUrlTitle": "Salin URL Markdown",
  "post.aiCopy.copyMdUrlAria": "Salin URL Markdown",
  "post.aiCopy.copyMdContentTitle": "Salin Markdown lengkap",
  "post.aiCopy.copyMdContentAria": "Salin Markdown lengkap",
  "post.aiCopy.copyJsonUrlTitle": "Salin URL JSON",
  "post.aiCopy.copyJsonUrlAria": "Salin URL JSON",
  "post.aiCopy.copyJsonContentTitle": "Salin JSON lengkap",
  "post.aiCopy.copyJsonContentAria": "Salin JSON lengkap",
  "post.aiCopy.mdUrlToast": "URL Markdown disalin",
  "post.aiCopy.mdContentToast": "Markdown lengkap disalin",
  "post.aiCopy.jsonUrlToast": "URL JSON disalin",
  "post.aiCopy.jsonContentToast": "JSON lengkap disalin",
  "post.aiCopy.fail": "Gagal menyalin. Coba lagi.",
  "post.aiCopy.markdownAlternate": "Sumber Markdown (ramah AI)",
  "post.share.title": "Bagikan",
  "post.share.x": "Bagikan ke X",
  "post.share.linkedin": "Bagikan ke LinkedIn",
  "post.share.line": "Bagikan ke LINE",
  "post.share.facebook": "Bagikan ke Facebook",
  "post.share.threads": "Bagikan ke Threads",
  "post.share.instagram": "Bagikan ke Instagram",
  "post.share.copyLink": "Salin tautan",
  "post.share.copiedLink": "Tautan disalin",
  "post.share.copiedLinkInstagram": "Tautan disalin. Tempel ke Instagram.",
  "post.code.copy": "Salin",
  "post.code.copied": "Disalin",
  "post.code.copiedToast": "Disalin ke clipboard",
  "post.code.copyFail": "Gagal menyalin. Silakan pilih manual.",
  "post.backToTop": "Kembali ke atas",
  "layout.siteName": "WPORT Job Station",
  "layout.defaultDescription":
    "WPORT Job Station | Sumber karier untuk mahasiswa luar negeri di Taiwan: tips kerja, izin kerja, resume, dan pencocokan lowongan.",
};

const viVN: UiDict = {
  "nav.home": "Trang chủ",
  "nav.archive": "Tất cả bài viết",
  "nav.jobs": "Tìm việc",
  "nav.language": "Ngôn ngữ",
  "footer.about": "Về chúng tôi",
  "footer.contact": "Liên hệ",
  "footer.siteLinks": "Liên kết trang",
  "footer.socials": "Liên kết mạng xã hội chính thức của WPORT",
  "footer.copyright": "© {year} WPORT Hotfire Digital Co., Ltd.",
  "footer.facebook.alt": "Biểu tượng trang Facebook WPORT",
  "footer.facebook.aria": "Đến trang Facebook chính thức của WPORT",
  "footer.instagram.alt": "Biểu tượng Instagram WPORT",
  "footer.instagram.aria": "Theo dõi WPORT trên Instagram",
  "footer.tiktok.alt": "Biểu tượng TikTok WPORT",
  "footer.tiktok.aria": "Xem video TikTok mới nhất của WPORT",
  "footer.youtube.alt": "Biểu tượng YouTube WPORT",
  "footer.youtube.aria": "Đăng ký kênh YouTube WPORT",
  "footer.linkedin.alt": "Biểu tượng trang LinkedIn doanh nghiệp WPORT",
  "footer.linkedin.aria": "Kết nối với WPORT trên LinkedIn",
  "home.title": "Wport Blog — Hướng dẫn học tập & sự nghiệp cho du học sinh tại Đài Loan",
  "home.description":
    "Tài nguyên dành cho du học sinh tại Đài Loan: hệ điểm, khóa AI, thực tập và giấy phép lao động. Học từ hướng dẫn thực tế và lên kế hoạch sự nghiệp.",
  "home.badge": "Dành cho du học sinh tại Đài Loan",
  "home.h1.line1": "Du học sinh tại Đài Loan",
  "home.h1.line2": "Hướng dẫn học tập & sự nghiệp đầy đủ",
  "home.h2":
    "Từ hệ điểm, khóa AI đến thực tập và giấy phép lao động, Wport tổng hợp thông tin thực tế và kinh nghiệm để bạn học tập, tìm việc và ở lại Đài Loan suôn sẻ.",
  "home.cta.archive": "Xem tất cả bài viết →",
  "home.cta.popular": "Bài viết phổ biến",
  "home.popular.label": "POPULAR",
  "home.popular.title": "Bài viết phổ biến",
  "home.popular.seeAll": "Xem tất cả →",
  "home.empty": "Chưa có bài viết.",
  "bento.aria": "Duyệt bài viết theo chủ đề",
  "bento.label": "EXPLORE",
  "bento.title": "Tìm bài viết theo chủ đề",
  "bento.subtitle": "Từ ở lại Đài Loan, thực hành AI đến gọi vốn và tính năng WPORT, nhảy thẳng tới điều bạn cần.",
  "bento.cta": "Vào chuyên mục →",
  "bento.count": "{n} bài",
  "bento.overseasStudents.label": "Hướng dẫn du học sinh",
  "bento.overseasStudents.description": "Giải thích rõ về ở lại và làm việc tại Đài Loan để quy định đỡ gây đau đầu.",
  "bento.overseasStudents.coverAlt": "Ảnh bìa hướng dẫn du học sinh, sự kiện nghề nghiệp và quy định",
  "bento.ai.label": "Kỹ năng AI",
  "bento.ai.description": "Phân tích công cụ và quy trình AI giúp nâng cấp năng lực nghề nghiệp.",
  "bento.ai.coverAlt": "Ảnh bìa kỹ năng AI, workshop Charging Station",
  "bento.startup.label": "Kiến thức startup",
  "bento.startup.description": "Tránh các hố thường gặp trên đường startup và học cách làm việc với VC.",
  "bento.startup.coverAlt": "Ảnh bìa kiến thức startup, chuyến thăm NTUTEC",
  "bento.features.label": "Tính năng WPORT",
  "bento.features.description": "Tính năng mới, hướng dẫn sử dụng và tài liệu sản phẩm.",
  "bento.features.coverAlt": "Ảnh bìa tính năng WPORT, workshop sản phẩm",
  "archive.title": "Tất cả bài viết — Wport Blog",
  "archive.heading": "Tất cả bài viết",
  "archive.subtitle": "Chia sẻ góc nhìn, ghi lại suy nghĩ",
  "archive.rss": "Theo dõi RSS",
  "archive.searchPlaceholder": "Tìm bài viết…",
  "archive.empty": "Không tìm thấy bài viết phù hợp.",
  "archive.allTags": "Tất cả",
  "hub.otherTopics": "Chủ đề khác",
  "hub.description": "{tag}: tất cả bài viết trong chủ đề này.",
  "home.recent.title": "Bài viết mới nhất",
  "home.topics.title": "Duyệt theo thẻ",
  "archive.pageLabel": "Trang {n} / {total}",
  "archive.prev": "← Trước",
  "archive.next": "Sau →",
  "post.back": "Quay lại danh sách bài viết",
  "post.followTitle": "Theo dõi WPORT để không bỏ lỡ sự kiện",
  "post.followDesc": "Thông tin sự kiện, hướng dẫn AI và mẹo tìm việc tại Đài Loan, đến sớm với bạn.",
  "post.followEvents": "Sự kiện mới nhất",
  "post.followSite": "WPORT Job Station",
  "post.related": "Bài viết liên quan",
  "post.prev": "Trước",
  "post.next": "Sau",
  "post.toc": "Mục lục",
  "post.paginationNav": "Điều hướng bài viết",
  "post.aiCopy.title": "Sao chép thân thiện AI",
  "post.aiCopy.formatAria": "Chọn định dạng",
  "post.aiCopy.open": "Open",
  "post.aiCopy.copyUrl": "Copy URL",
  "post.aiCopy.copyAsMd": "Copy as MD",
  "post.aiCopy.copyAsJson": "Copy as JSON",
  "post.aiCopy.openMdTitle": "Mở nguồn Markdown trong tab mới",
  "post.aiCopy.openMdAria": "Mở nguồn Markdown",
  "post.aiCopy.openJsonTitle": "Mở nguồn JSON trong tab mới",
  "post.aiCopy.openJsonAria": "Mở nguồn JSON",
  "post.aiCopy.copyMdUrlTitle": "Sao chép URL Markdown",
  "post.aiCopy.copyMdUrlAria": "Sao chép URL Markdown",
  "post.aiCopy.copyMdContentTitle": "Sao chép toàn bộ Markdown",
  "post.aiCopy.copyMdContentAria": "Sao chép toàn bộ Markdown",
  "post.aiCopy.copyJsonUrlTitle": "Sao chép URL JSON",
  "post.aiCopy.copyJsonUrlAria": "Sao chép URL JSON",
  "post.aiCopy.copyJsonContentTitle": "Sao chép toàn bộ JSON",
  "post.aiCopy.copyJsonContentAria": "Sao chép toàn bộ JSON",
  "post.aiCopy.mdUrlToast": "Đã sao chép URL Markdown",
  "post.aiCopy.mdContentToast": "Đã sao chép toàn bộ Markdown",
  "post.aiCopy.jsonUrlToast": "Đã sao chép URL JSON",
  "post.aiCopy.jsonContentToast": "Đã sao chép toàn bộ JSON",
  "post.aiCopy.fail": "Sao chép thất bại. Vui lòng thử lại.",
  "post.aiCopy.markdownAlternate": "Nguồn Markdown (thân thiện AI)",
  "post.share.title": "Chia sẻ",
  "post.share.x": "Chia sẻ lên X",
  "post.share.linkedin": "Chia sẻ lên LinkedIn",
  "post.share.line": "Chia sẻ lên LINE",
  "post.share.facebook": "Chia sẻ lên Facebook",
  "post.share.threads": "Chia sẻ lên Threads",
  "post.share.instagram": "Chia sẻ lên Instagram",
  "post.share.copyLink": "Sao chép liên kết",
  "post.share.copiedLink": "Đã sao chép liên kết",
  "post.share.copiedLinkInstagram": "Đã sao chép liên kết. Hãy dán vào Instagram.",
  "post.code.copy": "Sao chép",
  "post.code.copied": "Đã sao chép",
  "post.code.copiedToast": "Đã sao chép vào clipboard",
  "post.code.copyFail": "Sao chép thất bại. Vui lòng chọn thủ công.",
  "post.backToTop": "Về đầu trang",
  "layout.siteName": "WPORT Job Station",
  "layout.defaultDescription":
    "WPORT Job Station | Tài nguyên nghề nghiệp cho du học sinh tại Đài Loan: mẹo tìm việc, giấy phép lao động, hồ sơ và kết nối việc làm.",
};

const thTH: UiDict = {
  "nav.home": "หน้าแรก",
  "nav.archive": "บทความทั้งหมด",
  "nav.jobs": "หางาน",
  "nav.language": "ภาษา",
  "footer.about": "เกี่ยวกับเรา",
  "footer.contact": "ติดต่อเรา",
  "footer.siteLinks": "ลิงก์เว็บไซต์",
  "footer.socials": "ลิงก์โซเชียลอย่างเป็นทางการของ WPORT",
  "footer.copyright": "© {year} WPORT Hotfire Digital Co., Ltd.",
  "footer.facebook.alt": "ไอคอนเพจ Facebook ของ WPORT",
  "footer.facebook.aria": "ไปที่เพจ Facebook อย่างเป็นทางการของ WPORT",
  "footer.instagram.alt": "ไอคอน Instagram ของ WPORT",
  "footer.instagram.aria": "ติดตาม WPORT บน Instagram",
  "footer.tiktok.alt": "ไอคอน TikTok ของ WPORT",
  "footer.tiktok.aria": "ชมวิดีโอ TikTok ล่าสุดของ WPORT",
  "footer.youtube.alt": "ไอคอน YouTube ของ WPORT",
  "footer.youtube.aria": "สมัครรับช่อง YouTube ของ WPORT",
  "footer.linkedin.alt": "ไอคอนเพจ LinkedIn ของบริษัท WPORT",
  "footer.linkedin.aria": "เชื่อมต่อกับ WPORT บน LinkedIn",
  "home.title": "Wport Blog — คู่มือเรียนและทำงานสำหรับนักศึกษาต่างชาติในไต้หวัน",
  "home.description":
    "แหล่งข้อมูลสำหรับนักศึกษาต่างชาติในไต้หวัน: ระบบคะแนน คอร์ส AI ฝึกงาน และใบอนุญาตทำงาน อ่านจากประสบการณ์จริงเพื่อวางแผนอนาคต",
  "home.badge": "สร้างเพื่อนักศึกษาต่างชาติในไต้หวัน",
  "home.h1.line1": "นักศึกษาต่างชาติในไต้หวัน",
  "home.h1.line2": "คู่มือเรียนและทำงานฉบับสมบูรณ์",
  "home.h2":
    "จากระบบคะแนนและคอร์ส AI ไปจนถึงฝึกงานและใบอนุญาตทำงาน Wport รวบรวมข้อมูลและประสบการณ์จริง เพื่อให้คุณเรียน หางาน และอยู่ต่อในไต้หวันได้อย่างมั่นใจ",
  "home.cta.archive": "ดูบทความทั้งหมด →",
  "home.cta.popular": "บทความยอดนิยม",
  "home.popular.label": "POPULAR",
  "home.popular.title": "บทความยอดนิยม",
  "home.popular.seeAll": "ดูทั้งหมด →",
  "home.empty": "ยังไม่มีบทความ",
  "bento.aria": "สำรวจบทความตามหัวข้อ",
  "bento.label": "EXPLORE",
  "bento.title": "ค้นหาบทความตามหัวข้อ",
  "bento.subtitle":
    "ตั้งแต่การอยู่ต่อในไต้หวัน งาน AI ภาคปฏิบัติ ไปจนถึงการระดมทุนและฟีเจอร์ WPORT ไปที่สิ่งที่คุณต้องการได้ทันที",
  "bento.cta": "เข้าสู่หมวด →",
  "bento.count": "{n} บทความ",
  "bento.overseasStudents.label": "คู่มือนักศึกษาต่างชาติ",
  "bento.overseasStudents.description": "อธิบายการอยู่ต่อและทำงานในไต้หวันให้เข้าใจง่าย ไม่ต้องปวดหัวกับกฎระเบียบ",
  "bento.overseasStudents.coverAlt": "ภาพปกคู่มือนักศึกษาต่างชาติ งานอาชีพและกฎระเบียบ",
  "bento.ai.label": "ทักษะ AI",
  "bento.ai.description": "แกะเครื่องมือและเวิร์กโฟลว์ AI ที่ช่วยเสริมทักษะอาชีพของคุณ",
  "bento.ai.coverAlt": "ภาพปกทักษะ AI เวิร์กช็อป Charging Station",
  "bento.startup.label": "ความรู้สตาร์ทอัพ",
  "bento.startup.description": "เลี่ยงหลุมพรางบนเส้นทางสตาร์ทอัพ และเรียนรู้วิธีทำงานกับ VC",
  "bento.startup.coverAlt": "ภาพปกความรู้สตาร์ทอัพ การเยี่ยมชม NTUTEC",
  "bento.features.label": "ฟีเจอร์ WPORT",
  "bento.features.description": "ฟีเจอร์ล่าสุด คู่มือการใช้งาน และวิธีใช้",
  "bento.features.coverAlt": "ภาพปกฟีเจอร์ WPORT เวิร์กช็อปผลิตภัณฑ์",
  "archive.title": "บทความทั้งหมด — Wport Blog",
  "archive.heading": "บทความทั้งหมด",
  "archive.subtitle": "แบ่งปันมุมมอง บันทึกความคิด",
  "archive.rss": "ติดตาม RSS",
  "archive.searchPlaceholder": "ค้นหาบทความ…",
  "archive.empty": "ไม่พบบทความที่ตรงกัน",
  "archive.allTags": "ทั้งหมด",
  "hub.otherTopics": "หัวข้ออื่น",
  "hub.description": "{tag}: บทความทั้งหมดในหัวข้อนี้",
  "home.recent.title": "บทความล่าสุด",
  "home.topics.title": "เรียกดูตามแท็ก",
  "archive.pageLabel": "หน้า {n} จาก {total}",
  "archive.prev": "← ก่อนหน้า",
  "archive.next": "ถัดไป →",
  "post.back": "กลับไปรายการบทความ",
  "post.followTitle": "ติดตาม WPORT เพื่อไม่พลาดกิจกรรม",
  "post.followDesc": "อัปเดตกิจกรรม คู่มือ AI และเคล็ดลับหางานในไต้หวัน ส่งถึงคุณก่อนใคร",
  "post.followEvents": "กิจกรรมล่าสุด",
  "post.followSite": "WPORT Job Station",
  "post.related": "บทความที่เกี่ยวข้อง",
  "post.prev": "ก่อนหน้า",
  "post.next": "ถัดไป",
  "post.toc": "สารบัญ",
  "post.paginationNav": "นำทางบทความ",
  "post.aiCopy.title": "คัดลอกแบบ AI-friendly",
  "post.aiCopy.formatAria": "เลือกรูปแบบ",
  "post.aiCopy.open": "Open",
  "post.aiCopy.copyUrl": "Copy URL",
  "post.aiCopy.copyAsMd": "Copy as MD",
  "post.aiCopy.copyAsJson": "Copy as JSON",
  "post.aiCopy.openMdTitle": "เปิดแหล่ง Markdown ในแท็บใหม่",
  "post.aiCopy.openMdAria": "เปิดแหล่ง Markdown",
  "post.aiCopy.openJsonTitle": "เปิดแหล่ง JSON ในแท็บใหม่",
  "post.aiCopy.openJsonAria": "เปิดแหล่ง JSON",
  "post.aiCopy.copyMdUrlTitle": "คัดลอก URL Markdown",
  "post.aiCopy.copyMdUrlAria": "คัดลอก URL Markdown",
  "post.aiCopy.copyMdContentTitle": "คัดลอก Markdown ทั้งไฟล์",
  "post.aiCopy.copyMdContentAria": "คัดลอก Markdown ทั้งไฟล์",
  "post.aiCopy.copyJsonUrlTitle": "คัดลอก URL JSON",
  "post.aiCopy.copyJsonUrlAria": "คัดลอก URL JSON",
  "post.aiCopy.copyJsonContentTitle": "คัดลอก JSON ทั้งไฟล์",
  "post.aiCopy.copyJsonContentAria": "คัดลอก JSON ทั้งไฟล์",
  "post.aiCopy.mdUrlToast": "คัดลอก URL Markdown แล้ว",
  "post.aiCopy.mdContentToast": "คัดลอก Markdown ทั้งไฟล์แล้ว",
  "post.aiCopy.jsonUrlToast": "คัดลอก URL JSON แล้ว",
  "post.aiCopy.jsonContentToast": "คัดลอก JSON ทั้งไฟล์แล้ว",
  "post.aiCopy.fail": "คัดลอกไม่สำเร็จ กรุณาลองใหม่",
  "post.aiCopy.markdownAlternate": "แหล่ง Markdown (AI-friendly)",
  "post.share.title": "แชร์",
  "post.share.x": "แชร์ไปยัง X",
  "post.share.linkedin": "แชร์ไปยัง LinkedIn",
  "post.share.line": "แชร์ไปยัง LINE",
  "post.share.facebook": "แชร์ไปยัง Facebook",
  "post.share.threads": "แชร์ไปยัง Threads",
  "post.share.instagram": "แชร์ไปยัง Instagram",
  "post.share.copyLink": "คัดลอกลิงก์",
  "post.share.copiedLink": "คัดลอกลิงก์แล้ว",
  "post.share.copiedLinkInstagram": "คัดลอกลิงก์แล้ว กรุณาวางใน Instagram",
  "post.code.copy": "คัดลอก",
  "post.code.copied": "คัดลอกแล้ว",
  "post.code.copiedToast": "คัดลอกไปยังคลิปบอร์ดแล้ว",
  "post.code.copyFail": "คัดลอกไม่สำเร็จ กรุณาเลือกเอง",
  "post.backToTop": "กลับขึ้นด้านบน",
  "layout.siteName": "WPORT Job Station",
  "layout.defaultDescription":
    "WPORT Job Station | แหล่งข้อมูลอาชีพสำหรับนักศึกษาต่างชาติในไต้หวัน: เคล็ดลับหางาน ใบอนุญาตทำงาน เรซูเม่ และการจับคู่งาน",
};

export const ui: Record<Locale, UiDict> = {
  "zh-TW": zhTW,
  "en-US": enUS,
  "id-ID": idID,
  "vi-VN": viVN,
  "th-TH": thTH,
};

export function t(locale: Locale, key: UiKey, vars?: Record<string, string | number>): string {
  const dict = ui[locale] ?? ui[defaultLocale];
  let value = dict[key] ?? ui[defaultLocale][key] ?? key;
  if (vars) {
    for (const [name, replacement] of Object.entries(vars)) {
      value = value.replaceAll(`{${name}}`, String(replacement));
    }
  }
  return value;
}
