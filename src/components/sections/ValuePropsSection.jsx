import React from "react";
import { Layers, MapPin, Zap } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { Section } from "../common/Section";
import { Reveal, TextReveal } from "../common/Reveal";

const FeatureIcons = [
  ({ stroke = "#4F46E5" }) => (
    <Layers className="jx-interactive-icon" size={22} color={stroke} strokeWidth={2.2} />
  ),
  ({ stroke = "#0284C7" }) => (
    <MapPin className="jx-interactive-icon" size={22} color={stroke} strokeWidth={2.2} />
  ),
  ({ stroke = "#D97706" }) => (
    <Zap className="jx-interactive-icon" size={22} color={stroke} strokeWidth={2.2} />
  ),
];

export function ValuePropsSection() {
  return (
    <Section bg={TOKENS.paper} style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          {/* Left side: Dot grid + Headline */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {/* Dot Grid Pattern (3 columns x 7 rows) */}
            <div
              className="jx-value-header-dot"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 5px)",
                gridTemplateRows: "repeat(7, 5px)",
                gap: 13,
                flexShrink: 0,
              }}
            >
              {Array.from({ length: 21 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#818CF8",
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>

            <TextReveal
              as="h2"
              text="Low cost, high volume. Hire on-demand workers in days, not months."
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                color: TOKENS.navy,
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: "-0.015em",
              }}
            />
          </div>

          {/* Right side: Subtitle description */}
          <TextReveal
            as="div"
            delay={120}
            text="Automate hiring and scale your workforce across India effortlessly."
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.2vw, 17.5px)",
              lineHeight: 1.55,
              color: "#475569",
              maxWidth: 290,
              fontWeight: 400,
            }}
          />
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, marginTop: 44 }}>
        {[
          {
            title: "One channel, not five vendors",
            body: "Replace scattered staffing agencies with a single AI-run pipeline that sources across cities.",
            tag: "UNIFIED SOURCING",
            metric: "Single AI Pipeline Across 12+ Cities",
            theme: {
              bg: "#FFFFFF",
              border: "rgba(99, 102, 241, 0.22)",
              accentStripe: "linear-gradient(90deg, #6366F1, #818CF8)",
              iconBg: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
              iconBorder: "1px solid rgba(99, 102, 241, 0.3)",
              iconColor: "#4F46E5",
              tagColor: "#4338CA",
              tagBg: "rgba(99, 102, 241, 0.1)",
              divider: "rgba(99, 102, 241, 0.15)",
              hoverShadow: "0 22px 45px -12px rgba(99, 102, 241, 0.2), 0 1px 3px rgba(0,0,0,0.03)",
            },
          },
          {
            title: "Supply where you need it",
            body: "Candidates are matched within kilometers of your hub, warehouse, or store — slashing commute-driven attrition.",
            tag: "HYPER-LOCAL MATCHING",
            metric: "5 km Avg Distance to Shift",
            theme: {
              bg: "#FFFFFF",
              border: "rgba(14, 165, 233, 0.22)",
              accentStripe: "linear-gradient(90deg, #0EA5E9, #38BDF8)",
              iconBg: "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)",
              iconBorder: "1px solid rgba(14, 165, 233, 0.3)",
              iconColor: "#0284C7",
              tagColor: "#0369A1",
              tagBg: "rgba(14, 165, 233, 0.1)",
              divider: "rgba(14, 165, 233, 0.15)",
              hoverShadow: "0 22px 45px -12px rgba(14, 165, 233, 0.2), 0 1px 3px rgba(0,0,0,0.03)",
            },
          },
          {
            title: "Fast time to fill",
            body: "AI conducts preliminary screening 24/7 on WhatsApp so your team only interviews verified, shift-ready workers.",
            tag: "INSTANT SCREENING",
            metric: "24 Hours Avg Time to Fill",
            theme: {
              bg: "#FFFFFF",
              border: "rgba(245, 158, 11, 0.22)",
              accentStripe: "linear-gradient(90deg, #F59E0B, #FBBF24)",
              iconBg: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
              iconBorder: "1px solid rgba(245, 158, 11, 0.3)",
              iconColor: "#D97706",
              tagColor: "#B45309",
              tagBg: "rgba(245, 158, 11, 0.1)",
              divider: "rgba(245, 158, 11, 0.15)",
              hoverShadow: "0 22px 45px -12px rgba(245, 158, 11, 0.2), 0 1px 3px rgba(0,0,0,0.03)",
            },
          },
        ].map((c, i) => {
          const Icon = FeatureIcons[i];
          return (
            <Reveal key={i} delay={i * 100}>
              <div
                className="jx-card-light"
                style={{
                  background: c.theme.bg,
                  border: `1px solid ${c.theme.border}`,
                  borderRadius: 20,
                  padding: "32px 26px 24px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px -10px rgba(16, 25, 46, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = c.theme.hoverShadow;
                  e.currentTarget.style.borderColor = c.theme.iconColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(16, 25, 46, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.borderColor = c.theme.border;
                }}
              >
                {/* Top glowing accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: c.theme.accentStripe,
                  }}
                />

                <div>
                  {/* Top row: Colorful Icon + Monospace Tag */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: c.theme.iconBg,
                        border: c.theme.iconBorder,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon stroke={c.theme.iconColor} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        fontWeight: 600,
                        color: c.theme.tagColor,
                        background: c.theme.tagBg,
                        padding: "4px 10px",
                        borderRadius: 20,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {c.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 19.5,
                      fontWeight: 700,
                      color: TOKENS.navy,
                      margin: "0 0 10px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* Card Body */}
                  <p
                    style={{
                      color: "#5B657A",
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {c.body}
                  </p>
                </div>

                {/* Bottom Metric Callout */}
                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 16,
                    borderTop: `1px solid ${c.theme.divider}`,
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: c.theme.tagColor,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {c.metric}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export default ValuePropsSection;
