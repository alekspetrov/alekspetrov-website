<template>
  <div class="blog">
    <header>
      <div>
        <NuxtLink to="/" class="blog-name">Aleks Petrov</NuxtLink>
        <div>Product Designer & Developer</div>
      </div>
      <div>
        <img src="/avatar-lg.png" alt="avatar" />
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
.blog {
  padding: calc(var(--space-lg) * 4) 0;
  padding-inline: calc(var(--space-md) * 2);

  > * {
    max-width: var(--blog-width);
    margin: auto;
  }

  header {
    margin-bottom: calc(var(--space-lg) * 6);
    display: flex;

    > div:first-of-type {
      flex-shrink: 0;
    }

    > div:last-of-type {
      margin-left: auto;
      max-width: 56px;
    }
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
