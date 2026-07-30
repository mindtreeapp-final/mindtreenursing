"use client";

import Image from "next/image";
import { useState } from "react";
import "./accommodation.css";

/* ─────────────────────────────────────────────
   DATA  — no prices shown
───────────────────────────────────────────── */
const locations = [
    {
    id: "christchurch",
    city: "Christchurch",
    country: "New Zealand",
    flag: "🇳🇿",
    tag: "NZ",
    tagTheme: "nz",
    reverse: true,
    details: [
      { icon: "room",      text: "Single accommodation not available — available at extra charges if required" },
      { icon: "group",     text: "Sharing accommodation for 2 & 3 members" },
      { icon: "kitchen",   text: "Food materials will be available — candidates can cook" },
      { icon: "transport", text: "Pick-up and drop-off facilities available" },
    ],
    packages: ["1 Week"],
    packageLabel: "Food, Accommodation & Transportation",
    images: [
        { src: "/accommodation-gallery/chc.jpeg",         alt: "Christchurch accommodation" },
      { src: "/accommodation-gallery/akl-2.jpeg",         alt: "Christchurch accommodation" },
      { src: "/accommodation-gallery/akl-3.jpeg",         alt: "Christchurch room" },
    ],
  },
  
  {
    id: "auckland",
    city: "Auckland",
    country: "New Zealand",
    flag: "🇳🇿",
    tag: "NZ",
    tagTheme: "nz",
    reverse: false,
    details: [
      { icon: "room",      text: "No single accommodation available" },
      { icon: "group",     text: "Sharing accommodation for 2 & 3 members" },
      { icon: "kitchen",   text: "Food materials will be available — candidates can cook" },
      { icon: "transport", text: "Pick-up and drop-off facilities available" },
    ],
    packages: ["1 Week", "2 Weeks"],
    packageLabel: "Food, Accommodation & Transportation",
    images: [
      { src: "/accommodation-gallery/Akl.jpeg",           alt: "Auckland accommodation" },
      { src: "/accommodation-gallery/akl-3.jpeg",         alt: "Auckland shared living" },
    ],
  },

  {
    id: "kerala",
    city: "Kerala",
    country: "India",
    flag: "🇮🇳",
    tag: "India",
    tagTheme: "india",
    reverse: true,
    details: [
      { icon: "room",      text: "No single accommodation available" },
      { icon: "group",     text: "Sharing accommodation for 3 members" },
      { icon: "kitchen",   text: "Mess facility available" },
      { icon: "transport", text: "Pick-up and drop-off available if required (extra charges applicable)" },
    ],
    packages: ["1 Week", "2 Weeks"],
    packageLabel: "Food & Accommodation",
    images: [
      { src: "/accommodation-gallery/mindtree-kerala.jpeg",  alt: "Kerala accommodation" },
      { src: "/accommodation-gallery/akl-3.jpeg",             alt: "Kerala dining" },
    ],
  },
];

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
const ICONS = {
  room: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  group: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1"/>
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
  transport: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <path d="M16 8h4l3 5v3h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
};

/* ─────────────────────────────────────────────
   CAROUSEL
───────────────────────────────────────────── */
function Carousel({ images, city }) {
  const [idx, setIdx]       = useState(0);
  const [anim, setAnim]     = useState(false);
  const [dir, setDir]       = useState("next");

  function go(direction) {
    if (anim) return;
    setDir(direction);
    setAnim(true);
    setTimeout(() => {
      setIdx(prev =>
        direction === "next"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
      setAnim(false);
    }, 300);
  }

  return (
    
    <div className="ac-carousel">


      {/* main frame */}
      <div className="ac-frame">
        {/* corner brackets */}
        <span className="ac-corner ac-corner--tl" />
        <span className="ac-corner ac-corner--tr" />
        <span className="ac-corner ac-corner--bl" />
        <span className="ac-corner ac-corner--br" />

        <div className={`ac-img-wrap${anim ? (dir === "next" ? " ac-exit-left" : " ac-exit-right") : " ac-visible"}`}>
          <Image
            src={images[idx].src}
            alt={images[idx].alt}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 48vw"
          />
          <div className="ac-overlay" />
        </div>

        {/* counter */}
        <span className="ac-badge">{idx + 1} / {images.length}</span>
        {/* city label */}
        <span className="ac-watermark">{city}</span>
      </div>

      {/* controls */}
      {images.length > 1 && (
        <div className="ac-controls">
          <button className="ac-nav-btn" onClick={() => go("prev")} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="ac-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`ac-dot${i === idx ? " ac-dot--on" : ""}`}
                onClick={() => {
                  if (anim || i === idx) return;
                  setDir(i > idx ? "next" : "prev");
                  setAnim(true);
                  setTimeout(() => { setIdx(i); setAnim(false); }, 300);
                }}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>

          <button className="ac-nav-btn" onClick={() => go("next")} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   LOCATION ROW
───────────────────────────────────────────── */
function LocationRow({ loc }) {
  return (
    <div className={`ac-row${loc.reverse ? " ac-row--reverse" : ""}`}>

      {/* ── content ── */}
      <div className="ac-content">
        <div className="ac-content-header">
          <span className="ac-flag">{loc.flag}</span>
          <div>
            <p className="ac-country">{loc.country}</p>
            <h2 className="ac-city">{loc.city}</h2>
          </div>
          <span className={`ac-tag ac-tag--${loc.tagTheme}`}>{loc.tag}</span>
        </div>

        <div className="ac-rule" />

        <ul className="ac-details">
          {loc.details.map((d, i) => (
            <li key={i} className="ac-detail">
              <span className="ac-detail-icon">{ICONS[d.icon]}</span>
              <span>{d.text}</span>
            </li>
          ))}
        </ul>

        <div className="ac-rule" />

        <div className="ac-pkgs">
          <p className="ac-pkgs-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Available Packages
          </p>
          <div className="ac-chips">
            {loc.packages.map(p => (
              <span key={p} className="ac-chip">{p}</span>
            ))}
          </div>
          <p className="ac-includes">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {loc.packageLabel}
          </p>
        </div>

        <a
          href="https://forms.zohopublic.in/mindtreenursingsolutions/form/webforms/formperma/-Xqwd4gPC88eqPnKkpxcKEK3U0hVl7nWH0Mq1lblxkc"
          target="_blank"
          rel="noopener noreferrer"
          className="ac-btn"
        >
          Enquire Now
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* ── gallery ── */}
      <div className="ac-gallery">
        <Carousel images={loc.images} city={loc.city} />
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function AccommodationPage() {
  return (
    <>
                       {/* ── BREADCRUMB ── */}
      <nav className="ft-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">›</span>
        <a href="/services">Services</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Accommodation and Transportation</span>
      </nav>
      {/* ══════════════════════════════════════
          HERO — matches Blog / About / Services
          (fully inline to bypass any global CSS)
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative",
        background: "#0d1f3c",
        padding: "88px 24px 100px",
        overflow: "hidden",
        textAlign: "center",
        fontFamily: "'Outfit', sans-serif",
      }}>


      
        {/* radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `
            radial-gradient(ellipse 60% 90% at 10% 50%, rgba(24,52,100,0.9) 0%, transparent 60%),
            radial-gradient(ellipse 60% 90% at 90% 50%, rgba(16,42,84,0.85) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 50% 110%, rgba(36,65,120,0.5) 0%, transparent 55%)
          `,
        }} />

        {/* content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* pill */}
          <span style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.82)",
            fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "7px 20px", borderRadius: 999,
            marginBottom: 28,
          }}>
            Accommodation &amp; Transportation
          </span>

          {/* headline */}
          <h1 style={{
            fontSize: "clamp(34px, 5vw, 56px)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.15, margin: "0 0 22px",
            letterSpacing: "-0.02em",
          }}>
            Accommodation &amp;{" "}
            <span style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic", fontWeight: 700,
              color: "#7aaee8",
            }}>
              Transportation
            </span>
          </h1>

          {/* ——✦—— */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.3)", marginBottom: 22 }}>
            <span style={{ display: "block", width: 56, height: 1, background: "rgba(255,255,255,0.25)" }} />
            <svg viewBox="0 0 12 12" width="9" height="9" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M6 0l1.5 4.5L12 6l-4.5 1.5L6 12 4.5 7.5 0 6l4.5-1.5z"/>
            </svg>
            <span style={{ display: "block", width: 56, height: 1, background: "rgba(255,255,255,0.25)" }} />
          </div>

          {/* sub */}
          <p style={{
            fontSize: 15.5, color: "rgba(255,255,255,0.62)",
            lineHeight: 1.75, maxWidth: 540,
            fontStyle: "italic", margin: 0,
          }}>
            We provide fully supported accommodation across New Zealand and Kerala — so you can concentrate on your training without any hassle.
          </p>
        </div>

        {/* curved bottom */}
        <div style={{
          position: "absolute", bottom: -1, left: 0, right: 0,
          height: 56, background: "#f4f7fc",
          clipPath: "ellipse(54% 100% at 50% 100%)",
        }} />
      </section>

      {/* ══════════════════════════════════════
          LOCATION ROWS
      ══════════════════════════════════════ */}
      <section className="ac-section">
        <div className="ac-container">
          {locations.map((loc, i) => (
            <div key={loc.id} data-anim="up" data-anim-delay={i * 120}>
              <LocationRow loc={loc} />
              {i < locations.length - 1 && <div className="ac-sep" />}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════ */}
      <section className="ac-cta">
        <div className="ac-container ac-cta-inner">
          <div>
            <h3 className="ac-cta-title" data-anim="up">Need help choosing the right package?</h3>
            <p className="ac-cta-sub" data-anim="up" data-anim-delay="130">Our team is happy to guide you through the options based on your training schedule.</p>
          </div>
          <a
            href="https://forms.zohopublic.in/mindtreenursingsolutions/form/webforms/formperma/-Xqwd4gPC88eqPnKkpxcKEK3U0hVl7nWH0Mq1lblxkc"
            target="_blank"
            rel="noopener noreferrer"
            className="ac-cta-btn"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
