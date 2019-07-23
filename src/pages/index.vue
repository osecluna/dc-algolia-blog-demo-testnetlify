<template>
  <section class="blog-cards-container">
   <search />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BlogCards from '@/components/blog-cards/blog-cards.vue';
import Search from '@/components/search/search.vue';
@Component({
  components: {
    BlogCards,
    Search
  }
})
class Index extends Vue {

}
export default Index;
</script>

<style lang="scss">
.el-pagination {
  text-align: center;
}
</style>
