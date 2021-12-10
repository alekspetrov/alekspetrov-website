<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div
    v-if="block.content"
    class="bg-white bg-opacity-5 px-6 py-4 flex space-x-4"
  >
    <div>{{ block.icon }}</div>
    <div v-for="(node, idx) in block.content" :key="idx">
      <a
        v-if="node.href"
        :href="node.href"
        class="inline text-accent hover:underline"
      >
        {{ node.text }}
      </a>
      <p v-else class="opacity-80">{{ node.text }}</p>
    </div>
  </div>
</template>
