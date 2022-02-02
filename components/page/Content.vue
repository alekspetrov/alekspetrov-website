<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="page-content">
    <!-- <NotionBlock v-for="block in content" :key="block.id" :block="block" /> -->
  </div>
</template>

<style lang="postcss" scoped>
.page-content {
  margin-bottom: var(--space-lg);

  & p {
    font-size: var(--text-base);
    line-height: var(--leading-lg);
  }
}
</style>
