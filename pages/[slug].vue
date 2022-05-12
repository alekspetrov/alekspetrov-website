<script setup>
const { params } = useRoute()

const {
  data: post,
  error,
  pending,
} = await useFetch(`/api/posts/get`, {
  params,
})

if (post.value) {
  useMeta(() => ({
    title: post.value.title,
    description: post.value.description,
  }))
}
</script>

<template>
  <NuxtLayout
    v-if="post && !error && !pending"
    name="blog"
    class="blog-content"
  >
    <PageHeader :text="post.title" :date="post.date" />
    <PageContent :content="post.blocks" />
    <!-- <BlockForm /> -->
  </NuxtLayout>
  <NuxtLayout v-else name="error" />
</template>

<style lang="postcss">
.blog-content {
  p,
  figure {
    margin: calc(var(--space-md) * 3) auto;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--gray-900);
    max-width: 40%;
    margin: calc(var(--space-md) * 6) auto;
  }

  p {
    font-size: var(--text-md);
    letter-spacing: 0.006rem;
    font-weight: 400;
  }

  p > a {
    transition: all var(--transition);
    box-shadow: 0 1px 0 var(--gray-800);
    transition: box-shadow var(--transition);

    &:hover {
      box-shadow: 0 1px 0 var(--gray-500);
    }
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    e & li {
      margin-bottom: var(--space-sm);
    }

    & li::before {
      display: inline-block;
      width: 32px;
    }
  }

  ul {
    & li::before {
      content: '—';
    }
  }

  ol {
    counter-reset: section;

    & li::before {
      counter-increment: section;
      content: counter(section) '. ';
    }
  }
}
</style>
