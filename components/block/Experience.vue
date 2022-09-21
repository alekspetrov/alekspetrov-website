<template>
  <div class="page-block">
    <h3>Work experience</h3>
    <ul class="split-list">
      <li class="list-item">
        <div class="experience-date">2021–2022</div>
        <div>
          <h3>Technical Product Manager at Libertex Group</h3>
          <p>
            My responsibilities are gathering requirements, setting vision,
            creating products definitions and road maps, leading the development
            team, task prioritization according KPIs, documentation,
            coordination with project managers and stakeholder
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2019–2021</div>
        <div>
          <h3>Frontend Engineer at Libertex Group</h3>
          <p>
            Getting fintech development experience engineering complex solutions
            for monitoring finance flows. Create design systems and more.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2018–2019</div>
        <div>
          <h3>Product Designer at Libertex Group</h3>
          <p>
            Establishing the creative vision of a crypto startup. Introduced a
            systematic design approach based on user experience.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2016–2018</div>
        <div>
          <h3>Senior Product Manager at Avanti Pharma</h3>
          <p>
            Setting up the design and development process. Create a new brand,
            start a marketing campaign and push online sales to the second place
            in the local market.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2013–2015</div>
        <div>
          <h3>Frontend Designer at Primorsky Advertising Agency</h3>
          <p>
            Setting the creative vision, and providing design leadership and
            development at a news agency.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2011–2013</div>
        <div>
          <h3>UX/UI Designer at Dipex Group</h3>
          <p>
            Establishing design for technically complex projects. Such as
            control of city lighting, pumping and heating power systems.
          </p>
        </div>
      </li>
      <li class="list-item">
        <div>2009–2011</div>
        <div>
          <h3>Freelance Designer</h3>
          <p>
            Design and development for companies established an excellent
            service in architecture, interior design and sales.
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
