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
  max-width: 760px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
