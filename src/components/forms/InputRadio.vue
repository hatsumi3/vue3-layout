<template>
  <label
    class="inline-flex items-center h-6 align-middle"
    :class="{ 'cursor-not-allowed': disabled, 'cursor-pointer': !disabled }"
    @change="handleChange"
  >
    <input
      v-bind="$attrs"
      :value="value"
      type="radio"
      class="absolute w-0 h-0 outline-none opacity-0"
      :checked="isChecked"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div
      class="flex items-center justify-center w-6 h-6 border-2 border-gray-200 border-solid rounded-full"
      :class="`${checkedRingClass} ${focusedClass}`"
    >
      <span
        v-if="isChecked"
        class="w-3 h-3 rounded-full"
        :class="`${checkedCircleClass}`"
      />
    </div>
    <div class="pl-1">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { useFocus } from '../../composables/eventHandler';

const props = defineProps({
  value: {
    type: [String, Number, Array] as PropType<
      string | number | string[] | undefined
    >,
    required: true,
  },
  checked: {
    type: [String, Number, Array] as PropType<
      string | number | string[] | undefined
    >,
    default: '',
  },
  disabled: { type: Boolean, default: false },
  isError: { type: Boolean, default: false },
});

const emits = defineEmits<{
  (e: 'focus', event: Event): void;
  (e: 'blur', event: Event): void;
  (
    e: 'update:checked',
    selectedValue: string | number | string[] | undefined
  ): void;
}>();

const { isFocus, handleFocus, handleBlur } = useFocus(
  { eventName: 'focus' },
  { eventName: 'blur' }
);
const handleChange = () => {
  if (props.disabled) return;
  emits('update:checked', props.value);
};
const isChecked = computed(() => {
  return props.value === props.checked;
});

const checkedRingClass = computed(() => {
  if (props.disabled) {
    return 'border-gray-200 bg-gray-200 shadow-none';
  }
  if (isChecked.value && !props.isError) {
    return 'border-blue-700';
  }
  if (isChecked.value && props.isError) {
    return 'border-red-600';
  }
  return '';
});

const checkedCircleClass = computed(() => {
  if (props.disabled) {
    return 'bg-gray-200';
  }
  if (isChecked.value && !props.isError) {
    return 'bg-blue-700';
  }
  if (isChecked.value && props.isError) {
    return 'bg-red-600';
  }
  return '';
});

const focusedClass = computed(() => {
  return isFocus.value ? 'ring-2' : '';
});
</script>
