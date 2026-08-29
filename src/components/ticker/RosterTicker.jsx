import React from "react";

const liveOpenings = [
  { company: "Zomato", role: "Delivery Partner", city: "Delhi NCR", count: "48 OPEN", badge: "🍔 Food Delivery" },
  { company: "Swiggy", role: "Delivery Executive", city: "Bengaluru", count: "55 OPEN", badge: "⚡ Instant Match" },
  { company: "Zepto", role: "10-Min Rider", city: "Mumbai", count: "38 OPEN", badge: "⏱️ Quick Commerce" },
  { company: "Blinkit", role: "Delivery Partner", city: "Gurgaon", count: "62 OPEN", badge: "🛵 Daily Payout" },
  { company: "Instamart", role: "Grocery Associate", city: "Hyderabad", count: "40 OPEN", badge: "🛍️ High Demand" },
  { company: "Porter", role: "Mini-Truck & Bike Partner", city: "Pune", count: "29 OPEN", badge: "🚚 Heavy Logistics" },
  { company: "Flipkart", role: "Supply Chain Associate", city: "Kolkata", count: "75 OPEN", badge: "📦 E-Commerce" },
  { company: "Xpress Bees", role: "Courier Rider", city: "Ahmedabad", count: "34 OPEN", badge: "📬 Verified Hub" },
  { company: "Dominos", role: "Delivery Expert", city: "Noida", count: "25 OPEN", badge: "🍕 Guaranteed Shift" },
  { company: "Shadowfax", role: "3PL Fleet Partner", city: "Chennai", count: "44 OPEN", badge: "⚡ Same Day" },
  { company: "Rapido", role: "Bike Taxi Captain", city: "Jaipur", count: "50 OPEN", badge: "🏍️ Flexible Hours" },
  { company: "Uber", role: "Driver & Partner", city: "Delhi NCR", count: "36 OPEN", badge: "🚗 Weekly Bonus" },
  { company: "Pronto", role: "Housekeeping & Maid Staff", city: "Mumbai", count: "28 OPEN", badge: "🧹 Housekeeping" },
  { company: "Urban Company", role: "Housekeeping & Maid Partner", city: "Bengaluru", count: "42 OPEN", badge: "🏠 Home Care" },
  { company: "Snabbit", role: "Housekeeping & Maid", city: "Mumbai", count: "24 OPEN", badge: "🧹 Facility Care" },
  { company: "Blinkit", role: "Picker Packer (Store)", city: "Bengaluru", count: "31 OPEN", badge: "🏬 Dark Store" },
  { company: "Everest Fleet", role: "EV Fleet Driver", city: "Mumbai / Pune", count: "45 OPEN", badge: "⚡ EV Provided" },
  { company: "Flipkart Minutes", role: "Instant Delivery Partner", city: "Bengaluru", count: "52 OPEN", badge: "⏱️ 15-Min Delivery" },
  { company: "Swiggy Instamart", role: "Grocery Partner", city: "Delhi NCR", count: "60 OPEN", badge: "🛍️ Fast Track" },
  { company: "Swiggy", role: "Picker Packer (Store)", city: "Hyderabad", count: "28 OPEN", badge: "🏬 Store Associate" },
];

export function RosterTicker() {
  const loop = [...liveOpenings, ...liveOpenings];
  return (
    <div
      className="jx-ticker-wrap"
      style={{
        background: "linear-gradient(90deg, #090D16 0%, #0F172A 20%, #171B36 50%, #0F172A 80%, #090D16 100%)",
        borderTop: "1px solid rgba(99, 102, 241, 0.22)",
        borderBottom: "1px solid rgba(99, 102, 241, 0.22)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 10px 30px -10px rgba(0, 0, 0, 0.35)",
        padding: "14px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Edge gradient masks for smooth fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(90deg, #090D16 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(270deg, #090D16 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Ticker Title Badge */}
      <div
        style={{
          position: "absolute",
          left: 24,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          background: "rgba(16, 25, 46, 0.95)",
          border: "1px solid rgba(255, 176, 32, 0.3)",
          backdropFilter: "blur(6px)",
          padding: "5px 12px",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          gap: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
        className="jx-ticker-badge"
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#22C55E",
            boxShadow: "0 0 10px #22C55E",
            display: "inline-block",
            animation: "radar-pulse 2s infinite ease-in-out",
          }}
        />
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11.5,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Live Openings
        </span>
      </div>

      <div
        className="jx-ticker-track"
        style={{
          display: "flex",
          gap: 16,
          width: "max-content",
          animation: "roster-scroll 42s linear infinite",
          paddingLeft: 170,
        }}
      >
        {loop.map((item, i) => (
          <div
            key={i}
            className="jx-ticker-pill"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.09)",
              borderRadius: 999,
              padding: "7px 15px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            {/* Company & Role Name */}
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 13.5,
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
              }}
            >
              <span style={{ color: "#FBBF24" }}>{item.company}</span> &mdash; {item.role}
            </span>

            {/* City */}
            <span
              style={{
                color: "#94A3B8",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              · {item.city}
            </span>

            {/* Openings Count Badge */}
            <span
              style={{
                background: "rgba(255, 176, 32, 0.15)",
                color: "#FFB020",
                border: "1px solid rgba(255, 176, 32, 0.3)",
                borderRadius: 6,
                padding: "2px 7px",
                fontSize: 11,
                fontWeight: 700,
                fontFamily: "'IBM Plex Mono', monospace",
                letterSpacing: "0.02em",
              }}
            >
              {item.count}
            </span>

            {/* Feature Tag */}
            <span
              style={{
                fontSize: 11,
                color: "#38BDF8",
                fontWeight: 500,
                background: "rgba(56, 189, 248, 0.08)",
                padding: "2px 7px",
                borderRadius: 4,
              }}
            >
              {item.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RosterTicker;
