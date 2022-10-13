<script setup>
import { typograph } from '../../utils/typograph'

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, default: null },
})
</script>

<template>
  <div class="page-header">
    <h1>{{ typograph(title) }}</h1>
    <div class="page-header-text">{{ text }}</div>
  </div>
</template>

<style lang="postcss">
.page-header {
  margin-bottom: calc(var(--space-md) * 4);
}

.page-header-text {
  color: var(--color-text-muted);
}
</style>
