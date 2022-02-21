<script setup>
const props = defineProps({
  content: Object,
})
</script>

<template>
  <div class="content inner-padding" v-if="content">
    <ContentBlock v-for="(block, i) in content" :key="i" :block="block" />
  </div>
</template>

<style lang="postcss">
.content {
  margin-block: var(--space-4xl);
  box-sizing: border-box;

  & > * {
    box-sizing: border-box;
  }
}
</style>
