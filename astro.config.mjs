import { defineConfig } from "astro/config";

// Integration Imports
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// Defined Config
export default defineConfig({
  site: "https://astro-blog.app",
  prefetch: true,
  integrations: [icon(), sitemap()],
});
