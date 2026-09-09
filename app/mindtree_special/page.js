import "./special.css";

const REGISTRATION_URL = "https://zfrmz.in/BUPq4Egzixmcq3ITNWBg";

export const metadata = {
  title: "Exclusive EMNF Offer | Mindtree Nursing Solutions",
  description:
    "An exclusive offer for EMNF members from Mindtree Nursing Solutions — 1000 NZD off for 5 lucky winners and 100 NZD gift vouchers for 10 lucky winners. Submit your Expression of Interest before 25/09/2026.",
  keywords: [
    "EMNF offer",
    "Mindtree Nursing Solutions",
    "New Zealand Registered Nurse",
    "Australian Registered Nurse",
    "nursing offer",
    "Expression of Interest",
  ],
};

const PRIZES = [
  {
    amount: "1000",
    unit: "NZD",
    label: "Off on Service Charge",
    winners: "5 Lucky Winners",
    variant: "gold",
    featured: true,
    termsTitle: "How to redeem",
    items: ["1000 NZD off on our service charge"],
  },
  {
    amount: "100",
    unit: "NZD",
    label: "Gift Voucher",
    winners: "10 Lucky Winners",
    variant: "blue",
    featured: false,
    termsTitle: "Redeemable on",
    items: [
      "IQN Training",
      "OSCE Training",
      "Flight Ticket Booking",
      "CGFNS Documentation",
    ],
  },
];

export default function MindtreeSpecialPage() {
  return (
    <main className="ms-page">
      {/* ── HERO ── */}
      <section className="ms-hero">
        <div className="ms-hero-shape ms-hero-shape-1" />
        <div className="ms-hero-shape ms-hero-shape-2" />
        <div className="ms-hero-sparkle ms-hero-sparkle-1">✦</div>
        <div className="ms-hero-sparkle ms-hero-sparkle-2">✦</div>
        <div className="ms-hero-sparkle ms-hero-sparkle-3">✦</div>

        <div className="ms-hero-inner">
          <span className="ms-badge">Exclusive Offer</span>
          <h1 className="ms-title">
            Only for <span className="ms-title-gold">EMNF</span> Members
          </h1>
          <div className="ms-divider">
            <span className="ms-divider-line" />
            <span className="ms-divider-star">✦</span>
            <span className="ms-divider-line" />
          </div>
          <p className="ms-hero-sub">
            Presented by <strong>Mindtree Nursing Solutions</strong>
          </p>
        </div>
      </section>

      {/* ── PRIZES ── */}
      <section className="ms-prizes">
        <div className="ms-section-head" data-anim="up">
          <span className="ms-label">What You Could Win</span>
          <h2 className="ms-heading">Two ways to win big</h2>
          <div className="ms-accent-bar" />
        </div>

        <div className="ms-prize-grid">
          {PRIZES.map((p, i) => (
            <div
              className={`ms-gift ms-gift--${p.variant}`}
              key={p.label}
              data-anim="scale-up"
              data-anim-delay={i * 120}
            >
              <span className="ms-gift-shine" aria-hidden="true" />
              {p.featured && <span className="ms-gift-flag">Grand Prize</span>}

              <div className="ms-gift-top">
                <span className="ms-gift-brand">
                  Mindtree<span className="ms-gift-brand-sub">Nursing Solutions</span>
                </span>
                <span className="ms-gift-type">Gift Card</span>
              </div>

              <div className="ms-gift-mid">
                <span className="ms-gift-chip" aria-hidden="true" />
                <div className="ms-gift-value">
                  <div className="ms-gift-amount">
                    <span className="ms-gift-num">{p.amount}</span>
                    <span className="ms-gift-unit">{p.unit}</span>
                  </div>
                  <span className="ms-gift-sub">{p.label}</span>
                </div>
              </div>

              <div className="ms-gift-bottom">
                <span className="ms-gift-winners">
                  <span className="ms-gift-star" aria-hidden="true">★</span>
                  {p.winners}
                </span>
                <span className="ms-gift-mark" aria-hidden="true">✦</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REDEEM DETAILS ── */}
      <section className="ms-redeem">
        <div className="ms-section-head" data-anim="up">
          <span className="ms-label">The Details</span>
          <h2 className="ms-heading">What your gift card unlocks</h2>
          <div className="ms-accent-bar" />
        </div>

        <div className="ms-redeem-grid">
          {PRIZES.map((p, i) => (
            <div
              className={`ms-redeem-card ms-redeem-card--${p.variant}`}
              key={p.label}
              data-anim="up"
              data-anim-delay={i * 110}
            >
              <div className="ms-redeem-head">
                <span className="ms-redeem-amount">
                  {p.amount} <span className="ms-redeem-unit">{p.unit}</span>
                </span>
                <span className="ms-redeem-title">{p.termsTitle}</span>
              </div>
              <ul className="ms-redeem-list">
                {p.items.map((it) => (
                  <li className="ms-redeem-item" key={it}>
                    <span className="ms-redeem-check" aria-hidden="true">✓</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ms-redeem-cta" data-anim="up">
          <a
            className="ms-cta-btn ms-cta-btn--lg"
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
            <span className="ms-cta-arrow" aria-hidden="true">→</span>
          </a>
          <span className="ms-redeem-note">Free to enter · Exclusively for EMNF members</span>
        </div>
      </section>

      {/* ── EOI / QR CTA ── */}
      <section className="ms-eoi">
        <div className="ms-eoi-shape" />
        <div className="ms-eoi-inner">
          <div className="ms-eoi-text" data-anim="from-left">
            <span className="ms-label light">Register Now</span>
            <h2 className="ms-eoi-heading">
              Submit your Expression&nbsp;of&nbsp;Interest
            </h2>
            <p className="ms-eoi-desc">
              Scan the QR code now to register your interest and enter the draw.
            </p>

            <div className="ms-eoi-actions">
              <a
                className="ms-cta-btn"
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
                <span className="ms-cta-arrow" aria-hidden="true">→</span>
              </a>

              <div className="ms-deadline">
                <span className="ms-deadline-icon" aria-hidden="true">⏳</span>
                <span className="ms-deadline-text">
                  Registration closes
                  <strong> 25 September 2026</strong>
                </span>
              </div>
            </div>

            <p className="ms-eoi-micro">Exclusively for EMNF members.</p>
          </div>

          <div className="ms-qr-wrap" data-anim="from-right" data-anim-delay="120">
            <div className="ms-qr-outer">
              <span className="ms-qr-glow" aria-hidden="true" />
              <a
                className="ms-qr-frame"
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the Expression of Interest registration form"
              >
                <img
                  className="ms-qr-img"
                  src="/mindtree-special-qr.png"
                  alt="Scan to submit your Expression of Interest"
                  width="190"
                  height="190"
                />
              </a>
              <span className="ms-qr-corner ms-qr-corner--tl" aria-hidden="true" />
              <span className="ms-qr-corner ms-qr-corner--tr" aria-hidden="true" />
              <span className="ms-qr-corner ms-qr-corner--bl" aria-hidden="true" />
              <span className="ms-qr-corner ms-qr-corner--br" aria-hidden="true" />
            </div>
            <span className="ms-scan-pill">
              <span className="ms-scan-dot" aria-hidden="true" />
              Scan or tap to register
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
