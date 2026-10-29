import Link from "next/link";

import "../blogs.css";

export const metadata = {
  title:
    "Understanding CGFNS: An Essential Guide for International Nurses | Mindtree Nursing Solutions",
  description:
    "An essential guide to CGFNS (Commission on Graduates of Foreign Nursing Schools) certification for international nurses — what CGFNS is, why certification matters, and how it supports licensure, immigration, and professional mobility worldwide.",
  keywords: [
    "CGFNS",
    "CGFNS certification",
    "Commission on Graduates of Foreign Nursing Schools",
    "international nurses",
    "nursing licensure",
    "credential evaluation",
    "Mindtree Nursing",
  ],
};

export default function BlogPostUnderstandingCgfns() {
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
          <span className="blog-hero-badge">CGFNS Guide</span>
          <h1 className="post-title">
            Understanding CGFNS: An Essential Guide for International Nurses
          </h1>
        </div>
      </section>

      {/* ── POST CONTENT ── */}
      <section className="post-content-section">
        <div className="post-content-inner">

          {/* Featured image (placeholder — change later) */}
          <div className="post-featured-img-wrap">
            <img
              src="/blogimg/understanding-cgfns.jpeg"
              alt="Understanding CGFNS: an essential guide for international nurses"
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
              For nurses aspiring to practice abroad, navigating the intricacies of licensure and certification is
              crucial. Among the essential steps in this journey is obtaining{" "}
              <Link href="/services/cgfns">CGFNS</Link> (Commission on Graduates of Foreign Nursing Schools)
              certification. In this blog, we&apos;ll delve into the significance of CGFNS, its role in international
              nursing, and why it&apos;s a vital credential for nurses worldwide.
            </p>

            <h2 className="post-title-h2">What is CGFNS?</h2>
            <p className="post-para">
              The Commission on Graduates of Foreign Nursing Schools (CGFNS) is a nonprofit organization based in the
              United States. Its primary mission is to evaluate and assess the credentials and qualifications of
              international nurses who wish to practice in the U.S. and other countries that recognize CGFNS
              certification.
            </p>

            <h2 className="post-title-h2">Why is CGFNS Certification Important?</h2>
            <p className="post-para">CGFNS certification serves several critical purposes:</p>
            <ul className="post-list">
              <li>
                <strong>Credential Evaluation:</strong> CGFNS evaluates the education, licensure, and registration
                credentials of international nurses to ensure they meet the standards required for licensure in the
                destination country.
              </li>
              <li>
                <strong>Licensure Requirement:</strong> Many U.S. states and other countries mandate CGFNS certification
                as part of the licensure process for international nurses. It serves as evidence of their educational and
                professional qualifications.
              </li>
              <li>
                <strong>Immigration Prerequisite:</strong> CGFNS certification may also be necessary for obtaining a visa
                or work permit in certain countries, particularly in the U.S.
              </li>
              <li>
                <strong>Professional Mobility:</strong> Holding CGFNS certification enhances an international nurse&apos;s
                professional mobility, allowing them to explore career opportunities in multiple countries that recognize
                CGFNS.
              </li>
            </ul>

            <p className="post-para">
              Stay tuned for the next part of this series, where we&apos;ll delve into the CGFNS certification process,
              including requirements, preparation tips, and steps to success.
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
