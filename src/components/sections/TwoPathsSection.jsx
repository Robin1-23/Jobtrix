import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Building2, UserCheck } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { Section } from "../common/Section";
import { Reveal, TextReveal } from "../common/Reveal";

export function TwoPathsSection() {
  return (
    <Section id="solutions" bg="#FFFFFF" style={{ paddingTop: 70, paddingBottom: 70 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 32 }}>
        
        {/* CARD 1: RETRO WINDOW - FOR EMPLOYERS / RECRUITMENT */}
        <Reveal>
          <article
            style={{
              border: "2px solid #10192E",
              background: "#FFFFFF",
              color: "#10192E",
              borderRadius: 16,
              boxShadow: "4px 4px 0 0 #10192E, 8px 8px 0 0 rgba(16, 25, 46, 0.85)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              transition: "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-3px, -3px)";
              e.currentTarget.style.boxShadow = "6px 6px 0 0 #10192E, 11px 11px 0 0 #10192E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "4px 4px 0 0 #10192E, 8px 8px 0 0 rgba(16, 25, 46, 0.85)";
            }}
          >
            {/* Window Title Bar */}
            <div
              style={{
                background: "#FEF08A",
                padding: "12px 18px",
                borderBottom: "2px solid #10192E",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <UserCheck size={15} color="#10192E" strokeWidth={2.4} />
                  <strong
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "#10192E",
                    }}
                  >
                    FOR EMPLOYERS // RECRUITMENT
                  </strong>
                </div>

                {/* Retro Window Control Boxes */}
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      border: "2px solid #10192E",
                      background: "#FFFFFF",
                      borderRadius: 2,
                    }}
                  />
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      border: "2px solid #10192E",
                      background: "#10192E",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Window Content Body */}
            <div
              style={{
                padding: "clamp(24px, 3.5vw, 32px) clamp(20px, 3vw, 28px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <div>
                <TextReveal
                  as="h3"
                  text="Workforce recruitment"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(22px, 2.8vw, 26px)",
                    color: "#10192E",
                    margin: "0 0 12px",
                    fontWeight: 800,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.25,
                  }}
                />
                <p
                  style={{
                    color: "#334155",
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: "0 0 24px",
                  }}
                >
                  We source and screen candidates against your role requirements. You interview and hire &mdash; we handle the entire funnel.
                </p>
              </div>

              {/* Bottom Retro Button */}
              <div>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-hire-modal"))}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#F59E0B",
                    color: "#10192E",
                    border: "2px solid #10192E",
                    boxShadow: "3px 3px 0 0 #10192E",
                    padding: "10px 20px",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(-1px, -1px)";
                    e.currentTarget.style.boxShadow = "4px 4px 0 0 #10192E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0, 0)";
                    e.currentTarget.style.boxShadow = "3px 3px 0 0 #10192E";
                  }}
                >
                  <span>Start hiring</span>
                  <ArrowRight size={15} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </article>
        </Reveal>

        {/* CARD 2: RETRO WINDOW - FOR STAFFING */}
        <Reveal delay={120}>
          <article
            style={{
              border: "2px solid #10192E",
              background: "#FFFFFF",
              color: "#10192E",
              borderRadius: 16,
              boxShadow: "4px 4px 0 0 #10192E, 8px 8px 0 0 rgba(16, 25, 46, 0.85)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              transition: "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-3px, -3px)";
              e.currentTarget.style.boxShadow = "6px 6px 0 0 #10192E, 11px 11px 0 0 #10192E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "4px 4px 0 0 #10192E, 8px 8px 0 0 rgba(16, 25, 46, 0.85)";
            }}
          >
            {/* Window Title Bar */}
            <div
              style={{
                background: "#E0E7FF",
                padding: "12px 18px",
                borderBottom: "2px solid #10192E",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Building2 size={15} color="#10192E" strokeWidth={2.4} />
                  <strong
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 12,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "#10192E",
                    }}
                  >
                    FOR ENTERPRISES // STAFFING
                  </strong>
                </div>

                {/* Retro Window Control Boxes */}
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      border: "2px solid #10192E",
                      background: "#FFFFFF",
                      borderRadius: 2,
                    }}
                  />
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      border: "2px solid #10192E",
                      background: "#10192E",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Window Content Body */}
            <div
              style={{
                padding: "clamp(24px, 3.5vw, 32px) clamp(20px, 3vw, 28px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <div>
                <TextReveal
                  as="h3"
                  text="Workforce staffing"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(22px, 2.8vw, 26px)",
                    color: "#10192E",
                    margin: "0 0 12px",
                    fontWeight: 800,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.25,
                  }}
                />
                <p
                  style={{
                    color: "#334155",
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: "0 0 24px",
                  }}
                >
                  We hire, verify, and manage payroll for on-demand workers, so you get full frontline headcount without the HR overhead.
                </p>
              </div>

              {/* Bottom Retro Button */}
              <div>
                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#10192E",
                    color: "#FFFFFF",
                    border: "2px solid #10192E",
                    boxShadow: "3px 3px 0 0 #10192E",
                    padding: "10px 20px",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(-1px, -1px)";
                    e.currentTarget.style.boxShadow = "4px 4px 0 0 #10192E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0, 0)";
                    e.currentTarget.style.boxShadow = "3px 3px 0 0 #10192E";
                  }}
                >
                  <span>Talk to sales</span>
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>

      </div>
    </Section>
  );
}

export default TwoPathsSection;
