import React from "react";
import { TOKENS } from "../../constants/tokens";
import { TextReveal } from "./Reveal";

// --- Section Helper (forwards id prop so anchor links work) ---
export function Section({ children, bg = TOKENS.paper, style = {}, id, className = "", innerStyle = {} }) {
  return (
    <section id={id} className={`jx-section ${className}`} style={{ background: bg, ...style }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", width: "100%", ...innerStyle }}>{children}</div>
    </section>
  );
}

// --- Monospace Eyebrow Tag with TextReveal Entrance ---
export function Eyebrow({ children }) {
  return (
    <TextReveal
      as="div"
      stagger={22}
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 12,
        letterSpacing: "0.1em",
        color: TOKENS.amberDark,
        textTransform: "uppercase",
        marginBottom: 14,
        fontWeight: 600,
      }}
    >
      {children}
    </TextReveal>
  );
}

export default Section;
