import Link from "next/link";
import "./courses.css";

export const metadata = {
  title: "Courses | Mindtree Nursing Solutions",
  description:
    "Explore professional courses in nursing, OET preparation, OSCE training, and international healthcare career pathways.",
  keywords: [
    "Therapeutic Communication",
    "OET",
    "IQN",
    "OSCE",
    "Nursing Training",
    "Communication Skills for Nurses",
    "Mindtree Nursing Solutions"
  ],
};

/* ── Inline SVG icons ── */
const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconProfessionalCommunication = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconOETPreparation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
  </svg>
);
const IconOSCEChristchurch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
const IconOSCEKerala = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M6 3v5a4 4 0 0 0 8 0V3" />
    <path d="M10 17a4 4 0 0 0 8 0v-2" />
    <circle cx="18" cy="13" r="2" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

/* ── Reusable Card ── */
function CourseCard({ photo, alt, icon, title, subtitle, badge, para1, tags, href, animDelay }) {
  return (
    <Link
      href={href}
      className={`crs-card${badge ? " crs-card--featured" : ""}`}
      data-anim="up"
      data-anim-delay={animDelay}
    >
      {/* PHOTO */}
      <div className="crs-card-photo">
        <img src={photo} alt={alt} loading="lazy" />
        <div className="crs-card-photo-overlay" />
        {badge && <span className="crs-card-photo-badge">{badge}</span>}
        <div className="crs-card-icon-float">{icon}</div>
      </div>

      {/* BODY */}
      <div className="crs-card-body">
        <div className="crs-card-title-row">
          <h2 className="crs-card-abbr">{title}</h2>
          <p className="crs-card-name">{subtitle}</p>
        </div>

        <p className="crs-card-para-1">{para1}</p>

        {tags && (
          <div className="crs-card-tags">
            {tags.map((t) => <span key={t} className="crs-tag">{t}</span>)}
          </div>
        )}

        <div className="crs-card-footer">
          <span className="crs-card-link">
            Learn More
            <span className="crs-card-link-arrow"><ArrowRight /></span>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Page ── */
export default function Courses() {
  return (
    <main className="course-page">

      {/* ── HERO ── */}
      <section className="course-hero">
        <div className="course-hero-blob course-hero-blob-1" />
        <div className="course-hero-blob course-hero-blob-2" />
        <div className="course-hero-blob course-hero-blob-3" />
        <div className="course-hero-grid" />
        <div className="course-hero-inner">
          <span className="course-hero-badge">Learn With Us</span>
          <h1 className="course-hero-title">
            Mindtree Nursing
            <em className="course-hero-em"> Courses</em>
          </h1>
          <div className="course-hero-divider">
            <span className="course-divider-line" />
            <span className="course-divider-star">✦</span>
            <span className="course-divider-line" />
          </div>
          <p className="course-hero-sub">
            Expert-led programmes designed to get you registered and working in
            New Zealand as fast as possible — online, offline, and everywhere in between.
          </p>
        </div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="course-cards-section">
        <div className="course-cards-inner">

          {/* Section intro */}
          <div className="course-section-intro">
            <p className="course-section-intro-label" data-anim="up">Our Programmes</p>
            <h2 className="course-section-intro-title" data-anim="up" data-anim-delay="80">
              Everything You Need to Succeed Abroad
            </h2>
            <p className="course-section-intro-sub" data-anim="up" data-anim-delay="160">
              From clinical exam prep to language proficiency and professional communication
              — we have a course for every step of your journey.
            </p>
            <div className="course-stats-bar" data-anim="up" data-anim-delay="240">
              <div className="course-stat">
                <span className="course-stat-num">3</span>
                <span className="course-stat-label">Programmes</span>
              </div>
              <div className="course-stat">
                <span className="course-stat-num">5000+</span>
                <span className="course-stat-label">Nurses Trained</span>
              </div>
              <div className="course-stat">
                <span className="course-stat-num">3</span>
                <span className="course-stat-label">Countries</span>
              </div>
              <div className="course-stat">
                <span className="course-stat-num">98%</span>
                <span className="course-stat-label">Pass Rate</span>
              </div>
            </div>
          </div>

          <div className="course-grid">

            <CourseCard
              photo="/box-img/Iqn_training.jpeg"
              alt="IQN training class"
              icon={<IconLayers />}
              title="IQN Training Program"
              subtitle="International Qualifications in Nursing"
              badge="IQN"
              para1="Top-tier preparation featuring mock tests, live and recorded classes, and a dedicated mobile app available on both iOS and Android."
              tags={["Mock Tests", "Live Classes", "Mobile App"]}
              href="/courses/best-iqn-coaching"
              animDelay={0}
            />

            <CourseCard
              photo="/box-img/Osce_training.jpeg"
              alt="OSCE clinical training Kerala"
              icon={<IconOSCEKerala />}
              title="OSCE Training"
              subtitle="Objective Structured Clinical Examination"
              badge="OSCE"
              para1="Premier clinical exam preparation delivered through our state-of-the-art facilities in Kerala, fully aligned with NCNZ standards."
              tags={["Clinical Skills", "Station Practice", "Mock Exams"]}
              href="/courses/best-osce-training"
              animDelay={100}
            />


            <CourseCard
              photo="/box-img/Oet_online.jpeg"
              alt="OET English preparation"
              icon={<IconOETPreparation />}
              title="OET Preparation"
              badge="OET"
              subtitle="Occupational English Test — Online & Offline"
              para1="Tailored Occupational English Test coaching to meet your language proficiency requirements with confidence — across reading, writing, listening, and speaking."
              tags={["Writing", "Speaking", "Healthcare English"]}
              href="/courses/best-oet-coaching-centre-in-kerala"
              animDelay={400}
            />


          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="course-cta">
        <div className="course-cta-shape" />
        <div className="course-cta-inner">
          <h2 className="course-cta-heading" data-anim="up">Not sure where to start?</h2>
          <p className="course-cta-sub" data-anim="up" data-anim-delay="130">
            Book a free consultation and our advisors will map out the exact steps
            you need to begin your international nursing career.
          </p>
          <Link href="/contact" className="course-cta-btn" data-anim="up" data-anim-delay="260">
            <span>Book a Free Consultation</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
