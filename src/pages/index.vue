<template>
  <section class="blog-cards-container">
    <blog-cards :blog-articles="blogArticles" />
  </section>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import BlogCards from '@/components/blog-cards/blog-cards.vue';

@Component({
  components: {
    BlogCards
  }
})
class Index extends Vue {
  data() {
    return {
      blogArticles: [
        {
          text: 'Test blog 1',
          objectId: '123',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'someimage.jpg'
        },
        {
          text: 'Test blog 2',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'someimage2.jpg'
        },
        {
          text: 'Test blog 3',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'someimage2.jpg'
        },
        {
          text: 'Test blog 4',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'someimage2.jpg'
        },
        {
          text: 'Test blog 5',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'someimage2.jpg'
        },
        {
          text: 'Test blog 6',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'someimage2.jpg'
        },
        {
          text: 'Test blog 7',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'someimage2.jpg'
        },
        {
          text: 'Test blog 8',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'someimage2.jpg'
        },
        {
          text: 'Test blog 9',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'someimage2.jpg'
        }
      ],
      wibble: 'wobble'
    };
  }
}
export default Index;
</script>
