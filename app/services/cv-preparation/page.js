import "./cv.css";

export const metadata = {
  title: "CV Preparation Services for Nurses | Mindtree Nursing Solutions",
  description:
    "Create a professional nursing CV with expert guidance from Mindtree Nursing Solutions. We help nurses prepare ATS-friendly resumes, cover letters, and job application documents to improve their chances of securing healthcare opportunities abroad.",
  keywords: [
    "CV Preparation",
    "Nursing CV",
    "Resume Writing for Nurses",
    "Professional CV Services",
    "Nurse Resume",
    "Healthcare CV",
    "Cover Letter Preparation",
    "Mindtree Nursing"
  ],
};

const steps = [
  {
    num: "1",
    icon: "📝",
    title: "Share Your Details",
    desc: "Provide us with your personal information, educational background, work experience, skills, and any other relevant details you'd like included in your CV.",
  },
  {
    num: "2",
    icon: "🎨",
    title: "We Prepare Your CV",
    desc: "Our team professionally designs and structures your CV with the right format, layout, and language to make you stand out to employers.",
  },
  {
    num: "3",
    icon: "💳",
    title: "Review & Make Payment",
    desc: "We share a preview of your CV for your review. Once you're satisfied, complete the payment to proceed with the final delivery.",
  },
  {
    num: "4",
    icon: "📄",
    title: "Receive Your CV",
    desc: "After payment is confirmed, your professionally prepared CV will be delivered to you in both PDF and Word format, ready to use.",
  },
];

const checkItems = [
  "Keep your information accurate and up to date — avoid any false details.",
  "Mention all relevant qualifications, certifications, and work experience clearly.",
  "Provide a professional email address and an active contact number.",
  "Let us know the specific job role or field you are applying for so we can tailor your CV accordingly.",
  "Share any existing CV or documents you have — it helps us prepare faster and more accurately.",
];

const trustCards = [
  { icon: "🔒", title: "Your Data is Private",      desc: "All personal details you share with us are kept strictly confidential.",              bg: "#EAF4FF" },
  { icon: "✅", title: "Professional Quality",       desc: "Every CV is crafted by our experienced team to meet industry standards.",             bg: "#FDF3E3" },
  { icon: "⚡", title: "Quick Turnaround",           desc: "We deliver your completed CV promptly so you never miss an opportunity.",             bg: "#E6FAEF" },
  { icon: "✏️", title: "Revision Support",           desc: "Not satisfied? We offer revisions to ensure your CV is exactly what you need.",      bg: "#F3EEFA" },
];

export default function CvPreparation() {
  return (
    <div className="cv-page">

      {/* BREADCRUMB */}
      <nav className="cv-breadcrumb">
        <a href="/">Home</a><span>›</span>
        <a href="/services">Services</a><span>›</span>
        CV Preparation
      </nav>

      {/* HERO */}
      <section className="cv-hero">
        <span className="cv-hero-tag">📄 CV Preparation Service</span>
        <h1>We Craft CVs That Open Doors</h1>
        <p>Share your details with us and our team will prepare a professional, job-ready CV — delivered to you after payment.</p>
        <div className="cv-hero-badges">
          {["📄 PDF & Word Format", "⚡ Fast Delivery", "✏️ Revision Support", "🔒 100% Confidential"].map((b) => (
            <span className="cv-badge" key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="cv-section">
        <p className="cv-label" data-anim="up">How It Works</p>
        <h2 className="cv-title" data-anim="up" data-anim-delay="80">Get Your Professional CV in 4 Easy Steps</h2>
        <p className="cv-sub" data-anim="up" data-anim-delay="160">Simple and hassle-free — just share your details and we'll handle the rest.</p>
        <div className="cv-steps">
          {steps.map((s, i) => (
            <div className="cv-step cv-fadein" key={s.num} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="cv-step-num">{s.num}</div>
              <span className="cv-step-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THINGS TO KEEP IN MIND */}
      <section className="cv-section cv-section--check">
        <div className="cv-check-card cv-fadein">
          <div className="cv-check-header">
            <span className="cv-check-pin">📌</span>
            <div>
              <p className="cv-label" style={{ marginBottom: 4 }}>Important</p>
              <h2 className="cv-title" style={{ marginBottom: 0 }}>Things to Keep in Mind</h2>
            </div>
          </div>
          <ul className="cv-check-list">
            {checkItems.map((item, i) => (
              <li key={i} className="cv-check-item cv-fadein" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <span className="cv-check-bullet">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cv-section cv-section--cta">
        <div className="cv-cta-card cv-fadein">
          <div className="cv-cta-inner">
            <div className="cv-cta-text">
              <p className="cv-label">Get Started</p>
              <h2 className="cv-cta-title">Ready to Build Your Professional CV?</h2>
              <p className="cv-cta-sub">Contact us directly and our team will guide you through the process from start to finish.</p>
            </div>
            <div className="cv-cta-buttons">
              <a href="tel:8590893711" className="cv-cta-btn cv-cta-btn--call">
                <span className="cv-btn-icon">📞</span>
                <span className="cv-btn-text">
                  <span className="cv-btn-label">Call Us Now</span>
                  <span className="cv-btn-value">8590893711</span>
                </span>
              </a>
              <a href="https://wa.me/918590893711" className="cv-cta-btn cv-cta-btn--whatsapp" target="_blank" rel="noreferrer">
                <span className="cv-btn-icon">💬</span>
                <span className="cv-btn-text">
                  <span className="cv-btn-label">WhatsApp Us</span>
                  <span className="cv-btn-value">Quick Response</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section className="cv-section cv-section--trust">
        <p className="cv-label" data-anim="up">Why Choose Us</p>
        <h2 className="cv-title" data-anim="up" data-anim-delay="80">Our Commitment to You</h2>
        <div className="cv-trust-grid">
          {trustCards.map((c, i) => (
            <div className="cv-trust-card cv-fadein" key={c.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="cv-trust-icon" style={{ background: c.bg }}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
