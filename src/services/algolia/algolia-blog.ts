import { Client, IndexSettings, Index, Response } from 'algoliasearch';

interface BlogResponse {
  hits: BlogItem[];
  paging: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}
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

  public async listBlogPosts(page: number = 0): Promise<BlogResponse> {
    let hits: BlogItem[] = [];
    let paging;
    try {
      const response: Response = await this.index.search({ query: '', page });
      hits = response.hits.map(
        (h): BlogItem => {
          return {
            text: h.text.text,
            objectId: h.objectID,
            dateTimestamp: h.dateTimeStamp,
            image: `//${h.image.image.endpoint}/${h.image.image.name}`
          };
        }
      );
      paging = {
        number: response.page,
        size: response.hitsPerPage,
        totalElements: response.nbHits,
        totalPages: response.nbPages
      };
    } catch (err) {
      // handle error
      console.log(err);
    }
    return { hits, paging };
  }
}

export default AlgoliaBlog;
