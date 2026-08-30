import React from "react";

export function JobtrixLogoIcon({ size = 32, style = {} }) {
  const radius = Math.round(size * 0.28);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: "#10192E",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 3px 10px rgba(16, 25, 46, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        flexShrink: 0,
        ...style,
      }}
    >
      <svg
        width={Math.round(size * 0.64)}
        height={Math.round(size * 0.64)}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Natural Upward J-Stroke (Workforce Opportunity Path) */}
        <path
          d="M14 27.5C14 33.3 18.7 38 24.5 38C30.3 38 35 33.3 35 27.5V14H29V27.5C29 30 27 32 24.5 32C22 32 20 30 20 27.5V20H14V27.5Z"
          fill="#FFFFFF"
        />
        {/* Warm Golden Opportunity Dot */}
        <circle cx="32" cy="9" r="4.5" fill="#F59E0B" />
      </svg>
    </div>
  );
}

export default JobtrixLogoIcon;
