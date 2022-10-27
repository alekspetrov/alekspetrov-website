<script setup lang="ts">
const { query } = useRoute();
</script>

<template>
  <div class="site-header wrapper-sm">
    <div>
      <NuxtLink to="/" class="site-name">Aleks Petrov</NuxtLink>
      <p>Product Led</p>
    </div>
    <div class="main-nav">
      <NuxtLink to="/experience" class="nav-item">Experience</NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss">
.site-header {
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-xl);
  margin-bottom: var(--space-4xl);
}

.site-name {
  color: var(--color-text-base);
}

.main-nav {
  color: var(--color-text-base);
  display: flex;
  align-items: start;
  gap: 30px;

  &:hover {
  }
}

.nav-item:hover {
  color: var(--color-text-base);
}
</style>
