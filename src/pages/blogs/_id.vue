<template>
  <div v-html="contentItem.body"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ContentClientConfig, RenderedContentItem } from '~/node_modules/dc-delivery-sdk-js';
import DynamicContentRenderingService from '@/services/dynamic-content-rendering/dynamic-content-rendering.service';

const accountId: string = process.env.RENDERING_SERVICE_ACCOUNT_ID || '';
const stagingVseDomain: string | undefined = process.env.RENDERING_SERVICE_STAGING_DOMAIN;
const baseUrl: string | undefined = process.env.RENDERING_SERVICE_BASE_URL;
const renderingTemplate: string = process.env.BLOG_POST_RENDERING_TEMPLATE || '';

@Component({})
export default class BlogPost extends Vue {
  private contentItem?: RenderedContentItem;

  public data() {
    return {
      contentItem: {}
    };
  }

  public async mounted() {
    await this.getContentItem();
  }

  public async getContentItem(): Promise<void> {
    try {
      const renderingServiceConfig: ContentClientConfig = {
        account: accountId
      };

      if (stagingVseDomain) {
        renderingServiceConfig.stagingEnvironment = stagingVseDomain;
      }

      if (baseUrl) {
        renderingServiceConfig.baseUrl = baseUrl;
      }

      const service = new DynamicContentRenderingService(renderingServiceConfig);
      this.contentItem = await service.getRenderedContentItem(this.$route.params.id, renderingTemplate);
    } catch (err) {
      // handle error
      console.error(err);
    }
  }
}
</script>
