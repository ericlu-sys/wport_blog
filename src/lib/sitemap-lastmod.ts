/**
 * Build an absolute-URL -> lastmod map for @astrojs/sitemap.
 *
 * Runs inside astro.config.mjs, so it cannot use `astro:content`; it reads the
 * markdown frontmatter straight off disk instead. Drafts are skipped because
 * they never reach the build.
 *
 * `publishDate` is used as `lastmod`. It is the only date the collection tracks,
 * and an accurate publish date is what tells Google a URL is worth re-crawling.
 */

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const POSTS_DIR = join(process.cwd(), "src/content/posts");
/** Keyed by absolute URL to match what the sitemap integration emits. */
const BASE = "https://wport.me/blog";

/** Filename suffix -> URL segment. Mirrors src/i18n/locales.ts. */
const LOCALE_SEGMENTS: Record<string, string> = {
  en: "en",
  id: "id",
  vi: "vi",
  th: "th",
};

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/;
const PUBLISH_DATE = /^publishDate:\s*(.+?)\s*$/m;
const DRAFT_TRUE = /^draft:\s*true\s*$/m;

/** `foo-en` -> { baseSlug: "foo", segment: "en" }; `foo` -> { baseSlug: "foo", segment: "" }. */
function parseFilename(name: string): { baseSlug: string; segment: string } {
  const lastDash = name.lastIndexOf("-");
  if (lastDash !== -1) {
    const suffix = name.slice(lastDash + 1);
    if (suffix in LOCALE_SEGMENTS) {
      return { baseSlug: name.slice(0, lastDash), segment: LOCALE_SEGMENTS[suffix] };
    }
  }
  return { baseSlug: name, segment: "" };
}

function postPathname(baseSlug: string, segment: string): string {
  return segment ? `${BASE}/${segment}/posts/${baseSlug}/` : `${BASE}/posts/${baseSlug}/`;
}

export function buildLastmodMap(): Map<string, string> {
  const lastmod = new Map<string, string>();
  /** Newest post per locale segment, for the home and archive listing pages. */
  const newestBySegment = new Map<string, number>();

  let files: string[];
  try {
    files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  } catch {
    return lastmod;
  }

  for (const file of files) {
    const raw = readFileSync(join(POSTS_DIR, file), "utf-8");
    const frontmatter = FRONTMATTER.exec(raw)?.[1];
    if (!frontmatter || DRAFT_TRUE.test(frontmatter)) continue;

    const rawDate = PUBLISH_DATE.exec(frontmatter)?.[1]?.replace(/^["']|["']$/g, "");
    if (!rawDate) continue;
    const date = new Date(rawDate);
    if (Number.isNaN(date.getTime())) continue;

    const { baseSlug, segment } = parseFilename(file.replace(/\.md$/, ""));
    lastmod.set(postPathname(baseSlug, segment), date.toISOString());

    const previous = newestBySegment.get(segment) ?? 0;
    if (date.getTime() > previous) newestBySegment.set(segment, date.getTime());
  }

  // Listing pages are as fresh as their newest post.
  for (const [segment, time] of newestBySegment) {
    const prefix = segment ? `${BASE}/${segment}` : BASE;
    const iso = new Date(time).toISOString();
    lastmod.set(`${prefix}/`, iso);
    lastmod.set(`${prefix}/archive/`, iso);
  }

  return lastmod;
}
