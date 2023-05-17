<template>
  <div
    class="relative inline-block w-full overflow-hidden border-2 border-solid rounded-md text-gray-80 h-24"
    :class="`${focusedClass} ${errorClass} ${disadledLabelClass}`"
  >
    <label class="relative flex items-center h-full px-2 cursor-text">
      <span
        class="absolute text-gray-400 select-none"
        :class="`${samllLabelClass}`"
      >
        {{ label }}
      </span>
      <input
        :type="type"
        class="w-full mt-3 placeholder-gray-400 focus:outline-none"
        :class="{ 'opacity-100': isFocus || value }"
        :value="value"
        :placeholder="isFocus ? placeholder : ''"
        :disabled="disabled"
        v-bind="$attrs"
        v-on="listeners"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { useFocus } from '../../composables/eventHandler';

const props = defineProps({
  value: { type: String, default: '' },
  label: { type: String, required: true },
  placeholder: { type: String, default: '' },
  type: {
    type: String as PropType<
      'text' | 'number' | 'password' | 'email' | 'tel' | 'date'
    >,
    default: 'text',
  },
  disabled: { type: Boolean, default: false },
  isError: { type: Boolean, default: false },
});

const emits = defineEmits<{
  (e: 'input', targetValue: string): void;
  (e: 'change', targetValue: string): void;
  (e: 'focus', event: Event): void;
  (e: 'blur', event: Event): void;
  (e: 'update:value', modelValue: string): void;
}>();

const { isFocus, handleFocus, handleBlur } = useFocus(
  { eventName: 'focus' },
  { eventName: 'blur' }
);

const handleInput = ({ target }: { target: HTMLInputElement }) => {
  emits('input', target.value);
  emits('update:value', target.value);
};
const handleChange = ({ target }: { target: HTMLInputElement }) => {
  emits('change', target.value);
  emits('update:value', target.value);
};

const samllLabelClass = computed(() => {
  return isFocus.value || props.value || props.type === 'date'
    ? 'transition origin-top-left transform scale-75 -translate-y-3'
    : '';
});
const errorClass = computed(() => {
  return props.isError ? 'border-red-500' : '';
});
const disadledLabelClass = computed(() => {
  return props.disabled && !props.value ? 'bg-gray-200' : '';
});
const focusedClass = computed(() => {
  return isFocus.value
    ? 'border-blue-700 ring-blue-100 transition duration-100'
    : 'border-gray-300';
});

const listeners = computed(() => {
  return {
    input: handleInput,
    change: handleChange,
    focus: handleFocus,
    blur: handleBlur,
  };
});
</script>
