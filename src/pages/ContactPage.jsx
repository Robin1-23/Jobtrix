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
  Briefcase, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { TOKENS } from "../constants/tokens";
import { Section } from "../components/common/Section";
import { Reveal, TextReveal } from "../components/common/Reveal";
import { leadService } from "../services/leadService";
import { PHONE_REGEX } from "../components/layout/FooterSection";

export function ContactPage() {
  const [activeTab, setActiveTab] = useState("employer"); // "employer" | "candidate" | "support"

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    city: "Delhi NCR",
    category: "Delivery & Courier",
    workersCount: "25-50",
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
      setErrorMsg("Please enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).");
      return;
    }

    if (activeTab === "employer") {
      // Save directly into leadService for Admin telemetry
      leadService.saveEmployerLead({
        companyName: formData.companyName || formData.name || "Corporate Employer",
        contactPerson: formData.name || "Operations Lead",
        phone: formData.phone,
        email: formData.email || "contact@client.com",
        role: formData.category,
        workersCount: formData.workersCount,
        city: formData.city,
        notes: formData.message,
      });
      setSubmittedLeadId("EMP-" + Date.now().toString().slice(-4));
    } else {
      // Candidate or Support
      leadService.saveCandidateLead({
        name: formData.name || "Applicant",
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
      workersCount: "25-50",
      message: "",
    });
    setErrorMsg("");
  };

  const hubs = [
    {
      city: "Delhi NCR",
      areas: "Saket • Gurgaon Sec 29 • Noida Sec 62",
      status: "Live Operations Hub",
      leadTime: "Average deployment: 18h",
    },
    {
      city: "Bengaluru",
      areas: "Koramangala • HSR Layout • Whitefield",
      status: "Live Operations Hub",
      leadTime: "Average deployment: 24h",
    },
    {
      city: "Mumbai & MMR",
      areas: "Andheri East • BKC • Navi Mumbai",
      status: "Live Operations Hub",
      leadTime: "Average deployment: 24h",
    },
    {
      city: "Pune",
      areas: "Kothrud • Hinjewadi • Viman Nagar",
      status: "Live Operations Hub",
      leadTime: "Average deployment: 20h",
    },
  ];

  return (
    <div style={{ background: "#FAFAFA", color: TOKENS.navy, minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* 1. HERO & DIRECT CONTACT DETAILS */}
      <section
        style={{
          padding: "72px 24px 50px",
          background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <div style={{ maxWidth: 1140, margin: "0 auto", textAlign: "center" }}>
          
          <Reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#0F172A",
                color: "#FFFFFF",
                padding: "6px 16px",
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 600,
                marginBottom: 24,
                boxShadow: "0 4px 14px rgba(15, 23, 42, 0.16)",
              }}
            >
              <Sparkles size={14} color="#F59E0B" />
              <span>DIRECT OPERATIONS & SUPPORT DESK</span>
            </div>
          </Reveal>

          <TextReveal
            as="h1"
            text="Let's build & scale your frontline team"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 54px)",
              fontWeight: 700,
              color: "#0F172A",
              lineHeight: 1.15,
              maxWidth: 780,
              margin: "0 auto 18px",
              letterSpacing: "-0.02em",
            }}
          />

          <Reveal delay={100}>
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 18px)",
                color: "#475569",
                lineHeight: 1.6,
                maxWidth: 640,
                margin: "0 auto 40px",
              }}
            >
              Speak directly with our regional operations directors, request dedicated workforce staffing, or get immediate support on WhatsApp.
            </p>
          </Reveal>

          {/* Quick Direct Channel Cards (4 Tiles) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
              textAlign: "left",
            }}
          >
            {/* 1. Phone Card */}
            <Reveal delay={100}>
              <a
                href="tel:+919991239374"
                className="jx-hover-lift"
                style={{
                  display: "block",
                  background: "#FFFFFF",
                  padding: "24px 22px",
                  borderRadius: 18,
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(34, 197, 94, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Phone size={20} color="#16A34A" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>Phone Support</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>+91 99912 39374</div>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "#16A34A", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>Click to call directly</span> &rarr;
                </div>
              </a>
            </Reveal>

            {/* 2. WhatsApp Card */}
            <Reveal delay={160}>
              <a
                href="https://wa.me/919991239374?text=Hi%20Jobtrix,%20I%20am%20reaching%20out%20via%20your%20contact%20page"
                target="_blank"
                rel="noopener noreferrer"
                className="jx-hover-lift"
                style={{
                  display: "block",
                  background: "#FFFFFF",
                  padding: "24px 22px",
                  borderRadius: 18,
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(34, 197, 94, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MessageCircle size={20} color="#16A34A" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>WhatsApp Chat</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#0F172A" }}>+91 99912 39374</div>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "#16A34A", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>Instant WhatsApp connection</span> &rarr;
                </div>
              </a>
            </Reveal>

            {/* 3. Email Card */}
            <Reveal delay={220}>
              <a
                href="mailto:robinjain142001@gmail.com"
                className="jx-hover-lift"
                style={{
                  display: "block",
                  background: "#FFFFFF",
                  padding: "24px 22px",
                  borderRadius: 18,
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(245, 158, 11, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mail size={20} color="#D97706" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>Official Email</div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: "#0F172A", wordBreak: "break-all" }}>robinjain142001@gmail.com</div>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "#D97706", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>Send direct email</span> &rarr;
                </div>
              </a>
            </Reveal>

            {/* 4. Hours Card */}
            <Reveal delay={280}>
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "24px 22px",
                  borderRadius: 18,
                  border: "1px solid #E2E8F0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(56, 189, 248, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Clock size={20} color="#0284C7" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>Operating Hours</div>
                    <div style={{ fontSize: 15.5, fontWeight: 700, color: "#0F172A" }}>Mon – Sat, 9am – 7:30pm</div>
                  </div>
                </div>
                <div style={{ fontSize: 12.5, color: "#64748B" }}>
                  Average response: &lt; 15 minutes
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 2. INTERACTIVE CONTACT & TELEMETRY INQUIRY FORM */}
      <Section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="jx-contact-grid"
        >
          
          {/* LEFT: Context, Guarantees & Why Contact Jobtrix */}
          <div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#D97706",
                textTransform: "uppercase",
              }}
            >
              Rapid Direct Inquiries
            </span>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.4vw, 40px)",
                fontWeight: 700,
                color: "#0F172A",
                lineHeight: 1.2,
                margin: "8px 0 18px",
              }}
            >
              Tell us your requirements. We respond within 15 minutes.
            </h2>

            <p style={{ color: "#475569", fontSize: 15.5, lineHeight: 1.65, margin: "0 0 32px" }}>
              Our operations managers operate directly in every major fulfillment cluster. Whether you need 20 riders tomorrow in Saket or 100 housekeeping staff across Bengaluru, your inquiry is routed instantly to our on-ground dispatchers.
            </p>

            {/* Key Value Checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={20} color="#16A34A" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#0F172A", fontSize: 15 }}>No Middleman Markups</div>
                  <div style={{ color: "#64748B", fontSize: 13.5, marginTop: 2 }}>Direct candidate verification with complete transparency and zero commission for workers.</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <ShieldCheck size={20} color="#0284C7" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#0F172A", fontSize: 15 }}>100% Verified Credentials</div>
                  <div style={{ color: "#64748B", fontSize: 13.5, marginTop: 2 }}>Aadhaar identity, driving license, and criminal records checked before deployment.</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Clock size={20} color="#F59E0B" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#0F172A", fontSize: 15 }}>24-Hour Deployment Guarantee</div>
                  <div style={{ color: "#64748B", fontSize: 13.5, marginTop: 2 }}>Pre-screened candidates ready to report to duty with biometric IDs.</div>
                </div>
              </div>
            </div>

            {/* Direct Admin Telemetry Note */}
            <div
              style={{
                marginTop: 36,
                background: "rgba(15, 23, 42, 0.04)",
                borderRadius: 14,
                padding: "16px 20px",
                borderLeft: "4px solid #F59E0B",
                fontSize: 13,
                color: "#475569",
                lineHeight: 1.5,
              }}
            >
              <strong>Real-Time Sync:</strong> Inquiries submitted through this page are immediately logged in the Jobtrix Central Admin Database and forwarded to our regional ops heads.
            </div>
          </div>

          {/* RIGHT: Interactive Form Card */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              padding: "36px 32px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 20px 45px -10px rgba(15, 23, 42, 0.12)",
            }}
          >
            {/* Intent Switcher Tabs */}
            <div
              style={{
                display: "flex",
                background: "#F1F5F9",
                padding: 4,
                borderRadius: 12,
                marginBottom: 26,
              }}
            >
              <button
                type="button"
                onClick={() => { setActiveTab("employer"); if (isSubmitted) resetForm(); }}
                style={{
                  flex: 1,
                  padding: "9px 12px",
                  borderRadius: 9,
                  border: "none",
                  background: activeTab === "employer" ? "#0F172A" : "transparent",
                  color: activeTab === "employer" ? "#FFFFFF" : "#64748B",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Hire Workforce
              </button>
              
              <button
                type="button"
                onClick={() => { setActiveTab("candidate"); if (isSubmitted) resetForm(); }}
                style={{
                  flex: 1,
                  padding: "9px 12px",
                  borderRadius: 9,
                  border: "none",
                  background: activeTab === "candidate" ? "#0F172A" : "transparent",
                  color: activeTab === "candidate" ? "#FFFFFF" : "#64748B",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Find a Job
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab("support"); if (isSubmitted) resetForm(); }}
                style={{
                  flex: 1,
                  padding: "9px 12px",
                  borderRadius: 9,
                  border: "none",
                  background: activeTab === "support" ? "#0F172A" : "transparent",
                  color: activeTab === "support" ? "#FFFFFF" : "#64748B",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Support / Other
              </button>
            </div>

            {isSubmitted ? (
              /* Success Card */
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(34, 197, 94, 0.12)",
                    color: "#16A34A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#0F172A",
                    margin: "0 0 8px",
                  }}
                >
                  Inquiry Logged Successfully!
                </h3>
                
                <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6, margin: "0 0 20px" }}>
                  Your reference ID is <code style={{ background: "#F1F5F9", padding: "2px 6px", borderRadius: 4, fontWeight: 700, color: "#0F172A" }}>{submittedLeadId}</code>. Our senior operations lead has received your telemetry and will call you on <strong>+91 {formData.phone}</strong> shortly.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <a
                    href={"https://wa.me/919991239374?text=" + encodeURIComponent("Hi Robin Jain, I just submitted an inquiry on Jobtrix (Ref: " + submittedLeadId + ") for " + (formData.companyName || formData.name || "workforce") + ". Let's connect.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#16A34A",
                      color: "#FFFFFF",
                      padding: "14px 20px",
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: 14.5,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <MessageCircle size={18} />
                    <span>Open Instant WhatsApp Chat</span>
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
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                
                {/* Full Name / Contact Person */}
                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    {activeTab === "employer" ? "Contact Person Name *" : "Your Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={activeTab === "employer" ? "e.g. Rahul Sharma" : "e.g. Vikram Singh"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F8FAFC",
                      border: "1px solid #CBD5E1",
                      borderRadius: 10,
                      padding: "12px 14px",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </div>

                {/* Company Name (only for employers) */}
                {activeTab === "employer" && (
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Company / Enterprise Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. QuickLogistics India Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#F8FAFC",
                        border: "1px solid #CBD5E1",
                        borderRadius: 10,
                        padding: "12px 14px",
                        fontSize: 14,
                        outline: "none",
                      }}
                    />
                  </div>
                )}

                {/* Phone Number with Validation */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <label style={{ fontSize: 12.5, fontWeight: 700, color: "#334155" }}>
                      WhatsApp / Mobile Number *
                    </label>
                    <span style={{ fontSize: 11.5, color: formData.phone.length === 10 ? "#16A34A" : "#94A3B8", fontWeight: 700 }}>
                      {formData.phone.length}/10 Digits
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
                        fontWeight: 700,
                        color: "#64748B",
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
                        background: "#F8FAFC",
                        border: errorMsg ? "1.5px solid #EF4444" : "1px solid #CBD5E1",
                        borderRadius: 10,
                        padding: "12px 14px 12px 50px",
                        fontSize: 14.5,
                        fontWeight: 600,
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

                {/* City & Category Row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      City / Region *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#F8FAFC",
                        border: "1px solid #CBD5E1",
                        borderRadius: 10,
                        padding: "12px 14px",
                        fontSize: 13.5,
                        outline: "none",
                        color: "#0F172A",
                      }}
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Other City">Other Region</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#F8FAFC",
                        border: "1px solid #CBD5E1",
                        borderRadius: 10,
                        padding: "12px 14px",
                        fontSize: 13.5,
                        outline: "none",
                        color: "#0F172A",
                      }}
                    >
                      <option value="Delivery & Courier">Delivery & Courier</option>
                      <option value="Warehouse & Logistics">Warehouse & Logistics</option>
                      <option value="Housekeeping & Maid">Housekeeping & Maid</option>
                      <option value="Facility & Security">Facility & Security</option>
                      <option value="Retail Associate">Retail Associate</option>
                    </select>
                  </div>
                </div>

                {/* Volume / Headcount (For employers) */}
                {activeTab === "employer" && (
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Estimated Workforce Volume
                    </label>
                    <select
                      value={formData.workersCount}
                      onChange={(e) => setFormData({ ...formData, workersCount: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#F8FAFC",
                        border: "1px solid #CBD5E1",
                        borderRadius: 10,
                        padding: "12px 14px",
                        fontSize: 13.5,
                        outline: "none",
                        color: "#0F172A",
                      }}
                    >
                      <option value="10-25 Workers">10 – 25 Workers</option>
                      <option value="25-50 Workers">25 – 50 Workers</option>
                      <option value="50-100 Workers">50 – 100 Workers</option>
                      <option value="100-500+ Workers">100 – 500+ Workers (Enterprise)</option>
                    </select>
                  </div>
                )}

                {/* Additional Details */}
                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                    Additional Details / Specific Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder={activeTab === "employer" ? "Tell us about shift timings, preferred localities, or vehicle requirements..." : "Any previous experience, preferred shift timings..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F8FAFC",
                      border: "1px solid #CBD5E1",
                      borderRadius: 10,
                      padding: "12px 14px",
                      fontSize: 13.5,
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    background: "#0F172A",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: 12,
                    padding: "15px",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    marginTop: 8,
                    boxShadow: "0 4px 14px rgba(15, 23, 42, 0.2)",
                  }}
                >
                  <Send size={16} />
                  <span>{activeTab === "employer" ? "Submit Staffing Request" : "Submit Direct Application"}</span>
                </button>

                <div style={{ textAlign: "center", fontSize: 12, color: "#94A3B8" }}>
                  By submitting, you agree to receive recruitment updates via WhatsApp & SMS.
                </div>

              </form>
            )}

          </div>

        </div>
      </Section>

      {/* 3. REGIONAL OPERATIONAL HUBS GRID */}
      <section
        style={{
          background: "#F8FAFC",
          borderTop: "1px solid #E2E8F0",
          padding: "70px 24px 80px",
        }}
      >
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#D97706",
                textTransform: "uppercase",
              }}
            >
              Coverage Network
            </span>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 700,
                color: "#0F172A",
                marginTop: 6,
              }}
            >
              Jobtrix On-Ground Regional Hubs
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 22,
            }}
          >
            {hubs.map((hub, idx) => (
              <Reveal key={hub.city} delay={idx * 80}>
                <div
                  className="jx-hover-lift"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 18,
                    padding: "24px 22px",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <MapPin size={18} color="#D97706" />
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: "#0F172A", margin: 0 }}>
                        {hub.city}
                      </h4>
                    </div>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E" }} />
                  </div>

                  <div style={{ fontSize: 13.5, color: "#475569", fontWeight: 500, marginBottom: 12 }}>
                    {hub.areas}
                  </div>

                  <div style={{ fontSize: 12, color: "#64748B", borderTop: "1px solid #F1F5F9", paddingTop: 10 }}>
                    {hub.leadTime}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;
