export default interface SearchResult {
  objectID: string;
  publishedDate: string;
  title: string | undefined;
  description: string | undefined;
  image?: string;
  roundel?: {
    image: string;
    ratio: number;
  };
}
