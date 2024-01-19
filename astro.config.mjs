import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/details-accordion-ui-sample',
  trailingSlash: "always",
  outDir: './docs',
  integrations: [tailwind()]
});