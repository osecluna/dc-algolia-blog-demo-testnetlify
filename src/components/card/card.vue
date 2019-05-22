<template>
  <el-card>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <time :datetime="timestamp">{{ timestamp | date }}</time>
      <nuxt-link :to="link">read</nuxt-link>
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
}

export default Card;
</script>
