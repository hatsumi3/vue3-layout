import { useFocus } from './eventHandler.ts';
import { useRenderComposition } from './test/testUtils';

describe('useFocus', () => {
  let isFocus: ReturnType<typeof useFocus>['isFocus'];
  let handleFocus: ReturnType<typeof useFocus>['handleFocus'];
  let handleBlur: ReturnType<typeof useFocus>['handleBlur'];
  let vm: ReturnType<typeof useRenderComposition>['wrapper'];

  const FOCUS_EVENT_NAME = 'test-focus';
  const BLUR_EVENT_NAME = 'test-blur';

  beforeEach(() => {
    const { composition, wrapper } = useRenderComposition(() => {
      return useFocus(
        { eventName: FOCUS_EVENT_NAME },
        { eventName: BLUR_EVENT_NAME }
      );
    });
    isFocus = composition.isFocus;
    handleFocus = composition.handleFocus;
    handleBlur = composition.handleBlur;
    vm = wrapper;
  });

  it('Initial value of focus is false.', () => {
    expect(isFocus.value).toBeFalsy();
  });

  describe('handleFocus', () => {
    it('When handleFocus is fired, isFocus becomes true.', () => {
      handleFocus();
      expect(isFocus.value).toBeTruthy();
    });

    it('The eventName will be emitted.', () => {
      handleFocus();
      expect(vm.emitted(FOCUS_EVENT_NAME)).toBeTruthy();
    });

    it('The value will be emitted.', () => {
      handleFocus(10);
      expect(vm.emitted(FOCUS_EVENT_NAME)?.[0]).toEqual([10]);
    });
  });

  describe('handleBlur', () => {
    it('When handleBlur is fired, isFocus becomes false.', () => {
      handleBlur();
      expect(isFocus.value).toBeFalsy();
    });

    it('The eventName will be emitted.', () => {
      handleBlur();
      expect(vm.emitted(BLUR_EVENT_NAME)).toBeTruthy();
    });

    it('The value will be emitted.', () => {
      handleBlur(10);
      expect(vm.emitted(BLUR_EVENT_NAME)?.[0]).toEqual([10]);
    });
  });
});
