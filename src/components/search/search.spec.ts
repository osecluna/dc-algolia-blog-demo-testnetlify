import { shallowMount } from '@vue/test-utils';
import Search from './search.vue';
const mockRootMixinData = jest.fn();
const mockSearchClient = jest.fn();

jest.mock('../../services/algolia', () => {
  return jest.fn(() => {
    return {
      searchClient: mockSearchClient
    };
  });
});

jest.mock('vue-instantsearch', () => {
  return jest.fn(() => {
    return {
      ...jest.requireActual('vue-instantsearch'),
      createInstantSearch: jest.fn(() => {
        return {
          rootMixin: jest.fn(() => {
            return {
              data: () => {
                return [
                  {
                    title: 'test-title',
                    description: 'test-description',
                    link: 'test-id',
                    timestamp: '2011-11-18T14:54:39.929Z'
                  }
                ];
              }
            };
          })()
        }; // ouch...my brain
      })
    };
  })();
});

describe('Search', () => {
  afterAll(
    (): void => {
      jest.restoreAllMocks();
    }
  );

  test('is a search result with pagination', () => {
    mockRootMixinData.mockResolvedValueOnce({
      items: [
        {
          title: 'test-title',
          description: 'test-description',
          link: 'test-id',
          timestamp: '2011-11-18T14:54:39.929Z'
        }
      ]
    });
    const wrapper = shallowMount(Search);

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
    //expect(mockSearchClient).toBeCalled();
    expect(mockRootMixinData).toBeCalledWith(mockSearchClient, 'dev_staging_amplience');
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
