import { mount } from '@vue/test-utils';
import Layout from '@/layouts/default.vue';

describe('Layout', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Layout);
    expect(wrapper.vm).toBeTruthy();
  });
});
