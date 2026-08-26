// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import rehypeRaw from "rehype-raw";
import { rehypeOptimizeImages } from "./src/lib/rehype-optimize-images.ts";
import { rehypeJobRecommendations } from "./src/lib/rehype-job-recommendations.ts";
import { buildLastmodMap } from "./src/lib/sitemap-lastmod.ts";

// Without <lastmod>, Google has no signal that a URL is worth re-crawling.
const lastmodByUrl = buildLastmodMap();

// Translated post pages are kept out of the sitemap on purpose.
//
// As of 2026-08-26 the sitemap carried 140 URLs and Search Console had crawled
// exactly 6 of them (the five locale home pages plus the zh-TW archive). All
// 130 post pages sat at "Discovered - currently not indexed" with no
// lastCrawlTime at all, i.e. Googlebot had never fetched a single one. 104 of
// those 130 are machine translations of the same 26 articles, so they were
// spending this section's crawl budget without any search demand behind them.
// Submitting only the zh-TW posts concentrates that budget until they start
// getting picked up; the translations stay discoverable through hreflang and
// the locale archives, and belong back in the sitemap once zh-TW is indexed.
// Same reasoning applies to the translated tag and topic hubs: they mirror the
// zh-TW hubs and only exist to serve readers who already switched language.
const TRANSLATED_URL = /\/blog\/(en|id|vi|th)\/(posts|tags|topics)\//;

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://wport.me",
  base: "/blog",
  integrations: [
    react(),
    sitemap({
      filter: (page) => !TRANSLATED_URL.test(page),
      serialize(item) {
        const lastmod = lastmodByUrl.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeRaw, rehypeJobRecommendations, rehypeOptimizeImages],
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
  server: { port: 3000 },
  vite: {
    plugins: [tailwindcss()],
    // Dev-only: proxy the jobs API through the dev server so localhost calls are
    // same-origin (production is already same-origin, so no proxy is needed there).
    // Pairs with getJobsConfig() using a relative "/v2/api" base in dev.
    server: {
      proxy: {
        "/v2/api": { target: "https://wport.me", changeOrigin: true },
      },
    },
  },
});
