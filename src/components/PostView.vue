<template>
  <div
    v-for="post in data"
    :key="post.id"
  >
    <p class="py-2 border-b-4">{{ post.id }}: {{ post.title }}</p>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';

type Post = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const { data } = await axios.get<Post[]>(
  'https://jsonplaceholder.typicode.com/posts/'
);
</script>
