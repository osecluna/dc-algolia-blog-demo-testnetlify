<template>
  <div>
    <h1>
      <a href="/">
        Amplience Dynamic Content Algolia Blog
      </a>
    </h1>
    <p>
      Demonstrating how to integrate Amplience Dynamic Content with Algolia to create a simple blog
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class BlogHeader extends Vue {}

export default BlogHeader;
</script>

<style>
.el-header a {
  font-size: 1.4rem;
  font-weight: 500;
  color: #ffffff;
}

.el-header {
  font-weight: 500;
  color: #ffffff;
}
</style>
