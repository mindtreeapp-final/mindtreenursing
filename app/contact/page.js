import Link from "next/link";
import "./contact.css";

export const metadata = {
  title: "Contact Us | Mindtree Nursing Solutions",
  description:
    "Get in touch with Mindtree Nursing Solutions for expert guidance on OET, IQN, OSCE, CGFNS, nursing registration, visa assistance, ticketing, and accommodation services. Contact our team today for personalized support.",
  keywords: [
    "Contact Mindtree Nursing",
    "Nursing Consultancy Contact",
    "OET Support",
    "IQN Guidance",
    "OSCE Training",
    "Visa Assistance",
    "Mindtree Nursing Solutions",
  ],
};

const DEPARTMENTS = [
  {
    name: "OET",
    desc: "Occupational English Test preparation and guidance.",
    phone: "+91 8075255213",
    href: "tel:+918075255213",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    name: "OSCE",
    desc: "Objective Structured Clinical Examination training.",
    phone: "+91 9778162650",
    href: "tel:+919778162650",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    name: "IQN",
    desc: "International Qualifications for Nurses assessment support.",
    phone: "+91 9778585329",
    href: "tel:+919778585329",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    name: "Communication",
    desc: "General enquiries, media and partnership communications.",
    phone: "+91 8075255213",
    href: "tel:+918075255213",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    name: "Visa",
    desc: "A visa is permission to enter another country.",
    phone: "+91 8921491752",
    href: "tel:+918921491752",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 9h.01M7 15h.01M11 9h6M11 15h6"/>
      </svg>
    ),
  },
  {
    name: "AHPRA",
    desc: "Australian Health Practitioner Regulation Agency.",
    phone: "+91 8921284622",
    href: "tel:+918921284622",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9c0-1.01-.124-1.993-.382-2.916z"/>
      </svg>
    ),
  },
  {
    name: "Flight Ticket",
    desc: "A flight ticket confirms your seat on an airline journey.",
    phone: "+91 9778286707",
    href: "tel:+919778286707",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
      </svg>
    ),
  },
  {
    name: "TruMerit",
    desc: "Internationally educated nurses verify their qualifications for working abroad.",
    phone: "+91 9995487593",
    href: "tel:+919995487593",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function ContactPage() {
  return (
    <main className="ct-page">

      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="ct-hero__shape-1" />
        <div className="ct-hero__shape-2" />
        <div className="ct-hero__inner">
          <span className="ct-hero__badge">Contact Us</span>
          <h1 className="ct-hero__title">
            Get in <em className="ct-hero__em">Touch</em>
          </h1>
          <p className="ct-hero__sub">
            We're here to guide you every step of the way. Reach out to our offices across New Zealand and India.
          </p>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ── */}
      <div className="ct-strip" data-anim="up">
        <div className="ct-strip__inner">
          <a href="tel:+919778286707" className="ct-strip__item">
            <div className="ct-strip__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <span className="ct-strip__label">India Office</span>
              <span className="ct-strip__value">+91 9778 286 707</span>
            </div>
          </a>
          <div className="ct-strip__sep" />
          <a href="tel:+64221230023" className="ct-strip__item">
            <div className="ct-strip__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <span className="ct-strip__label">NZ Office</span>
              <span className="ct-strip__value">+64 22 123 0023</span>
            </div>
          </a>
          <div className="ct-strip__sep" />
          <a href="mailto:info@mindtreenursing.com" className="ct-strip__item">
            <div className="ct-strip__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <span className="ct-strip__label">Email</span>
              <span className="ct-strip__value">info@mindtreenursing.com</span>
            </div>
          </a>
          <div className="ct-strip__sep" />
          <a href="https://wa.me/919778286707" target="_blank" rel="noreferrer" className="ct-strip__item ct-strip__item--wa">
            <div className="ct-strip__icon ct-strip__icon--wa">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.563 4.14 1.535 5.875L0 24l6.292-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.659-.5-5.191-1.374l-.371-.214-3.735.894.943-3.623-.235-.385A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </div>
            <div>
              <span className="ct-strip__label">WhatsApp</span>
              <span className="ct-strip__value">Quick Response</span>
            </div>
          </a>
        </div>
      </div>

      {/* ── LOCATIONS ── */}
      <section className="ct-locations">
        <div className="ct-locations__inner">
          <div className="ct-section-head" data-anim="up">
            <span className="ct-eyebrow">Our Offices</span>
            <h2 className="ct-section-h2">Find Us Near You</h2>
          </div>

          <div className="ct-locations__grid">

            {/* Auckland */}
            <div className="ct-loc-card" data-anim="scale-up">
              <div className="ct-loc-card__flag">🇳🇿</div>
              <div className="ct-loc-card__top">
                <div className="ct-loc-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="ct-loc-card__country">New Zealand</h3>
                  <p className="ct-loc-card__city">Auckland</p>
                </div>
              </div>
              <p className="ct-loc-card__address">
                30/167 Whitney Street, Blockhouse Bay,<br />Auckland, 0600
              </p>
              <div className="ct-loc-card__contacts">
                <a href="tel:+6421217870" className="ct-loc-card__phone">
                  <PhoneIcon /> +64 21 217 8770
                </a>
                <a href="mailto:info@mindtreenursing.com" className="ct-loc-card__email">
                  info@mindtreenursing.com
                </a>
              </div>
              <a href="https://maps.google.com/?q=30/167+Whitney+Street+Blockhouse+Bay+Auckland" target="_blank" rel="noopener noreferrer" className="ct-loc-card__map-btn">
                <MapIcon /> View on Map
              </a>
            </div>

            {/* Christchurch */}
            <div className="ct-loc-card" data-anim="scale-up" data-anim-delay="75">
              <div className="ct-loc-card__flag">🇳🇿</div>
              <div className="ct-loc-card__top">
                <div className="ct-loc-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="ct-loc-card__country">New Zealand</h3>
                  <p className="ct-loc-card__city">Christchurch</p>
                </div>
              </div>
              <p className="ct-loc-card__address">
                110 Sir John McKenzie Avenue,<br />Christchurch
              </p>
              <div className="ct-loc-card__contacts">
                <a href="tel:+64221230023" className="ct-loc-card__phone">
                  <PhoneIcon /> +64 22 123 0023
                </a>
                <a href="mailto:info@mindtreenursing.com" className="ct-loc-card__email">
                  info@mindtreenursing.com
                </a>
              </div>
              <a href="https://maps.google.com/?q=110+Sir+John+McKenzie+Avenue+Christchurch" target="_blank" rel="noopener noreferrer" className="ct-loc-card__map-btn">
                <MapIcon /> View on Map
              </a>
            </div>

            {/* India */}
            <div className="ct-loc-card" data-anim="scale-up" data-anim-delay="150">
              <div className="ct-loc-card__flag">🇮🇳</div>
              <div className="ct-loc-card__top">
                <div className="ct-loc-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="ct-loc-card__country">India</h3>
                  <p className="ct-loc-card__city">Kerala</p>
                </div>
              </div>
              <p className="ct-loc-card__address">
                Olivet, M.C. Road, Panavely,<br />Kottarakkara, Kollam, Kerala 691532
              </p>
              <div className="ct-loc-card__contacts">
                <a href="tel:+919778286707" className="ct-loc-card__phone">
                  <PhoneIcon /> +91 9778 286 707
                </a>
                <a href="mailto:info@mindtreenursing.com" className="ct-loc-card__email">
                  info@mindtreenursing.com
                </a>
              </div>
              <a href="https://maps.google.com/?q=Olivet+MC+Road+Panavely+Kottarakkara+Kollam+Kerala" target="_blank" rel="noopener noreferrer" className="ct-loc-card__map-btn">
                <MapIcon /> View on Map
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section className="ct-dept">
        <div className="ct-dept__inner">
          <div className="ct-section-head ct-section-head--center" data-anim="up">
            <span className="ct-eyebrow">Direct Lines</span>
            <h2 className="ct-section-h2">Contact by Department</h2>
            <p className="ct-section-sub">Reach the right team directly for faster support.</p>
          </div>

          <div className="ct-dept__grid">
            {DEPARTMENTS.map((dept, i) => (
              <a key={dept.name} href={dept.href} className="ct-dept__card" data-anim="scale-up" data-anim-delay={i * 60}>
                <div className="ct-dept__card-top">
                  <div className="ct-dept__icon">{dept.icon}</div>
                  <span className="ct-dept__num">{dept.phone}</span>
                </div>
                <h3 className="ct-dept__name">{dept.name}</h3>
                <p className="ct-dept__desc">{dept.desc}</p>
                <span className="ct-dept__call">
                  <PhoneIcon /> Call Now
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
