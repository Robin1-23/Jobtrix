import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  User, 
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";
import { TOKENS } from "../constants/tokens";
import { Section } from "../components/common/Section";
import { Reveal, TextReveal } from "../components/common/Reveal";
import { leadService } from "../services/leadService";
import { PHONE_REGEX } from "../components/layout/FooterSection";

export function ContactPage() {
  const [activeTab, setActiveTab] = useState("employer"); // "employer" | "candidate" | "other"

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    city: "Delhi NCR",
    category: "Delivery & Courier",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState("");

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digits }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate 10-digit mobile number
    if (!PHONE_REGEX.test(formData.phone)) {
      setErrorMsg("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (activeTab === "employer") {
      leadService.saveEmployerLead({
        companyName: formData.companyName || formData.name || "Employer",
        contactPerson: formData.name,
        phone: formData.phone,
        email: formData.email,
        role: formData.category,
        workersCount: "10-25",
        city: formData.city,
        notes: formData.message,
      });
      setSubmittedLeadId("EMP-" + Date.now().toString().slice(-4));
    } else {
      leadService.saveCandidateLead({
        name: formData.name || "Candidate",
        phone: formData.phone,
        city: formData.city,
        role: formData.category,
        experience: "1-2 Years",
        source: "Contact Page (" + activeTab.toUpperCase() + ")",
      });
      setSubmittedLeadId("CAND-" + Date.now().toString().slice(-4));
    }

    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      companyName: "",
      phone: "",
      email: "",
      city: "Delhi NCR",
      category: "Delivery & Courier",
      message: "",
    });
    setErrorMsg("");
  };

  return (
    <div style={{ background: "#FAFAFA", color: TOKENS.navy, minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* 1. CLEAN HERO HEADER */}
      <section
        style={{
          padding: "70px 24px 40px",
          background: "#FFFFFF",
          borderBottom: "1px solid #EAEAEA",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          
          <Reveal>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12.5,
                fontWeight: 700,
                color: "#D97706",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: 12,
              }}
            >
              Contact Jobtrix
            </span>
          </Reveal>

          <TextReveal
            as="h1"
            text="Get in touch with our team"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 4.4vw, 52px)",
              fontWeight: 700,
              color: "#10192E",
              lineHeight: 1.15,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          />

          <Reveal delay={100}>
            <p
              style={{
                fontSize: "clamp(15.5px, 1.8vw, 18px)",
                color: "#64748B",
                lineHeight: 1.6,
                maxWidth: 620,
                margin: "0 auto",
              }}
            >
              Whether you are looking to hire frontline staff for your company or looking for a verified job near your home, we are here to assist you.
            </p>
          </Reveal>

        </div>
      </section>

      {/* 2. THREE CLEAN CONTACT CARDS */}
      <section style={{ padding: "40px 24px 0", maxWidth: 1140, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {/* Card 1: Phone */}
          <Reveal delay={60}>
            <a
              href="tel:+919991239374"
              className="jx-neobrutal-card jx-neobrutal-card-interactive"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "24px 22px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  border: "2px solid #10192E",
                  background: "#DCFCE7",
                  boxShadow: "2px 2px 0 0 #10192E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={22} color="#10192E" />
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#64748B", fontWeight: 700, fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
                  Call Us
                </div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#10192E", marginTop: 2, fontFamily: "'Space Grotesk', sans-serif" }}>
                  +91 99912 39374
                </div>
                <div style={{ fontSize: 12, color: "#16A34A", fontWeight: 700, marginTop: 2 }}>
                  Direct line to Robin Jain
                </div>
              </div>
            </a>
          </Reveal>

          {/* Card 2: WhatsApp */}
          <Reveal delay={120}>
            <a
              href="https://wa.me/919991239374?text=Hi%20Jobtrix,%20I%20have%20an%20inquiry%20regarding%20workforce%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="jx-neobrutal-card jx-neobrutal-card-interactive"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "24px 22px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  border: "2px solid #10192E",
                  background: "#DCFCE7",
                  boxShadow: "2px 2px 0 0 #10192E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MessageCircle size={22} color="#10192E" />
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#64748B", fontWeight: 700, fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
                  WhatsApp Chat
                </div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#10192E", marginTop: 2, fontFamily: "'Space Grotesk', sans-serif" }}>
                  +91 99912 39374
                </div>
                <div style={{ fontSize: 12, color: "#16A34A", fontWeight: 700, marginTop: 2 }}>
                  Quick replies on WhatsApp
                </div>
              </div>
            </a>
          </Reveal>

          {/* Card 3: Email */}
          <Reveal delay={180}>
            <a
              href="mailto:robinjain142001@gmail.com"
              className="jx-neobrutal-card jx-neobrutal-card-interactive"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "24px 22px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  border: "2px solid #10192E",
                  background: "#FEF3C7",
                  boxShadow: "2px 2px 0 0 #10192E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={22} color="#10192E" />
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#64748B", fontWeight: 700, fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase" }}>
                  Email Support
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 800, color: "#10192E", marginTop: 2, fontFamily: "'Space Grotesk', sans-serif", wordBreak: "break-all" }}>
                  robinjain142001@gmail.com
                </div>
                <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>
                  Corporate inquiries
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* 3. MAIN FORM & DETAILS SECTION (NATURAL SPLIT) */}
      <Section style={{ padding: "50px 24px 80px" }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: 48,
            alignItems: "start",
          }}
          className="jx-contact-grid"
        >
          
          {/* LEFT: Clean Brand Information & Trust */}
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 700,
                color: "#10192E",
                lineHeight: 1.25,
                margin: "0 0 16px",
              }}
            >
              Direct, transparent workforce staffing across India
            </h2>

            <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.65, margin: "0 0 28px" }}>
              We partner directly with leading logistics and services companies to provide pre-screened frontline staff with zero hassle.
            </p>

            {/* Simple Value Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={20} color="#16A34A" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#10192E", fontSize: 14.5 }}>100% Free for Job Seekers</div>
                  <div style={{ color: "#64748B", fontSize: 13, marginTop: 2 }}>We never charge candidates any application, registration, or placement fee.</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={20} color="#16A34A" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#10192E", fontSize: 14.5 }}>Verified Identity Check</div>
                  <div style={{ color: "#64748B", fontSize: 13, marginTop: 2 }}>Every candidate is verified with Aadhaar and driving license before reporting.</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={20} color="#16A34A" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#10192E", fontSize: 14.5 }}>24-Hour Deployment</div>
                  <div style={{ color: "#64748B", fontSize: 13, marginTop: 2 }}>Staff ready to deploy at dark stores, warehouses, and customer sites.</div>
                </div>
              </div>
            </div>

            {/* Company Partners Tag Cloud */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: "20px",
                border: "1px solid #E5E7EB",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                Hiring Partners Across India
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <span style={{ padding: "5px 12px", background: "#F3F4F6", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#374151" }}>Zomato</span>
                <span style={{ padding: "5px 12px", background: "#F3F4F6", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#374151" }}>Swiggy</span>
                <span style={{ padding: "5px 12px", background: "#F3F4F6", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#374151" }}>Pronto</span>
                <span style={{ padding: "5px 12px", background: "#F3F4F6", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#374151" }}>Flipkart</span>
                <span style={{ padding: "5px 12px", background: "#F3F4F6", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#374151" }}>Urban Company</span>
                <span style={{ padding: "5px 12px", background: "#F3F4F6", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#374151" }}>Snabbit</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Retro Neobrutalist Contact Form Container */}
          <div
            className="jx-retro-double-card"
            style={{
              padding: "36px 32px",
            }}
          >
            {/* Simple Segmented Intent Tabs */}
            <div
              style={{
                display: "flex",
                background: "#F3F4F6",
                borderRadius: 12,
                padding: 4,
                marginBottom: 26,
              }}
            >
              <button
                type="button"
                onClick={() => { setActiveTab("employer"); if (isSubmitted) resetForm(); }}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: 9,
                  border: "none",
                  background: activeTab === "employer" ? "#FFFFFF" : "transparent",
                  color: activeTab === "employer" ? "#10192E" : "#6B7280",
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: "pointer",
                  boxShadow: activeTab === "employer" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                  transition: "all 0.15s ease",
                }}
              >
                Hire Workforce
              </button>
              
              <button
                type="button"
                onClick={() => { setActiveTab("candidate"); if (isSubmitted) resetForm(); }}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: 9,
                  border: "none",
                  background: activeTab === "candidate" ? "#FFFFFF" : "transparent",
                  color: activeTab === "candidate" ? "#10192E" : "#6B7280",
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: "pointer",
                  boxShadow: activeTab === "candidate" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                  transition: "all 0.15s ease",
                }}
              >
                Apply for Jobs
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab("other"); if (isSubmitted) resetForm(); }}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: 9,
                  border: "none",
                  background: activeTab === "other" ? "#FFFFFF" : "transparent",
                  color: activeTab === "other" ? "#10192E" : "#6B7280",
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: "pointer",
                  boxShadow: activeTab === "other" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                  transition: "all 0.15s ease",
                }}
              >
                Other
              </button>
            </div>

            {isSubmitted ? (
              /* Clean Success State */
              <div style={{ textAlign: "center", padding: "24px 8px" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(22, 163, 74, 0.1)",
                    color: "#16A34A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Check size={28} strokeWidth={2.5} />
                </div>
                
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#10192E",
                    margin: "0 0 8px",
                  }}
                >
                  Thank you! We received your message.
                </h3>
                
                <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px" }}>
                  Your inquiry reference is <strong>{submittedLeadId}</strong>. We will call you on <strong>+91 {formData.phone}</strong> shortly.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <a
                    href={"https://wa.me/919991239374?text=" + encodeURIComponent("Hi Robin Jain, I just submitted an inquiry on Jobtrix (Ref: " + submittedLeadId + "). Let's connect.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#16A34A",
                      color: "#FFFFFF",
                      padding: "13px 20px",
                      borderRadius: 10,
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <MessageCircle size={18} />
                    <span>Open WhatsApp Chat</span>
                  </a>

                  <button
                    onClick={resetForm}
                    style={{
                      background: "transparent",
                      color: "#64748B",
                      border: "none",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "8px",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              /* Clean Form */
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                
                {/* Name */}
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 6 }}>
                    {activeTab === "employer" ? "Contact Person Name *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#FFFFFF",
                      border: "1px solid #D1D5DB",
                      borderRadius: 9,
                      padding: "11px 14px",
                      fontSize: 14,
                      color: "#111827",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Company Name (only if employer) */}
                {activeTab === "employer" && (
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 6 }}>
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. QuickLogistics Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#FFFFFF",
                        border: "1px solid #D1D5DB",
                        borderRadius: 9,
                        padding: "11px 14px",
                        fontSize: 14,
                        color: "#111827",
                        outline: "none",
                      }}
                    />
                  </div>
                )}

                {/* Phone Number with +91 */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>
                      Phone / WhatsApp Number *
                    </label>
                    <span style={{ fontSize: 11.5, color: formData.phone.length === 10 ? "#16A34A" : "#9CA3AF", fontWeight: 600 }}>
                      {formData.phone.length}/10 digits
                    </span>
                  </div>

                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        position: "absolute",
                        left: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#6B7280",
                      }}
                    >
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="99912 39374"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#FFFFFF",
                        border: errorMsg ? "1.5px solid #EF4444" : "1px solid #D1D5DB",
                        borderRadius: 9,
                        padding: "11px 14px 11px 48px",
                        fontSize: 14,
                        color: "#111827",
                        outline: "none",
                      }}
                    />
                  </div>
                  {errorMsg && (
                    <div style={{ color: "#EF4444", fontSize: 12, marginTop: 5, display: "flex", alignItems: "center", gap: 4 }}>
                      <AlertCircle size={13} />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                </div>

                {/* City & Role */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 6 }}>
                      City / Region *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#FFFFFF",
                        border: "1px solid #D1D5DB",
                        borderRadius: 9,
                        padding: "11px 12px",
                        fontSize: 13.5,
                        color: "#111827",
                        outline: "none",
                      }}
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 6 }}>
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#FFFFFF",
                        border: "1px solid #D1D5DB",
                        borderRadius: 9,
                        padding: "11px 12px",
                        fontSize: 13.5,
                        color: "#111827",
                        outline: "none",
                      }}
                    >
                      <option value="Delivery & Courier">Delivery & Courier</option>
                      <option value="Housekeeping & Maid">Housekeeping & Maid</option>
                      <option value="Warehouse & Logistics">Warehouse</option>
                      <option value="Facility & Security">Security</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#374151", marginBottom: 6 }}>
                    Message / Special Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder={activeTab === "employer" ? "Tell us about headcounts, shift timings, or specific pin-codes..." : "Tell us about your previous experience or preferred locality..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#FFFFFF",
                      border: "1px solid #D1D5DB",
                      borderRadius: 9,
                      padding: "10px 14px",
                      fontSize: 13.5,
                      color: "#111827",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                {/* Primary Button */}
                <button
                  type="submit"
                  style={{
                    background: "#10192E",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: 10,
                    padding: "13px",
                    fontWeight: 700,
                    fontSize: 14.5,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    marginTop: 4,
                  }}
                >
                  <Send size={16} />
                  <span>{activeTab === "employer" ? "Submit Staffing Inquiry" : "Submit Details"}</span>
                </button>

                <div style={{ textAlign: "center", fontSize: 12, color: "#9CA3AF" }}>
                  We will contact you within a few hours. No spam, ever.
                </div>

              </form>
            )}

          </div>

        </div>
      </Section>

    </div>
  );
}

export default ContactPage;
