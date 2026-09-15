import { Navbar } from "../App";

function About() {
  return (
    <main className="page">

      <section className="pageHero aboutHero">

        <Navbar />

        <div className="pageOverlay" />

        <div className="pageHeroContent">

          <p className="eyebrow">
            Behind Farha Events
          </p>

          <h1>
            More Than
            <br />
            An Event.
          </h1>

          <p>
            Experiences created around your celebration.
          </p>

        </div>

      </section>

      <section className="pageIntro">

        <p className="sectionLabel">
          About Farha Events
        </p>

        <h2>
          Celebrate the moment.
          <br />
          Remember the feeling.
        </h2>

        <p className="pageDescription">
          Farha Events was created to bring modern wedding experiences
          together in one place. From editorial portraits and interactive
          360 videos to behind-the-scenes content, our goal is to make
          every celebration feel personal, exciting, and unforgettable.
        </p>

      </section>

    </main>
  );
}

export default About;