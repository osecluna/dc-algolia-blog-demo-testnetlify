import { ContentClient, ContentClientConfig, RenderedContentItem } from 'dc-delivery-sdk-js';

export default class DynamicContentRenderingService {
  private client: ContentClient;

  public constructor(clientOptions: ContentClientConfig) {
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
