import DynamicContentRenderingService from './dynamic-content-rendering.service';
import { ContentClient } from '~/node_modules/dc-delivery-sdk-js';

const mockRenderContentItem = jest.fn().mockImplementation(() => {
  return { body: '<html></html>' };
});

jest.mock('dc-delivery-sdk-js', () => {
  return {
    ContentClient: jest.fn(() => {
      return {
        renderContentItem: mockRenderContentItem
      };
    })
  };
});

describe('DynamicContentRenderingService', () => {
  afterAll(
    (): void => {
      jest.clearAllMocks();
    }
  );

  test('Loads a new client', (): void => {
    new DynamicContentRenderingService();
    expect(ContentClient).toBeCalledWith({ account: 'RENDERING_SERVICE_ACCOUNT_ID' });
  });

  test('Loads a new client with a preview domain', (): void => {
    new DynamicContentRenderingService(true);
    expect(ContentClient).toBeCalledWith({ account: 'RENDERING_SERVICE_ACCOUNT_ID', stagingEnvironment: 'STAGING_VSE_DOMAIN' });
  });

  test('Returns some HTML from the renderContentItem fn', async (): Promise<void> => {
    const service = new DynamicContentRenderingService();
    const res = await service.getRenderedContentItem('123', 'templateName');

    expect(mockRenderContentItem).toBeCalledWith('123', 'templateName');
    expect(res).toEqual({ body: '<html></html>' });
  });
});
