import Link from "next/link";
import "./osce-kerala.css";

export const metadata = {
  title: "OSCE Training in Kerala | Mindtree Nursing Solutions",
  description:
    "Expert-led OSCE training for New Zealand nursing registration. Train in Christchurch — the city where the NZ OSCE is held. 1-week & 2-week residential programs, weekly live classes, and therapeutic communication support.",
  keywords: [
    "OSCE Training Kerala",
    "OSCE Coaching Kerala",
    "OSCE Training Christchurch",
    "OSCE Course",
    "OSCE Preparation",
    "Nursing OSCE",
    "OSCE Mock Test",
    "International Nursing Registration",
    "Mindtree Nursing",
  ],
};

export default function OSCEPage() {
  return (
    <main className="osce-page">

      {/* ── HERO ── */}
      <section className="osce-hero">
        <div className="osce-hero-shape-1" />
        <div className="osce-hero-shape-2" />
        <div className="osce-hero-inner">
          <span className="osce-hero-badge">NZ OSCE Training · Christchurch · Auckland · Kerala</span>
          <h1 className="osce-hero-title">
            Expert-led OSCE training in the city where <em className="osce-hero-em">the exam is held.</em>
          </h1>
          <div className="osce-hero-divider">
            <span className="osce-divider-line" />
            <span className="osce-divider-star">✦</span>
            <span className="osce-divider-line" />
          </div>
          <p className="osce-hero-sub">
            The New Zealand OSCE takes place in Christchurch. Mindtree's Christchurch campus prepares internationally qualified nurses with hands-on lab practice, individual correction, and full pastoral support — accommodation, meals, and exam-day transport included.
          </p>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="osce-intro-section">
        <div className="osce-intro-inner">
          <div className="osce-intro-grid">

            <div className="osce-intro-left" data-anim="from-left">
              <span className="osce-section-label">What We Do</span>
              <h2 className="osce-intro-heading">Expert OSCE Training for Your NZ Nursing Registration</h2>
              <div className="osce-accent-bar" />
            </div>

            <div className="osce-intro-right" data-anim="from-right" data-anim-delay="120">
              <p className="osce-intro-para">
                Mindtree Nursing Solutions guides internationally qualified nurses (IQNs) through every stage of the New Zealand OSCE — the final clinical assessment for registration with the Nursing Council of New Zealand. From your first document to exam day, we prepare you with hands-on lab practice, individual correction, and full pastoral support.
              </p>
              <p className="osce-intro-para">
                Because the OSCE is held in Christchurch, our flagship residential campus is right there — so you train, complete your OPC, and sit the exam in the same city. Begin closer to home at our Kerala or Auckland centres, then join Christchurch for your final residential weeks. One pathway, one trusted partner, from preparation to a first-attempt pass.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT THE OSCE ── */}
      <section className="osce-about-section" id="about-osce">
        <div className="osce-about-inner">

          <div className="osce-about-header" data-anim="up">
            <span className="osce-section-label">Understand the Exam First</span>
            <h2 className="osce-about-heading">What Is the New Zealand OSCE?</h2>
          </div>

          <div className="osce-about-grid">
            <div className="osce-about-body" data-anim="from-left">
              <p>
                The <b>OSCE — Objective Structured Clinical Examination</b> — is the final clinical assessment for internationally qualified nurses (IQNs) seeking registration with the Nursing Council of New Zealand. It verifies that you meet New Zealand's standards of nursing practice, clinical safety, and communication.
              </p>
              <p>
                The exam evaluates your clinical knowledge, hands-on skills, and communication abilities across <b>10 clinical scenario stations, each lasting 12 minutes</b>. Before the exam, candidates complete an <b>Orientation &amp; Preparation Course (OPC)</b> at the approved centre.
              </p>
              <div className="osce-venue-chip">
                <span className="osce-venue-pin">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div>
                  <b>The exam is conducted in person in Christchurch</b>
                  <span>Which is exactly why our flagship residential campus is there — train, practise, and sit your exam in the same city.</span>
                </div>
              </div>
            </div>

            <div className="osce-timing-panel" data-anim="from-right" data-anim-delay="120">
              <h4>Anatomy of One OSCE Station</h4>
              <div className="osce-timing" role="img" aria-label="Station timing: 2 minutes to read instructions, 8 minutes for the scenario, 2 minutes transition">
                <div className="osce-t1"><b>2</b><span>min · read</span></div>
                <div className="osce-t2"><b>8</b><span>min · scenario</span></div>
                <div className="osce-t3"><b>2</b><span>min · move</span></div>
              </div>
              <p className="osce-timing-caption">// repeated ×10 on exam day — our lab drills this exact rhythm</p>
            </div>
          </div>

          <div className="osce-stations-header" data-anim="up">
            <h3>What the Stations Assess</h3>
          </div>

          <div className="osce-stations-grid">
            <div className="osce-station-card" data-anim="scale-up">
              <div className="osce-station-num">1</div>
              <p>Mental health assessment</p>
            </div>
            <div className="osce-station-card" data-anim="scale-up" data-anim-delay="40">
              <div className="osce-station-num">2</div>
              <p>Physiological assessment</p>
            </div>
            <div className="osce-station-card" data-anim="scale-up" data-anim-delay="80">
              <div className="osce-station-num">3</div>
              <p>Emergency management</p>
            </div>
            <div className="osce-station-card" data-anim="scale-up" data-anim-delay="120">
              <div className="osce-station-num">4</div>
              <p>Managing the deteriorating patient</p>
            </div>
            <div className="osce-station-card" data-anim="scale-up" data-anim-delay="160">
              <div className="osce-station-num">5</div>
              <p>Professional responsibility</p>
            </div>
            <div className="osce-station-card" data-anim="scale-up" data-anim-delay="200">
              <div className="osce-station-num">6</div>
              <p>Clinical skills</p>
            </div>
            <div className="osce-station-card" data-anim="scale-up" data-anim-delay="240">
              <div className="osce-station-num">7</div>
              <p>Communication &amp; teamwork</p>
            </div>
            <div className="osce-station-card" data-anim="scale-up" data-anim-delay="280">
              <div className="osce-station-num">8</div>
              <p>Planning nursing care</p>
            </div>
          </div>

          <div className="osce-handbook" data-anim="up">
            <p><b>Want the official exam guidelines?</b> For detailed format, eligibility, and preparation rules, refer to the Nursing Council of New Zealand's OSCE handbook.</p>
            <a className="osce-handbook-btn" href="https://www.nursingcouncil.org.nz/" target="_blank" rel="noopener noreferrer">Visit NZ Nursing Council →</a>
          </div>
        </div>
      </section>

      {/* ── OSCE TRIAL BANNER (kept from original page) ── */}
      <section className="osce-trial">
        <div className="osce-trial__inner">

          {/* Left — content */}
          <div className="osce-trial__content" data-anim="from-left">
            <span className="osce-trial__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              OSCE Success Starts Here
            </span>

            <h2 className="osce-trial__title">
              Prepare for Your OSCE<br />
              <em className="osce-trial__em">with Confidence</em>
            </h2>

            <div className="osce-trial__accent-bar" />

            <p className="osce-trial__text">
              Join our structured OSCE training program designed to help internationally
              qualified nurses master clinical scenarios, communication skills, and
              examination techniques required for success.
            </p>

            <ul className="osce-trial__features">
              <li>
                <span className="osce-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                500+ Nurses Trained
              </li>
              <li>
                <span className="osce-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                95% Exam Success Rate
              </li>
              <li>
                <span className="osce-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                1:1 Personalised Mentor Support
              </li>
              <li>
                <span className="osce-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Online &amp; Offline Training Available
              </li>
            </ul>

            <div className="osce-trial__actions">
              <a href="https://apps.mindtreenursing.com/course/68a58b9715b72700125ec28f" target="_blank" rel="noopener noreferrer" className="osce-trial__btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 8 16 12 12 16"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
                <span>Explore OSCE Training</span>
              </a>
              <div className="osce-trial__meta">
                <span>Expert-led sessions</span>
                <span className="osce-trial__dot" />
                <span>Hands-on practice</span>
                <span className="osce-trial__dot" />
                <span>Exam booking support</span>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="osce-trial__visual" data-anim="from-right" data-anim-delay="100">
            <div className="osce-trial__img-glow" />
            <div className="osce-trial__img-wrap">
              <img
                src="/demo-osce.jpeg"
                alt="OSCE Training Preview"
                className="osce-trial__img"
              />
              <div className="osce-trial__pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Clinical Scenarios
              </div>
              <div className="osce-trial__pill osce-trial__pill--2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                95% Pass Rate
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FORMAT UPDATE STRIP ── */}
      <section className="osce-format-strip">
        <div className="osce-format-inner">
          <div>
            <h3>⚠️ The OSCE format changes. <span>Your training shouldn't lag behind it.</span></h3>
            <p>Station scenarios and assessment criteria are updated by the Nursing Council over time. Preparing with outdated materials is one of the most common reasons capable nurses fail. Mindtree's curriculum and mock stations are kept aligned with the current exam format by NZ-based trainers.</p>
          </div>
          <Link href="/contact" className="osce-format-btn">Check Your Preparation</Link>
        </div>
      </section>

      {/* ── WHY CHRISTCHURCH ── */}
      <section className="osce-why-section" id="why-christchurch">
        <div className="osce-why-inner">
          <div className="osce-includes-header" data-anim="up">
            <span className="osce-section-label">Why Train in Christchurch</span>
            <h2 className="osce-includes-heading">Every advantage, in one city.</h2>
            <p className="osce-includes-sub">
              Training in Christchurch isn't just convenient — it removes every distraction between you and a first-attempt pass.
            </p>
          </div>

          <div className="osce-why-grid">
            <div className="osce-why-card" data-anim="scale-up">
              <span className="osce-why-ico">🎯</span>
              <h4>Proximity to the exam venue</h4>
              <p>Train and sit your OSCE in the same city. No last-minute flights, no unfamiliar surroundings — you focus entirely on preparation.</p>
            </div>
            <div className="osce-why-card" data-anim="scale-up" data-anim-delay="60">
              <span className="osce-why-ico">🏠</span>
              <h4>Accommodation arranged</h4>
              <p>Premium, centrally heated accommodation with meals included for your entire training and exam period. Arrive and settle from night one.</p>
            </div>
            <div className="osce-why-card" data-anim="scale-up" data-anim-delay="120">
              <span className="osce-why-ico">🔬</span>
              <h4>Stay &amp; study on one campus</h4>
              <p>Your rooms and our 24×7 OSCE training lab share the same campus — practise a weak station at 6 am or 11 pm, whenever it clicks.</p>
            </div>
            <div className="osce-why-card" data-anim="scale-up" data-anim-delay="180">
              <span className="osce-why-ico">✈️</span>
              <h4>Airport pickup &amp; transfers</h4>
              <p>We collect you from the airport and run university transfers for your OPC and examination days — 8 trips, all arranged.</p>
            </div>
            <div className="osce-why-card" data-anim="scale-up" data-anim-delay="240">
              <span className="osce-why-ico">👥</span>
              <h4>Individual attention</h4>
              <p>Sessions are capped at 20 nurses, and every candidate receives individual performance assessment and correction before exam day.</p>
            </div>
            <div className="osce-why-card" data-anim="scale-up" data-anim-delay="300">
              <span className="osce-why-ico">💡</span>
              <h4>Time &amp; cost efficiency</h4>
              <p>Training, accommodation, meals, transport, and the exam — combined in one location, under one plan, with one trusted partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM ── */}
      <section className="osce-tracks-section" id="program">
        <div className="osce-tracks-inner">
          <div className="osce-includes-header" data-anim="up">
            <span className="osce-section-label">Residential Training · Christchurch</span>
            <h2 className="osce-includes-heading">Two formats. Same individual attention.</h2>
            <p className="osce-includes-sub">
              Both programs include hands-on lab practice, personal correction, accommodation, and unlimited online classes from the day you register. Your pathway advisor will help you choose the right fit in your free consultation.
            </p>
          </div>

          <div className="osce-tracks-grid">
            <div className="osce-track osce-track--featured" data-anim="from-left">
              <span className="osce-track-flag">Most Popular</span>
              <h3>2-Week Complete</h3>
              <div className="osce-track-dur">14 days · includes OPC &amp; exam period</div>
              <p className="osce-track-note">The full journey — arrive, settle, train daily in the lab, then sit your OPC and examination, all from one campus.</p>
              <ul>
                <li>2 weeks premium accommodation with meals &amp; centralised heating</li>
                <li>24×7 access to the OSCE training lab</li>
                <li>Individual performance assessment and correction</li>
                <li>Airport pick-up &amp; drop-off</li>
                <li>University transfers for OPC &amp; examination — 8 trips</li>
                <li>Unlimited online OSCE classes upon registration</li>
              </ul>
              <div className="osce-fee-line">Program fee <b>$1,499</b> + GST · NZD — all of the above included</div>
              <Link href="/contact" className="osce-track-btn osce-track-btn--primary">Discuss This Program</Link>
            </div>

            <div className="osce-track" data-anim="from-right" data-anim-delay="100">
              <h3>3-Week Extended</h3>
              <div className="osce-track-dur">21 days · extra week of lab practice</div>
              <p className="osce-track-note">Everything in the 2-week program, plus a full extra week on campus — more lab hours, more mock stations, more individual correction before your exam.</p>
              <ul>
                <li>3 weeks premium accommodation with meals &amp; centralised heating</li>
                <li>24×7 access to the OSCE training lab</li>
                <li>Extra week of station practice and personal correction</li>
                <li>Airport pick-up &amp; drop-off</li>
                <li>University transfers for OPC &amp; examination — 8 trips</li>
                <li>Unlimited online OSCE classes upon registration</li>
              </ul>
              <div className="osce-fee-line">Program fee <b>$1,999</b> + GST · NZD — all of the above included</div>
              <Link href="/contact" className="osce-track-btn">Ask About This Track</Link>
            </div>
          </div>

          <div className="osce-track-footnote" data-anim="up">
            <p><b>Prefer to train closer to home first?</b> A 1-week offline OSCE program is available exclusively at our Kerala campus in Kottarakkara — ideal before you fly to New Zealand.</p>
            <Link href="/contact" className="osce-track-footnote-btn">Ask About Kerala 1-Week</Link>
          </div>
        </div>
      </section>

      {/* ── THERAPEUTIC COMMUNICATION ── */}
      <section className="osce-comm-section" id="communication">
        <div className="osce-comm-inner">
          <div className="osce-comm-card">
            <div className="osce-comm-left" data-anim="from-left">
              <span className="osce-section-label">Add-On Course</span>
              <h2 className="osce-comm-heading">Therapeutic Communication for Nurses</h2>
              <p className="osce-comm-text">
                Communication runs through every OSCE station — from explaining a procedure to reassuring a distressed patient and handing over to the team. If English isn't your first language, or ward-style conversation doesn't come naturally yet, this course closes that gap alongside your OSCE program.
              </p>
              <div className="osce-comm-note">✓&nbsp; Available with both the 2-week and 3-week Christchurch programs, the Kerala 1-week program, and through online classes in the Mindtree Academy app.</div>
              <Link href="/contact" className="osce-track-btn osce-track-btn--primary osce-comm-cta">Add Communication Support</Link>
            </div>
            <ul className="osce-comm-list" data-anim="from-right" data-anim-delay="100">
              <li>Patient-centred conversation — empathy, active listening, reassurance</li>
              <li>Explaining procedures and gaining informed consent clearly</li>
              <li>Communicating with distressed, anxious, or deteriorating patients</li>
              <li>Team handovers and speaking up — ISBAR-style structure</li>
              <li>NZ ward vocabulary, phrasing, and cultural expectations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── ONLINE ACADEMY ── */}
      <section className="osce-online-section" id="online">
        <div className="osce-online-inner">
          <div className="osce-online-left" data-anim="from-left">
            <span className="osce-section-label">Mindtree Academy App</span>
            <h2 className="osce-online-heading">Weekly live classes. Every recording, on demand.</h2>
            <p className="osce-online-text">
              Your preparation starts long before you fly. Join weekly live OSCE classes with our trainers, and revisit every session as a recording inside the Mindtree Academy app — unlimited access from the day you register.
            </p>
            <ul className="osce-online-list">
              <li>Weekly live classes with expert NZ-focused faculty</li>
              <li>Full recording library — rewatch any class, any time</li>
              <li>Track your application progress in-app</li>
              <li>Manage documents and get instant updates</li>
              <li>Direct line to your pathway advisor and support team</li>
            </ul>
            <div className="osce-store-btns">
              <a className="osce-store-btn" href="https://play.google.com/store/apps/details?id=com.mindtree.learning" target="_blank" rel="noopener noreferrer">▶ Google Play</a>
              <a className="osce-store-btn" href="https://apps.apple.com/us/app/mindtree-academy/id6753161418" target="_blank" rel="noopener noreferrer">App Store</a>
              <a className="osce-store-btn osce-store-btn--ghost" href="https://apps.mindtreenursing.com/" target="_blank" rel="noopener noreferrer">Student Portal →</a>
            </div>
          </div>

          <div className="osce-phone-card" data-anim="from-right" data-anim-delay="120">
            <span className="osce-phone-tag">Inside the App</span>
            <h3>This Week at Mindtree Academy</h3>
            <div className="osce-class-row">
              <div><b>Deteriorating Patient — Live</b><br /><span>NZ OSCE · Station practice</span></div>
              <span className="osce-live-dot">LIVE</span>
            </div>
            <div className="osce-class-row">
              <div><b>Therapeutic Communication</b><br /><span>Recording · 52 min</span></div>
              <span className="osce-rec-tag">▸ WATCH</span>
            </div>
            <div className="osce-class-row">
              <div><b>Medication Safety Walkthrough</b><br /><span>Recording · 58 min</span></div>
              <span className="osce-rec-tag">▸ WATCH</span>
            </div>
            <div className="osce-class-row">
              <div><b>IQN Premium Package</b><br /><span>Course · self-paced</span></div>
              <span className="osce-rec-tag">OPEN</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMPUSES ── */}
      <section className="osce-campuses-section" id="campuses">
        <div className="osce-campuses-inner">
          <div className="osce-includes-header" data-anim="up">
            <span className="osce-section-label">Three Campuses, One Pathway</span>
            <h2 className="osce-includes-heading">Start anywhere. Finish in Christchurch.</h2>
            <p className="osce-includes-sub">
              Begin your preparation at any Mindtree centre — Kerala, Auckland, or Christchurch — and complete your final residential training right where the New Zealand OSCE is held.
            </p>
          </div>

          <div className="osce-campus-primary" data-anim="up">
            <div>
              <span className="osce-campus-tag">Flagship · Exam City</span>
              <h3>Christchurch, New Zealand</h3>
              <p>Our flagship residential campus in Addington — accommodation, training lab, and classrooms in one place, in the same city as your OPC and examination. This is where the final weeks of your journey happen.</p>
              <div className="osce-campus-addr">
                <b>63 Wrights Road, Addington, Christchurch</b><br />
                +64 21 217 8770 · info@mindtreenursing.com
              </div>
            </div>
            <ul className="osce-campus-points">
              <li>Residential 2-week &amp; 3-week programs</li>
              <li>24×7 OSCE training lab on campus</li>
              <li>Premium heated accommodation with meals</li>
              <li>8 included transfers for OPC &amp; exam days</li>
              <li>Capped at 20 nurses per session</li>
            </ul>
          </div>

          <div className="osce-campus-row">
            <div className="osce-campus-card" data-anim="from-left">
              <span className="osce-campus-tag light">North Island Centre</span>
              <h3>Auckland, New Zealand</h3>
              <p>OSCE coaching and support for nurses already based in or around Auckland — with the option to join the Christchurch residential program for your final exam preparation.</p>
              <div className="osce-campus-card-addr">
                <b>81A Tiverton Road, Blockhouse Bay, Auckland 0600</b><br />
                +64 22 123 0023
              </div>
            </div>
            <div className="osce-campus-card" data-anim="from-right" data-anim-delay="100">
              <span className="osce-campus-tag light">India Centre</span>
              <h3>Kerala, India</h3>
              <p>Begin at home — OET, IELTS/PTE, IQN preparation and OSCE foundations at our Kottarakkara centre, including our exclusive <b>1-week offline OSCE program</b>, plus full registration and migration support.</p>
              <div className="osce-campus-card-addr">
                <b>Olivet Building, M.C. Road, Panavely, Kottarakkara, Kollam 691532</b><br />
                +91 97782 86707
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section className="osce-journey-section" id="journey">
        <div className="osce-journey-inner">
          <div className="osce-includes-header" data-anim="up">
            <span className="osce-section-label">Your Registration Journey</span>
            <h2 className="osce-includes-heading">One pathway. One trusted partner.</h2>
            <p className="osce-includes-sub">
              From your first document to your first shift in New Zealand — every stage managed by a dedicated pathway advisor.
            </p>
          </div>

          <div className="osce-steps-grid">
            <div className="osce-step" data-anim="scale-up"><b>Registration with Mindtree</b></div>
            <div className="osce-step" data-anim="scale-up" data-anim-delay="40"><b>CGFNS / TruMerit process</b></div>
            <div className="osce-step" data-anim="scale-up" data-anim-delay="80"><b>IQN registration</b></div>
            <div className="osce-step" data-anim="scale-up" data-anim-delay="120"><b>OSCE training — online + Christchurch</b></div>
            <div className="osce-step" data-anim="scale-up" data-anim-delay="160"><b>Registration approval</b></div>
            <div className="osce-step" data-anim="scale-up" data-anim-delay="200"><b>Career success in NZ &amp; Australia</b></div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="osce-testimonials-section">
        <div className="osce-testimonials-inner">
          <div className="osce-includes-header" data-anim="up">
            <span className="osce-section-label">Success Stories</span>
            <h2 className="osce-includes-heading">First attempts. Real nurses.</h2>
          </div>

          <div className="osce-quotes-grid">
            <div className="osce-quote-card" data-anim="scale-up">
              <div className="osce-quote-stars">★★★★★</div>
              <p>"I have passed the OSCE exam on my first attempt. I would like to sincerely thank the entire Mindtree team for your support and guidance throughout the training sessions."</p>
              <b>Ephron</b>
              <span>Passed · First Attempt</span>
            </div>
            <div className="osce-quote-card" data-anim="scale-up" data-anim-delay="80">
              <div className="osce-quote-stars">★★★★★</div>
              <p>"With the excellent support and guidance from Mindtree Training, I successfully cleared my OSCE. I am truly grateful to the entire team for their dedication, encouragement, and valuable training."</p>
              <b>Kiranjot Kaur</b>
              <span>Passed · OSCE</span>
            </div>
            <div className="osce-quote-card" data-anim="scale-up" data-anim-delay="160">
              <div className="osce-quote-stars">★★★★★</div>
              <p>"I passed my OSCE on my first attempt! Sincere gratitude to the trainers for constant support, guidance, and encouragement throughout this journey."</p>
              <b>Preethy Paul</b>
              <span>Passed · First Attempt</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="osce-faq-section" id="faq">
        <div className="osce-faq-inner">
          <div className="osce-includes-header" data-anim="up">
            <span className="osce-section-label">FAQs</span>
            <h2 className="osce-includes-heading">Questions nurses ask us most.</h2>
          </div>

          <div className="osce-faq-list">
            <details>
              <summary>Who can apply for the New Zealand nursing pathway?</summary>
              <p>Registered nurses who meet the eligibility requirements for international nursing registration with the Nursing Council of New Zealand. Book a free consultation and a pathway advisor will assess your eligibility.</p>
            </details>
            <details>
              <summary>Where does the OSCE exam actually take place?</summary>
              <p>The New Zealand OSCE is conducted in person in Christchurch. That's why our flagship residential campus is located there — so you train, complete your OPC, and sit the exam in the same city.</p>
            </details>
            <details>
              <summary>Where are Mindtree's training centres located?</summary>
              <p>We're located in Kerala (Kottarakkara), Auckland, and Christchurch, with training centres in each location. You can complete your preparation at whichever centre is most convenient, and join Christchurch for your final residential training.</p>
            </details>
            <details>
              <summary>Should I choose the 2-week or 3-week Christchurch program?</summary>
              <p>The 2-week program ($1,499 + GST) covers your full training, OPC, and exam period in one stay and suits most nurses. The 3-week program ($1,999 + GST) adds a full extra week of lab practice and individual correction — a good fit if you want more time with weak stations. A 1-week offline program is also available exclusively at our Kerala campus, ideal before you travel. Your pathway advisor will recommend the right fit.</p>
            </details>
            <details>
              <summary>What if I struggle with English or patient communication?</summary>
              <p>Our Therapeutic Communication course runs alongside the OSCE program for nurses who need extra communication support — covering patient-centred conversation, handovers, consent, and NZ ward phrasing. It's available with both offline programs and through the app.</p>
            </details>
            <details>
              <summary>Is there a mobile app?</summary>
              <p>Yes. The Mindtree Academy app gives you weekly live classes, the full recording library, application tracking, document management, and a direct line to your support team. It's available on Google Play and the App Store.</p>
            </details>
            <details>
              <summary>How do I get started?</summary>
              <p>Book a free consultation using the form above, call our Christchurch team on +64 21 217 8770, or email info@mindtreenursing.com. A pathway advisor will map your complete journey — registration, training, and migration — in one conversation.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="osce-cta" id="contact">
        <div className="osce-cta-shape" />
        <div className="osce-cta-inner">
          <span className="osce-cta-eyebrow" data-anim="up">Seats Are Limited — 20 Per Session</span>
          <h2 className="osce-cta-heading" data-anim="up" data-anim-delay="80">Start with a free consultation.</h2>
          <p className="osce-cta-sub" data-anim="up" data-anim-delay="160">
            Talk to a pathway advisor about your eligibility, training dates, and the right program for you — no obligation, no pressure.
          </p>
          <div className="osce-cta-actions" data-anim="up" data-anim-delay="240">
            <Link className="osce-cta-btn" href="/contact">Book a Free Consultation</Link>
            <a className="osce-cta-btn osce-cta-btn--ghost" href="tel:+64212178770">📞 +64 21 217 8770</a>
            <a className="osce-cta-btn osce-cta-btn--ghost" href="mailto:info@mindtreenursing.com">✉ info@mindtreenursing.com</a>
          </div>
        </div>
      </section>

    </main>
  );
}
