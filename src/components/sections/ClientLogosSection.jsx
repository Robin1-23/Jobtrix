import React from "react";
import { TOKENS } from "../../constants/tokens";
import { Section } from "../common/Section";
import { Reveal, TextReveal } from "../common/Reveal";

export function ClientLogosSection() {
  return (
    <Section bg="#FFFFFF" style={{ paddingTop: 96, paddingBottom: 96, borderTop: `1px solid ${TOKENS.line}` }}>
      <Reveal>
        {/* Top yellow accent bar */}
        <div
          style={{
            width: 54,
            height: 4,
            background: TOKENS.amber,
            borderRadius: 4,
            margin: "0 auto 20px",
          }}
        />

        <TextReveal
          as="h2"
          text="Join the biggest names in the gig economy"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 700,
            color: TOKENS.navy,
            lineHeight: 1.15,
            textAlign: "center",
            margin: "0 auto 16px",
            letterSpacing: "-0.015em",
            display: "block",
          }}
        />

        <TextReveal
          as="p"
          delay={120}
          text="We're proud to have helped in the operations growth of India's most trusted startups."
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.2vw, 17px)",
            color: "#5B657A",
            textAlign: "center",
            maxWidth: 560,
            margin: "0 auto 56px",
            lineHeight: 1.6,
            display: "block",
          }}
        />

        {/* Row 1: Zomato, Uber, Rapido, Dunzo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "clamp(40px, 7vw, 98px)",
            marginBottom: 64,
          }}
        >
          {[
            { name: "Zomato", src: "/images/vahan_clients_largest_zomato.jpg", height: 110 },
            { name: "Uber", src: "/images/vahan_clients_largest_uber.jpg", height: 68 },
            { name: "Rapido", src: "/images/vahan_clients_largest_rapido.jpg", height: 90 },
            { name: "Dunzo", src: "/images/vahan_clients_largest_dunzo.jpg", height: 80 },
          ].map((logo) => (
            <div key={logo.name} className="jx-client-logo-wrap">
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  height: logo.height,
                  maxHeight: 124,
                  maxWidth: 280,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>

        {/* Row 2: Flipkart, Swiggy */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "clamp(54px, 9vw, 130px)",
          }}
        >
          {[
            { name: "Flipkart", src: "/images/vahan_clients_flipkart.jpg", height: 124 },
            { name: "Swiggy", src: "/images/vahan_clients_swiggy.jpg", height: 124 },
          ].map((logo) => (
            <div key={logo.name} className="jx-client-logo-wrap">
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  height: logo.height,
                  maxHeight: 140,
                  maxWidth: 280,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export default ClientLogosSection;
