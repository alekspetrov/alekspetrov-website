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
  <article class="post-card inner-padding">
    <NuxtLink :to="slug">
      <h3>{{ post.title }}</h3>
    </NuxtLink>
    <p>{{ post.description }}</p>
    <div class="info">{{ post.date }}</div>
  </article>
</template>

<style lang="postcss" scoped>
.post-card {
  padding-block: var(--space-lg);
  border-bottom: 1px solid var(--gray-300);

  & h3 {
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: var(--leading-3xl);
    margin-bottom: var(--space-sm);
  }

  & p {
    flex: 1;
    font-family: var(--font-serif);
    font-size: var(--text-base);
    line-height: var(--leading-lg);
    color: var(--gray-600);
    margin-bottom: var(--space-md);
  }

  & .info {
    color: var(--gray-500);
  }
}

@media screen and (min-width: 860px) {
  .post-card {
    & p {
      font-size: var(--text-lg);
    }
  }
}
</style>
