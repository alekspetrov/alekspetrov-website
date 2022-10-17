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
    <div class="site-name">
      <NuxtLink to="/">Aleks Petrov</NuxtLink>
      <div>{{ role }}</div>
    </div>
    <div class="main-nav">
      <NuxtLink to="/blog" class="nav-link">Writings</NuxtLink>
      <NuxtLink to="/experience" class="nav-link">Experience</NuxtLink>
      <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss">
.site-header {
  /* display: flex; */
  justify-content: space-between;
  margin-top: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

.site-name {
  color: var(--color-text-base);
  display: inline-block;

  margin-bottom: var(--space-xl);

  div {
    color: var(--color-text-muted);
  }
}

.main-nav {
  display: flex;
  align-items: start;
  gap: 30px;
}

.nav-link {
  display: inline-flex;
  color: var(--color-text-muted);

  &.router-link-exact-active {
    color: var(--color-text-base);
  }
}

@media screen and (min-width: 560px) {
  .site-header {
    display: flex;
  }
}
</style>
