import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { TextReveal } from "./Reveal";

const testimonials = [
  {
    quote: "Pehle job ke liye bhatakta rehta tha. Jobtrix join kiya aur 2 din mein delivery job mil gayi. Inka ecosystem ekdum solid hai!",
    name: "Amit V.",
    location: "Delhi • Rohini",
    avatar: "/images/worker_top_left.png",
  },
  {
    quote: "Job shodhayla khup tras hota hota, pan Jobtrix mule Dadar madhe lagech kaam milala. Direct brand connection aahe, mhanun tension nahi!",
    name: "Rahul M.",
    location: "Mumbai • Dadar",
    avatar: "/images/worker_bottom_right.png",
  },
  {
    quote: "Kelasa hudukodu thumba difficulty ittu. Jobtrix join madida mele, 2 days nalli delivery job siktu. Super platform idi!",
    name: "Sandeep K.",
    location: "Bengaluru • HSR Layout",
    avatar: "/images/worker_top_right.png",
  },
  {
    quote: "Job kosam chala kashtapaddanu. Jobtrix lo register ayyaka, delivery job 48 hours lo confirm ayyindi. Ee platform chala help chesindi!",
    name: "Arjun R.",
    location: "Hyderabad • Gachibowli",
    avatar: "/images/worker_bottom_left.png",
  },
  {
    quote: "Seedha WhatsApp par message kiya aur agle din verification ho gayi. Payout time par milta hai, koi middleman commission nahi.",
    name: "Vikram S.",
    location: "Gurgaon • Sector 29",
    avatar: "/images/worker_yellow_helmet.jpg",
  },
  {
    quote: "Hospitality shift timing flexible chahiye thi. Jobtrix bot ne nearby center me 2 din ke andar verified schedule fix karwa diya.",
    name: "Pooja D.",
    location: "Pune • Kothrud",
    avatar: "/images/hero_image_2.jpg",
  },
];

export function TestimonialsCarousel() {
  const scrollRef = useRef(null);
  const [direction, setDirection] = useState("normal"); // "normal" or "reverse"

  // Quadruple items to ensure seamless infinite looping track
  const loop = [...testimonials, ...testimonials, ...testimonials];

  const handlePrev = () => {
    setDirection("reverse");
  };

  const handleNext = () => {
    setDirection("normal");
  };

  return (
    <div style={{ position: "relative", width: "100%", padding: "10px 0" }}>
      <style>{`
        @keyframes testimonial-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .jx-testimonials-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .jx-testimonials-marquee {
          display: flex !important;
          gap: 28px !important;
          width: max-content !important;
          animation: testimonial-marquee 45s linear infinite;
          will-change: transform;
        }
        .jx-testimonials-wrapper:hover .jx-testimonials-marquee {
          animation-play-state: paused;
        }
        .jx-testimonial-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .jx-testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px -8px rgba(16, 25, 46, 0.14) !important;
        }
      `}</style>
      {/* Top Header Row with Title and Carousel Arrows */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 36,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              width: 50,
              height: 4,
              background: TOKENS.amber,
              borderRadius: 4,
              marginBottom: 16,
            }}
          />
          <TextReveal
            as="h2"
            text="Rider's Testimonials"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(30px, 3.8vw, 44px)",
              fontWeight: 700,
              color: TOKENS.navy,
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-0.015em",
            }}
          />
        </div>

        {/* Carousel Direction Navigation Buttons Matching Screenshot */}
        <div style={{ display: "flex", gap: 12 }}>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous direction"
            className="jx-btn"
            title="Glide left"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: direction === "reverse" ? TOKENS.navy : "#718096",
              color: "#FFFFFF",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = TOKENS.navy)}
            onMouseLeave={(e) => (e.currentTarget.style.background = direction === "reverse" ? TOKENS.navy : "#718096")}
          >
            <ChevronLeft size={22} strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next direction"
            className="jx-btn"
            title="Glide right"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: direction === "normal" ? TOKENS.navy : "#718096",
              color: "#FFFFFF",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = TOKENS.navy)}
            onMouseLeave={(e) => (e.currentTarget.style.background = direction === "normal" ? TOKENS.navy : "#718096")}
          >
            <ChevronRight size={22} strokeWidth={2.4} />
          </button>
        </div>
      </div>

      {/* Automatic Moving Carousel Stage */}
      <div className="jx-testimonials-wrapper">
        {/* Soft edge fade masks */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 70,
            background: "linear-gradient(90deg, #FFFFFF 0%, transparent 100%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: 70,
            background: "linear-gradient(270deg, #FFFFFF 0%, transparent 100%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />

        {/* Continuous Automatic Moving Track */}
        <div
          ref={scrollRef}
          className="jx-testimonials-marquee"
          style={{
            animationDirection: direction === "reverse" ? "reverse" : "normal",
            animationDuration: "50s",
            padding: "10px 0 20px",
          }}
        >
          {loop.map((t, i) => (
            <div
              key={i}
              className="jx-testimonial-card"
              style={{
                flex: "0 0 320px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#FFFFFF",
                borderRadius: 20,
                border: "1px solid rgba(0, 0, 0, 0.06)",
                padding: "24px 22px",
                boxShadow: "0 8px 24px -6px rgba(16, 25, 46, 0.06)",
                cursor: "pointer",
              }}
            >
              <div>
                {/* Golden Double Quote Icon Matching Screenshot */}
                <div
                  style={{
                    color: "#EAA61E",
                    fontSize: 40,
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                    marginBottom: 12,
                    fontWeight: 700,
                    userSelect: "none",
                  }}
                >
                  &#8221;&#8221;
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    color: "#2D3748",
                    margin: "0 0 24px",
                    fontWeight: 400,
                    minHeight: 84,
                  }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Author Profile Row */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: "auto" }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.12)",
                    flexShrink: 0,
                    background: "#E2E8F0",
                  }}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 15.5,
                      color: TOKENS.navy,
                      lineHeight: 1.2,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "#718096",
                      marginTop: 3,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
