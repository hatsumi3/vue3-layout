<template>
  <button
    class="px-2 rounded-md h-11"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void;
}>();

function handleClick() {
  emit('click');
}
</script>
