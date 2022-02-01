<template>
  <header class="site-header">
    <NuxtLink to="/">Homepage</NuxtLink>
    <a href="https://twitter.com/alekspetrov_">Twitter</a>
  </header>
</template>

<style scoped lang="postcss">
.site-header {
  display: flex;
  justify-content: space-between;
  padding-block: var(--space-md);
  border-bottom: 1px var(--gray-300) solid;
}

@media screen and (min-width: 760px) {
  .site-header {
    padding-block: var(--space-2xl);
  }
}
</style>
