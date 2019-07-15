<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <div>
      <nuxt-link :to="link">
        <img class="image" :src="image" :alt="title" />
        <div class="content">
          <h2>{{ title }}</h2>
          <time class="date-time" :datetime="timestamp">{{ timestamp | blogDate }}</time>
        </div>
      </nuxt-link>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class Card extends Vue {
  @Prop() title;
  @Prop() description;
  @Prop() link;
  @Prop() timestamp;
  @Prop() image;
}

export default Card;
</script>

<style lang="scss">
.content {
  padding: 14px;
}

.image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 140px;
}
.date-time {
  font-size: 13px;
  color: #999;
}
</style>
