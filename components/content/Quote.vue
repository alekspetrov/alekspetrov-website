<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <blockquote v-if="block.content" class="block-quote">
    <template v-for="(node, idx) in block.content" :key="idx">
      <a
        v-if="node.href"
        :href="node.href"
        class="inline text-accent hover:underline"
        >{{ node.text }}</a
      >
      <p v-else class="opacity-80">{{ node.text }}</p>
    </template>
  </blockquote>
</template>

<style lang="postcss" scoped>
.block-quote {
  color: red;
}
</style>
