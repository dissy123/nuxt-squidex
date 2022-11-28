import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { SquidexClient } from "./squidex/SquidexClient.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.squidex;
  const client = new SquidexClient(
    config.id,
    config.secret,
    config.appName,
    config.baseUrl,
    config.defaultLanguage,
    config.flatten,
    config.debug
  );
  nuxtApp.provide("squidex", () => {
    return client;
  });
});
