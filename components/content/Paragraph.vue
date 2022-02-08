<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <p v-if="block.content[0]" class="body-text">
    <template v-for="(node, idx) in block.content" :key="idx">
      <a v-if="node.href" :href="node.href" class="body-link">
        {{ node.text }}
      </a>
      <template v-else>
        {{ node.text }}
      </template>
    </template>
  </p>
</template>
