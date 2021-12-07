<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div v-if="block.content[0]" class="mb-6">
    <template v-for="(node, idx) in block.content" :key="idx">
      <a
        v-if="node.href"
        :href="node.href"
        class="inline text-accent hover:underline"
        >{{ node.plain_text }}</a
      >
      <p v-else class="inline opacity-60">{{ node.plain_text }}</p>
    </template>
  </div>
</template>
