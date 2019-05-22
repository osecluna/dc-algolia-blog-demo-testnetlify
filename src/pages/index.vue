<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">{{ hits }}</h1>
      <h2 class="subtitle">My very unexceptional Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '@/components/Logo.vue';
import * as algoliasearch from 'algoliasearch';

export default {
  components: {
    Logo
  },
  data() {
    return {
      message: 'hello Sean',
      hits: []
    };
  },
  beforeMount() {
    const algoliaClient = algoliasearch('20V94JEJKD', 'f4ee136bf90522274a59aa306c6466b7');
    const index = algoliaClient.initIndex('dev_staging_amplience');
    const browser = index.browseAll();

    this.hits = [];

    browser.on('result', content => {
      console.log('');
      this.hits = this.hits.concat(content.hits);
    });

    browser.on('end', () => {
      console.log('Finished!');
      console.log('We got %d hits', this.hits.length);
    });

    browser.on('error', err => {
      throw err;
    });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
