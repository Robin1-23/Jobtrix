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
  Sparkles,
  Zap,
  Check,
  Radio,
  FileText
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

  const categories = [
    { id: "Delivery & Courier", label: "Delivery & Courier", icon: "🛵" },
    { id: "Housekeeping & Maid", label: "Housekeeping & Maid", icon: "🧹" },
    { id: "Warehouse & Logistics", label: "Warehouse & Logistics", icon: "📦" },
    { id: "Facility & Security", label: "Facility & Security", icon: "🛡️" },
  ];

  const volumes = [
    { id: "10-25", label: "10 – 25" },
    { id: "25-50", label: "25 – 50" },
    { id: "50-100", label: "50 – 100" },
    { id: "100+", label: "100+ Enterprise" },
  ];

  const cities = ["Delhi NCR", "Bengaluru", "Mumbai", "Pune", "Hyderabad", "Other"];

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
    <div style={{ background: "#F8FAFC", color: TOKENS.navy, minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* 1. HERO & DIRECT CONTACT DETAILS */}
      <section
        style={{
          padding: "72px 24px 44px",
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
                marginBottom: 20,
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
              fontSize: "clamp(32px, 4.2vw, 54px)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.15,
              maxWidth: 780,
              margin: "0 auto 16px",
              letterSpacing: "-0.025em",
            }}
          />

          <Reveal delay={100}>
            <p
              style={{
                fontSize: "clamp(15.5px, 1.8vw, 18px)",
                color: "#64748B",
                lineHeight: 1.6,
                maxWidth: 620,
                margin: "0 auto 36px",
              }}
            >
              Speak directly with our regional dispatchers, request customized workforce staffing, or connect immediately on WhatsApp.
            </p>
          </Reveal>

          {/* Quick Direct Channel Cards (4 Clean Tiles) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 18,
              textAlign: "left",
            }}
          >
            {/* 1. Phone Card */}
            <Reveal delay={80}>
              <a
                href="tel:+919991239374"
                className="jx-hover-lift"
                style={{
                  display: "block",
                  background: "#FFFFFF",
                  padding: "22px 20px",
                  borderRadius: 18,
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(34, 197, 94, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Phone size={19} color="#16A34A" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11.5, color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>Phone Support</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#0F172A" }}>+91 99912 39374</div>
                  </div>
                </div>
                <div style={{ fontSize: 12.5, color: "#16A34A", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>One-tap direct call</span> &rarr;
                </div>
              </a>
            </Reveal>

            {/* 2. WhatsApp Card */}
            <Reveal delay={140}>
              <a
                href="https://wa.me/919991239374?text=Hi%20Jobtrix,%20I%20am%20reaching%20out%20via%20your%20contact%20page"
                target="_blank"
                rel="noopener noreferrer"
                className="jx-hover-lift"
                style={{
                  display: "block",
                  background: "#FFFFFF",
                  padding: "22px 20px",
                  borderRadius: 18,
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(34, 197, 94, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MessageCircle size={19} color="#16A34A" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11.5, color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>WhatsApp Line</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#0F172A" }}>+91 99912 39374</div>
                  </div>
                </div>
                <div style={{ fontSize: 12.5, color: "#16A34A", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>Chat with Robin Jain</span> &rarr;
                </div>
              </a>
            </Reveal>

            {/* 3. Email Card */}
            <Reveal delay={200}>
              <a
                href="mailto:robinjain142001@gmail.com"
                className="jx-hover-lift"
                style={{
                  display: "block",
                  background: "#FFFFFF",
                  padding: "22px 20px",
                  borderRadius: 18,
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(245, 158, 11, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mail size={19} color="#D97706" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11.5, color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>Official Email</div>
                    <div style={{ fontSize: 13.5, fontWeight: 800, color: "#0F172A", wordBreak: "break-all" }}>robinjain142001@gmail.com</div>
                  </div>
                </div>
                <div style={{ fontSize: 12.5, color: "#D97706", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                  <span>Send direct message</span> &rarr;
                </div>
              </a>
            </Reveal>

            {/* 4. Hours Card */}
            <Reveal delay={260}>
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "22px 20px",
                  borderRadius: 18,
                  border: "1px solid #E2E8F0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(56, 189, 248, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Clock size={19} color="#0284C7" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11.5, color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>Operating Hours</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#0F172A" }}>Mon – Sat: 9am – 7:30pm</div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#16A34A", fontWeight: 600 }}>
                  ● Average response &lt; 15 mins
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 2. SIGNATURE INTERACTIVE CONTACT STAGE */}
      <Section style={{ padding: "64px 24px 80px" }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: 40,
            alignItems: "start",
          }}
          className="jx-contact-grid"
        >
          
          {/* LEFT: Operations Control Center Showcase */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            
            {/* Live Dispatch Hub Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #0F172A 0%, #172038 100%)",
                borderRadius: 22,
                padding: "28px 24px",
                color: "#FFFFFF",
                boxShadow: "0 18px 45px -10px rgba(15, 23, 42, 0.28)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Radar Status Bar */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 10px #22C55E" }} />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", color: "#34D399", textTransform: "uppercase" }}>
                    Operations Control Center
                  </span>
                </div>
                <span style={{ fontSize: 12, color: "#94A3B8" }}>Real-time</span>
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  margin: "0 0 8px",
                  lineHeight: 1.3,
                }}
              >
                14 Dispatch Managers On Duty
              </h3>
              <p style={{ color: "#94A3B8", fontSize: 13.5, lineHeight: 1.55, margin: "0 0 20px" }}>
                Every requirement submitted is immediately matched with on-ground supervisors across Saket, Koramangala, Andheri, and Pune.
              </p>

              {/* Telemetry Metrics Bar */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  background: "rgba(255, 255, 255, 0.06)",
                  borderRadius: 14,
                  padding: "12px 14px",
                  textAlign: "center",
                }}
              >
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: "#F59E0B" }}>7m</div>
                  <div style={{ fontSize: 11, color: "#94A3B8" }}>Avg Response</div>
                </div>
                <div style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.1)", borderRight: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: "#38BDF8" }}>24h</div>
                  <div style={{ fontSize: 11, color: "#94A3B8" }}>Deployment SLA</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: "#4ADE80" }}>98.4%</div>
                  <div style={{ fontSize: 11, color: "#94A3B8" }}>Roster Fill</div>
                </div>
              </div>
            </div>

            {/* Top Enterprise Partners Grid */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 20,
                padding: "24px 22px",
                border: "1px solid #E2E8F0",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 14 }}>
                Active Hiring Ecosystem
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <span style={{ padding: "6px 12px", background: "#FEF2F2", color: "#DC2626", borderRadius: 999, fontSize: 12.5, fontWeight: 700 }}>
                  Zomato · Delivery
                </span>
                <span style={{ padding: "6px 12px", background: "#FFF7ED", color: "#EA580C", borderRadius: 999, fontSize: 12.5, fontWeight: 700 }}>
                  Swiggy · Quick Commerce
                </span>
                <span style={{ padding: "6px 12px", background: "#F0FDF4", color: "#16A34A", borderRadius: 999, fontSize: 12.5, fontWeight: 700 }}>
                  Pronto · Housekeeping
                </span>
                <span style={{ padding: "6px 12px", background: "#EFF6FF", color: "#2563EB", borderRadius: 999, fontSize: 12.5, fontWeight: 700 }}>
                  Flipkart · Supply Chain
                </span>
                <span style={{ padding: "6px 12px", background: "#FAF5FF", color: "#9333EA", borderRadius: 999, fontSize: 12.5, fontWeight: 700 }}>
                  Urban Company · Home Services
                </span>
              </div>
            </div>

            {/* Guarantees Box */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 20,
                padding: "24px 22px",
                border: "1px solid #E2E8F0",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(34, 197, 94, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckCircle2 size={16} color="#16A34A" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#0F172A", fontSize: 14 }}>Zero Middleman Markups</div>
                  <div style={{ color: "#64748B", fontSize: 12.5, marginTop: 2 }}>Direct candidate verification with complete transparent payroll. ₹0 fee for candidates.</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(56, 189, 248, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck size={16} color="#0284C7" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#0F172A", fontSize: 14 }}>Digital Identity & Background KYC</div>
                  <div style={{ color: "#64748B", fontSize: 12.5, marginTop: 2 }}>Instant Aadhaar verification, driving license check, and criminal verification.</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: High-Converting Beautiful Form Card */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              border: "1px solid #E2E8F0",
              boxShadow: "0 20px 50px -12px rgba(15, 23, 42, 0.12)",
              overflow: "hidden",
            }}
          >
            {/* Top Form Header Banner */}
            <div
              style={{
                background: "#0F172A",
                color: "#FFFFFF",
                padding: "24px 26px 20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(245, 158, 11, 0.15)",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                    padding: "3px 10px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#FBBF24",
                    letterSpacing: "0.04em",
                  }}
                >
                  <Sparkles size={12} />
                  <span>DIRECT DISPATCH INQUIRY</span>
                </div>
                <span style={{ fontSize: 12, color: "#94A3B8" }}>Telemetry Synced</span>
              </div>

              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  margin: "0 0 6px",
                  letterSpacing: "-0.015em",
                }}
              >
                {activeTab === "employer" ? "Hire Verified Workforce" : activeTab === "candidate" ? "Apply for Verified Job" : "General Support Desk"}
              </h2>
              <p style={{ color: "#94A3B8", fontSize: 13, margin: 0 }}>
                {activeTab === "employer" 
                  ? "Enter your staffing requirements to receive a verified roster within 24 hours." 
                  : "Submit your details to connect directly with hiring managers on WhatsApp."}
              </p>

              {/* Segmented Switcher Tabs */}
              <div
                style={{
                  display: "flex",
                  background: "rgba(255, 255, 255, 0.08)",
                  padding: 4,
                  borderRadius: 12,
                  marginTop: 18,
                  gap: 4,
                }}
              >
                <button
                  type="button"
                  onClick={() => { setActiveTab("employer"); if (isSubmitted) resetForm(); }}
                  style={{
                    flex: 1,
                    padding: "9px 8px",
                    borderRadius: 9,
                    border: "none",
                    background: activeTab === "employer" ? "#F59E0B" : "transparent",
                    color: activeTab === "employer" ? "#0F172A" : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: 12.5,
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  Hire Workforce
                </button>
                
                <button
                  type="button"
                  onClick={() => { setActiveTab("candidate"); if (isSubmitted) resetForm(); }}
                  style={{
                    flex: 1,
                    padding: "9px 8px",
                    borderRadius: 9,
                    border: "none",
                    background: activeTab === "candidate" ? "#F59E0B" : "transparent",
                    color: activeTab === "candidate" ? "#0F172A" : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: 12.5,
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  Find a Job
                </button>

                <button
                  type="button"
                  onClick={() => { setActiveTab("support"); if (isSubmitted) resetForm(); }}
                  style={{
                    flex: 1,
                    padding: "9px 8px",
                    borderRadius: 9,
                    border: "none",
                    background: activeTab === "support" ? "#F59E0B" : "transparent",
                    color: activeTab === "support" ? "#0F172A" : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: 12.5,
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  Support / Other
                </button>
              </div>
            </div>

            {/* Form Body */}
            <div style={{ padding: "28px 26px" }}>
              {isSubmitted ? (
                /* Success Card */
                <div style={{ textAlign: "center", padding: "16px 0" }}>
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
                      fontWeight: 800,
                      color: "#0F172A",
                      margin: "0 0 8px",
                    }}
                  >
                    Inquiry Logged Successfully!
                  </h3>
                  
                  <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.6, margin: "0 0 24px" }}>
                    Reference ID: <code style={{ background: "#F1F5F9", padding: "3px 8px", borderRadius: 6, fontWeight: 700, color: "#0F172A" }}>{submittedLeadId}</code>.<br />
                    Our senior operations lead has received your details and will call you on <strong>+91 {formData.phone}</strong>.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                        fontSize: 14,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        boxShadow: "0 4px 14px rgba(22, 163, 74, 0.25)",
                      }}
                    >
                      <MessageCircle size={18} />
                      <span>Chat on WhatsApp Directly</span>
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
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  
                  {/* Selectable Category Chips */}
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 8 }}>
                      Workforce Category *
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                      {categories.map((cat) => {
                        const isSelected = formData.category === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, category: cat.id })}
                            style={{
                              padding: "10px 12px",
                              borderRadius: 10,
                              border: isSelected ? "1.5px solid #0F172A" : "1px solid #E2E8F0",
                              background: isSelected ? "#0F172A" : "#FFFFFF",
                              color: isSelected ? "#FFFFFF" : "#334155",
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              fontSize: 12.5,
                              fontWeight: 700,
                              cursor: "pointer",
                              textAlign: "left",
                              transition: "all 0.15s ease",
                            }}
                          >
                            <span>{cat.icon}</span>
                            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{cat.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Volume Chips (Employers only) */}
                  {activeTab === "employer" && (
                    <div>
                      <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 8 }}>
                        Required Workforce Volume *
                      </label>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                        {volumes.map((vol) => {
                          const isSelected = formData.workersCount === vol.id;
                          return (
                            <button
                              key={vol.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, workersCount: vol.id })}
                              style={{
                                padding: "8px 4px",
                                borderRadius: 8,
                                border: isSelected ? "1.5px solid #F59E0B" : "1px solid #E2E8F0",
                                background: isSelected ? "rgba(245, 158, 11, 0.1)" : "#FFFFFF",
                                color: isSelected ? "#B45309" : "#475569",
                                fontSize: 12,
                                fontWeight: 700,
                                cursor: "pointer",
                                textAlign: "center",
                                transition: "all 0.15s ease",
                              }}
                            >
                              {vol.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Name & Company Input Fields */}
                  <div style={{ display: "grid", gridTemplateColumns: activeTab === "employer" ? "1fr 1fr" : "1fr", gap: 14 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        {activeTab === "employer" ? "Contact Person Name *" : "Your Full Name *"}
                      </label>
                      <div style={{ position: "relative" }}>
                        <User size={16} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
                        <input
                          type="text"
                          required
                          placeholder={activeTab === "employer" ? "Rahul Sharma" : "Vikram Singh"}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            width: "100%",
                            boxSizing: "border-box",
                            background: "#F8FAFC",
                            border: "1.5px solid #E2E8F0",
                            borderRadius: 10,
                            padding: "11px 14px 11px 36px",
                            fontSize: 13.5,
                            fontWeight: 500,
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    {activeTab === "employer" && (
                      <div>
                        <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                          Enterprise Name *
                        </label>
                        <div style={{ position: "relative" }}>
                          <Building2 size={16} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
                          <input
                            type="text"
                            required
                            placeholder="e.g. QuickLogistics Pvt Ltd"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            style={{
                              width: "100%",
                              boxSizing: "border-box",
                              background: "#F8FAFC",
                              border: "1.5px solid #E2E8F0",
                              borderRadius: 10,
                              padding: "11px 14px 11px 36px",
                              fontSize: 13.5,
                              fontWeight: 500,
                              outline: "none",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Phone & City Inputs */}
                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 14 }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <label style={{ fontSize: 12.5, fontWeight: 700, color: "#334155" }}>
                          Mobile / WhatsApp *
                        </label>
                        <span style={{ fontSize: 11, color: formData.phone.length === 10 ? "#16A34A" : "#94A3B8", fontWeight: 700 }}>
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
                            fontSize: 13.5,
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
                            border: errorMsg ? "1.5px solid #EF4444" : "1.5px solid #E2E8F0",
                            borderRadius: 10,
                            padding: "11px 14px 11px 48px",
                            fontSize: 14,
                            fontWeight: 600,
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                        Deployment City *
                      </label>
                      <div style={{ position: "relative" }}>
                        <MapPin size={16} color="#94A3B8" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          style={{
                            width: "100%",
                            boxSizing: "border-box",
                            background: "#F8FAFC",
                            border: "1.5px solid #E2E8F0",
                            borderRadius: 10,
                            padding: "11px 12px 11px 36px",
                            fontSize: 13,
                            fontWeight: 600,
                            outline: "none",
                            color: "#0F172A",
                          }}
                        >
                          {cities.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {errorMsg && (
                    <div style={{ color: "#EF4444", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                      <AlertCircle size={14} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Notes / Special requirements */}
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
                      Special Notes or Shift Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder={activeTab === "employer" ? "Shift timings, specific localities (e.g. Saket, Whitefield), or vehicle requirements..." : "Any previous delivery or housekeeping experience..."}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        background: "#F8FAFC",
                        border: "1.5px solid #E2E8F0",
                        borderRadius: 10,
                        padding: "10px 14px",
                        fontSize: 13,
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "inherit",
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
                      padding: "14px",
                      fontWeight: 700,
                      fontSize: 14.5,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      boxShadow: "0 6px 18px rgba(15, 23, 42, 0.2)",
                      transition: "transform 0.15s ease, background 0.15s ease",
                    }}
                  >
                    <Send size={15} />
                    <span>{activeTab === "employer" ? "Submit Staffing Request" : "Submit Direct Application"}</span>
                  </button>

                  <div style={{ textAlign: "center", fontSize: 11.5, color: "#94A3B8" }}>
                    🔒 100% Encrypted & Telemetry-Logged directly in Jobtrix Operations HQ.
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </Section>

      {/* 3. REGIONAL OPERATIONAL HUBS GRID */}
      <section
        style={{
          background: "#FFFFFF",
          borderTop: "1px solid #E2E8F0",
          padding: "60px 24px 70px",
        }}
      >
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
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
                fontSize: "clamp(24px, 3vw, 32px)",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {hubs.map((hub, idx) => (
              <Reveal key={hub.city} delay={idx * 70}>
                <div
                  className="jx-hover-lift"
                  style={{
                    background: "#F8FAFC",
                    borderRadius: 16,
                    padding: "22px 20px",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <MapPin size={17} color="#D97706" />
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: "#0F172A", margin: 0 }}>
                        {hub.city}
                      </h4>
                    </div>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E" }} />
                  </div>

                  <div style={{ fontSize: 13, color: "#475569", fontWeight: 500, marginBottom: 10 }}>
                    {hub.areas}
                  </div>

                  <div style={{ fontSize: 12, color: "#64748B", borderTop: "1px solid #E2E8F0", paddingTop: 8 }}>
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
