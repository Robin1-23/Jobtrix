import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, AlertCircle, Phone } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { Reveal, TextReveal } from "../common/Reveal";
import { JobtrixLogoIcon } from "../common/JobtrixLogoIcon";

// Strict Indian Mobile Number Regex: 10 digits starting with 6, 7, 8, or 9
export const PHONE_REGEX = /^[6-9]\d{9}$/;

export function FooterSection() {
  const [footerPhone, setFooterPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);

  const validatePhone = (val) => {
    const digits = (val || "").replace(/\D/g, "");
    if (!digits) {
      setPhoneError("Mobile number is required.");
      return false;
    }
    if (!/^[6-9]/.test(digits)) {
      setPhoneError("Must start with 6, 7, 8, or 9.");
      return false;
    }
    if (digits.length < 10) {
      setPhoneError(`Please enter all 10 digits (${digits.length}/10).`);
      return false;
    }
    if (!PHONE_REGEX.test(digits)) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFooterPhone(digits);
    if (phoneTouched) {
      validatePhone(digits);
    }
  };

  const submitFooterContact = (e) => {
    e.preventDefault();
    setPhoneTouched(true);
    if (!validatePhone(footerPhone)) return;

    // Directly open the Employer Application Modal with the phone number pre-filled!
    window.dispatchEvent(
      new CustomEvent("open-hire-modal", { detail: { phone: footerPhone } })
    );
  };

  return (
    <footer
      id="contact"
      style={{
        background: "linear-gradient(180deg, #4A1D96 0%, #3B167A 40%, #2E1065 100%)",
        position: "relative",
        paddingTop: 104,
        paddingBottom: 48,
        overflow: "hidden",
      }}
    >
      {/* Top-left organic yellow swoosh matching screenshot */}
      <div
        className="jx-footer-swoosh"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 220,
          height: 118,
          borderBottomRightRadius: "100%",
          background: TOKENS.amber,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Centered CTA Section */}
      <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 2, padding: "0 24px" }}>
        <Reveal>
          <TextReveal
            as="h2"
            text="Hire your workforce at speed + scale."
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 54px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: "0 auto 16px",
              letterSpacing: "-0.015em",
              textAlign: "center",
              display: "block",
            }}
          />
          <TextReveal
            as="p"
            delay={120}
            text="Jobtrix's cutting edge AI-based technology seamlessly matches job seekers with employers."
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.25vw, 17.5px)",
              color: "rgba(255, 255, 255, 0.88)",
              lineHeight: 1.6,
              margin: "0 auto 38px",
              maxWidth: 600,
              textAlign: "center",
              display: "block",
            }}
          />

          {/* Phone Contact Form */}
          <form
            onSubmit={submitFooterContact}
            noValidate
              className="jx-footer-form"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                maxWidth: 540,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div style={{ position: "relative", width: 320, maxWidth: "100%" }}>
                  <input
                    type="tel"
                    required
                    value={footerPhone}
                    onChange={handlePhoneChange}
                    onBlur={() => {
                      setPhoneTouched(true);
                      validatePhone(footerPhone);
                    }}
                    placeholder="Enter 10-digit mobile number"
                    className="jx-footer-input"
                    style={{
                      background: "rgba(255, 255, 255, 0.18)",
                      backdropFilter: "blur(8px)",
                      border: phoneError && phoneTouched ? "1.5px solid #F87171" : "1px solid rgba(255, 255, 255, 0.35)",
                      borderRadius: 10,
                      padding: "15px 50px 15px 22px",
                      fontSize: 15,
                      color: "#FFFFFF",
                      outline: "none",
                      width: "100%",
                      boxSizing: "border-box",
                      fontFamily: "'Inter', sans-serif",
                      transition: "all 0.2s ease",
                    }}
                  />
                  {footerPhone.length > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        right: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: 11,
                        color: "rgba(255, 255, 255, 0.6)",
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {footerPhone.length}/10
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="jx-btn"
                  style={{
                    background: "#EAA61E",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "15px 32px",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Contact Me
                </button>
              </div>

              {phoneError && phoneTouched && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#FECACA",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    marginTop: 4,
                  }}
                >
                  <AlertCircle size={14} color="#F87171" />
                  <span>{phoneError}</span>
                </div>
              )}
            </form>
        </Reveal>
      </div>

      {/* 4-Column Footer Navigation Links */}
      <div
        style={{
          maxWidth: 1140,
          margin: "96px auto 0",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 44,
            alignItems: "flex-start",
          }}
        >
          {/* Column 1: Brand & Description */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <JobtrixLogoIcon size={38} />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                Jobtrix
              </span>
            </div>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.78)",
                fontSize: 14.5,
                lineHeight: 1.65,
                maxWidth: 260,
                margin: 0,
              }}
            >
              India&apos;s leading AI-powered blue-collar recruitment platform, bridging talent with verified employers instantly.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Company
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link to="/" className="jx-footer-link">About Us</Link>
              <Link to="/how-it-works" className="jx-footer-link">How It Works</Link>
              <Link to="/job-seekers" className="jx-footer-link">Sectors We Serve</Link>
              <Link to="/contact" className="jx-footer-link">Contact Us</Link>
            </div>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              More
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link to="/job-seekers" className="jx-footer-link">For Candidates</Link>
              <Link to="/" className="jx-footer-link">For Employers</Link>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-hire-modal"))}
                className="jx-footer-link"
                style={{ background: "transparent", border: "none", padding: 0, textAlign: "left", cursor: "pointer", color: "inherit", fontSize: "inherit", fontFamily: "inherit" }}
              >
                Post Requirement
              </button>
              <Link to="/admin" className="jx-footer-link" style={{ color: TOKENS.amber, fontWeight: 600 }}>Admin Portal &rarr;</Link>
              <a href="#contact" className="jx-footer-link">Privacy Policy</a>
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Contact Details
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "rgba(255, 255, 255, 0.88)", fontSize: 14.5 }}>
                <MapPin style={{ marginTop: 2, flexShrink: 0 }} size={18} color="#FFFFFF" strokeWidth={2.2} />
                <span>Bangalore &amp; Gurgaon,<br />India</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255, 255, 255, 0.88)", fontSize: 14.5 }}>
                <Phone style={{ flexShrink: 0 }} size={18} color="#22C55E" strokeWidth={2.2} />
                <a href="tel:+919991239374" style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}>
                  +91 99912 39374
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255, 255, 255, 0.88)", fontSize: 14.5 }}>
                <Mail style={{ flexShrink: 0 }} size={18} color="#FFFFFF" strokeWidth={2.2} />
                <a href="mailto:robinjain142001@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                  robinjain142001@gmail.com
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255, 255, 255, 0.88)", fontSize: 14.5 }}>
                <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.25-1.93 1.29-.49.04-1.12.06-3.62-.97-2.94-1.21-4.83-4.22-4.98-4.42-.14-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.14.67-.08.19-.22.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.07.13.07.76-.17 1.44z" />
                </svg>
                <a href="https://wa.me/919991239374" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                  WhatsApp: +91 99912 39374
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 26,
            borderTop: "1px solid rgba(255, 255, 255, 0.14)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 14,
            fontSize: 13,
            color: "rgba(255, 255, 255, 0.65)",
          }}
        >
          <span>&copy; {new Date().getFullYear()} Jobtrix Technologies Pvt. Ltd. All rights reserved.</span>
          <span>An Elvyen company &middot; AI hiring across India</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
