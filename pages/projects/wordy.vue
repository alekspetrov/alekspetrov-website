<script setup>
useHead({
  title: 'Wordy',
  meta: [
    {
      name: 'description',
      content: 'Boost your vocab fast and free!',
    },
  ],
})
</script>

<template>
  <NuxtLayout name="blog">
    <PageHeader
      class="wrapper-sm"
      title="Wordy"
      text="Boost your vocab fast and free!"
    />
    <div class="article-layout">
      <p>
        The idea came to me when I was looking for extension to collect words I
        want to remember to improve my vocab in english. Found some free ways of
        doing collections + translations but they all was awful and useless.
      </p>
      <p>
        I started with small extension to save terms to the cloud data base, but
        then I remembered one methodology from the most experiences in human
        memory expert Hermann Ebbinghaus.
      </p>
      <p>
        Ebbinghaus investigated human memory to find out how the learning
        mechanics work in our brain. He was pretty productive and his researches
        used worldwide to create learning products including school and
        universities programs.
      </p>
      <p>
        Here you can see that we need to repeat information to remember it, and
        first week is very important. So the only thing needed is to set list
        into collections and run notification to repeat information. The best
        way to learn is flipping card, but I don’t need to flip something just
        show translation or terminology and use shortcuts to decrease time loss.
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/alekspetrov/image/upload/v1664655264/website/wrody-forgetting-curve.png"
          alt=""
        />
        <figcaption>Hermann Ebbinghaus' forgeting curve graph</figcaption>
      </figure>

      <h3>Market research</h3>
      <p>
        I decided investigate into market and it was not a surprize that there
        are 2-3 projects who can help me with my problem. But all of them did't
        find the idea what to do next. Used one them to see the result and
        learned nothing for a week. But get tons of spam emails. I don’t like
        the design and feel they have for application people should open every
        day. I can make it calm, simple, easy to use and... "sexy!", thanks Elon
        have a seat.
      </p>
      <p>
        Market research shows that there are a lot of potential here, traffic is
        stable and pretty high. Applications downloads impressive and they have
        stable audience but I didn’t find communities except Facebook pages but
        this is not the best way to get a feedback. Seems like existing
        solutions are blind to user problems. It is not difficult to grab some
        audience from them.
      </p>
      <p>
        I checked pricing for all or them. And they all pricy for the service
        they have. I can make it cheaper using appropriate technologies
        available on market today.
      </p>
      <h3>MVP Cost</h3>
      <p>
        I summed up how much I need to spend for the MVP version and I was
        surprised that I need nothing! Supabase gives more then I need to start
        this project, and scale it in case it makes some profit in the future.
      </p>
      <p class="content-callout">Supabase uses AWS to store data and media</p>
      <h3>Plan</h3>
      <p>
        First week for investigation for technologies and find the way make it
        easy build, maintain, scale and have some fun with.
      </p>
      <ul>
        <li>Idea</li>
        <li>Research</li>
        <li>Unit economy</li>
        <li>Road map</li>
        <li>Tickets</li>
        <li>Heavy tasks investigation</li>
        <li>Correct the plan to exclude heavy but low priority work</li>
        <li>Start sprinting (week cycle)</li>
      </ul>
      <p>
        The idea grows fast from simple application to the marketplace for
        creators to make money. This is amazing. I like the idea to help people
        make extra money it motivates me.
      </p>
      <p>
        Now I have a plan for the year in my backlog. I know how to make
        engagement and increase retention, how to up sale. All this connected
        with the theory of Ebbinghaus. I'm going to make some test and some
        people who also will be called by emails from alpha release.
      </p>
      <p>
        Now I’m on the finish line to make alpha version and publish for
        testing. Working on landing page, domain registrations. Also I’m looking
        for a place to register new company to get money and pay taxes. In case
        you interested in collaborations or work together, then let me know at
        <a
          href="mailto:hello@alekspetrov.com"
          subject="Collaboration for project"
          class="link"
          >hello@alekspetrov.com</a
        >.
      </p>
      <h3>Conclusions</h3>
      <p>
        I got huge amount of experience the process. This is the best way to
        improve product manager's skills and finally become a maker. This
        project gave me excellent experience and a vision on project from the
        idea to lunch through design process and testing.
      </p>
      <p>
        I learned that idea are nothing without experience, but experience is
        impossible without ideas.
      </p>
      <RowForm />
    </div>
  </NuxtLayout>
</template>
