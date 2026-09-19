import { Navbar } from "../App";
import "./Experience360.css";

function Experience360() {
  return (
    <main className="page">

      <section className="pageHero experienceHero">

        <Navbar />

        <div className="pageOverlay" />

        <div className="pageHeroContent">

          <p className="eyebrow">
            Farha Events
          </p>

          <h1>
            The 360
            <br />
            Experience
          </h1>

          <p>
            Every angle. Every moment. Every memory.
          </p>

        </div>

      </section>

      <section className="pageIntro">

        <p className="sectionLabel">
          360 Experience
        </p>

        <h2>
          Step in.
          <br />
          Make a moment.
        </h2>

        <p className="pageDescription">
          Give your guests an interactive experience they will actually
          remember. Our 360 booth captures smooth, cinematic videos from
          every angle, creating content that is ready to save, share,
          and relive.
        </p>

      </section>

    </main>
  );
}

export default Experience360;