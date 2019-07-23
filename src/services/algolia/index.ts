import { Client } from 'algoliasearch';
import AlgoliaClient from './algolia-client';
import AlgoliaBlog from './algolia-blog';

const algoliaClient: Client = new AlgoliaClient().create();
const algoliaBlog: AlgoliaBlog = new AlgoliaBlog(algoliaClient);

export { algoliaBlog };
