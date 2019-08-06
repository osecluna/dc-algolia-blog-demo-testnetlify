<template>
  <div>
    <div class="header-heading">
      <a href="/">
        Amplience Dynamic Content Algolia Blog
      </a>
    </div>
    <div class="header-subheading">Demonstrating how to integrate Amplience Dynamic Content with Algolia to create a simple blog</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class BlogHeader extends Vue {}

export default BlogHeader;
</script>

<style>

.el-header .header-heading {
  margin-bottom: 5px;
}

.el-header .header-heading a {
  font-size: 1.4rem;
  font-weight: 500;
  color: #ffffff;
}

.el-header .header-subheading {
  font-weight: 500;
  color: #ffffff;
}

</style>
