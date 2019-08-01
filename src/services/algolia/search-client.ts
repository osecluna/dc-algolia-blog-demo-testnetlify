import algoliasearch, { Client } from 'algoliasearch';

export default class SearchClient {
  public client: Client;

  public constructor() {
    const appId = process.env.ALGOLIA_APP_ID || '';
    const apiKey = process.env.ALGOLIA_API_KEY || '';
    this.client = algoliasearch(appId, apiKey);
  }
}
