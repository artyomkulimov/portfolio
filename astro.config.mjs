import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://artyomkulimov.com",
  output: "static",
  devToolbar: {
    enabled: false,
  },
  prefetch: true,
  build: {
    inlineStylesheets: "always",
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
