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

<style scoped lang="postcss">
.container {
  padding-inline: 20px;
}
</style>
