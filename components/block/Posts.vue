<template>
  <div class="page-block">
    <h3 class="page-block-title">Thoughts</h3>
    <PostsList />
  </div>
</template>

<style lang="postcss">
.post-item {
  margin-bottom: var(--space-2xl);

  a {
    display: flex;
  }

  time {
    width: 25%;
  }

  div {
    flex: 1;
  }
}

@media screen and (max-width: 480px) {
  .post-item {
    a {
      display: block;
    }
  }
}
</style>
