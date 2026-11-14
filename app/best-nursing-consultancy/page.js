import Link from "next/link";
import LeadForm from "./LeadForm.js";
import "./best-nursing-consultancy.css";

const COURSE_TAGS = [
  "OET",
  "IQN Training",
  "OSCE",
  "CGFNS",
  "Therapeutic Communication",
  "CV Preparation",
  "NZ Registration",
  "Full Process",
];

export const metadata = {
  title: "Best Nursing Consultancy in India & New Zealand | Mindtree Nursing Solutions",
  description:
    "Looking for the best nursing consultancy? Mindtree Nursing Solutions provides expert IQN training, OSCE coaching, nursing registration and overseas career guidance in India and New Zealand, helping nurses build successful international careers.",
  keywords: [
    "Best Nursing Consultancy",
    "Nursing Consultancy India",
    "Nursing Consultancy New Zealand",
    "IQN training",
    "OSCE coaching",
    "nursing registration",
    "overseas nursing career",
    "Mindtree Nursing Solutions",
  ],
};

const STEPS = [
  {
    num: "1",
    title: "Submit the form",
    body: "Share a few quick details — it takes less than 2 minutes.",
  },
  {
    num: "2",
    title: "Talk to an expert",
    body: "Our nursing consultants call you back for a free, no-obligation consultation.",
  },
  {
    num: "3",
    title: "Start your journey",
    body: "Get a personalised plan for training, registration and your overseas career.",
  },
];

const EXPLORE = [
  {
    icon: "★",
    title: "Testimonials",
    body: "Real success stories from nurses who achieved their dreams with Mindtree.",
    href: "/testimonials",
  },
  {
    icon: "◆",
    title: "Gallery",
    body: "Moments from our training sessions, events and nursing community.",
    href: "/gallery",
  },
  {
    icon: "◈",
    title: "Courses",
    body: "IQN, OSCE and OET coaching programs designed to help you succeed.",
    href: "/courses",
  },
  {
    icon: "✚",
    title: "Services",
    body: "Registration, CGFNS, visa, documentation and overseas career support.",
    href: "/services",
  },
];

export default function BestNursingConsultancyPage() {
  return (
    <main className="bnc-page">

      {/* ── LEAD HERO (form on top) ── */}
      <section className="bnc-lead">
        <div className="bnc-lead-inner">
          <div className="bnc-lead-shape bnc-lead-shape-1" />
          <div className="bnc-lead-shape bnc-lead-shape-2" />
          {/* Value proposition + form */}
          <div className="bnc-lead-text">
            <span className="bnc-badge">Nursing Consultancy · India &amp; New Zealand</span>
            <h1 className="bnc-title">
              Looking for the Best <em className="bnc-title-em">Nursing Consultancy</em>
            </h1>
            <p className="bnc-lead-intro">
              Expert IQN training, OSCE coaching, nursing registration and overseas career guidance in
              India and New Zealand — helping nurses build successful international careers.
            </p>

            <div className="bnc-tags">
              {COURSE_TAGS.map((t) => (
                <span className="bnc-tag" key={t}>{t}</span>
              ))}
            </div>

            <LeadForm />

            <div className="bnc-rating">
              <span className="bnc-stars" aria-hidden="true">★★★★★</span>
              <span className="bnc-rating-text">
                Trusted by <strong>5000+ nurses </strong> across India &amp; New Zealand
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="bnc-lead-media">
            <img
              src="/box-img/best-consuitancy.png"
              alt="Nurses building successful international careers with Mindtree Nursing Solutions"
              className="bnc-lead-img"
            />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bnc-steps">
        <div className="bnc-section-head" data-anim="up">
          <span className="bnc-label">Simple &amp; Free</span>
          <h2 className="bnc-heading">Get started in 3 easy steps</h2>
          <div className="bnc-accent-bar" />
        </div>

        <div className="bnc-steps-grid">
          {STEPS.map((s, i) => (
            <div className="bnc-step" key={s.num} data-anim="up" data-anim-delay={i * 100}>
              <span className="bnc-step-num">{s.num}</span>
              <h3 className="bnc-step-title">{s.title}</h3>
              <p className="bnc-step-body">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="bnc-steps-cta" data-anim="up">
          <a href="#enquire" className="bnc-cta-btn">Fill the Form — It&apos;s Free</a>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="bnc-offer">
        <div className="bnc-section-head" data-anim="up">
          <span className="bnc-label">Explore Mindtree</span>
          <h2 className="bnc-heading">Discover more about us</h2>
          <div className="bnc-accent-bar" />
        </div>

        <div className="bnc-offer-grid">
          {EXPLORE.map((o, i) => (
            <Link
              href={o.href}
              className="bnc-offer-card"
              key={o.title}
              data-anim="scale-up"
              data-anim-delay={i * 90}
            >
              <span className="bnc-offer-icon">{o.icon}</span>
              <h3 className="bnc-offer-title">{o.title}</h3>
              <p className="bnc-offer-body">{o.body}</p>
              <span className="bnc-offer-link">Visit page →</span>
            </Link>
          ))}
        </div>

        <div className="bnc-offer-cta" data-anim="up">
          <a href="#enquire" className="bnc-cta-btn">Book a Free Consultation</a>
        </div>
      </section>

    </main>
  );
}
