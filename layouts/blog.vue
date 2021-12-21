<script setup>
import Nprogress from 'nprogress'

const router = useRouter()

router.beforeResolve((to, from, next) => {
  console.log('before')
  Nprogress.start()
  next()
})

router.afterEach(() => {
  console.log('after')
  Nprogress.done(true)
})
</script>

<template>
  <div
    class="
      bg-white
      text-black
      dark:bg-primary dark:text-white
      antialiased
      text-md
    "
  >
    <div class="blog-layout">
      <site-header />
      <div>
        <slot />
      </div>
      <site-footer />
    </div>
  </div>
</template>

<style>
.blog-layout {
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
