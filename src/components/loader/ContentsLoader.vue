<template>
  <div>
    <template
      v-for="n in lines"
      :key="`line-${n}`"
    >
      <div
        v-if="isOneLine || n >= 1"
        class="relative w-full h-8 mb-2 overflow-hidden bg-gray-100 bg-no-repeat after:transform first:my-2 rounded-5 after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-gray-100 after:via-gray-200 after:to-gray-100 contents-loader"
        data-test="long-loader"
      ></div>
      <div
        v-else
        class="relative w-1/2 h-8 mb-2 overflow-hidden bg-gray-100 bg-no-repeat after:transform first:my-2 rounded-5 after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-gray-100 after:via-gray-200 after:to-gray-100 contents-loader"
        data-test="half-loader"
      ></div>
    </template>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  line: { type: Number, default: 1 },
});

const lines = Array.from(new Array(props.line))
  .map((_, i) => i)
  .reverse();
const isOneLine = lines.length === 1;
</script>
<style lang="postcss" scoped>
.contents-loader {
  &::after {
    animation: shimmer 2s infinite;
    content: '';
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
