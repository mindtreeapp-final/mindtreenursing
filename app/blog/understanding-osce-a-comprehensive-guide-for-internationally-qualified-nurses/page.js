import Link from "next/link";

import "../blogs.css";

export const metadata = {
  title:
    "Understanding OSCE: A Comprehensive Guide for Internationally Qualified Nurses | Mindtree Nursing Solutions",
  description:
    "A comprehensive guide to the OSCE for internationally qualified nurses seeking registration in New Zealand — what changed, how the Objective Structured Clinical Examination works, why it matters, and the first steps of the registration process.",
  keywords: [
    "OSCE",
    "Objective Structured Clinical Examination",
    "Internationally Qualified Nurses",
    "New Zealand nurse registration",
    "Nursing Council of New Zealand",
    "Te Tiriti o Waitangi",
    "culturally safe practice",
    "Mindtree Nursing",
  ],
};

export default function BlogPostUnderstandingOsce() {
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
          <span className="blog-hero-badge">OSCE Guide</span>
          <h1 className="post-title">
            Understanding OSCE: A Comprehensive Guide for Internationally Qualified Nurses
          </h1>
        </div>
      </section>

      {/* ── POST CONTENT ── */}
      <section className="post-content-section">
        <div className="post-content-inner">

          {/* Featured image (placeholder — change later) */}
          <div className="post-featured-img-wrap">
            <img
              src="/blogimg/understanding-osce-a-comprehensive.jpeg"
              alt="Understanding OSCE: a comprehensive guide for internationally qualified nurses"
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
              Are you an internationally qualified nurse considering registration in New Zealand? The process may seem
              daunting, but fear not, we&apos;re here to guide you through it. The Nursing Council of New Zealand has
              introduced changes to the competence assessment requirements, including the implementation of the Objective
              Structured Clinical Examination{" "}
              (<Link href="/courses/best-osce-training">OSCE</Link>). Let&apos;s delve into everything you need to know
              about OSCE and the registration process.
            </p>

            <h2 className="post-title-h2">What&apos;s Changed?</h2>
            <p className="post-para">
              The Nursing Council has revamped the competence assessment process for internationally qualified nurses
              seeking registration in New Zealand. This change aims to ensure a standardized and fair evaluation of nursing
              competency, aligning with international standards and prioritizing public safety. The introduction of OSCE as
              part of the assessment process signifies a shift towards objective evaluation and culturally safe practice.
            </p>

            <h2 className="post-title-h2">Understanding OSCE</h2>
            <p className="post-para">
              OSCE, or Objective Structured Clinical Examination, is a crucial component of the competence assessment
              process. It consists of a two-day orientation and preparation course followed by a three-hour clinical
              examination. Unlike traditional exams, OSCE evaluates not only theoretical knowledge but also practical
              skills and clinical reasoning in a simulated clinical environment.
            </p>

            <h2 className="post-title-h2">Why OSCE?</h2>
            <p className="post-para">OSCE offers several benefits:</p>
            <ul className="post-list">
              <li>
                <strong>Objective Evaluation:</strong> OSCE provides an objective and standardized method for assessing
                clinical competence, ensuring fairness and consistency across all candidates.
              </li>
              <li>
                <strong>Culturally Safe Practice:</strong> In line with Te Tiriti o Waitangi principles, OSCE evaluates
                candidates&apos; ability to practice culturally safe nursing care, reflecting New Zealand&apos;s unique
                healthcare context.
              </li>
              <li>
                <strong>Public Safety:</strong> By assessing practical skills and clinical reasoning, OSCE helps safeguard
                public health by ensuring that registered nurses possess the necessary competencies to deliver safe and
                effective care.
              </li>
            </ul>

            <h2 className="post-title-h2">The Registration Process</h2>
            <p className="post-para">Here&apos;s a step-by-step overview of the registration process:</p>
            <ul className="post-list">
              <li>
                <strong>Document Verification:</strong> Before applying for registration, internationally qualified nurses
                must have their documents verified and authenticated by CGFNS (Commission on Graduates of Foreign Nursing
                Schools).
              </li>
              <li>
                <strong>Welcome to the Aotearoa New Zealand Programme:</strong> Completion of this program, consisting of
                two free online courses, is mandatory for all applicants. It provides an introduction to culturally safe
                nursing practice in New Zealand and Te Tiriti o Waitangi principles.
              </li>
              <li>
                <strong>English Language Assessment:</strong> There are no changes to the current English language
                assessment requirements. Candidates must meet the specified language proficiency standards.
              </li>
            </ul>

            <p className="post-para">
              Stay tuned for the{" "}
              <Link href="/blog/navigating-the-registration-process-for-internationally-qualified-nurses-in-new-zealand">
                next blog
              </Link>
              , where we&apos;ll cover the remaining steps of the registration process, FAQs, and essential tips for
              success!
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
