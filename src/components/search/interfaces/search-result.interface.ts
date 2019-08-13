export default interface SearchResult {
  objectID: string;
  publishedDate: string;
  title: string;
  image?: string;
  roundel?: {
    image: string;
    ratio: number;
  };
}
