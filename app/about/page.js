
import Link from "next/link";
import "./about.css"


export const metadata = {
  title: "About Us | Mindtree Nursing Solutions",
  description:
    "Mindtree Nursing is your all-in-one premium consultant for OET, CGFNS, IQN & OSCE, plus visa, ticket, and accommodation in NZ.",
  keywords: [
    "New Zealand Nursing",
    "Mindtree Nursing Sloutions",
  ],
};
export default function AboutPage(){
    return(
      

    <div>


          <main className="about-page">
 
      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="hero-shape-1" />
        <div className="hero-shape-2" />
        <div className="hero-inner">
          <span className="hero-badge">About Us</span>
          <h1 className="hero-title">
            Mindtree Nursing
            <em className="hero-title-em"> Solutions</em>
          </h1>
          <div className="hero-divider">
            <span className="divider-line" />
            <span className="divider-star">✦</span>
            <span className="divider-line" />
          </div>
          <p className="hero-intro">
            Welcome to Mindtree Nursing Ltd, now trading as Mindtree Nursing Solutions,
            where excellence meets compassionate care.
          </p>
        </div>
      </section>
 
      {/* ── ABOUT CONTENT ── */}
      <section className="about-content">
        <div className="content-grid">
 
          <div className="content-left" data-anim="from-left">
            <span className="section-label">Who We Are</span>
            <h2 className="content-heading">
              Excellence &amp; Compassion,<br />Converging for Your Career
            </h2>
            <div className="accent-bar" />
          </div>
 
          <div className="content-right" data-anim="from-right" data-anim-delay="120">
            <p className="content-para">
              Our unparalleled quality is evident in our commitment to providing top-notch
              nursing consultancy services. At Mindtree, our core mission revolves around
              fostering an environment prioritizing individualized attention, dignity, and
              respect for the dreams of nurses who wish to marvel at their careers.
            </p>
            <p className="content-para">
              With a focus on continuous improvement and staying abreast of the latest
              updates, exam structures, syllabi, and official procedures, we strive for
              excellence in every aspect of our services.
            </p>
            <p className="content-para">
              We partner in your journey to success, offering unparalleled expertise and
              a genuine commitment to your dreams and aspirations. Experience the Mindtree
              difference – where excellence and compassion converge for an exceptional
              nursing career.
            </p>
 
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-num">5000+</span>
                <span className="stat-lbl">Nurses Guided</span>
              </div>
              <div className="stat-sep" />
              <div className="stat-item">
                <span className="stat-num">98%</span>
                <span className="stat-lbl">Success Rate</span>
              </div>
              <div className="stat-sep" />
              <div className="stat-item">
                <span className="stat-num">2</span>
                <span className="stat-lbl">Global Offices</span>
              </div>
            </div>
          </div>
 
        </div>
      </section>
 
      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="values-grid">
 
          <div className="value-card" data-anim="scale-up">
            <span className="value-icon">◈</span>
            <h3>Individualized Attention</h3>
            <p>Every nurse receives personalized guidance tailored to their unique goals.</p>
          </div>
 
          <div className="value-card" data-anim="scale-up" data-anim-delay="75">
            <span className="value-icon">◉</span>
            <h3>Continuous Improvement</h3>
            <p>Always updated with the latest exam structures, syllabi and procedures.</p>
          </div>
 
          <div className="value-card" data-anim="scale-up" data-anim-delay="150">
            <span className="value-icon">◆</span>
            <h3>Dignity &amp; Respect</h3>
            <p>We honour your aspirations and treat every dream with the care it deserves.</p>
          </div>
 
        </div>
      </section>
 
      {/* ── TEAM ── */}
      <section className="team-section">
 
        <div className="team-header" data-anim="up">
          <span className="section-label blue">Our People</span>
          <h2 className="team-heading">Meet the Team</h2>
          <p className="team-sub">Dedicated professionals united by a passion for nursing excellence.</p>
        </div>
 
        {/* CEO & Director — top row of 2 */}
        <div className="team-top-row" data-anim="up" data-anim-delay="110">
 
          <div className="member-card card-leader">
            <div className="member-img-wrap">
              <img src="/team/jijo-john.jpeg" alt="CEO" className="member-img" />
              <div className="member-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Jijo John</h3>
              <span className="member-role">CEO</span>
            </div>
          </div>

        </div>
 
        {/* Rest of team — 4 per row */}
        <div className="team-grid" data-anim="up" data-anim-delay="200">
 

          <div className="member-card">
            <div className="member-img-wrap">
              <img src="/team/reshma-2.jpeg" alt="Team Member" className="member-img" />
              <div className="member-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Reshma V R</h3>
              <span className="member-role">Adviser</span>
            </div>
          </div>
 
          <div className="member-card">
            <div className="member-img-wrap">
              <img src="/team/nandan.jpg.jpeg" alt="Team Member" className="member-img" />
              <div className="member-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Nandan R Ajay</h3>
              <span className="member-role">Software Developer</span>
            </div>
          </div>
 
          <div className="member-card">
            <div className="member-img-wrap">
              <img src="/team/edbin.jpg.jpeg" alt="Team Member" className="member-img" />
              <div className="member-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Edbin P Wilson</h3>
              <span className="member-role">Software Developer</span>
            </div>
          </div>
 
    
         
    <div className="member-card">
            <div className="member-img-wrap">
              <img src="/team/sreeja.jpg.jpeg" alt="Team Member" className="member-img" />
              <div className="member-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            
            <div className="member-info">
              <h3 className="member-name">Sreeja S</h3>
              <span className="member-role">Adviser</span>
            </div>
          </div>
              <div className="member-card">
            <div className="member-img-wrap">
              <img src="/team/leema.jpg.jpeg" alt="Team Member" className="member-img" />
              <div className="member-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Leema</h3>
              <span className="member-role">Instructor</span>
            </div>
          </div>
              
              <div className="member-card">
            <div className="member-img-wrap">
              <img src="/team/febin.jpg.jpeg" alt="Team Member" className="member-img" />
              <div className="member-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Febin Abraham Joseph</h3>
              <span className="member-role">Nurse Educator</span>
            </div>
          </div>
   
              <div className="member-card">
            <div className="member-img-wrap">
              <img src="/team/priya.jpg.jpeg" alt="Team Member" className="member-img" />
              <div className="member-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Priya Philip</h3>
              <span className="member-role">Adviser</span>
            </div>
          </div>

          <div className="member-card">
            <div className="member-img-wrap">
              <img src="/team/anuja.jpg.jpeg" alt="Team Member" className="member-img" />
              <div className="member-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Anuja</h3>
              <span className="member-role">Adviser</span>
            </div>
            
          </div>
        </div>
        
      </section>
 
      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="cta-shape" />
        <div className="cta-inner">
          <h2 className="cta-heading" data-anim="up">Ready to Begin Your Journey?</h2>
          <p className="cta-sub" data-anim="up" data-anim-delay="130">Partner with us and experience the Mindtree difference.</p>
          <Link href="/contact" className="cta-btn" data-anim="up" data-anim-delay="260">Get in Touch</Link>
        </div>
      </section>
 
    </main>
    </div>
    )
}