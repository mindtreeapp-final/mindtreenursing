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

            {/* Card — OET guide (new) */}
            <Link href="/blog/conquering-the-oet-landscape-a-nurse-s-guide-to-success" className="blog-card" data-anim="scale-up">
              <div className="blog-card-img-wrap">
                <img src="/blogimg/conquering-the-oet.jpeg" alt="Conquering the OET Landscape: A Nurse's Guide to Success" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">OET Guide</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                  Conquering the OET Landscape: A Nurse&apos;s Guide to Success
                </h2>
                <p className="blog-card-excerpt">
                  Your one-stop guide to OET prep — how to craft a study schedule for your level, the best resources to use, and practical strategies to beat time management, medical vocabulary, and test-anxiety challenges.
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>

            {/* Card — Understanding CGFNS (new) */}
            <Link href="/blog/understanding-cgfns-an-essential-guide-for-international-nurses" className="blog-card" data-anim="scale-up">
              <div className="blog-card-img-wrap">
                <img src="/blogimg/understanding-cgfns.jpeg" alt="Understanding CGFNS: An Essential Guide for International Nurses" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">CGFNS Guide</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                  Understanding CGFNS: An Essential Guide for International Nurses
                </h2>
                <p className="blog-card-excerpt">
                  For nurses aspiring to practice abroad, CGFNS (Commission on Graduates of Foreign Nursing Schools) certification is a vital step. Here&apos;s what CGFNS is, its role in international nursing, and why it matters for licensure, immigration, and professional mobility.
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>

            {/* Card — Understanding OSCE (new) */}
            <Link href="/blog/understanding-osce-a-comprehensive-guide-for-internationally-qualified-nurses" className="blog-card" data-anim="scale-up">
              <div className="blog-card-img-wrap">
                <img src="/blogimg/understanding-osce-a-comprehensive.jpeg" alt="Understanding OSCE: A Comprehensive Guide for Internationally Qualified Nurses" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">OSCE Guide</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                  Understanding OSCE: A Comprehensive Guide for Internationally Qualified Nurses
                </h2>
                <p className="blog-card-excerpt">
                  Considering registration in New Zealand? The Nursing Council has introduced the Objective Structured Clinical Examination (OSCE). Here&apos;s what changed, how OSCE works, why it matters, and the first steps of the registration process.
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>

            {/* Card — Registration process (new) */}
            <Link href="/blog/navigating-the-registration-process-for-internationally-qualified-nurses-in-new-zealand" className="blog-card" data-anim="scale-up">
              <div className="blog-card-img-wrap">
                <img src="/blogimg/navigating-the-registration.jpeg" alt="Navigating the Registration Process for Internationally Qualified Nurses in New Zealand" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Registration Guide</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                  Navigating the Registration Process for Internationally Qualified Nurses in New Zealand
                </h2>
                <p className="blog-card-excerpt">
                  Continuing our journey through the New Zealand nursing registration process — we unravel the remaining steps including competence assessment, application and fees, criminal record checks and timelines, plus answers to frequently asked questions.
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>

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