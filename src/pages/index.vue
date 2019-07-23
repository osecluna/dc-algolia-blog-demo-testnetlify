<template>
  <section class="blog-cards-container">
   <search />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Search from '@/components/search/search.vue';
@Component({
  components: {
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
