import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        severity: z
          .enum(['low', 'medium', 'high', 'critical'])
          .default('low')
          .describe('How severe/important this page or topic is'),
      }),
    }),
  }),
};
