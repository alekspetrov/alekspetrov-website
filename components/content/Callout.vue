<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div v-if="block.content" class="block-callout">
    <template v-for="(node, idx) in block.content" :key="idx">
      <a
        v-if="node.href"
        :href="node.href"
        class="inline-block text-accent hover:underline"
        >{{ node.text }}</a
      >
      <template v-else>
        {{ node.text }}
      </template>
    </template>
  </div>
</template>

<style lang="postcss" scoped>
.block-callout {
  background: #000;
  color: white;
}
</style>
