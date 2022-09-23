<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <p v-if="block.content" class="content-callout">
    <template v-for="(node, idx) in block.content" :key="idx">
      <a v-if="node.href" :href="node.href">
        {{ node.text }}
      </a>
      <template v-else>
        {{ node.text }}
      </template>
    </template>
  </p>
</template>

<style lang="postcss">
.content-callout {
  background: rgba(255, 255, 255, 0.01);
  padding: 16px 24px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  margin-bottom: var(--space-md);
}
</style>
