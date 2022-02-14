<template>
  <div class="hero-banner inner-padding">
    <div class="hero-body">
      <img src="/avatar-lg.png" alt="avatar" />
      <div>
        <h1 class="banner-title">Maker Journal</h1>
        <p class="banner-text">by Aleks Petrov</p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.hero-banner {
  padding-top: var(--space-lg);
  border-bottom: 1px solid var(--gray-300);

  & img {
    width: 60px;
    height: 60px;
    margin-right: var(--space-md);
  }

  height: 240px;
}

.hero-body {
  display: flex;
  align-items: center;
}

.banner-text {
  color: var(--gray-600);
}

@media screen and (min-width: 768px) {
  .hero-banner {
    padding-top: var(--space-2xl);

    & img {
      width: 88px;
      height: 88px;
      margin-right: var(--space-lg);
    }

    height: 400px;
  }
}
</style>
