import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@squidex/nuxt"],
  squidex: {
    appName: "appName",
    id: "appName:id",
    secret: "secret",
    baseUrl: "https://cloud.squidex.io",
    defaultLanguage: "en",
    flatten: true,
    debug: true,
  },
});
