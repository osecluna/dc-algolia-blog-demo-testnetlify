import algoliasearch, { Client } from 'algoliasearch';

class AlgoliaClient {
  private appId: string;
  private apiKey: string;
  public constructor() {
    this.appId = process.env.ALGOLIA_APP_ID || '';
    this.apiKey = process.env.ALGOLIA_API_KEY || '';
  }

  public create(): Client {
    return algoliasearch(this.appId, this.apiKey);
  }
}

export default AlgoliaClient;
