"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "./onam.css";

// Shows the Onam promo image (public/ONAM.jpeg) as a popup when a visitor
// lands on the home page ("/"). Shows once per browser session so it does not
// re-open every time the user navigates back to Home.
export default function OnamPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (pathname !== "/") return;
    if (sessionStorage.getItem("onamPopupShown")) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("onamPopupShown", "1");
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Animate the popup shrinking into the Offers (Maveli) floating icon, then
  // unmount. Measures the icon's live position so it works on any screen size.
  const handleClose = () => {
    if (closing) return;
    const box = boxRef.current;
    const fab = document.querySelector(".offers-fab");

    if (box && fab) {
      const b = box.getBoundingClientRect();
      const f = fab.getBoundingClientRect();
      const dx = f.left + f.width / 2 - (b.left + b.width / 2);
      const dy = f.top + f.height / 2 - (b.top + b.height / 2);
      box.style.setProperty("--onam-dx", `${dx}px`);
      box.style.setProperty("--onam-dy", `${dy}px`);
    }

    setClosing(true);
    // As the image reaches the icon (~end of the 0.66s flight), make the icon
    // "catch" it with a pop, then unmount.
    setTimeout(() => {
      document.body.classList.remove("onam-active");
      document.body.classList.add("onam-catching");
    }, 520);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 680);
    setTimeout(() => {
      document.body.classList.remove("onam-catching");
    }, 1100);
  };

  // Spotlight the offers icon (lift above backdrop + glow) while open.
  useEffect(() => {
    if (!open) return;

    document.body.classList.add("onam-active");
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.classList.remove("onam-active");
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`onam-popup${closing ? " onam-popup--closing" : ""}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Onam special offer"
    >
      <div
        ref={boxRef}
        className={`onam-popup__box${closing ? " onam-popup__box--closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="onam-popup__close"
          onClick={handleClose}
          aria-label="Close"
        >
          ✕
        </button>
        <img
          className="onam-popup__img"
          src="/ONAM.jpeg"
          alt="Onam Special Offer"
        />
      </div>
    </div>
  );
}
