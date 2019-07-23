import { ContentClient, ContentClientConfig, RenderedContentItem } from 'dc-delivery-sdk-js';

const stagingVseDomain: string = process.env.STAGING_VSE_DOMAIN || 'STAGING_VSE_DOMAIN';
const accountId: string = process.env.RENDERING_SERVICE_ACCOUNT_ID || 'RENDERING_SERVICE_ACCOUNT_ID';

export default class DynamicContentRenderingService {
  private client: ContentClient;

  public constructor(previewContent: boolean = false) {
    const clientOptions: ContentClientConfig = {
      account: accountId
    };

    if (previewContent) {
      clientOptions.stagingEnvironment = stagingVseDomain;
    }

    this.client = new ContentClient(clientOptions);
  }

  public async getRenderedContentItem(contentItemId, templateName): Promise<RenderedContentItem> {
    try {
      return await this.client.renderContentItem(contentItemId, templateName);
    } catch (err) {
      throw err;
    }
  }
}
