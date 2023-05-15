<template>
  <div>
    <p class="mb-2 text-2xl">Contents</p>
    <ContentsLoader :line="2" />
  </div>
  <div>
    <p>fetch data</p>
    <Suspense>
      <template #default>
        <PostView />
      </template>
      <template #fallback>
        <ContentsLoader :line="3" />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import PostView from './../PostView.vue';
import ContentsLoader from './ContentsLoader.vue';
</script>
