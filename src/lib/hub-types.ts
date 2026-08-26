/** One entry in a hub page's sibling navigation (tag hubs or topic hubs). */
export interface HubSibling {
  label: string;
  href: string;
  count: number;
  isCurrent: boolean;
}
