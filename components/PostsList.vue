<script setup>
import slugify from 'slugify'

const { data: posts } = await useFetch('/api/posts/list')

const makeSlug = (text) => {
  return `/${slugify(text, {
    remove: /[:+~*.()'"!@]/g,
    lower: true,
  })}`
}
</script>

<template>
  <div class="cards">
    <NuxtLink
      v-for="post in posts"
      :key="post.id"
      class="card card-link card-row"
      :to="makeSlug(post.title)"
    >
      <h3>{{ post.title }}</h3>
      <time :datetime="post.date" class="card-date">{{ post.date }}</time>
    </NuxtLink>
  </div>
</template>

<style lang="postcss">
.card-date {
  color: var(--color-text-muted);
}
</style>
