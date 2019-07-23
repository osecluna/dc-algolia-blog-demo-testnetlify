import { Client, IndexSettings, Index, Response } from 'algoliasearch';
import { BlogItem } from '../../models/blog/blog-item';
import { BlogPaging } from '../../models/blog/blog-paging';
interface BlogResponse {
  hits: BlogItem[];
  paging: BlogPaging;
}

interface NewBlogResponse {
  hits: BlogItem[];
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
          const text = h.text ? h.text.text : '';
          const imageEndpoint = h.image && h.image.image ? h.image.image.endpoint : '';
          const imageName = h.image && h.image.image ? h.image.image.name : '';
          return {
            text: text,
            objectId: h.objectID,
            dateTimestamp: h.dateTimeStamp,
            image: `//${imageEndpoint}/${imageName}`
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

  public async newListBlogPosts(items): Promise<NewBlogResponse> {
    let hits: BlogItem[] = [];
    try {

      hits = items.map(
        (h): BlogItem => {
          const text = h.text ? h.text.text : '';
          const imageEndpoint = h.image && h.image.image ? h.image.image.endpoint : '';
          const imageName = h.image && h.image.image ? h.image.image.name : '';
          return {
            text: text,
            objectId: h.objectID,
            dateTimestamp: h.dateTimeStamp,
            image: `//${imageEndpoint}/${imageName}`
          };
        }
      );
    } catch (err) {
      // handle error
      console.log(err);
    }
    return { hits };
  }
}

export default AlgoliaBlog;
