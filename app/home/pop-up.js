"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./pop-up.css";

// Home-page popup. Appears a few seconds after the page loads, once per
// browser session. Leads visitors to the Best Nursing Consultancy page.
export default function HomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("homePopupShown")) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("homePopupShown", "1");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);

  return (
    <div
      className="hpop"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Confused about where to start?"
    >
      <div className="hpop__box" onClick={(e) => e.stopPropagation()}>
        <button className="hpop__close" onClick={close} aria-label="Close">✕</button>

        {/* Left — message */}
        <div className="hpop__content">
          <span className="hpop__badge">Mindtree Nursing Solutions</span>
          <h2 className="hpop__title">
            Confused About Where to Start?
            <span className="hpop__title-accent">Let Us Lead the Way!</span>
          </h2>
          <p className="hpop__text">
            Expert guidance for IQN training, OSCE coaching, nursing registration and your overseas
            nursing career — in India and New Zealand.
          </p>
          <Link href="/best-nursing-consultancy" className="hpop__btn" onClick={close}>
            Get Started <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right — image */}
        <div className="hpop__media">
          <img
            src="/box-img/best-consuitancy.png"
            alt="Best nursing consultancy — Mindtree Nursing Solutions"
            className="hpop__img"
          />
        </div>
      </div>
    </div>
  );
}
