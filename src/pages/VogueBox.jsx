import { Navbar } from "../App";

function Vogue() {
  return (
    <main className="page">

      <section className="pageHero vogueHero">

        <Navbar />

        <div className="pageOverlay"></div>

        <div className="pageHeroContent">

          <p className="eyebrow">
            Farha Events
          </p>

          <h1>
            The Vogue
            <br />
            Experience
          </h1>

          <p>
            Editorial portraits. Luxury experience.
          </p>

        </div>

      </section>

      <section className="pageIntro">

        <p className="sectionLabel">
          Vogue Booth
        </p>

        <h2>
          Your guests.
          <br />
          Magazine worthy.
        </h2>

        <p className="pageDescription">
          Give your guests an elegant editorial-style portrait
          experience with professional lighting and a luxury setup
          designed to create unforgettable images.
        </p>

      </section>

    </main>
  );
}

export default Vogue;