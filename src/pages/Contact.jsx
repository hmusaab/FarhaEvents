import { useState } from "react";
import { Navbar } from "../App";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwHarheDwsL4Y-1knaruhInk9WuYwoG4MrUwtg5zqGYL0QUcJ9cDKYUoeOlsY93Lno/exec";

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setError(false);

    const form = event.target;
    const formData = new FormData(form);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Submission error:", err);
      setError(true);
    } finally {
      setSubmitting(false);
    }
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
            discuss availability and package options.
          </p>
        </div>

        <form
          className="bookingForm"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
          />

          <div className="formField">
            <label htmlFor="eventDate">
              Event Date
            </label>

            <input
              id="eventDate"
              type="date"
              name="eventDate"
              required
            />
          </div>

          <input
            type="text"
            name="venue"
            placeholder="Venue / City"
          />

          <select
            name="experience"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Which experience are you interested in?
            </option>

            <option value="Vogue Box">
              Vogue Box
            </option>

            <option value="360 Experience">
              360 Experience
            </option>

            <option value="Wedding Content">
              Wedding Content
            </option>

            <option value="The Farha Experience">
              The Farha Experience
            </option>

            <option value="Multiple Experiences">
              Multiple Experiences
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your celebration..."
          />

          <button
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? "Sending..."
              : "Submit Inquiry"}
          </button>

          {submitted && (
            <div className="formSuccess">
              <strong>
                Inquiry received.
              </strong>

              <span>
                Thank you for contacting Farha Events.
                Our team will be in touch soon.
              </span>
            </div>
          )}

          {error && (
            <div className="formError">
              We couldn't send your inquiry.
              Please try again.
            </div>
          )}

        </form>

      </section>
    </main>
  );
}

export default Contact;