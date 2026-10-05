"use client";

import { useEffect, useState } from "react";
import "./osce-popup.css";

// "Have Questions?" promo banner shown as a popup on first load of the OSCE
// course page. Shows once per browser session. Clicking the banner goes to the
// contact page (change POPUP_LINK below to point elsewhere, e.g. a form URL).
const POPUP_LINK = "https://zfrmz.in/YNJpcCxz7Qlk3nbaAK3b";

export default function OscePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("oscePopupShown")) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("oscePopupShown", "1");
    }, 700);

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

  return (
    <div
      className="osce-popup"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Have questions? Talk to our nursing experts"
    >
      <div className="osce-popup__box" onClick={(e) => e.stopPropagation()}>
        <button
          className="osce-popup__close"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ✕
        </button>
        <a className="osce-popup__link" href={POPUP_LINK}>
          <img
            className="osce-popup__img"
            src="/osce-popup.jpeg"
            alt="Have questions? Talk to our nursing experts for free — Register now"
          />
          {/* Animated typing dots overlaid on the chat bubble in the banner.
              The cover hides the static printed dots; the three dots animate. */}
          <span className="osce-typing" aria-hidden="true">
            <span className="osce-typing__cover" />
            <span className="osce-typing__dot" />
            <span className="osce-typing__dot" />
            <span className="osce-typing__dot" />
          </span>
        </a>
      </div>
    </div>
  );
}
