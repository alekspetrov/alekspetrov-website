<template>
  <div class="posts-grid">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
@media screen and (min-width: 860px) {
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: var(--column-gap);
  }
}
</style>
