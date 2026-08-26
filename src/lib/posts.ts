import { getCollection, type CollectionEntry } from "astro:content";
import { defaultLocale, locales, type Locale } from "@/i18n/locales";
import { localizedPath, parsePostEntryId, postPath } from "@/i18n/utils";
import { CANONICAL_TAGS, canonicalTagsForPost, type CanonicalTag } from "@/lib/tags";
import type { HomeCategory } from "@/lib/home-categories";

export type PostEntry = CollectionEntry<"posts">;

export type PostMeta = {
  entry: PostEntry;
  baseSlug: string;
  locale: Locale;
};

export function enrichPost(entry: PostEntry): PostMeta {
  const { baseSlug, locale } = parsePostEntryId(entry.id);
  return { entry, baseSlug, locale };
}

export async function getPublishedPosts(): Promise<PostMeta[]> {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.map(enrichPost);
}

export async function getPostsByLocale(locale: Locale): Promise<PostMeta[]> {
  const all = await getPublishedPosts();
  return all
    .filter((p) => p.locale === locale)
    .sort((a, b) => b.entry.data.publishDate.getTime() - a.entry.data.publishDate.getTime());
}

export async function getPostBySlug(locale: Locale, baseSlug: string): Promise<PostMeta | undefined> {
  const posts = await getPostsByLocale(locale);
  return posts.find((p) => p.baseSlug === baseSlug);
}

/** Available translations for a base slug (published only). */
export async function getPostTranslationGroup(baseSlug: string): Promise<Partial<Record<Locale, PostMeta>>> {
  const all = await getPublishedPosts();
  const group: Partial<Record<Locale, PostMeta>> = {};
  for (const post of all) {
    if (post.baseSlug === baseSlug) {
      group[post.locale] = post;
    }
  }
  return group;
}

/** Language switcher targets for the current page. Missing post translations → locale home. */
export async function getLanguageSwitcherHrefs(
  locale: Locale,
  options: { page: "home" | "archive" | "post"; baseSlug?: string }
): Promise<Record<Locale, string>> {
  const hrefs = {} as Record<Locale, string>;

  if (options.page === "post" && options.baseSlug) {
    const group = await getPostTranslationGroup(options.baseSlug);
    for (const loc of locales) {
      hrefs[loc] = group[loc] ? postPath(loc, options.baseSlug) : localizedPath(loc, "/");
    }
    return hrefs;
  }

  const path = options.page === "archive" ? "/archive" : "/";
  for (const loc of locales) {
    hrefs[loc] = localizedPath(loc, path);
  }
  void locale;
  return hrefs;
}

/** Posts in `locale` that belong to a canonical tag hub, newest first. */
export async function getPostsForTag(locale: Locale, tag: CanonicalTag): Promise<PostMeta[]> {
  const posts = await getPostsByLocale(locale);
  return posts.filter((meta) => canonicalTagsForPost(meta.entry.data.tags).includes(tag));
}

/** Every canonical tag that has at least one published post in `locale`. */
export async function getTagHubs(locale: Locale): Promise<{ tag: CanonicalTag; count: number }[]> {
  const posts = await getPostsByLocale(locale);
  const counts = new Map<CanonicalTag, number>();
  for (const meta of posts) {
    for (const tag of canonicalTagsForPost(meta.entry.data.tags)) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return CANONICAL_TAGS.filter((tag) => counts.has(tag)).map((tag) => ({
    tag,
    count: counts.get(tag) ?? 0,
  }));
}

/** Posts in `locale` matching any of a home category's tags, newest first. */
export async function getPostsForTopic(locale: Locale, category: HomeCategory): Promise<PostMeta[]> {
  const posts = await getPostsByLocale(locale);
  return posts.filter((meta) => {
    const tags = meta.entry.data.tags ?? [];
    return category.filterTags.some((tag) => tags.includes(tag));
  });
}

export function viewsKeyForPost(meta: PostMeta): string {
  // Keep analytics keyed by base slug so translations share counts
  return meta.baseSlug;
}

export { defaultLocale };
