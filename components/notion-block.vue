<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div>
    <component :is="`post-${block.type}`" :block="block"></component>
  </div>
</template>
