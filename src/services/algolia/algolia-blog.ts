import { Client, IndexSettings, Index } from 'algoliasearch';

class AlgoliaBlog {
  private index: Index;
  private settings: IndexSettings;
  public constructor(client: Client) {
    this.settings = {
      attributesToRetrieve: ['objectID', 'text', 'dateTimeStamp', 'image'],
      ranking: ['desc(dateTimeStamp)'],
      hitsPerPage: 9
    };
    this.index = client.initIndex('dev_staging_amplience');
    this.index.setSettings(this.settings);
  }

  public async listBlogPosts() {
    try {
      const response = await this.index.search({ query: '' });
      return response.hits.map(h => {
        return {
          text: h.text.text,
          objectId: h.objectID,
          dateTimestamp: h.dateTimeStamp,
          image: `//${h.image.image.endpoint}/${h.image.image.name}`
        };
      });
    } catch (err) {
      // handle error
      console.log(err);
    }
  }
}

export default AlgoliaBlog;
