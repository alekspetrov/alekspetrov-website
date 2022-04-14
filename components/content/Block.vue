<script setup>
const props = defineProps({
  block: Object,
})
</script>

<template>
  <component
    :is="`content-${block.type}`"
    v-if="block"
    :block="block"
  ></component>
</template>
