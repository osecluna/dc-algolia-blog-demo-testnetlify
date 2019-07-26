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
  afterAll((): void => {
    jest.restoreAllMocks();
  });

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

  //   test('are search results with pagination', () => {
  //     const wrapper = shallowMount(Search, {
  //       stubs: { AisInstantSearchSsr, AisHits, AisSearchBox, AisPagination, NuxtLink: RouterLinkStub },

  //       propsData: {
  //         items: [
  //           {
  //             title: 'test-title',
  //             description: 'test-description',
  //             link: 'test-id',
  //             timestamp: '2011-11-17T14:54:39.929Z'
  //           },
  //           {
  //             title: 'test-title 2',
  //             description: 'test-description 2',
  //             link: 'test-id2',
  //             timestamp: '2011-11-18T14:54:39.929Z'
  //           }
  //         ]
  //       }
  //     });

  //     expect(wrapper.isVueInstance()).toBeTruthy();
  //     expect(wrapper.element).toMatchSnapshot();
  //   });
});
