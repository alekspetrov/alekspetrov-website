<script setup>
import { foramatDate } from '../../utils/dateToFormat'

const props = defineProps({
  title: String,
  description: String,
  date: String,
  tags: Array,
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
      <span>•</span>
      <span v-for="tag in tags" :key="tag.id">{{ tag.name }}</span>
    </div>
  </div>
</template>

<style lang="postcss">
.page-header {
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid var(--gray-300);
  margin-block: var(--space-3xl);
}

.header-title {
  margin-bottom: var(--space-lg);
}

.header-info {
  margin-top: var(--space-5xl);

  & > *:nth-child(2) {
    padding-inline: var(--space-sm);
  }

  & > *:nth-child(3):not(:last-child)::after {
    content: ', ';
  }
}

.header-info-share {
  margin-left: auto;
}

@media screen and (min-width: 860px) {
  .header-title {
    margin-bottom: var(--space-lg);
  }
}
</style>
