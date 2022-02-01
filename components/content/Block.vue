<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <component :is="`blocks-${block.type}`" :block="block"></component>
</template>
