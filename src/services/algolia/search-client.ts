import algoliasearch, { Client } from 'algoliasearch';

export default class SearchClient {
  public client: Client;

  public constructor() {
    const appId = process.env.ALGOLIA_APPLICATION_ID || '';
    const apiKey = process.env.ALGOLIA_SEARCH_API_KEY || '';
    this.client = algoliasearch(appId, apiKey);
  }
}
