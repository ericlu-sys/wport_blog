import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  // Support both absolute image URLs and local image paths from Decap uploads.
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { posts };
