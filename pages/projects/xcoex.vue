<template>
  <NuxtLayout name="blog">
    <PageHeader
      class="wrapper-sm"
      title="XCOEX"
      text="Crypto trading and exchange platform"
    />
    <div class="article-layout">
      <figure class="article-item-full">
        <img
          class="article-img-wide"
          src="https://res.cloudinary.com/alekspetrov/image/upload/v1665594447/website/web-monitoring-1_difrzm.png"
          alt="Web Monitoring UI"
          style="width: 200%"
        />
      </figure>
      <p>
        We had a lot of request from other teams if the service or host or api
        is awailable or not, sometimes it is not simple to find out what source
        to check and why it lays down. To simplify this process and move from
        model "ask" to model "watch".
      </p>
    </div>
    <RowForm />
  </NuxtLayout>
</template>
