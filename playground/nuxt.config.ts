import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@squidex/nuxt"],
  squidex: {
    appName: "gianna",
    id: "gianna:default",
    secret: "z1exks8xwc1g8f5f4x227228xx1nlitevnzpfbxqg0ix",
    baseUrl: "https://cms.matthiasdollfuss.dev",
    defaultLanguage: "de",
    flatten: true,
    debug: true,
  },
});
