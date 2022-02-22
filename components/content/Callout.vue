<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div v-if="block.content" class="body-callout body-text">
    <template v-for="(node, idx) in block.content" :key="idx">
      <a v-if="node.href" :href="node.href" class="body-link">
        {{ node.text }}
      </a>
      <template v-else>
        {{ node.text }}
      </template>
    </template>
  </div>
</template>

<style lang="postcss">
.body-callout {
  background: var(--gray-200);
  padding: var(--space-md);
  border-left: 4px solid var(--gray-500);
}
</style>
