import type { Locale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/utils";
import { translateTag } from "@/i18n/tags";
import { t, type UiKey } from "@/i18n/ui";
import { HOME_CATEGORIES, type HomeCategory, type HomeCategoryId } from "@/lib/home-categories";
import { getPostsForTopic, getTagHubs } from "@/lib/posts";
import { tagSlug } from "@/lib/tags";
import type { HubSibling } from "@/lib/hub-types";

export type { HubSibling };

export function tagHubPath(locale: Locale, slug: string): string {
  return localizedPath(locale, `/tags/${slug}/`);
}

export function topicHubPath(locale: Locale, id: HomeCategoryId): string {
  return localizedPath(locale, `/topics/${id}/`);
}

/**
 * The ten tag hubs, as sibling links. Every hub page renders the full set so
 * the taxonomy is reachable from any single hub.
 */
export async function tagSiblings(locale: Locale, currentTag?: string): Promise<HubSibling[]> {
  const hubs = await getTagHubs(locale);
  return hubs.map(({ tag, count }) => ({
    label: translateTag(locale, tag),
    href: tagHubPath(locale, tagSlug(tag)),
    count,
    isCurrent: tag === currentTag,
  }));
}

const categoryLabelKeys: Record<HomeCategoryId, UiKey> = {
  "overseas-students": "bento.overseasStudents.label",
  ai: "bento.ai.label",
  startup: "bento.startup.label",
  features: "bento.features.label",
};

const categoryDescriptionKeys: Record<HomeCategoryId, UiKey> = {
  "overseas-students": "bento.overseasStudents.description",
  ai: "bento.ai.description",
  startup: "bento.startup.description",
  features: "bento.features.description",
};

export function categoryLabel(locale: Locale, category: HomeCategory): string {
  return t(locale, categoryLabelKeys[category.id]);
}

export function categoryDescription(locale: Locale, category: HomeCategory): string {
  return t(locale, categoryDescriptionKeys[category.id]);
}

/** The four topic hubs, as sibling links. */
export async function topicSiblings(locale: Locale, currentId?: HomeCategoryId): Promise<HubSibling[]> {
  const siblings: HubSibling[] = [];
  for (const category of HOME_CATEGORIES) {
    const posts = await getPostsForTopic(locale, category);
    siblings.push({
      label: categoryLabel(locale, category),
      href: topicHubPath(locale, category.id),
      count: posts.length,
      isCurrent: category.id === currentId,
    });
  }
  return siblings;
}
