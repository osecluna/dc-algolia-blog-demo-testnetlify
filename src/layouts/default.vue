<template>
  <el-container>
    <el-header height="100px">
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
.el-header {
  align-items: center;
  background-color: #17202c;
  display: flex;
  height: 400px;
  justify-content: center;
  margin: auto;
  text-align: center;
  width: 100%;
}

.el-header p {
  color: #ffffff;
}

.el-main {
  margin: auto;
  max-width: 800px;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
}

</style>
