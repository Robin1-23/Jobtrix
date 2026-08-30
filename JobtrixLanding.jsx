import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TOKENS, FONTS } from "./src/constants/tokens";
import { Navbar } from "./src/components/layout/Navbar";
import { FooterSection } from "./src/components/layout/FooterSection";
import { MobileActionBar } from "./src/components/layout/MobileActionBar";
import { ScrollToTop } from "./src/components/common/ScrollToTop";
import { HomePage } from "./src/pages/HomePage";
import { JobSeekersPage } from "./src/pages/JobSeekersPage";
import { HowItWorksPage } from "./src/pages/HowItWorksPage";
import { ContactPage } from "./src/pages/ContactPage";
import { AdminPanelPage } from "./src/pages/AdminPanelPage";
import { EmployerApplicationModal } from "./src/components/modals/EmployerApplicationModal";

export default function JobtrixLanding() {
  const [isHireModalOpen, setIsHireModalOpen] = React.useState(false);
  const [hireModalPhone, setHireModalPhone] = React.useState("");

  React.useEffect(() => {
    const handleOpen = (e) => {
      if (e?.detail?.phone) {
        setHireModalPhone(e.detail.phone);
      }
      setIsHireModalOpen(true);
    };
    window.addEventListener("open-hire-modal", handleOpen);
    return () => window.removeEventListener("open-hire-modal", handleOpen);
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ fontFamily: "'Inter', sans-serif", color: TOKENS.ink, background: TOKENS.paper }}>
        <style>{`
          ${FONTS}
          * { box-sizing: border-box; }
          @keyframes roster-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(8px); }
          }
          .jx-btn { transition: transform 0.15s ease, box-shadow 0.15s ease; cursor: pointer; }
          .jx-btn:hover { transform: translateY(-2px); }
          .jx-card-light { transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease; }
          .jx-card-light:hover { transform: translateY(-6px); }
          .jx-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -20px rgba(16,25,46,0.25); }
          .jx-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
          input, select { font-family: 'Inter', sans-serif; }
          input:focus, select:focus { border-color: ${TOKENS.navy} !important; outline: none; }

          @keyframes radar-pulse {
            0% { transform: scale(0.95); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.8; }
          }
          .jx-ticker-wrap:hover .jx-ticker-track {
            animation-play-state: paused;
          }
          .jx-ticker-pill {
            transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          }
          .jx-ticker-pill:hover {
            transform: translateY(-2px);
            border-color: rgba(255, 176, 32, 0.4) !important;
            background: rgba(255, 255, 255, 0.1) !important;
          }

          .jx-footer-link {
            color: rgba(255, 255, 255, 0.82);
            text-decoration: none;
            font-size: 14.5px;
            transition: color 0.15s ease, transform 0.15s ease;
            display: inline-block;
          }
          .jx-footer-link:hover {
            color: #FFFFFF;
            transform: translateX(3px);
          }
          .jx-footer-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
          .jx-footer-input:focus {
            outline: 2px solid #FFB020 !important;
            background: rgba(255, 255, 255, 0.26) !important;
          }

          .jx-sector-card {
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease;
          }
          .jx-sector-card:hover {
            transform: translateY(-6px);
          }

          .jx-worker-card {
            transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .jx-worker-card:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 176, 32, 0.55) !important;
            box-shadow: 0 16px 36px -8px rgba(16, 25, 46, 0.09) !important;
          }

          .jx-interactive-icon {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), stroke 0.2s ease, filter 0.2s ease;
            display: inline-block;
            will-change: transform;
          }
          .jx-card-light:hover .jx-interactive-icon,
          .jx-worker-card:hover .jx-interactive-icon,
          .jx-sector-pill:hover .jx-interactive-icon {
            transform: scale(1.22) rotate(6deg);
          }

          .jx-client-logo-wrap {
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .jx-client-logo-wrap:hover {
            transform: translateY(-4px) scale(1.04);
          }

          .jx-step-card {
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease;
          }
          .jx-step-card:hover {
            transform: translateY(-6px);
          }

          .jx-hero-collage {
            position: relative;
            min-height: 540px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .jx-typing-cursor {
            color: ${TOKENS.amberDark};
            font-weight: 500;
            margin-left: 2px;
          }
          
          .jx-mobile-menu-btn {
            display: none;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 8px;
            color: ${TOKENS.navy};
          }

          .jx-mobile-drawer {
            display: none;
            flex-direction: column;
            gap: 16px;
            padding: 20px 24px;
            background: #ffffff;
            border-bottom: 1px solid ${TOKENS.line};
          }

          html, body {
            overflow-x: hidden;
            width: 100%;
            margin: 0;
            padding: 0;
            -webkit-tap-highlight-color: transparent;
          }

          .jx-section {
            padding: 88px 24px;
          }

          @media (max-width: 860px) {
            .jx-hero { grid-template-columns: 1fr !important; gap: 36px !important; }
            .jx-nav-links { display: none !important; }
            .jx-nav-cta { display: none !important; }
            .jx-mobile-menu-btn { display: block !important; }
            .jx-mobile-drawer.open { display: flex !important; }
            .jx-section { padding: 64px 20px !important; }
            .jx-hero-collage {
              min-height: 460px !important;
              margin-top: 24px;
              max-width: 100% !important;
              overflow: hidden;
            }
          }

          @media (max-width: 640px) {
            .jx-section { padding: 48px 16px !important; }
            .jx-spotlight-stage {
              padding: 24px 16px !important;
              border-radius: 18px !important;
            }
            .jx-worker-grid {
              grid-template-columns: 1fr !important;
            }
            .jx-client-logo-wrap img {
              max-height: 60px !important;
              max-width: 160px !important;
            }
            .jx-footer-form {
              flex-direction: column !important;
              width: 100% !important;
            }
            .jx-footer-form input,
            .jx-footer-form button {
              width: 100% !important;
            }
            .jx-hero-cta-group {
              flex-direction: column !important;
              width: 100% !important;
            }
            .jx-hero-cta-group a {
              width: 100% !important;
              text-align: center !important;
              justify-content: center !important;
            }
            .jx-footer-swoosh {
              width: 130px !important;
              height: 70px !important;
            }
            .jx-value-header-dot {
              display: none !important;
            }
            .jx-contact-grid {
              grid-template-columns: 1fr !important;
              gap: 36px !important;
            }
          }

          @media (max-width: 440px) {
            .jx-hero-collage-inner {
              transform: scale(0.82);
              transform-origin: top center;
            }
            .jx-hero-collage {
              min-height: 400px !important;
            }
          }

          /* Job Seeker Hero Stage (Matching User Screenshot - Larger & Spacious) */
          .jx-jobseeker-hero-stage {
            position: relative;
            min-height: 570px;
            width: 100%;
            max-width: 1320px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px 0;
          }

          .jx-jobseeker-center {
            position: relative;
            z-index: 5;
            text-align: center;
            max-width: 580px;
            padding: 0 20px;
          }

          .jx-float-worker {
            position: absolute;
            width: 172px;
            height: 172px;
            border-radius: 30px;
            overflow: hidden;
            box-shadow: 0 22px 50px -12px rgba(16, 25, 46, 0.2), 0 0 0 1px rgba(255,255,255,0.6);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
            z-index: 2;
          }
          .jx-float-worker:hover {
            transform: translateY(-6px) scale(1.04);
            box-shadow: 0 28px 60px -12px rgba(16, 25, 46, 0.28);
          }

          .jx-worker-tl { top: -15px; left: -10px; }
          .jx-worker-bl { bottom: 12px; left: 15px; }
          .jx-worker-tr { top: -15px; right: -10px; }
          .jx-worker-br { bottom: 90px; right: 10px; }

          .jx-float-card {
            position: absolute;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.07);
            border-radius: 24px;
            padding: 18px 20px;
            box-shadow: 0 18px 42px -10px rgba(16, 25, 46, 0.15), 0 2px 6px rgba(0,0,0,0.02);
            z-index: 3;
            width: 170px;
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
          }
          .jx-float-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 24px 50px -10px rgba(16, 25, 46, 0.22);
          }

          .jx-card-left { top: 200px; left: 155px; }
          .jx-card-right { bottom: 25px; right: 170px; }

          @media (max-width: 1280px) {
            .jx-jobseeker-hero-stage { min-height: 520px; }
            .jx-float-worker { width: 145px; height: 145px; border-radius: 24px; }
            .jx-float-card { width: 150px; padding: 14px 16px; border-radius: 20px; }
            .jx-worker-tl { top: 0px; left: 5px; }
            .jx-worker-bl { bottom: 8px; left: 15px; }
            .jx-worker-tr { top: 0px; right: 5px; }
            .jx-worker-br { bottom: 70px; right: 15px; }
            .jx-card-left { top: 175px; left: 120px; }
            .jx-card-right { bottom: 15px; right: 130px; }
          }

          @media (max-width: 1040px) {
            .jx-jobseeker-hero-stage { min-height: 460px; }
            .jx-float-worker { width: 115px; height: 115px; border-radius: 20px; }
            .jx-float-card { width: 130px; padding: 10px 14px; border-radius: 16px; }
            .jx-worker-tl { top: 0px; left: 0px; }
            .jx-worker-bl { bottom: 0px; left: 5px; }
            .jx-worker-tr { top: 0px; right: 0px; }
            .jx-worker-br { bottom: 50px; right: 5px; }
            .jx-card-left { top: 135px; left: 75px; }
            .jx-card-right { bottom: 5px; right: 80px; }
          }

          @media (max-width: 820px) {
            .jx-jobseeker-hero-stage {
              min-height: auto;
              flex-direction: column;
              padding: 10px 0;
            }
            .jx-worker-tl, .jx-worker-tr, .jx-worker-bl, .jx-worker-br,
            .jx-card-left, .jx-card-right {
              display: none !important;
            }
          }

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
            display: flex;
            gap: 28px;
            width: max-content;
            animation: testimonial-marquee 42s linear infinite;
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
          }

          .jx-mobile-action-bar {
            display: none;
          }
          .jx-mobile-action-btn {
            transition: transform 0.15s ease, opacity 0.15s ease;
            -webkit-tap-highlight-color: transparent;
          }
          .jx-mobile-action-btn:active {
            transform: scale(0.96);
            opacity: 0.9;
          }
          @media (max-width: 768px) {
            body {
              padding-bottom: 68px !important;
            }
            .jx-mobile-action-bar {
              display: flex !important;
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 999;
              background: #080D1A;
              border-top: 1px solid rgba(255, 255, 255, 0.12);
              padding: 10px 12px calc(10px + env(safe-area-inset-bottom, 0px));
              gap: 10px;
              align-items: center;
              box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.45);
            }
          }
        `}</style>

        {/* Global Sticky Navigation */}
        <Navbar />

        {/* Multipage Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job-seekers" element={<JobSeekersPage />} />
          <Route path="/workers" element={<Navigate to="/job-seekers" replace />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPanelPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Global Footer */}
        <FooterSection />

        {/* Mobile Sticky Action Bar */}
        <MobileActionBar />

        {/* Global Employer Application Modal */}
        <EmployerApplicationModal
          isOpen={isHireModalOpen}
          initialPhone={hireModalPhone}
          onClose={() => {
            setIsHireModalOpen(false);
            setHireModalPhone("");
          }}
        />
      </div>
    </BrowserRouter>
  );
}
