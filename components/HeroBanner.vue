<template>
  <div class="hero-banner">
    <img src="avatar-lg.png" alt="avatar" />
    <h1>Products Maker Journal</h1>
    <p>by Aleks Petrov</p>
  </div>
</template>

<style lang="postcss" scoped>
.hero-banner {
  padding-block: var(--space-md);
  padding-bottom: 68%;

  & img {
    width: 60px;
    height: 60px;
    margin-bottom: var(--space-sm);
  }

  & h1 {
    font-size: var(--text-3xl);
    line-height: var(--leading-5xl);
    margin-bottom: var(--space-sm);
  }

  & p {
    font-size: var(--text-base);
  }
}
</style>
