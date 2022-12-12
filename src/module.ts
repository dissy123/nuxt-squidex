import { fileURLToPath } from "url";
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
} from "@nuxt/kit";

export interface SquidexOptions {
  id: string;
  secret: string;
  appName: string;
  baseUrl: string;
  defaultLanguage: string;
  flatten: boolean;
  debug: boolean;
}

export default defineNuxtModule<SquidexOptions>({
  meta: {
    name: "@squidex/nuxt",
    configKey: "squidex",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    id: "",
    secret: "",
    appName: "",
    baseUrl: "https:/cloud.squidex.com/",
    defaultLanguage: "de",
    flatten: true,
    debug: false,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);

    // set options
    nuxt.options.runtimeConfig.public.squidex = options;

    addPlugin(resolve(runtimeDir, "plugin"));

    addImportsDir(resolve(runtimeDir, "composables"));
  },
});
