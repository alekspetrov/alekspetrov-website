<script setup>
import slugify from 'slugify'
import { typograph } from '../../utils/typograph'

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
      <h3>{{ typograph(post.title) }}</h3>
    </NuxtLink>
    <p>{{ post.description }}</p>
    <div class="post-card-info">
      <span>{{ post.date }}</span>
      <span>•</span>
      <span v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</span>
    </div>
  </article>
</template>

<style lang="postcss">
.post-card {
  padding-block: var(--space-xl);
  border-bottom: 1px solid var(--gray-300);

  & h3 {
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: var(--leading-3xl);
    margin-bottom: var(--space-sm);
    letter-spacing: -0.2px;
  }

  & p {
    flex: 1;
    font-family: var(--font-serif);
    font-size: var(--text-md);
    line-height: var(--leading-lg);
    color: var(--gray-700);
    margin-bottom: var(--space-xl);
  }
}

.post-card-info {
  font-size: var(--text-sm);
  color: var(--gray-600);

  & > *:nth-child(2) {
    padding-inline: var(--space-sm);
  }

  & > *:nth-child(3):not(:last-child)::after {
    content: ', ';
  }
}

@media screen and (min-width: 860px) {
  .post-card {
    padding-block: var(--space-2xl);
  }
}
</style>
