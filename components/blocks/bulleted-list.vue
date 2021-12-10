<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <ul class="space list-disc marker:text-gray-400">
    <li v-for="(node, idx) in block.content" :key="idx" class="mb-2">
      <template v-for="(content, idx) in node" :key="idx">
        <a
          v-if="content.href"
          :href="content.href"
          class="inline text-accent hover:underline"
          >{{ content.text }}</a
        >
        <p v-else class="inline opacity-60">{{ content.text }}</p>
      </template>
    </li>
  </ul>
</template>
