<script setup>
const props = defineProps({
  block: Object,
})
</script>

<template>
  <component
    v-if="block"
    :is="`content-${block.type}`"
    :block="block"
  ></component>
</template>
