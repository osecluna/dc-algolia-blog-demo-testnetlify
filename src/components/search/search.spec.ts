import { mount } from '@vue/test-utils';
import Search from './search.vue';
import searchResponse from './fixtures/search-response.json';
import flushPromises from 'flush-promises';
import { MultiResponse, Response } from '~/node_modules/@types/algoliasearch';

const mockSearchFn = jest.fn();

jest.mock(
  '@/services/algolia/search-client',
  () =>
    function() {
      return {
        client: {
          search: () => mockSearchFn.apply(null, arguments)
        }
      };
    }
);

describe('Search', () => {
  afterAll(
    (): void => {
      jest.restoreAllMocks();
    }
  );

  test('is a search result with pagination', async () => {
    mockSearchFn.mockImplementationOnce(
      async (): Promise<MultiResponse<Response>> => {
        return { results: [searchResponse] };
      }
    );

    const wrapper = mount(Search);
    await flushPromises();

    expect(mockSearchFn).toBeCalled();

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
