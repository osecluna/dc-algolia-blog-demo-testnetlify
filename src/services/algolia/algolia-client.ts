import algoliasearch, { Client } from 'algoliasearch';

class AlgoliaClient {
  private appId: string;
  private apiKey: string;
  public constructor() {
    // TODO: change these to env vars
    this.appId = '20V94JEJKD';
    this.apiKey = 'f43d324e0306f1700051c2a5547922bf';
  }

  public create(): Client {
    return algoliasearch(this.appId, this.apiKey);
  }
}

export default AlgoliaClient;
