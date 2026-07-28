import Link from "next/link";
import "./pathway-for-registered-nurses-from-the-uk-and-ireland-to-new-zealand.css";

export const metadata = {
  title: "UK & Ireland Nurses Pathway to New Zealand | Mindtree Nursing Solutions",
  description:
    "UK and Ireland-trained nurses qualify for New Zealand's most streamlined registration pathway — often with no OSCE, no CBT, and no English test. Mindtree Nursing Solutions manages the full process from TruMerit verification to NZ registration.",
  keywords: [
    "UK Nurses to New Zealand",
    "Ireland Nurses to New Zealand",
    "NCNZ Registration",
    "New Zealand Nursing Pathway",
    "NMC NMBI New Zealand",
    "Registered Nurses New Zealand",
    "Nursing Registration New Zealand",
    "Mindtree Nursing",
  ],
};

export default function UKIrelandPathwayPage() {
  return (
    <main className="ukire-page">

      {/* ── BREADCRUMB ── */}
      <nav className="ft-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">›</span>
        <a href="/services">Services</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Pathway for Registered Nurses from the UK and Ireland to New Zealand</span>
      </nav>

      {/* ── HERO ── */}
      <section className="ukire-hero">
        <div className="ukire-hero-shape-1" />
        <div className="ukire-hero-shape-2" />
        <div className="ukire-hero-inner">
          <span className="ukire-hero-badge">UK &amp; Ireland → New Zealand</span>
          <h1 className="ukire-hero-title">
            Registered in the UK or Ireland? Your <em className="ukire-hero-em">Fastest Route</em> to Nursing in New Zealand
          </h1>
          <div className="ukire-hero-divider">
            <span className="ukire-divider-line" />
            <span className="ukire-divider-star">✦</span>
            <span className="ukire-divider-line" />
          </div>
          <p className="ukire-hero-sub">
            UK and Ireland-trained nurses qualify for New Zealand's most streamlined registration pathway — often with no OSCE, no CBT, and no English test.
          </p>
        </div>
      </section>

      {/* ── SECTION 1 — WHY THIS PATHWAY IS DIFFERENT ── */}
      <section className="ukire-why-section">
        <div className="ukire-why-inner">
          <div className="ukire-head" data-anim="up">
            <span className="ukire-section-label">Why This Pathway Is Different</span>
            <h2 className="ukire-head-title">Comparable Education, a Streamlined Route</h2>
            <p className="ukire-head-desc">
              New Zealand's Nursing Council may waive the standard competence assessment (CBT/OSCE) for nurses whose initial nursing education was completed in the UK or Ireland. This isn't automatic — it's assessed on a case-by-case basis after you apply — but it means many UK/Ireland-trained nurses face a shorter path than nurses trained elsewhere.
            </p>
          </div>

          <div className="ukire-highlight-grid">
            <div className="ukire-highlight-card" data-anim="scale-up">
              <span className="ukire-highlight-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <h3>No OSCE or CBT in most cases</h3>
              <p>The Council usually waives the competence assessment for UK and Ireland-trained nurses.</p>
            </div>
            <div className="ukire-highlight-card" data-anim="scale-up" data-anim-delay="80">
              <span className="ukire-highlight-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <h3>English test exemption available</h3>
              <p>Your English-medium education or NMC/NMBI registration can count as evidence of English proficiency.</p>
            </div>
            <div className="ukire-highlight-card" data-anim="scale-up" data-anim-delay="160">
              <span className="ukire-highlight-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <h3>Faster overall timeline</h3>
              <p>No exam booking, prep, or exam travel required — so you reach registration sooner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — HOW IT WORKS ── */}
      <section className="ukire-steps-section">
        <div className="ukire-steps-inner">
          <div className="ukire-head" data-anim="up">
            <span className="ukire-section-label">How It Works</span>
            <h2 className="ukire-head-title">Four Steps to Registration</h2>
          </div>

          <div className="ukire-steps-grid">
            <div className="ukire-step-card" data-anim="scale-up">
              <div className="ukire-step-num">1</div>
              <h3>Verify your credentials</h3>
              <p>Apply through CVS-NCNZ at TruMerit (CGFNS). They verify your identity, education, and work history.</p>
            </div>
            <div className="ukire-step-card" data-anim="scale-up" data-anim-delay="80">
              <div className="ukire-step-num">2</div>
              <h3>Apply to the Nursing Council</h3>
              <p>Submit your application via the MyIQN portal.</p>
            </div>
            <div className="ukire-step-card" data-anim="scale-up" data-anim-delay="160">
              <div className="ukire-step-num">3</div>
              <h3>Council assessment</h3>
              <p>The Council reviews your file and confirms whether you're exempt from the competence assessment and English test.</p>
            </div>
            <div className="ukire-step-card" data-anim="scale-up" data-anim-delay="240">
              <div className="ukire-step-num">4</div>
              <h3>Registration granted</h3>
              <p>Receive your NZ registration and apply for your practising certificate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — WHAT YOU'LL NEED ── */}
      <section className="ukire-need-section">
        <div className="ukire-need-inner">
          <div className="ukire-head" data-anim="up">
            <span className="ukire-section-label">What You'll Need</span>
            <h2 className="ukire-head-title">Your Eligibility Checklist</h2>
          </div>

          <ul className="ukire-need-list" data-anim="up">
            <li className="ukire-need-item"><span className="ukire-need-tick">✓</span>Nursing qualification equivalent to a NZ Bachelor of Nursing</li>
            <li className="ukire-need-item"><span className="ukire-need-tick">✓</span>Current registration with the NMC (UK) or NMBI (Ireland)</li>
            <li className="ukire-need-item"><span className="ukire-need-tick">✓</span>At least 1,800 hours of nursing practice in the last 5 years</li>
            <li className="ukire-need-item"><span className="ukire-need-tick">✓</span>Professional references from recent employers</li>
            <li className="ukire-need-item"><span className="ukire-need-tick">✓</span>International criminal history check</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 4 — IMPORTANT TO KNOW ── */}
      <section className="ukire-notes-section">
        <div className="ukire-notes-inner">
          <div className="ukire-head" data-anim="up">
            <span className="ukire-section-label">Important to Know</span>
            <h2 className="ukire-head-title">The Fine Print</h2>
          </div>

          <div className="ukire-notes-grid">
            <div className="ukire-note-card" data-anim="scale-up">
              <p>Exemptions depend on where your <strong>initial nursing education</strong> was completed — not where you're currently registered. Postgraduate study in the UK/Ireland doesn't qualify on its own.</p>
            </div>
            <div className="ukire-note-card" data-anim="scale-up" data-anim-delay="80">
              <p>All exemptions are at the <strong>Council's discretion</strong> and are confirmed only after your application is assessed.</p>
            </div>
            <div className="ukire-note-card" data-anim="scale-up" data-anim-delay="160">
              <p>If the English exemption is declined, you can still register by passing <strong>OET or IELTS Academic</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — CTA ── */}
      <section className="ukire-cta" id="contact">
        <div className="ukire-cta-shape" />
        <div className="ukire-cta-inner">
          <h2 className="ukire-cta-heading" data-anim="up">Ready to Start?</h2>
          <p className="ukire-cta-sub" data-anim="up" data-anim-delay="130">
            Our team manages the full process — from TruMerit verification to your NZ registration. Get a free eligibility assessment today.
          </p>
          <div className="ukire-cta-actions" data-anim="up" data-anim-delay="260">
            <Link href="/contact" className="ukire-cta-btn">Book a Free Consultation</Link>
            <a
              href="https://wa.me/919778286707"
              target="_blank"
              rel="noopener noreferrer"
              className="ukire-cta-btn ukire-cta-btn--ghost"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
