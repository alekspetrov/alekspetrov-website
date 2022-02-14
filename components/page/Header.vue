<script setup>
import { foramatDate } from '../../utils/dateToFormat'

const props = defineProps({
  title: String,
  description: String,
  date: String,
})
</script>

<template>
  <div class="page-header inner-padding">
    <div class="page-header-content">
      <h1 class="header-title title-huge">{{ title }}</h1>
      <p class="subtitle">{{ description }}</p>
    </div>
    <div class="header-info ui-text">
      <time>{{ foramatDate(date) }}</time>
      <!-- <span>Share It</span> -->
    </div>
  </div>
</template>

<style lang="postcss">
.page-header {
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid var(--gray-300);
  margin-block: var(--space-lg);
}

.header-title {
  margin-bottom: var(--space-lg);
}

.header-info {
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-5xl);

  font-weight: 800;
}

@media screen and (min-width: 860px) {
  .header-title {
    margin-bottom: var(--space-lg);
  }
}
</style>
