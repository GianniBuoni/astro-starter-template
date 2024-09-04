import { defineConfig } from "astro/config";

// Integration Imports
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// Defined Config
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog.app",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [icon(), sitemap(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});

