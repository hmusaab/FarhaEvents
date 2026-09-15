import { Navbar } from "../App";

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your inquiry has been submitted.");
  };

  return (
    <main className="contactPage">

      <Navbar />

      <section className="contactContent">

        <div className="contactText">

          <p className="sectionLabel">
            Start Your Experience
          </p>

          <h1>
            Let's create
            <br />
            something
            <br />
            memorable.
          </h1>

          <p>
            Tell us a little about your celebration and which Farha
            experiences you're interested in. We'll get in touch to
            discuss your date, availability, and package options.
          </p>

        </div>


        <form
          className="bookingForm"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="date"
            required
          />

          <input
            type="text"
            placeholder="Venue / City"
          />

          <select
            defaultValue=""
            required
          >

            <option
              value=""
              disabled
            >
              Which experience are you interested in?
            </option>

            <option value="vogue">
              Vogue Box
            </option>

            <option value="360">
              360 Experience
            </option>

            <option value="content">
              Wedding Content
            </option>

            <option value="complete">
              The Farha Experience
            </option>

            <option value="multiple">
              Multiple Experiences
            </option>

          </select>

          <textarea
            placeholder="Tell us about your celebration..."
          />

          <button type="submit">
            Submit Inquiry
          </button>

        </form>

      </section>

    </main>
  );
}

export default Contact;