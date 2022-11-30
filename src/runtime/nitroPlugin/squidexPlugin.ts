import { SquidexClient } from "../squidex/SquidexClient";

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
