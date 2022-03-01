<template>
  <div class="blog-layout">
    <LayoutHeader />
    <LayoutBody>
      <slot />
    </LayoutBody>
    <LayoutFooter />
  </div>
</template>

<style lang="postcss">
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
    border-inline: 1px solid var(--gray-300);
    margin-inline: 56px;
  }
}

@media screen and (min-width: 1080px) {
  .blog-layout {
    margin-inline: 88px;
  }
}
</style>
