<template>
  <NuxtLayout name="blog">
    <div class="md:flex md:space-x-12">
      <div class="w-1/3 mb-8 md:mb-0">
        <img src="avatar-big.jpg" alt="" />
      </div>
      <div class="md:w-2/3">
        <div class="mb-10 pb-10 border-b border-opacity-10 mt-8">
          <h1 class="font-semibold text-xl md:text-2xl leading-8 mb-3">
            Aleksei Petrov
          </h1>
          <p class="md:font-medium md:text-lg opacity-60">
            About digital products, development and design.
          </p>
        </div>
        <BlogArticlesList />
      </div>
    </div>
  </NuxtLayout>
</template>
