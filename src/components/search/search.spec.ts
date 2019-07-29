import { mount } from '@vue/test-utils';
import Search from './search.vue';
import searchResponse from './fixtures/search-response.json';
import searchResponseMutli from './fixtures/search-response-multiple-pages.json';
import flushPromises from 'flush-promises';
import { MultiResponse, Response } from '~/node_modules/@types/algoliasearch';

const mockSearchFn = jest.fn();

jest.mock(
  '@/services/algolia/search-client',
  (): Function =>
    function(): { [key: string]: {} | Function } {
      return {
        client: {
          search: (): Promise<MultiResponse<Response>> => mockSearchFn.apply(null, arguments)
        }
      };
    }
);

describe('Search', (): void => {
  beforeAll(
    (): void => {
      mockSearchFn.mockImplementation(
        async (): Promise<MultiResponse<Response>> => {
          return { results: [searchResponse] };
        }
      );
    }
  );

  afterAll(
    (): void => {
      jest.restoreAllMocks();
    }
  );

  test('is a search result', async (): Promise<void> => {
    const wrapper = mount(Search);
    await flushPromises();
    expect(mockSearchFn).toBeCalled();
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
    wrapper.destroy();
  });

  test('is a search result with pagination', async (): Promise<void> => {
    mockSearchFn.mockImplementation(
      async (): Promise<MultiResponse<Response>> => {
        return { results: [searchResponseMutli] };
      }
    );

    const wrapper = mount(Search);
    await flushPromises();
    const nextLink = wrapper.findAll('.ais-Pagination-item--nextPage').at(0);
    nextLink.trigger('click');
    await flushPromises();
    expect(mockSearchFn).toHaveBeenCalledTimes(3);
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
    wrapper.destroy();
  });
});
