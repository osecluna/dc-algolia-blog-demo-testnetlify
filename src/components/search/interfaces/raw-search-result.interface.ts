import SearchResultRoundel from '@/components/search/interfaces/search-result-roundel.interface';
import SearchResultImage from '@/components/search/interfaces/search-result-image.interface';

export default interface RawSearchResult {
  title: string;
  objectID: string;
  publishedDate: string;
  snippet: {
    image?: {
      image: SearchResultImage;
      roundel?: SearchResultRoundel[];
    };
    title: string;
    description: string;
  };
}
