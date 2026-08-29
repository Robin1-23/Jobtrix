import React, { useState } from "react";
import { Bike, Package, HeartPulse, Utensils, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { Section, Eyebrow } from "../common/Section";
import { Reveal, TextReveal } from "../common/Reveal";

const sectorProfiles = [
  {
    id: "delivery",
    name: "Delivery & Q-Commerce",
    shortName: "Delivery & Q-Commerce",
    IconComponent: Bike,
    color: "#2563EB",
    stat: "142 riders matched today",
    fillSpeed: "24 Hours Avg Fill",
    roles: ["Hyper-local Rider", "Grocery Picker", "Hub Dispatcher", "Dark Store Lead"],
    screeningSteps: ["Two-Wheeler & Driving License Check", "Aadhaar & Police Verification", "Shift & Radius Allocation"],
    chat: [
      { from: "bot", text: "Namaste Ramesh! Swiggy Instamart hub Sector 29 Gurgaon me 12 riders ki urgent requirement hai. Shift: 7 AM - 3 PM." },
      { from: "user", text: "Mere paas Splendor bike aur valid DL hai. Daily payout milega?" },
      { from: "bot", text: "Haan! Weekly + daily petrol incentive. Aapka DL photo upload kijiye verification ke liye." },
      { from: "user", text: "[DL_Front_Ramesh.jpg uploaded]" },
      { from: "bot", text: "DL Verified! Aapka slot kal 9:00 AM Swiggy Hub Gurgaon me confirmed hai." },
    ],
  },
  {
    id: "warehousing",
    name: "Warehousing & 3PL Logistics",
    shortName: "Warehousing & 3PL",
    IconComponent: Package,
    color: "#D97706",
    stat: "96 associates deployed",
    fillSpeed: "36 Hours Avg Fill",
    roles: ["Forklift Operator", "Inventory Sorter", "Packing Associate", "Inbound Loader"],
    screeningSteps: ["Heavy Machinery Certification", "Night Shift Fitness Check", "Biometric ID Registration"],
    chat: [
      { from: "bot", text: "Hello Imran! Flipkart Bhiwandi Fulfillment Center me 20 Inventory Sorters ki slot open hai." },
      { from: "user", text: "Night shift allowance milta hai kya? Experience 1 saal ka hai." },
      { from: "bot", text: "Bilkul! ₹14,500 in-hand + ₹2,000 night shift allowance + subsidized cafeteria." },
      { from: "user", text: "Main kal joining ke liye ready hoon." },
      { from: "bot", text: "Superb. E-Aadhaar OTP send kiya hai. Verify hote hi gate pass download karein." },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Patient Support",
    shortName: "Healthcare Support",
    IconComponent: HeartPulse,
    color: "#059669",
    stat: "54 assistants verified",
    fillSpeed: "18 Hours Avg Fill",
    roles: ["General Duty Assistant (GDA)", "Ward Boy / Aaya", "Pharmacy Delivery", "Phlebotomy Assistant"],
    screeningSteps: ["GDA Certification / Nursing Diploma", "Hepatitis B Vaccination Status", "Hospital Protocol Orientation"],
    chat: [
      { from: "bot", text: "Namaste Sunita ji. Max Hospital Saket me Female Patient Care Assistant ki opening hai." },
      { from: "user", text: "Mere paas Red Cross 6-month GDA certificate hai. Duty timing kya hogi?" },
      { from: "bot", text: "Day shift: 8 AM - 4 PM. In-hand ₹16,000 + ESI & PF benefits." },
      { from: "user", text: "Certificate send kar rahi hoon." },
      { from: "bot", text: "Certificate verified by HR desk. Medical checkup slot scheduled for tomorrow 10 AM." },
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality, QSR & Cloud Kitchens",
    shortName: "Hospitality & QSR",
    IconComponent: Utensils,
    color: "#DC2626",
    stat: "88 kitchen staff onboarded",
    fillSpeed: "20 Hours Avg Fill",
    roles: ["Line Cook / Commis", "Kitchen Steward", "Barista / Counter Cashier", "Prep Assistant"],
    screeningSteps: ["FSSAI Food Hygiene Check", "Basic English / Hindi Menu Reading", "Immediate Medical Clearance"],
    chat: [
      { from: "bot", text: "Hi Ajay! Haldiram’s Connaught Place needs 4 Kitchen Stewards & Prep Staff immediately." },
      { from: "user", text: "Maine Domino’s me 8 months kaam kiya hai. Uniform aur meal free hai?" },
      { from: "bot", text: "Yes! 2 Duty meals + 2 sets uniform free. Salary ₹15,200 + monthly service bonus." },
      { from: "user", text: "Kab join kar sakta hoon?" },
      { from: "bot", text: "Store Manager Arvind ji kal 11:30 AM interview lenge. Store address link sent." },
    ],
  },
  {
    id: "facility",
    name: "Facility Management & Corporate Parks",
    shortName: "Facility Management",
    IconComponent: Building2,
    color: "#7C3AED",
    stat: "120 staff active this week",
    fillSpeed: "24 Hours Avg Fill",
    roles: ["Housekeeping Executive", "Pantry Boy", "HVAC / MEP Technician", "Floor Supervisor"],
    screeningSteps: ["Address Verification (Physical Check)", "Client Site Protocol Clearance", "Uniform & Grooming Standards"],
    chat: [
      { from: "bot", text: "Namaste Rajesh. DLF CyberCity Gurgaon corporate tower me 10 Pantry Executives chahiye." },
      { from: "user", text: "Office timing 9 to 6 rahegi? Sunday off hai?" },
      { from: "bot", text: "Haan, 5.5 days working. Sunday strictly off. Corporate grooming standard mandatory." },
      { from: "user", text: "Aadhaar aur Bank passbook ready hai." },
      { from: "bot", text: "Documents verified! Briefing video complete kijiye to activate your digital badge." },
    ],
  },
  {
    id: "security",
    name: "Security, Guarding & Loss Prevention",
    shortName: "Security & Guarding",
    IconComponent: ShieldCheck,
    color: "#0284C7",
    stat: "75 guards on active rosters",
    fillSpeed: "24 Hours Avg Fill",
    roles: ["Commercial Security Guard", "Bouncer / Event Marshal", "CCTV Monitor", "Gate Access Controller"],
    screeningSteps: ["PSARA License / Police Verification", "Physical Fitness & Height Criteria", "Ex-Servicemen Documentation"],
    chat: [
      { from: "bot", text: "Jai Hind Vikram ji. Embassy TechVillage Bangalore me 8 PSARA certified guards required hain." },
      { from: "user", text: "Height 5'11\" hai aur PSARA certificate UP se certified hai." },
      { from: "bot", text: "Perfect. 12-hr rotation shift with 4 weekly offs. In-hand ₹18,500 + PF + accommodation." },
      { from: "user", text: "Accommodation campus ke paas hai na?" },
      { from: "bot", text: "Yes, 1.2 km distance with shuttle. Police clearance document upload karein." },
    ],
  },
];

export function SectorsStudioSection() {
  const [activeSector, setActiveSector] = useState(0);

  return (
    <Section bg={TOKENS.paper} style={{ paddingTop: 92, paddingBottom: 92 }}>
      <Reveal>
        {/* Top yellow accent bar matching Hero design language */}
        <div
          style={{
            width: 54,
            height: 4,
            background: TOKENS.amber,
            borderRadius: 4,
            marginBottom: 18,
          }}
        />

        <Eyebrow>Sectors we serve</Eyebrow>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 36 }}>
          <TextReveal
            as="h2"
            text="Built for high-turnover, high-volume frontline hiring."
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 3.6vw, 44px)",
              fontWeight: 700,
              color: TOKENS.navy,
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-0.015em",
              maxWidth: 620,
            }}
          />
        </div>

        {/* Clean Interactive Sector Selector Pills */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
          {sectorProfiles.map((sec, idx) => {
            const active = activeSector === idx;
            const Icon = sec.IconComponent;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveSector(idx)}
                className="jx-sector-pill"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "10px 18px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  fontFamily: "'Inter', sans-serif",
                  background: active ? TOKENS.navy : "#FFFFFF",
                  color: active ? "#FFFFFF" : "#475569",
                  border: active ? `1.5px solid ${TOKENS.navy}` : "1px solid #E2E8F0",
                  boxShadow: active ? "0 4px 14px rgba(16, 25, 46, 0.15)" : "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <Icon
                  size={16}
                  strokeWidth={2.2}
                  color={active ? TOKENS.amber : "#64748B"}
                  className="jx-interactive-icon"
                />
                <span>{sec.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Unified Spotlight Stage */}
        {(() => {
          const current = sectorProfiles[activeSector];
          return (
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 22,
                border: "1px solid #E2E8F0",
                boxShadow: "0 18px 45px -15px rgba(16, 25, 46, 0.07), 0 2px 6px rgba(0, 0, 0, 0.02)",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1.15fr 0.95fr",
                gap: 40,
                padding: "clamp(24px, 4vw, 44px) clamp(16px, 3.5vw, 40px)",
                alignItems: "center",
              }}
              className="jx-hero jx-spotlight-stage"
            >
              {/* Left Column: Operational Insight & Roles */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11.5,
                      fontWeight: 700,
                      color: current.color,
                      background: `${current.color}14`,
                      padding: "4px 12px",
                      borderRadius: 20,
                      letterSpacing: "0.04em",
                    }}
                  >
                    ● {current.stat}
                  </span>
                  <span style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>
                    ⚡ {current.fillSpeed}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    fontWeight: 700,
                    color: TOKENS.navy,
                    margin: "0 0 16px",
                    lineHeight: 1.2,
                  }}
                >
                  {current.name}
                </h3>

                {/* Role tags */}
                <div style={{ marginBottom: 26 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, fontFamily: "'IBM Plex Mono', monospace" }}>
                    Frequent Openings Sourced:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {current.roles.map((r, i) => (
                      <span
                        key={i}
                        style={{
                          background: "#F1F5F9",
                          color: TOKENS.navy,
                          fontSize: 13,
                          fontWeight: 600,
                          padding: "6px 12px",
                          borderRadius: 8,
                          border: "1px solid #E2E8F0",
                        }}
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Automated Checkpoints */}
                <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, fontFamily: "'IBM Plex Mono', monospace" }}>
                    Automated WhatsApp Checkpoints:
                  </div>
                  <div style={{ display: "grid", gap: 10 }}>
                    {current.screeningSteps.map((step, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "#334155" }}>
                        <CheckCircle2 size={16} color={current.color} strokeWidth={2.4} />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 32 }}>
                  <a
                    href="#contact"
                    className="jx-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: TOKENS.navy,
                      color: "#FFFFFF",
                      padding: "12px 22px",
                      borderRadius: 10,
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(16, 25, 46, 0.15)",
                    }}
                  >
                    Deploy {current.shortName} team &rarr;
                  </a>
                </div>
              </div>

              {/* Right Column: Authentic WhatsApp Conversation Preview */}
              <div
                style={{
                  background: "#0E182A",
                  borderRadius: 18,
                  padding: "24px",
                  boxShadow: "0 20px 40px -12px rgba(16, 25, 46, 0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {/* WhatsApp Chat Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: 14, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "#25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontWeight: 800,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    JX
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                      Jobtrix WhatsApp Bot
                      <span style={{ fontSize: 10.5, background: "rgba(34, 197, 94, 0.2)", color: "#22C55E", padding: "1px 6px", borderRadius: 4, fontWeight: 600 }}>
                        VERIFIED
                      </span>
                    </div>
                    <div style={{ color: "#94A3B8", fontSize: 11 }}>
                      Screening &bull; {current.shortName}
                    </div>
                  </div>
                </div>

                {/* Messages Stream */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {current.chat.map((msg, i) => {
                    const isBot = msg.from === "bot";
                    return (
                      <div
                        key={i}
                        style={{
                          alignSelf: isBot ? "flex-start" : "flex-end",
                          background: isBot ? "#1E293B" : "#005C4B",
                          color: "#F8FAFC",
                          padding: "10px 14px",
                          borderRadius: isBot ? "14px 14px 14px 2px" : "14px 14px 2px 14px",
                          fontSize: 12.5,
                          lineHeight: 1.45,
                          maxWidth: "88%",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
                          border: isBot ? "1px solid rgba(255,255,255,0.06)" : "none",
                        }}
                      >
                        {msg.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })()}
      </Reveal>
    </Section>
  );
}

export default SectorsStudioSection;
