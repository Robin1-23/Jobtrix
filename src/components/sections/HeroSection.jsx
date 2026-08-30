import React from "react";
import { Link } from "react-router-dom";
import FoldText from "../../../FoldText";
import TextType from "../../../TextType";
import { TOKENS } from "../../constants/tokens";
import { Section, Eyebrow } from "../common/Section";
import { Reveal } from "../common/Reveal";
import { ChatMock } from "../hero/ChatMock";

export function HeroSection() {
  return (
    <Section id="employers" bg={TOKENS.paper} style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center" }} className="jx-hero">
        
        {/* LEFT COLUMN: Strategic Value Narrative */}
        <Reveal>
          {/* Top yellow accent bar */}
          <div
            style={{
              width: 68,
              height: 4,
              background: TOKENS.amber,
              borderRadius: 4,
              marginBottom: 20,
            }}
          />

          <Eyebrow>AI hiring for blue-collar teams</Eyebrow>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(34px, 4.4vw, 54px)",
              lineHeight: 1.12,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            <FoldText
              text="Grow your frontline workforce without growing your"
              splitBy="word"
              hinge="top"
              trigger="mount"
              replayOnHover={false}
              duration={1.2}
              stagger={0.08}
              ease="power2.out"
              perspective={800}
              creaseShading={0.5}
              fontSize="inherit"
              fontWeight="inherit"
              color={TOKENS.navy}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                display: "inline",
              }}
            />
            {" "}
            <TextType
              as="span"
              text={[
                "recruiting team.",
                "agency costs.",
                "HR overhead.",
                "hiring delays.",
              ]}
              typingSpeed={65}
              deletingSpeed={35}
              pauseDuration={2000}
              initialDelay={1100}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="jx-typing-cursor"
              textColors={["#B87400", "#2563EB", "#1F8A5F", "#7C3AED"]}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                display: "inline-block",
                verticalAlign: "baseline",
              }}
            />
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 1.35vw, 19.5px)",
              color: "#6B7280",
              lineHeight: 1.6,
              marginTop: 24,
              maxWidth: 490,
              fontWeight: 400,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Jobtrix utilises{" "}
            <strong style={{ color: TOKENS.navy, fontWeight: 700 }}>
              cutting edge AI-based chatbot technology that enables businesses to scale their blue-collar workforce
            </strong>{" "}
            through recruitment and payroll or staffing.
          </p>

          <div className="jx-hero-cta-group" style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-hire-modal"))}
              className="jx-btn"
              style={{
                background: TOKENS.amber,
                color: TOKENS.navy,
                padding: "15px 28px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 24px -4px rgba(255, 176, 32, 0.45)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Hire with Jobtrix &rarr;
            </button>
            <Link
              to="/job-seekers"
              className="jx-btn"
              style={{
                background: "transparent",
                color: TOKENS.navy,
                padding: "14px 24px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 15,
                border: `1.5px solid ${TOKENS.line}`,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              I&apos;m looking for work
            </Link>
          </div>

          {/* Micro trust indicators */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 26, fontSize: 13, color: TOKENS.inkSoft, flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: TOKENS.green, fontSize: 15, fontWeight: "bold" }}>&#10003;</span> Zero fee for job seekers
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: TOKENS.green, fontSize: 15, fontWeight: "bold" }}>&#10003;</span> 24h candidate shortlists
            </span>
          </div>
        </Reveal>

        {/* RIGHT COLUMN: Layered visual hero collage with photos and color shapes */}
        <div className="jx-hero-collage">
          <Reveal delay={150} style={{ position: "relative", width: "100%", height: "100%", minHeight: 480 }}>
            <div className="jx-hero-collage-inner" style={{ position: "relative", width: "100%", height: "100%", minHeight: 480 }}>
              
              {/* 1. Curved Yellow Ribbon Swoosh (from reference design) */}
              <svg
                style={{
                  position: "absolute",
                  top: -15,
                  left: "18%",
                  width: 220,
                  height: 90,
                  zIndex: 0,
                  pointerEvents: "none",
                  opacity: 0.9,
                }}
                viewBox="0 0 200 90"
                fill="none"
              >
                <path d="M10 65 Q 95 10, 190 35" stroke={TOKENS.amber} strokeWidth="18" strokeLinecap="round" />
              </svg>

              {/* 2. Salmon / Coral Organic Circle Blob (behind team photo at top-right) */}
              <div
                style={{
                  position: "absolute",
                  top: -5,
                  right: 5,
                  width: 210,
                  height: 210,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FF6F61 0%, #FA8072 100%)",
                  zIndex: 0,
                  opacity: 0.88,
                }}
              />

              {/* 3. Vibrant Royal Blue Arch (on right edge from reference) */}
              <div
                style={{
                  position: "absolute",
                  bottom: 30,
                  right: -25,
                  width: 90,
                  height: 180,
                  borderTopLeftRadius: 90,
                  borderBottomLeftRadius: 90,
                  background: "#2563EB",
                  zIndex: 0,
                  opacity: 0.92,
                }}
              />

              {/* 4. Top-Right: Team Photo (hero_image_2.jpg) */}
              <div
                style={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                  zIndex: 1,
                  animation: "float-slow 6s ease-in-out infinite",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: 18,
                    overflow: "hidden",
                    border: "3px solid #FFFFFF",
                    boxShadow: "0 18px 38px -10px rgba(16, 25, 46, 0.2)",
                    width: 275,
                    height: 175,
                  }}
                >
                  <img
                    src="/images/hero_image_2.jpg"
                    alt="Frontline workforce team"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 22%",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 6,
                      left: 8,
                      right: 8,
                      background: "rgba(16, 25, 46, 0.75)",
                      backdropFilter: "blur(6px)",
                      borderRadius: 6,
                      padding: "4px 8px",
                      color: "#FFFFFF",
                      fontSize: 11,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Onboarded Teams</span>
                    <span style={{ color: TOKENS.amber }}>Verified</span>
                  </div>
                </div>
              </div>

              {/* 5. Top-Left: Frontline Worker Circular Avatar (l1_hero_img_1.png) */}
              <div
                style={{
                  position: "absolute",
                  top: 25,
                  left: 10,
                  zIndex: 2,
                  animation: "float-reverse 5s ease-in-out infinite",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 125,
                    height: 125,
                  }}
                >
                  <img
                    src="/images/worker_yellow_helmet.jpg"
                    alt="Verified frontline worker"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      objectPosition: "center 15%",
                      display: "block",
                      border: "3px solid #FFFFFF",
                      boxShadow: "0 14px 30px -8px rgba(16, 25, 46, 0.28)",
                    }}
                  />
                  {/* Status badge pill */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: -6,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#FFFFFF",
                      borderRadius: 999,
                      padding: "3px 10px",
                      boxShadow: "0 4px 12px rgba(16, 25, 46, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 10.5,
                      fontWeight: 700,
                      color: TOKENS.navy,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: TOKENS.green, display: "inline-block" }} />
                    Active Candidate
                  </div>
                </div>
              </div>

              {/* 6. Bottom-Center: Sleek Smartphone Chat Simulator */}
              <div
                style={{
                  position: "absolute",
                  top: 140,
                  left: 95,
                  zIndex: 3,
                }}
              >
                <ChatMock />
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
