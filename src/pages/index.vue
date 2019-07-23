<template>
  <section class="blog-cards-container">
    <blog-cards :blog-items="blogItems" />
    <el-pagination
      v-if="paging.totalPages"
      layout="prev, pager, next"
      :page-size="paging.size"
      :total="paging.totalElements"
      :page-count="paging.totalPages"
      @current-change="handlePageChange"
    ></el-pagination>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BlogCards from '@/components/blog-cards/blog-cards.vue';
import { algoliaBlog } from '../services/algolia';
import { BlogItem } from '../models/blog/blog-item';
import { BlogPaging } from '../models/blog/blog-paging';
@Component({
  components: {
    BlogCards
  }
})
class Index extends Vue {
  private blogItems: BlogItem[] = [];
  private paging: BlogPaging = {};
  data() {
    return {
      blogItems: [],
      paging: {}
    };
  }

  mounted() {
    this.getBlogItems();
  }

  handlePageChange(page) {
    this.getBlogItems(page - 1);
  }

  async getBlogItems(page = 0) {
    const response = await algoliaBlog.listBlogPosts(page);
    this.blogItems = response.hits;
    this.paging = response.paging;
  }
}
export default Index;
</script>

<style lang="scss">
.el-pagination {
  text-align: center;
}
</style>
