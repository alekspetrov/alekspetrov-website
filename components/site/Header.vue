<template>
  <header class="site-header">
    <NuxtLink to="/" class="site-name">Aleks Petrov</NuxtLink>
    <div>Design Engineer</div>
  </header>
</template>

<style lang="postcss">
.site-header {
  display: block;
  line-height: 1.5rem;
  margin-bottom: var(--space-3xl);
}

.site-avatar {
  width: 72px;
  height: auto;
}

.site-name {
  display: inline-block;
  color: var(--white);
}
</style>
