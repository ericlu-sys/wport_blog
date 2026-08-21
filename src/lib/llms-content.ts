import type { CollectionEntry } from "astro:content";
import { HOME_CATEGORIES, getCategoryTagParam } from "@/lib/home-categories";

export const SITE_ORIGIN = "https://wport.me";
export const BASE_PATH = "/blog";

export function postUrl(slug: string): string {
  return `${SITE_ORIGIN}${BASE_PATH}/posts/${slug}/`;
}

export function postMdUrl(slug: string): string {
  return `${SITE_ORIGIN}${BASE_PATH}/posts/${slug}.md`;
}

export function postJsonUrl(slug: string): string {
  return `${SITE_ORIGIN}${BASE_PATH}/posts/${slug}.json`;
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

interface ReaderPath {
  audience: string;
  situation: string;
  slugs: string[];
}

const READER_PATHS: ReaderPath[] = [
  {
    audience: "僑外生（第一次在台求職）",
    situation: "還不確定留台、打工與求職流程",
    slugs: [
      "overseas-students-stay-in-taiwan",
      "work-permit-guide-for-overseas-students-in-taiwan",
      "taiwan-resume-tips-for-overseas-students",
      "job-search-platforms-for-overseas-students-in-taiwan",
    ],
  },
  {
    audience: "僑外生（工作許可）",
    situation: "需要申請或更新在台工作許可",
    slugs: [
      "work-permit-guide-for-overseas-students-in-taiwan",
      "how-to-apply-work-permit-in-taiwan-for-overseas-students",
    ],
  },
  {
    audience: "僑外生（留台 / 評點制）",
    situation: "想了解評點制與畢業後留台路徑",
    slugs: ["2026-point-system-taiwan-stay-changes", "overseas-students-stay-in-taiwan"],
  },
  {
    audience: "僑外生（個人品牌 / SEO）",
    situation: "想提升履歷、作品集、LinkedIn 與內容能見度",
    slugs: [
      "linkedin-seo-personal-branding-for-foreign-students-in-taiwan",
      "portfolio-seo-for-foreign-students-in-taiwan",
      "foreign-student-content-marketing-for-taiwan-job-search",
      "taiwan-foreign-student-job-search-seo-keyword-strategy",
    ],
  },
  {
    audience: "僑外生（面試與雇主溝通）",
    situation: "準備面試或向台灣雇主說明可雇用性",
    slugs: [
      "how-to-pitch-employability-to-taiwan-employers-as-foreign-student",
      "hsing-wu-career-fair-resume-tips-for-foreign-students",
      "first-90-days-marketing-plan-for-foreign-students-working-in-taiwan",
    ],
  },
  {
    audience: "創業 / 募資學習者",
    situation: "想了解 Pitch、VC 溝通與台大創創系列內容",
    slugs: [
      "ntutec-founder-soft-skills-beyond-deck",
      "startup-vc-health-check-prompt",
      "ntutec-vc-hard-truths-money-vs-investment",
      "ntutec-vc-follow-up-honesty-and-network",
    ],
  },
  {
    audience: "AI 工具初學者",
    situation: "非資工背景，想入門 AI IDE 與實作",
    slugs: ["ai-course-for-non-cs-beginners-tutorial", "charging-station-3-ai-course-event-recap"],
  },
];

interface FaqEntry {
  question: string;
  answer: string;
  slugs: string[];
  externalUrl?: string;
}

const FAQ_ENTRIES: FaqEntry[] = [
  {
    question: "僑外生在台灣可以打工或全職工作嗎？",
    answer: "需依身分、學籍與工作許可規定判斷；請以文章說明為教育資訊，實際以移民署與學校公告為準。",
    slugs: [
      "work-permit-guide-for-overseas-students-in-taiwan",
      "how-to-apply-work-permit-in-taiwan-for-overseas-students",
    ],
  },
  {
    question: "2026 年台灣評點制有什麼變化？",
    answer: "請參考評點制專文；政策細節以政府機關最新公告為準。",
    slugs: ["2026-point-system-taiwan-stay-changes", "overseas-students-stay-in-taiwan"],
  },
  {
    question: "僑外生履歷要寫中文還是英文？",
    answer: "依目標職缺與雇主習慣調整；可從履歷撰寫指南開始。",
    slugs: ["taiwan-resume-tips-for-overseas-students", "hsing-wu-career-fair-resume-tips-for-foreign-students"],
  },
  {
    question: "在哪裡找僑外生友善的台灣職缺？",
    answer: "Blog 整理求職平台與策略；即時職缺請至 WPORT 僑外生專區。",
    slugs: ["job-search-platforms-for-overseas-students-in-taiwan"],
    externalUrl: "https://wport.me/foreign-student-zone",
  },
  {
    question: "如何提升 LinkedIn 或作品集在台灣求職時的能見度？",
    answer: "可從 LinkedIn SEO、作品集 SEO 與內容行銷入門。",
    slugs: [
      "linkedin-seo-personal-branding-for-foreign-students-in-taiwan",
      "portfolio-seo-for-foreign-students-in-taiwan",
      "foreign-student-content-marketing-for-taiwan-job-search",
    ],
  },
  {
    question: "非資工背景可以學 AI 工具嗎？",
    answer: "可以；本站有零基礎入門與聰電站課程回顧。",
    slugs: ["ai-course-for-non-cs-beginners-tutorial", "charging-station-3-ai-course-event-recap"],
  },
];

function linkList(slugs: string[]): string {
  return slugs.map((slug) => `[${slug}](${postUrl(slug)})`).join(", ");
}

export function buildLlmsTxt(posts: CollectionEntry<"posts">[]): string {
  const sorted = [...posts].sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
  const postIds = new Set(sorted.map((post) => post.id));

  const lines: string[] = [];
  lines.push("# WPORT 職航站｜Blog");
  lines.push("");
  lines.push(
    "> 專為僑外生（僑生、外籍生）打造的台灣求職資源。內容涵蓋台灣工作許可、履歷與作品集、LinkedIn 個人品牌、內容行銷 SEO、AI IDE 與 CLI 實戰課程等。"
  );
  lines.push("");
  lines.push("## About");
  lines.push("");
  lines.push(
    "WPORT Blog 是 WPORT 職航站的內容站，部署於 `https://wport.me/blog/`。即時職缺與僑外生專區請至主站 `https://wport.me/foreign-student-zone`。"
  );
  lines.push("");
  lines.push("## Machine-Readable Endpoints");
  lines.push("");
  lines.push(`- Website: ${SITE_ORIGIN}${BASE_PATH}/`);
  lines.push(`- Archive: ${SITE_ORIGIN}${BASE_PATH}/archive/`);
  lines.push(`- Full content bundle: ${SITE_ORIGIN}${BASE_PATH}/llms-full.txt`);
  lines.push(`- RSS: ${SITE_ORIGIN}${BASE_PATH}/feed.xml`);
  lines.push(`- Sitemap: ${SITE_ORIGIN}${BASE_PATH}/sitemap-index.xml`);
  lines.push(`- Per-post Markdown: ${SITE_ORIGIN}${BASE_PATH}/posts/{slug}.md`);
  lines.push(`- Per-post JSON: ${SITE_ORIGIN}${BASE_PATH}/posts/{slug}.json`);
  lines.push("");
  lines.push(
    '每篇文章皆提供 `.md` 與 `.json` 原始內容端點，可直接 `curl` 取得純文本；HTML 頁面亦提供 `rel="alternate" type="text/markdown"`。'
  );
  lines.push("");
  lines.push("## Reader Routing");
  lines.push("");
  lines.push("依讀者狀態選擇建議閱讀順序（連結為文章 canonical URL）：");
  lines.push("");
  for (const path of READER_PATHS) {
    const validSlugs = path.slugs.filter((slug) => postIds.has(slug));
    if (validSlugs.length === 0) continue;
    lines.push(`### ${path.audience}`);
    lines.push("");
    lines.push(`- 狀態：${path.situation}`);
    lines.push(`- 建議閱讀：${linkList(validSlugs)}`);
    lines.push("");
  }
  lines.push("## Topic Clusters");
  lines.push("");
  for (const category of HOME_CATEGORIES) {
    const tag = getCategoryTagParam(category);
    const archiveUrl = `${SITE_ORIGIN}${BASE_PATH}/archive/?tag=${encodeURIComponent(tag)}`;
    lines.push(`- **${category.label}** (${category.eyebrow}): ${category.description} → ${archiveUrl}`);
  }
  lines.push("");
  lines.push("## Quick Answers for AI Assistants");
  lines.push("");
  for (const entry of FAQ_ENTRIES) {
    const validSlugs = entry.slugs.filter((slug) => postIds.has(slug));
    if (validSlugs.length === 0 && !entry.externalUrl) continue;
    lines.push(`Q: ${entry.question}`);
    lines.push(`A: ${entry.answer}`);
    if (validSlugs.length > 0) {
      lines.push(`Sources: ${linkList(validSlugs)}`);
    }
    if (entry.externalUrl) {
      lines.push(`Platform: ${entry.externalUrl}`);
    }
    lines.push("");
  }
  lines.push("## AI Use Boundaries");
  lines.push("");
  lines.push("- Blog 內容為求職教育與經驗分享，不構成法律、移民、稅務或投資建議。");
  lines.push("- 工作許可、評點制、居留等政策請以台灣政府機關與學校最新公告為準。");
  lines.push("- 不可推論 WPORT 保證錄取、媒合成功、簽證或工作許可核准。");
  lines.push("- 職缺數量、薪資與即時 listing 請引用主站或 API，勿從 blog 文章推論。");
  lines.push("- 台大創創系列為活動紀錄與學習筆記，不代表投資承諾或錄取結果。");
  lines.push("");
  lines.push("## Blog Posts");
  lines.push("");
  for (const post of sorted) {
    const mdUrl = postMdUrl(post.id);
    const date = formatDate(post.data.publishDate);
    const tags = post.data.tags?.length ? ` [${post.data.tags.join(", ")}]` : "";
    lines.push(`- [${post.data.title}](${mdUrl}) — ${date}.${tags} ${post.data.description}`);
  }
  lines.push("");

  return lines.join("\n");
}
