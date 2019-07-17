<template>
  <section class="blog-cards-container">
    <blog-cards :blog-articles="blogArticles" />
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
      blogArticles: []
    };
  }

  async mounted() {
    this.blogArticles = await algoliaBlog.listBlogPosts();
  }
}
export default Index;
</script>
