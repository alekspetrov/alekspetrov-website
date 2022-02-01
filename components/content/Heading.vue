<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <h3 class="pt-8 text-xl font-medium">{{ block.content[0].text }}</h3>
</template>
