<template>
  <div>
    <el-row :gutter="20">
      <el-col v-for="item in blogItems" :key="item.objectId" :span="8">
        <card
          :title="item.text"
          :description="item.text"
          :link="`/blog/${item.objectId}`"
          :timestamp="item.dateTimestamp"
          :image="item.image"
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
  @Prop() blogItems;
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
