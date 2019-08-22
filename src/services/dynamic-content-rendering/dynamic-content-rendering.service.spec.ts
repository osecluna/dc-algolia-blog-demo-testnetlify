import DynamicContentRenderingService from './dynamic-content-rendering.service';
import { ContentClient } from '~/node_modules/dc-delivery-sdk-js';

const mockRenderContentItem = jest.fn().mockImplementation(
  (): { body: string } => {
    return { body: '<html></html>' };
  }
);

jest.mock(
  'dc-delivery-sdk-js',
  (): { ContentClient: Function } => {
    return {
      ContentClient: jest.fn(
        (): { renderContentItem: Function } => {
          return {
            renderContentItem: mockRenderContentItem
          };
        }
      )
    };
  }
);

describe('DynamicContentRenderingService', (): void => {
  afterAll(
    (): void => {
      jest.clearAllMocks();
    }
  );

  test('Loads a new client', (): void => {
    const opts = {
      account: 'DC_RENDERING_SERVICE_ACCOUNT_ID'
    };

    new DynamicContentRenderingService(opts);
    expect(ContentClient).toBeCalledWith(opts);
  });

  test('Loads a new client with a preview domain', (): void => {
    const opts = {
      account: 'DC_RENDERING_SERVICE_ACCOUNT_ID',
      stagingEnvironment: 'DC_RENDERING_SERVICE_STAGING_DOMAIN'
    };

    new DynamicContentRenderingService(opts);
    expect(ContentClient).toBeCalledWith(opts);
  });

  test('Loads a new client with a baseUrl', (): void => {
    const opts = {
      account: 'DC_RENDERING_SERVICE_ACCOUNT_ID',
      baseUrl: 'DC_RENDERING_SERVICE_BASE_URL'
    };

    new DynamicContentRenderingService(opts);
    expect(ContentClient).toBeCalledWith(opts);
  });

  test('Returns some HTML from the renderContentItem fn', async (): Promise<void> => {
    const opts = {
      account: 'DC_RENDERING_SERVICE_BASE_URL'
    };

    const service = new DynamicContentRenderingService(opts);
    const res = await service.getRenderedContentItem('123', 'templateName');

    expect(mockRenderContentItem).toBeCalledWith('123', 'templateName');
    expect(res).toEqual({ body: '<html></html>' });
  });
});
