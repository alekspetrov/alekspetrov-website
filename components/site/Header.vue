<script setup lang="ts">
const { query } = useRoute()

const roles = {
  prod: 'Product Manager',
  des: 'Product Designer & Developer',
  dev: 'Product Developer & Designer',
  default: 'Design Engineer',
}

const role =
  query.role && typeof query.role === 'string' && roles[query.role]
    ? roles[query.role]
    : roles['default']
</script>

<template>
  <header class="site-header">
    <div>
      <NuxtLink to="/" class="site-name">Aleks Petrov</NuxtLink>
      <div>{{ role }}</div>
    </div>
  </header>
</template>

<style lang="postcss">
.site-header {
  display: flex;
  justify-content: space-between;
  line-height: 1.5rem;
  margin-bottom: var(--space-4xl);
}

.site-name {
  display: inline-block;
  color: var(--white);
}

.main-nav {
  display: flex;
  gap: 24px;
}
</style>
