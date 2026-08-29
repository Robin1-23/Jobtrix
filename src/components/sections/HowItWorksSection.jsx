import React from "react";
import { MessageSquare, UserCheck, Target, CheckCircle2 } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { Section } from "../common/Section";
import { Reveal, TextReveal } from "../common/Reveal";

export function HowItWorksSection() {
  return (
    <Section id="how" bg={TOKENS.paper} style={{ paddingTop: 92, paddingBottom: 92 }}>
      <Reveal>
        {/* Top yellow accent bar */}
        <div
          style={{
            width: 54,
            height: 4,
            background: TOKENS.amber,
            borderRadius: 4,
            margin: "0 auto 18px",
          }}
        />

        <TextReveal
          as="h2"
          text="Simple 4-step journey from first message to filled shift"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(30px, 3.8vw, 46px)",
            fontWeight: 700,
            color: TOKENS.navy,
            lineHeight: 1.15,
            textAlign: "center",
            margin: "0 auto 16px",
            letterSpacing: "-0.015em",
            maxWidth: 680,
            display: "block",
          }}
        />

        <TextReveal
          as="p"
          delay={120}
          text="No complex procedures. Know exactly what to expect from first WhatsApp contact to verified shift deployment."
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.2vw, 17px)",
            color: "#5B657A",
            textAlign: "center",
            maxWidth: 580,
            margin: "0 auto 52px",
            lineHeight: 1.6,
            display: "block",
          }}
        />
      </Reveal>

      {/* 4 Step Cards Matching Reference Screenshot */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        {[
          {
            step: "STEP 01",
            phase: "PHASE 1",
            title: "Candidate Messages In",
            desc: "A worker starts a chat on WhatsApp in their own language—no app download or resume required.",
            icon: MessageSquare,
            accent: "#7C3AED",
            iconBg: "#7C3AED",
            cardBg: "linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 100%)",
            border: "#E9D5FF",
            hoverShadow: "0 20px 40px -12px rgba(124, 58, 237, 0.18)",
          },
          {
            step: "STEP 02",
            phase: "PHASE 2",
            title: "Bot Screens & Verifies",
            desc: "Location, driving license, Aadhaar, shift-fitness, and availability are verified automatically in under 60 seconds.",
            icon: UserCheck,
            accent: "#06B6D4",
            iconBg: "#06B6D4",
            cardBg: "linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 100%)",
            border: "#A5F3FC",
            hoverShadow: "0 20px 40px -12px rgba(6, 182, 212, 0.18)",
          },
          {
            step: "STEP 03",
            phase: "PHASE 3",
            title: "Employer Gets Shortlist",
            desc: "Only verified, role-matched candidates land in your employer dashboard, ranked by proximity and fit.",
            icon: Target,
            accent: "#4F46E5",
            iconBg: "#4F46E5",
            cardBg: "linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 100%)",
            border: "#C7D2FE",
            hoverShadow: "0 20px 40px -12px rgba(79, 70, 229, 0.18)",
          },
          {
            step: "STEP 04",
            phase: "PHASE 4",
            title: "Onboarding & Payroll",
            desc: "For staffing clients, Jobtrix handles digital contracts, biometric attendance, and automated payout.",
            icon: CheckCircle2,
            accent: "#10B981",
            iconBg: "#10B981",
            cardBg: "linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)",
            border: "#BBF7D0",
            hoverShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.18)",
          },
        ].map((s, i) => (
          <Reveal key={i} delay={i * 90}>
            <div
              className="jx-step-card"
              style={{
                background: s.cardBg,
                border: `1.5px solid ${s.border}`,
                borderRadius: 22,
                padding: "26px 22px 20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 16px -4px rgba(16, 25, 46, 0.04)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = s.hoverShadow;
                e.currentTarget.style.borderColor = s.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px -4px rgba(16, 25, 46, 0.04)";
                e.currentTarget.style.borderColor = s.border;
              }}
            >
              <div>
                {/* Top Row: Solid Colored Square Icon + Step Tag */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: s.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 4px 12px ${s.accent}40`,
                    }}
                  >
                    <s.icon size={18} color="#FFFFFF" strokeWidth={2.4} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#94A3B8",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s.step}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: TOKENS.navy,
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>

                {/* Body */}
                <p style={{ color: "#5B657A", fontSize: 13.5, lineHeight: 1.6, margin: "0 0 20px" }}>
                  {s.desc}
                </p>
              </div>

              {/* Bottom Phase Link */}
              <div
                style={{
                  paddingTop: 14,
                  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: s.accent,
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                <span>{s.phase}</span>
                <span style={{ fontSize: 13 }}>&rarr;</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default HowItWorksSection;
