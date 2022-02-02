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
body {
  background: var(--gray-100);
}

.blog-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blog-layout {
  max-width: 1280px;
  padding-inline: 20px;
  margin: 0 auto;
  font-size: var(--text-sm);
}

@media screen and (min-width: 1281px) {
  .blog-layout {
    padding-inline: 0;
  }
}
</style>
