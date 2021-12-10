<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <figure>
    <img :src="block.src" :alt="block.caption" class="max-w-full" />
    <figcaption class="text-md opacity-40 mt-2">{{ block.caption }}</figcaption>
  </figure>
</template>
