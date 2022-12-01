import { SquidexClient } from "../squidex/SquidexClient.mjs";
import { defineNitroPlugin } from "nitropack/dist/runtime/plugin";
export default defineNitroPlugin((nitroApp) => {
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
  nitroApp.squidex = client;
});
