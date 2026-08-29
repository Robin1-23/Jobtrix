import React, { useState, useEffect } from "react";
import { TOKENS } from "../../constants/tokens";

export function ChatMock() {
  const [step, setStep] = useState(0);
  const messages = [
    { from: "bot", text: "Hi! I'm the Jobtrix Assistant. What kind of work are you looking for?" },
    { from: "user", text: "Delivery job near Sector 14" },
    { from: "bot", text: "Got it. Do you have your own two-wheeler?" },
    { from: "user", text: "Yes" },
    { from: "bot", text: "Great! 3 companies are hiring near you. Can you start this Monday?" },
    { from: "user", text: "Yes, ready." },
    { from: "bot", text: "Your slot is booked. An onboarding specialist will call you at 10 AM." },
  ];

  useEffect(() => {
    if (step < messages.length) {
      const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 900 : 1350);
      return () => clearTimeout(t);
    } else {
      const resetTimer = setTimeout(() => setStep(0), 4500);
      return () => clearTimeout(resetTimer);
    }
  }, [step, messages.length]);

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 28,
        border: "5px solid #10192E",
        boxShadow: "0 22px 50px -12px rgba(16,25,46,0.32), 0 0 0 1px rgba(255,255,255,0.4)",
        width: 252,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Smartphone Notch */}
      <div style={{ background: TOKENS.navy, padding: "6px 0 2px", textAlign: "center" }}>
        <div style={{ width: 42, height: 4, background: "rgba(255,255,255,0.25)", borderRadius: 3, margin: "0 auto" }} />
      </div>

      {/* Smartphone Header */}
      <div
        style={{
          background: TOKENS.navy,
          color: "#fff",
          padding: "8px 12px 10px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: 7,
            background: TOKENS.amber,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            color: TOKENS.navy,
            fontSize: 11.5,
            flexShrink: 0,
          }}
        >
          JX
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Jobtrix Assistant
          </div>
          <div style={{ fontSize: 10, color: "#9FB3D6", display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
            Online &middot; WhatsApp
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div style={{ padding: "10px 10px 12px", minHeight: 215, display: "flex", flexDirection: "column", gap: 7, background: "#F8FAFC" }}>
        {messages.slice(0, step).map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.from === "bot" ? "flex-start" : "flex-end",
              background: m.from === "bot" ? "#FFFFFF" : TOKENS.amber,
              color: m.from === "bot" ? TOKENS.ink : TOKENS.navy,
              borderRadius: m.from === "bot" ? "12px 12px 12px 2px" : "12px 12px 2px 12px",
              padding: "7px 10px",
              maxWidth: "84%",
              fontSize: 11.5,
              lineHeight: 1.4,
              boxShadow: "0 1px 3px rgba(16,25,46,0.06)",
              fontWeight: m.from === "user" ? 600 : 400,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {m.text}
          </div>
        ))}
        {step < messages.length && (
          <div
            style={{
              alignSelf: messages[step].from === "bot" ? "flex-start" : "flex-end",
              fontSize: 10,
              color: TOKENS.inkSoft,
              fontStyle: "italic",
              padding: "2px 4px",
            }}
          >
            {messages[step].from === "bot" ? "typing\u2026" : ""}
          </div>
        )}
      </div>

      {/* Home Indicator Bar */}
      <div style={{ background: "#F8FAFC", padding: "4px 0 6px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: 48, height: 3, background: "#CBD5E1", borderRadius: 2 }} />
      </div>
    </div>
  );
}

export default ChatMock;
