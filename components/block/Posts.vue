<script setup>
import slugify from 'slugify'

const { data: posts } = await useFetch('/api/posts/list')

useMeta(() => ({
  title: 'Aleks Petrov',
  description: 'Digital products maker journal',
}))

const makeSlug = (text) => {
  return `/${slugify(text, {
    remove: /[:+~*.()'"!@]/g,
    lower: true,
  })}`
}
</script>

<template>
  <div class="posts">
    <h3>
      <div>Thougths</div>
      <div>2022</div>
    </h3>

    <nav v-if="posts">
      <NuxtLink v-for="post in posts" :key="post.id" :to="makeSlug(post.title)">
        <p>{{ post.title }}</p>
        <hr />
        <time :datetime="post.date">{{ post.date }}</time>
      </NuxtLink>
    </nav>
  </div>
</template>

<style lang="postcss">
.posts {
  h3 {
    display: flex;
    justify-content: space-between;
    margin-bottom: calc(var(--space-sm) * 3);

    div:nth-child(2) {
      color: var(--gray-500);
    }
  }

  nav {
    a {
      display: flex;
      align-items: baseline;
      height: 29px;
      margin-bottom: var(--space-md);
      transition: color var(--transition);
      cursor: pointer;
    }

    p {
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    hr {
      flex: 1;
      margin-inline: var(--space-sm);
      height: 1px;
      border: 0;
      border-bottom: 1px dotted var(--gray-900);
    }

    time {
      white-space: nowrap;
    }

    &:hover {
      color: var(--gray-100);
    }
  }
}
</style>
