import Link from "next/link";

import "../blogs.css";

export default function BlogPostOne() {
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
          <span className="blog-hero-badge">Success Stories</span>
          <h1 className="post-title">
            The Success Stories of Nurses Who Have Chosen Mindtree Nursing Solution for Their Careers
          </h1>
        </div>
      </section>

      {/* ── POST CONTENT ── */}
      <section className="post-content-section" data-anim="up">
        <div className="post-content-inner">

          {/* Featured image */}
          <div className="post-featured-img-wrap">
            <img src="\blogimg\Internationally Qualified Nurses.png" alt="Success Stories" className="post-featured-img" />
            <div className="post-featured-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="52" height="52">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
          </div>

          {/* Article body */}
          <article className="post-article">
            <p className="post-para">
              Mindtree Nursing Solution has witnessed numerous success stories of nurses who have chosen their services for their careers. From securing prestigious job placements in countries like New Zealand and Australia to successfully navigating the CGFNS and nursing council processes, nurses have achieved their goals with Mindtree's support.
            </p>
            <p className="post-para">
              The personalised guidance, access to global study opportunities, and comprehensive training programs have empowered nurses to excel in their professions. These success stories highlight Mindtree Nursing Solution's commitment to fostering the growth and success of nurses, making it a trusted choice for those seeking a fulfilling and rewarding career in the field of nursing.
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