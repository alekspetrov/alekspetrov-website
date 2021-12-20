<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <p
    v-if="block.content"
    class="dark:text-[#A7A6AB] text-black text-opacity-80"
  >
    <template v-for="(node, idx) in block.content" :key="idx">
      <a
        v-if="node.href"
        :href="node.href"
        class="
          inline-block
          text-accent
          hover:underline
          transform
          transition-transform
          duration-200
          ease-in-out
        "
        >{{ node.text }}</a
      >
      <template v-else>
        {{ node.text }}
      </template>
    </template>
  </p>
</template>
