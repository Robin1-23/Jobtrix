import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { TOKENS } from "../../constants/tokens";
import { JobtrixLogoIcon } from "../common/JobtrixLogoIcon";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isJobSeekers = location.pathname === "/job-seekers" || location.pathname === "/workers";
  const [activeTab, setActiveTab] = useState(isJobSeekers ? "workers" : "employers");

  const closeMobileNav = () => setNav(false);

  const navItems = [
    { id: "employers", label: "For employers", path: "/" },
    { id: "workers", label: "For job seekers", path: "/job-seekers" },
    { id: "how", label: "How it works", path: "/#how" },
    { id: "contact", label: "Contact", path: "#contact" },
  ];

  // Update active tab based on route and scroll position
  useEffect(() => {
    if (isJobSeekers) {
      setActiveTab("workers");
      return;
    }

    const handleScroll = () => {
      const sections = [
        { id: "contact", offset: 350 },
        { id: "how", offset: 250 },
        { id: "employers", offset: 0 },
      ];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveTab(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isJobSeekers, location.pathname]);

  const handleNavClick = (e, item) => {
    closeMobileNav();
    if (item.id === "employers") {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveTab("employers");
    } else if (item.id === "workers") {
      e.preventDefault();
      navigate("/job-seekers");
      setActiveTab("workers");
    } else if (item.id === "how") {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
      }
      setActiveTab("how");
    } else if (item.id === "contact") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setActiveTab("contact");
    }
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${TOKENS.line}`,
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
          <JobtrixLogoIcon size={34} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.015em", color: TOKENS.navy }}>
            Jobtrix
          </span>
        </Link>

        {/* Desktop Nav Links with Active Underline Indicator */}
        <div className="jx-nav-links" style={{ display: "flex", gap: 32, fontSize: 14 }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                style={{
                  color: isActive ? TOKENS.navy : TOKENS.inkSoft,
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: "none",
                  padding: "6px 0",
                  position: "relative",
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "color 0.2s ease",
                  cursor: "pointer",
                }}
              >
                <span>{item.label}</span>
                {/* Active Tab Underline */}
                <span
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2.5,
                    borderRadius: 2,
                    background: isActive ? TOKENS.amber : "transparent",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease",
                    transformOrigin: "center",
                  }}
                />
              </a>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-hire-modal"))}
            className="jx-btn jx-nav-cta"
            style={{
              background: "linear-gradient(90deg, #581C87 0%, #7C3AED 100%)",
              color: "#fff",
              border: "none",
              padding: "10px 22px",
              borderRadius: 999,
              fontSize: 13.5,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(124, 58, 237, 0.35)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Hire workforce &rarr;
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="jx-mobile-menu-btn"
            onClick={() => setNav((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {nav ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`jx-mobile-drawer ${nav ? "open" : ""}`}>
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <a
              key={item.id}
              href={item.path}
              onClick={(e) => handleNavClick(e, item)}
              style={{
                color: isActive ? TOKENS.navy : "#475569",
                textDecoration: "none",
                fontSize: 15.5,
                fontWeight: isActive ? 700 : 500,
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderLeft: isActive ? `3px solid ${TOKENS.amber}` : "3px solid transparent",
                background: isActive ? "rgba(255, 176, 32, 0.08)" : "transparent",
                borderRadius: "0 8px 8px 0",
                transition: "all 0.15s ease",
                cursor: "pointer",
              }}
            >
              <span>{item.label}</span>
              {isActive && (
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: TOKENS.amber }} />
              )}
            </a>
          );
        })}
        <button
          type="button"
          onClick={() => {
            closeMobileNav();
            window.dispatchEvent(new CustomEvent("open-hire-modal"));
          }}
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            background: "linear-gradient(90deg, #581C87 0%, #7C3AED 100%)",
            color: "#FFFFFF",
            padding: "13px 0",
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 700,
            border: "none",
            marginTop: 8,
            cursor: "pointer",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Hire workforce &rarr;
        </button>

        <Link
          to="/admin"
          onClick={closeMobileNav}
          style={{
            display: "block",
            textAlign: "center",
            color: "#64748B",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            padding: "8px 0",
          }}
        >
          Admin Portal &rarr;
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
