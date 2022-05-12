<script setup>
const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <h3 class="body-title">{{ block.content[0].text }}</h3>
</template>

<style lang="postcss">
.body-title {
  padding-top: calc(var(--space-md) * 2);
}
</style>
