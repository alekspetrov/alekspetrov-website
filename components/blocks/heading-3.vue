<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <h3 class="font-medium text-xl pt-8">{{ block.content[0].text }}</h3>
</template>
