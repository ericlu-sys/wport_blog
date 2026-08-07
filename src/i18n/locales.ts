/** Locales aligned with the main WPORT site (hreflang). */
export const locales = ["zh-TW", "en-US", "id-ID", "vi-VN", "th-TH"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-TW";

/** URL path segment under /blog (empty = default language, no prefix). */
export const localePathPrefix: Record<Locale, string> = {
  "zh-TW": "",
  "en-US": "en",
  "id-ID": "id",
  "vi-VN": "vi",
  "th-TH": "th",
};

/** Filename suffix for paired post files: `post.md` / `post-en.md`. */
export const localeFileSuffix: Record<Locale, string> = {
  "zh-TW": "",
  "en-US": "en",
  "id-ID": "id",
  "vi-VN": "vi",
  "th-TH": "th",
};

export const pathPrefixToLocale: Record<string, Locale> = {
  en: "en-US",
  id: "id-ID",
  vi: "vi-VN",
  th: "th-TH",
};

export const nonDefaultPathPrefixes = ["en", "id", "vi", "th"] as const;
export type PathPrefix = (typeof nonDefaultPathPrefixes)[number];

export const localeLabels: Record<Locale, string> = {
  "zh-TW": "繁體中文",
  "en-US": "English",
  "id-ID": "Bahasa Indonesia",
  "vi-VN": "Tiếng Việt",
  "th-TH": "ภาษาไทย",
};

/** Compact labels for the mobile language switcher, where the full ones don't fit. */
export const localeShortLabels: Record<Locale, string> = {
  "zh-TW": "繁中",
  "en-US": "EN",
  "id-ID": "ID",
  "vi-VN": "VI",
  "th-TH": "ไทย",
};

/** BCP 47 / HTML lang + hreflang values. */
export const localeHtmlLang: Record<Locale, string> = {
  "zh-TW": "zh-TW",
  "en-US": "en-US",
  "id-ID": "id-ID",
  "vi-VN": "vi-VN",
  "th-TH": "th-TH",
};

/** Open Graph og:locale */
export const localeOg: Record<Locale, string> = {
  "zh-TW": "zh_TW",
  "en-US": "en_US",
  "id-ID": "id_ID",
  "vi-VN": "vi_VN",
  "th-TH": "th_TH",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isPathPrefix(value: string): value is PathPrefix {
  return (nonDefaultPathPrefixes as readonly string[]).includes(value);
}

export function localeFromPathPrefix(prefix: string | undefined): Locale {
  if (!prefix) return defaultLocale;
  return pathPrefixToLocale[prefix] ?? defaultLocale;
}
