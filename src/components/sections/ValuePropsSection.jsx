import React from "react";
import { Link } from "react-router-dom";
import { Layers, MapPin, Zap, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
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
  const cardsData = [
    {
      title: "One channel, not five vendors",
      tag: "UNIFIED SOURCING",
      shortBody: "Replace scattered staffing agencies with a single AI-run pipeline that sources across cities.",
      deepBody: "Eliminate multiple vendor follow-ups. Centralize requisition, screening, Aadhaar verification, and deployment into one transparent automated pipeline.",
      metric: "Single AI Pipeline Across 12+ Cities",
      actionText: "Start unified hiring",
      actionType: "modal",
      theme: {
        solidBorder: "#6366F1",
        dashedBorder: "#818CF8",
        dashedBg: "rgba(99, 102, 241, 0.04)",
        iconBg: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
        iconBorder: "1px solid rgba(99, 102, 241, 0.3)",
        iconColor: "#4F46E5",
        tagColor: "#4338CA",
        tagBg: "rgba(99, 102, 241, 0.1)",
        divider: "rgba(99, 102, 241, 0.16)",
        hoverShadow: "0 22px 45px -10px rgba(99, 102, 241, 0.22)",
      },
    },
    {
      title: "Supply where you need it",
      tag: "HYPER-LOCAL MATCHING",
      shortBody: "Candidates are matched within kilometers of your hub, warehouse, or store — slashing commute-driven attrition.",
      deepBody: "Target candidates residing within 5 km of your delivery hub or store to slash commute friction, prevent absenteeism, and boost shift attendance.",
      metric: "5 km Avg Distance to Shift",
      actionText: "View how it works",
      actionType: "link",
      actionUrl: "/how-it-works",
      theme: {
        solidBorder: "#0EA5E9",
        dashedBorder: "#38BDF8",
        dashedBg: "rgba(14, 165, 233, 0.04)",
        iconBg: "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)",
        iconBorder: "1px solid rgba(14, 165, 233, 0.3)",
        iconColor: "#0284C7",
        tagColor: "#0369A1",
        tagBg: "rgba(14, 165, 233, 0.1)",
        divider: "rgba(14, 165, 233, 0.16)",
        hoverShadow: "0 22px 45px -10px rgba(14, 165, 233, 0.22)",
      },
    },
    {
      title: "Fast time to fill",
      tag: "INSTANT SCREENING",
      shortBody: "AI conducts preliminary screening 24/7 on WhatsApp so your team only interviews verified, shift-ready workers.",
      deepBody: "Our automated system checks Aadhaar, driver licenses, vehicle RC, and shift availability in minutes before sending candidates directly to your floor.",
      metric: "24 Hours Avg Time to Fill",
      actionText: "Deploy 24h workers",
      actionType: "modal",
      theme: {
        solidBorder: "#F59E0B",
        dashedBorder: "#FBBF24",
        dashedBg: "rgba(245, 158, 11, 0.04)",
        iconBg: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
        iconBorder: "1px solid rgba(245, 158, 11, 0.3)",
        iconColor: "#D97706",
        tagColor: "#B45309",
        tagBg: "rgba(245, 158, 11, 0.1)",
        divider: "rgba(245, 158, 11, 0.16)",
        hoverShadow: "0 22px 45px -10px rgba(245, 158, 11, 0.22)",
      },
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

      {/* 3 Interactive Dashed-Border Offset Cards */}
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
              <div
                className="jx-offset-card-wrapper group"
                onClick={handleAction}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleAction(e);
                  }
                }}
              >
                {/* 1. Underlying Dashed Border Offset Frame */}
                <span
                  className="jx-offset-dashed-bg"
                  style={{
                    borderColor: c.theme.dashedBorder,
                    backgroundColor: c.theme.dashedBg,
                  }}
                />

                {/* 2. Foreground Main Card */}
                <div
                  className="jx-offset-card-inner"
                  style={{
                    borderColor: c.theme.solidBorder,
                    boxShadow: "0 10px 28px -10px rgba(16, 25, 46, 0.06), 0 2px 6px rgba(0, 0, 0, 0.02)",
                  }}
                >
                  {/* FRONT DEFAULT STATE */}
                  <div className="jx-card-front">
                    <div>
                      {/* Top row: Colorful Icon + Tag Badge */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                        <div
                          style={{
                            width: 46,
                            height: 46,
                            borderRadius: 13,
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
                          fontSize: 20,
                          fontWeight: 700,
                          color: TOKENS.navy,
                          margin: "0 0 10px",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.3,
                        }}
                      >
                        {c.title}
                      </h3>

                      {/* Card Short Body */}
                      <p
                        style={{
                          color: "#5B657A",
                          fontSize: 14.5,
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {c.shortBody}
                      </p>
                    </div>

                    {/* Bottom Metric Callout */}
                    <div
                      style={{
                        marginTop: 22,
                        paddingTop: 16,
                        borderTop: `1px solid ${c.theme.divider}`,
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: c.theme.tagColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{c.metric}</span>
                      <span style={{ fontSize: 11, color: "#94A3B8", display: "inline-flex", alignItems: "center", gap: 3 }}>
                        Hover <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>

                  {/* HOVER REVEAL STATE */}
                  <div
                    className="jx-card-reveal"
                    style={{
                      background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
                    }}
                  >
                    <div>
                      {/* Top Mini Header */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                        <span
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: 10.5,
                            fontWeight: 700,
                            color: c.theme.tagColor,
                            background: c.theme.tagBg,
                            padding: "3px 9px",
                            borderRadius: 12,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {c.tag}
                        </span>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 9,
                            background: c.theme.iconBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon stroke={c.theme.iconColor} />
                        </div>
                      </div>

                      {/* Reveal Title */}
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 19,
                          fontWeight: 700,
                          color: TOKENS.navy,
                          margin: "0 0 10px",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.25,
                        }}
                      >
                        {c.title}
                      </h3>

                      {/* Reveal Deep Description */}
                      <p
                        style={{
                          color: "#475569",
                          fontSize: 14,
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {c.deepBody}
                      </p>
                    </div>

                    {/* Reveal Action CTA Button */}
                    <div style={{ marginTop: 18 }}>
                      {c.actionType === "link" ? (
                        <Link
                          to={c.actionUrl}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            width: "100%",
                            padding: "11px 16px",
                            borderRadius: 12,
                            background: TOKENS.navy,
                            color: "#FFFFFF",
                            fontSize: 13.5,
                            fontWeight: 700,
                            textDecoration: "none",
                            boxSizing: "border-box",
                            boxShadow: "0 4px 14px rgba(16, 25, 46, 0.14)",
                          }}
                        >
                          <span>{c.actionText}</span>
                          <ArrowRight size={15} />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.dispatchEvent(new CustomEvent("open-hire-modal"));
                          }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            width: "100%",
                            padding: "11px 16px",
                            borderRadius: 12,
                            background: TOKENS.navy,
                            color: "#FFFFFF",
                            fontSize: 13.5,
                            fontWeight: 700,
                            border: "none",
                            cursor: "pointer",
                            boxSizing: "border-box",
                            boxShadow: "0 4px 14px rgba(16, 25, 46, 0.14)",
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          <span>{c.actionText}</span>
                          <ArrowRight size={15} />
                        </button>
                      )}
                    </div>
                  </div>

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
