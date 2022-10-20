<script setup>
useHead({
  title: 'Web Monitoring',
  meta: [
    {
      name: 'description',
      content: 'A project to monitor web -sites, -endpoints, -apis',
    },
  ],
})
</script>

<template>
  <NuxtLayout name="blog">
    <PageHeader
      class="wrapper-sm"
      title="Web Monitoring"
      text="Made for internal teams to see if websites available realtime."
    />
    <div class="article-layout">
      <figure class="article-item-full">
        <img
          class="article-img-wide"
          src="https://res.cloudinary.com/alekspetrov/image/upload/v1665594447/website/web-monitoring-1_difrzm.png"
          alt="Web Monitoring UI"
        />
      </figure>
      <h3>Input</h3>
      <p>
        There are many microservices, websites and hosts owning by different
        teams. The only way to know if service available or to find existing
        open endpoints is to contact with another owners. This adds load and
        unnecessary actions.
      </p>
      <p>
        We can’t use third-party to solve this, because of security, the network
        is close, and we have our own checklist to find why it is not working.
      </p>
      <h3>Success measure</h3>
      <p>Decrease status requests:</p>
      <ul>
        <li>1 month: 10-20%</li>
        <li>3 month: 60%</li>
        <li>6 month: 98%</li>
      </ul>
      <h3>Solution</h3>
      <p>
        Dashboard with monitoring for all api, data-endpoints and websites and
        represent it in a simple way. It helps all the company see if endpoint
        works or web-service is available and grab more info.
      </p>
      <p>
        I create a simple design to show all the nodes with a memory and cpu
        usage and availability. Unavailable and issued nodes goes first.
      </p>
      <p>
        Admins and owners has “Stop" button to disconnect container from the
        cloud and stop website in emergency way. This option is related to
        business specific with regulators who can issue new rules unexpectedly
        and sometimes it’s better to stop web-service or website works than lose
        you license.
      </p>
      <h3>Launch</h3>
      <p>
        After launch we got positive feedback and decreased load on incident
        managers, product owners and developers as expected. Now all new
        endpoints connected to monitoring are available in out dashboard for all
        the authorized users.
      </p>
      <h3>Conclusions</h3>
      <p>
        Platform product are very important and help to decrease load from
        specialists on different levels. This types of products underestimated
        in positive effort that they can bring.
      </p>
      <RowForm />
    </div>
  </NuxtLayout>
</template>
