<template>
  <div class="blog-layout">
    <LayoutHeader />
    <LayoutBody>
      <slot />
    </LayoutBody>
    <LayoutFooter />
  </div>
</template>

<style lang="postcss" scoped>
.blog-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  max-width: var(--blog-layout-max-width);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media screen and (min-width: 720px) {
  .blog-layout {
    border-left: 1px solid var(--gray-300);

    margin-left: 88px;
  }
}

@media screen and (min-width: 896px) {
  .blog-layout {
    border-right: 1px solid var(--gray-300);

    margin-right: 88px;
  }
}
</style>
