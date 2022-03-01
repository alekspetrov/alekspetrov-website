<script setup>
import { foramatDate } from '../../utils/dateToFormat'
import { typograph } from '../../utils/typograph'

const props = defineProps({
  title: String,
  description: String,
  date: String,
  tags: Array,
})
</script>

<template>
  <div class="page-header">
    <div class="page-header-content inner-padding">
      <h1 class="header-title title-huge">{{ typograph(title) }}</h1>
      <p class="subtitle">{{ description }}</p>
    </div>
    <div class="header-info ui-text inner-padding">
      <time>{{ foramatDate(date) }}</time>
      <span v-for="tag in tags" :key="tag.id">{{ tag.name }}</span>
    </div>
  </div>
</template>

<style lang="postcss">
.page-header {
  margin-block: var(--space-3xl);
}

.header-title {
  margin-bottom: var(--space-lg);
}

.header-info {
  line-height: 0.5;
  border-block: 1px solid var(--gray-300);
  padding-block: var(--space-lg);
  margin-top: var(--space-5xl);
  font-weight: 600;

  & > * {
    padding-block: var(--space-sm);
  }

  & > *:not(:first-child) {
    border-left: 1px solid var(--gray-300);
    padding-left: var(--space-lg);
    margin-left: var(--space-lg);
  }
}
</style>
