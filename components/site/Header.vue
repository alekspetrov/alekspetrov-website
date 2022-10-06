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
  <div class="site-header wrapper-sm">
    <div class="site-name">
      <NuxtLink to="/">Aleks Petrov</NuxtLink>
      <div>{{ role }}</div>
    </div>
    <div class="main-nav">
      <NuxtLink to="/blog" class="nav-link">Thoughts</NuxtLink>
      <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss">
.site-header {
  display: flex;
  justify-content: space-between;
  line-height: 1.5rem;
  margin-top: var(--space-3xl);
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

.nav-link {
  display: inline-flex;
  color: var(--color-text-muted);

  &.router-link-exact-active {
    color: var(--color-text-base);
  }
}

@media screen and (min-width: 480px) {
  .main-nav {
    display: flex;
    gap: 40px;
  }
}
</style>
