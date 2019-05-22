<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">[ {{ texts.join(',') }} ]</h1>
      <h2 class="subtitle">{{ error }}</h2>
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
      message: 'Hello Sean',
      hits: [],
      texts: ['Loading...'],
      error: null
    };
  },
  created() {
    const algoliaClient = algoliasearch('20V94JEJKD', 'f43d324e0306f1700051c2a5547922bf');
    const index = algoliaClient.initIndex('dev_staging_amplience');

    index.setSettings({
      attributesToRetrieve: ['objectId', 'text', 'dateTimeStamp', 'image'],
      ranking: ['desc(dateTimeStamp)']
    });
    const browser = index.browseAll();

    browser.on('result', content => {
      this.hits = content.hits;
      this.texts = this.texts.concat(content.hits.map(h => (h.text ? h.text.text : '')));
    });

    browser.on('end', () => {
      console.log('Finished!');
      console.log('We got %d hits', this.hits.length);
      console.log(this.hits);
    });

    browser.on('error', err => {
      this.error = err;
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
