<template>
  <div class="posts-filter ui-text">
    <div class="posts-filter-item">
      <div>Show All</div>
      <IconArrowDown class="icon" />
    </div>
    <div class="posts-filter-item">
      <IconSearch class="posts-filter-icon" />
      <div>Search</div>
    </div>
  </div>
</template>

<style lang="postcss">
.posts-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--gray-300);
  margin-bottom: var(--space-lg);
}

.posts-filter-item {
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
}

.posts-filtericon {
  width: 16px;
  height: 16px;
}

@media screen and (min-width: 768px) {
  .posts-filter {
    padding-bottom: var(--space-md);
  }
}
</style>
