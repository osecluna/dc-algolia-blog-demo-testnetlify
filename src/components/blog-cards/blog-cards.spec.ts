import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { Col as ElCol, Row as ElRow } from 'element-ui';
import BlogCards from './blog-cards.vue';

describe('BlogCards', () => {
  test('is a BlogCards instance with data for a single Cards', () => {
    const wrapper = shallowMount(BlogCards, {
      stubs: { Card: '<div class="card-stub"></div>', ElCol, ElRow, NuxtLink: RouterLinkStub },
      filters: {
        date: value => value
      },
      propsData: {
        blogArticles: [
          {
            title: 'test-title',
            description: 'test-description',
            link: 'test-id',
            timestamp: '2011-11-18T14:54:39.929Z'
          }
        ]
      }
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });

  test("is a BlogCards instance with data for a multiple Card's", () => {
    const wrapper = shallowMount(BlogCards, {
      stubs: { Card: '<div class="card-stub"></div>', ElCol, ElRow, NuxtLink: RouterLinkStub },
      filters: {
        date: value => value
      },
      propsData: {
        blogArticles: [
          {
            title: 'test-title',
            description: 'test-description',
            link: 'test-id',
            timestamp: '2011-11-17T14:54:39.929Z'
          },
          {
            title: 'test-title 2',
            description: 'test-description 2',
            link: 'test-id2',
            timestamp: '2011-11-18T14:54:39.929Z'
          }
        ]
      }
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
