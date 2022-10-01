<template>
  <NuxtLayout name="blog">
    <div class="page-block">
      <h3 class="page-block-title">Pets</h3>
      <NuxtLink to="/projects/wordy" class="card card-row card-link">
        <div>
          <h3>Wordy</h3>
          <p>Learn 1000 words in 20 min per week</p>
        </div>
        <div>
          <span>In process</span>
        </div>
      </NuxtLink>
    </div>

    <div class="page-block">
      <h3 class="page-block-title">Selected projects</h3>
      <NuxtLink to="/projects/dashboards" class="card card-row card-link">
        <div>
          <h3>Dashboards</h3>
          <p>Design and Development</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/projects/product-design" class="card card-row card-link">
        <div>
          <h3>Crypto</h3>
          <p>Product Design</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/projects/retail" class="card card-row card-link">
        <div>
          <h3>Online shop</h3>
          <p>Product Design, Development, Management</p>
        </div>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
