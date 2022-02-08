<script setup>
const props = defineProps({
  content: Object,
})
</script>

<template>
  <div class="content" v-if="content">
    <ContentBlock v-for="(block, i) in content" :key="i" :block="block" />
  </div>
</template>

<style lang="postcss">
.content {
  margin-block: var(--space-xl);
  box-sizing: border-box;

  & > * {
    box-sizing: border-box;
  }
}
</style>
