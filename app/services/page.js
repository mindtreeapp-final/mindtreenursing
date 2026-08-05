import Link from "next/link";
import "./service.css";

export const metadata = {
  title: "Services | Mindtree Nursing Solutions",
  description:
    "From visa assistance to flight bookings and career pathways, we provide end-to-end support for your international nursing journey.",
  keywords: [
    "Flight Tickets",
    "CGFNS",
    "Nursing Registration in New Zealand",
    "Nursing Registration in Australia",
    "Pathway for Registered Nurses from the UK and Ireland to New Zealand",
    "Pathway for UK Ireland Nurses to Australia",
    "CV Preparation",
    "Visa",
    "Accommodation and Transportation",
    "AHPRA Registration",
    "Mindtree Nursing"
  ],
};

/* ── Inline SVG icons ── */
const IconFlight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M22 2L11 13" /><path d="M22 2L15 22 11 13 2 9l20-7z" />
  </svg>
);
const IconCV = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const IconVisa = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M7 9h.01M7 15h.01M11 9h6M11 15h6" />
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconNursingRegistrationNZ = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
    <path d="M14 2v5h5" />
    <path d="M9 13l2 2 4-4" />
  </svg>
);
const IconUKIrelandToAustralia = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M14 8l4 4-4 4" />
  </svg>
);
const IconNursingAustralia = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
    <path d="M14 2v5h5" />
    <path d="M9 13l2 2 4-4" />
  </svg>
);
const IconUKIrelandToNZ = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
    <path d="M14 8l4 4-4 4" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

/* ── Reusable Card ── */
function ServiceCard({ photo, alt, icon, abbr, name, badge, para1, tags, href, animDelay }) {
  return (
    <Link
      href={href}
      className={`svc-card${badge ? " svc-card--featured" : ""}`}
      data-anim="up"
      data-anim-delay={animDelay}
    >
      {/* PHOTO */}
      <div className="svc-card-photo">
        <img src={photo} alt={alt} loading="lazy" />
        <div className="svc-card-photo-overlay" />
        {badge && <span className="svc-card-photo-badge">{badge}</span>}
        <div className="svc-card-icon-float">{icon}</div>
      </div>

      {/* BODY */}
      <div className="svc-card-body">
        <div className="svc-card-title-row">
          <h2 className="svc-card-abbr">{abbr}</h2>
          <p className="svc-card-name">{name}</p>
        </div>

        <p className="svc-card-para-1">{para1}</p>

        {tags && (
          <div className="svc-card-tags">
            {tags.map((t) => <span key={t} className="svc-tag">{t}</span>)}
          </div>
        )}

        <div className="svc-card-footer">
          <span className="svc-card-link">
            Learn More
            <span className="svc-card-link-arrow"><ArrowRight /></span>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Page ── */
export default function ServicesPage() {
  return (
    <main className="service-page">

      {/* ── HERO ── */}
      <section className="service-hero">
        <div className="service-hero-blob service-hero-blob-1" />
        <div className="service-hero-blob service-hero-blob-2" />
        <div className="service-hero-blob service-hero-blob-3" />
        <div className="service-hero-grid" />
        <div className="service-hero-inner">
          <span className="service-hero-badge">What We Offer</span>
          <h1 className="service-hero-title">
            Mindtree Nursing
            <em className="service-hero-em"> Services</em>
          </h1>
          <div className="service-hero-divider">
            <span className="service-divider-line" />
            <span className="service-divider-star">✦</span>
            <span className="service-divider-line" />
          </div>
          <p className="service-hero-sub">
            Beyond training and certification, we take care of every practical detail
            of your move abroad — so you can focus on your new career, not the paperwork.
          </p>
        </div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="service-cards-section">
        <div className="service-cards-inner">

          {/* Section intro */}
          <div className="service-section-intro">
            <p className="service-section-intro-label" data-anim="up">Our Services</p>
            <h2 className="service-section-intro-title" data-anim="up" data-anim-delay="80">
              End-to-End Support for Your Move
            </h2>
            <p className="service-section-intro-sub" data-anim="up" data-anim-delay="160">
              From registration and visa paperwork to flights and accommodation —
              we handle every step so you arrive confident and ready.
            </p>
            <div className="service-stats-bar" data-anim="up" data-anim-delay="240">
              <div className="service-stat">
                <span className="service-stat-num">8+</span>
                <span className="service-stat-label">Services</span>
              </div>
              <div className="service-stat">
                <span className="service-stat-num">5000+</span>
                <span className="service-stat-label">Nurses Helped</span>
              </div>
              <div className="service-stat">
                <span className="service-stat-num">3</span>
                <span className="service-stat-label">Countries</span>
              </div>
              <div className="service-stat">
                <span className="service-stat-num">100%</span>
                <span className="service-stat-label">Personalised</span>
              </div>
            </div>
          </div>

          <div className="service-grid">

            <ServiceCard
              photo="/box-img/Ireland to New Zealand.jpeg"
              alt="New Zealand nursing registration"
              icon={<IconNursingRegistrationNZ />}
              abbr="Nursing Registration — New Zealand"
              name="NCNZ Registration Pathway"
              badge="New Zealand"
              para1="Full support through the Nursing Council of New Zealand registration process — from initial assessment and documentation through to final approval."
              tags={["NCNZ", "Registration", "Documentation"]}
              href="/services/nursing-registration-in-new-zealand"
              animDelay={0}
            />

          

            <ServiceCard
              photo="/box-img/Pathway for Registered.jpeg"
              alt="UK and Ireland nurses pathway to New Zealand"
              icon={<IconUKIrelandToNZ />}
              abbr="UK & Ireland Nurses — New Zealand"
              name="Equivalence Pathway to NZ"
              badge="UK & Ireland"
              para1="Dedicated support pathway for nurses registered in the UK and Ireland to transition their qualifications and practice to New Zealand."
              tags={["NCNZ", "UK / Ireland", "Equivalence"]}
              href="/services/pathway-for-registered-nurses-from-the-uk-and-ireland-to-new-zealand"
              animDelay={200}
            />

        
             <ServiceCard
              photo="/box-img/CGFNS.jpeg"
              alt="CGFNS certification support"
              icon={<IconLayers />}
              abbr="CGFNS Certification"
              name="Commission on Graduates of Foreign Nursing Schools"
              badge="TruMerit"
              para1="Comprehensive support through the CGFNS certification process — a key credential for nurses seeking licensure in the United States and other countries."
              tags={["CGFNS", "USA", "Certification"]}
              href="/services/cgfns"
              animDelay={900}
            />


            <ServiceCard
              photo="/box-img/Flight Tickets.jpeg"
              alt="International flight booking"
              icon={<IconFlight />}
              abbr="Flight Tickets"
              name="International Travel Booking"
               badge="Ticket"
              para1="Relocating for work should not add to your stress. We assist in booking cost-effective international flights aligned with your joining dates and visa requirements."
              tags={["Travel Planning", "Visa-Aligned Dates", "Departure Support"]}
              href="/services/flight-ticketing"
              animDelay={400}
            />

            <ServiceCard
              photo="/box-img/CV.jpeg"
              alt="Professional CV on desk"
              icon={<IconCV />}
              abbr="CV & Cover Letter Preparation"
              name="Professional Resume Building"
               badge="CV"
              para1="We craft professional, ATS-friendly CVs and cover letters tailored precisely to your target job description and the standards of your destination country."
              tags={["NZ Format", "Clinical Highlight", "ATS Friendly"]}
              href="/services/cv-preparation"
              animDelay={500}
            />

            <ServiceCard
              photo="/box-img/Visa.jpeg"
              alt="Passport and visa documents"
              icon={<IconVisa />}
              abbr="Visa Assistance"
              name="Work Visa Application Support"
               badge="Visa"
              para1="Navigating immigration paperwork can be overwhelming. We guide you through the correct visa category for your nursing role and provide full documentation checklists."
              tags={["Documentation", "Work Visa", "Application Support"]}
              href="/services/visa"
              animDelay={600}
            />

            <ServiceCard
              photo="/box-img/Accommodation.jpeg"
              alt="Cozy apartment interior"
              icon={<IconHome />}
              abbr="Accommodation & Transportation"
              name="Housing & Travel Arrangements"
              badge="Accommodation"
              para1="Finding a safe and comfortable place to stay when you first arrive is critical. We help nurses secure short-term and long-term accommodation close to their workplace."
              tags={["Short-term", "Long-term", "Near Hospital"]}
              href="/services/accommodation-and-transportation"
              animDelay={700}
            />

            <ServiceCard
              photo="/box-img/AHPRA.jpeg"
              alt="AHPRA registration support"
              icon={<IconCheck />}
              abbr="AHPRA Registration"
              name="Australian Health Practitioner"
              badge="AHPRA"
              para1="Step-by-step guidance through the AHPRA registration process for internationally qualified nurses — covering all documentation, English requirements, and skills assessment."
              tags={["AHPRA", "Australia", "Skills Assessment"]}
              href="/services/ahpra"
              animDelay={800}
            />

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="service-cta">
        <div className="service-cta-shape" />
        <div className="service-cta-inner">
          <h2 className="service-cta-heading" data-anim="up">Ready to make the move?</h2>
          <p className="service-cta-sub" data-anim="up" data-anim-delay="130">
            Book a free consultation and our team will walk you through every service
            you need for a confident, well-prepared relocation.
          </p>
          <Link href="/contact" className="service-cta-btn" data-anim="up" data-anim-delay="260">
            <span>Book a Free Consultation</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
