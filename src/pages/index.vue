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
          image: 'https://static.nationalgeographic.co.uk/files/capybara_nationalgeographic_1518115.jpg'
        },
        {
          text: 'Test blog 2',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Yellow-headed_caracara_%28Milvago_chimachima%29_on_capybara_%28Hydrochoeris_hydrochaeris%29.JPG/1280px-Yellow-headed_caracara_%28Milvago_chimachima%29_on_capybara_%28Hydrochoeris_hydrochaeris%29.JPG'
        },
        {
          text: 'Test blog 3',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Capybara_harness.jpg'
        },
        {
          text: 'Test blog 4',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzIrPG47fmFBQoG772PrkmZP6REKwWLM81tVrOqMoQBJqiG5rYQ'
        },
        {
          text: 'Test blog 5',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'https://live.staticflickr.com/2168/1518129317_91f456172f_z.jpg'
        },
        {
          text: 'Test blog 6',
          objectId: '123',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'https://static.nationalgeographic.co.uk/files/capybara_nationalgeographic_1518115.jpg'
        },
        {
          text: 'Test blog 7',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Yellow-headed_caracara_%28Milvago_chimachima%29_on_capybara_%28Hydrochoeris_hydrochaeris%29.JPG/1280px-Yellow-headed_caracara_%28Milvago_chimachima%29_on_capybara_%28Hydrochoeris_hydrochaeris%29.JPG'
        },
        {
          text: 'Test blog 8',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Capybara_harness.jpg'
        },
        {
          text: 'Test blog 9',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzIrPG47fmFBQoG772PrkmZP6REKwWLM81tVrOqMoQBJqiG5rYQ'
        },
        {
          text: 'Test blog 10',
          objectId: '456',
          dateTimestamp: '2019-01-02T03:04:05.06Z',
          image: 'https://live.staticflickr.com/2168/1518129317_91f456172f_z.jpg'
        }
      ],
      wibble: 'wobble'
    };
  }
}
export default Index;
</script>
