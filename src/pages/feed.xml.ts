import { BASE_PATH, SITE_ORIGIN } from "@/lib/llms-content";
import { defaultLocale } from "@/i18n/locales";
import { getPostsByLocale } from "@/lib/posts";
import { getCoverImageUrls } from "@/lib/cover-image";
import type { APIRoute } from "astro";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Best-effort MIME for <enclosure type>, which is a required attribute.
 * Cloudinary `f_auto` URLs carry no extension and negotiate the real format
 * per request, so jpeg is the honest fallback for "some raster image".
 */
function guessImageMime(url: string): string {
  const path = url.split("?")[0] ?? "";
  if (/\.png$/i.test(path)) return "image/png";
  if (/\.webp$/i.test(path)) return "image/webp";
  if (/\.avif$/i.test(path)) return "image/avif";
  if (/\.gif$/i.test(path)) return "image/gif";
  return "image/jpeg";
}

/**
 * Cover images for feed consumers. wport.me's homepage and footer read this
 * feed to render article cards, and cards without an image convert far worse.
 *
 * Emitted twice on purpose:
 *   - <media:content> / <media:thumbnail> — Media RSS, no bogus metadata needed
 *   - <enclosure> — classic RSS 2.0, what most simple readers actually parse
 *
 * `length` is unknown without fetching every asset; 0 is the conventional
 * placeholder and readers treat it as "size not advertised".
 */
function coverTags(cover: string | undefined): string {
  if (!cover) return "";
  const url = escapeXml(getCoverImageUrls(cover, "card").default);
  const mime = guessImageMime(cover);
  return `
      <enclosure url="${url}" length="0" type="${mime}"/>
      <media:content url="${url}" medium="image" type="${mime}"/>
      <media:thumbnail url="${url}"/>`;
}

export const GET: APIRoute = async () => {
  const postsMeta = await getPostsByLocale(defaultLocale);

  const feedUrl = `${SITE_ORIGIN}${BASE_PATH}/feed.xml`;
  const siteUrl = `${SITE_ORIGIN}${BASE_PATH}/`;

  const items = postsMeta
    .map((meta) => {
      const url = `${SITE_ORIGIN}${BASE_PATH}/posts/${meta.baseSlug}/`;
      const pubDate = meta.entry.data.publishDate.toUTCString();
      return `    <item>
      <title>${escapeXml(meta.entry.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(meta.entry.data.description)}</description>
      <pubDate>${pubDate}</pubDate>${coverTags(meta.entry.data.cover)}
    </item>`;
    })
    .join("\n");

  const stylesheetHref = `${BASE_PATH}/feed.xsl`;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${stylesheetHref}"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>WPORT 職航站｜Blog</title>
    <link>${siteUrl}</link>
    <description>專為僑外生打造的台灣求職資源與攻略</description>
    <language>zh-TW</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
