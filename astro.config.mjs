import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://burnworks.github.io',
  base: '/details-accordion-ui-sample',
  trailingSlash: "always",
  integrations: [tailwind()],
  compressHTML: true,
  vite: {
    build: {
      minify: false,
    },
  },
});