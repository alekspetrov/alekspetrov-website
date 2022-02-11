<script setup>
import slugify from 'slugify'

const props = defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
})

const slug = `/${slugify(props.post.title, {
  remove: /[:+~*.()'"!@]/g,
  lower: true,
})}`
</script>

<template>
  <article class="post-card">
    <NuxtLink :to="slug">
      <h3>{{ post.title }}</h3>
    </NuxtLink>
    <p>{{ post.description }}</p>
    <div class="info">{{ post.date }}</div>
  </article>
</template>

<style lang="postcss" scoped>
.post-card {
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--gray-300);
  margin-bottom: var(--space-lg);
  display: flex;
  flex-direction: column;

  & h3 {
    font-size: var(--text-2xl);
    line-height: var(--leading-3xl);
    margin-bottom: var(--space-sm);
  }

  & p {
    flex: 1;
    font-family: var(--font-serif);
    font-size: var(--text-base);
    line-height: var(--leading-lg);
    color: var(--gray-700);
    margin-bottom: var(--space-sm);
  }

  & .info {
    color: var(--gray-600);
  }

  /* Remove border for last row in the grid */
  &:nth-child(3n + 1):nth-last-child(-n + 3),
  &:nth-child(3n + 1):nth-last-child(-n + 3) ~ .post-card {
    border-bottom: 0;
  }
}

@media screen and (min-width: 860px) {
  .post-card {
    border-bottom: 1px solid var(--gray-300);

    & h3,
    & p {
      margin-bottom: var(--space-md);
    }
  }
}
</style>
