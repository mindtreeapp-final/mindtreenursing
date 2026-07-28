import Link from "next/link";
import "./nursing-registration-in-new-zealand.css";

export const metadata = {
  title: "Nursing Registration in New Zealand | Mindtree Nursing Solutions",
  description:
    "Register as a nurse in New Zealand with Mindtree Nursing Solutions — CGFNS/TruMerit verification, ICHC, NCNZ application, IQN theory & OSCE training, visa processing, and flight booking, all under one roof.",
  keywords: [
    "Nursing Registration New Zealand",
    "NCNZ Registration",
    "New Zealand Nursing Registration",
    "IQN Pathway",
    "CGFNS TruMerit",
    "Internationally Qualified Nurse",
    "Nursing Career New Zealand",
    "Mindtree Nursing",
  ],
};

export default function NZRegistrationPage() {
  return (
    <main className="nzreg-page">

      {/* ── BREADCRUMB ── */}
      <nav className="ft-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">›</span>
        <a href="/services">Services</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Nursing Registration in New Zealand</span>
      </nav>

      {/* ── HERO ── */}
      <section className="nzreg-hero">
        <div className="nzreg-hero-shape-1" />
        <div className="nzreg-hero-shape-2" />
        <div className="nzreg-hero-inner">
          <span className="nzreg-hero-badge">Nursing Registration · New Zealand</span>
          <h1 className="nzreg-hero-title">
            Become a <em className="nzreg-hero-em">Registered Nurse</em> in New Zealand
          </h1>
          <div className="nzreg-hero-divider">
            <span className="nzreg-divider-line" />
            <span className="nzreg-divider-star">✦</span>
            <span className="nzreg-divider-line" />
          </div>
          <p className="nzreg-hero-sub">
            Are you an international nurse looking for nursing registration in New Zealand? Mindtree Nursing Solutions guides you through every stage — from document verification to registration, exams, and visa.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="nzreg-intro-section">
        <div className="nzreg-intro-inner">
          <div className="nzreg-intro-grid">

            <div className="nzreg-intro-left" data-anim="from-left">
              <span className="nzreg-section-label">What We Do</span>
              <h2 className="nzreg-intro-heading">End-to-End Registration Support for International Nurses</h2>
              <div className="nzreg-accent-bar" />
            </div>

            <div className="nzreg-intro-right" data-anim="from-right" data-anim-delay="120">
              <p className="nzreg-intro-para">
                Navigating the New Zealand nursing registration process can be challenging — but Mindtree Nursing Solutions is here to simplify every step. We provide end-to-end support, from CGFNS/TruMerit credential verification and your International Criminal History Check, right through to your NCNZ application, exams, visa, and arriving in New Zealand ready to work.
              </p>
              <p className="nzreg-intro-para">
                Every candidate gets a dedicated pathway adviser, backed by a wide agent network and simulation labs in Christchurch, Auckland, and Kerala. Whether you're just starting out or preparing for your final exam, you're guided, prepared, and never navigating it alone.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY NEW ZEALAND ── */}
      <section className="nzreg-whynz-section" id="why-nz">
        <div className="nzreg-whynz-inner">
          <div className="nzreg-whynz-left" data-anim="from-left">
            <span className="nzreg-section-label">Why New Zealand? Why Now?</span>
            <h2 className="nzreg-head-title">A country of opportunity, stability &amp; respect for nurses</h2>
            <div className="nzreg-quote-card">
              <p>"Can I really make it there?" — Yes, you can. Nurses from Kerala to Manila to Nairobi have done it with the right guidance, and we'll walk with you the whole way.</p>
            </div>
          </div>
          <ul className="nzreg-check-list" data-anim="from-right" data-anim-delay="100">
            <li className="nzreg-check-item"><span className="nzreg-check-tick">✓</span>Earn 2x–3x more than your current salary</li>
            <li className="nzreg-check-item"><span className="nzreg-check-tick">✓</span>Clear pathway to permanent residency for skilled nurses</li>
            <li className="nzreg-check-item"><span className="nzreg-check-tick">✓</span>Spouse work rights and dependent visas for children</li>
            <li className="nzreg-check-item"><span className="nzreg-check-tick">✓</span>Free public education for kids and public healthcare for the family</li>
            <li className="nzreg-check-item"><span className="nzreg-check-tick">✓</span>One of the safest, most welcoming multicultural countries in the world</li>
            <li className="nzreg-check-item"><span className="nzreg-check-tick">✓</span>Genuine work–life balance and professional respect for nurses</li>
          </ul>
        </div>
      </section>

      {/* ── PATHWAY ── */}
      <section className="nzreg-pathway-section" id="pathway">
        <div className="nzreg-pathway-inner">
          <div className="nzreg-head" data-anim="up">
            <span className="nzreg-section-label">Your Journey, Stop by Stop</span>
            <h2 className="nzreg-head-title">The NZ Registration Pathway — Step by Step</h2>
          </div>

          <div className="nzreg-route">
            <div className="nzreg-stop" data-anim="from-left">
              <div className="nzreg-marker">01</div>
              <h3><small>Language</small>English Proficiency (IELTS / OET)</h3>
              <p>Achieve the Nursing Council's required scores — IELTS 7 in each band or OET Grade B. We advise on test choice, timelines, and prep resources.</p>
              <div className="nzreg-addon">🗣️ <strong>Therapeutic Communication Classes</strong> — dedicated sessions for nurses who need extra support with spoken English, building fluency and clinical conversation skills.</div>
            </div>
            <div className="nzreg-stop" data-anim="from-left" data-anim-delay="60">
              <div className="nzreg-marker">02</div>
              <h3><small>Verification</small>CGFNS / TruMerit Verification &amp; Documentation</h3>
              <p>A dedicated pathway adviser and our wide network of agents help you glide through the CGFNS/TruMerit verification process and all documentation — including your <strong>ICHC (International Criminal History Check)</strong> through TruMerit.</p>
            </div>
            <div className="nzreg-stop" data-anim="from-left" data-anim-delay="120">
              <div className="nzreg-marker">03</div>
              <h3><small>Registration</small>NCNZ Application (IQN Route)</h3>
              <p>We prepare and lodge your application with the Nursing Council of New Zealand and track it until you receive your assessment outcome.</p>
            </div>
            <div className="nzreg-stop" data-anim="from-left" data-anim-delay="180">
              <div className="nzreg-marker">04</div>
              <h3><small>Theory Exam</small>IQN Theory Exam — Part A &amp; Part B</h3>
              <p>Prepare with our dedicated IQN mobile app, the latest mock tests, and both live and recorded classes — study anytime, from anywhere.</p>
            </div>
            <div className="nzreg-stop" data-anim="from-left" data-anim-delay="240">
              <div className="nzreg-marker">05</div>
              <h3><small>Practical Exam</small>OSCE Training — Online + Offline</h3>
              <p>Learn skills and station protocols online first, then practice hands-on in our offline simulation labs in <strong>Christchurch, Auckland, and Kerala</strong>. Mock stations, NCNZ-aligned checklists, and personalised feedback throughout.</p>
            </div>
            <div className="nzreg-stop" data-anim="from-left" data-anim-delay="300">
              <div className="nzreg-marker nzreg-marker--icon">✈️</div>
              <h3><small>Travel</small>Flight Ticket Booking</h3>
              <p>Flying to New Zealand for your OSCE or to start your new life? We book your tickets in-house at affordable rates through Mindtree.</p>
            </div>
            <div className="nzreg-stop" data-anim="from-left" data-anim-delay="360">
              <div className="nzreg-marker">07</div>
              <h3><small>Immigration</small>Visa Processing</h3>
              <p>We help you with visa processing through our immigration advisers, with a high success rate — including options for bringing your spouse and children.</p>
            </div>
            <div className="nzreg-stop" data-anim="from-left" data-anim-delay="420">
              <div className="nzreg-marker">08</div>
              <h3><small>Settling In</small>Accommodation &amp; Transportation</h3>
              <p>We arrange comfortable accommodation and reliable local transport for your arrival, so you can settle into New Zealand smoothly and focus on starting your new role.</p>
            </div>
            <div className="nzreg-stop" data-anim="from-left" data-anim-delay="480">
              <div className="nzreg-marker nzreg-marker--icon">🌿</div>
              <h3><small>Ready to Work</small>Annual Practising Certificate (APC)</h3>
              <p>We assist with your APC application so you're legally ready to work in New Zealand.</p>
            </div>
          </div>

          <div className="nzreg-route-cta" data-anim="up">
            <Link href="/contact" className="nzreg-route-btn">Talk to Our Experts About Your Stage</Link>
          </div>
        </div>
      </section>

      {/* ── WHY MINDTREE ── */}
      <section className="nzreg-pillars-section" id="why-mindtree">
        <div className="nzreg-pillars-inner">
          <div className="nzreg-head" data-anim="up">
            <span className="nzreg-section-label">Why Nurses Succeed with Mindtree</span>
            <h2 className="nzreg-head-title">End-to-End Support, Built Around You</h2>
          </div>

          <div className="nzreg-pillars-grid">
            <div className="nzreg-pillar" data-anim="scale-up">
              <span className="nzreg-pillar-glyph">📋</span>
              <h3>Real NCNZ criteria</h3>
              <p>Training built on real OSCE checklists and NCNZ marking criteria — no guesswork.</p>
            </div>
            <div className="nzreg-pillar" data-anim="scale-up" data-anim-delay="60">
              <span className="nzreg-pillar-glyph">🧭</span>
              <h3>Dedicated pathway adviser</h3>
              <p>Every candidate gets a personal adviser, backed by a wide agent network.</p>
            </div>
            <div className="nzreg-pillar" data-anim="scale-up" data-anim-delay="120">
              <span className="nzreg-pillar-glyph">🔍</span>
              <h3>Personalized correction</h3>
              <p>We identify exactly what went wrong in past attempts and fix it.</p>
            </div>
            <div className="nzreg-pillar" data-anim="scale-up" data-anim-delay="180">
              <span className="nzreg-pillar-glyph">🎯</span>
              <h3>Targeted mock tests</h3>
              <p>Practice focused on your weak areas, not generic drills.</p>
            </div>
            <div className="nzreg-pillar" data-anim="scale-up" data-anim-delay="240">
              <span className="nzreg-pillar-glyph">💪</span>
              <h3>Confidence coaching</h3>
              <p>Coaching that builds your confidence, not just clinical skill.</p>
            </div>
            <div className="nzreg-pillar" data-anim="scale-up" data-anim-delay="300">
              <span className="nzreg-pillar-glyph">🤝</span>
              <h3>One roof, whole journey</h3>
              <p>CGFNS/TruMerit → ICHC → NCNZ → exams → tickets → visa, all handled together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="nzreg-svc-section" id="services">
        <div className="nzreg-svc-inner">
          <div className="nzreg-head" data-anim="up">
            <span className="nzreg-section-label">Our Services</span>
            <h2 className="nzreg-head-title">Everything You Need, Under One Roof</h2>
          </div>

          <div className="nzreg-svc-grid">
            <div className="nzreg-svc-card" data-anim="scale-up">
              <span className="nzreg-svc-num">S·01</span>
              <h3>Free Eligibility Assessment</h3>
              <p>Find out where you stand and what your fastest route is.</p>
              <Link href="/contact" className="nzreg-svc-link">Book a Free Call →</Link>
            </div>
            <div className="nzreg-svc-card" data-anim="scale-up" data-anim-delay="60">
              <span className="nzreg-svc-num">S·02</span>
              <h3>CGFNS / TruMerit &amp; ICHC Support</h3>
              <p>Dedicated pathway adviser plus agent network for error-free verification, documentation, and your International Criminal History Check.</p>
              <Link href="/services/cgfns" className="nzreg-svc-link">Learn More →</Link>
            </div>
            <div className="nzreg-svc-card" data-anim="scale-up" data-anim-delay="120">
              <span className="nzreg-svc-num">S·03</span>
              <h3>IQN Theory Exam Coaching</h3>
              <p>Dedicated IQN mobile app, latest mock tests, live and recorded classes for Part A &amp; B.</p>
              <Link href="/courses/best-iqn-coaching" className="nzreg-svc-link">Learn More →</Link>
            </div>
            <div className="nzreg-svc-card" data-anim="scale-up" data-anim-delay="180">
              <span className="nzreg-svc-num">S·04</span>
              <h3>OSCE Training &amp; Mock Tests</h3>
              <p>Online learning plus offline simulation labs in Christchurch, Auckland, and Kerala.</p>
              <Link href="/courses/osce-training-kerala" className="nzreg-svc-link">Learn More →</Link>
            </div>
            <div className="nzreg-svc-card" data-anim="scale-up" data-anim-delay="240">
              <span className="nzreg-svc-num">S·05</span>
              <h3>Re-attempt Support</h3>
              <p>Failed once? Personalized gap analysis and retraining that targets exactly what you missed.</p>
              <Link href="/contact" className="nzreg-svc-link">Learn More →</Link>
            </div>
            <div className="nzreg-svc-card" data-anim="scale-up" data-anim-delay="300">
              <span className="nzreg-svc-num">S·06</span>
              <h3>Therapeutic Communication Classes</h3>
              <p>Spoken-English and clinical communication coaching for nurses who need it.</p>
              <Link href="/contact" className="nzreg-svc-link">Learn More →</Link>
            </div>
            <div className="nzreg-svc-card" data-anim="scale-up" data-anim-delay="360">
              <span className="nzreg-svc-num">S·07</span>
              <h3>Visa Processing</h3>
              <p>Handled through our immigration advisers with a high success rate, including family visas.</p>
              <Link href="/services/visa" className="nzreg-svc-link">Learn More →</Link>
            </div>
            <div className="nzreg-svc-card" data-anim="scale-up" data-anim-delay="420">
              <span className="nzreg-svc-num">S·08</span>
              <h3>Flight Ticket Booking</h3>
              <p>Affordable tickets booked in-house through Mindtree — for your OSCE trip or your final move.</p>
              <Link href="/services/flight-ticketing" className="nzreg-svc-link">Learn More →</Link>
            </div>
            <div className="nzreg-svc-card" data-anim="scale-up" data-anim-delay="480">
              <span className="nzreg-svc-num">S·09</span>
              <h3>Accommodation &amp; Transport for OSCE</h3>
              <p>Affordable accommodation and local transport arranged, so you can focus entirely on the exam.</p>
              <Link href="/services/accommodation-and-transportation" className="nzreg-svc-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COUNTRIES ── */}
      <section className="nzreg-countries-section" id="countries">
        <div className="nzreg-countries-inner">
          <div className="nzreg-head" data-anim="up">
            <span className="nzreg-section-label">Guidance Tailored to Your Background</span>
            <h2 className="nzreg-head-title">Personalized Support for International Nurses</h2>
            <p className="nzreg-head-desc">
              Whether you trained in India, the Philippines, Sri Lanka, the Gulf, or Africa — documentation requirements, license verification, and timelines differ. We give you country-specific checklists and advisers who know your system.
            </p>
          </div>

          <div className="nzreg-country-strip">
            <div className="nzreg-country" data-anim="scale-up">
              <div className="nzreg-country-flag">🇮🇳</div>
              <h3>India</h3>
              <p>State council verification &amp; document checklists</p>
            </div>
            <div className="nzreg-country" data-anim="scale-up" data-anim-delay="60">
              <div className="nzreg-country-flag">🇵🇭</div>
              <h3>Philippines</h3>
              <p>PRC verification &amp; CGFNS guidance</p>
            </div>
            <div className="nzreg-country" data-anim="scale-up" data-anim-delay="120">
              <div className="nzreg-country-flag">🇱🇰</div>
              <h3>Sri Lanka</h3>
              <p>SLNC records &amp; experience proof support</p>
            </div>
            <div className="nzreg-country" data-anim="scale-up" data-anim-delay="180">
              <div className="nzreg-country-flag">🇦🇪</div>
              <h3>Gulf / Middle East</h3>
              <p>DHA / HAAD / MOH license verification</p>
            </div>
            <div className="nzreg-country" data-anim="scale-up" data-anim-delay="240">
              <div className="nzreg-country-flag">🌍</div>
              <h3>Africa</h3>
              <p>Country-specific council verification help</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="nzreg-faq-section" id="faq">
        <div className="nzreg-faq-inner">
          <div className="nzreg-head nzreg-head--center" data-anim="up">
            <span className="nzreg-section-label">Questions Nurses Ask Us</span>
            <h2 className="nzreg-head-title">FAQ</h2>
          </div>

          <div className="nzreg-faq-list">
            <details open>
              <summary>Can I apply without work experience?</summary>
              <p>A minimum of 2 years is ideal, but we assess every profile case by case in your free consultation.</p>
            </details>
            <details>
              <summary>How much does the entire process cost?</summary>
              <p>Costs vary depending on your stage and the services you need, and are payable in stages as you progress — with no hidden charges. Your pathway adviser will give you a clear, itemised breakdown in your free consultation.</p>
            </details>
            <details>
              <summary>How long does it take?</summary>
              <p>Usually 6–12 months depending on your documents, English scores, and exam readiness.</p>
            </details>
            <details>
              <summary>Can I bring my family?</summary>
              <p>Yes. Spouses are generally eligible for open work visas, and children for dependent visas with access to schooling.</p>
            </details>
            <details>
              <summary>Do you help with documents?</summary>
              <p>Yes — we provide end-to-end support from CGFNS/TruMerit verification and ICHC through NCNZ registration, OSCE, and visa processing.</p>
            </details>
            <details>
              <summary>What if I've already failed the OSCE or theory exam?</summary>
              <p>Our re-attempt program starts with a detailed gap analysis of your previous attempt, then targets exactly those areas.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nzreg-cta" id="contact">
        <div className="nzreg-cta-shape" />
        <div className="nzreg-cta-inner">
          <h2 className="nzreg-cta-heading" data-anim="up">Ready to Start Your NZ Nursing Journey?</h2>
          <p className="nzreg-cta-sub" data-anim="up" data-anim-delay="130">
            Talk to our team for a free assessment of your eligibility and the fastest route for your stage — from credentials to your first day on the ward.
          </p>
          <Link href="/contact" className="nzreg-cta-btn" data-anim="up" data-anim-delay="260">Get My Free Assessment</Link>
        </div>
      </section>

    </main>
  );
}
