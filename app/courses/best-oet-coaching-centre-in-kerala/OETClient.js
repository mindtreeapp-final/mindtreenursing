"use client";
import Link from "next/link";
import "./oet.css";

export default function OETClient() {
  return (
    <main className="oet-page">

      {/* ── HERO ── */}
      <section className="oet-hero">
        <div className="oet-hero-shape-1" aria-hidden="true" />
        <div className="oet-hero-shape-2" aria-hidden="true" />
        <div className="oet-hero-inner">
          <span className="oet-hero-badge">Online OET Training for Nurses · Worldwide</span>
          <h1 className="oet-hero-title">
            Online OET coaching for nurses — <em className="oet-hero-em">wherever you are</em> in the world.
          </h1>
          <div className="oet-hero-divider">
            <span className="oet-divider-line" />
            <span className="oet-divider-star">✦</span>
            <span className="oet-divider-line" />
          </div>
          <p className="oet-hero-sub">
            Live online classes with one-on-one speaking and writing correction, mock tests on the current exam pattern, and class slots throughout the day — so nurses in India, the Gulf, the UK or anywhere else can train around any shift, in any time zone.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="oet-intro-section">
        <div className="oet-intro-inner">
          <div className="oet-intro-grid">

            <div className="oet-intro-left" data-anim="from-left">
              <span className="oet-section-label">About the Programme</span>
              <h2 className="oet-intro-heading">Live Online OET Coaching, Built Around Nursing Schedules</h2>
              <div className="oet-accent-bar" />
            </div>

            <div className="oet-intro-right" data-anim="from-right" data-anim-delay="120">
              <p className="oet-intro-para">
                The Occupational English Test is the English exam designed specifically for healthcare professionals, and Mindtree prepares nurses for it entirely online. Everything you need to reach your target grade happens live — expert-led classes across all four modules, one-on-one speaking and writing correction, and mock tests built on the current exam pattern.
              </p>
              <p className="oet-intro-para">
                Because classes run in slots throughout the day, you can train around night duty in India, Gulf timings, or UK shifts — and revisit any session through recordings. Prefer classroom learning? We also run an offline centre in Kerala, with the same trainers, programme, and materials.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── ONLINE TRAINING ── */}
      <section className="oet-online-section" id="online">
        <div className="oet-online-inner">
          <div className="oet-online-left" data-anim="from-left">
            <span className="oet-section-label">Online OET Training</span>
            <h2 className="oet-online-heading">Train Live, from Anywhere</h2>
            <p className="oet-online-lead">
              Everything you need to reach your target grade happens live, online — no matter which country or shift you're working in.
            </p>
            <p className="oet-online-note">
              Prefer classroom learning? We also have an offline centre in Kerala.
            </p>
          </div>

          <ul className="oet-online-list" data-anim="from-right" data-anim-delay="100">
            <li className="oet-online-item">
              <b>Live interactive classes — all four modules</b>
              Listening, Reading, Writing and Speaking taught live by trainers, not pre-recorded videos.
            </li>
            <li className="oet-online-item">
              <b>One-on-one correction over video call</b>
              Personal speaking role-plays and line-by-line writing correction with your trainer.
            </li>
            <li className="oet-online-item">
              <b>Class slots throughout the day</b>
              Fits night duty in India, Gulf timings, UK shifts — pick the slot that suits your time zone.
            </li>
            <li className="oet-online-item">
              <b>Recordings, materials &amp; mock tests</b>
              Recorded sessions to revisit anytime, digital study materials, and timed mock tests with detailed review.
            </li>
          </ul>
        </div>
      </section>

      {/* ── WHY MINDTREE ── */}
      <section className="oet-why-section" id="why">
        <div className="oet-why-inner">
          <div className="oet-section-head" data-anim="up">
            <span className="oet-section-label">Why Nurses Choose Mindtree</span>
            <h2 className="oet-section-title">Built Around Nursing Schedules and Nursing English</h2>
          </div>

          <div className="oet-why-grid">
            <div className="oet-why-card" data-anim="scale-up">
              <span className="oet-why-ico">🩺</span>
              <h3>Nursing-specific English</h3>
              <p>Referral letters, handovers and patient conversations — exactly what OET tests nurses on.</p>
            </div>
            <div className="oet-why-card" data-anim="scale-up" data-anim-delay="60">
              <span className="oet-why-ico">🎯</span>
              <h3>One-on-one correction</h3>
              <p>Every writing task and speaking role-play reviewed individually, with specific feedback — not generic group comments.</p>
            </div>
            <div className="oet-why-card" data-anim="scale-up" data-anim-delay="120">
              <span className="oet-why-ico">📝</span>
              <h3>Mock tests on the real pattern</h3>
              <p>Timed mocks simulating exam conditions, followed by a detailed review so you know exactly where marks were lost.</p>
            </div>
            <div className="oet-why-card" data-anim="scale-up" data-anim-delay="180">
              <span className="oet-why-ico">🌏</span>
              <h3>Works in any time zone</h3>
              <p>Class slots throughout the day plus recordings — your preparation never pauses for a shift change.</p>
            </div>
            <div className="oet-why-card" data-anim="scale-up" data-anim-delay="240">
              <span className="oet-why-ico">💬</span>
              <h3>Grammar, from the ground up</h3>
              <p>Foundation grammar sessions first, then OET-specific structures used in referral and discharge letters.</p>
            </div>
            <div className="oet-why-card" data-anim="scale-up" data-anim-delay="300">
              <span className="oet-why-ico">🧭</span>
              <h3>End-to-end exam support</h3>
              <p>Help choosing paper-based vs computer-based OET, booking your slot, and verifying your results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KNOW THE EXAM ── */}
      <section className="oet-exam-section" id="exam">
        <div className="oet-exam-inner">
          <div className="oet-section-head oet-section-head--left" data-anim="up">
            <span className="oet-section-label">Know the Exam</span>
            <h2 className="oet-section-title">The OET, in Brief</h2>
            <p className="oet-section-desc">
              The Occupational English Test is the English exam designed specifically for healthcare professionals. It is accepted for nursing registration in the UK, Ireland, Australia, New Zealand, the USA and more — and it tests English the way nurses actually use it.
            </p>
          </div>

          <div className="oet-mod-grid">
            <div className="oet-mod-card" data-anim="scale-up">
              <span className="oet-mod-chip">L</span>
              <div>
                <h3>Listening — ~40 minutes</h3>
                <p>Consultations, workplace extracts and healthcare presentations — 42 questions.</p>
              </div>
            </div>
            <div className="oet-mod-card" data-anim="scale-up" data-anim-delay="60">
              <span className="oet-mod-chip">R</span>
              <div>
                <h3>Reading — 60 minutes</h3>
                <p>Fast information-finding plus careful reading of healthcare texts — 42 questions.</p>
              </div>
            </div>
            <div className="oet-mod-card" data-anim="scale-up" data-anim-delay="120">
              <span className="oet-mod-chip">W</span>
              <div>
                <h3>Writing — 45 minutes</h3>
                <p>One referral or discharge letter written from case notes, around 180–200 words.</p>
              </div>
            </div>
            <div className="oet-mod-card" data-anim="scale-up" data-anim-delay="180">
              <span className="oet-mod-chip">S</span>
              <div>
                <h3>Speaking — ~20 minutes</h3>
                <p>Two nurse–patient role-plays based on typical workplace scenarios.</p>
              </div>
            </div>
          </div>

          <div className="oet-score-note" data-anim="up">
            <b>Planning to register in New Zealand?</b> The Nursing Council of New Zealand generally requires OET Grade B (350+) in all four sub-tests. Requirements can change and vary by regulator — our counsellors will help you confirm the current criteria for your destination country.
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="oet-faq-section" id="faq">
        <div className="oet-faq-inner">
          <div className="oet-section-head" data-anim="up">
            <span className="oet-section-label">Common Questions</span>
            <h2 className="oet-section-title">Quick Answers</h2>
          </div>

          <div className="oet-faq-list">
            <details>
              <summary>I'm working abroad — can I join?</summary>
              <p>Yes. Our classes run in slots throughout the day, so nurses in the Gulf, the UK, New Zealand and elsewhere can pick a slot that matches their local time. All you need is a stable internet connection.</p>
            </details>
            <details>
              <summary>I work night shifts — how do I attend?</summary>
              <p>Choose a class slot that fits your duty roster, and use recorded sessions to catch up on anything you miss. Your one-on-one correction sessions are scheduled around your availability.</p>
            </details>
            <details>
              <summary>Are online classes effective for OET Speaking?</summary>
              <p>Yes — Speaking is trained through one-on-one video role-plays that mirror the exam format, with instant feedback on fluency, empathy and professional register. The computer-based OET Speaking sub-test is itself conducted as a live video interaction.</p>
            </details>
            <details>
              <summary>What score do I need?</summary>
              <p>It depends on the regulator. New Zealand's Nursing Council generally requires Grade B (350+) in all four sub-tests; other regulators have their own criteria. We'll help you confirm the exact requirement for your destination before you begin.</p>
            </details>
            <details>
              <summary>Do you help book the exam?</summary>
              <p>Yes — from choosing paper-based or computer-based format to registration, documents and selecting a test date, we guide you through the entire booking process.</p>
            </details>
            <details>
              <summary>Do you have offline classes?</summary>
              <p>Yes — for students in Kerala, classroom training is available at our centre. The core programme, trainers and materials are the same as online.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="oet-cta" id="contact">
        <div className="oet-cta-shape" aria-hidden="true" />
        <div className="oet-cta-inner">
          <h2 className="oet-cta-heading" data-anim="up">Book a Free Demo Class</h2>
          <p className="oet-cta-sub" data-anim="up" data-anim-delay="130">
            Attend a live online session, meet your trainer, and get a free assessment of your current level — from anywhere in the world.
          </p>
          <Link href="/contact" className="oet-cta-btn" data-anim="up" data-anim-delay="260">
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  );
}
