<template>
  <div class="hero-banner">
    <img src="avatar-lg.png" alt="avatar" />
    <div>
      <h1>Products Maker Journal</h1>
      <p>by Aleks Petrov</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.hero-banner {
  padding-block: var(--space-md);
  padding-bottom: clamp(16em, 60%, 20em);

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
    color: var(--gray-700);
  }
}

@media screen and (min-width: 768px) {
  .hero-banner {
    display: flex;
    align-items: center;

    & h1 {
      line-height: 1;
    }

    & img {
      width: 120px;
      height: 120px;
      margin-right: var(--space-lg);
    }

    p {
      font-size: 24px;
    }
  }
}
</style>
