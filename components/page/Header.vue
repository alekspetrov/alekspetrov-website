<script setup>
import { typograph } from '../../utils/typograph'
import { foramatDate } from '../../utils/dateToFormat'

const props = defineProps({
  text: String,
  date: String,
})
</script>

<template>
  <header class="page-header">
    <h1>{{ typograph(text) }}</h1>
    <div>{{ foramatDate(date, true, true) }}</div>
  </header>
</template>

<style lang="postcss">
.page-header {
  margin-bottom: calc(var(--space-md) * 4);
}
</style>
