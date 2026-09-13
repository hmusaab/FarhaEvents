import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import VogueBox from "./pages/VogueBox";
import Experience360 from "./pages/Experience360";
import Content from "./pages/content";
import Weddings from "./pages/Wedding";
import Packages from "./pages/packages";
import About from "./pages/about";
import Contact from "./pages/contact";

/* =========================================
   NAVBAR
========================================= */

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Farha Events
      </Link>

      <div className="navLinks">

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
  );
}

export { Navbar };

export default App;