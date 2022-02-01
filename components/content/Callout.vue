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
    class="
      dark:text-[#A7A6AB]
      text-black text-opacity-80
      bg-white bg-opacity-5
      px-6
      py-4
      rounded
    "
  >
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
