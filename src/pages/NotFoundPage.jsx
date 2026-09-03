import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Briefcase, 
  Users, 
  Phone, 
  HelpCircle, 
  MessageCircle,
  AlertCircle
} from "lucide-react";
import { TOKENS } from "../constants/tokens";
import { Reveal, TextReveal } from "../components/common/Reveal";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#FAFAFA",
        color: TOKENS.navy,
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px 80px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: 640, width: "100%", textAlign: "center" }}>
        
        {/* Top 404 Badge */}
        <Reveal>
          <div className="jx-retro-badge jx-retro-badge-amber" style={{ marginBottom: 16 }}>
            <AlertCircle size={14} color="#D97706" />
            <span>ERROR 404 · PAGE NOT FOUND</span>
          </div>
        </Reveal>

        {/* Big 404 Heading */}
        <Reveal delay={60}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(72px, 12vw, 120px)",
              fontWeight: 900,
              color: "#10192E",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              margin: "0 0 16px",
            }}
          >
            4<span style={{ color: "#F59E0B" }}>0</span>4
          </div>
        </Reveal>

        {/* Subtitle */}
        <TextReveal
          as="h1"
          text="Lost on the road?"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(24px, 3.4vw, 34px)",
            fontWeight: 700,
            color: "#10192E",
            lineHeight: 1.2,
            margin: "0 0 14px",
          }}
        />

        <Reveal delay={120}>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 17px)",
              color: "#64748B",
              lineHeight: 1.6,
              maxWidth: 520,
              margin: "0 auto 32px",
            }}
          >
            The page you are looking for does not exist, has been moved, or the link might be broken. Let's get you back on track.
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={160}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 44,
            }}
          >
            <Link
              to="/"
              className="jx-btn jx-btn-dark"
            >
              <Home size={17} />
              <span>Back to Home</span>
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="jx-btn jx-btn-white"
            >
              <ArrowLeft size={17} />
              <span>Go Back</span>
            </button>
          </div>
        </Reveal>

        {/* Helpful Navigation Cards */}
        <Reveal delay={200}>
          <div
            className="jx-neobrutal-card"
            style={{
              padding: "24px 22px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#6B7280",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 16,
              }}
            >
              Popular Destinations on Jobtrix
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 12,
              }}
            >
              <Link
                to="/job-seekers"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: "#F9FAFB",
                  border: "1px solid #F3F4F6",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                <Users size={16} color="#0284C7" />
                <span>For Job Seekers (Find Jobs)</span>
              </Link>

              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: "#F9FAFB",
                  border: "1px solid #F3F4F6",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                <Briefcase size={16} color="#D97706" />
                <span>For Employers (Hire Staff)</span>
              </Link>

              <Link
                to="/how-it-works"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: "#F9FAFB",
                  border: "1px solid #F3F4F6",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                <HelpCircle size={16} color="#9333EA" />
                <span>How It Works</span>
              </Link>

              <Link
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: "#F9FAFB",
                  border: "1px solid #F3F4F6",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                <Phone size={16} color="#16A34A" />
                <span>Contact & Support</span>
              </Link>
            </div>

            <div
              style={{
                marginTop: 18,
                paddingTop: 14,
                borderTop: "1px solid #F3F4F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 12.5,
                color: "#6B7280",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <span>Need immediate assistance?</span>
              <a
                href="https://wa.me/919991239374?text=Hi%20Jobtrix,%20I%20need%20help%20finding%20a%20page"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#16A34A",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <MessageCircle size={14} />
                <span>Chat on WhatsApp (+91 99912 39374)</span>
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}

export default NotFoundPage;
