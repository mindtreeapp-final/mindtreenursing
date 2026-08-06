"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./home.css";

const GALLERY_ITEMS = [
  { id: "g1", type: "image", src: "/accommodation-gallery/chc.jpeg", alt: "chc", caption: "Christchurch", category: "Institution" },
  { id: "g2", type: "video", youtubeId: "qxlnO0sc18M", alt: "Introduction to Mindtree", caption: "Introduction to Mindtree", category: "Videos" },
  { id: "g3", type: "image", src: "/mindtree-img/mindtree-img1.webp", alt: "Mindtree Nursing Solutions", caption: "Mindtree Nursing Solutions", category: "Institution" },
  { id: "g4", type: "video", youtubeId: "4T4KSbaXZTo", alt: "Mindttree Nursing Solutions", caption: "Mindttree Nursing Solutions", category: "Videos" },
  { id: "g5", type: "image", src: "/mindtree-img/mindtree-img3.webp", alt: "Our Dedicated Team", caption: "Mindtree Nursing Solutions", category: "Kerala" },
  { id: "g6", type: "video", youtubeId: "26ixXF60H94", alt: "Patient Success Stories", caption: "Patient Success Stories", category: "Videos" },
];

const TESTIMONIALS = [
  { id: "t1", name: "Nithya Varghese", role: "Patient's Daughter · Kochi", initials: "N", rating: 5, quote: "I highly recommend Mindtree nursing solution to all overseas nurses who are interested to work in NZ as registered nurses. The team is supportive throughout the entire process. My dream becomes successful because of mind tree family in a short span of time and once again am thankful for mind tree nursing solutions for the entire support." },
  { id: "t2", name: "Sethu Ajay", role: "Post-Surgery Patient · Thrissur", initials: "S", rating: 5, quote: "I would like to express my sincere gratitude to all MindTree team for making my dream real with your excellent team work. Thank you jijo brother , Rimy Mam,Rency mam for your support throughout my journey.. I strongly recommend MindTree Team to those who are planning to migrate New Zealand.." },
  { id: "t3", name: "Sandra Roy", role: "Referring Physician · Thiruvananthapuram", initials: "S", rating: 5, quote: "By the grace of God🙏 I have passed OSCE examination with the help of mindtree family . Heartfelt thanks to jijo brother,anju mam, Melvin sir, jeljo brother for their incredible support and guidance through out the journey 🥰...I strongly suggest mindtree for all phases of new Zealand processing.... thank you so much mindtree nursing solutions 🤗...." },
  { id: "t4", name: "Babitha Bibin", role: "Caregiver & Son · Ernakulam", initials: "B", rating: 5, quote: "Finally, I received my NZ APC today. I would like to express my sincere gratitude to the entire family of Mindtree for the support and guidance throughout the process. Special thanks to Jijo bro, Rincy Mam and Rimy Mam. I recommend Mindtree agency for everyone who would receive a sincere service." },
  { id: "t5", name: "Alphonsa Johnson", role: "New Mother · Kozhikode", initials: "A", rating: 5, quote: "Hi, by the grace of God I have received my E visa today. I would like to express my sincere gratitude to Jijo brother and entire Mindtree family. All of you were approachable to clear all my doubts without any hesitation. A great thanks to Gokula mam and Pathvista team for making my visa process smooth and easier.I would definitely recommend mindtree nursing solutions to those who wish to migrate to Newzealand." },
  { id: "t6", name: "Rithu Tresaben", role: "Chronic Care Patient · Kannur", initials: "R", rating: 5, quote: "By god's grace I have passed osce examination.Thank you so much to Mindtree family for your valuable support throughout the journey.special thanks to Anju mam,Melvin sir,Jijo Chettan ,jeljo Chettan,neenu,Jishi for your great support in all ups and downs.once again thank you so much .may god bless the whole team😊😊" },
];

function Stars({ count = 5 }) {
  return (
    <div className="hp-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "hp-star hp-star--on" : "hp-star"}>★</span>
      ))}
    </div>
  );
}

function SliderDots({ total, active, onSelect, light }) {
  return (
    <div className="hp-dots">
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} className={`hp-dot${light ? " hp-dot--light" : ""}${i === active ? " hp-dot--active" : ""}`} onClick={() => onSelect(i)} aria-label={`Go to slide ${i + 1}`} />
      ))}
    </div>
  );
}

export default function Home() {
  const GALLERY_VISIBLE = 3;
  const galleryMax = GALLERY_ITEMS.length - GALLERY_VISIBLE;
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [galleryPaused, setGalleryPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const TESTI_VISIBLE = 3;
  const testiMax = TESTIMONIALS.length - TESTI_VISIBLE;
  const [testiIdx, setTestiIdx] = useState(0);
  const [testiPaused, setTestiPaused] = useState(false);
  const galleryVisible = GALLERY_ITEMS.slice(galleryIdx, galleryIdx + GALLERY_VISIBLE);
  const testiVisible   = TESTIMONIALS.slice(testiIdx, testiIdx + TESTI_VISIBLE);

  // Auto-advance the gallery to the right; loop back at the end.
  // Pauses on hover and while a video is playing in the modal.
  useEffect(() => {
    if (galleryPaused || activeVideo) return;
    const id = setInterval(() => {
      setGalleryIdx((i) => (i >= galleryMax ? 0 : i + 1));
    }, 3500);
    return () => clearInterval(id);
  }, [galleryPaused, activeVideo, galleryMax]);

  // Auto-advance the testimonials to the right; loop back at the end.
  useEffect(() => {
    if (testiPaused) return;
    const id = setInterval(() => {
      setTestiIdx((i) => (i >= testiMax ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [testiPaused, testiMax]);

  const testiSwipeX = useRef(null);
  function handleTestiSwipeStart(e) {
    testiSwipeX.current = e.clientX;
  }
  function handleTestiSwipeEnd(e) {
    if (testiSwipeX.current == null) return;
    const delta = e.clientX - testiSwipeX.current;
    testiSwipeX.current = null;
    const SWIPE_THRESHOLD = 40;
    if (delta > SWIPE_THRESHOLD) {
      setTestiIdx((i) => Math.max(0, i - 1));
    } else if (delta < -SWIPE_THRESHOLD) {
      setTestiIdx((i) => Math.min(testiMax, i + 1));
    }
  }

  return (
    <main className="hm">

      {/* ══════ SECTION 1 — HERO ══════ */}
      <section className="hm-hero">
        <div className="hm-blob hm-blob--1" />
        <div className="hm-blob hm-blob--2" />
        <div className="hm-hero__text">
          <span className="hm-eyebrow">Trusted Nursing Consultancy</span>
          <h1 className="hm-hero__h1"><em>Mindtree Nursing</em><br />Solutions</h1>
          <p className="hm-hero__tagline"><strong>No.1</strong> OET · IQN · OSCE Training Center in Kerala &amp; New Zealand</p>
          <p className="hm-hero__sub">Mindtree Nursing is your all-in-one premium consultant for OET, CGFNS, IQN & OSCE, plus visa, ticket, and accommodation in NZ.</p>
          <div className="hm-hero__actions">
            <a href="/contact" className="hm-btn hm-btn--primary">Get Free Consultation</a>
            <a href="/services" className="hm-btn hm-btn--ghost">Explore Services</a>
          </div>
          <div className="hm-trust">
            <div className="hm-trust__item"><strong>5000+</strong><span>Nurses Placed</span></div>
            <div className="hm-trust__sep" />
            <div className="hm-trust__item"><strong>98%</strong><span>Success Rate</span></div>
            <div className="hm-trust__sep" />
            <div className="hm-trust__item"><strong>5+</strong><span>Years Experience</span></div>
          </div>
        </div>
        <div className="hm-hero__img-wrap">
          <div className="hm-hero__img-decoration" aria-hidden="true" />
          <div className="hm-hero__img-frame">
            <img loading="eager" src="/team/JijoCEO.webp" alt="Nursing professional" className="hm-hero__img" />
          </div>
          <div className="hm-badge hm-badge--nz">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
            New Zealand
          </div>
          <div className="hm-badge hm-badge--reg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            NCNZ Registered
          </div>
        </div>
        <div className="hm-scroll-cue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><path d="M19 9l-7 7-7-7" /></svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><path d="M19 9l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* ══════ SECTION 2 — PATHWAYS ══════ */}
      <section className="hm-pathways">
        <div className="hm-section-head">
          <span className="hm-eyebrow hm-eyebrow--gold" data-anim="up" data-anim-delay="0">What We Offer</span>
          <h2 className="hm-section-h2 hm-section-h2--light" data-anim="up" data-anim-delay="110">Expert Solutions For Every Step Of Your Nursing Path</h2>
        </div>
        <div className="hm-pathways__grid">
          {[
            { title: "Nursing Registration in New Zealand", img: "/box-img/Ireland to New Zealand.jpeg", href: "/services/nursing-registration-in-new-zealand" },
            { title: "Pathway for Registered Nurses from the UK and Ireland to New Zealand", img: "/box-img/Pathway for Registered.jpeg", href: "/services/pathway-for-registered-nurses-from-the-uk-and-ireland-to-new-zealand" },
            { title: "Flight Tickets", img: "/box-img/Flight Tickets.jpeg", href: "/services/flight-ticketing" },
          ].map((item, i) => (
            <a key={item.title} href={item.href} className="hm-pathway-card" data-anim="scale-up" data-anim-delay={i * 75}>
              <img src={item.img} alt={item.title} className="hm-pathway-card__img" />
              <div className="hm-pathway-card__overlay" />
              <div className="hm-pathway-card__content">
                <h3 className="hm-pathway-card__title">{item.title}</h3>
                <span className="hm-pathway-card__btn">Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
              </div>
            </a>
          ))}
        </div>
        <div className="hm-section-cta">
          <a href="/services" className="hm-btn hm-btn--outline-light">View All Services</a>
        </div>
      </section>

      {/* ══════ SECTION 3 — APP DOWNLOAD ══════ */}
      <section className="hm-app">
        <div className="hm-app__blob hm-app__blob--1" />
        <div className="hm-app__blob hm-app__blob--2" />
        <div className="hm-app__inner">
          <div className="hm-app__text" data-anim="from-left">
            <span className="hm-eyebrow">Available Now</span>
            <h2 className="hm-app__heading">Explore Our App</h2>
            <p className="hm-app__sub">Access mock tests, live classes, study materials, and track your exam progress — all from your phone. Available on iOS and Android.</p>
            <ul className="hm-app__features">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Live & recorded OET / IQN / OSCE classes</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Full-length mock tests with instant results</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Study materials & progress tracking</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Direct chat support with mentors</li>
            </ul>
            <div className="hm-app__btns">
              <a href="https://apps.apple.com/in/app/mindtree-academy/id6753161418" target="_blank" rel="noopener noreferrer" className="hm-app-store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                <span className="hm-app-store-btn__text">
                  <span className="hm-app-store-btn__label">Download on the</span>
                  <span className="hm-app-store-btn__store">App Store</span>
                </span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.mindtree.learning" target="_blank" rel="noopener noreferrer" className="hm-app-store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M3.18 23.76c.3.17.64.22.97.15l10.85-10.85-2.97-2.97L3.18 23.76zm16.26-13.38L16.9 8.84l-2.47 2.46 2.47 2.47 2.57-1.56c.73-.44.73-1.5-.03-1.83zM1.97.49C1.65.81 1.5 1.29 1.5 1.91v20.18c0 .62.15 1.1.48 1.42l.07.07L13.13 12.5v-.26L2.04.42l-.07.07zm9.56 9.56l2.47-2.47L3.17.28C2.84.11 2.5.07 2.17.23L11.53 10.05z" /></svg>
                <span className="hm-app-store-btn__text">
                  <span className="hm-app-store-btn__label">Get it on</span>
                  <span className="hm-app-store-btn__store">Google Play</span>
                </span>
              </a>
            </div>
          </div>
          <div className="hm-app__visual" data-anim="from-right" data-anim-delay="120">
            <div className="hm-app__glow" />
            <div className="hm-app__phone-video">
              <div className="hm-app__notch" />
          <iframe
  src="https://www.youtube.com/embed/FKgkoA89u2M?autoplay=1&mute=1&loop=1&playlist=FKgkoA89u2M&controls=0"
  title="Mindtree Nursing App"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>
              <div className="hm-app__phone-sheen" />
            </div>
            <div className="hm-app__rating-badge">
              <span className="hm-app__rating-badge__stars">★★★★★</span>
              <span className="hm-app__rating-badge__score">4.9</span>
              <span className="hm-app__rating-badge__label">App Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ SECTION 4 — COURSES ══════ */}
      <section className="hm-courses">
        <div className="hm-section-head">
          <span className="hm-eyebrow hm-eyebrow--gold" data-anim="up" data-anim-delay="0">Learn With Us</span>
          <h2 className="hm-section-h2 hm-section-h2--light" data-anim="up" data-anim-delay="110">Our Courses</h2>
          <p className="hm-section-sub hm-section-sub--light" data-anim="up" data-anim-delay="220">Expert-led programmes designed to get you registered and working in New Zealand as fast as possible.</p>
        </div>
        <div className="hm-pathways__grid">
          {[
            { title: "OET preparation (Online & Offline)", img: "/box-img/Oet_online.jpeg", href: "/courses/best-oet-coaching-centre-in-kerala" },
            { title: "OSCE Training (Online & Offline)", img: "/box-img/Osce_training.jpeg", href: "/courses/best-osce-training" },
            { title: "IQN Training Program", img: "/box-img/Iqn_training.jpeg", href: "/courses/best-iqn-coaching" },
          ].map((item, i) => (
            <a key={item.title} href={item.href} className="hm-pathway-card" data-anim="scale-up" data-anim-delay={i * 75}>
              <img src={item.img} alt={item.title} className="hm-pathway-card__img" />
              <div className="hm-pathway-card__overlay" />
              <div className="hm-pathway-card__content">
                <h3 className="hm-pathway-card__title">{item.title}</h3>
                <span className="hm-pathway-card__btn">Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
              </div>
            </a>
          ))}
        </div>
        <div className="hm-section-cta">
          <a href="/courses" className="hm-btn hm-btn--outline-light">View All Courses</a>
        </div>
      </section>

      {/* ══════ SECTION 5 — GALLERY ══════ */}
      <section className="hm-gallery-preview">
        <div className="hm-gp-blob" />
        <div className="hm-gp-inner">
          <div className="hm-section-head">
            <span className="hm-eyebrow" data-anim="up" data-anim-delay="0">Our Moments</span>
            <h2 className="hm-section-h2" data-anim="up" data-anim-delay="110">Gallery</h2>
            <p className="hm-section-sub" data-anim="up" data-anim-delay="220">A glimpse into our work, our team, and the lives we touch every day.</p>
          </div>
          <div className="hp-slider-wrap" onMouseEnter={() => setGalleryPaused(true)} onMouseLeave={() => setGalleryPaused(false)}>
            <button className={`hp-arrow hp-arrow--left${galleryIdx === 0 ? " hp-arrow--disabled" : ""}`} onClick={() => setGalleryIdx((i) => Math.max(0, i - 1))} disabled={galleryIdx === 0} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="hp-gallery-track">
              {galleryVisible.map((item, index) =>
                item.type === "video" ? (
                  <div key={item.id} className="hp-gallery-card">
                    <div className="hp-gallery-card__media hp-gallery-card__media--video" onClick={() => setActiveVideo(item.youtubeId)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setActiveVideo(item.youtubeId)} aria-label={`Play ${item.caption}`}>
                      <iframe className="hp-gallery-card__video" src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}`} title={item.caption} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                      <div className="hp-gallery-card__overlay"><div className="hp-play-btn"><span className="hp-play-icon">▶</span></div></div>
                      <span className="hp-gallery-card__badge">▶ Video</span>
                    </div>
                    <div className="hp-gallery-card__info">
                      <span className="hp-gallery-card__cat">{item.category}</span>
                      <p className="hp-gallery-card__cap">{item.caption}</p>
                    </div>
                  </div>
                ) : (
                  <div key={item.id} className="hp-gallery-card">
                    <div className="hp-gallery-card__media">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="hp-gallery-card__img"
                        sizes="(max-width:768px) 90vw, 33vw"
                        loading={index === 0 && galleryIdx === 0 ? "eager" : "lazy"}
                        priority={index === 0 && galleryIdx === 0}
                      />
                      <div className="hp-gallery-card__overlay" />
                    </div>
                    <div className="hp-gallery-card__info">
                      <span className="hp-gallery-card__cat">{item.category}</span>
                      <p className="hp-gallery-card__cap">{item.caption}</p>
                    </div>
                  </div>
                )
              )}
            </div>
            <button className={`hp-arrow hp-arrow--right${galleryIdx >= galleryMax ? " hp-arrow--disabled" : ""}`} onClick={() => setGalleryIdx((i) => Math.min(galleryMax, i + 1))} disabled={galleryIdx >= galleryMax} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
          <SliderDots total={galleryMax + 1} active={galleryIdx} onSelect={setGalleryIdx} />
          <div className="hm-section-cta">
            <a href="/gallery" className="hm-btn hm-btn--primary">View Full Gallery</a>
          </div>
        </div>
        {activeVideo && (
          <div className="hp-video-modal" onClick={() => setActiveVideo(null)} role="dialog" aria-modal="true" aria-label="Video player">
            <div className="hp-video-modal__content" onClick={(e) => e.stopPropagation()}>
              <button className="hp-video-modal__close" onClick={() => setActiveVideo(null)} aria-label="Close video">✕</button>
              <div className="hp-video-modal__embed">
                <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ══════ SECTION 6 — TESTIMONIALS ══════ */}
      <section className="hm-testi-preview">
        <div className="hm-tp-blob" />
        <div className="hm-tp-inner">
          <div className="hm-section-head">
            <span className="hm-eyebrow hm-eyebrow--light" data-anim="up" data-anim-delay="0">Voices of Trust</span>
            <h2 className="hm-section-h2 hm-section-h2--light" data-anim="up" data-anim-delay="110">What Our Clients Say</h2>
            <p className="hm-section-sub hm-section-sub--light" data-anim="up" data-anim-delay="220">Real words from the families and patients who trusted us with what matters most.</p>
          </div>
          <div className="hm-testi-summary">
            <span className="hm-testi-summary__stars">★★★★★</span>
            <span>Rated <strong>4.9 / 5</strong> by 500+ nurses placed</span>
          </div>
          <div className="hp-slider-wrap" onMouseEnter={() => setTestiPaused(true)} onMouseLeave={() => setTestiPaused(false)}>
            <button className={`hp-arrow hp-arrow--light hp-arrow--left${testiIdx === 0 ? " hp-arrow--disabled" : ""}`} onClick={() => setTestiIdx((i) => Math.max(0, i - 1))} disabled={testiIdx === 0} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div
              className="hp-testi-track"
              onPointerDown={handleTestiSwipeStart}
              onPointerUp={handleTestiSwipeEnd}
            >
              {testiVisible.map((t) => (
                <article key={t.id} className="hp-testi-card">
                  <div className="hp-testi-card__quote-mark">"</div>
                  <Stars count={t.rating} />
                  <blockquote className="hp-testi-card__quote">{t.quote}</blockquote>
                  <footer className="hp-testi-card__author">
                    <div className="hp-testi-card__avatar">{t.initials}</div>
                    <div className="hp-testi-card__author-info">
                      <span className="hp-testi-card__name">{t.name}</span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
            <button className={`hp-arrow hp-arrow--light hp-arrow--right${testiIdx >= testiMax ? " hp-arrow--disabled" : ""}`} onClick={() => setTestiIdx((i) => Math.min(testiMax, i + 1))} disabled={testiIdx >= testiMax} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
          <SliderDots total={testiMax + 1} active={testiIdx} onSelect={setTestiIdx} light />
          <div className="hm-section-cta">
            <a href="/testimonials" className="hm-btn hm-btn--outline-light">View All Testimonials</a>
          </div>
        </div>
      </section>

      {/* ══════ SECTION 7 — BOTTOM CTA ══════ */}
      <section className="hm-bottom-cta">
        <div className="hm-bottom-cta__inner">
          <div className="hm-bottom-cta__text" data-anim="from-left">
            <span className="hm-eyebrow">Get In Touch</span>
            <h2 className="hm-bottom-cta__title">Ready to Start Your Journey?</h2>
            <p className="hm-bottom-cta__sub">Our team is here to answer your questions and guide you through every step of the process.</p>
          </div>
          <div className="hm-bottom-cta__actions" data-anim="from-right" data-anim-delay="120">
            <a href="tel:919778286707" className="hm-cta-contact-btn hm-cta-contact-btn--call">
              <span className="hm-cta-contact-btn__icon">📞</span>
              <span className="hm-cta-contact-btn__text">
                <span className="hm-cta-contact-btn__label">Call Us Now</span>
                <span className="hm-cta-contact-btn__value">9778286707</span>
              </span>
            </a>
            <a href="https://wa.me/919778286707" className="hm-cta-contact-btn hm-cta-contact-btn--wa" target="_blank" rel="noreferrer">
              <span className="hm-cta-contact-btn__icon">💬</span>
              <span className="hm-cta-contact-btn__text">
                <span className="hm-cta-contact-btn__label">WhatsApp Us</span>
                <span className="hm-cta-contact-btn__value">Quick Response</span>
              </span>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://forms.zohopublic.in/mindtreenursingsolutions/form/ClientDetails1/formperma/76KIBTp9LCYH_lA6B0jGSwAH8FJ4nmjU8ovh7b6l-tQ" className="hm-cta-contact-btn hm-cta-contact-btn--enquiry">
              <span className="hm-cta-contact-btn__icon">✉️</span>
              <span className="hm-cta-contact-btn__text">
                <span className="hm-cta-contact-btn__label">Send Enquiry</span>
                <span className="hm-cta-contact-btn__value">Fill our form</span>
              </span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}