import React, { useState } from "react";
import { X, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { leadService } from "../../services/leadService";

// Strict validation patterns
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function EmployerApplicationModal({ isOpen, onClose, initialRole = "", initialPhone = "" }) {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState(initialPhone || "");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(initialRole || "Delivery Riders (2-Wheeler / EV)");
  const [customRole, setCustomRole] = useState("");
  const [workersCount, setWorkersCount] = useState("15 - 50 Workers (Fast Scale)");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialPhone) {
      setPhone(initialPhone);
    }
  }, [initialPhone]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!companyName.trim()) errs.companyName = "Company name is required.";
    if (!contactName.trim()) errs.contactName = "Contact person name is required.";
    
    // Strict Phone
    if (!phone) {
      errs.phone = "Mobile number is required.";
    } else if (!/^[6-9]/.test(phone)) {
      errs.phone = "Must start with 6, 7, 8, or 9.";
    } else if (phone.length < 10) {
      errs.phone = `Enter all 10 digits (${phone.length}/10).`;
    } else if (!PHONE_REGEX.test(phone)) {
      errs.phone = "Enter a valid 10-digit mobile number.";
    }

    // Strict Email
    const cleanEmail = email.trim();
    if (!cleanEmail) {
      errs.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(cleanEmail)) {
      errs.email = "Enter a valid official email address.";
    }

    if (!city.trim()) errs.city = "City / location is required.";

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

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (touched.email) {
      if (!val.trim()) setErrors((p) => ({ ...p, email: "Email address is required." }));
      else if (!EMAIL_REGEX.test(val.trim())) setErrors((p) => ({ ...p, email: "Enter a valid official email address." }));
      else setErrors((p) => ({ ...p, email: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      companyName: true,
      contactName: true,
      phone: true,
      email: true,
      city: true,
    });

    if (!validate()) return;

    const finalRole = role === "Other" ? (customRole.trim() || "Other Requirement") : role;

    // Save lead to persistent service
    leadService.saveEmployerLead({
      companyName,
      contactPerson: contactName,
      phone,
      email: email.trim(),
      role: finalRole,
      workersCount,
      city,
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCompanyName("");
    setContactName("");
    setPhone("");
    setEmail("");
    setCity("");
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
      onClick={onClose}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 24,
          maxWidth: 520,
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 30px 70px -15px rgba(0, 0, 0, 0.4)",
          position: "relative",
          margin: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. TOP DARK HEADER (MATCHING SCREENSHOT) */}
        <div
          style={{
            background: "#080C16",
            padding: "24px 24px 22px",
            color: "#FFFFFF",
            position: "relative",
          }}
        >
          {/* Close button in circular dark pill */}
          <button
            type="button"
            onClick={onClose}
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
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.22)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)")}
          >
            <X size={17} />
          </button>

          {/* Top Pill Tag Matching Screenshot */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(34, 197, 94, 0.12)",
              border: "1px solid rgba(34, 197, 94, 0.35)",
              borderRadius: 999,
              padding: "4px 12px",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              fontWeight: 700,
              color: "#34D399",
              letterSpacing: "0.06em",
              marginBottom: 12,
            }}
          >
            <ShieldCheck size={13} />
            <span>VERIFIED WORKFORCE HIRING</span>
          </div>

          {/* Headline Matching Screenshot */}
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(22px, 3.2vw, 27px)",
              fontWeight: 800,
              margin: "0 0 6px",
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
            }}
          >
            Hire Workforce with <span style={{ color: "#38BDF8" }}>Jobtrix</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "#94A3B8",
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            Book your 1-on-1 workforce staffing session directly with Senior Workforce Leads.
          </p>
        </div>

        {/* 2. BODY CONTENT */}
        <div style={{ padding: "22px 24px 24px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "24px 8px" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "#DCFCE7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <CheckCircle2 size={32} color="#16A34A" />
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 21,
                  fontWeight: 700,
                  color: "#10192E",
                  margin: "0 0 8px",
                }}
              >
                Hiring Request Received!
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#64748B",
                  lineHeight: 1.55,
                  maxWidth: 380,
                  margin: "0 auto 24px",
                }}
              >
                Thank you, <strong>{contactName}</strong> from <strong>{companyName}</strong>. Your requirement for {workersCount} {role} has been saved to the database.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="jx-btn"
                style={{
                  background: "#581C87",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 999,
                  padding: "12px 28px",
                  fontSize: 14,
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
              {/* COMPANY NAME */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.05em", color: "#10192E" }}>
                    COMPANY / BUSINESS NAME
                  </label>
                  <span style={{ fontSize: 10.5, color: "#0284C7", fontWeight: 700, letterSpacing: "0.04em" }}>* REQUIRED</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Zepto Hub / Quick Commerce Pvt Ltd"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    if (touched.companyName) setErrors((p) => ({ ...p, companyName: "" }));
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, companyName: true }))}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border: errors.companyName && touched.companyName ? "1.5px solid #DC2626" : "1px solid #E2E8F0",
                    borderRadius: 10,
                    padding: "11px 14px",
                    fontSize: 14,
                    color: "#10192E",
                    outline: "none",
                    fontFamily: "'Inter', sans-serif",
                    background: "#FAFAFA",
                  }}
                />
                {errors.companyName && touched.companyName && (
                  <div style={{ color: "#DC2626", fontSize: 11.5, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} />
                    <span>{errors.companyName}</span>
                  </div>
                )}
              </div>

              {/* CONTACT PERSON */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.05em", color: "#10192E" }}>
                    CONTACT PERSON FULL NAME
                  </label>
                  <span style={{ fontSize: 10.5, color: "#0284C7", fontWeight: 700, letterSpacing: "0.04em" }}>* REQUIRED</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={contactName}
                  onChange={(e) => {
                    setContactName(e.target.value);
                    if (touched.contactName) setErrors((p) => ({ ...p, contactName: "" }));
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, contactName: true }))}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border: errors.contactName && touched.contactName ? "1.5px solid #DC2626" : "1px solid #E2E8F0",
                    borderRadius: 10,
                    padding: "11px 14px",
                    fontSize: 14,
                    color: "#10192E",
                    outline: "none",
                    fontFamily: "'Inter', sans-serif",
                    background: "#FAFAFA",
                  }}
                />
                {errors.contactName && touched.contactName && (
                  <div style={{ color: "#DC2626", fontSize: 11.5, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} />
                    <span>{errors.contactName}</span>
                  </div>
                )}
              </div>

              {/* MOBILE NUMBER */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.05em", color: "#10192E" }}>
                    MOBILE NUMBER (10 DIGITS)
                  </label>
                  <span style={{ fontSize: 10.5, color: "#0284C7", fontWeight: 700, letterSpacing: "0.04em" }}>* EXACTLY 10 DIGITS</span>
                </div>
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
                    fontFamily: "'Inter', sans-serif",
                    background: "#FAFAFA",
                  }}
                />
                {errors.phone && touched.phone && (
                  <div style={{ color: "#DC2626", fontSize: 11.5, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>

              {/* EMAIL ADDRESS */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.05em", color: "#10192E" }}>
                    EMAIL ADDRESS
                  </label>
                  <span style={{ fontSize: 10.5, color: "#0284C7", fontWeight: 700, letterSpacing: "0.04em" }}>* VALID EMAIL REQUIRED</span>
                </div>
                <input
                  type="email"
                  placeholder="e.g. rahul.sharma@company.com"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border: errors.email && touched.email ? "1.5px solid #DC2626" : "1px solid #E2E8F0",
                    borderRadius: 10,
                    padding: "11px 14px",
                    fontSize: 14,
                    color: "#10192E",
                    outline: "none",
                    fontFamily: "'Inter', sans-serif",
                    background: "#FAFAFA",
                  }}
                />
                {errors.email && touched.email && (
                  <div style={{ color: "#DC2626", fontSize: 11.5, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={12} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* TARGET ROLE & WORKERS COUNT (ROW) */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.05em", color: "#10192E", marginBottom: 5 }}>
                    WORKFORCE ROLE
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      border: "1px solid #E2E8F0",
                      borderRadius: 10,
                      padding: "11px 10px",
                      fontSize: 13,
                      color: "#10192E",
                      outline: "none",
                      fontFamily: "'Inter', sans-serif",
                      background: "#FAFAFA",
                      cursor: "pointer",
                    }}
                  >
                    <option value="Delivery Riders (2W/EV)">Delivery Riders (2W/EV)</option>
                    <option value="Store Pickers & Packers">Store Pickers & Packers</option>
                    <option value="EV Fleet Drivers (4W)">EV Fleet Drivers (4W)</option>
                    <option value="Bike Taxi Captains">Bike Taxi Captains</option>
                    <option value="Mini-Truck / Porter Drivers">Mini-Truck / Porter Drivers</option>
                    <option value="Store Operations">Store Operations</option>
                    <option value="Maid & Housekeeping">Maid & Housekeeping</option>
                    <option value="Professional Women">Professional Women</option>
                    <option value="Other">Other / Custom Role</option>
                  </select>
                  {role === "Other" && (
                    <div style={{ marginTop: 8 }}>
                      <input
                        type="text"
                        placeholder="Specify custom role (e.g. Cook, Security, Nanny)..."
                        value={customRole}
                        onChange={(e) => setCustomRole(e.target.value)}
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          border: "1px solid #0284C7",
                          borderRadius: 8,
                          padding: "8px 12px",
                          fontSize: 12.5,
                          color: "#10192E",
                          outline: "none",
                          fontFamily: "'Inter', sans-serif",
                          background: "#FFFFFF",
                        }}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.05em", color: "#10192E", marginBottom: 5 }}>
                    WORKFORCE COUNT
                  </label>
                  <select
                    value={workersCount}
                    onChange={(e) => setWorkersCount(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      border: "1px solid #E2E8F0",
                      borderRadius: 10,
                      padding: "11px 10px",
                      fontSize: 13,
                      color: "#10192E",
                      outline: "none",
                      fontFamily: "'Inter', sans-serif",
                      background: "#FAFAFA",
                      cursor: "pointer",
                    }}
                  >
                    <option value="5 - 15 Workers">5 - 15 Workers</option>
                    <option value="15 - 50 Workers">15 - 50 Workers</option>
                    <option value="50 - 150 Workers">50 - 150 Workers</option>
                    <option value="150+ Enterprise">150+ Enterprise Scale</option>
                  </select>
                </div>
              </div>

              {/* WORK LOCATION / CITY */}
              <div>
                <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.05em", color: "#10192E", marginBottom: 5 }}>
                  DEPLOYMENT CITY / AREA
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai • Andheri & Dadar or Delhi NCR"
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
                    fontFamily: "'Inter', sans-serif",
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

              {/* SUBMIT BUTTON (PURPLE PILL MATCHING SCREENSHOT) */}
              <button
                type="submit"
                className="jx-btn"
                style={{
                  background: "linear-gradient(90deg, #6366F1 0%, #7C3AED 100%)",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 14,
                  padding: "15px 24px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  boxShadow: "0 8px 24px -4px rgba(124, 58, 237, 0.45)",
                  marginTop: 6,
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <span>Submit & Save Application</span>
                <ArrowRight size={17} strokeWidth={2.4} />
              </button>

              {/* BOTTOM PRIVACY BADGE MATCHING SCREENSHOT */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  color: "#64748B",
                  fontSize: 11.5,
                  fontWeight: 500,
                  marginTop: 4,
                }}
              >
                <ShieldCheck size={14} color="#16A34A" />
                <span>Saved to Admin Database &bull; 100% Privacy Guaranteed</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployerApplicationModal;
