<template>
  <el-container>
    <el-header height="300px">
      <blog-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
import BlogHeader from '@/components/blog-header/blog-header.vue';

export default {
  components: {
    BlogHeader
  }
};
</script>

<style>
h1 {
  font-weight: bold;
}

h5 {
  margin-top: 2px;
  color: #909090;
}

.el-header {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  height: 400px;
  justify-content: center;
  margin: auto;
  text-align: center;
  width: 100%;
}

.el-main {
  margin: auto;
  max-width: 800px;
  height: 100%;
}
</style>
