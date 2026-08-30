import React from "react";
import { Link } from "react-router-dom";
import { TOKENS } from "../../constants/tokens";
import { Section } from "../common/Section";
import { Reveal, TextReveal } from "../common/Reveal";

export function TwoPathsSection() {
  return (
    <Section id="solutions" bg="#FFFFFF">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
        <Reveal>
          <div
            style={{
              background: TOKENS.amber,
              borderRadius: 22,
              padding: "clamp(24px, 4vw, 40px) clamp(20px, 3.5vw, 36px)",
              boxShadow: "0 20px 45px -12px rgba(255, 176, 32, 0.4), 0 2px 8px rgba(0, 0, 0, 0.04)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, fontWeight: 700, color: TOKENS.amberDark, marginBottom: 12, letterSpacing: "0.08em" }}>
                FOR EMPLOYERS
              </div>
              <TextReveal
                as="h3"
                text="Workforce recruitment"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, color: TOKENS.navy, margin: "0 0 14px", fontWeight: 700 }}
              />
              <p style={{ color: TOKENS.navy, opacity: 0.88, fontSize: 15.5, lineHeight: 1.65, marginBottom: 28 }}>
                We source and screen candidates against your role requirements. You interview and hire &mdash; we handle the funnel.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-hire-modal"))}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  color: TOKENS.navy,
                  fontWeight: 700,
                  fontSize: 15,
                  borderBottom: `2px solid ${TOKENS.navy}`,
                  display: "inline-block",
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Start hiring &rarr;
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div
            style={{
              background: TOKENS.navySoft,
              borderRadius: 22,
              padding: "clamp(24px, 4vw, 40px) clamp(20px, 3.5vw, 36px)",
              border: `1px solid #2A3B5C`,
              boxShadow: "0 20px 45px -12px rgba(16, 25, 46, 0.28), 0 2px 8px rgba(0, 0, 0, 0.04)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, fontWeight: 700, color: TOKENS.amber, marginBottom: 12, letterSpacing: "0.08em" }}>
                FOR STAFFING
              </div>
              <TextReveal
                as="h3"
                text="Workforce staffing"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, color: "#fff", margin: "0 0 14px", fontWeight: 700 }}
              />
              <p style={{ color: "#9FB3D6", fontSize: 15.5, lineHeight: 1.65, marginBottom: 28 }}>
                We hire, verify, and manage payroll for on-demand workers, so you get headcount without the HR overhead.
              </p>
            </div>
            <div>
              <Link to="/contact" style={{ color: TOKENS.amber, fontWeight: 700, fontSize: 15, textDecoration: "none", borderBottom: `2px solid ${TOKENS.amber}`, display: "inline-block" }}>
                Talk to sales &rarr;
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default TwoPathsSection;
