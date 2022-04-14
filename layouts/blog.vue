<template>
  <div class="blog">
    <header>
      <NuxtLink to="/" class="blog-name">Aleks Petrov</NuxtLink>
      <div>Product Designer & Developer</div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
.blog {
  padding: 4rem 0;
  padding-inline: calc(var(--space-md) * 2);

  > * {
    max-width: var(--blog-width);
    margin: auto;
  }

  > header {
    margin-bottom: 8rem;
  }
}

.blog-name {
  color: var(--white);
}

@media screen and (min-width: 700px) {
  .blog {
    padding-inline: 0;
  }
}
</style>
