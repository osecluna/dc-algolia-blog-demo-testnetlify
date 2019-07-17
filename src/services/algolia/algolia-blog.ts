import { Client, IndexSettings, Index, Response } from 'algoliasearch';

interface BlogItem {
  text: string;
  objectId: string;
  dateTimestamp: string;
  image: string;
}

class AlgoliaBlog {
  private index: Index;
  private settings: IndexSettings;
  public constructor(client: Client) {
    const indexName = process.env.ALGOLIA_BLOG_INDEX || '';
    this.settings = {
      attributesToRetrieve: ['objectID', 'text', 'dateTimeStamp', 'image'],
      ranking: ['desc(dateTimeStamp)'],
      hitsPerPage: 9
    };
    this.index = client.initIndex(indexName);
    this.index.setSettings(this.settings);
  }

  public async listBlogPosts(): Promise<BlogItem[]> {
    let blogItems: BlogItem[] = [];
    try {
      const response: Response = await this.index.search({ query: '' });
      blogItems = response.hits.map(
        (h): BlogItem => {
          return {
            text: h.text.text,
            objectId: h.objectID,
            dateTimestamp: h.dateTimeStamp,
            image: `//${h.image.image.endpoint}/${h.image.image.name}`
          };
        }
      );
    } catch (err) {
      // handle error
      console.log(err);
    }
    return blogItems;
  }
}

export default AlgoliaBlog;
