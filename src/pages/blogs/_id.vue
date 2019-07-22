<template>
  <div id="blog-content" v-html="contentItem.body"></div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {RenderedContentItem} from "~/node_modules/dc-delivery-sdk-js";
  import DynamicContentRenderingService from "@/services/dynamic-content-rendering/dynamic-content-rendering.service";

  const renderingTemplate = process.env.BLOG_POST_RENDERING_TEMPLATE || 'BLOG_POST_RENDERING_TEMPLATE';

  @Component({})
  export default class BlogPost extends Vue {
    private contentItem?: RenderedContentItem;

    public data() {
      return {
        contentItem: {}
      }
    }

    public async mounted() {
      await this.getContentItem();
    }

    public async getContentItem(): Promise<void> {
      try {
        const service = new DynamicContentRenderingService();
        this.contentItem = await service.getRenderedContentItem(this.$route.params.id, renderingTemplate);
      } catch (err) {
        // handle error
        console.error(err);
      }
    }
  }
</script>
