import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  FileCheck, 
  PhoneCall, 
  CreditCard, 
  Building2, 
  ChevronDown,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { TOKENS } from "../constants/tokens";
import { Section } from "../components/common/Section";
import { Reveal, TextReveal } from "../components/common/Reveal";
import { RosterTicker } from "../components/ticker/RosterTicker";

export function HowItWorksPage() {
  // Toggle between 'employer' and 'seeker' tabs
  const [activeAudience, setActiveAudience] = useState("employer");
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  const employerSteps = [
    {
      step: "01",
      title: "Define Roles & Location Parameters",
      desc: "Specify your required headcounts, skill categories (delivery riders, warehouse pickers, housekeeping, security), shift requirements, and exact pin-codes across 20+ Indian metro clusters.",
      icon: <Building2 size={24} color="#F59E0B" />,
      tag: "Self-Serve or Assisted",
      metrics: "Average setup: 2 minutes",
      details: ["Instant geo-fence mapping", "Role-specific compliance checklist", "Volume tiering (10 to 1,000+ staff)"],
    },
    {
      step: "02",
      title: "AI Hyperlocal Matching Matrix",
      desc: "Our automated telemetry scans over 100,000+ active candidates within a 5km radius of your operational hubs, factoring in vehicle ownership, shift preferences, and verified work history.",
      icon: <Zap size={24} color="#38BDF8" />,
      tag: "5km Proximity Match",
      metrics: "3x lower attrition",
      details: ["Real-time candidate availability", "Proximity-first routing", "Past platform ratings"],
    },
    {
      step: "03",
      title: "Automated Document & Telephony Screening",
      desc: "Candidates are screened through automated WhatsApp telephony and OCR: Aadhaar authentication, driving license verification, address proof, and police verification history checked in minutes.",
      icon: <FileCheck size={24} color="#10B981" />,
      tag: "100% Verified Only",
      metrics: "Instant digital KYC",
      details: ["Aadhaar & DL verification", "Criminal background check", "Structured telephony screening"],
    },
    {
      step: "04",
      title: "24-Hour Deployment & Live Telemetry",
      desc: "Approved personnel arrive at your facility with verified ID badges and digital onboarding kits. Track attendance, shift compliance, and roster status directly from your Jobtrix Admin telemetry dashboard.",
      icon: <CheckCircle2 size={24} color="#A855F7" />,
      tag: "Rapid Deployment",
      metrics: "Zero upfront commission",
      details: ["Digital joining letter", "Biometric / QR attendance integration", "Dedicated operations manager"],
    },
  ];

  const seekerSteps = [
    {
      step: "01",
      title: "1-Tap Application via WhatsApp or Web",
      desc: "No complicated resumes or English requirements. Submit your mobile number on Jobtrix or chat directly with our WhatsApp recruitment assistant in Hindi, English, or your regional language.",
      icon: <PhoneCall size={24} color="#F59E0B" />,
      tag: "100% Free - ₹0 Fee",
      metrics: "Applies in under 60 seconds",
      details: ["Zero application or placement charges", "No paper resume needed", "Multilingual voice & chat support"],
    },
    {
      step: "02",
      title: "Choose Top Brands Near Your Home",
      desc: "Select verified openings from top companies like Zomato, Swiggy, Flipkart, Pronto, and Urban Company right in your neighborhood (within 2-6 km from your residence).",
      icon: <MapPin size={24} color="#38BDF8" />,
      tag: "Hyperlocal Pin Codes",
      metrics: "Save 2+ hours daily commute",
      details: ["Delivery, Warehouse, Maid & Retail roles", "Full-time, part-time & flexible shifts", "Select preferred localities"],
    },
    {
      step: "03",
      title: "Fast Document Check & Interview Slot",
      desc: "Upload photos of your Aadhaar card and Driving License directly on WhatsApp. Receive your interview or direct onboarding slot within 24 hours.",
      icon: <ShieldCheck size={24} color="#10B981" />,
      tag: "Direct Company Verification",
      metrics: "24h Interview Confirmation",
      details: ["Safe & encrypted document check", "Direct hiring manager connection", "Free training guidelines"],
    },
    {
      step: "04",
      title: "Start Working & Guaranteed On-Time Payouts",
      desc: "Begin your shift with complete peace of mind. Benefit from weekly or daily direct bank transfers, performance incentives, accidental insurance coverage, and zero middleman deductions.",
      icon: <CreditCard size={24} color="#A855F7" />,
      tag: "Direct Bank Transfer",
      metrics: "PF + ESI + Weekly Payouts",
      details: ["Transparent earnings dashboard", "Health & accidental insurance", "Weekly performance bonuses"],
    },
  ];

  const faqs = [
    {
      q: "How fast can Jobtrix deploy a workforce for enterprise employers?",
      a: "For standard roles (delivery partners, warehouse packers, and housekeeping staff), our average turnaround time is under 24 hours from requirement submission to candidate reporting on-site."
    },
    {
      q: "Does Jobtrix charge job seekers any fee?",
      a: "No, never. Jobtrix is 100% completely free for job seekers and candidates. We strictly enforce a ₹0 fee policy. Anyone claiming to charge money on behalf of Jobtrix is fraudulent."
    },
    {
      q: "How does the hyperlocal AI matching work?",
      a: "We cluster verified candidates by their exact residence coordinates and match them to client fulfillment centers and dark stores within a 3–6 km radius. This drastically cuts commute friction and improves retention by over 40%."
    },
    {
      q: "What documents are required for candidates to get verified?",
      a: "Candidates need an Aadhaar card (or Voter ID), Bank Account details for salary deposit, and a valid Driving License with vehicle registration if applying for delivery partner roles."
    },
    {
      q: "How can I contact Jobtrix for custom corporate workforce solutions?",
      a: "You can reach our corporate enterprise desk directly via phone or WhatsApp at +91 99912 39374 or by email at robinjain142001@gmail.com. We provide customized service agreements for high-volume staffing."
    }
  ];

  const currentSteps = activeAudience === "employer" ? employerSteps : seekerSteps;

  return (
    <div style={{ background: "#FAFAFA", color: TOKENS.navy, minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* 1. HERO SECTION: Clean, High-Contrast Jobtrix Aesthetic */}
      <section
        style={{
          padding: "72px 24px 60px",
          background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
          borderBottom: "1px solid #E2E8F0",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1140, margin: "0 auto", textAlign: "center" }}>
          
          {/* Top Pill Badge */}
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
              <span>THE JOBTRIX WORKFORCE METHODOLOGY</span>
            </div>
          </Reveal>

          {/* Main Headline */}
          <TextReveal
            as="h1"
            text="How modern workforce hiring works at speed & scale"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 56px)",
              fontWeight: 700,
              color: "#0F172A",
              lineHeight: 1.15,
              maxWidth: 820,
              margin: "0 auto 20px",
              letterSpacing: "-0.02em",
            }}
          />

          {/* Subtitle */}
          <Reveal delay={100}>
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 18.5px)",
                color: "#475569",
                lineHeight: 1.6,
                maxWidth: 680,
                margin: "0 auto 36px",
              }}
            >
              Whether you are an enterprise deploying 500+ riders across town or a job seeker wanting a verified job in your pin code within 24 hours, here is how our technology powers every placement.
            </p>
          </Reveal>

          {/* Interactive Audience Switcher Pill */}
          <Reveal delay={150}>
            <div
              style={{
                display: "inline-flex",
                background: "#0F172A",
                padding: "5px",
                borderRadius: 14,
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.14)",
                marginBottom: 20,
              }}
            >
              <button
                onClick={() => setActiveAudience("employer")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 22px",
                  borderRadius: 10,
                  border: "none",
                  background: activeAudience === "employer" ? "#F59E0B" : "transparent",
                  color: activeAudience === "employer" ? "#0F172A" : "#94A3B8",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Briefcase size={17} />
                <span>For Employers (Hire Teams)</span>
              </button>
              
              <button
                onClick={() => setActiveAudience("seeker")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 22px",
                  borderRadius: 10,
                  border: "none",
                  background: activeAudience === "seeker" ? "#F59E0B" : "transparent",
                  color: activeAudience === "seeker" ? "#0F172A" : "#94A3B8",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Users size={17} />
                <span>For Job Seekers (Get Hired)</span>
              </button>
            </div>
          </Reveal>

          {/* Dynamic Sub-tag */}
          <div style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>
            {activeAudience === "employer" 
              ? "Showing the 4-step rapid deployment roadmap for logistics, cleaning & retail enterprises" 
              : "Showing the transparent 4-step job placement journey for candidates"}
          </div>

        </div>
      </section>

      {/* 2. LIVE OPENINGS TICKER */}
      <RosterTicker />

      {/* 3. INTERACTIVE 4-STEP BENTO TIMELINE */}
      <Section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: 54 }}>
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
              Step-by-step Execution
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 3.2vw, 38px)",
                fontWeight: 700,
                color: "#0F172A",
                marginTop: 6,
              }}
            >
              {activeAudience === "employer" 
                ? "From requirement to verified on-ground deployment" 
                : "From WhatsApp hello to your first paycheck"}
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {currentSteps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 90}>
                <div
                  className="jx-hover-lift"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 22,
                    padding: "32px 26px",
                    border: "1px solid #E2E8F0",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Top Row: Step Number & Icon */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          background: "#0F172A",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 6px 14px rgba(15, 23, 42, 0.15)",
                        }}
                      >
                        {item.icon}
                      </div>
                      
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 28,
                          fontWeight: 800,
                          color: "#CBD5E1",
                        }}
                      >
                        {item.step}
                      </span>
                    </div>

                    {/* Step Tag */}
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: 11.5,
                        fontWeight: 700,
                        padding: "3px 9px",
                        borderRadius: 6,
                        background: "rgba(245, 158, 11, 0.12)",
                        color: "#B45309",
                        marginBottom: 12,
                      }}
                    >
                      {item.tag}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 19,
                        fontWeight: 700,
                        color: "#0F172A",
                        lineHeight: 1.3,
                        margin: "0 0 12px",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6, margin: "0 0 20px" }}>
                      {item.desc}
                    </p>

                    {/* Check Bullet Points */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#334155" }}>
                          <CheckCircle2 size={15} color="#16A34A" style={{ flexShrink: 0 }} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div
                    style={{
                      background: "#F8FAFC",
                      borderRadius: 10,
                      padding: "8px 12px",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#475569",
                      border: "1px solid #EEF2F6",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Clock size={13} color="#64748B" />
                    <span>{item.metrics}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Section>

      {/* 4. METRICS / TELEMETRY BANNER (Proof of Scale) */}
      <section
        style={{
          background: "#0F172A",
          color: "#FFFFFF",
          padding: "54px 24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 38, fontWeight: 800, color: "#F59E0B" }}>
              24h
            </div>
            <div style={{ fontSize: 13.5, color: "#94A3B8", marginTop: 4 }}>Turnaround Time</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 38, fontWeight: 800, color: "#38BDF8" }}>
              100k+
            </div>
            <div style={{ fontSize: 13.5, color: "#94A3B8", marginTop: 4 }}>Verified Candidates</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 38, fontWeight: 800, color: "#4ADE80" }}>
              98.4%
            </div>
            <div style={{ fontSize: 13.5, color: "#94A3B8", marginTop: 4 }}>Roster Fulfillment</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 38, fontWeight: 800, color: "#C084FC" }}>
              ₹0 Fee
            </div>
            <div style={{ fontSize: 13.5, color: "#94A3B8", marginTop: 4 }}>For All Job Seekers</div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FAQ ACCORDION */}
      <Section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(15, 23, 42, 0.06)",
                padding: "4px 12px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                color: "#475569",
                marginBottom: 10,
              }}
            >
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 3.2vw, 36px)",
                fontWeight: 700,
                color: "#0F172A",
                margin: 0,
              }}
            >
              Everything you need to know
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <Reveal key={fIdx} delay={fIdx * 50}>
                  <div
                    onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 16,
                      border: isOpen ? "1.5px solid #F59E0B" : "1px solid #E2E8F0",
                      padding: "20px 24px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: isOpen ? "0 8px 24px rgba(245, 158, 11, 0.08)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                      <h4
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 16.5,
                          fontWeight: 700,
                          color: "#0F172A",
                          margin: 0,
                        }}
                      >
                        {faq.q}
                      </h4>
                      <ChevronDown
                        size={18}
                        color={isOpen ? "#F59E0B" : "#64748B"}
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.25s ease",
                          flexShrink: 0,
                        }}
                      />
                    </div>
                    
                    {isOpen && (
                      <p
                        style={{
                          color: "#475569",
                          fontSize: 14.5,
                          lineHeight: 1.6,
                          margin: "14px 0 0",
                          borderTop: "1px solid #F1F5F9",
                          paddingTop: 12,
                        }}
                      >
                        {faq.a}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </Section>

      {/* 6. BOTTOM CONVERSION ACTION STRIP */}
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            borderRadius: 28,
            padding: "48px 36px",
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 28,
            boxShadow: "0 24px 60px -15px rgba(15, 23, 42, 0.35)",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(22px, 2.8vw, 32px)",
                fontWeight: 700,
                margin: "0 0 8px",
              }}
            >
              Ready to experience effortless workforce operations?
            </h3>
            <p style={{ color: "#94A3B8", fontSize: 15, margin: 0, maxWidth: 540 }}>
              Speak with our senior talent deployment team or connect immediately on WhatsApp.
            </p>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link
              to="/contact"
              style={{
                background: "#F59E0B",
                color: "#0F172A",
                padding: "14px 28px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14.5,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/919991239374?text=Hi%20Jobtrix,%20I%20want%20to%20know%20more%20about%20your%20workforce%20services"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "14px 24px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14.5,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <MessageCircle size={17} color="#22C55E" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HowItWorksPage;
