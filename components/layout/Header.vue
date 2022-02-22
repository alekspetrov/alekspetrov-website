<template>
  <header class="site-header inner-padding ui-text">
    <NuxtLink to="/">Homepage</NuxtLink>
    <a href="https://twitter.com/alekspetrov_">Twitter</a>
  </header>
</template>

<style lang="postcss">
.site-header {
  display: flex;
  justify-content: space-between;
  padding-block: var(--space-md);
  border-bottom: 1px solid var(--gray-300);
}

@media screen and (min-width: 760px) {
  .site-header {
    padding-block: var(--space-lg);
  }
}
</style>
