<template>
  <div class="error-page">
    <div class="error-page-title">Page Not Found • Lost In Space?</div>
    <NuxtLink to="/" class="error-page-link">Go Home →</NuxtLink>
  </div>
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
