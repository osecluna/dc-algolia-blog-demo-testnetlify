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
      }
    }

    mounted() {
        const algoliaClient = algoliasearch('20V94JEJKD', 'f43d324e0306f1700051c2a5547922bf');
        const index = algoliaClient.initIndex('dev_staging_amplience');

        index.setSettings({
            attributesToRetrieve: ['objectID', 'text', 'dateTimeStamp', 'image'],
            ranking: ['desc(dateTimeStamp)'],
            hitsPerPage: 9
        });

        index.search('', (err, { hits } = {}) => {
            if (err) throw err;
            console.log('hits', hits);
            this.blogArticles = hits.map(h => {
                console.log('h', h);
                return {
                  text: h.text.text,
                  objectId: h.objectID,
                  dateTimestamp: h.dateTimeStamp,
                  image: '//' + h.image.image.endpoint + '/' + h.image.image.name
                };
              }
            );
            console.log('blogArticles', this.blogArticles);
        });
    }
}
export default Index;
</script>
