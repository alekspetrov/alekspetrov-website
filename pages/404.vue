<template>
  <NuxtLayout name="blog"
    ><h3>404</h3>
    <p>Sorry, there is no such page</p>
  </NuxtLayout>
</template>

<style lang="postcss">
.error-page {
  padding: 8vw;
  background: #000;
  color: white;
  min-height: 100vh;
}

.error-page-title {
  font-size: 14vw;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: var(--space-3xl);
}

.error-page-link {
  font-size: 5vw;
  text-decoration: underline;
}
</style>
