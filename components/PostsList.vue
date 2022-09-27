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
  <section v-for="post in posts" :key="post.id" class="post-item">
    <NuxtLink :to="makeSlug(post.title)">
      <time :datetime="post.date">{{ post.date }}</time>
      <div>
        <h3 class="link">{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </NuxtLink>
  </section>
</template>
