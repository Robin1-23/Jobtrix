import React, { useState } from "react";
import { MapPin, Locate, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { leadService } from "../../services/leadService";

// Strict Indian Mobile Number validator: Exactly 10 digits starting with 6, 7, 8, or 9
export const PHONE_REGEX = /^[6-9]\d{9}$/;

// Location / Area Name validator: 2-80 characters, cannot be only numbers or special chars
export const AREA_REGEX = /^[a-zA-Z0-9\s,.-]{2,80}$/;

export function JobAlertCard() {
  const [areaName, setAreaName] = useState("");
  const [phone, setPhone] = useState("");
  const [locLoading, setLocLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ area: "", phone: "" });
  const [touched, setTouched] = useState({ area: false, phone: false });

  // Real-time phone handler strictly enforcing digits and max 10 chars
  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    // Strip non-digit characters strictly
    const digitsOnly = raw.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);

    if (touched.phone) {
      validatePhone(digitsOnly);
    }
  };

  const validatePhone = (value) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, phone: "WhatsApp number is required." }));
      return false;
    }
    if (!/^[6-9]/.test(value)) {
      setErrors((prev) => ({ ...prev, phone: "Must start with 6, 7, 8, or 9." }));
      return false;
    }
    if (value.length < 10) {
      setErrors((prev) => ({ ...prev, phone: `Enter all 10 digits (${value.length}/10).` }));
      return false;
    }
    if (!PHONE_REGEX.test(value)) {
      setErrors((prev) => ({ ...prev, phone: "Invalid 10-digit mobile number." }));
      return false;
    }
    setErrors((prev) => ({ ...prev, phone: "" }));
    return true;
  };

  const handleAreaChange = (e) => {
    const val = e.target.value;
    setAreaName(val);
    if (touched.area) {
      validateArea(val);
    }
  };

  const validateArea = (value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      setErrors((prev) => ({ ...prev, area: "Area / locality is required." }));
      return false;
    }
    if (trimmed.length < 2) {
      setErrors((prev) => ({ ...prev, area: "Must be at least 2 characters." }));
      return false;
    }
    if (!AREA_REGEX.test(trimmed)) {
      setErrors((prev) => ({ ...prev, area: "Please enter a valid area name." }));
      return false;
    }
    setErrors((prev) => ({ ...prev, area: "" }));
    return true;
  };

  // Auto-detect location using browser Geolocation API & reverse geocoding
  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your device.");
      return;
    }
    setLocLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const detected =
            data.address?.suburb ||
            data.address?.neighbourhood ||
            data.address?.residential ||
            data.address?.city ||
            data.address?.town ||
            data.address?.state_district ||
            "My Area";
          setAreaName(detected);
          setErrors((prev) => ({ ...prev, area: "" }));
        } catch (err) {
          setAreaName("Current Area");
          setErrors((prev) => ({ ...prev, area: "" }));
        } finally {
          setLocLoading(false);
        }
      },
      (err) => {
        setLocLoading(false);
        alert("Please allow location permissions to auto-detect your area, or type your area name manually.");
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ area: true, phone: true });

    const isAreaOk = validateArea(areaName);
    const isPhoneOk = validatePhone(phone);

    if (!isAreaOk || !isPhoneOk) {
      return;
    }

    // Persist to Admin Database
    leadService.saveCandidateLead({
      name: "Area Job Seeker",
      phone,
      role: "Delivery Partner",
      city: areaName.trim(),
      type: "Job Alert",
    });

    setSubmitted(true);
  };

  const isPhoneComplete = PHONE_REGEX.test(phone);

  return (
    <div
      style={{
        background: "#EAA61E",
        borderRadius: 32,
        padding: "clamp(36px, 5vw, 64px) clamp(20px, 4vw, 54px)",
        boxShadow: "0 22px 50px -14px rgba(234, 166, 30, 0.45)",
        position: "relative",
        overflow: "hidden",
        margin: "0 auto",
        maxWidth: 1100,
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        
        {/* Title */}
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 3.8vw, 44px)",
            fontWeight: 700,
            color: "#10192E",
            lineHeight: 1.15,
            margin: "0 0 10px",
            letterSpacing: "-0.015em",
          }}
        >
          Alert me for a job in my area
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.25vw, 17.5px)",
            color: "rgba(16, 25, 46, 0.85)",
            margin: "0 auto 36px",
            fontWeight: 500,
          }}
        >
          Get notified when new jobs match your area.
        </p>

        {submitted ? (
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 999,
              padding: "16px 28px",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <CheckCircle2 size={22} color="#16A34A" strokeWidth={2.4} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 700, color: TOKENS.navy }}>
              Alert set for {areaName}! We will WhatsApp you at +91 {phone} when shifts open up.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 14,
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {/* 1. AREA NAME INPUT (WITH AUTO-DETECT LOCATION BUTTON) */}
              <div style={{ display: "flex", flexDirection: "column", flex: "1 1 240px", maxWidth: 320, textAlign: "left" }}>
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 999,
                    height: 54,
                    padding: "0 16px 0 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                    border: errors.area && touched.area ? "2px solid #DC2626" : "2px solid transparent",
                    transition: "border 0.2s ease",
                  }}
                >
                  <MapPin size={18} color="#94A3B8" strokeWidth={2.2} style={{ flexShrink: 0 }} />
                  <input
                    type="text"
                    required
                    placeholder="Area Name"
                    value={areaName}
                    onChange={handleAreaChange}
                    onBlur={() => {
                      setTouched((p) => ({ ...p, area: true }));
                      validateArea(areaName);
                    }}
                    style={{
                      border: "none",
                      outline: "none",
                      fontSize: 15,
                      color: "#10192E",
                      width: "100%",
                      fontFamily: "'Inter', sans-serif",
                      background: "transparent",
                    }}
                  />
                  <button
                    type="button"
                    onClick={detectLocation}
                    title="Auto-detect current location"
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: locLoading ? "#EAA61E" : "#64748B",
                      transition: "color 0.15s ease",
                      flexShrink: 0,
                    }}
                  >
                    {locLoading ? (
                      <Loader2 size={18} className="jx-interactive-icon" style={{ animation: "spin 1s linear infinite" }} />
                    ) : (
                      <Locate size={18} strokeWidth={2.2} />
                    )}
                  </button>
                </div>
                {errors.area && touched.area && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      color: "#991B1B",
                      fontSize: 12,
                      fontWeight: 600,
                      marginTop: 6,
                      paddingLeft: 16,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <AlertCircle size={13} />
                    <span>{errors.area}</span>
                  </div>
                )}
              </div>

              {/* 2. WHATSAPP NUMBER INPUT (WITH (+91) AND STRICT DIGIT CHECKS) */}
              <div style={{ display: "flex", flexDirection: "column", flex: "1 1 240px", maxWidth: 320, textAlign: "left" }}>
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 999,
                    height: 54,
                    padding: "0 20px",
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                    border: errors.phone && touched.phone ? "2px solid #DC2626" : "2px solid transparent",
                    transition: "border 0.2s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14.5,
                      fontWeight: 600,
                      color: "#64748B",
                      paddingRight: 12,
                      borderRight: "1px solid #E2E8F0",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    (+91)
                  </span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    required
                    placeholder="WhatsApp Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={() => {
                      setTouched((p) => ({ ...p, phone: true }));
                      validatePhone(phone);
                    }}
                    style={{
                      border: "none",
                      outline: "none",
                      fontSize: 15,
                      color: "#10192E",
                      width: "100%",
                      paddingLeft: 12,
                      fontFamily: "'Inter', sans-serif",
                      background: "transparent",
                    }}
                  />
                  {isPhoneComplete && (
                    <CheckCircle2 size={16} color="#16A34A" strokeWidth={2.5} style={{ flexShrink: 0, marginLeft: 6 }} />
                  )}
                </div>
                {errors.phone && touched.phone && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      color: "#991B1B",
                      fontSize: 12,
                      fontWeight: 600,
                      marginTop: 6,
                      paddingLeft: 16,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <AlertCircle size={13} />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>

              {/* 3. SUBMIT PILL BUTTON */}
              <button
                type="submit"
                className="jx-btn"
                style={{
                  background: "#0F172A",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: 999,
                  height: 54,
                  padding: "0 36px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.32)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  flexShrink: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #1E293B 0%, #334155 100%)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(15, 23, 42, 0.42)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0F172A";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(15, 23, 42, 0.32)";
                }}
              >
                <span>SUBMIT</span>
                <span style={{ fontSize: 16, fontWeight: 800 }}>&rarr;</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default JobAlertCard;
