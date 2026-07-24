
import "./ahpra.css";

export const metadata = {
  title: "AHPRA Registration Support | Mindtree Nursing Solutions",
  description:
    "Get expert guidance for AHPRA registration with Mindtree Nursing Solutions. We assist internationally qualified nurses with document preparation, qualification assessment, registration pathways, and professional support for a successful nursing career in Australia.",
  keywords: [
    "AHPRA Registration",
    "AHPRA Nursing Registration",
    "Australia Nursing Registration",
    "Internationally Qualified Nurses",
    "AHPRA Support",
    "Nursing Registration Australia",
    "Australian Nursing Pathway",
    "Mindtree Nursing"
  ],
};

export default function AhpraPage() {
  return (
    <div className="ah-page">

      {/* BREADCRUMB */}
      <nav className="ah-breadcrumb">
        <a href="/">Home</a><span>›</span>
        <a href="/services">Services</a><span>›</span>
        AHPRA Registration Support
      </nav>

      {/* HERO */}
      <section className="ah-hero">
        <span className="ah-hero-tag">🏥 AHPRA Registration Support</span>
        <h1>Your AHPRA Registration Journey Starts Here</h1>
        <p>Personalised expert support for nurses and healthcare professionals — from document preparation to final registration in Australia.</p>
        <div className="ah-hero-badges">
          <span className="ah-badge">🧭 Personalised Support</span>
          <span className="ah-badge">📑 Document Assistance</span>
          <span className="ah-badge">✅ AHPRA Compliant</span>
          <span className="ah-badge">⚡ Faster Processing</span>
        </div>
      </section>

      {/* ABOUT THE SERVICE */}
      <section className="ah-section">
        <p className="ah-label" data-anim="up">About the Service</p>
        <h2 className="ah-title" data-anim="up" data-anim-delay="80">AHPRA Registration Support</h2>
        <div className="ah-about-card ah-fadein">
          <p>
            Start on your AHPRA registration journey with tailored support. Our experts provide personalized assistance, demystifying the process for nurses and healthcare professionals. From document preparation to navigating AHPRA's stringent requirements, we ensure a meticulous and efficient registration experience.
          </p>
          <p>
            Count on us to address specific challenges, ensuring your application aligns seamlessly with AHPRA standards. With a deep understanding of the intricacies involved, our support goes beyond the conventional, offering targeted guidance that accelerates your registration process.
          </p>
          <p>
            Your AHPRA registration is not just a step; it's a leap toward a successful career, and we're here to make that journey smoother.
          </p>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="ah-section ah-section--docs">
        <p className="ah-label" data-anim="up">Documentation</p>
        <h2 className="ah-title" data-anim="up" data-anim-delay="80">Documents Required</h2>
        <p className="ah-sub">Ensure you have the following documents ready before beginning your application.</p>
        <div className="ah-doc-grid">

          <div className="ah-doc-card ah-fadein" style={{ animationDelay: "0s" }}>
            <div className="ah-doc-icon" style={{ background: "#EAF4FF" }}>🪪</div>
            <h3>Identity Documents</h3>
            <p>Passport, national ID, and proof of name change if applicable.</p>
          </div>

          <div className="ah-doc-card ah-fadein" style={{ animationDelay: "0.1s" }}>
            <div className="ah-doc-icon" style={{ background: "#FDF3E3" }}>💼</div>
            <h3>Employment History</h3>
            <p>Verified records of all relevant nursing or healthcare employment.</p>
          </div>

          <div className="ah-doc-card ah-fadein" style={{ animationDelay: "0.2s" }}>
            <div className="ah-doc-icon" style={{ background: "#E6FAEF" }}>🎓</div>
            <h3>Education History</h3>
            <p>Degree certificates, transcripts, and nursing qualification documents.</p>
          </div>

          <div className="ah-doc-card ah-fadein" style={{ animationDelay: "0.3s" }}>
            <div className="ah-doc-icon" style={{ background: "#F3EEFA" }}>🌐</div>
            <h3>Language Proficiency</h3>
            <p>OET, IELTS, or equivalent English language test results.</p>
          </div>

        </div>
      </section>

      {/* APPLICATION STAGES */}
      <section className="ah-section ah-section--stages">
        <p className="ah-label" data-anim="up">Process</p>
        <h2 className="ah-title" data-anim="up" data-anim-delay="80">AHPRA Registration Application Stages</h2>
        <p className="ah-sub">A clear step-by-step overview of what happens from submission to outcome.</p>
        <div className="ah-steps">

          <div className="ah-step ah-fadein" style={{ animationDelay: "0s" }}>
            <div className="ah-step-num">1</div>
            <span className="ah-step-icon">📋</span>
            <h3>Application Submission</h3>
            <p>We help you compile and submit your AHPRA application with all required documents accurately prepared.</p>
          </div>

          <div className="ah-step ah-fadein" style={{ animationDelay: "0.1s" }}>
            <div className="ah-step-num">2</div>
            <span className="ah-step-icon">🔍</span>
            <h3>Qualifications &amp; Documentation Review</h3>
            <p>AHPRA reviews your qualifications and documentation submitted with your application.</p>
          </div>

          <div className="ah-step ah-fadein" style={{ animationDelay: "0.2s" }}>
            <div className="ah-step-num">3</div>
            <span className="ah-step-icon">🪪</span>
            <h3>Identification Review</h3>
            <p>AHPRA reviews your identification and other required information to verify your details.</p>
          </div>

          <div className="ah-step ah-fadein" style={{ animationDelay: "0.3s" }}>
            <div className="ah-step-num">4</div>
            <span className="ah-step-icon">⚖️</span>
            <h3>NMBA Decision</h3>
            <p>The Nursing and Midwifery Board of Australia (NMBA) makes a decision on your registration application.</p>
          </div>

          <div className="ah-step ah-fadein" style={{ animationDelay: "0.4s" }}>
            <div className="ah-step-num">5</div>
            <span className="ah-step-icon">📬</span>
            <h3>Outcome Communication</h3>
            <p>You are notified of the outcome. We help you understand the result and advise on next steps.</p>
          </div>

          <div className="ah-step ah-fadein" style={{ animationDelay: "0.5s" }}>
            <div className="ah-step-num">6</div>
            <span className="ah-step-icon">🔁</span>
            <h3>Appeal Final Decision</h3>
            <p>If required, we support you through the appeals process to challenge or review the final decision.</p>
          </div>

        </div>
      </section>

      {/* WHAT THIS INCLUDES */}
      <section className="ah-section ah-section--includes">
        <div className="ah-includes-card ah-fadein">
          <div className="ah-includes-header">
            <span className="ah-includes-pin">📌</span>
            <div>
              <p className="ah-label" style={{ marginBottom: 4 }}>Requirements</p>
              <h2 className="ah-title" style={{ marginBottom: 0 }}>What This Includes</h2>
            </div>
          </div>
          <div className="ah-includes-intro">
            Mindtree Nursing Solution AHPRA nursing registration requirements include evidence of current registration with the AHPRA, eligibility to work in Australia, and a valid Working with Children Check.
          </div>
          <ul className="ah-includes-list">

            <li className="ah-includes-item ah-fadein" style={{ animationDelay: "0.2s" }}>
              <span className="ah-includes-bullet">✓</span>
              <span>Nursing Qualification</span>
            </li>

            <li className="ah-includes-item ah-fadein" style={{ animationDelay: "0.3s" }}>
              <span className="ah-includes-bullet">✓</span>
              <span>English Language Proficiency</span>
            </li>

            <li className="ah-includes-item ah-fadein" style={{ animationDelay: "0.4s" }}>
              <span className="ah-includes-bullet">✓</span>
              <span>Objective Structured Clinical Examination (OSCE)</span>
            </li>

            <li className="ah-includes-item ah-fadein" style={{ animationDelay: "0.6s" }}>
              <span className="ah-includes-bullet">✓</span>
              <span>Professional Practice</span>
            </li>

            <li className="ah-includes-item ah-fadein" style={{ animationDelay: "0.7s" }}>
              <span className="ah-includes-bullet">✓</span>
              <span>Code of Conduct and Professional Standards</span>
            </li>

          </ul>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="ah-section ah-section--cta">
        <div className="ah-cta-card ah-fadein">
          <div className="ah-cta-inner">
            <div className="ah-cta-text">
              <p className="ah-label">Get Started</p>
              <h2 className="ah-cta-title">Ready to Begin Your AHPRA Registration?</h2>
              <p className="ah-cta-sub">Contact us directly and our experts will guide you through every step of the process.</p>
            </div>
            <div className="ah-cta-buttons">
              <a href="tel:8921284622" className="ah-cta-btn ah-cta-btn--call">
                <span className="ah-btn-icon">📞</span>
                <span className="ah-btn-text">
                  <span className="ah-btn-label">Call Us Now</span>
                  <span className="ah-btn-value">+91 8921284622</span>
                </span>
              </a>
              <a href="https://wa.me/918921284622" className="ah-cta-btn ah-cta-btn--whatsapp" target="_blank" rel="noreferrer">
                <span className="ah-btn-icon">💬</span>
                <span className="ah-btn-text">
                  <span className="ah-btn-label">WhatsApp Us</span>
                  <span className="ah-btn-value">Quick Response</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section className="ah-section ah-section--trust">
        <p className="ah-label" data-anim="up">Why Choose Us</p>
        <h2 className="ah-title" data-anim="up" data-anim-delay="80">Our Commitment to You</h2>
        <div className="ah-trust-grid">

          <div className="ah-trust-card ah-fadein" style={{ animationDelay: "0s" }}>
            <div className="ah-trust-icon" style={{ background: "#EAF4FF" }}>🧭</div>
            <h3>Personalised Guidance</h3>
            <p>Every applicant's situation is unique — we tailor our support to your specific AHPRA pathway.</p>
          </div>

          <div className="ah-trust-card ah-fadein" style={{ animationDelay: "0.1s" }}>
            <div className="ah-trust-icon" style={{ background: "#FDF3E3" }}>📑</div>
            <h3>Document Preparation</h3>
            <p>We meticulously prepare and review every document to meet AHPRA's stringent requirements.</p>
          </div>

          <div className="ah-trust-card ah-fadein" style={{ animationDelay: "0.2s" }}>
            <div className="ah-trust-icon" style={{ background: "#E6FAEF" }}>✅</div>
            <h3>AHPRA Compliant</h3>
            <p>Your application is prepared to align seamlessly with all AHPRA standards and expectations.</p>
          </div>

          <div className="ah-trust-card ah-fadein" style={{ animationDelay: "0.3s" }}>
            <div className="ah-trust-icon" style={{ background: "#F3EEFA" }}>⚡</div>
            <h3>Faster Registration</h3>
            <p>Our deep understanding of the process accelerates your registration journey significantly.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
