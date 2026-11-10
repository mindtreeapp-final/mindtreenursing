"use client";

import { useEffect, useState } from "react";

// Device-based app-store redirect for the "Explore OSCE Training" button.
// iPhone / iPad  -> Apple App Store
// Android, desktop, and anything else (default) -> Google Play Store
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.mindtreeacademy.app";
const APP_STORE =
  "https://apps.apple.com/us/app/mindtree-nursing/id6816428785";

export default function ExploreOsceButton() {
  // Default to the Play Store (covers Android, desktop, and other devices).
  const [href, setHref] = useState(PLAY_STORE);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      // iPadOS 13+ reports as "MacIntel" but is touch-capable.
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isIOS) setHref(APP_STORE);
  }, []);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="osce-trial__btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 8 16 12 12 16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
      <span>Explore OSCE Training</span>
    </a>
  );
}
