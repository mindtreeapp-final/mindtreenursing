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
            Why is Mindtree Nursing Solution the Best Choice for Your Career?
          </h1>
        </div>
      </section>

      {/* ── POST CONTENT ── */}
      <section className="post-content-section" data-anim="up">
        <div className="post-content-inner">

          {/* Featured image */}
          <div className="post-featured-img-wrap">
            <img src="\blogimg\The Success Stories of Nurses Who Have Chosen Mindtree Nursing Solution for Their Careers.jpeg" alt="Success Stories" className="post-featured-img" />
            <div className="post-featured-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="52" height="52">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
          </div>

          {/* Article body */}
          <article className="post-article">
            <p className="post-para">
Mindtree Nursing Solution is the best choice for your career due to their unparalleled commitment to your professional growth and success. They offer a wide range of global study opportunities, job placements in prestigious healthcare systems like New Zealand and Australia, and specialised services for CGFNS and nursing council requirements. Their 24/7 helpline ensures round-the-clock support, while their free OSCE and OET training programs enhance your skills and chances of success. With their expertise, extensive network, and personalised guidance, Mindtree Nursing Solution empowers you to excel in your nursing career, providing the necessary resources, mentorship, and opportunities for a fulfilling and rewarding professional journey.
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