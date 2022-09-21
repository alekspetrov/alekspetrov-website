<script setup>
import { typograph } from '../../utils/typograph'

const props = defineProps({
  text: { type: String, required: true },
  date: { type: String, default: Date.now() },
})
</script>

<template>
  <header class="page-header">
    <h1>{{ typograph(text) }}</h1>
    <div>{{ date }}</div>
  </header>
</template>

<style lang="postcss">
.page-header {
  margin-bottom: calc(var(--space-md) * 4);
}
</style>
