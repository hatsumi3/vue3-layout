<template>
  <div>
    <p class="mb-2 text-2xl">Contents</p>
    <ContentsLoader :line="2" />
  </div>
</template>
<script setup lang="ts">
import ContentsLoader from './ContentsLoader.vue';
</script>
