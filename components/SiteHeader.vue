<script setup lang="ts">
const { query } = useRoute()

const roles = {
  prod: 'Product Manager',
  des: 'Product Designer & Developer',
  dev: 'Product Developer & Designer',
  default: 'Product Manager',
  // default: 'Design Engineer',
}

const role =
  query.role && typeof query.role === 'string' && roles[query.role]
    ? roles[query.role]
    : roles['default']
</script>

<template>
  <div class="site-header wrapper-sm">
    <div>
      <NuxtLink to="/" class="site-name">Aleks Petrov</NuxtLink>
      <p>{{ role }}</p>
    </div>
    <!-- <div class="main-nav">
      <NuxtLink to="/blog" class="nav-item">Menu</NuxtLink>
    </div> -->
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
  display: flex;
  align-items: start;
  gap: 30px;
}

.nav-item:hover {
  color: var(--color-text-base);
}
</style>
