import { Client } from 'algoliasearch';
import SearchClient from './search-client';

const searchClient: Client = new SearchClient().create();

export { searchClient };
