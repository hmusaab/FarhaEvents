import "./App.css";
import "./Footer.css";

import {
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import logoImage from "./images/FarhaEventsLogo.png";

import VogueBox from "./pages/VogueBox";
import Experience360 from "./pages/Experience360";
import Content from "./pages/Content";
import Weddings from "./pages/Wedding";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Contact from "./pages/Contact";

/* =========================================
   NAVBAR
========================================= */

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img
          src={logoImage}
          alt="Farha Events"
        />
      </div>

      <div className="navLinks">

        <Link to="/">
          Home
        </Link>

        <Link to="/vogue">
          Vogue Box
        </Link>

        <Link to="/360">
          360
        </Link>

        <Link to="/content">
          Content
        </Link>

        <Link to="/weddings">
          Weddings
        </Link>

        <Link to="/packages">
          Packages
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link
          to="/contact"
          className="navButton"
        >
          Book Your Date
        </Link>

      </div>

    </nav>
  );
}

function Footer() {
  const location = useLocation();

  return (
    <footer className="siteFooter">
      <div className="siteFooterBrand">
        <div className="siteFooterLogo">
          <img
            src={logoImage}
            alt="Farha Events"
          />
        </div>

        <p>
          Wedding media & experiences.
        </p>
      </div>

      {location.pathname !== "/contact" && (
        <div className="siteFooterContact">
          <span>
            For more questions
          </span>

          <a href="mailto:book@eventswithfarha.com">
            book@eventswithfarha.com
          </a>
        </div>
      )}
    </footer>
  );
}

/* =========================================
   HOME PAGE
========================================= */

function Home() {
  return (
    <main className="homePage">
      <section className="modernHero">

        <Navbar />

        <div className="modernHeroOverlay" />

        <div className="modernHeroContent">

          <p className="modernEyebrow">
            Wedding Media & Experiences
          </p>

          <h1>
            Moments worth
            <br />
            remembering.
          </h1>

          <p className="modernHeroDescription">
            Capturing the people, energy, and unforgettable moments
            that make your celebration yours.
          </p>

          <div className="modernHeroButtons">

            <Link
              to="/vogue"
              className="modernPrimaryButton"
            >
              Explore Experiences
            </Link>

            <Link
              to="/contact"
              className="modernSecondaryButton"
            >
              Book Your Date
            </Link>

          </div>

        </div>

        <div className="heroBottomText">
          Detroit · Michigan · Available for Travel
        </div>

      </section>
    </main>
  );
}

/* =========================================
   ROUTES
========================================= */

function App() {
  return (
    <>
      <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/vogue"
        element={<VogueBox />}
      />

      <Route
        path="/360"
        element={<Experience360 />}
      />

      <Route
        path="/content"
        element={<Content />}
      />

      <Route
        path="/weddings"
        element={<Weddings />}
      />

      <Route
        path="/packages"
        element={<Packages />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      </Routes>

      <Footer />
    </>
  );
}

export { Navbar };

export default App;