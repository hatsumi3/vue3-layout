<template>
  <div>
    <p class="mb-2 text-2xl">Dialogs</p>
    <div>
      <MyDialog
        :visible="dialogVisible"
        @backdrop-clicked="switchDialog"
      >
        <template #title>
          <p class="font-bold">ダイアログ</p>
        </template>
        <template #body>
          本文を記述します。本文を記述します。本文を記述します。本文を記述します。本文を記述します。
        </template>
        <template #footer>
          <div class="flex justify-end">
            <SecondaryButton @click="switchDialog">close</SecondaryButton>
          </div>
        </template>
      </MyDialog>
    </div>
    <div class="mb-2">
      <PrimaryButton @click="switchDialog">open</PrimaryButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import MyDialog from './MyDialog.vue';
import SecondaryButton from '../buttons/SecondaryButton.vue';
import PrimaryButton from '../buttons/PrimaryButton.vue';

const dialogVisible = ref(false);
const switchDialog = () => {
  dialogVisible.value = !dialogVisible.value;
};
</script>
