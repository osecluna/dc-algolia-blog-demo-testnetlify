import { shallowMount } from '@vue/test-utils';
import { Header as ElHeader } from 'element-ui';
import BlogHeader from './blog-header.vue';

describe('Header', (): void => {
  test('is a Card instance with card data', (): void => {
    const wrapper = shallowMount(BlogHeader, {
      stubs: { ElHeader },
      propsData: {}
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
