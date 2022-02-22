<template>
  <div class="page">
    <div class="title">Page Not Found • Lost In Space?</div>
    <NuxtLink to="/" class="link">Go Home →</NuxtLink>
  </div>
</template>

<style lang="postcss">
.page {
  padding: 8vw;
  background: #000;
  color: white;
  min-height: 100vh;
}

.title {
  font-size: 14vw;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: var(--space-3xl);
}

.link {
  font-size: 5vw;
  text-decoration: underline;
}
</style>
