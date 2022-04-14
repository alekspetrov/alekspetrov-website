<script setup>
const props = defineProps({
  content: Object,
})
</script>

<template>
  <ContentBlock v-for="(block, i) in content" :key="i" :block="block" />
</template>
