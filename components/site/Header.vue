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
    <div class="site-name">
      <NuxtLink to="/">Aleks Petrov</NuxtLink>
      <div>{{ role }}</div>
    </div>
    <div class="main-nav">
      <NuxtLink to="/blog" class="nav-link">Thoughts</NuxtLink>
      <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
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
  color: var(--color-text-base);
  display: inline-block;

  div {
    color: var(--color-text-muted);
  }
}

.main-nav {
  display: none;
  align-items: start;
  gap: 32px;
}

@media screen and (min-width: 480px) {
  .main-nav {
    display: flex;
    gap: 40px;
  }
}

.nav-link {
  display: inline-flex;
  color: var(--color-text-muted);

  &.router-link-exact-active {
    color: var(--color-text-base);
  }
}
</style>
