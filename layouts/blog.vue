<template>
  <div class="blog-layout">
    <SiteHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
.blog-layout {
  padding: var(--space-3xl);
  padding-inline: calc(var(--space-md) * 2);
  max-width: var(--blog-width);
  margin: auto;
}

@media screen and (min-width: 700px) {
  .blog-layout {
    padding-inline: 0;
  }
}
</style>
