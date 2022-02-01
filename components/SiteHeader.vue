<template>
  <header class="container site-header">
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
</style>
