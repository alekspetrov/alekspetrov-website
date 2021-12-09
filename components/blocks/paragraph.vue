<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div v-if="block.content[0]">
    <template v-for="(node, idx) in block.content" :key="idx">
      <a
        v-if="node.text.link"
        :href="node.text.link"
        class="inline text-accent hover:underline"
        >{{ node.text.content }}</a
      >
      <p v-else class="inline opacity-60">{{ node.text.content }}</p>
    </template>
  </div>
</template>
