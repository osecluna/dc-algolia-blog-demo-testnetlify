<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <div>
      <nuxt-link :to="link">
        <img class="image" :src="image" :alt="title || 'No image.'" />
        <div class="content">
          <h2>{{ title || 'No title.' }}</h2>
          <h2>{{ description || 'No description.' }}</h2>
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

  private addLeadingZeroes(val: number): string | number {
    return val < 10 ? `0${val}` : val;
  }

  public displayDate(ts: string): string {
    const d = new Date(ts);
    return `${d.getFullYear()}-${this.addLeadingZeroes(d.getMonth() + 1)}-${this.addLeadingZeroes(
      d.getDate()
    )} ${this.addLeadingZeroes(d.getHours())}:${this.addLeadingZeroes(d.getMinutes())}:${this.addLeadingZeroes(
      d.getSeconds()
    )}`;
  }
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
