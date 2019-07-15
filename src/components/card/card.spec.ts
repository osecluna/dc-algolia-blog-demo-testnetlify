import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { Card as ElCard } from 'element-ui';
import Card from './card.vue';

describe('Card', () => {
  test('is a Card instance with card data', () => {
    const wrapper = shallowMount(Card, {
      stubs: { ElCard, NuxtLink: RouterLinkStub },
      filters: {
        blogDate: value => value
      },
      propsData: {
        title: 'test-title',
        description: 'test-description',
        link: 'test-id',
        timestamp: '2011-11-18T14:54:39.929Z',
        image: 'test-image.jpg'
      }
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
