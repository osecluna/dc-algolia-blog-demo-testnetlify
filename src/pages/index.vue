<template>
  <section class="blog-cards-container">
    <blog-cards :blog-articles="blogArticles" />
  </section>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import BlogCards from '@/components/blog-cards/blog-cards.vue';
import * as algoliasearch from 'algoliasearch';

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
    this.blogArticles = await this.listBlogPosts();
  }

  async listBlogPosts() {
    // TODO: we probably dont want to instantiate the algoliaClient (and settings)
    // maybe refactor so we can create a single instance and reuse
    const algoliaClient = algoliasearch('20V94JEJKD', 'f43d324e0306f1700051c2a5547922bf');
    const index = algoliaClient.initIndex('dev_staging_amplience');

    index.setSettings({
      attributesToRetrieve: ['objectID', 'text', 'dateTimeStamp', 'image'],
      ranking: ['desc(dateTimeStamp)'],
      hitsPerPage: 9
    });

    try {
      const response = await index.search({query: ''});
      return response.hits.map(h => {
        return {
          text: h.text.text,
          objectId: h.objectID,
          dateTimestamp: h.dateTimeStamp,
          image: `//${h.image.image.endpoint}/${h.image.image.name}`
        }
      })
    } catch (err) {
      // handle error
      console.log(err);
    }
  }

  
}
export default Index;
</script>
