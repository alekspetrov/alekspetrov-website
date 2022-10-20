<script setup>
import { typograph } from '@/utils/typograph'

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, default: null },
})
</script>

<template>
  <header class="page-header">
    <h1>{{ typograph(title) }}</h1>
    <p>{{ text }}</p>
  </header>
</template>

<style lang="postcss">
.page-header {
  margin-bottom: calc(var(--space-md) * 4);
}
</style>
