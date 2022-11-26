import { useNuxtApp } from "#app";

export function useSquidex() {
  return useNuxtApp().$squidex();
}
