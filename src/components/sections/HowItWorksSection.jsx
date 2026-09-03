import React from "react";
import { MessageSquare, UserCheck, Target, CheckCircle2, ArrowRight } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { Section } from "../common/Section";
import { Reveal, TextReveal } from "../common/Reveal";

export function HowItWorksSection() {
  const steps = [
    {
      step: "STEP 01",
      phase: "PHASE 1",
      title: "Candidate Messages In",
      desc: "A worker starts a chat on WhatsApp in their own language—no app download or resume required.",
      icon: MessageSquare,
      hoverClass: "jx-triple-purple",
      tagBg: "#F3E8FF",
      accent: "#7C3AED",
    },
    {
      step: "STEP 02",
      phase: "PHASE 2",
      title: "Bot Screens & Verifies",
      desc: "Location, driving license, Aadhaar, shift-fitness, and availability are verified automatically in under 60 seconds.",
      icon: UserCheck,
      hoverClass: "jx-triple-sky",
      tagBg: "#E0F2FE",
      accent: "#0284C7",
    },
    {
      step: "STEP 03",
      phase: "PHASE 3",
      title: "Employer Gets Shortlist",
      desc: "Only verified, role-matched candidates land in your employer dashboard, ranked by proximity and fit.",
      icon: Target,
      hoverClass: "jx-triple-indigo",
      tagBg: "#EEF2FF",
      accent: "#4F46E5",
    },
    {
      step: "STEP 04",
      phase: "PHASE 4",
      title: "Onboarding & Payroll",
      desc: "For staffing clients, Jobtrix handles digital contracts, biometric attendance, and automated payout.",
      icon: CheckCircle2,
      hoverClass: "jx-triple-green",
      tagBg: "#D1FAE5",
      accent: "#10B981",
    },
  ];

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

      {/* 4 Step Neobrutalist Triple-Shadow Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={i} delay={i * 90}>
              <article
                className={`jx-triple-shadow-card ${s.hoverClass}`}
                onClick={() => window.dispatchEvent(new CustomEvent("open-hire-modal"))}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.dispatchEvent(new CustomEvent("open-hire-modal"));
                  }
                }}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        border: "2px solid #10192E",
                        background: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "2px 2px 0 0 #10192E",
                      }}
                    >
                      <Icon size={20} color="#10192E" strokeWidth={2.4} />
                    </div>

                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        fontWeight: 800,
                        color: "#10192E",
                        background: s.tagBg,
                        border: "1.5px solid #10192E",
                        padding: "4px 10px",
                        borderRadius: 8,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        boxShadow: "1.5px 1.5px 0 0 #10192E",
                      }}
                    >
                      {s.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(19px, 2.2vw, 21px)",
                      fontWeight: 800,
                      color: "#10192E",
                      margin: "0 0 12px",
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "#334155",
                      fontSize: 14,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>

                {/* Bottom Phase Row */}
                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 16,
                    borderTop: "2px solid #10192E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#10192E",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span>{s.phase}</span>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                    <span>DETAILS</span>
                    <ArrowRight size={13} strokeWidth={2.8} />
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export default HowItWorksSection;
