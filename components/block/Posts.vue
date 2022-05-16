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
  <div class="posts">
    <h3>Thougths</h3>

    <nav v-if="posts">
      <ul class="split-list">
        <li v-for="post in posts" :key="post.id">
          <div>
            <time :datetime="post.date">{{ post.date }}</time>
          </div>
          <div>
            <NuxtLink :to="makeSlug(post.title)">
              <h3 class="link">{{ post.title }}</h3>
              <p>{{ post.description }}</p>
            </NuxtLink>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="postcss">
.posts {
  margin-bottom: calc(var(--space-md) * 6);

  > h3 {
    margin-bottom: calc(var(--space-md) * 2);
  }
}
</style>
