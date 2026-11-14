"use client";

import { useRef, useState } from "react";

// Native lead form that posts to the Zoho "Join Today" form so submissions
// still land in Zoho, while the fields are styled natively on the page.
// Field names come from the Zoho form: SingleLine (Name), PhoneNumber, Dropdown1 (Course).
const SUBMIT_URL =
  "https://forms.zohopublic.in/mindtreenursingsolutions/form/JoinToday/formperma/S0YftSvInUbrCXWhrKBMmg00kYxPhpbAcCSy1-0JMSM/htmlRecords/submit";

const COURSES = [
  "OET",
  "IQN",
  "OSCE",
  "Therapeutic Communication",
  "CV Preparation",
  "Full Process",
];

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const submitting = useRef(false);

  if (sent) {
    return (
      <div className="bnc-form-card bnc-form-card--done" id="enquire">
        <img className="bnc-done-logo" src="/logo1.png" alt="Mindtree Nursing Solutions" />
        <h2 className="bnc-form-heading">Thank you!</h2>
        <p className="bnc-form-note">
          Your details have been received. Our nursing experts will call you back shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bnc-form-card" id="enquire">
      <h2 className="bnc-form-heading">Let us lead you to your milestone</h2>

      <form
        className="bnc-form"
        action={SUBMIT_URL}
        method="POST"
        target="bnc_zoho_frame"
        onSubmit={() => {
          submitting.current = true;
        }}
      >
        <div className="bnc-form-row">
          <input
            className="bnc-input"
            type="text"
            name="SingleLine"
            placeholder="Name"
            aria-label="Name"
            required
            maxLength={255}
          />
          <input
            className="bnc-input"
            type="tel"
            name="PhoneNumber"
            placeholder="Phone"
            aria-label="Phone"
            required
            maxLength={20}
          />
        </div>

        <select className="bnc-input bnc-select" name="Dropdown1" aria-label="Select your Course" required defaultValue="">
          <option value="" disabled>Select your Course</option>
          {COURSES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Zoho hidden fields */}
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        <button type="submit" className="bnc-submit">Speak with an Advisor</button>
      </form>

      <div className="bnc-form-trust">
        <span><b>✓</b> No cost</span>
        <span><b>✓</b> No obligation</span>
        <span><b>✓</b> Reply within 24 hrs</span>
      </div>

      {/* Hidden target so the page doesn't navigate away on submit */}
      <iframe
        name="bnc_zoho_frame"
        title="form submission"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitting.current) setSent(true);
        }}
      />
    </div>
  );
}
