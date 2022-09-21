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
  <div v-if="posts" class="page-block">
    <h3>Thoughts</h3>
    <section v-for="post in posts" :key="post.id" class="post-item">
      <NuxtLink :to="makeSlug(post.title)">
        <time :datetime="post.date">{{ post.date }}</time>
        <div>
          <h3 class="link">{{ post.title }}</h3>
          <p>{{ post.description }}</p>
        </div>
      </NuxtLink>
    </section>
  </div>
</template>

<style lang="postcss">
.post-item {
  margin-bottom: var(--space-2xl);

  a {
    display: flex;
  }

  time {
    width: 25%;
  }

  div {
    flex: 1;
  }
}

@media screen and (max-width: 480px) {
  .post-item {
    a {
      display: block;
    }
  }
}
</style>
