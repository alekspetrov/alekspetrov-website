<template>
  <div class="blog-layout">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<style lang="postcss">
/* Grid */
.blog-layout {
  margin: 0 var(--space-base);
}
</style>
