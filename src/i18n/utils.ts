import {
  defaultLocale,
  localeFileSuffix,
  localeFromPathPrefix,
  localePathPrefix,
  locales,
  type Locale,
  type PathPrefix,
  isPathPrefix,
} from "./locales";
import { t, type UiKey } from "./ui";

export { t };
export type { UiKey };

/**
 * Page URLs must carry a trailing slash. Astro builds with `format: "directory"`,
 * so every page lands at `<path>/index.html`, and Cloudflare Workers Assets runs
 * the default `html_handling: "auto-trailing-slash"`, which answers a slashless
 * request with a 307 to the slashed form. Emitting the slashless form left every
 * internal link, hreflang, and sitemap entry pointing at a URL that redirects.
 */
function withTrailingSlash(path: string): string {
  if (!path || path.endsWith("/")) return path;
  // Query strings and fragments are appended by callers, not routed.
  if (/[?#]/.test(path)) return path;
  // Asset paths (favicon.ico, foo.md) are real files, not directories.
  if (/\.[a-z0-9]+$/i.test(path)) return path;
  return `${path}/`;
}

/** Build a site path for a locale, respecting Astro `base` (/blog). */
export function localizedPath(locale: Locale, path = "/"): string {
  const baseUrl = import.meta.env.BASE_URL;
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const prefix = localePathPrefix[locale];
  const cleanPath = path.replace(/^\//, "");

  if (!prefix) {
    return withTrailingSlash(`${normalizedBase}${cleanPath}`);
  }

  if (!cleanPath) {
    return `${normalizedBase}${prefix}/`;
  }

  return withTrailingSlash(`${normalizedBase}${prefix}/${cleanPath}`);
}

/** Absolute canonical URL for a locale path. */
export function localizedCanonicalUrl(locale: Locale, path = "/"): string {
  const siteUrl = "https://wport.me";
  const relative = localizedPath(locale, path);
  // localizedPath already includes /blog base
  return `${siteUrl}${relative}`.replace(/([^:]\/)\/+/g, "$1");
}

export function jobsUrlForLocale(locale: Locale): string {
  const prefix = localePathPrefix[locale];
  if (!prefix) return "https://wport.me/jobs";
  return `https://wport.me/${prefix}/jobs`;
}

export function mainSitePath(locale: Locale, path: string): string {
  const prefix = localePathPrefix[locale];
  const clean = path.replace(/^\//, "");
  if (!prefix) return `https://wport.me/${clean}`;
  return `https://wport.me/${prefix}/${clean}`;
}

/**
 * Parse collection entry id into base slug + locale.
 * Examples: `resume-tips` → zh-TW; `resume-tips-en` → en-US
 * Note: Astro content IDs drop dots, so paired files use `slug-en.md` (not `slug.en.md`).
 */
export function parsePostEntryId(entryId: string): { baseSlug: string; locale: Locale } {
  const match = entryId.match(/^(.*)-(en|id|vi|th)$/);
  if (!match) {
    return { baseSlug: entryId, locale: defaultLocale };
  }

  const baseSlug = match[1];
  const suffix = match[2] as PathPrefix;
  return { baseSlug, locale: localeFromPathPrefix(suffix) };
}

export function postPath(locale: Locale, baseSlug: string): string {
  return localizedPath(locale, `/posts/${baseSlug}`);
}

export function postCanonicalUrl(locale: Locale, baseSlug: string): string {
  return localizedCanonicalUrl(locale, `/posts/${baseSlug}/`);
}

/** Map a logical page path (e.g. `/`, `/archive`, `/posts/foo`) across locales. */
export function switchLocalePath(targetLocale: Locale, currentPathWithoutBase: string): string {
  // Strip leading locale prefix if present
  const stripped = currentPathWithoutBase.replace(/^\/(en|id|vi|th)(?=\/|$)/, "") || "/";
  return localizedPath(targetLocale, stripped);
}

export function getLocaleFromAstroUrl(pathname: string, baseUrl: string): Locale {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  let path = pathname;
  if (normalizedBase && path.startsWith(normalizedBase)) {
    path = path.slice(normalizedBase.length) || "/";
  }
  if (!path.startsWith("/")) path = `/${path}`;

  const segment = path.split("/").filter(Boolean)[0];
  if (segment && isPathPrefix(segment)) {
    return localeFromPathPrefix(segment);
  }
  return defaultLocale;
}

export function dateLocaleFor(locale: Locale): string {
  return locale;
}

export { defaultLocale, locales, localePathPrefix, localeFileSuffix };
