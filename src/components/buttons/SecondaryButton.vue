<template>
  <a
    v-if="$attrs.href"
    :disabled="disabled"
    class="inline-flex items-center justify-center px-2 no-underline rounded-md h-11"
    :class="linkButtonClass"
  >
    <slot />
  </a>
  <BaseButton
    v-else
    :disabled="disabled"
    :class="buttonClass"
    @click="handleClick"
  >
    <slot />
  </BaseButton>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
  disabled: { type: Boolean, default: false },
  link: { type: Boolean, default: false },
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

function handleClick() {
  emit('click');
}

const buttonClass = computed(() => {
  return props.disabled
    ? 'text-gray-400 bg-gray-100'
    : 'text-gray-900 bg-gray-200';
});

const linkButtonClass = computed(() => {
  return props.disabled
    ? 'text-gray-400 bg-gray-100'
    : 'text-gray-900 bg-gray-200';
});
</script>
