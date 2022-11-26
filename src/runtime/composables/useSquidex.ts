import { useNuxtApp } from "#app";

export function useSquidex() {
  const app = useNuxtApp();
  return app.$squidex();
}
