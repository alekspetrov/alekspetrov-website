<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <ul class="body-list">
    <li v-for="(node, idx) in block.content" :key="idx">
      <template v-for="(content, i) in node" :key="i">
        <a v-if="content.href" :href="content.href" class="link">
          {{ content.text }}
        </a>
        <p v-else>{{ content.text }}</p>
      </template>
    </li>
  </ul>
</template>

<style lang="postcss">
.body-list {
  & > li {
    margin-bottom: var(--space-sm);
  }
}
</style>
