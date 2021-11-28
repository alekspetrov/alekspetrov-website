<script>
export default {
  layout: 'blog',
}
</script>

<template>
  <div>
    <div class="md:flex">
      <SiteHeader />
      <SiteBody>
        <BlogArticlesList />
      </SiteBody>
    </div>
    <SiteFooter />
  </div>
</template>
