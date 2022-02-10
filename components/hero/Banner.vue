<template>
  <div class="hero-banner">
    <img src="/avatar-lg.png" alt="avatar" />
    <div>
      <h1 class="banner-title">Products Maker Journal</h1>
      <p class="banner-text">by Aleks Petrov</p>
    </div>
  </div>
</template>

<style lang="postcss">
.hero-banner {
  padding-block: var(--space-md);
  padding-bottom: clamp(16em, 60%, 20em);

  & img {
    width: 60px;
    height: 60px;
    margin-bottom: var(--space-sm);
  }
}

.banner-title {
  margin-bottom: var(--space-sm);
}

@media screen and (min-width: 768px) {
  .hero-banner {
    display: flex;
    align-items: center;

    & img {
      width: 120px;
      height: 120px;
      margin-right: var(--space-lg);
    }
  }

  .banner-title {
    margin-bottom: 0;
  }
}
</style>
