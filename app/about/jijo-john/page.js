import Link from "next/link";
import "./jijo.css";

export const metadata = {
  title: "Jijo John — Founder & CEO | Mindtree Nursing Solutions",
  description:
    "Jijo John is a New Zealand Registered Nurse, healthcare entrepreneur and clinical educator, and the Founder & CEO of Mindtree Nursing Solutions, with 16+ years of international clinical experience across India, the UAE and New Zealand.",
  keywords: [
    "Jijo John",
    "Mindtree Nursing Solutions CEO",
    "New Zealand Registered Nurse",
    "OSCE instructor",
    "Nursing Council of New Zealand",
  ],
};

const CREDENTIALS = [
  { label: "Founder & CEO", sub: "Mindtree Nursing Solutions" },
  { label: "Registered Nurse", sub: "New Zealand" },
  { label: "OSCE Instructor", sub: "For internationally qualified nurses" },
  { label: "Former Board Member", sub: "Nursing Council of New Zealand" },
  { label: "BSc Nursing", sub: "NTR University, India" },
];

const HONOURS = [
  {
    title: "Best Male Nurse Award",
    from: "Malayalam FM",
  },
  {
    title: "Community Nursing Award",
    from: "Auckland Malayalee Samajam",
  },
  {
    title: "UAE Golden Visa",
    from: "Recognising his international professional & business profile",
  },
];

export default function JijoJohnPage() {
  return (
    <main className="jj-page">
      {/* ── HERO ── */}
      <section className="jj-hero">
        <div className="jj-hero-shape jj-hero-shape-1" />
        <div className="jj-hero-shape jj-hero-shape-2" />

        <div className="jj-hero-inner">
          <div className="jj-hero-text">
            <span className="jj-badge">Founder &amp; CEO</span>
            <h1 className="jj-title">Jijo John</h1>
            <p className="jj-subtitle">Registered Nurse — New Zealand</p>
            <div className="jj-divider">
              <span className="jj-divider-line" />
              <span className="jj-divider-star">✦</span>
              <span className="jj-divider-line" />
            </div>
            <p className="jj-hero-intro">
              Healthcare entrepreneur and clinical educator, known for his
              leadership in nursing workforce development, healthcare quality
              and professional regulation.
            </p>
          </div>

          <div className="jj-hero-portrait">
            <div className="jj-portrait-glow" />
            <div className="jj-portrait-frame">
              <img src="/Jijo.png" alt="Jijo John, Founder & CEO of Mindtree Nursing Solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="jj-bio">
        <nav className="jj-crumb" aria-label="Breadcrumb">
          <Link href="/about">About</Link>
          <span className="jj-crumb-sep">/</span>
          <span className="jj-crumb-current">Jijo John</span>
        </nav>

        <div className="jj-bio-inner">
          <div className="jj-bio-head" data-anim="from-left">
            <span className="jj-label">Profile</span>
            <h2 className="jj-heading">
              A leader shaping New&nbsp;Zealand’s nursing workforce
            </h2>
            <div className="jj-accent-bar" />

            <ul className="jj-creds">
              {CREDENTIALS.map((c) => (
                <li className="jj-cred" key={c.label}>
                  <span className="jj-cred-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="jj-cred-text">
                    <span className="jj-cred-main">{c.label}</span>
                    <span className="jj-cred-sub">{c.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="jj-bio-body" data-anim="from-right" data-anim-delay="120">
            <p className="jj-para">
              Jijo John is a New Zealand Registered Nurse, healthcare
              entrepreneur and clinical educator known for his leadership in
              nursing workforce development, healthcare quality and professional
              regulation. With more than 16 years of international clinical
              experience across India, the UAE and New Zealand, he brings a rare
              combination of frontline expertise, governance capability and a
              strong commitment to public safety.
            </p>
            <p className="jj-para">
              He holds a Bachelor of Science in Nursing from NTR University,
              India, and has practised extensively in critical care, surgical,
              orthopaedic, aged care and cardiac / catheterisation laboratory
              services. His senior nursing experience in the UAE — including
              Charge Nurse responsibilities — provided him with deep exposure to
              international quality standards and JCI-aligned clinical
              governance.
            </p>
            <p className="jj-para">
              Since relocating to New Zealand in 2020, Jijo has continued his
              clinical practice while founding Mindtree Nursing Solutions, where
              he serves as Founder and CEO. He is a recognised OSCE instructor,
              supporting internationally qualified nurses to meet New Zealand’s
              clinical, communication and cultural safety standards. Through
              Mindtree, he leads strategic planning, staff development, financial
              management, clinical education, quality assurance and
              organisational growth — contributing to a safe and competent
              nursing workforce.
            </p>
            <p className="jj-para">
              Jijo has also served as a Board Member of the Nursing Council of
              New Zealand, gaining valuable experience in professional
              regulation, governance, cultural safety, public protection and
              accountability.
            </p>
          </div>
        </div>
      </section>

      {/* ── HONOURS ── */}
      <section className="jj-honours">
        <div className="jj-hon-head" data-anim="up">
          <span className="jj-label">Recognition</span>
          <h2 className="jj-heading center">Honours &amp; Awards</h2>
          <p className="jj-hon-sub">
            His contributions to the profession have been recognised through
            multiple honours.
          </p>
        </div>

        <div className="jj-hon-grid">
          {HONOURS.map((h, i) => (
            <div
              className="jj-hon-card"
              key={h.title}
              data-anim="up"
              data-anim-delay={i * 110}
            >
              <span className="jj-hon-medal" aria-hidden="true">🏅</span>
              <h3 className="jj-hon-title">{h.title}</h3>
              <span className="jj-hon-from">{h.from}</span>
            </div>
          ))}
        </div>

        <p className="jj-closing" data-anim="up">
          Driven by a commitment to clinical excellence, public safety and
          culturally responsive care, Jijo continues to influence nursing
          education, workforce capability and healthcare quality across New
          Zealand.
        </p>
      </section>


    </main>
  );
}
