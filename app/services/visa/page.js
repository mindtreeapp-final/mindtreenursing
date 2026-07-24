
import "./visa.css";

export const metadata = {
  title: "Visa Assistance Services | Mindtree Nursing Solutions",
  description:
    "Get expert visa assistance from Mindtree Nursing Solutions. We guide nurses and healthcare professionals through visa applications, documentation, immigration requirements, and travel preparation for New Zealand, Australia, and other international destinations.",
  keywords: [
    "Visa Assistance",
    "Nursing Visa",
    "Visa Application Support",
    "New Zealand Visa",
    "Australia Visa",
    "Immigration Assistance",
    "Healthcare Professional Visa",
    "Mindtree Nursing"
  ],
};

const steps = [
  {
    num: "1",
    icon: "📋",
    title: "Share Your Details and CV",
    desc: "Submit your basic personal details along with an updated CV for initial profile assessment. This helps our visa team understand your background, qualifications, work experience, and eligibility for the selected programme or country.",
    delay: "0s",
  },
  {
    num: "2",
    icon: "📁",
    title: "Submit Basic Documents",
    desc: "Provide the necessary documents for verification and visa processing. Our team will guide you on any additional documents required for your specific case.",
    delay: "0.1s",
    docs: [
      "Passport copy",
      "Educational certificates",
      "Experience certificates",
      "Updated CV",
      "Passport-size photograph",
      "ID proof and other supporting documents",
    ],
  },
  {
    num: "3",
    icon: "🧭",
    title: "Connect With Our Immigration Advisor",
    desc: "After document submission, you will be connected with our experienced immigration advisor for detailed guidance.",
    delay: "0.2s",
    points: [
      "Explain the visa process clearly",
      "Verify eligibility and documentation",
      "Clarify doubts and requirements",
      "Assist with application preparation and submission",
    ],
  },
  {
    num: "4",
    icon: "✅",
    title: "Visa Approval Within 4 Weeks",
    desc: "Once all required documents are submitted correctly and the application is processed, visa approval is expected within approximately 4 weeks, subject to immigration authority processing timelines and approval conditions.",
    delay: "0.3s",
  },
];

const trustCards = [
  { icon: "🌍", title: "Global Reach",             desc: "We assist with visa applications for work, study, and relocation across multiple countries.",    bg: "#EAF4FF" },
  { icon: "🧭", title: "Expert Advisors",           desc: "Our experienced immigration advisors provide personalised guidance at every step.",                bg: "#FDF3E3" },
  { icon: "📑", title: "Accurate Documentation",   desc: "We meticulously prepare and review every document to ensure a smooth application process.",        bg: "#E6FAEF" },
  { icon: "⚡", title: "Fast Processing",           desc: "Streamlined procedures and expert handling help you receive your visa approval without delays.",   bg: "#F3EEFA" },
];

export default function VisaPage() {
  return (
    <div className="vs-page">

      {/* BREADCRUMB */}
      <nav className="vs-breadcrumb">
        <a href="/">Home</a><span>›</span>
        <a href="/services">Services</a><span>›</span>
        Visa Assistance
      </nav>

      {/* HERO */}
      <section className="vs-hero">
        <span className="vs-hero-tag">🛂 Visa Assistance Service</span>
        <h1>Your International Journey Starts Here</h1>
        <p>Expert visa support for work, study, and relocation — making your global ambitions a reality, step by step.</p>
        <div className="vs-hero-badges">
          {["🌍 Global Coverage", "🧭 Expert Advisors", "📑 Document Assistance", "⚡ Fast Processing"].map((b) => (
            <span className="vs-badge" key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="vs-section">
        <p className="vs-label" data-anim="up">About the Service</p>
        <h2 className="vs-title" data-anim="up" data-anim-delay="80">Welcome to Our Visa Department</h2>
        <div className="vs-about-card vs-fadein">
          <p>
            At our Visa Department, we believe that every international journey begins with the right guidance and trusted support. Our dedicated team is committed to making your visa process simple, transparent, and stress-free from start to finish.
          </p>
          <p>
            With experienced immigration advisors, personalised assistance, and a streamlined documentation process, we help candidates confidently move toward their global career and travel goals. Whether you are planning to work, study, or relocate abroad, we ensure professional support at every stage of your visa application journey.
          </p>
          <p>
            From profile assessment to visa approval, our focus is on accuracy, efficiency, and client satisfaction — helping you turn your international dreams into reality with confidence and peace of mind.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="vs-section vs-section--steps">
        <p className="vs-label" data-anim="up">Our Process</p>
        <h2 className="vs-title" data-anim="up" data-anim-delay="80">How We Handle Your Visa Application</h2>
        <p className="vs-sub" data-anim="up" data-anim-delay="160">A transparent, guided journey from your first enquiry to visa approval.</p>

        <div className="vs-steps">
          {steps.map((s) => (
            <div className="vs-step vs-fadein" key={s.num} style={{ animationDelay: s.delay }}>
              <div className="vs-step-top">
                <div className="vs-step-num">{s.num}</div>
                <span className="vs-step-icon">{s.icon}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              {s.docs && (
                <ul className="vs-mini-list">
                  {s.docs.map((d) => (
                    <li key={d}>
                      <span className="vs-mini-bullet">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              {s.points && (
                <ul className="vs-mini-list">
                  {s.points.map((pt) => (
                    <li key={pt}>
                      <span className="vs-mini-bullet">→</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="vs-section vs-section--highlights">
        <div className="vs-highlights-card vs-fadein">
          <div className="vs-highlights-header">
            <span className="vs-highlights-pin">📌</span>
            <div>
              <p className="vs-label" style={{ marginBottom: 4 }}>Key Points</p>
              <h2 className="vs-title" style={{ marginBottom: 0 }}>What to Prepare Before Applying</h2>
            </div>
          </div>
          <div className="vs-highlights-intro">
            To ensure a smooth and efficient visa application experience, please have the following ready before contacting our team. Our advisors will guide you on anything additional based on your specific destination and visa type.
          </div>
          <ul className="vs-highlights-list">
            {[
              "Valid passport with at least 6 months validity from your travel date",
              "Completed and updated CV ",
              "Educational and professional qualification certificates",
              "Work experience certificates from previous employers",
              "Recent passport-size photographs",
              "Government-issued ID proof",
              "Any existing visa approvals or rejection letters (if applicable)",
            ].map((item, i) => (
              <li key={i} className="vs-highlights-item vs-fadein" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
                <span className="vs-highlights-bullet">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="vs-section vs-section--cta">
        <div className="vs-cta-card vs-fadein">
          <div className="vs-cta-inner">
            <div className="vs-cta-text">
              <p className="vs-label">Get Started</p>
              <h2 className="vs-cta-title">Ready to Begin Your Visa Journey?</h2>
              <p className="vs-cta-sub">Contact us directly and our immigration advisors will guide you through every step — from profile assessment to visa approval.</p>
            </div>
            <div className="vs-cta-buttons">
              <a href="tel:8921491752" className="vs-cta-btn vs-cta-btn--call">
                <span className="vs-btn-icon">📞</span>
                <span className="vs-btn-text">
                  <span className="vs-btn-label">Call Us Now</span>
                  <span className="vs-btn-value">8921491752</span>
                </span>
              </a>
              <a href="https://wa.me/918921491752" className="vs-cta-btn vs-cta-btn--whatsapp" target="_blank" rel="noreferrer">
                <span className="vs-btn-icon">💬</span>
                <span className="vs-btn-text">
                  <span className="vs-btn-label">WhatsApp Us</span>
                  <span className="vs-btn-value">Quick Response</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section className="vs-section vs-section--trust">
        <p className="vs-label" data-anim="up">Why Choose Us</p>
        <h2 className="vs-title" data-anim="up" data-anim-delay="80">Our Commitment to You</h2>
        <div className="vs-trust-grid">
          {trustCards.map((c, i) => (
            <div className="vs-trust-card vs-fadein" key={c.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="vs-trust-icon" style={{ background: c.bg }}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
