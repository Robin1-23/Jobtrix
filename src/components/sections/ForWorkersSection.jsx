import React from "react";
import { BadgeCheck, ShieldCheck, Headphones, Navigation } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { Section } from "../common/Section";
import { Reveal, TextReveal } from "../common/Reveal";

export function ForWorkersSection() {
  return (
    <Section
      id="workers"
      bg="#FAFAFA"
      style={{
        paddingTop: 80,
        paddingBottom: 84,
        borderTop: `1px solid ${TOKENS.line}`,
        borderBottom: `1px solid ${TOKENS.line}`,
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.045) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.045) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
      }}
    >
      {/* TOP HERO SHOWCASE (EXACTLY MATCHING USER SCREENSHOT) */}
      <Reveal>
        <div className="jx-jobseeker-hero-stage">
          
          {/* FLOATING WORKER: Top-Left (Orange Cap, Pizza boxes) */}
          <div className="jx-float-worker jx-worker-tl">
            <img
              src="/images/worker_top_left.png"
              alt="Delivery partner with pizza box"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* FLOATING CARD: Left (Delivery around Koramangala - Zomato) */}
          <div className="jx-float-card jx-card-left">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#CB202D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: 10.5,
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.02em",
                boxShadow: "0 4px 10px rgba(203, 32, 45, 0.3)",
              }}
            >
              zomato
            </div>
            <div style={{ marginTop: 10 }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: TOKENS.navy,
                  lineHeight: 1.25,
                }}
              >
                Delivery around<br />Koramangala
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#64748B",
                  marginTop: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontWeight: 500,
                }}
              >
                <span>Zomato</span>
                <span style={{ color: "#16A34A", fontWeight: 700 }}>✓</span>
              </div>
            </div>
          </div>

          {/* FLOATING WORKER: Bottom-Left (Helmet & parcel) */}
          <div className="jx-float-worker jx-worker-bl">
            <img
              src="/images/worker_bottom_left.png"
              alt="Delivery partner with bike helmet"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* CENTER CORE: Headline, Subtitle, Purple WhatsApp CTA & Trusted By Logos */}
          <div className="jx-jobseeker-center">
            <TextReveal
              as="h2"
              text="Find your perfect delivery job"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 4.4vw, 56px)",
                fontWeight: 700,
                color: "#10192E",
                lineHeight: 1.15,
                textAlign: "center",
                margin: "0 auto 12px",
                letterSpacing: "-0.015em",
                maxWidth: 680,
                display: "block",
              }}
            />

            <TextReveal
              as="p"
              delay={100}
              text="Get a guaranteed job and earn ₹25,000+"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(15px, 1.25vw, 17.5px)",
                color: "#64748B",
                textAlign: "center",
                margin: "0 auto 28px",
                display: "block",
                fontWeight: 400,
              }}
            />

            {/* Purple WhatsApp Pill CTA Matching Screenshot */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 26 }}>
              <a
                href="https://wa.me/919142252116?text=Hi%20Jobtrix%2C%20I%20am%20looking%20for%20a%20delivery%20job%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="jx-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  background: "#581C87",
                  color: "#FFFFFF",
                  padding: "13px 26px",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  boxShadow: "0 10px 25px -4px rgba(88, 28, 135, 0.45)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {/* WhatsApp Chat Bubble Icon */}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.25-1.93 1.29-.49.04-1.12.06-3.62-.97-2.94-1.21-4.83-4.22-4.98-4.42-.14-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.14.67-.08.19-.22.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.07.13.07.76-.17 1.44z" />
                </svg>
                <span>APPLY NOW</span>
              </a>
            </div>

            {/* We are trusted by */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13.5,
                color: "#64748B",
                fontWeight: 500,
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              We are trusted by
            </div>

            {/* 10 Partner App Icons Grid */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/trusted_by_logos.png"
                alt="Trusted by Blinkit, Instamart, Zepto, Swiggy, Zomato, Porter, Flipkart, Shadowfax, Rapido, Uber"
                style={{
                  width: "100%",
                  maxWidth: 240,
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: 10,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              />
            </div>
          </div>

          {/* FLOATING WORKER: Top-Right (Yellow t-shirt, backpack) */}
          <div className="jx-float-worker jx-worker-tr">
            <img
              src="/images/worker_top_right.png"
              alt="Delivery partner with backpack"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* FLOATING CARD: Right (Delivery around Saket - Flipkart) */}
          <div className="jx-float-card jx-card-right">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#2874F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFD200",
                fontWeight: 800,
                fontSize: 18,
                boxShadow: "0 4px 10px rgba(40, 116, 240, 0.3)",
              }}
            >
              ⚡
            </div>
            <div style={{ marginTop: 10 }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: TOKENS.navy,
                  lineHeight: 1.25,
                }}
              >
                Delivery around<br />Saket
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#64748B",
                  marginTop: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontWeight: 500,
                }}
              >
                <span>Flipkart</span>
                <span style={{ color: "#16A34A", fontWeight: 700 }}>✓</span>
              </div>
            </div>
          </div>

          {/* FLOATING WORKER: Bottom-Right (Red polo, black cap, carton box) */}
          <div className="jx-float-worker jx-worker-br">
            <img
              src="/images/worker_bottom_right.png"
              alt="Delivery partner with box"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

        </div>
      </Reveal>

      {/* 2x2 Candidate Protection & Trust Cards */}
      <Reveal delay={120}>
        <div style={{ marginTop: 72 }}>
          <div className="jx-worker-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {[
              {
                title: "No cost to apply",
                badge: "100% FREE",
                body: "We never charge candidates for placement, interview tokens, or onboarding. Ever.",
                badgeColor: "#16A34A",
                badgeBg: "rgba(22, 163, 74, 0.08)",
                iconBg: "#DCFCE7",
                icon: <BadgeCheck className="jx-interactive-icon" size={22} color="#16A34A" strokeWidth={2.2} />,
              },
              {
                title: "Direct verified employers",
                badge: "GOVT COMPLIANT",
                body: "Zero middlemen. Work directly with licensed logistics, retail, and hospital operators.",
                badgeColor: "#0284C7",
                badgeBg: "rgba(2, 132, 199, 0.08)",
                iconBg: "#E0F2FE",
                icon: <ShieldCheck className="jx-interactive-icon" size={22} color="#0284C7" strokeWidth={2.2} />,
              },
              {
                title: "Live human backup",
                badge: "HUMAN DESK",
                body: "If the bot gets stuck, a real recruitment coordinator takes over instantly on chat.",
                badgeColor: "#9333EA",
                badgeBg: "rgba(147, 51, 234, 0.08)",
                iconBg: "#F3E8FF",
                icon: <Headphones className="jx-interactive-icon" size={22} color="#9333EA" strokeWidth={2.2} />,
              },
              {
                title: "Hyper-local radius",
                badge: "NEARBY ONLY",
                body: "Only get offered jobs in your chosen PIN codes, so you spend less time commuting.",
                badgeColor: "#D97706",
                badgeBg: "rgba(217, 119, 6, 0.08)",
                iconBg: "#FEF3C7",
                icon: <Navigation className="jx-interactive-icon" size={22} color="#D97706" strokeWidth={2.2} />,
              },
            ].map((c, i) => (
              <div
                key={i}
                className="jx-worker-card"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 18,
                  padding: "24px 22px",
                  boxShadow: "0 4px 14px -4px rgba(16, 25, 46, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Top Row: Icon + Pill Tag */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: c.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {c.icon}
                    </div>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: c.badgeColor,
                        background: c.badgeBg,
                        padding: "3px 8px",
                        borderRadius: 20,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {c.badge}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 16.5,
                      color: TOKENS.navy,
                      margin: "0 0 8px",
                      lineHeight: 1.25,
                    }}
                  >
                    {c.title}
                  </h4>
                  <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.55, margin: 0 }}>
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default ForWorkersSection;
