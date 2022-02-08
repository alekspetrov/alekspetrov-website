<script setup>
import { foramatDate } from '../../utils/dateToFormat'

const props = defineProps({
  title: String,
  description: String,
  date: String,
})
</script>

<template>
  <div class="page-header">
    <h1 class="header-title title-huge">{{ title }}</h1>
    <p class="subtitle">{{ description }}</p>
    <div class="header-info ui-text">
      <time>{{ foramatDate(date) }}</time>
      <!-- <span>Share It</span> -->
    </div>
  </div>
</template>

<style lang="postcss">
.page-header {
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--gray-300);
  margin-top: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.header-title {
  margin-bottom: var(--space-sm);
}

.header-info {
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-5xl);
}

@media screen and (min-width: 860px) {
  .header-title {
    margin-bottom: var(--space-md);
  }
}
</style>
