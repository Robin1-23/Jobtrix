import React from "react";

export function JobtrixLogoIcon({ size = 32, style = {} }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.28),
        background: "linear-gradient(135deg, #090D1A 0%, #172038 100%)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 14px rgba(10, 15, 30, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.16)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-20%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(4px)",
          pointerEvents: "none",
        }}
      />
      
      {/* Creative Vector Emblem: Interlocking AI Matrix & Velocity Bolt */}
      <svg
        width={Math.round(size * 0.68)}
        height={Math.round(size * 0.68)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "relative", zIndex: 1 }}
      >
        <defs>
          <linearGradient id="jtx-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="jtx-cyan-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
          <filter id="jtx-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#F59E0B" floodOpacity="0.4" />
          </filter>
        </defs>
        
        {/* Dynamic Velocity Bolt (Workforce Momentum) */}
        <path
          d="M13.2 2L4.5 13H11.5L10.2 22L19.5 10.5H12.2L13.2 2Z"
          fill="url(#jtx-gold-grad)"
          filter="url(#jtx-glow)"
        />

        {/* Precision AI Spark Accents (Matrix Nodes) */}
        <circle cx="18.5" cy="5" r="1.4" fill="url(#jtx-cyan-grad)" />
        <circle cx="5" cy="18.5" r="1.1" fill="url(#jtx-cyan-grad)" opacity="0.8" />
      </svg>
    </div>
  );
}

export default JobtrixLogoIcon;
