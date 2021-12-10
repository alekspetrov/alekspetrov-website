<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div v-if="block.content">
    <template v-for="(node, idx) in block.content" :key="idx">
      <a
        v-if="node.href"
        :href="node.href"
        class="inline text-accent hover:underline"
        >{{ node.text }}</a
      >
      <p v-else class="inline opacity-60">{{ node.text }}</p>
    </template>
  </div>
</template>
