<script setup>
const props = defineProps({
  content: Object,
})
</script>

<template>
  <div class="page-content" v-if="content">
    <ContentBlock v-for="(block, i) in content" :key="i" :block="block" />
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
