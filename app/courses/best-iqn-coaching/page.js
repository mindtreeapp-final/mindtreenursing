import Link from "next/link";
import "./iqn.css";

export const metadata = {
  title: "Best IQN Coaching | Mindtree Nursing Solutions",
  description:
    "Prepare for the New Zealand IQN Theory Exam online with Mindtree. Expert-led classes, rich study materials, and a dedicated mobile app packed with recently asked questions and exam-style mock tests for Part A and Part B.",
  keywords: [
    "IQN",
    "IQN Preparation",
    "IQN Theory Exam",
    "IQN Course",
    "New Zealand Nursing Registration",
    "IQN Coaching",
    "Nursing Registration NZ",
    "Internationally Qualified Nurse",
    "Mindtree Nursing Solutions",
  ],
};

export default function IQNPage() {
  return (
    <main className="iqn-page">

      {/* ── HERO ── */}
      <section className="iqn-hero">
        <div className="iqn-hero-shape-1" />
        <div className="iqn-hero-shape-2" />
        <div className="iqn-hero-inner">
          <span className="iqn-hero-badge">Online IQN Theory Exam Training</span>
          <h1 className="iqn-hero-title">
            Pass the NZ IQN exam — with practice that fits <em className="iqn-hero-em">into your shift breaks.</em>
          </h1>
          <div className="iqn-hero-divider">
            <span className="iqn-divider-line" />
            <span className="iqn-divider-star">✦</span>
            <span className="iqn-divider-line" />
          </div>
          <p className="iqn-hero-sub">
            Mindtree prepares internationally qualified nurses for the New Zealand IQN Theory Exam with expert-led online classes, rich study materials, and a dedicated mobile app packed with recently asked questions and exam-style mock tests.
          </p>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="iqn-intro-section">
        <div className="iqn-intro-inner">
          <div className="iqn-intro-grid">
            <div className="iqn-intro-left" data-anim="from-left">
              <span className="iqn-section-label">What We Do</span>
              <h2 className="iqn-intro-heading">Online IQN Theory Exam Preparation, Built for Working Nurses</h2>
              <div className="iqn-accent-bar" />
            </div>
            <div className="iqn-intro-right" data-anim="from-right" data-anim-delay="120">
              <p className="iqn-intro-para">
                Mindtree prepares internationally qualified nurses (IQNs) for the New Zealand IQN Theory Exam — a computer-based test taken at Pearson VUE centres worldwide. Our fully online program combines expert-led live classes, curated study materials, and a dedicated mobile app, so you can prepare from any country, around your shifts.
              </p>
              <p className="iqn-intro-para">
                Nurses rarely get long, quiet study hours. That's why every part of our program is designed to fit real life — open the app during a break, join a live class on your day off, and turn spare minutes into steady progress toward a first-attempt pass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXAM STRUCTURE ── */}
      <section className="iqn-exam-section" id="exam">
        <div className="iqn-exam-inner">
          <div className="iqn-section-head" data-anim="up">
            <span className="iqn-section-label">Know Your Exam</span>
            <h2 className="iqn-section-title">What Is the IQN Theory Exam?</h2>
            <p className="iqn-section-desc">
              The IQN exam is a key step for internationally qualified nurses seeking registration in New Zealand. It is a computer-based test of 120 multiple-choice questions, conducted at Pearson VUE test centres in India and around the world, assessing your nursing theory and its application in New Zealand practice.
            </p>
          </div>

          <div className="iqn-exam-grid">
            <div className="iqn-exam-card" data-anim="from-left">
              <span className="iqn-exam-part">Part A</span>
              <h3>Medication Safety</h3>
              <div className="iqn-exam-meta"><span>📝 12 questions</span><span>⏱ 30 minutes</span></div>
              <p>Focuses on the safe administration of medications and fluids — calculations, checks, and safe practice in real clinical scenarios.</p>
            </div>
            <div className="iqn-exam-card" data-anim="from-right" data-anim-delay="100">
              <span className="iqn-exam-part">Part B</span>
              <h3>Knowledge of Nursing</h3>
              <div className="iqn-exam-meta"><span>📝 108 questions</span><span>⏱ 135 minutes</span></div>
              <p>Covers nursing care management, professional accountability, interprofessional healthcare, and interpersonal interactions aligned with NZ standards.</p>
            </div>
          </div>

          <div className="iqn-exam-note" data-anim="up">
            <strong>Sitting the exam soon? Our structured program builds both knowledge and time management, so you walk in confident.</strong>
            <Link href="/contact" className="iqn-exam-note-btn">Register Now</Link>
          </div>
        </div>
      </section>

      {/* ── MOBILE APP ── */}
      <section className="iqn-app-section" id="app">
        <div className="iqn-app-inner">
          <div className="iqn-app-left" data-anim="from-left">
            <span className="iqn-section-label">What Makes Mindtree Special</span>
            <h2 className="iqn-app-heading">A dedicated mobile app that studies when you do — even on a tea break.</h2>
            <p className="iqn-app-text">
              Nurses don't get long, quiet study hours. That's why every Mindtree student gets our IQN mobile app — open it during a break, on the bus, or between shifts, and turn ten free minutes into real progress.
            </p>

            <div className="iqn-feature-list">
              <div className="iqn-feature">
                <div className="iqn-feature-ico">🆕</div>
                <div>
                  <h4>Latest asked questions</h4>
                  <p>Our question bank is continuously updated with recently asked and recall-style questions, so you practise what actually appears in the exam.</p>
                </div>
              </div>
              <div className="iqn-feature">
                <div className="iqn-feature-ico">🧪</div>
                <div>
                  <h4>Exam-style mock tests</h4>
                  <p>Timed mock tests mirror the real Pearson VUE format for Part A and Part B — same structure, same pressure, so exam day feels familiar.</p>
                </div>
              </div>
              <div className="iqn-feature">
                <div className="iqn-feature-ico">⏰</div>
                <div>
                  <h4>Anytime, anywhere access</h4>
                  <p>Everything syncs to your phone. Practise a few questions during a break or a full mock on your day off — your progress is always saved.</p>
                </div>
              </div>
              <div className="iqn-feature">
                <div className="iqn-feature-ico">📖</div>
                <div>
                  <h4>Answer rationales</h4>
                  <p>Every question comes with a clear explanation, so you learn the reasoning behind each answer — not just the correct option.</p>
                </div>
              </div>
            </div>

            <div className="iqn-pill-row">
              <span className="iqn-pill">Android &amp; iOS</span>
              <span className="iqn-pill">Works on any smartphone</span>
              <span className="iqn-pill">Progress tracking</span>
              <span className="iqn-pill">Included with every plan</span>
            </div>
          </div>

          <div className="iqn-app-visual" data-anim="from-right" data-anim-delay="120">
            <div className="iqn-appcard">
              <div className="iqn-appcard-head">
                <div className="iqn-appcard-title">Mindtree IQN App</div>
                <div className="iqn-appcard-sub">Mock Test 7 · Part B: Knowledge of Nursing</div>
                <div className="iqn-appcard-timer">⏱ 01:52:14 remaining</div>
              </div>
              <div className="iqn-appcard-q">
                <span className="iqn-appcard-qnum">Question 23 / 108</span>
                <p>A patient's condition deteriorates during your shift. What is the most appropriate first action under NZ nursing standards?</p>
              </div>
              <div className="iqn-appcard-opts">
                <div className="iqn-appcard-opt">A. Continue routine observations</div>
                <div className="iqn-appcard-opt iqn-appcard-opt--correct">B. Escalate using the early warning score pathway</div>
                <div className="iqn-appcard-opt">C. Wait for the next handover</div>
                <div className="iqn-appcard-opt">D. Document and reassess in one hour</div>
              </div>
              <div className="iqn-appcard-bar">
                <div><b>3,000+</b><span>Questions</span></div>
                <div><b>Mock</b><span>Exam mode</span></div>
                <div><b>Review</b><span>Rationales</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL (kept from original page) ── */}
      <section className="iqn-trial">
        <div className="iqn-trial__inner">

          {/* Left — content */}
          <div className="iqn-trial__content" data-anim="from-left">
            <span className="iqn-trial__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Free IQN Trial
            </span>

            <h2 className="iqn-trial__title">
              Experience Our IQN<br />
              <em className="iqn-trial__em">Preparation App</em>
            </h2>

            <div className="iqn-trial__accent-bar" />

            <p className="iqn-trial__text">
              Get a firsthand experience of our comprehensive IQN preparation platform.
              Access mock tests, study materials, practice questions, and progress
              tracking designed to help internationally qualified nurses succeed in
              New Zealand.
            </p>

            <ul className="iqn-trial__features">
              <li>
                <span className="iqn-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Full-Length IQN Mock Tests
              </li>
              <li>
                <span className="iqn-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Instant Performance Analysis
              </li>
              <li>
                <span className="iqn-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Comprehensive Study Resources
              </li>
              <li>
                <span className="iqn-trial__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                Learn Anytime, Anywhere
              </li>
            </ul>

            <div className="iqn-trial__actions">
              <a
                href="https://snipr.page.link/KdMEKNyGMghwr1JL6"
                target="_blank"
                rel="noopener noreferrer"
                className="iqn-trial__btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Start Free Trial
              </a>
              <div className="iqn-trial__meta">
                <span>No sign-up needed</span>
                <span className="iqn-trial__dot" />
                <span>Instant access</span>
                <span className="iqn-trial__dot" />
                <span>Free forever</span>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="iqn-trial__visual" data-anim="from-right" data-anim-delay="100">
            <div className="iqn-trial__img-glow" />
            <div className="iqn-trial__img-wrap">
              <img
                src="/demo-iqn.jpeg"
                alt="IQN App Preview"
                className="iqn-trial__img"
              />
              {/* floating pill */}
              <div className="iqn-trial__pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Mock Tests &amp; Scenarios
              </div>
              <div className="iqn-trial__pill iqn-trial__pill--2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Free Forever
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── WHY MINDTREE ── */}
      <section className="iqn-why-section" id="why">
        <div className="iqn-why-inner">
          <div className="iqn-section-head" data-anim="up">
            <span className="iqn-section-label">Why Choose Mindtree</span>
            <h2 className="iqn-section-title">Everything You Need to Clear the IQN, in One Program</h2>
            <p className="iqn-section-desc">
              A complete online pathway built by people who understand both the exam and the reality of a working nurse's schedule.
            </p>
          </div>

          <div className="iqn-why-grid">
            <div className="iqn-why-card" data-anim="scale-up">
              <span className="iqn-why-ico">📱</span>
              <h4>Dedicated mobile app</h4>
              <p>Latest asked questions and mock tests in your pocket — study any time you get a free moment.</p>
            </div>
            <div className="iqn-why-card" data-anim="scale-up" data-anim-delay="60">
              <span className="iqn-why-ico">👩‍🏫</span>
              <h4>Access to instructors</h4>
              <p>Ask doubts directly and get guidance from experienced trainers throughout your preparation.</p>
            </div>
            <div className="iqn-why-card" data-anim="scale-up" data-anim-delay="120">
              <span className="iqn-why-ico">📚</span>
              <h4>Additional study materials</h4>
              <p>Curated notes, revision guides, and topic summaries that go beyond the question bank.</p>
            </div>
            <div className="iqn-why-card" data-anim="scale-up" data-anim-delay="180">
              <span className="iqn-why-ico">💻</span>
              <h4>Live online classes</h4>
              <p>Interactive sessions covering the full syllabus, with Q&amp;A and revision classes.</p>
            </div>
            <div className="iqn-why-card" data-anim="scale-up" data-anim-delay="240">
              <span className="iqn-why-ico">🧪</span>
              <h4>Full-length mock exams</h4>
              <p>Timed, exam-style mocks for Part A and Part B so you master pacing before the real test.</p>
            </div>
            <div className="iqn-why-card" data-anim="scale-up" data-anim-delay="300">
              <span className="iqn-why-ico">🗓️</span>
              <h4>Flexible schedule</h4>
              <p>Designed around shift work — recordings and materials available whenever you are.</p>
            </div>
            <div className="iqn-why-card" data-anim="scale-up" data-anim-delay="360">
              <span className="iqn-why-ico">🎯</span>
              <h4>NZ-focused content</h4>
              <p>Aligned with New Zealand nursing standards, competencies, and exam expectations.</p>
            </div>
            <div className="iqn-why-card" data-anim="scale-up" data-anim-delay="420">
              <span className="iqn-why-ico">🔁</span>
              <h4>Continuous updates</h4>
              <p>Question bank and materials refreshed regularly to reflect the latest exam patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="iqn-pricing-section" id="pricing">
        <div className="iqn-pricing-inner">
          <div className="iqn-section-head" data-anim="up">
            <span className="iqn-section-label">Simple, Transparent Pricing</span>
            <h2 className="iqn-section-title">Choose the Plan That Fits Your Timeline</h2>
            <p className="iqn-section-desc">
              Both plans include full access to the mobile app, study materials, and instructor support.
            </p>
          </div>

          <div className="iqn-price-grid">
            <div className="iqn-price-card" data-anim="from-left">
              <h3>One-Month Program</h3>
              <p className="iqn-price-sub">Ideal if your exam is booked and you want a focused, intensive sprint.</p>
              <div className="iqn-price-amount">NZ$200</div>
              <div className="iqn-price-per">one-time · 1 month access</div>
              <ul>
                <li>Full mobile app access — latest questions &amp; mocks</li>
                <li>Exam-style mock tests for Part A &amp; Part B</li>
                <li>Additional study materials &amp; revision notes</li>
                <li>Access to instructors for doubt clearing</li>
                <li>Live online classes during your month</li>
              </ul>
              <Link href="/contact" className="iqn-price-btn">Choose One-Month</Link>
            </div>

            <div className="iqn-price-card iqn-price-card--featured" data-anim="from-right" data-anim-delay="100">
              <span className="iqn-best-tag">Most Popular</span>
              <h3>Unlimited IQN Program</h3>
              <p className="iqn-price-sub">Prepare at your own pace with no time pressure — access until you pass.</p>
              <div className="iqn-price-amount">NZ$500</div>
              <div className="iqn-price-per">one-time · unlimited access</div>
              <ul>
                <li>Everything in the One-Month Program</li>
                <li>Unlimited access to app, classes &amp; materials</li>
                <li>Repeat mock tests as many times as you need</li>
                <li>Ongoing instructor support until your exam</li>
                <li>All future question bank updates included</li>
              </ul>
              <Link href="/contact" className="iqn-price-btn iqn-price-btn--featured">Choose Unlimited</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="iqn-stories-section" id="stories">
        <div className="iqn-stories-inner">
          <div className="iqn-section-head" data-anim="up">
            <span className="iqn-section-label">Real Nurse Stories</span>
            <h2 className="iqn-section-title">Nurses Who Cleared the IQN with Mindtree</h2>
            <p className="iqn-section-desc">
              From busy hospital shifts to passing at Pearson VUE — here's how our students made it happen.
            </p>
          </div>

          <div className="iqn-story-grid">
            <div className="iqn-story-card" data-anim="scale-up">
              <div className="iqn-story-stars">★★★★★</div>
              <blockquote>The mobile app changed everything for me. I was working full shifts in Dubai and had no time for long study sessions. I solved questions during tea breaks and did full mocks on my off days. By exam day, the format felt completely familiar.</blockquote>
              <div className="iqn-story-who">
                <div className="iqn-story-avatar">AT</div>
                <div>
                  <strong>Anju Thomas</strong>
                  <span>Registered Nurse · Kerala, India</span>
                  <span className="iqn-story-tag">Passed on first attempt</span>
                </div>
              </div>
            </div>
            <div className="iqn-story-card" data-anim="scale-up" data-anim-delay="80">
              <div className="iqn-story-stars">★★★★★</div>
              <blockquote>What helped most was the recently asked questions. Several questions in my actual exam felt very close to what I had already practised on the app. The instructors also cleared my doubts on medication calculations, which was my weakest area.</blockquote>
              <div className="iqn-story-who">
                <div className="iqn-story-avatar">MR</div>
                <div>
                  <strong>Maricel Reyes</strong>
                  <span>Registered Nurse · Manila, Philippines</span>
                  <span className="iqn-story-tag">Now practising in NZ</span>
                </div>
              </div>
            </div>
            <div className="iqn-story-card" data-anim="scale-up" data-anim-delay="160">
              <div className="iqn-story-stars">★★★★★</div>
              <blockquote>I took the Unlimited plan because I wasn't sure of my exam date. No pressure, no expiry — I studied at my own pace for three months, repeated every mock test twice, and walked into Pearson VUE confident. Worth every dollar.</blockquote>
              <div className="iqn-story-who">
                <div className="iqn-story-avatar">SF</div>
                <div>
                  <strong>Sanduni Fernando</strong>
                  <span>Registered Nurse · Colombo, Sri Lanka</span>
                  <span className="iqn-story-tag">Unlimited program</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="iqn-faq-section" id="faq">
        <div className="iqn-faq-inner">
          <div className="iqn-section-head" data-anim="up">
            <span className="iqn-section-label">FAQ</span>
            <h2 className="iqn-section-title">Frequently Asked Questions</h2>
          </div>

          <div className="iqn-faq-list">
            <details>
              <summary>Is the IQN training online or offline?</summary>
              <p>Our IQN training is fully online, which is well suited to this computer-based theory exam. You get live online classes, study materials, and our mobile app — so you can prepare from any country.</p>
            </details>
            <details>
              <summary>What makes the Mindtree mobile app different?</summary>
              <p>The app is built specifically for the IQN exam and is updated with the latest asked questions. It includes timed, exam-style mock tests you can attempt any time — during a break at work, while commuting, or whenever you have a few free minutes.</p>
            </details>
            <details>
              <summary>Can I talk to instructors if I have doubts?</summary>
              <p>Yes. Both plans include access to our instructors. You can raise doubts during live sessions or reach out directly for guidance on difficult topics.</p>
            </details>
            <details>
              <summary>Where is the IQN exam held?</summary>
              <p>The IQN exam is conducted at Pearson VUE test centres globally, including multiple locations in India and other countries. You can check available centres on the Pearson VUE website when booking.</p>
            </details>
            <details>
              <summary>What if I don't pass on my first attempt?</summary>
              <p>You can re-sit the exam after re-applying. With the Unlimited Program, your access continues — you can keep using the app, mocks, and instructor support to prepare for your next attempt at no extra cost.</p>
            </details>
            <details>
              <summary>Which plan should I choose?</summary>
              <p>If your exam date is close and you want an intensive push, the One-Month Program (NZ$200) is a great fit. If you're earlier in your journey or want flexibility, the Unlimited Program (NZ$500) gives you access until you pass.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="iqn-cta" id="apply">
        <div className="iqn-cta-shape" />
        <div className="iqn-cta-inner">
          <h2 className="iqn-cta-heading" data-anim="up">Ready to Begin Your New Zealand Nursing Journey?</h2>
          <p className="iqn-cta-sub" data-anim="up" data-anim-delay="130">
            Get in touch and our team will guide you with the next steps, batch dates, and app access — so you can start preparing for the IQN exam with confidence.
          </p>
          <Link href="/contact" className="iqn-cta-btn" data-anim="up" data-anim-delay="260">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}
