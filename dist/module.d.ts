import * as _nuxt_schema from '@nuxt/schema';

interface SquidexOptions {
    id: string;
    secret: string;
    appName: string;
    baseUrl: string;
    defaultLanguage: string;
    flatten: boolean;
    debug: boolean;
}
declare const _default: _nuxt_schema.NuxtModule<SquidexOptions>;

export { SquidexOptions, _default as default };
