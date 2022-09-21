<template>
  <div class="page-block">
    <h3>Work experience</h3>
    <ul class="split-list">
      <li class="list-item">
        <div class="experience-date">2021–2022</div>
        <div>
          <h3>Technical Product Manager at Libertex Group</h3>
          <p>
            Setting vision and creating road maps for the variety of products.
            Leading and team-building development team. Gather requirements,
            prioritize features according KPIs. Coordination with product
            managers and stakeholders.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2019–2021</div>
        <div>
          <h3>Frontend Engineer at Libertex Group</h3>
          <p>
            Design and develop solutions for monitoring finance flows, users
            registrations. Building design systems. Integration of new
            technologies, maintenance and upgrade existed one.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2018–2019</div>
        <div>
          <h3>Product Designer at Libertex Group</h3>
          <p>
            Setting the creative vision of a crypto startup for exchange and
            trading cryptocurrencies. Introduced a systematic design approach
            based on user experience and best practices. Make UX researches,
            user interviews and design-sprints.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2016–2018</div>
        <div>
          <h3>Senior Product Manager at Avanti Pharma</h3>
          <p>
            Establishing the design and development process for the team of 5
            talented developers. Create a new brand, start a marketing campaign
            and push online sales to the second place in the local market in 6
            month.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2013–2015</div>
        <div>
          <h3>Product lead at Primorsky Advertising Agency</h3>
          <p>
            Setting the creative vision, and providing design leadership,
            branding and development.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2011–2013</div>
        <div>
          <h3>UX/UI Designer at Dipex Group</h3>
          <p>
            Create design for complex tech solutions such as control of city
            lighting, pumping and heating power systems for the city. The
            projects were awarded at an international exhibition in Germany.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2008–2011</div>
        <div>
          <h3>Freelance Designer</h3>
          <p>
            Design and development for companies established an excellent
            service in architecture, interior design and online sales.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss">
.list-item {
  margin-bottom: var(--space-2xl);

  > div:nth-child(1) {
    width: 25%;
  }

  > div:nth-child(2) {
    flex: 1;
  }
}

@media screen and (max-width: 480px) {
  .list-item {
    display: block;

    > div:nth-child(1) {
      width: 100%;
    }
  }
}
</style>
