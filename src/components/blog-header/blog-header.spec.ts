import { shallowMount } from '@vue/test-utils';
import { Header as ElHeader } from 'element-ui';
import BlogHeader from './blog-header.vue';

describe('Header', () => {
  test('is a Card instance with card data', () => {
    const wrapper = shallowMount(BlogHeader, {
      stubs: { ElHeader },
      propsData: {}
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
