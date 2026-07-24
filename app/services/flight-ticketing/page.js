import "./flight.css";

export const metadata = {
  title: "Flight Ticketing Services | Mindtree Nursing Solutions",
  description:
    "Book domestic and international flight tickets with ease through Mindtree Nursing Solutions. We provide reliable ticketing services, competitive fares, travel assistance, and support for nurses and professionals traveling abroad.",
  keywords: [
    "Flight Ticketing",
    "Air Ticket Booking",
    "International Flight Tickets",
    "Travel Assistance",
    "Flight Booking Services",
    "Nurse Travel Support",
    "Airfare Booking",
    "Mindtree Nursing"
  ],
};
const steps = [
  {
    num: "1",
    icon: "📋",
    title: "Share Your Travel Details",
    desc: "Provide your departure and destination, travel dates, return date (if required), number of passengers, and any preferred airline or flight timing.",
  },
  {
    num: "2",
    icon: "✈️",
    title: "Receive Available Flight Options",
    desc: "Our team will check the available flights based on your requirements and share the best options along with the fare details.",
  },
  {
    num: "3",
    icon: "💳",
    title: "Confirm the Flight & Make Payment",
    desc: "Once you confirm your preferred flight, we will temporarily hold the ticket and share the payment details to proceed with the booking.",
  },
  {
    num: "4",
    icon: "🎫",
    title: "Ticket Booking & Confirmation",
    desc: "After the payment is confirmed, we will book your ticket and send the e-ticket and complete travel details to you.",
  },
];

const checkItems = [
  "Choose connecting flights with a minimum layover time of 3 hours.",
  "Make sure your name spelling and title (Mr., Ms., Mrs.) match your passport exactly.",
  "Ensure your passport has a minimum validity of 6 months from the date of travel.",
  "Check whether the connecting airport requires a transit visa for your journey.",
];

const trustCards = [
  { icon: "🔒", title: "Your Data is Safe",       desc: "Passport details are encrypted and never shared with third parties.",        bg: "#EAF4FF" },
  { icon: "✅", title: "Confirmed within 24 hrs", desc: "Our team reviews and responds to every request by the next business day.",   bg: "#FDF3E3" },
  { icon: "📞", title: "WhatsApp Support",         desc: "Reach us anytime for updates, queries, or modifications to your booking.", bg: "#E6FAEF" },
  { icon: "💳", title: "Flexible Payment",         desc: "Pay after confirmation — we'll share the final fare and payment options.", bg: "#F3EEFA" },
];

export default function FlightTicketing() {
  return (
    <div className="ft-page">

      {/* BREADCRUMB */}
      <nav className="ft-breadcrumb">
        <a href="/">Home</a><span>›</span>
        <a href="/services">Services</a><span>›</span>
        Flight Ticketing
      </nav>

      {/* HERO */}
      <section className="ft-hero">
        <span className="ft-hero-tag">✈ Flight Ticketing Service</span>
        <h1>Book Your Flight With Us</h1>
        <p>We handle everything — from finding the best fares to securing your seat. Just share your details and we'll take care of the rest.</p>
        <div className="ft-hero-badges">
          {["✈ All Airlines", "⚡ Fast Processing", "🔒 Secure & Verified", "💬 Dedicated Support"].map((b) => (
            <span className="ft-badge" key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ft-section">
        <p className="ft-label" data-anim="up">How It Works</p>
        <h2 className="ft-title" data-anim="up" data-anim-delay="80">Book Your Ticket in 4 Easy Steps</h2>
        <p className="ft-sub" data-anim="up" data-anim-delay="160">Simple, fast, and handled entirely by our team — you don't need to visit any office.</p>
        <div className="ft-steps">
          {steps.map((s, i) => (
            <div className="ft-step ft-fadein" key={s.num} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="ft-step-num">{s.num}</div>
              <span className="ft-step-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO CHECK */}
      <section className="ft-section ft-section--check">
        <div className="ft-check-card ft-fadein">
          <div className="ft-check-header">
            <span className="ft-check-pin">📌</span>
            <div>
              <p className="ft-label" style={{ marginBottom: 4 }}>Important</p>
              <h2 className="ft-title" style={{ marginBottom: 0 }}>Things to Check Before Booking</h2>
            </div>
          </div>
          <ul className="ft-check-list">
            {checkItems.map((item, i) => (
              <li key={i} className="ft-check-item ft-fadein" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <span className="ft-check-bullet">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="ft-section ft-section--cta">
        <div className="ft-cta-card ft-fadein">
          <div className="ft-cta-inner">
            <div className="ft-cta-text">
              <p className="ft-label">Get Started</p>
              <h2 className="ft-cta-title">Ready to Book Your Flight?</h2>
              <p className="ft-cta-sub">Contact us directly and our team will handle everything — fares, booking, and e-ticket delivery.</p>
            </div>
            <div className="ft-cta-buttons">
              <a href="tel:9744158478" className="ft-cta-btn ft-cta-btn--call">
                <span className="ft-btn-icon">📞</span>
                <span className="ft-btn-text">
                  <span className="ft-btn-label">Call Us Now</span>
                  <span className="ft-btn-value">9744158478</span>
                </span>
              </a>
              <a href="https://wa.me/919744158478" className="ft-cta-btn ft-cta-btn--whatsapp" target="_blank" rel="noreferrer">
                <span className="ft-btn-icon">💬</span>
                <span className="ft-btn-text">
                  <span className="ft-btn-label">WhatsApp Us</span>
                  <span className="ft-btn-value">Quick Response</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section className="ft-section ft-section--trust">
        <p className="ft-label" data-anim="up">Why Choose Us</p>
        <h2 className="ft-title" data-anim="up" data-anim-delay="80">Our Commitment to You</h2>
        <div className="ft-trust-grid">
          {trustCards.map((c, i) => (
            <div className="ft-trust-card ft-fadein" key={c.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="ft-trust-icon" style={{ background: c.bg }}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
