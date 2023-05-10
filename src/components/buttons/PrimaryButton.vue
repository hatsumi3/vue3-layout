
<template>
    <BaseButton :disabled="disabled" :class="buttonClass" @click="handleClick">
        <slot />
    </BaseButton>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseButton from "./BaseButton.vue";

const props = defineProps({
    disabled: { type: Boolean, default: false }
})

const emit = defineEmits<{
    (e: "click"): void
}>()

function handleClick() {
    emit("click")
}

const buttonClass = computed(() => {

    return props.disabled ? 'text-gray-400 bg-gray-100' : 'text-gray-900 bg-gray-200'

    // ref: object style.
    // return {
    //     'text-gray-400 bg-gray-100': props.disabled,
    //     'text-gray-900 bg-gray-200': !props.disabled,
    // }

})

</script>
