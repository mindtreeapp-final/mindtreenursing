import "./blogs.css"
import { DM_Sans } from 'next/font/google'
import Link from "next/link";




export const metadata = {
  title: "Blogs | Mindtree Nursing Solutions",
  description:
    "Mindtree Nursing is your all-in-one premium consultant for OET, CGFNS, IQN & OSCE, plus visa, ticket, and accommodation in NZ.",
  keywords: [
    "New Zealand Nursing",
    "Mindtree Nursing Sloutions",
  ],
};

export default function BlogPage() {
  return (
  
              <main className="blog-page">
 
      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="blog-hero-shape-1" />
        <div className="blog-hero-shape-2" />
        <div className="blog-hero-inner">
          <span className="blog-hero-badge">Our Blog</span>
          <h1 className="blog-hero-title">
            Insights &amp; <em className="blog-hero-em">Stories</em>
          </h1>
          <p className="blog-hero-sub">
            Stay updated with the latest nursing news, career tips, and success stories from the Mindtree community.
          </p>
        </div>
      </section>
 
      {/* ── BLOG GRID ── */}
      <section className="blog-section">
        <div className="blog-inner">
 
          <div className="blog-grid">
 
            {/* Card 1 */}
            <Link href="/blog/the-success-stories-of-nurses-who-have-chosen-mindtree-nursing-solution-for-their-careers" className="blog-card" data-anim="scale-up">
              <div className="blog-card-img-wrap">
                <img src="\blogimg\Internationally Qualified Nurses.png" alt="The Success Stories of Nurses" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Success Stories</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                  The Success Stories of Nurses Who Have Chosen Mindtree Nursing Solution for Their Careers
                </h2>
                <p className="blog-card-excerpt">
Mindtree Nursing Solution has witnessed numerous success stories of nurses who have chosen their services for their careers. From securing prestigious job placements in countries like New Zealand and Australia to successfully navigating the CGFNS and nursing council processes, nurses have achieved their goals with Mindtree's support.
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>

                         {/* Card 3 — duplicate, change later */}
            <Link href="/blog/osce-simulation-tools-resources" className="blog-card" data-anim="scale-up" data-anim-delay="150">
              <div className="blog-card-img-wrap">
                <img src="/blogimg/oscesimulation.jpg" alt="What is Mindtree Nursing Solution and what it offers" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Mindtree Nursing Solutions</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                OSCE Simulation Tools and Resources Every Nurse Should Use
                </h2>
                <p className="blog-card-excerpt">
Preparing for the OSCE can feel like climbing Mount Everest. It's daunting, demanding, and you know you need the right gear to reach the summit. Many nurses find themselves overwhelmed, unsure where to start, or how to effectively practice. That's where OSCE simulation tools become your lifeline. </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>
 
            {/* Card 2 — duplicate, change later */}
            <Link href="/blog/why-is-mindtree-nursing-solution-the-best-choice-for-your-career" className="blog-card" data-anim="scale-up" data-anim-delay="75">
              <div className="blog-card-img-wrap">
                <img src="\blogimg\The Success Stories of Nurses Who Have Chosen Mindtree Nursing Solution for Their Careers.jpeg" alt="Why is Mindtree Nursing Solution the Best Choice for Your Career" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Your Career</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                 Why is Mindtree Nursing Solution the Best Choice for Your Career?
                </h2>
                <p className="blog-card-excerpt">
Mindtree Nursing Solution is the best choice for your career due to their unparalleled commitment to your professional growth and success. They offer a wide range of global study opportunities, job placements in prestigious healthcare systems like New Zealand and Australia, and specialised services for CGFNS and nursing council requirements. 
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>
 
            {/* Card 3 — duplicate, change later */}
            <Link href="/blog/what-is-mindtree-nursing-solution-and-what-it-offers" className="blog-card" data-anim="scale-up" data-anim-delay="150">
              <div className="blog-card-img-wrap">
                <img src="/blogimg/Why is Mindtree Nursing Solution the Best Choice for Your Career.png" alt="What is Mindtree Nursing Solution and what it offers" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Mindtree Nursing Solutions</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                What is Mindtree Nursing Solution and what it offers
                </h2>
                <p className="blog-card-excerpt">
Mindtree Nursing Solutions is a comprehensive platform dedicated to empowering nursing professionals worldwide. It offers a wide array of services, including global study opportunities, job placements in countries like New Zealand and Australia, specialised support for CGFNS and nursing council requirements, a 24/7 helpline, and free training programs for OSCE and OET. 
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>

 
          </div>
        </div>
      </section>
 
    </main>
    
  );
}