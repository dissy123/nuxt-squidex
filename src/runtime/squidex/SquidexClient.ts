export class SquidexClient {
  /*
  $fetch docs: https://github.com/unjs/ofetch
  */

  baseUrl: string = "";
  clientId: string = "";
  clientSecret: string = "";
  appName: string = "";
  defaultLanguage: string = "";
  flatten: boolean = true;
  debug: boolean = false;

  token: string = "";

  constructor(
    clientId: string,
    clientSecret: string,
    appName: string,
    baseUrl: string,
    defaultLanguage: string,
    flatten: boolean,
    debug: boolean
  ) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.baseUrl = baseUrl;
    this.appName = appName;
    this.defaultLanguage = defaultLanguage;
    this.flatten = flatten;
    this.debug = debug;

    if (this.debug) console.log("initialize SquidexClient");
  }

  async getAsset(id: string) {
    const json = await this.getContentInternal(
      "api/assets/" + this.appName + "/" + id
    );

    return json;
  }

  async getAssetRatio(id: string) {
    let actualtime = Date.now();

    const json = await this.getContentInternal(
      "api/apps/" + this.appName + "/assets/" + id
    );

    if (this.debug)
      console.log(
        "Squidex: assetRatio Time: " + (Date.now() - actualtime) + " " + id
      );

    return json.pixelWidth / json.pixelHeight;
  }

  async getContent(url: string, unpublished = false) {
    let actualtime = Date.now();

    const json = await this.getContentInternal(
      "api/content/" + this.appName + "/" + url,
      unpublished
    );

    if (this.debug)
      console.log(
        "Squidex: getContent Time: " + (Date.now() - actualtime) + " " + url
      );

    return json;
  }

  async getSchema(url: string, unpublished = false) {
    const json = await this.getContentInternal(
      "api/apps/" + this.appName + "/schemas/" + url,
      unpublished
    );

    return json;
  }

  getBearerToken() {
    this.token;
  }

  setBearerToken(token: string) {
    this.token = token;
  }

  clearBearerToken() {
    this.token = "";
  }

  buildUrl(url: string) {
    if (url.length > 0 && url.startsWith("/")) {
      url = url.substr(1);
    }

    const result = `${this.baseUrl}/${url}`;

    return result;
  }

  getAssetUrl(id: string) {
    return this.baseUrl + "/api/assets/" + id;
  }

  async fetchBearerToken() {
    if (this.token !== "") {
      return this.token;
    }

    const body = `grant_type=client_credentials&scope=squidex-api&client_id=${this.clientId}&client_secret=${this.clientSecret}`;

    const response = await $fetch(
      this.buildUrl("identity-server/connect/token"),
      {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        retry: 3,
      }
    ).catch((error) => error.data);

    this.token = response.access_token;

    return this.token;
  }

  async getContentInternal(url: string, unpublished = false): Promise<any> {
    // Fetch the bearer token.
    const token = await this.fetchBearerToken();

    const response = await $fetch(this.buildUrl(url), {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "X-Languages": this.defaultLanguage,
        "X-Flatten": this.flatten ? "true" : "false",
        "X-Unpublished": unpublished ? "1" : "0",
      },
      retry: 3,
    }).catch((error) => error.data);

    return response;
  }

  async getGraphQLQuery(query: string): Promise<any> {
    let actualtime = Date.now();
    const token = await this.fetchBearerToken();

    const url = "api/content/" + this.appName + "/graphql";

    const response = await $fetch(this.buildUrl(url), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
      retry: 3,
    }).catch((error) => error.data);

    if (this.debug)
      console.log(
        "Squidex: getGraphQLQuery Time: " +
          (Date.now() - actualtime) +
          " " +
          url
      );

    return response;
  }
}
