<template>
  <footer class="site-footer inner-padding ui-text">
    <div class="">© Aleksei Petrov</div>
    <a href="mailto:hello@alekspetrov.com" class="">Contact me</a>
  </footer>
</template>

<style scoped lang="postcss">
.site-footer {
  display: flex;
  justify-content: space-between;
  padding-block: var(--space-md);
  border-top: 1px var(--gray-300) solid;
}

@media screen and (min-width: 760px) {
  .site-footer {
    padding-block: var(--space-2xl);
  }
}
</style>
