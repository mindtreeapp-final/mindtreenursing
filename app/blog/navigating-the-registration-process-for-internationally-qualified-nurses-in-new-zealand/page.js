import Link from "next/link";

import "../blogs.css";

export const metadata = {
  title:
    "Navigating the Registration Process for Internationally Qualified Nurses in New Zealand | Mindtree Nursing Solutions",
  description:
    "A step-by-step guide to the remaining New Zealand nursing registration steps for internationally qualified nurses — competence assessment, application and fees, criminal record check, timelines, and FAQs.",
  keywords: [
    "New Zealand nurse registration",
    "Internationally Qualified Nurses",
    "IQN New Zealand",
    "Nursing Council of New Zealand",
    "competence assessment",
    "OSCE",
    "MyIQN",
    "Mindtree Nursing",
  ],
};

export default function BlogPostRegistrationProcess() {
  return (
    <main className="blog-page">

      {/* ── BACK LINK ── */}
      <div className="blog-back-wrap">
        <Link href="/blog" className="blog-back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* ── POST HERO ── */}
      <section className="post-hero">
        <div className="post-hero-shape-1" />
        <div className="post-hero-shape-2" />
        <div className="post-hero-inner">
          <span className="blog-hero-badge">Registration Guide</span>
          <h1 className="post-title">
            Navigating the Registration Process for Internationally Qualified Nurses in New Zealand
          </h1>
        </div>
      </section>

      {/* ── POST CONTENT ── */}
      <section className="post-content-section">
        <div className="post-content-inner">

          {/* Featured image (placeholder — change later) */}
          <div className="post-featured-img-wrap">
            <img
              src="/blogimg/navigating-the-registration.jpeg"
              alt="Navigating the registration process for internationally qualified nurses in New Zealand"
              className="post-featured-img"
            />
            <div className="post-featured-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="52" height="52">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
          </div>

          {/* Article body */}
          <article className="post-article">
            <p className="post-para">
              Welcome back! In our previous blog, we explored the significance of the Objective Structured Clinical Examination{" "}
              (<Link href="/courses/best-osce-training">OSCE</Link>) and the initial registration process steps for
              internationally qualified nurses in New Zealand. Now, let&apos;s continue our journey by unravelling the
              remaining steps, addressing FAQs, and offering essential tips for success.
            </p>

            <h2 className="post-title-h2">Competence Assessment</h2>
            <p className="post-para">
              Some candidates may be required to undergo a competence assessment, which includes a theoretical examination
              and the OSCE. Successful completion of these assessments is necessary for registration.
            </p>

            <h2 className="post-title-h2">Application and Fees</h2>
            <p className="post-para">
              Submit your application for registration to the Nursing Council along with the required fees. CGFNS
              verification fees, Nursing Council processing fees, and additional costs apply.
            </p>

            <h2 className="post-title-h2">Criminal Record Check</h2>
            <p className="post-para">
              All applicants must undergo a criminal record check as part of the registration process to ensure fitness to
              practice.
            </p>

            <h2 className="post-title-h2">Registration Timeline</h2>
            <p className="post-para">
              The registration process varies in duration, depending on individual circumstances and the completion of
              required assessments and checks. Applicants can track their progress via the MyIQN online portal.
            </p>

            <h2 className="post-title-h2">Frequently Asked Questions</h2>
            <p className="post-para">
              Now that you are aware of the landscape, here are answers to some frequently asked questions:
            </p>
            <ul className="post-list">
              <li>
                <strong>Withdrawal:</strong> Applicants can withdraw their application at any stage, but fees are
                non-refundable.
              </li>
              <li>
                <strong>Enrolled Nurses:</strong> A dedicated registration pathway for Enrolled Nurses is under
                development.
              </li>
              <li>
                <strong>Australian Nurses:</strong> Nurses with a current Australian practising certificate follow a
                separate application process.
              </li>
            </ul>

            <p className="post-para">
              Navigating the registration process may seem complex, but with the right guidance and resources, you can
              successfully achieve your goal of{" "}
              <Link href="/services/nursing-registration-in-new-zealand">becoming a registered nurse in New Zealand</Link>.
              Remember to stay informed, prepare diligently for assessments, and embrace the principles of culturally safe
              practice. Good luck on your journey towards registration and fulfilling your nursing aspirations in Aotearoa
              New Zealand!
            </p>
          </article>

          {/* Back to blog */}
          <div className="post-back-row">
            <Link href="/blog" className="post-back-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to all posts
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
