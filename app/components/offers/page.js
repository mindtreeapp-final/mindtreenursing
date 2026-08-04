"use client";

import { useEffect, useRef, useState } from "react";
import "./offers.css";

const defaultOffers = [
  {
    id: 1,
    badge: "15%\nOFF",
    badgeClass: "green",
    title: " Onam Special Offer",
    desc: "15% Off on OSCE and IQN Courses",
    link: "https://forms.zohopublic.in/mindtreenursingsolutions/form/ClientDetails1/formperma/76KIBTp9LCYH_lA6B0jGSwAH8FJ4nmjU8ovh7b6l-tQ",
  },
  /*{
    id: 2,
    badge: "FREE",
    badgeClass: "amber",
    title: "IQN Programme",
    desc: "Guidance for New Zealand nursing registration.",
    link: "https://forms.zohopublic.in/mindtreenursingsolutions/form/ClientDetails1/formperma/76KIBTp9LCYH_lA6B0jGSwAH8FJ4nmjU8ovh7b6l-tQ",
  },
  {
    id: 3,
    badge: "30%\nOFF",
    badgeClass: "pink",
    title: "Mindtree APP",
    desc: "Courses, updates, and support in one app.",
    link: "https://forms.zohopublic.in/mindtreenursingsolutions/form/ClientDetails1/formperma/76KIBTp9LCYH_lA6B0jGSwAH8FJ4nmjU8ovh7b6l-tQ",
  },
  */
];

export default function OffersButton({ offers = defaultOffers }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <div
        className={`offers-backdrop ${open ? "offers-backdrop--open" : ""}`}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className={`offers-panel ${open ? "offers-panel--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="offers-panel__header">
          <span className="offers-panel__heading">
            <span className="offers-panel__title">Current Offers</span>
            <span className="offers-panel__subtitle">Limited-time deals, just for you</span>
          </span>
          <button
            className="offers-panel__close"
            onClick={() => setOpen(false)}
            aria-label="Close offers"
          >
            ✕
          </button>
        </div>

        <div className="offers-panel__list">
          {offers.map((o, i) => (
            <a
              key={o.id}
              className="offer-item"
              href={o.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className={`offer-badge offer-badge--${o.badgeClass}`}>
                {o.badge.split("\n").map((line, idx) => (
                  <span key={idx}>{line}<br /></span>
                ))}
              </div>
              <div className="offer-info">
                <p className="offer-info__title">{o.title}</p>
                <p className="offer-info__desc">{o.desc}</p>
              </div>
              <span className="offer-item__arrow">&#8594;</span>
            </a>
          ))}
        </div>

        <div className="offers-panel__footer">Offers updated regularly</div>
      </div>

      <button
        className="offers-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label="View offers"
        aria-expanded={open}
      >
        <span className="offers-fab__ripple" />
        <span className="offers-fab__ripple offers-fab__ripple--2" />
        <span className="offers-fab__icon-wrap">
          <img
            className="offers-fab__icon"
            src="/favicon-16x16.png"
            alt=""
            width="20"
            height="20"
          />
        </span>
        {offers.length > 0 && (
          <span className="offers-fab__dot">{offers.length}</span>
        )}
        <span className="offers-fab__tooltip">View offers</span>
      </button>
    </>
  );
}