import { Link } from "react-router-dom";
import { Navbar } from "../App";
import "./Packages.css";

function Packages() {
  return (
    <main className="page">

      <section className="pageHero packagesHero">

        <Navbar />

        <div className="pageOverlay" />

        <div className="pageHeroContent">

          <p className="eyebrow">
            Farha Events
          </p>

          <h1>
            Choose Your
            <br />
            Experience
          </h1>

          <p>
            Build the experience around your celebration.
          </p>

        </div>

      </section>

      <section className="packagesSection">

        <article className="packageCard">

          <p>01</p>

          <h3>
            Vogue Box
          </h3>

          <p>
            A luxury editorial-style experience designed to give
            your guests unforgettable portraits throughout the night.
          </p>

          <Link to="/contact">
            Inquire →
          </Link>

        </article>


        <article className="packageCard">

          <p>02</p>

          <h3>
            360 Experience
          </h3>

          <p>
            An interactive 360 video experience with cinematic,
            shareable clips created for you and your guests.
          </p>

          <Link to="/contact">
            Inquire →
          </Link>

        </article>


        <article className="packageCard">

          <p>03</p>

          <h3>
            Wedding Content
          </h3>

          <p>
            Behind-the-scenes videos, candid moments, and social-ready
            content captured throughout your celebration.
          </p>

          <Link to="/contact">
            Inquire →
          </Link>

        </article>


        <article className="packageCard darkPackage">

          <p>04</p>

          <h3>
            The Farha Experience
          </h3>

          <p>
            Bring everything together with Vogue Box, 360 experiences,
            and wedding content for one complete Farha Events experience.
          </p>

          <Link to="/contact">
            Inquire →
          </Link>

        </article>

      </section>

    </main>
  );
}

export default Packages;