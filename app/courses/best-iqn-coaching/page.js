import Link from "next/link";
import "./iqn.css";

export const metadata = {
  title: "Best IQN Coaching | Mindtree Nursing Solutions",
  description:
    "Prepare for the IQN pathway to New Zealand with expert guidance from Mindtree Nursing Solutions. Access comprehensive study materials, mock tests, personalized mentoring, and structured training to achieve your nursing registration goals.",
  keywords: [
    "IQN",
    "IQN Preparation",
    "IQN Course",
    "New Zealand Nursing Registration",
    "IQN Coaching",
    "Nursing Registration NZ",
    "Internationally Qualified Nurse",
    "Mindtree Nursing Solutions",
  ],
};

export default function IQNPage() {
  return (
    <main className="iqn-page">

      {/* ── HERO ── */}
      <section className="iqn-hero">
        <div className="iqn-hero-shape-1" />
        <div className="iqn-hero-shape-2" />
        <div className="iqn-hero-inner">
          <span className="iqn-hero-badge">Our Services</span>
          <h1 className="iqn-hero-title">
            International Qualified
            <em className="iqn-hero-em"> Nurses Support</em>
          </h1>
          <div className="iqn-hero-divider">
            <span className="iqn-divider-line" />
            <span className="iqn-divider-star">✦</span>
            <span className="iqn-divider-line" />
          </div>
          <p className="iqn-hero-sub">
            Unwavering support for internationally qualified nurses navigating NZNC registration and beyond.
          </p>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="iqn-intro-section">
        <div className="iqn-intro-inner">
          <div className="iqn-intro-grid">
            <div className="iqn-intro-left" data-anim="from-left">
              <span className="iqn-section-label">Who We Help</span>
              <h2 className="iqn-intro-heading">International Qualified Nurses Support</h2>
              <div className="iqn-accent-bar" />
            </div>
            <div className="iqn-intro-right" data-anim="from-right" data-anim-delay="120">
              <p className="iqn-intro-para">
                Discover unwavering support on your journey as an internationally qualified nurse. We help you with the proceedings of NZNC registration and its approvals as well. Our tailored assistance ensures a smooth transition into the healthcare landscape, guiding you through accreditation processes and offering resources for exam preparation.
              </p>
              <p className="iqn-intro-para">
                Benefit from our expert advice on cultural integration and gain access to a network of seasoned professionals. We provide you with exposure to an environment where you get to connect with the nursing workforce in New Zealand as well. This will help you get your hands on some practical experiences and added knowledge.
              </p>
              <p className="iqn-intro-para">
                Whether navigating licensing requirements or adapting to a new healthcare system, our International Qualified Nurses Support is committed to empowering your success. Join us as you embark on a fulfilling career, confident in the support and resources we provide for your professional growth. Your aspirations are our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL ── */}
      <section className="iqn-trial">
        <div className="iqn-trial__inner">

          {/* Left — content */}
          <div className="iqn-trial__content" data-anim="from-left">
            <span className="iqn-trial__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Free IQN Trial
            </span>

            <h2 className="iqn-trial__title">
              Experience Our IQN<br />
              <em className="iqn-trial__em">Preparation App</em>
            </h2>

            <div className="iqn-trial__accent-bar" />

            <p className="iqn-trial__text">
              Get a firsthand experience of our comprehensive IQN preparation platform.
              Access mock tests, study materials, practice questions, and progress
              tracking designed to help internationally qualified nurses succeed in
              New Zealand.
            </p>

            <ul className="iqn-trial__features">
              <li>
                <span className="iqn-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Full-Length IQN Mock Tests
              </li>
              <li>
                <span className="iqn-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Instant Performance Analysis
              </li>
              <li>
                <span className="iqn-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Comprehensive Study Resources
              </li>
              <li>
                <span className="iqn-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Learn Anytime, Anywhere
              </li>
            </ul>

            <div className="iqn-trial__actions">
              <a
                href="https://snipr.page.link/KdMEKNyGMghwr1JL6"
                target="_blank"
                rel="noopener noreferrer"
                className="iqn-trial__btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Start Free Trial
              </a>
              <div className="iqn-trial__meta">
                <span>No sign-up needed</span>
                <span className="iqn-trial__dot" />
                <span>Instant access</span>
                <span className="iqn-trial__dot" />
                <span>Free forever</span>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="iqn-trial__visual" data-anim="from-right" data-anim-delay="100">
            <div className="iqn-trial__img-glow" />
            <div className="iqn-trial__img-wrap">
              <img
                src="/demo-iqn.jpeg"
                alt="IQN App Preview"
                className="iqn-trial__img"
              />
              {/* floating pill */}
              <div className="iqn-trial__pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Mock Tests &amp; Scenarios
              </div>
              <div className="iqn-trial__pill iqn-trial__pill--2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Free Forever
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="iqn-cta">
        <div className="iqn-cta-shape" />
        <div className="iqn-cta-inner">
          <h2 className="iqn-cta-heading" data-anim="up">Your Aspirations Are Our Priority</h2>
          <p className="iqn-cta-sub" data-anim="up" data-anim-delay="130">
            Join us and embark on a fulfilling nursing career in New Zealand with the support and resources you deserve.
          </p>
          <Link href="/contact" className="iqn-cta-btn" data-anim="up" data-anim-delay="260">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}
