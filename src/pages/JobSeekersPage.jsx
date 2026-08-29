import React from "react";
import { BadgeCheck, ShieldCheck, Headphones, Navigation, MessageSquare, UserCheck, Target, CheckCircle2 } from "lucide-react";
import { TOKENS } from "../constants/tokens";
import { Section } from "../components/common/Section";
import { Reveal, TextReveal } from "../components/common/Reveal";
import { RosterTicker } from "../components/ticker/RosterTicker";
import { JobAlertCard } from "../components/common/JobAlertCard";
import { TestimonialsCarousel } from "../components/common/TestimonialsCarousel";
import { HiringCompaniesSection } from "../components/sections/HiringCompaniesSection";
import { CandidateQuickApplyModal } from "../components/modals/CandidateQuickApplyModal";

export function JobSeekersPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = React.useState(false);
  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      
      {/* 1. TOP HERO SHOWCASE (EXACTLY MATCHING USER'S SCREENSHOT - SPACIOUS & LARGE) */}
      <Section
        id="job-seekers-hero"
        bg="#FAFAFA"
        innerStyle={{ maxWidth: 1360 }}
        style={{
          paddingTop: 80,
          paddingBottom: 84,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          borderBottom: `1px solid ${TOKENS.line}`,
        }}
      >
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
                as="h1"
                text="Find your perfect delivery job"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(34px, 4.6vw, 58px)",
                  fontWeight: 700,
                  color: "#10192E",
                  lineHeight: 1.12,
                  textAlign: "center",
                  margin: "0 auto 14px",
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
                  fontSize: "clamp(16px, 1.3vw, 18px)",
                  color: "#64748B",
                  textAlign: "center",
                  margin: "0 auto 28px",
                  display: "block",
                  fontWeight: 400,
                }}
              />

              {/* Purple WhatsApp Pill CTA Matching Screenshot */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(true)}
                  className="jx-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#581C87",
                    color: "#FFFFFF",
                    padding: "14px 28px",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: 13.5,
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.06em",
                    boxShadow: "0 10px 25px -4px rgba(88, 28, 135, 0.45)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.25-1.93 1.29-.49.04-1.12.06-3.62-.97-2.94-1.21-4.83-4.22-4.98-4.42-.14-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.14.67-.08.19-.22.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.07.13.07.76-.17 1.44z" />
                  </svg>
                  <span>APPLY NOW</span>
                </button>
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
                    maxWidth: 290,
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    borderRadius: 12,
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
      </Section>

      {/* 2. LIVE OPENINGS TICKER (FEATURING ALL 18 TOP BRANDS) */}
      <RosterTicker />

      {/* 3. COMPANIES & ROLES WE HIRE FOR (INTERACTIVE GRID WITH ALL 18 COMPANIES) */}
      <HiringCompaniesSection />

      {/* 4. 2x2 CANDIDATE PROTECTION & TRUST GUARANTEES */}
      <Section bg="#FAFAFA" style={{ paddingTop: 84, paddingBottom: 84 }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.1em",
                color: TOKENS.amberDark,
                textTransform: "uppercase",
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Candidate Protection Promise
            </div>
            <TextReveal
              as="h2"
              text="Safe, fast, and verified jobs with zero fees."
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 3.2vw, 38px)",
                fontWeight: 700,
                color: TOKENS.navy,
                lineHeight: 1.2,
                margin: 0,
              }}
            />
          </div>

          <div className="jx-worker-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              {
                title: "No cost to apply",
                badge: "100% FREE",
                body: "We never charge candidates for placement, interview tokens, or onboarding. Ever.",
                badgeColor: "#16A34A",
                badgeBg: "rgba(22, 163, 74, 0.08)",
                iconBg: "#DCFCE7",
                icon: <BadgeCheck className="jx-interactive-icon" size={24} color="#16A34A" strokeWidth={2.2} />,
              },
              {
                title: "Direct verified employers",
                badge: "GOVT COMPLIANT",
                body: "Zero middlemen. Work directly with licensed logistics, retail, and hospital operators.",
                badgeColor: "#0284C7",
                badgeBg: "rgba(2, 132, 199, 0.08)",
                iconBg: "#E0F2FE",
                icon: <ShieldCheck className="jx-interactive-icon" size={24} color="#0284C7" strokeWidth={2.2} />,
              },
              {
                title: "Live human backup",
                badge: "HUMAN DESK",
                body: "If the bot gets stuck, a real recruitment coordinator takes over instantly on chat.",
                badgeColor: "#9333EA",
                badgeBg: "rgba(147, 51, 234, 0.08)",
                iconBg: "#F3E8FF",
                icon: <Headphones className="jx-interactive-icon" size={24} color="#9333EA" strokeWidth={2.2} />,
              },
              {
                title: "Hyper-local radius",
                badge: "NEARBY ONLY",
                body: "Only get offered jobs in your chosen PIN codes, so you spend less time commuting.",
                badgeColor: "#D97706",
                badgeBg: "rgba(217, 119, 6, 0.08)",
                iconBg: "#FEF3C7",
                icon: <Navigation className="jx-interactive-icon" size={24} color="#D97706" strokeWidth={2.2} />,
              },
            ].map((c, i) => (
              <div
                key={i}
                className="jx-worker-card"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 20,
                  padding: "26px 24px",
                  boxShadow: "0 4px 14px -4px rgba(16, 25, 46, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
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
                        fontSize: 11,
                        fontWeight: 700,
                        color: c.badgeColor,
                        background: c.badgeBg,
                        padding: "3px 9px",
                        borderRadius: 20,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {c.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: TOKENS.navy,
                      margin: "0 0 8px",
                      lineHeight: 1.25,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* REFER & EARN BANNER (MATCHING UPLOADED ASSET) */}
      <Section bg="#FAFAFA" style={{ paddingTop: 36, paddingBottom: 48 }}>
        <Reveal>
          <a
            href="https://wa.me/919142252116?text=Hi%20Jobtrix%2C%20I%20want%20to%20refer%20a%20friend%20for%20a%20job%20and%20earn%20the%20%E2%82%B93%2C000%20bonus."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textDecoration: "none",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 14px 34px -8px rgba(16, 185, 129, 0.28), 0 2px 8px rgba(0, 0, 0, 0.04)",
              transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 22px 48px -10px rgba(16, 185, 129, 0.38)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 14px 34px -8px rgba(16, 185, 129, 0.28), 0 2px 8px rgba(0, 0, 0, 0.04)";
            }}
          >
            <img
              src="/images/refer_and_earn_banner.jpg"
              alt="Know someone who needs a job? Refer your friend and earn ₹3,000! Refer Now!"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </a>
        </Reveal>
      </Section>

      {/* JOB ALERT CARD (MATCHING UPLOADED SCREENSHOT WITH GEOLOCATION FETCHING) */}
      <Section bg="#FFFFFF" style={{ paddingTop: 40, paddingBottom: 64 }}>
        <Reveal>
          <JobAlertCard />
        </Reveal>
      </Section>

      {/* 4. CANDIDATE 4-STEP APPLICATION WALKTHROUGH (HIGH-CRAFT PASTEL CARDS) */}
      <Section bg="#FFFFFF" style={{ paddingTop: 92, paddingBottom: 92, borderTop: `1px solid ${TOKENS.line}` }}>
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

          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.1em",
              color: TOKENS.amberDark,
              textTransform: "uppercase",
              marginBottom: 12,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            HOW YOU GET HIRED
          </div>

          <TextReveal
            as="h2"
            text="From WhatsApp chat to your first shift"
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
            delay={100}
            text="Zero paperwork, zero fees, and no waiting weeks. Know exactly what to expect from first message to guaranteed payout."
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

        {/* 4 Step Cards Matching High-End Aesthetic */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            {
              step: "STEP 01",
              phase: "PHASE 1",
              title: "Send a Quick Hi",
              desc: "Message our WhatsApp bot in Hindi, English, or your local language. No resume or app download required.",
              icon: MessageSquare,
              accent: "#7C3AED",
              iconBg: "#7C3AED",
              cardBg: "linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 100%)",
              border: "#E9D5FF",
              hoverShadow: "0 20px 40px -12px rgba(124, 58, 237, 0.18)",
            },
            {
              step: "STEP 02",
              phase: "PHASE 2",
              title: "Answer 4 Questions",
              desc: "Share your vehicle details, driving license, preferred work hours, and location PIN code in under 60 seconds.",
              icon: UserCheck,
              accent: "#06B6D4",
              iconBg: "#06B6D4",
              cardBg: "linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 100%)",
              border: "#A5F3FC",
              hoverShadow: "0 20px 40px -12px rgba(6, 182, 212, 0.18)",
            },
            {
              step: "STEP 03",
              phase: "PHASE 3",
              title: "Get Instant Matches",
              desc: "Receive 3+ verified openings from top companies (Zomato, Blinkit, Flipkart) within 5 km of your home.",
              icon: Target,
              accent: "#4F46E5",
              iconBg: "#4F46E5",
              cardBg: "linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 100%)",
              border: "#C7D2FE",
              hoverShadow: "0 20px 40px -12px rgba(79, 70, 229, 0.18)",
            },
            {
              step: "STEP 04",
              phase: "PHASE 4",
              title: "Start Shift & Payout",
              desc: "Complete swift digital onboarding, receive your digital ID badge, and start earning with weekly or daily payouts.",
              icon: CheckCircle2,
              accent: "#10B981",
              iconBg: "#10B981",
              cardBg: "linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%)",
              border: "#BBF7D0",
              hoverShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.18)",
            },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <div
                className="jx-step-card"
                style={{
                  background: s.cardBg,
                  border: `1.5px solid ${s.border}`,
                  borderRadius: 22,
                  padding: "26px 22px 20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 16px -4px rgba(16, 25, 46, 0.04)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = s.hoverShadow;
                  e.currentTarget.style.borderColor = s.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 16px -4px rgba(16, 25, 46, 0.04)";
                  e.currentTarget.style.borderColor = s.border;
                }}
              >
                <div>
                  {/* Top Row: Solid Colored Square Icon + Monospace Step Tag */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: s.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 4px 12px ${s.accent}40`,
                      }}
                    >
                      <s.icon size={18} color="#FFFFFF" strokeWidth={2.4} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#94A3B8",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {s.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: TOKENS.navy,
                      margin: "0 0 10px",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                  </h3>

                  {/* Body */}
                  <p style={{ color: "#5B657A", fontSize: 13.5, lineHeight: 1.6, margin: "0 0 20px" }}>
                    {s.desc}
                  </p>
                </div>

                {/* Bottom Phase Link */}
                <div
                  style={{
                    paddingTop: 14,
                    borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: s.accent,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  <span>{s.phase}</span>
                  <span style={{ fontSize: 13 }}>&rarr;</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. RIDER'S TESTIMONIALS (MOVING CAROUSEL MATCHING USER'S SCREENSHOT) */}
      <Section bg="#FFFFFF" style={{ paddingTop: 88, paddingBottom: 88, borderTop: `1px solid ${TOKENS.line}` }}>
        <Reveal>
          <TestimonialsCarousel />
        </Reveal>
      </Section>

      {/* 6. DIRECT WHATSAPP ACTION CALLOUT */}
      <Section bg={TOKENS.navy} style={{ paddingTop: 72, paddingBottom: 72 }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 660, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.6vw, 44px)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                margin: "0 0 16px",
              }}
            >
              Ready to find your next shift?
            </h2>
            <p
              style={{
                color: "#94A3B8",
                fontSize: 16,
                lineHeight: 1.6,
                margin: "0 auto 32px",
                maxWidth: 520,
              }}
            >
              No CV needed. Message our WhatsApp bot right now and start working with top companies this week.
            </p>
            <button
              type="button"
              onClick={() => setIsApplyModalOpen(true)}
              className="jx-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#25D366",
                color: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 16,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 25px -4px rgba(37, 211, 102, 0.4)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.25-1.93 1.29-.49.04-1.12.06-3.62-.97-2.94-1.21-4.83-4.22-4.98-4.42-.14-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.14.67-.08.19-.22.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.07.13.07.76-.17 1.44z" />
              </svg>
              <span>Message on WhatsApp &rarr;</span>
            </button>
          </div>
        </Reveal>
      </Section>

      {/* Candidate Quick Apply Modal */}
      <CandidateQuickApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        job={{ title: "Frontline Delivery Partner", company: "Top Delivery Companies", city: "Your City" }}
      />
    </div>
  );
}

export default JobSeekersPage;
