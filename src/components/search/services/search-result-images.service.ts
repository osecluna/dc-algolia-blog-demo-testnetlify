import SearchResult from '@/components/search/interfaces/search-result.interface';
import RawSearchResult from '@/components/search/interfaces/raw-search-result.interface';

export default class SearchResultImagesService {
  public static getImage(item: RawSearchResult): string {
    if (!item.snippet || !item.snippet.image) {
      return '';
    }

    const imageData = item.snippet.image.image;
    return `//${imageData.defaultHost}/i/${imageData.endpoint}/${imageData.name}`;
  }

  public static getRoundel(item: RawSearchResult): SearchResult['roundel'] {
    if (!item.snippet || !item.snippet.image || !item.snippet.image.roundel) {
      return;
    }

    const roundelData = item.snippet.image.roundel[0];
    return {
      image: `//${roundelData.roundel.defaultHost}/i/${roundelData.roundel.endpoint}/${roundelData.roundel.name}`,
      ratio: roundelData.roundelRatio
    };
  }
}
