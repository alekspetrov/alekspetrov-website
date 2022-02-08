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
    <h1>
      {{ title }}
    </h1>
    <p>
      {{ description }}
    </p>
    <div class="info">
      <time>{{ foramatDate(date) }}</time>
      <span>Share It</span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.page-header {
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--gray-300);
  margin-top: var(--space-lg);
  margin-bottom: var(--space-lg);

  & h1 {
    font-size: var(--text-4xl);
    line-height: var(--leading-5xl);
    font-weight: 800;
    margin-bottom: var(--space-md);
  }

  & p {
    font-size: var(--text-md);
    line-height: var(--leading-xl);
    margin-bottom: var(--space-xl);
  }

  & time {
    color: var(--gray-700);
  }

  .info {
    display: flex;
    justify-content: space-between;
  }
}
</style>
