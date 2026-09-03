import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
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
import CountUp from "../components/common/CountUp";

export function HowItWorksPage() {
  const [activeAudience, setActiveAudience] = useState("employer");
  const [openFaq, setOpenFaq] = useState(0);

  const employerSteps = [
    {
      step: "01",
      title: "Share your staffing requirements",
      desc: "Tell us the number of people you need, job roles (delivery partners, warehouse staff, housekeeping, security guards), shift timings, and your location.",
      icon: <Building2 size={24} color="#D97706" />,
      tag: "Step 1",
      metrics: "Takes 2 minutes",
      details: ["Specify your exact pin-codes", "Choose full-time or part-time shifts", "From 10 to 500+ workers"],
    },
    {
      step: "02",
      title: "Local candidate matching near your stores",
      desc: "We connect you with candidates living within 5 km of your stores, dark stores, or warehouses, ensuring high punctuality and much lower staff turnover.",
      icon: <MapPin size={24} color="#0284C7" />,
      tag: "Step 2",
      metrics: "Within 5 km radius",
      details: ["Candidates live close to work", "Verified vehicle and smartphone", "Ready to start immediately"],
    },
    {
      step: "03",
      title: "Complete document & identity verification",
      desc: "Every candidate is checked for valid government IDs—Aadhaar card, Driving License (for delivery riders), bank account details, and address proof.",
      icon: <FileCheck size={24} color="#16A34A" />,
      tag: "Step 3",
      metrics: "100% Verified",
      details: ["Aadhaar verification", "Driving license check", "Clean background record"],
    },
    {
      step: "04",
      title: "On-site reporting within 24 hours",
      desc: "Approved staff report to your facility with verified Jobtrix ID cards and uniform, ready to begin their shifts with dedicated operations support.",
      icon: <CheckCircle2 size={24} color="#9333EA" />,
      tag: "Step 4",
      metrics: "24-hour turnaround",
      details: ["Direct on-site joining", "Attendance tracking support", "Replacement guarantee if needed"],
    },
  ];

  const seekerSteps = [
    {
      step: "01",
      title: "Apply easily on WhatsApp or website",
      desc: "No resume or English required. Just send your mobile number and preferred city to get started in Hindi, English, or your local language.",
      icon: <PhoneCall size={24} color="#D97706" />,
      tag: "100% Free",
      metrics: "Zero application fee",
      details: ["₹0 fee forever", "No paper resume needed", "Support in Hindi and English"],
    },
    {
      step: "02",
      title: "Choose jobs close to your home",
      desc: "Select verified openings with leading companies like Zomato, Swiggy, Flipkart, and Pronto within 2 to 5 km of your house so you save on travel time and fuel.",
      icon: <MapPin size={24} color="#0284C7" />,
      tag: "Near Your Home",
      metrics: "Save 2 hours travel daily",
      details: ["Delivery, warehouse, housekeeping", "Choose flexible day or night shifts", "Work in your neighborhood"],
    },
    {
      step: "03",
      title: "Fast document check on WhatsApp",
      desc: "Share a photo of your Aadhaar card and Driving License (for riders) directly on WhatsApp. Our team confirms your joining details within a few hours.",
      icon: <ShieldCheck size={24} color="#16A34A" />,
      tag: "Same Day Check",
      metrics: "Fast confirmation",
      details: ["Quick photo verification", "Direct company onboarding slot", "Complete joining guidance"],
    },
    {
      step: "04",
      title: "Start work & get paid on time",
      desc: "Start your job with peace of mind. Receive weekly or daily direct bank transfers, full earnings transparency, and accident insurance coverage.",
      icon: <CreditCard size={24} color="#9333EA" />,
      tag: "Guaranteed Pay",
      metrics: "Weekly / daily transfers",
      details: ["Direct to your bank account", "Weekly incentives and bonuses", "Accidental insurance included"],
    },
  ];

  const faqs = [
    {
      q: "How fast can Jobtrix deploy staff for our company?",
      a: "For standard roles such as delivery riders, warehouse workers, and housekeeping staff, our typical deployment time is within 24 hours of receiving your requirements."
    },
    {
      q: "Does Jobtrix charge any money from job seekers?",
      a: "No, never. Jobtrix is 100% completely free for job seekers and workers. We never charge any registration fees, security deposits, or placement cuts."
    },
    {
      q: "How do you ensure candidates report on time?",
      a: "We only match candidates who live within a 3 to 6 km radius of your location. Because travel time is short, attendance and punctuality are significantly better."
    },
    {
      q: "What documents are required to apply for jobs?",
      a: "Candidates need an Aadhaar card (or Voter ID), active Bank Account details for salary deposits, and a valid Driving License if applying for two-wheeler delivery roles."
    },
    {
      q: "Who can I contact for business partnerships or bulk hiring?",
      a: "You can speak directly with Robin Jain on +91 99912 39374 or email us at robinjain142001@gmail.com. We handle requirements from 10 to 500+ workers."
    }
  ];

  const currentSteps = activeAudience === "employer" ? employerSteps : seekerSteps;

  return (
    <div style={{ background: "#FAFAFA", color: TOKENS.navy, minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* 1. CLEAN HERO SECTION */}
      <section
        style={{
          padding: "70px 24px 44px",
          background: "#FFFFFF",
          borderBottom: "1px solid #EAEAEA",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          
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
              Simple & Transparent
            </span>
          </Reveal>

          <TextReveal
            as="h1"
            text="How Jobtrix Works"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 54px)",
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
                maxWidth: 640,
                margin: "0 auto 32px",
              }}
            >
              Whether you want to hire frontline staff for your business or you are looking for verified work near your home, here is how the process works.
            </p>
          </Reveal>

          {/* Retro Neobrutalist Audience Switcher */}
          <Reveal delay={150}>
            <div
              style={{
                display: "inline-flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: 12,
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
                  border: "2px solid #10192E",
                  background: activeAudience === "employer" ? "#FEF08A" : "#FFFFFF",
                  color: "#10192E",
                  boxShadow: activeAudience === "employer" ? "3px 3px 0 0 #10192E" : "2px 2px 0 0 #10192E",
                  fontWeight: 800,
                  fontSize: 13.5,
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer",
                  transform: activeAudience === "employer" ? "translate(1px, 1px)" : "none",
                }}
              >
                <Briefcase size={16} />
                <span>For Employers (Hiring Staff)</span>
              </button>
              
              <button
                onClick={() => setActiveAudience("seeker")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 22px",
                  borderRadius: 10,
                  border: "2px solid #10192E",
                  background: activeAudience === "seeker" ? "#FEF08A" : "#FFFFFF",
                  color: "#10192E",
                  boxShadow: activeAudience === "seeker" ? "3px 3px 0 0 #10192E" : "2px 2px 0 0 #10192E",
                  fontWeight: 800,
                  fontSize: 13.5,
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer",
                  transform: activeAudience === "seeker" ? "translate(1px, 1px)" : "none",
                }}
              >
                <Users size={16} />
                <span>For Job Seekers (Finding Work)</span>
              </button>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 2. REAL-TIME ROSTER TICKER */}
      <RosterTicker />

      {/* 3. 4-STEP PROGRESSION CARDS */}
      <Section style={{ padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 3.2vw, 36px)",
                fontWeight: 700,
                color: "#10192E",
                margin: "0 0 10px",
              }}
            >
              {activeAudience === "employer" 
                ? "4 Simple Steps to Hire Your Team" 
                : "4 Simple Steps to Start Working"}
            </h2>
            <p style={{ color: "#64748B", fontSize: 15, margin: 0 }}>
              {activeAudience === "employer" 
                ? "From requirement sharing to staff reporting on-site in 24 hours." 
                : "From WhatsApp application to your first verified salary."}
            </p>
          </div>

          {/* Grid of 4 Clean White Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 22,
            }}
          >
            {currentSteps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 80}>
                <div
                  className="jx-neobrutal-card jx-neobrutal-card-interactive"
                  style={{
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div>
                    {/* Top Row: Icon & Step */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          border: "2px solid #10192E",
                          background: "#FFFFFF",
                          boxShadow: "2px 2px 0 0 #10192E",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </div>
                      
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 26,
                          fontWeight: 700,
                          color: "#9CA3AF",
                        }}
                      >
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#10192E",
                        lineHeight: 1.3,
                        margin: "0 0 10px",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{ color: "#4B5563", fontSize: 13.5, lineHeight: 1.55, margin: "0 0 18px" }}>
                      {item.desc}
                    </p>

                    {/* Bullets */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 20 }}>
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#374151" }}>
                          <CheckCircle2 size={14} color="#16A34A" style={{ flexShrink: 0 }} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Metric */}
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 8,
                      border: "1.5px solid #10192E",
                      boxShadow: "1.5px 1.5px 0 0 #10192E",
                      padding: "7px 12px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#10192E",
                      fontFamily: "'Space Grotesk', sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Clock size={13} color="#6B7280" />
                    <span>{item.metrics}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Section>

      {/* 4. CLEAN TRUST METRICS STRIP */}
      <section
        style={{
          background: "#0A0F1D",
          color: "#FFFFFF",
          padding: "54px 24px",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            textAlign: "center",
          }}
        >
          {/* 1. 24h Deployment */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.07)",
              borderRadius: 16,
              padding: "24px 18px",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 3.4vw, 42px)",
                fontWeight: 800,
                color: "#F59E0B",
                lineHeight: 1,
              }}
            >
              <CountUp from={0} to={24} duration={1.5} />h
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", marginTop: 10 }}>
              Deployment Time
            </div>
            <div style={{ fontSize: 12.5, color: "#94A3B8", marginTop: 3 }}>
              Fast on-site onboarding
            </div>
          </div>

          {/* 2. 100,000+ Verified Workers */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.07)",
              borderRadius: 16,
              padding: "24px 18px",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 3.4vw, 42px)",
                fontWeight: 800,
                color: "#38BDF8",
                lineHeight: 1,
              }}
            >
              <CountUp from={0} to={100000} separator="," duration={2} />+
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", marginTop: 10 }}>
              Verified Workers
            </div>
            <div style={{ fontSize: 12.5, color: "#94A3B8", marginTop: 3 }}>
              Aadhaar & DL verified
            </div>
          </div>

          {/* 3. ₹0 Free for Candidates */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.07)",
              borderRadius: 16,
              padding: "24px 18px",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 3.4vw, 42px)",
                fontWeight: 800,
                color: "#4ADE80",
                lineHeight: 1,
              }}
            >
              ₹0
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", marginTop: 10 }}>
              Free for Candidates
            </div>
            <div style={{ fontSize: 12.5, color: "#94A3B8", marginTop: 3 }}>
              Zero registration or cut fees
            </div>
          </div>

          {/* 4. 18+ Top Brands */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.07)",
              borderRadius: 16,
              padding: "24px 18px",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 3.4vw, 42px)",
                fontWeight: 800,
                color: "#C084FC",
                lineHeight: 1,
              }}
            >
              <CountUp from={0} to={18} duration={1.8} />+
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", marginTop: 10 }}>
              Top Brands
            </div>
            <div style={{ fontSize: 12.5, color: "#94A3B8", marginTop: 3 }}>
              Zomato, Swiggy, Flipkart & More
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLEAN FAQ ACCORDION */}
      <Section style={{ padding: "70px 24px 80px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 700,
                color: "#10192E",
                margin: "0 0 8px",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ color: "#64748B", fontSize: 14.5, margin: 0 }}>
              Got questions? Here are quick answers to common queries.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <Reveal key={fIdx} delay={fIdx * 40}>
                  <div
                    onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                    className="jx-neobrutal-card jx-neobrutal-card-interactive"
                    style={{
                      padding: "18px 22px",
                      background: isOpen ? "#FEFDF8" : "#FFFFFF",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                      <h4
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#10192E",
                          margin: 0,
                        }}
                      >
                        {faq.q}
                      </h4>
                      <ChevronDown
                        size={18}
                        color="#64748B"
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          flexShrink: 0,
                        }}
                      />
                    </div>
                    
                    {isOpen && (
                      <p
                        style={{
                          color: "#4B5563",
                          fontSize: 14,
                          lineHeight: 1.6,
                          margin: "12px 0 0",
                          borderTop: "1px solid #F3F4F6",
                          paddingTop: 10,
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

      {/* 6. BOTTOM CTA BAR */}
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            background: "#10192E",
            borderRadius: 22,
            padding: "40px 32px",
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(20px, 2.6vw, 28px)",
                fontWeight: 700,
                margin: "0 0 6px",
              }}
            >
              Need verified frontline staff for your company?
            </h3>
            <p style={{ color: "#94A3B8", fontSize: 14.5, margin: 0 }}>
              Speak directly with our team or message us on WhatsApp today.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              to="/contact"
              style={{
                background: "#F59E0B",
                color: "#10192E",
                padding: "12px 24px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href="https://wa.me/919991239374?text=Hi%20Jobtrix,%20I%20want%20to%20know%20more%20about%20your%20workforce%20services"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "12px 20px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <MessageCircle size={16} color="#22C55E" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HowItWorksPage;
