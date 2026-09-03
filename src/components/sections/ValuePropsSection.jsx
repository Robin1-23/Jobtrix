import React from "react";
import { Link } from "react-router-dom";
import { Layers, MapPin, Zap, ArrowRight, Sparkles } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { Section } from "../common/Section";
import { Reveal, TextReveal } from "../common/Reveal";

const FeatureIcons = [
  ({ stroke = "#10192E" }) => (
    <Layers className="jx-interactive-icon" size={22} color={stroke} strokeWidth={2.4} />
  ),
  ({ stroke = "#10192E" }) => (
    <MapPin className="jx-interactive-icon" size={22} color={stroke} strokeWidth={2.4} />
  ),
  ({ stroke = "#10192E" }) => (
    <Zap className="jx-interactive-icon" size={22} color={stroke} strokeWidth={2.4} />
  ),
];

export function ValuePropsSection() {
  const cardsData = [
    {
      title: "One channel, not five vendors",
      tag: "UNIFIED SOURCING",
      body: "Replace scattered staffing agencies with a single AI-run pipeline that sources, screens, and deploys candidates across cities.",
      metric: "Single AI Pipeline Across 12+ Cities",
      actionText: "Deploy workforce",
      actionType: "modal",
      hoverClass: "jx-triple-indigo",
      tagBg: "#EEF2FF",
      tagBorder: "#C7D2FE",
      accentColor: "#4F46E5",
    },
    {
      title: "Supply where you need it",
      tag: "HYPER-LOCAL MATCHING",
      body: "Candidates are matched within kilometers of your hub, warehouse, or store — slashing commute-driven attrition.",
      metric: "5 km Avg Distance to Shift",
      actionText: "View coverage",
      actionType: "link",
      actionUrl: "/how-it-works",
      hoverClass: "jx-triple-sky",
      tagBg: "#E0F2FE",
      tagBorder: "#BAE6FD",
      accentColor: "#0284C7",
    },
    {
      title: "Fast time to fill",
      tag: "INSTANT SCREENING",
      body: "AI conducts preliminary screening 24/7 on WhatsApp so your team only interviews verified, shift-ready workers.",
      metric: "24 Hours Avg Time to Fill",
      actionText: "Hire in 24h",
      actionType: "modal",
      hoverClass: "jx-triple-amber",
      tagBg: "#FEF3C7",
      tagBorder: "#FDE68A",
      accentColor: "#D97706",
    },
  ];

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

      {/* 3 Triple-Shadow Neobrutalist Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 32, marginTop: 44 }}>
        {cardsData.map((c, i) => {
          const Icon = FeatureIcons[i];

          const handleAction = (e) => {
            if (c.actionType === "modal") {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("open-hire-modal"));
            }
          };

          return (
            <Reveal key={i} delay={i * 100}>
              <article
                className={`jx-triple-shadow-card ${c.hoverClass}`}
                onClick={handleAction}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleAction(e);
                  }
                }}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
                        <Icon stroke="#10192E" />
                      </div>
                      <span
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 11,
                          fontWeight: 800,
                          color: "#10192E",
                          background: c.tagBg,
                          border: "1.5px solid #10192E",
                          padding: "4px 10px",
                          borderRadius: 8,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          boxShadow: "1.5px 1.5px 0 0 #10192E",
                        }}
                      >
                        {c.tag}
                      </span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(19.5px, 2.2vw, 21.5px)",
                      fontWeight: 800,
                      color: "#10192E",
                      margin: "0 0 12px",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.28,
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* Body Text */}
                  <p
                    style={{
                      color: "#334155",
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {c.body}
                  </p>
                </div>

                {/* Bottom Metric & Action Strip */}
                <div
                  style={{
                    marginTop: 26,
                    paddingTop: 16,
                    borderTop: "2px solid #10192E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: "#10192E",
                  }}
                >
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                    {c.metric}
                  </span>

                  {c.actionType === "link" ? (
                    <Link
                      to={c.actionUrl}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#10192E",
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      <span>Explore</span>
                      <ArrowRight size={14} strokeWidth={2.6} />
                    </Link>
                  ) : (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#10192E",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      <span>Deploy</span>
                      <ArrowRight size={14} strokeWidth={2.6} />
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export default ValuePropsSection;
