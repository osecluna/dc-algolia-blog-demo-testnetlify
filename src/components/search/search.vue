<template>
  <ais-instant-search-ssr>
    <ais-search-box :class-names="{'ais-SearchBox': 'search',}" />
      <template>
        <ais-hits :transform-items="transformItems">
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

<script lang="ts">
import { AisInstantSearchSsr, AisHits, AisSearchBox, AisPagination, createInstantSearch } from 'vue-instantsearch';
import Card from '@/components/card/card.vue';
import { Vue, Component}  from 'vue-property-decorator';
import { searchClient } from '../../services/algolia';

const { rootMixin } = createInstantSearch({
  searchClient,
  indexName: process.env.ALGOLIA_BLOG_INDEX
});

@Component({
  components: {
    AisInstantSearchSsr,
    AisHits,
    AisSearchBox,
    AisPagination,
    Card
  },
  mixins: [rootMixin],
  methods: {
    transformItems: items => {
      return items.map(item => ({
        ...item,
        text: item.text ? item.text.text : '',
        objectId: item.objectID,
        dateTimestamp: item.dateTimeStamp,
        image: `//${item.image && item.image.image ? item.image.image.endpoint : ''}/${
                item.image && item.image.image ? item.image.image.name : ''
                }`
      }));
    }
  }
})

//
class Search extends Vue {
}
export default Search;
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

