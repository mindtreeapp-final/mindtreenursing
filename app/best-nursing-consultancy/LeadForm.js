"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import "./best-nursing-consultancy.css";

// Native-styled form wired to Zoho's official HTML embed so submissions save to
// Zoho. Field names, validation (zf_ValidateAndSubmit from /zoho-validation.js)
// and the action URL come from Zoho's "HTML & CSS" embed for the Join Today form.
const ACTION_URL =
  "https://forms.zohopublic.in/mindtreenursingsolutions/form/JoinToday/formperma/i-A6-HclATNPeEHThi0rnpfgKGVR6KQfNSVtzAaV42s/htmlRecords/submit";

const COURSES = ["OET", "IQN", "OSCE", "Therapeutic Communication", "Full Process", "CV Preparation"];

function setZohoGlobals() {
  try {
    window.zf_MandArray = [];
    window.zf_FieldArray = ["SingleLine", "PhoneNumber_countrycode", "Dropdown1"];
    window.isSalesIQIntegrationEnabled = false;
    window.salesIQFieldsArray = [];
    if (typeof window.zf_SetDateAndMonthRegexBasedOnDateFormate === "function") {
      const a = window.zf_SetDateAndMonthRegexBasedOnDateFormate("dd-MMM-yyyy");
      window.zf_DateRegex = new RegExp(a[0]);
      window.zf_MonthYearRegex = new RegExp(a[1]);
    }
  } catch (e) {}
}

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const submitting = useRef(false);

  useEffect(() => {
    setZohoGlobals();
  }, []);

  const handleSubmit = (e) => {
    try {
      document.charset = "UTF-8";
    } catch (err) {}
    setZohoGlobals();
    let ok = true;
    try {
      if (typeof window.zf_ValidateAndSubmit === "function") {
        ok = window.zf_ValidateAndSubmit();
      }
    } catch (err) {
      // If Zoho's validator errors, still let the form submit (Zoho re-validates server-side).
      ok = true;
    }
    if (!ok) {
      e.preventDefault();
      return;
    }
    submitting.current = true;
  };

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
      <Script src="/zoho-validation.js" strategy="afterInteractive" onLoad={setZohoGlobals} />

      <h2 className="bnc-form-heading">Let us lead you to your milestone</h2>

      <form
        name="form"
        id="form"
        className="bnc-form"
        action={ACTION_URL}
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        target="zoho_hidden"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="zf_referrer_name" defaultValue="" />
        <input type="hidden" name="zf_redirect_url" defaultValue="" />
        <input type="hidden" name="zc_gad" defaultValue="" />

        <div className="bnc-form-row">
          <div className="bnc-field">
            <input
              className="bnc-input"
              type="text"
              name="SingleLine"
              checktype="c1"
              maxLength={255}
              fieldtype="1"
              placeholder="Name"
              aria-label="Name"
              required
            />
            <p id="SingleLine_error" className="bnc-ferr" style={{ display: "none" }}>Invalid value</p>
          </div>

          <div className="bnc-field">
            <input
              className="bnc-input"
              type="text"
              name="PhoneNumber_countrycode"
              compname="PhoneNumber"
              checktype="c7"
              maxLength={20}
              fieldtype="11"
              valtype="number"
              phoneformat="1"
              iscountrycodeenabled="false"
              phoneformattype="1"
              placeholder="Phone"
              aria-label="Phone"
              required
            />
            <p id="PhoneNumber_error" className="bnc-ferr" style={{ display: "none" }}>Invalid value</p>
          </div>
        </div>

        <div className="bnc-field">
          <select
            className="bnc-input bnc-select"
            name="Dropdown1"
            checktype="c1"
            aria-label="Select your Course"
            required
            defaultValue=""
          >
            <option value="" disabled>Select your Course</option>
            {COURSES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <p id="Dropdown1_error" className="bnc-ferr" style={{ display: "none" }}>Invalid value</p>
        </div>

        <button type="submit" className="bnc-submit">Speak with an Advisor</button>
      </form>

      <div className="bnc-form-trust">
        <span><b>✓</b> No cost</span>
        <span><b>✓</b> No obligation</span>
        <span><b>✓</b> Reply within 24 hrs</span>
      </div>

      {/* Hidden target so the page doesn't navigate away on submit */}
      <iframe
        name="zoho_hidden"
        title="form submission"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitting.current) setSent(true);
        }}
      />
    </div>
  );
}
