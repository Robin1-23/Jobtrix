import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ROUTE_TITLES = {
  "/": "Jobtrix - Modern Frontline & Blue-Collar Workforce Solutions",
  "/job-seekers": "For Job Seekers - Verified Delivery & Frontline Jobs | Jobtrix",
  "/workers": "For Job Seekers - Verified Delivery & Frontline Jobs | Jobtrix",
  "/how-it-works": "How It Works - Transparent Workforce Staffing | Jobtrix",
  "/contact": "Contact Us - Operations & Workforce Support Desk | Jobtrix",
  "/admin": "Admin Telemetry Panel | Jobtrix",
};

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = ROUTE_TITLES[pathname] || "Page Not Found | Jobtrix";
    document.title = title;
  }, [pathname]);

  return null;
}

export default ScrollToTop;
