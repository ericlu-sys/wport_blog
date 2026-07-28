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

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://wport.me",
  base: "/blog",
  integrations: [
    react(),
    sitemap({
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
