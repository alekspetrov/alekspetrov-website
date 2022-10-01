<template>
  <div class="page-block">
    <h3 class="page-block-title">Thoughts</h3>
    <PostsList />
    <NuxtLink class="card card-link card-row cards-more-link" to="/blog"
      >Read More →</NuxtLink
    >
  </div>
</template>

<style lang="postcss">
.cards-more-link {
  color: var(--color-text-muted);

  &:hover {
    color: var(--color-text-base);
  }
}
</style>
