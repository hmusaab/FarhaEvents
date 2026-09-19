import { Navbar } from "../App";
import "./Content.css";

function Content() {
  return (
    <main className="page">

      <section className="pageHero contentHero">

        <Navbar />

        <div className="pageOverlay" />

        <div className="pageHeroContent">

          <p className="eyebrow">
            Farha Events
          </p>

          <h1>
            Wedding
            <br />
            Content
          </h1>

          <p>
            The moments between the moments.
          </p>

        </div>

      </section>

      <section className="pageIntro">

        <p className="sectionLabel">
          Wedding Content
        </p>

        <h2>
          Your wedding.
          <br />
          Ready to relive.
        </h2>

        <p className="pageDescription">
          From behind-the-scenes moments to candid reactions and
          celebration highlights, we capture social-ready wedding
          content that lets you experience your day from a completely
          different perspective.
        </p>

      </section>

    </main>
  );
}

export default Content;