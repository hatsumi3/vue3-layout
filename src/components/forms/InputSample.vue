<template>
  <div>
    <p class="mb-2 text-2xl">Forms</p>
    <div class="w-80">
      <InputText
        v-model:value="inputTextValue"
        placeholder="placeholder"
        label="InputText with v-model"
      />
    </div>
    <div class="w-80">
      <InputText
        :value="inputTextValue"
        placeholder="placeholder"
        label="InputText with event hander"
        @input="handleInputText"
      />
    </div>
    <div class="w-80">
      <InputText
        :disabled="true"
        label="disabled"
      />
    </div>
    <div class="w-80">
      <InputText
        v-model:value="inputTextValue"
        :is-error="true"
        label="error"
      />
    </div>
    <div>
      <InputText
        v-model:value="inputTextValue"
        label="width full"
      />
    </div>
    <div class="w-80">
      <InputText
        v-model:value="inputNumberValue"
        type="number"
        label="number"
      />
    </div>
    <div class="w-80">
      <InputText
        v-model:value="inputPasswordValue"
        type="password"
        label="password"
      />
    </div>
    <div class="w-80">
      <InputText
        v-model:value="inputEmailValue"
        type="email"
        label="email"
      />
    </div>
    <div class="w-80">
      <InputText
        v-model:value="inputTelValue"
        type="tel"
        label="tel"
      />
    </div>
    <div class="w-80">
      <InputText
        v-model:value="inputDateValue"
        type="date"
        label="date"
      />
    </div>

    <!-- not allowed type -->
    <!-- <div class="w-80">
      <InputText v-model:value="inputDateValue" type="url" label="url" />
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import InputText from './InputText.vue';

const inputTextValue = ref('');
const handleInputText = (value: string) => {
  inputTextValue.value = value;
};
const inputNumberValue = ref('0');
const inputPasswordValue = ref('');
const inputEmailValue = ref('');
const inputTelValue = ref('');
const inputDateValue = ref('');
</script>
