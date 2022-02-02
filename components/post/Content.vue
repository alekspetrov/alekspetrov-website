<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="text-[17px] leading-7 space-y-8">
    <NotionBlock v-for="block in content" :key="block.id" :block="block" />
  </div>
</template>
