<script setup>
import slugify from 'slugify'

const props = defineProps({
  post: {
    type: Object,
    default: () => ({
      title: '5 Mac Applications To Boost Productivity',
      description:
        'Everytime I see posts like this there are some stupid things inside. This is why this post exists... let’s find something really great for productivity. ',
      date: 'January 27, 2022',
      tag: 'Productivity',
    }),
  },
})

const len = 7
</script>

<template>
  <article class="post-card">
    <NuxtLink :to="`/${slugify(post.title).toLowerCase()}`">
      <h3>{{ post.title }}</h3>
    </NuxtLink>
    <p>{{ post.description }}</p>
    <div class="info">
      <span>{{ post.date }}</span>
      <span> • </span>
      <span>{{ post.tag }}</span>
    </div>
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
    font-size: var(--text-xl);
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
