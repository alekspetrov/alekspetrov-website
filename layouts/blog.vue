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
    <SiteHeader />
    <SiteBody>
      <slot />
    </SiteBody>
    <SiteFooter />
  </div>
</template>

<style lang="postcss" scoped>
.blog-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>

<style lang="postcss">
.container {
  padding-inline: 20px;
  font-size: var(--text-sm);
}
</style>
