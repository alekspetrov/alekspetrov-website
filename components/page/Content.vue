<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <ContentBlock v-for="(block, i) in content" :key="i" :block="block" />
</template>
