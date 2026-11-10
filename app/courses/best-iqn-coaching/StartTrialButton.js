"use client";

import { useEffect, useState } from "react";

// Device-based app-store redirect for the "Start Free Trial" button.
// iPhone / iPad  -> Apple App Store
// Android, desktop, and anything else (default) -> Google Play Store
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.mindtreeacademy.app";
const APP_STORE =
  "https://apps.apple.com/us/app/mindtree-nursing/id6816428785";

export default function StartTrialButton() {
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
    <a href={href} target="_blank" rel="noopener noreferrer" className="iqn-trial__btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
      <span>Start Free Trial</span>
    </a>
  );
}
