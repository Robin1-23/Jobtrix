import React from "react";
import { Phone, ArrowRight } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="jx-mobile-action-bar">
      {/* 1. Call Desk Button */}
      <a
        href="tel:9142252116"
        className="jx-mobile-action-btn"
        style={{
          flex: 1,
          height: 46,
          borderRadius: 14,
          background: "#141C2E",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          textDecoration: "none",
          color: "#FFFFFF",
        }}
      >
        <Phone size={16} color="#38BDF8" strokeWidth={2.4} />
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 13.5,
            letterSpacing: "-0.01em",
          }}
        >
          Call Desk
        </span>
      </a>

      {/* 2. WhatsApp Button */}
      <a
        href="https://wa.me/919142252116?text=Hi%20Jobtrix%2C%20I%20am%20looking%20for%20a%20frontline%20job%20opportunity."
        target="_blank"
        rel="noopener noreferrer"
        className="jx-mobile-action-btn"
        style={{
          flex: 1,
          height: 46,
          borderRadius: 14,
          background: "#008069",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          textDecoration: "none",
          color: "#FFFFFF",
        }}
      >
        {/* Official WhatsApp icon */}
        <svg width="17" height="17" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.25-1.93 1.29-.49.04-1.12.06-3.62-.97-2.94-1.21-4.83-4.22-4.98-4.42-.14-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.14.67-.08.19-.22.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.07.13.07.76-.17 1.44z" />
        </svg>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 13.5,
            letterSpacing: "-0.01em",
          }}
        >
          WhatsApp
        </span>
      </a>

      {/* 3. Apply Button */}
      <a
        href="#contact"
        className="jx-mobile-action-btn"
        style={{
          flex: 1,
          height: 46,
          borderRadius: 14,
          background: "#4F46E5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          textDecoration: "none",
          color: "#FFFFFF",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 13.5,
            letterSpacing: "-0.01em",
          }}
        >
          Apply
        </span>
        <ArrowRight size={15} color="#FFFFFF" strokeWidth={2.6} />
      </a>
    </div>
  );
}

export default MobileActionBar;
