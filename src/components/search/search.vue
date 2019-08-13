<template>
  <ais-instant-search-ssr>
    <ais-configure :hitsPerPage="numberOfSearchResults" />
    <ais-search-box :class-names="{ 'ais-SearchBox': 'search' }" />
    <template>
      <ais-hits :transform-items="transformItems">
        <template slot-scope="{ items }">
          <el-row :gutter="20">
            <el-col v-for="item in items" :key="item.objectID" :span="8">
              <card
                :title="item.title"
                :description="item.description"
                :link="`/blogs/${item.objectID}`"
                :image="item.image"
              />
            </el-col>
          </el-row>
        </template>
      </ais-hits>
    </template>
    <ais-pagination />
  </ais-instant-search-ssr>
</template>

<script lang="ts">
import { AisHits, AisInstantSearchSsr, AisPagination, AisSearchBox, createInstantSearch } from 'vue-instantsearch';
import Card from '@/components/card/card.vue';
import { Component, Vue } from 'vue-property-decorator';
import SearchClient from '@/services/algolia/search-client';
import RawSearchResult from '@/components/search/interfaces/raw-search-result.interface';
import SearchResult from '@/components/search/interfaces/search-result.interface';
import SearchResultImagesService from '@/components/search/services/search-result-images.service';

const indexName = process.env.ALGOLIA_INDEX_NAME || '';
const numberOfSearchResults =
  (process.env.NUMBER_OF_SEARCH_RESULTS && parseInt(process.env.NUMBER_OF_SEARCH_RESULTS)) || 9;

const { rootMixin } = createInstantSearch({
  searchClient: new SearchClient().client,
  indexName
});

@Component({
  components: {
    AisInstantSearchSsr,
    AisHits,
    AisSearchBox,
    AisPagination,
    Card
  },
  data: () => ({
    numberOfSearchResults
  }),
  mixins: [rootMixin],
  methods: {
    transformItems: (items: RawSearchResult[]): SearchResult[] => {
      return items.map(
        (item: RawSearchResult): SearchResult => ({
          objectID: item.objectID,
          publishedDate: item.publishedDate,
          title: (item.snippet && item.snippet.title) || undefined,
          description: (item.snippet && item.snippet.description) || undefined,
          image: SearchResultImagesService.getImage(item),
          roundel: SearchResultImagesService.getRoundel(item)
        })
      );
    }
  }
})
export default class Search extends Vue {}
</script>

<style lang="scss">
.ais-Hits-list {
  text-align: left;
}

.ais-InstantSearch {
  margin: 1em;
}

.search {
  padding: 10px;
}

.el-col {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
