import "./App.css";

const services = [
  {
    number: "01",
    title: "Photography",
    id: "photography",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=90",
    description:
      "Timeless wedding photography built around genuine emotion, family, tradition, and the moments you'll want to experience again.",
  },
  {
    number: "02",
    title: "Vogue Experience",
    id: "vogue",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=90",
    description:
      "An editorial-style photo booth experience designed to give your guests dramatic, magazine-inspired portraits.",
  },
  {
    number: "03",
    title: "360 Experience",
    id: "experience360",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=90",
    description:
      "Step in, celebrate, and capture the energy. Our 360 booth creates cinematic slow-motion videos ready to share.",
  },
  {
    number: "04",
    title: "Wedding Content",
    id: "content",
    image:
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1400&q=90",
    description:
      "Behind-the-scenes clips, candid moments, vertical videos, and social-ready memories delivered straight to your phone.",
  },
];

const weddings = [
  {
    names: "Amira & Zain",
    location: "Dearborn, Michigan",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=90",
  },
  {
    names: "Sarah & Adam",
    location: "Detroit, Michigan",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=90",
  },
  {
    names: "Layla & Omar",
    location: "Michigan",
    image:
      "https://images.unsplash.com/photo-1519741347686-c1e331ec7f6e?auto=format&fit=crop&w=1000&q=90",
  },
];

const packages = [
  {
    title: "Photography",
    subtitle: "The Essential",
    items: [
      "Wedding photography",
      "Professional editing",
      "Private online gallery",
      "High-resolution images",
    ],
  },
  {
    title: "Photo + Vogue",
    subtitle: "The Editorial",
    items: [
      "Wedding photography",
      "Vogue booth",
      "Professional lighting",
      "Guest portraits",
    ],
  },
  {
    title: "Photo + 360",
    subtitle: "The Celebration",
    items: [
      "Wedding photography",
      "360 video experience",
      "Slow-motion videos",
      "Instant sharing",
    ],
  },
  {
    title: "The Complete",
    subtitle: "The Full Experience",
    featured: true,
    items: [
      "Wedding photography",
      "Vogue experience",
      "360 experience",
      "Wedding content",
      "Complete media coverage",
    ],
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Farha Events
      </a>

      <div className="navLinks">
        <a href="#photography">Photography</a>
        <a href="#vogue">Vogue</a>
        <a href="#experience360">360</a>
        <a href="#content">Content</a>
        <a href="#weddings">Weddings</a>
        <a href="#packages">Packages</a>
        <a href="#about">About</a>

        <a href="#contact" className="navButton">
          Book Your Date
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <Navbar />

      <div className="heroOverlay" />

      <div className="heroContent">
        <p className="eyebrow">Detroit Wedding Experiences</p>

        <h1>
          Your Wedding.
          <br />
          Your Story.
          <br />
          Your Experience.
        </h1>

        <p className="heroServices">
          Photography · Vogue Booth · 360 Experience · Wedding Content
        </p>

        <div className="heroButtons">
          <a href="#experiences" className="button lightButton">
            Explore Experiences
          </a>

          <a href="#contact" className="button outlineButton">
            Book Your Date
          </a>
        </div>
      </div>

      <a href="#intro" className="scroll">
        Scroll to discover ↓
      </a>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section" id="intro">
      <p className="eyebrow darkEyebrow">The Farha Events Experience</p>

      <h2>More than wedding photography.</h2>

      <p>
        We capture the moments, energy, traditions, details, and people that
        make your wedding uniquely yours.
      </p>
    </section>
  );
}

function Experiences() {
  return (
    <section className="experiences" id="experiences">
      {services.map((service, index) => (
        <div
          className={`service ${index % 2 !== 0 ? "reverse" : ""}`}
          id={service.id}
          key={service.title}
        >
          <div className="serviceImage">
            <img src={service.image} alt={service.title} />
          </div>

          <div className="serviceContent">
            <span className="serviceNumber">
              {service.number} / {service.title}
            </span>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <a href="#contact" className="textLink">
              Explore Experience →
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

function FeaturedWeddings() {
  return (
    <section className="section weddings" id="weddings">
      <div className="sectionHeading">
        <div>
          <p className="eyebrow darkEyebrow">Our Work</p>
          <h2>Featured Weddings</h2>
        </div>

        <a href="#contact" className="textLink darkLink">
          View All Weddings →
        </a>
      </div>

      <div className="weddingGrid">
        {weddings.map((wedding) => (
          <article className="weddingCard" key={wedding.names}>
            <img src={wedding.image} alt={wedding.names} />

            <div className="weddingOverlay">
              <h3>{wedding.names}</h3>
              <p>{wedding.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="section packages" id="packages">
      <div className="centerHeading">
        <p className="eyebrow darkEyebrow">Choose Your Experience</p>
        <h2>Wedding Packages</h2>
      </div>

      <div className="packageGrid">
        {packages.map((pkg) => (
          <article
            className={`packageCard ${pkg.featured ? "featuredPackage" : ""}`}
            key={pkg.title}
          >
            <h3>{pkg.title}</h3>
            <span>{pkg.subtitle}</span>

            <ul>
              {pkg.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a href="#contact" className="textLink">
              Inquire →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Review() {
  return (
    <section className="reviewSection">
      <p className="eyebrow">Love, In Their Words</p>

      <div className="stars">★★★★★</div>

      <blockquote>
        “They didn't just photograph our wedding. They captured what the entire
        day actually felt like.”
      </blockquote>

      <p className="reviewName">— Bride & Groom</p>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="aboutImage">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90"
          alt="Farha Events team"
        />
      </div>

      <div className="aboutContent">
        <p className="eyebrow darkEyebrow">Behind The Moments</p>

        <h2>Meet the team.</h2>

        <p>
          Farha Events was created around one idea: your wedding media should feel
          just as special as your wedding itself.
        </p>

        <p>
          We combine timeless photography with modern interactive experiences
          so every couple can have one complete wedding media experience.
        </p>

        <a href="#contact" className="textLink darkLink">
          Work With Us →
        </a>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="ctaOverlay" />

      <div className="ctaContent">
        <p className="eyebrow">Let's Create Something Unforgettable</p>

        <h2>
          Your Date.
          <br />
          Your Moment.
          <br />
          Your Story.
        </h2>

        <p>Now booking weddings</p>

        <a href="#contact" className="button lightButton">
          Book Your Date
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const submitForm = (event) => {
    event.preventDefault();
    alert("Your inquiry has been submitted!");
  };

  return (
    <section className="section contact" id="contact">
      <div className="contactIntro">
        <p className="eyebrow darkEyebrow">Let's Talk</p>

        <h2>Tell us about your wedding.</h2>

        <p>
          Tell us about your celebration and which experiences you're
          interested in. We'll reach out to discuss availability and packages.
        </p>
      </div>

      <form className="contactForm" onSubmit={submitForm}>
        <div className="formRow">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className="formRow">
          <input type="date" required />
          <input type="text" placeholder="Venue / City" />
        </div>

        <select defaultValue="" required>
          <option value="" disabled>
            Interested In
          </option>
          <option>Photography</option>
          <option>Vogue Experience</option>
          <option>360 Experience</option>
          <option>Wedding Content</option>
          <option>The Complete Experience</option>
        </select>

        <textarea placeholder="Tell us about your wedding..." />

        <button type="submit">Submit Inquiry</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footerTop">
        <div>
          <div className="footerLogo">Farha Events</div>
          <p>Wedding Media & Experiences</p>
        </div>

        <div className="footerLinks">
          <div>
            <strong>Experiences</strong>
            <a href="#photography">Photography</a>
            <a href="#vogue">Vogue</a>
            <a href="#experience360">360</a>
            <a href="#content">Content</a>
          </div>

          <div>
            <strong>Explore</strong>
            <a href="#weddings">Weddings</a>
            <a href="#packages">Packages</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <strong>Socials</strong>
            <a href="/">Instagram</a>
            <a href="/">TikTok</a>
            <a href="/">Facebook</a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2026 Farha Events</span>
        <span>Detroit, Michigan</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Experiences />
      <FeaturedWeddings />
      <Packages />
      <Review />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}