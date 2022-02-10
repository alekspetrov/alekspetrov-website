<template>
  <div class="posts-grid">
    <slot />
  </div>
</template>

<style lang="postcss">
.posts-grid {
  padding-top: var(--space-lg);
  border-top: 1px solid var(--gray-300);
}

@media screen and (min-width: 860px) {
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--column-gap);
  }
}
</style>
