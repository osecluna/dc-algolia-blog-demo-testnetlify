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
  @Prop()
  title;
  @Prop()
  description;
  @Prop()
  link;
  @Prop()
  timestamp;
  @Prop()
  image;
}

export default Card;
</script>

<style lang="scss">
$titleLineHeight: 22px;
$titleLinesToDisplay: 3;

h2 {
  height: $titleLineHeight * $titleLinesToDisplay;
  max-height: $titleLineHeight * $titleLinesToDisplay;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content {
  padding: 14px;
}

.image {
  display: block;
  height: 140px;
  max-height: 140px;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
}
.date-time {
  font-size: 13px;
  color: #999;
}
</style>
