import { SquidexClient } from "./squidex/SquidexClient";
//import { useRuntimeConfig } from "#imports";
import { defineNitroPlugin } from "nitropack/dist/runtime/plugin";

export default defineNitroPlugin((nitroApp) => {
  /*console.log("Add Squidex Nitro Plugin");

  const config = useRuntimeConfig().public.squidex;

  //const config = config.public.squidex;

  //const config = process.env.RUNTIMEconfig["public"].squidex;

  const client = new SquidexClient(
    config.id,
    config.secret,
    config.appName,
    config.baseUrl,
    config.defaultLanguage,
    config.flatten,
    config.debug
  );
  nitroApp.squidex = client;*/
});
