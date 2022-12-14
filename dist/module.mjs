import { fileURLToPath } from 'url';
import { defineNuxtModule, createResolver, addPlugin, addImportsDir } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@squidex/nuxt",
    configKey: "squidex",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  defaults: {
    id: "",
    secret: "",
    appName: "",
    baseUrl: "https:/cloud.squidex.com/",
    defaultLanguage: "de",
    flatten: true,
    debug: false
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    nuxt.options.runtimeConfig.public.squidex = options;
    addPlugin(resolve(runtimeDir, "plugin"));
    addImportsDir(resolve(runtimeDir, "composables"));
  }
});

export { module as default };
