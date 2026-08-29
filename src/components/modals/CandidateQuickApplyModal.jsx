import React, { useState } from "react";
import { X, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Phone } from "lucide-react";
import { leadService } from "../../services/leadService";

// Strict Indian Mobile Number Regex (10 digits starting with 6-9)
const PHONE_REGEX = /^[6-9]\d{9}$/;

export function CandidateQuickApplyModal({ isOpen, onClose, job }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(job?.neighbourhood ? `${job.neighbourhood}, ${job.city}` : (job?.city || ""));
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const targetJobTitle = job?.title || "Delivery Partner";
  const targetCompany = job?.company || "Jobtrix Partner";

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Please enter your full name.";

    if (!phone) {
      errs.phone = "Mobile number is required.";
    } else if (!/^[6-9]/.test(phone)) {
      errs.phone = "Must start with 6, 7, 8, or 9.";
    } else if (phone.length < 10) {
      errs.phone = `Enter all 10 digits (${phone.length}/10).`;
    } else if (!PHONE_REGEX.test(phone)) {
      errs.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!city.trim()) errs.city = "Please specify your city or area.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
    if (touched.phone) {
      if (!digits) setErrors((p) => ({ ...p, phone: "Mobile number is required." }));
      else if (!/^[6-9]/.test(digits)) setErrors((p) => ({ ...p, phone: "Must start with 6, 7, 8, or 9." }));
      else if (digits.length < 10) setErrors((p) => ({ ...p, phone: `Enter all 10 digits (${digits.length}/10).` }));
      else setErrors((p) => ({ ...p, phone: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, city: true });

    if (!validate()) return;

    // 1. SAVE PERMANENTLY TO ADMIN DATABASE FIRST (ZERO DATA LOSS)
    leadService.saveCandidateLead({
      name: name.trim(),
      phone: phone.trim(),
      role: targetJobTitle,
      company: targetCompany,
      city: city.trim(),
      type: "Direct Application",
    });

    setSubmitted(true);

    // 2. Open WhatsApp in new tab after recording candidate
    const waText = encodeURIComponent(
      `Hi Jobtrix, my name is ${name.trim()}. I just applied for the ${targetJobTitle} role at ${city.trim()} via Jobtrix. Please share my joining details.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919991239374?text=${waText}`, "_blank");
    }, 400);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setErrors({});
    setTouched({});
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(10, 15, 29, 0.78)",
        backdropFilter: "blur(6px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 12px",
        overflowY: "auto",
      }}
      onClick={handleClose}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 24,
          maxWidth: 480,
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 30px 70px -15px rgba(0, 0, 0, 0.4)",
          position: "relative",
          margin: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Dark Header */}
        <div
          style={{
            background: "#080C16",
            padding: "22px 24px 20px",
            color: "#FFFFFF",
            position: "relative",
          }}
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              background: "rgba(255, 255, 255, 0.12)",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#FFFFFF",
            }}
          >
            <X size={17} />
          </button>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(34, 197, 94, 0.12)",
              border: "1px solid rgba(34, 197, 94, 0.35)",
              borderRadius: 999,
              padding: "3px 10px",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10.5,
              fontWeight: 700,
              color: "#34D399",
              letterSpacing: "0.06em",
              marginBottom: 10,
            }}
          >
            <ShieldCheck size={12} />
            <span>INSTANT CANDIDATE ONBOARDING</span>
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 2.8vw, 24px)",
              fontWeight: 800,
              margin: "0 0 4px",
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
            }}
          >
            Apply for <span style={{ color: "#38BDF8" }}>{targetJobTitle}</span>
          </h2>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", margin: 0 }}>
            Share your mobile number to lock your guaranteed joining slot.
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "20px 24px 22px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "20px 8px" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "#DCFCE7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                }}
              >
                <CheckCircle2 size={32} color="#16A34A" />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "#10192E", margin: "0 0 6px" }}>
                Application Saved Successfully!
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: "#64748B", lineHeight: 1.5, margin: "0 auto 20px" }}>
                Your contact <strong>+91 {phone}</strong> is registered with our recruiter desk. We are redirecting you to WhatsApp for immediate slot confirmation.
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="jx-btn"
                style={{
                  background: "#581C87",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 999,
                  padding: "11px 26px",
                  fontSize: 13.5,
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer",
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* CANDIDATE FULL NAME */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, color: "#10192E" }}>
                    YOUR FULL NAME
                  </label>
                  <span style={{ fontSize: 10.5, color: "#0284C7", fontWeight: 700 }}>* REQUIRED</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (touched.name) setErrors((p) => ({ ...p, name: "" }));
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border: errors.name && touched.name ? "1.5px solid #DC2626" : "1px solid #E2E8F0",
                    borderRadius: 10,
                    padding: "11px 14px",
                    fontSize: 14,
                    color: "#10192E",
                    outline: "none",
                    background: "#FAFAFA",
                  }}
                />
                {errors.name && touched.name && (
                  <div style={{ color: "#DC2626", fontSize: 11.5, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* WHATSAPP MOBILE NUMBER */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, color: "#10192E" }}>
                    WHATSAPP MOBILE NUMBER (10 DIGITS)
                  </label>
                  <span style={{ fontSize: 10.5, color: "#0284C7", fontWeight: 700 }}>* EXACTLY 10 DIGITS</span>
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    type="tel"
                    placeholder="e.g. 9899818241"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      border: errors.phone && touched.phone ? "1.5px solid #DC2626" : "1px solid #E2E8F0",
                      borderRadius: 10,
                      padding: "11px 14px",
                      fontSize: 14,
                      color: "#10192E",
                      outline: "none",
                      background: "#FAFAFA",
                    }}
                  />
                  <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", fontSize: 11, color: "#94A3B8" }}>
                    {phone.length}/10
                  </span>
                </div>
                {errors.phone && touched.phone && (
                  <div style={{ color: "#DC2626", fontSize: 11.5, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>

              {/* LOCATION / CITY */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, color: "#10192E" }}>
                    YOUR CITY / CURRENT AREA
                  </label>
                  <span style={{ fontSize: 10.5, color: "#0284C7", fontWeight: 700 }}>* REQUIRED</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Mumbai • Andheri East"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    if (touched.city) setErrors((p) => ({ ...p, city: "" }));
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, city: true }))}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border: errors.city && touched.city ? "1.5px solid #DC2626" : "1px solid #E2E8F0",
                    borderRadius: 10,
                    padding: "11px 14px",
                    fontSize: 14,
                    color: "#10192E",
                    outline: "none",
                    background: "#FAFAFA",
                  }}
                />
                {errors.city && touched.city && (
                  <div style={{ color: "#DC2626", fontSize: 11.5, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} />
                    <span>{errors.city}</span>
                  </div>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="jx-btn"
                style={{
                  background: "linear-gradient(90deg, #581C87 0%, #7C3AED 100%)",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 12,
                  padding: "14px 20px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14.5,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 8px 24px -4px rgba(124, 58, 237, 0.4)",
                  marginTop: 6,
                }}
              >
                <span>Save Application &amp; Connect on WhatsApp</span>
                <ArrowRight size={16} strokeWidth={2.4} />
              </button>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#64748B", fontSize: 11 }}>
                <ShieldCheck size={13} color="#16A34A" />
                <span>Saved to Jobtrix Candidate Telemetry Database</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateQuickApplyModal;
