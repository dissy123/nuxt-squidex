# Nuxt Squidex Module

## Add config to your nuxt.config.ts

modules: ["@squidex/nuxt"],
squidex: {
appName: "AppName",
id: "Id",
secret: "secret",
baseUrl: "https://cloud.squidex.io/",
defaultLanguage: "en",
flatten: true,
debug: false,
},

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
