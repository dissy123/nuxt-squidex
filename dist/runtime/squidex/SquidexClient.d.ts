export declare class SquidexClient {
    baseUrl: string;
    clientId: string;
    clientSecret: string;
    appName: string;
    defaultLanguage: string;
    flatten: boolean;
    debug: boolean;
    token: string;
    constructor(clientId: string, clientSecret: string, appName: string, baseUrl: string, defaultLanguage: string, flatten: boolean, debug: boolean);
    getAsset(id: string): Promise<any>;
    getAssetRatio(id: string): Promise<number>;
    getContent(url: string, unpublished?: boolean): Promise<any>;
    getSchema(url: string, unpublished?: boolean): Promise<any>;
    getBearerToken(): void;
    setBearerToken(token: string): void;
    clearBearerToken(): void;
    buildUrl(url: string): string;
    getAssetUrl(id: string): string;
    fetchBearerToken(): Promise<string>;
    getContentInternal(url: string, unpublished?: boolean): Promise<any>;
    getGraphQLQuery(query: string): Promise<any>;
}
