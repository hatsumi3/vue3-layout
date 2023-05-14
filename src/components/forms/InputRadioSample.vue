<template>
  <div class="m-4">選択中: {{ selectedRadio }}</div>
  <div class="m-4">
    <InputRadio
      v-model:checked="selectedRadio"
      :value="radioValue1"
      name="radio"
    >
      radio1
    </InputRadio>
  </div>
  <div class="m-4">
    <InputRadio
      v-model:checked="selectedRadio"
      :value="radioValue2"
      name="radio"
    >
      radio2
    </InputRadio>
  </div>
  <div class="m-4">
    <InputRadio
      v-model:checked="selectedRadio"
      :value="radioValue3"
      name="radio"
      :disabled="true"
    >
      radio disabled
    </InputRadio>
  </div>
  <div class="m-4">
    <InputRadio
      v-model:checked="selectedRadio"
      :value="radioValue4"
      name="radio"
      :is-error="true"
    >
      radio error
    </InputRadio>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import InputRadio from './InputRadio.vue';

const radioValue1 = ref('1');
const radioValue2 = ref('2');
const radioValue3 = ref('3');
const radioValue4 = ref('4');

const selectedRadio = ref(radioValue1.value);
</script>
