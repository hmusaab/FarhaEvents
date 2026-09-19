import { Navbar } from "../App";
import "./Wedding.css";

function Weddings() {
  return (
    <main className="page">

      <section className="pageHero weddingsHero">

        <Navbar />

        <div className="pageOverlay" />

        <div className="pageHeroContent">

          <p className="eyebrow">
            Farha Events
          </p>

          <h1>
            Featured
            <br />
            Weddings
          </h1>

          <p>
            Real celebrations. Real moments. Real stories.
          </p>

        </div>

      </section>

      <section className="pageIntro">

        <p className="sectionLabel">
          Our Weddings
        </p>

        <h2>
          Every celebration
          <br />
          tells a story.
        </h2>

        <p className="pageDescription">
          Explore some of the celebrations we have had the opportunity
          to be a part of. Every wedding is different, and every gallery
          reflects the people, traditions, energy, and memories that
          made the day unique.
        </p>

      </section>

    </main>
  );
}

export default Weddings;