<template>
  <section class="blog-cards-container">
    <blog-cards :blog-articles="blogArticles" />
    <el-pagination
      v-if="paging.totalPages"
      layout="prev, pager, next"
      :page-size="paging.size"
      :total="paging.totalElements"
      @current-change="handlePageChange"
    ></el-pagination>
  </section>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import BlogCards from '@/components/blog-cards/blog-cards.vue';
import { algoliaBlog } from '../services/algolia';

@Component({
  components: {
    BlogCards
  }
})
class Index extends Vue {
  data() {
    return {
      blogArticles: [],
      paging: {}
    };
  }

  async mounted() {
    await this.getBlogItems();
  }

  handlePageChange(page) {
    this.getBlogItems(page);
  }

  async getBlogItems(page = 0) {
    const response = await algoliaBlog.listBlogPosts(page);
    this.blogArticles = response.hits;
    this.paging = response.paging;
  }
}
export default Index;
</script>
