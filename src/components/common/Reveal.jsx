import React, { useRef, useState, useEffect } from "react";

// --- Scroll Reveal Hook ---
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// --- Container Reveal Component ---
export function Reveal({ children, delay = 0, style = {}, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// --- Smooth Word-by-Word Masked Text Reveal Component ---
export function TextReveal({
  children,
  text,
  as: Tag = "div",
  delay = 0,
  stagger = 28,
  style = {},
  className = "",
}) {
  const [ref, visible] = useReveal();
  const rawText = text || (typeof children === "string" ? children : null);

  if (!rawText) {
    return (
      <Tag
        ref={ref}
        className={className}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          ...style,
        }}
      >
        {children}
      </Tag>
    );
  }

  const words = rawText.split(" ");

  return (
    <Tag ref={ref} className={className} style={{ ...style }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            marginRight: i === words.length - 1 ? 0 : "0.26em",
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(115%)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}ms, opacity 0.5s ease ${delay + i * stagger}ms`,
              willChange: "transform, opacity",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export default Reveal;
