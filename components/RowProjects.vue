<template>
  <div class="page-block">
    <h3 class="page-block-title">Projects</h3>
    <div class="page-block-list">
      <NuxtLink to="/projects/wordy" class="card card-row card-link">
        <div>
          <h3>Wordy</h3>
          <p>Boost your vocab fast and free</p>
        </div>
        <span>Now</span>
      </NuxtLink>
      <NuxtLink to="/projects/web-monitoring" class="card card-row card-link">
        <div>
          <h3>Web Monitor</h3>
          <p>See endpoints availability</p>
        </div>
        <span>2020</span>
      </NuxtLink>
      <NuxtLink to="/projects/web-monitoring" class="card card-row card-link">
        <div>
          <h3>Workouts Scheduler</h3>
          <p>Track workouts and progress</p>
        </div>
        <span>2019</span>
      </NuxtLink>
    </div>
    <NuxtLink to="/projects" class="more-link"> Show all → </NuxtLink>
  </div>
</template>
