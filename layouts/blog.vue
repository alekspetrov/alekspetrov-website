<template>
  <div class="max-w-6xl mx-auto">
    <div>
      <div class="md:flex">
        <SiteHeader />
        <SiteBody>
          <slot />
        </SiteBody>
      </div>
      <SiteFooter />
    </div>
  </div>
</template>
