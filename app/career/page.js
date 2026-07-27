import Link from 'next/link';
import Image from 'next/image';
import './career.css';


export const metadata = {
  title: "Career | Mindtree Nursing Solutions",
  description:"Explore exciting career opportunities at Mindtree Nursing Solutions. Join our growing team and build a rewarding career in healthcare consultancy, nursing education, visa assistance, and international recruitment services.",
  keywords: [
    "New Zealand Nursing",
    "Mindtree Nursing Sloutions",
  ],
};
// ─── Vacancy Data ─────────────────────────────────────────────────
// Add poster: "/path/to/your-image.jpg" to each job to show a poster image.
// Leave poster: null to show the default illustrated placeholder.
const vacancies = [
  {
    id: 1,
    title: 'Operations Executive',
    department: 'OPERATIONS',
    location: 'Kollam, Kerala',
    type: 'Full-Time',
    experience: '2+ Years',
    poster: '/hiring.jpeg', // e.g. "/jobs/oet-trainer-poster.jpg"
    description:
      'We are looking for a proactive Operations Executive to support and streamline our day-to-day business processes. You will coordinate across teams, manage schedules and documentation, and help ensure smooth, efficient operations throughout the organization.',
    requirements: [
      "Bachelor's degree in any discipline",
      'Strong organizational and multitasking skills',
      'Minimum 2 year of experience in operations, administration, or coordination',
      'Excellent verbal and written communication skills',
    ],
  },

 

];

// Department → gradient used in the SVG placeholder
const deptGradients = {
  Academic: ['#2E5E99', '#7BA4D0'],
  Operations: ['#0D2440', '#2E5E99'],
  Marketing: ['#1a6e5a', '#4ab89a'],
  Admissions: ['#5a2e99', '#a47bd0'],
};

// ─── Poster placeholder (SVG) shown when job.poster is null ───────
function PosterPlaceholder({ department, title }) {
  const [g1, g2] = deptGradients[department] ?? ['#2E5E99', '#7BA4D0'];
  const id = `grad-${department.replace(/\s/g, '')}`;
  return (
    <svg
      viewBox="0 0 280 320"
      xmlns="http://www.w3.org/2000/svg"
      className="career-poster-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={g1} />
          <stop offset="100%" stopColor={g2} />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="280" height="320" rx="12" fill={`url(#${id})`} />
      {/* Dot grid texture */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 40}
            cy={20 + row * 40}
            r="1.5"
            fill="rgba(255,255,255,0.12)"
          />
        ))
      )}
      {/* Decorative circle */}
      <circle cx="240" cy="60" r="70" fill="rgba(255,255,255,0.06)" />
      <circle cx="40" cy="270" r="50" fill="rgba(255,255,255,0.06)" />
      {/* Mindtree wordmark area */}
      <rect
        x="24"
        y="24"
        width="90"
        height="26"
        rx="13"
        fill="rgba(255,255,255,0.15)"
      />
      <text
        x="36"
        y="41"
        fontFamily="Georgia, serif"
        fontSize="11"
        fill="white"
        opacity="0.9"
      >
        Mindtree
      </text>
      {/* NOW HIRING badge */}
      <rect
        x="24"
        y="62"
        width="78"
        height="20"
        rx="10"
        fill="rgba(255,255,255,0.2)"
      />
      <text
        x="36"
        y="76"
        fontFamily="sans-serif"
        fontSize="9"
        fontWeight="bold"
        fill="white"
        letterSpacing="1"
      >
        NOW HIRING
      </text>
      {/* Role title */}
      <foreignObject x="24" y="108" width="232" height="120">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            fontFamily: "Georgia, 'Playfair Display', serif",
            fontSize: '22px',
            fontWeight: '700',
            color: 'white',
            lineHeight: '1.25',
            wordBreak: 'break-word',
          }}
        >
          {title}
        </div>
      </foreignObject>
      {/* Department pill */}
      <rect
        x="24"
        y="252"
        width="100"
        height="22"
        rx="11"
        fill="rgba(255,255,255,0.18)"
      />
      <text
        x="36"
        y="267"
        fontFamily="sans-serif"
        fontSize="9"
        fontWeight="bold"
        fill="white"
        letterSpacing="1"
        opacity="0.9"
      >
        {department.toUpperCase()}
      </text>
      {/* Bottom line */}
      <rect
        x="24"
        y="290"
        width="232"
        height="2"
        rx="1"
        fill="rgba(255,255,255,0.2)"
      />
      <text
        x="24"
        y="310"
        fontFamily="sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,0.5)"
      >
        mindtreenursing.com
      </text>
    </svg>
  );
}

// ─── Small inline icons for job meta / requirements ──────────────
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ─── Page ────────────────────────────────────────────────────────
export default function CareerPage() {
  return (
    <div>
      <main className="career-page">
        {/* ── HERO ── */}
        <section className="career-hero">
          <div className="career-hero-shape-1" />
          <div className="career-hero-shape-2" />
          <div className="career-hero-inner">
            <span className="career-hero-badge">Careers</span>
            <h1 className="career-hero-title">
              Join Our
              <em className="career-hero-em"> Team</em>
            </h1>
            <div className="career-hero-divider">
              <span className="career-divider-line" />
              <span className="career-divider-star">✦</span>
              <span className="career-divider-line" />
            </div>
            <p className="career-hero-intro">
              At Mindtree Nursing Solutions, we believe that great ideas come
              from great people. We are always looking for passionate, creative,
              and driven individuals who want to make an impact and grow with
              us.
            </p>
          </div>
        </section>

        {/* ── WHY JOIN US ── */}
        <section className="career-about">
          <div className="career-content-grid">
            <div className="career-content-left" data-anim="from-left">
              <span className="career-section-label">Why Mindtree?</span>
              <h2 className="career-content-heading">
                A Place to Grow,
                <br />
                Not Just Work
              </h2>
              <div className="career-accent-bar" />
            </div>
            <div className="career-content-right" data-anim="from-right" data-anim-delay="120">
              <p className="career-para">
                If you are someone who enjoys solving problems, learning new
                technologies, and working in a collaborative environment, we
                would love to hear from you. At Mindtree, every team member
                contributes meaningfully to a mission that changes lives —
                helping nurses achieve their dreams abroad.
              </p>
              <p className="career-para">
                We invest in our people through continuous training, a
                supportive culture, and real opportunities to advance. Whether
                you are a fresh graduate or a seasoned professional, there is a
                place for you here.
              </p>
              <div className="career-perks-grid">
                <div className="career-perk">
                  <span className="career-perk-icon">🌱</span>
                  <span className="career-perk-label">Career Growth</span>
                </div>
                <div className="career-perk">
                  <span className="career-perk-icon">🤝</span>
                  <span className="career-perk-label">Team Culture</span>
                </div>
                <div className="career-perk">
                  <span className="career-perk-icon">📚</span>
                  <span className="career-perk-label">Learning & Dev</span>
                </div>
                <div className="career-perk">
                  <span className="career-perk-icon">💡</span>
                  <span className="career-perk-label">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OPEN POSITIONS ── */}
        <section className="career-vacancies">
          <div className="career-vacancies-inner">
            <div className="career-vacancies-header" data-anim="up">
              <span className="career-section-label blue">Now Hiring</span>
              <h2 className="career-vacancies-heading">Open Positions</h2>
              <p className="career-vacancies-sub">
                Explore our current openings. Don&apos;t see the right fit? Send
                us your CV anyway — we&apos;re always growing.
              </p>
            </div>

            {vacancies.length === 0 ? (
              <div className="career-no-vacancies">
                <span className="career-no-icon">📋</span>
                <h3>No openings right now</h3>
                <p>
                  We&apos;re not actively hiring at the moment, but we love
                  connecting with talent early. Send your CV to{' '}
                  <strong>careers@mindtreenursing.com</strong> and we&apos;ll
                  reach out when a matching role opens up.
                </p>
              </div>
            ) : (
              <div className="career-jobs-list">
                {vacancies.map((job, i) => (
                  <div key={job.id} className="career-job-card" data-anim="up" data-anim-delay={i * 100}>
                    {/* ── POSTER COLUMN ── */}
                    <div className="career-job-poster">
                      {job.poster ? (
                        <Image
                          src={job.poster}
                          alt={`${job.title} poster`}
                          fill
                          className="career-poster-img"
                          sizes="400px"
                        />
                      ) : (
                        <PosterPlaceholder
                          department={job.department}
                          title={job.title}
                        />
                      )}
                      <span className="career-job-badge">
                        <span className="career-job-badge-dot" />
                        Now Hiring
                      </span>
                    </div>

                    {/* ── CONTENT COLUMN ── */}
                    <div className="career-job-body">
                      <div className="career-job-title-wrap">
                        <span className="career-job-dept">{job.department}</span>
                        <h3 className="career-job-title">{job.title}</h3>
                      </div>

                      <div className="career-job-meta">
                        <span className="career-job-tag">
                          <IconBriefcase /> {job.type}
                        </span>
                        <span className="career-job-tag">
                          <IconPin /> {job.location}
                        </span>
                        <span className="career-job-tag">
                          <IconClock /> {job.experience}
                        </span>
                      </div>

                      <p className="career-job-desc">{job.description}</p>

                      <div className="career-job-reqs">
                        <span className="career-job-reqs-label">
                          What we&apos;re looking for
                        </span>
                        <ul className="career-job-req-list">
                          {job.requirements.map((req, i) => (
                            <li key={i}>
                              <span className="career-job-req-check">
                                <IconCheck />
                              </span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="career-job-footer">
                        <Link
                          href={`/contact?role=${encodeURIComponent(job.title)}`}
                          className="career-apply-btn"
                        >
                          Apply Now
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            width="16"
                            height="16"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <span className="career-job-foot-note">
                          We usually reply within 3–5 working days
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── DON'T SEE YOUR ROLE — now white/light bg ── */}
        <section className="career-open-apply">
          <div className="career-open-inner">
            <div className="career-open-text" data-anim="from-left">
              <span className="career-open-label">Always Open</span>
              <h2 className="career-open-heading">Don&apos;t See Your Role?</h2>
              <p className="career-open-sub">
                We review every application carefully. If you are talented and
                passionate about what we do, reach out — the right opportunity
                may be just around the corner.
              </p>
            </div>
            <Link href="/contact" className="career-open-btn" data-anim="from-right" data-anim-delay="150">
              Send Your CV
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
