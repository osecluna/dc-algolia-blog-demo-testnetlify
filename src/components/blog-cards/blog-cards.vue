<template>
  <div>
    <el-row :gutter="20">
      <el-col v-for="article in blogArticles" :key="article.objectId" :span="8">
        <card
          :title="article.text"
          :description="article.text"
          :link="`/blog/${article.objectId}`"
          :timestamp="article.dateTimestamp"
          :image="article.image"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Card from '@/components/card/card.vue';

@Component({
  components: {
    Card
  }
})
class BlogCards extends Vue {
  @Prop() blogArticles;
}

export default BlogCards;
</script>

<style lang="scss">
.el-col {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
