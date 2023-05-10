<template>
    <div>
        <p class="mb-2 text-2xl">Buttons</p>
        <div class="mb-2">
            <PrimaryButton @click="handleClick">Primary</PrimaryButton>
        </div>
        <div class="mb-2">
            <PrimaryButton :disabled="true" @click="handleClick">Disabled Primary</PrimaryButton>
        </div>
        <div class="mb-2">
            <SecondaryButton @click="handleClick">Secondary</SecondaryButton>
        </div>
        <div class="mb-2">
            <SecondaryButton :disabled="true" @click="handleClick">Disabled Secondary</SecondaryButton>
        </div>
        <div class="mb-2">
            <SecondaryButton href="https://example.com" target="_blank" rel="noopener" @click="handleClick">Secondary link
            </SecondaryButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import PrimaryButton from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue'

function handleClick() {
    alert("clicked")
}

</script>