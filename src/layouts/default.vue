<template>
  <el-container>
    <el-header height="300px">
      <div>
        <h1>Dynamic Content Algolia Blog</h1>
        <h5>Demonstraing how to integrate Amplience Dynamic Content with Algolia to create a simple blog</h5>
      </div>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

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
