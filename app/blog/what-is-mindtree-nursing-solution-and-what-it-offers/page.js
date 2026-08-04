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
           What is Mindtree Nursing Solution and what it offers
          </h1>
        </div>
      </section>

      {/* ── POST CONTENT ── */}
      <section className="post-content-section" data-anim="up">
        <div className="post-content-inner">

          {/* Featured image */}
          <div className="post-featured-img-wrap">
            <img src="/blogimg/Why is Mindtree Nursing Solution the Best Choice for Your Career.png" alt="Success Stories" className="post-featured-img" />
            <div className="post-featured-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="52" height="52">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
          </div>

          {/* Article body */}
          <article className="post-article">
            <p className="post-para">
Mindtree Nursing Solutions is a comprehensive platform dedicated to empowering nursing professionals worldwide. It offers a wide array of services, including global study opportunities, job placements in countries like New Zealand and Australia, specialised support for CGFNS and nursing council requirements, a 24/7 helpline, and free training programs for OSCE and OET. With their vast network and expertise, Mindtree Nursing Solutions provides personalised guidance, resources, and mentorship, ensuring nurses have the tools they need to succeed in their careers. Their commitment to professional growth, cultural diversity, and excellence in nursing makes them a top choice for nurses seeking comprehensive support and opportunities.
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