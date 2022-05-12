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
  border: 1px solid var(--gray-100);
  padding: calc(var(--space-sm) * 2) calc(var(--space-sm) * 3);
}
</style>
