<script setup>
import Nprogress from 'nprogress'

const router = useRouter()

router.beforeResolve((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach(() => {
  Nprogress.done()
})
</script>

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blog-layout {
  max-width: var(--blog-layout-max-width);
  padding-inline: var(--blog-layout-side-padding);
  margin: 0 auto;
}

@media screen and (min-width: 1380px) {
  .blog-layout {
    padding-inline: 0;
  }
}
</style>
