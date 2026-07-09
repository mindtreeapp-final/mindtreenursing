// No "use client" needed — zero hooks, zero state
import "./testimonials.css";

// ─── Sample Data ─────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "sujisha surendran",
    role: "Patient's Daughter",
    location: "Kochi, Kerala",
    avatar: "/avatars/anitha.jpg",
    rating: 5,
    category: "Home Care",
    quote:
      "By the grace of God, I have passed my OSCE exam, and my heart is overflowing with gratitude. I would like to express my deepest appreciation to Jijo brother, Jeljo brother, Anju ma’am, Jishy, Neenu, Leema chechy, Anju, Limcy chechy, Anu chechy, Rincy, Aleesha, the entire Mindtree team, and all my friends who supported me throughout this journey. Your unwavering guidance, encouragement, and selfless dedication—even beyond your own time and schedules—made this achievement possible. Thank you so much for standing by me and believing in me every step of the way.",
    highlight: "Extraordinary compassion",
  },
  {
    id: "testimonial-2",
    name: "Jyoti Ranabhat",
    role: "Post-Surgery Patient",
    location: "Thrissur, Kerala",
    avatar: "/avatars/rajan.jpg",
    rating: 5,
    category: "Post-Op Care",
    quote:
"Outstanding OSCE training program! The tutors were professional, caring, and always encouraged us to do our best. The practical sessions were realistic and well-organized. I’m very grateful for the support I received🫂❤️"  },
  {
    id: "testimonial-3",
    name: "Akshara Suresh",
    role: "Referring Physician",
    location: "Thiruvananthapuram",
    avatar: "/avatars/priya.jpg",
    rating: 5,
    category: "Clinical Partner",
    quote:
"The best place to prepare for the OSCE exam. The tutors are very supportive, kind, and explain everything clearly. The mock sessions helped me gain confidence. I’m really thankful to the whole team for their guidance and support. Highly recommended! 🌟"
  
  },
  {
    id: "testimonial-4",
    name: "Sruthy Saina",
    role: "Caregiver & Son",
    location: "Ernakulam, Kerala",
    avatar: "/avatars/thomas.jpg",
    rating: 5,
    category: "Elderly Care",
    quote:
"I truly recommend MindTree’s coaching for the future ice candidates and for the Newzealand processing Mindtree is the best.Jijo brothers coaching is the best if you listen him properly you will pass.The entire mind tree team is fantastic.once again thank you team for the support.",
    highlight: "Infinite patience",
  },
  {
    id: "testimonial-5",
    name: "sonia mathew",
    role: "New Mother",
    location: "Kozhikode, Kerala",
    avatar: "/avatars/fatima.jpg",
    rating: 5,
    category: "Maternal Care",
    quote:
      "I wanted to express my gratitude for the excellent support provided. Your team's expertise and responsiveness made a significant difference. Thank you for your help and guidance.",
    highlight: "A true lifeline",
  },
  {
    id: "testimonial-6",
    name: "Rachel philip",
    role: "Chronic Care Patient",
    location: "Kannur, Kerala",
    avatar: "/avatars/suresh.jpg",
    rating: 5,
    category: "Chronic Care",
    quote:
      "My heartfelt gratitude to Mindtree Nursing Solutions for their outstanding support and guidance throughout my journey. The classroom setup and educational environment at the Kottarakkara center were truly well organized, and the accommodation was comfortable and homely. A special thanks to Jijo brother, Anju Ma’am, and Melvin Sir for their continuous encouragement, personal attention, and motivation at every step. In Christchurch, the training sessions conducted by Limcy Chechi were so useful — their clear explanations, patience, and practical guidance helped me gain the confidence I needed. Because of the dedicated and caring team at Mindtree, I was able to successfully pass my OSCE. I’m deeply thankful to each one of them for being part of my success. I would highly recommend Mindtree Nursing Solutions to every aspiring nurse who wishes to achieve their dream with confidence and the right guidance. Thank you once again for the wonderful team effort, by Rachel Mathew ",
    highlight: "Changed my life",
  },
    {
    id: "testimonial-7",
    name: "Kavitha Mohan",
    role: "Chronic Care Patient",
    location: "Kannur, Kerala",
    avatar: "/avatars/suresh.jpg",
    rating: 5,
    category: "Chronic Care",
    quote:
"It was a wonderful time with mindtree team throughout the sessions. Thank you for your great support to achieve this result. Of course, need good hard work from our side. Above that, I am so happy to say that I have done it because of the God's grace and the wonderful efforts and guidance from Mindtree team for our success.Thank you so much 😊",
    highlight: "Changed my life",
  },
     {
    id: "testimonial-8",
    name: "Nija shyju",
    role: "Chronic Care Patient",
    location: "Kannur, Kerala",
    avatar: "/avatars/suresh.jpg",
    rating: 5,
    category: "Chronic Care",
    quote:
"I am really thankful to the Entire Mindtree family, especially Jijo brother, for the support, guidance and motivation throughtout my OSCE training. I don't think, without such a great training I could achieve this success.Thank you Mindtree Nursing Solutions for your effort and excellent Team work .",
    highlight: "Changed my life",
  },
       {
    id: "testimonial-9",
    name: "Anoop P",
    role: "Chronic Care Patient",
    location: "Kannur, Kerala",
    avatar: "/avatars/suresh.jpg",
    rating: 5,
    category: "Chronic Care",
    quote:
"I am delighted to share that I have successfully completed my OSCE exam. I want to express my deepest gratitude for the outstanding support and training provided by the Mindtree team. I am especially thankful to Jijo, Jeljo, Neenu, Radhika, and all of the Mindtree family for their invaluable guidance and encouragement. Your support was essential to my success. Thank you. I wholeheartedly recommend Mindtree's OSCE training to anyone seeking to excel in their OSCE exam.",
    highlight: "Changed my life",
  },
       {
    id: "testimonial-10",
    name: "Alex P George",
    role: "Chronic Care Patient",
    location: "Kannur, Kerala",
    avatar: "/avatars/suresh.jpg",
    rating: 5,
    category: "Chronic Care",
    quote:
"I am truly grateful to the Mindtree Nursing Solutions team for their outstanding support during my OSCE exam. Their expert guidance and unwavering assistance made a significant difference in my preparation. I wholeheartedly recommend Mindtree Nursing Solutions to anyone looking to achieve their goals in nursing registration in New Zealand. Thank you all for your prompt and helpful responses!",
    highlight: "Changed my life",
  },

];



// ─── Star Rating ──────────────────────────────────────────────────
function Stars({ count = 5 }) {
  return (
    <div className="star-row" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`star ${i < count ? "star--filled" : ""}`}>★</span>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function TestimonialsPage() {
  return (
    <main className="testimonials-page">

      {/* ── Hero ────────────────────────────────────── */}
      <section className="t-hero">
        <div className="t-hero-texture" />
        <div className="t-hero-inner">
          <span className="t-hero-eyebrow">Voices of Trust</span>
          <h1 className="t-hero-title">Testimonials</h1>
          <p className="t-hero-sub">
            Real words from the families, patients, and partners who trusted us with what matters most.
          </p>
        </div>
        <div className="t-hero-scroll-hint"><span /></div>
      </section>

  

      {/* ── Testimonials Grid ───────────────────────── */}
      <section className="section t-grid-section">
        <div className="container">
          <header className="section-header" data-anim="up">
            <div className="section-label">
              <span className="label-dot label-dot--accent" />
              What People Say
            </div>
            <h2 className="section-title">Stories of Care</h2>
            <p className="section-desc">
              Behind every number is a family, a recovery, a life touched. Here are a few of their stories.
            </p>
          </header>

          <div className="t-grid">
            {TESTIMONIALS.map((t, index) => (
              <article
                key={t.id}
                className={`t-card ${index % 5 === 0 ? "t-card--featured" : ""}`}
                data-anim="scale-up"
                data-anim-delay={index * 50}
              >
                {/* Quote mark */}
                <div className="t-quote-mark">"</div>

                {/* Stars + Category */}
                <div className="t-card-meta">
                  <Stars count={t.rating} />
                  <span className="t-category">{t.category}</span>
                </div>

                {/* Highlight pill */}
                <div className="t-highlight">{t.highlight}</div>

                {/* Quote body */}
                <blockquote className="t-quote">{t.quote}</blockquote>

                {/* Author */}
                <footer className="t-author">
                  <div className="t-avatar-wrap">
                    <div className="t-avatar-fallback" aria-hidden="true">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <div className="t-author-info">
                    <span className="t-author-name">{t.name}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────── */}
      <div className="section-divider">
        <span className="divider-line" />
        <span className="divider-icon">◈</span>
        <span className="divider-line" />
      </div>

      {/* ── CTA Banner ──────────────────────────────── */}
      <section className="t-cta-section">
        <div className="container">
          <div className="t-cta-inner" data-anim="up">
            <div className="t-cta-text">
              <span className="t-cta-eyebrow">Join Our Family</span>
              <h2 className="t-cta-title">Experience care that goes beyond the clinical.</h2>
              <p className="t-cta-desc">
                Thousands of families across Kerala have trusted Mindtree. We would be honoured to care for yours.
              </p>
            </div>
            <div className="t-cta-actions">
              <a href="/contact" className="btn-primary">Get in Touch</a>
              <a href="/services" className="btn-ghost">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
