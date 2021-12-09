<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <h3 class="font-medium text-xl">{{ block.content[0].plain_text }}</h3>
</template>
