import { mount } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  it('Whether the contents of the slot will be rendered.', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'ボタン',
      },
    });
    expect(wrapper.html()).toContain('ボタン');
  });

  it('The Click event will be emited', () => {
    // arrange
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'ボタン',
      },
    });
    // act
    wrapper.find('button').trigger('click');
    // assert
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
