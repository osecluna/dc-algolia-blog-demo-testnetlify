<template>
  <ais-instant-search-ssr>
    <ais-search-box />
    <ais-stats />
    <template>
      <ais-hits>
        <template slot-scope="{ items }">
          <el-row :gutter="20">
            <el-col v-for="item in items" :key="item.objectId" :span="8">
            <card
              :title="item.text"
              :description="item.text"
              :link="`/blogs/${item.objectId}`"
              :timestamp="item.dateTimestamp"
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

<script>
import {
  AisInstantSearchSsr,
  AisHits,
  AisSearchBox,
  AisStats,
  AisPagination,
  createInstantSearch
} from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import Card from '@/components/card/card.vue';
//import { algoliaBlog } from '../../services/algolia';

const searchClient = algoliasearch(
  '20V94JEJKD',
  'f43d324e0306f1700051c2a5547922bf'
);

const { rootMixin } = createInstantSearch({
  searchClient,
  indexName: 'dev_staging_amplience',
});

export default {
  components: {
    AisInstantSearchSsr,
    AisHits,
    AisSearchBox,
    AisStats,
    AisPagination,
    Card
  },
  mixins: [rootMixin],
  data() {
    return {
      blogItems: []
    };
  },
  methods: {
    /* eslint-disable */
     transformItems: async (items) => {
        return items;
        //return response.hits;
      }
    /* eslint-enable */
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://unpkg.com/instantsearch.css@7.1.0/themes/algolia-min.css',
        },
      ],
    };
  },
};

</script>

<style lang="scss">

.ais-Hits-list {
  text-align: left;
}
.ais-InstantSearch {
  margin: 1em;
}

.el-col {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

</style>

