import React, { useState, useMemo } from "react";
import { MapPin, Wallet, ChevronDown, X, CheckCircle2 } from "lucide-react";
import { TOKENS } from "../../constants/tokens";
import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import { CandidateQuickApplyModal } from "../modals/CandidateQuickApplyModal";

// WhatsApp SVG Icon
function WhatsAppIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.25-1.93 1.29-.49.04-1.12.06-3.62-.97-2.94-1.21-4.83-4.22-4.98-4.42-.14-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.14.67-.08.19-.22.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.07.13.07.76-.17 1.44z" />
    </svg>
  );
}

// Complete Job Database for all 19 unique companies & frontline roles (Zero Duplicates)
export const JOB_LISTINGS = [
  // 1. ZOMATO
  {
    id: "zomato-1",
    title: "Zomato Delivery Boy",
    company: "Zomato",
    city: "Mumbai",
    neighbourhood: "600 Tenament Gate",
    location: "600 Tenament Gate, Mumbai",
    salary: "₹23k - ₹30k",
    brandColor: "#CB202D",
    logoText: "zomato",
    vehicle: "Bike / Scooter / EV",
    shift: "Flexible (Morning / Evening / Night)",
    payout: "Weekly Payouts",
  },

  // 2. SWIGGY
  {
    id: "swiggy-1",
    title: "Swiggy Delivery Boy",
    company: "Swiggy",
    city: "Mumbai",
    neighbourhood: "A.D.Modi Institute",
    location: "A.D.Modi Institute, Mumbai",
    salary: "₹24k - ₹29k",
    brandColor: "#FC8019",
    logoText: "swiggy",
    vehicle: "Bike / Scooter / EV",
    shift: "Flexible Hours",
    payout: "Weekly Payouts",
  },

  // 3. ZEPTO
  {
    id: "zepto-1",
    title: "Zepto Delivery Boy",
    company: "Zepto",
    city: "Bengaluru",
    neighbourhood: "Koramangala 5th Block",
    location: "Koramangala 5th Block, Bengaluru",
    salary: "₹25k - ₹35k",
    brandColor: "#4B0082",
    logoText: "zepto",
    vehicle: "2-Wheeler (EV / Petrol)",
    shift: "10-Min Fast Hub Shifts",
    payout: "Weekly Direct Payout",
  },

  // 4. BLINKIT
  {
    id: "blinkit-1",
    title: "Blinkit Delivery Partner",
    company: "Blinkit",
    city: "Delhi NCR",
    neighbourhood: "Saket Sector 4",
    location: "Saket Sector 4, Delhi NCR",
    salary: "₹26k - ₹34k",
    brandColor: "#F4D03F",
    textColor: "#0F172A",
    logoText: "blinkit",
    vehicle: "Bike / Scooter",
    shift: "Store Proximity Deliveries (3km radius)",
    payout: "Weekly Payout + Shift Incentives",
  },

  // 5. SWIGGY INSTAMART
  {
    id: "instamart-1",
    title: "Swiggy Instamart Rider",
    company: "Swiggy Instamart",
    city: "Mumbai",
    neighbourhood: "Andheri East",
    location: "Andheri East Pod Hub, Mumbai",
    salary: "₹25k - ₹32k",
    brandColor: "#FC8019",
    logoText: "instamart",
    vehicle: "2-Wheeler / Electric Bike",
    shift: "Morning / Evening Peak Slots",
    payout: "Weekly Payouts + Order Surges",
  },

  // 6. PORTER
  {
    id: "porter-1",
    title: "Porter Driver Partner",
    company: "Porter",
    city: "Delhi NCR",
    neighbourhood: "Kirti Nagar Industrial Area",
    location: "Kirti Nagar Industrial Area, Delhi",
    salary: "₹28k - ₹40k",
    brandColor: "#0066FF",
    logoText: "porter",
    vehicle: "2W / 3W / Tata Ace / Pickup",
    shift: "Intercity / On-Demand Logistics",
    payout: "Daily / Weekly Settlement",
  },

  // 7. FLIPKART
  {
    id: "flipkart-1",
    title: "Flipkart Delivery Associate",
    company: "Flipkart",
    city: "Bengaluru",
    neighbourhood: "Whitefield Tech Hub",
    location: "Whitefield Tech Hub, Bengaluru",
    salary: "₹22k - ₹28k",
    brandColor: "#2874F0",
    logoText: "flipkart",
    vehicle: "Bike / Commercial Van",
    shift: "Day Shift (8:00 AM - 5:00 PM)",
    payout: "Monthly Bank Transfer + Fuel Allowance",
  },

  // 8. XPRESSBEES
  {
    id: "xpressbees-1",
    title: "XpressBees Delivery Executive",
    company: "Xpress Bees",
    city: "Delhi NCR",
    neighbourhood: "Okhla Phase 3",
    location: "Okhla Phase 3 Logistics Park, Delhi",
    salary: "₹21k - ₹27k",
    brandColor: "#E63946",
    logoText: "xpressbees",
    vehicle: "Bike with Delivery Bag",
    shift: "Fixed Route E-Commerce Delivery",
    payout: "Weekly / Bi-Monthly Direct Transfer",
  },

  // 9. DOMINOS
  {
    id: "dominos-1",
    title: "Dominos Delivery Rider",
    company: "Dominos",
    city: "Delhi NCR",
    neighbourhood: "Connaught Place",
    location: "Connaught Place Inner Circle, Delhi",
    salary: "₹20k - ₹26k",
    brandColor: "#006491",
    logoText: "dominos",
    vehicle: "Store Bike / Own 2-Wheeler",
    shift: "Hot Pizza Express Shifts (Lunch/Dinner)",
    payout: "Weekly Payout + Free Meal on Duty",
  },

  // 10. SHADOWFAX
  {
    id: "shadowfax-1",
    title: "Shadowfax Multi-Drop Partner",
    company: "Shadowfax",
    city: "Bengaluru",
    neighbourhood: "HSR Layout Sector 2",
    location: "HSR Layout Sector 2, Bengaluru",
    salary: "₹24k - ₹31k",
    brandColor: "#FF6B00",
    logoText: "shadowfax",
    vehicle: "Bike / Scooter",
    shift: "Multi-Platform Deliveries",
    payout: "Weekly Guaranteed Minimums",
  },

  // 11. RAPIDO
  {
    id: "rapido-1",
    title: "Rapido Bike Captain",
    company: "Rapido",
    city: "Hyderabad",
    neighbourhood: "Madhapur HITEC City",
    location: "Madhapur HITEC City, Hyderabad",
    salary: "₹22k - ₹30k",
    brandColor: "#F9A825",
    textColor: "#0F172A",
    logoText: "rapido",
    vehicle: "Own 2-Wheeler + Helmet",
    shift: "Flexible Login / Ride On-Demand",
    payout: "Instant Daily Cashout",
  },

  // 12. UBER
  {
    id: "uber-1",
    title: "Uber Moto & Fleet Driver",
    company: "Uber",
    city: "Delhi NCR",
    neighbourhood: "Cyber City",
    location: "DLF Cyber City Phase 2, Gurgaon",
    salary: "₹26k - ₹38k",
    brandColor: "#000000",
    logoText: "uber",
    vehicle: "Bike / Auto / Commercial Car",
    shift: "24/7 Flexible Operating Hours",
    payout: "Daily / Weekly In-App Direct Deposit",
  },

  // 13. PRONTO (HOUSEKEEPING & MAID)
  {
    id: "pronto-1",
    title: "Pronto Housekeeping & Maid",
    company: "Pronto",
    city: "Mumbai",
    neighbourhood: "Bandra West",
    location: "Bandra West Residential Hub, Mumbai",
    salary: "₹22k - ₹32k",
    brandColor: "#0D9488",
    logoText: "pronto",
    vehicle: "No Vehicle Required",
    shift: "Full-Time / Part-Time Shifts Available",
    payout: "Weekly Direct Bank Transfer + Tips",
  },

  // 14. URBAN COMPANY (HOUSEKEEPING & MAID)
  {
    id: "urban-company-1",
    title: "Urban Company Housekeeping & Maid",
    company: "Urban Company",
    city: "Bengaluru",
    neighbourhood: "Indiranagar",
    location: "Indiranagar & Koramangala Hub, Bengaluru",
    salary: "₹25k - ₹35k",
    brandColor: "#111827",
    logoText: "urban co",
    vehicle: "No Vehicle Required (Kit Provided)",
    shift: "Residential Home Cleaning & Housekeeping",
    payout: "Weekly Payouts + Verified Customer Tips",
  },

  // 15. SNABBIT (HOUSEKEEPING & MAID)
  {
    id: "snabbit-1",
    title: "Snabbit Housekeeping & Maid",
    company: "Snabbit",
    city: "Mumbai",
    neighbourhood: "Powai",
    location: "Hiranandani Gardens, Powai, Mumbai",
    salary: "₹20k - ₹28k",
    brandColor: "#E11D48",
    logoText: "snabbit",
    vehicle: "No Vehicle Required",
    shift: "Domestic Cleaning & Dark Store Care",
    payout: "Weekly Direct Payout + Insurance",
  },

  // 16. BLINKIT PICKER PACKER
  {
    id: "blinkit-picker-1",
    title: "Blinkit Store Picker Packer",
    company: "Blinkit Picker Packer",
    city: "Delhi NCR",
    neighbourhood: "Malviya Nagar",
    location: "Malviya Nagar Dark Store, Delhi NCR",
    salary: "₹20k - ₹25k",
    brandColor: "#F59E0B",
    textColor: "#0F172A",
    logoText: "picker",
    vehicle: "No Vehicle Required (Indoor Store)",
    shift: "Rotational Shifts (Morning / Evening)",
    payout: "Weekly Payout + Attendance Bonus",
  },

  // 17. EVEREST FLEET
  {
    id: "everest-1",
    title: "Everest Fleet EV Driver",
    company: "Everest Fleet",
    city: "Mumbai",
    neighbourhood: "Kurla",
    location: "Kurla EV Hub & Charging Station, Mumbai",
    salary: "₹30k - ₹45k",
    brandColor: "#059669",
    logoText: "everest",
    vehicle: "Commercial EV Car Provided",
    shift: "10h Daily Shift Roster",
    payout: "Weekly Payouts + Zero Fuel Cost",
  },

  // 18. FLIPKART MINUTES
  {
    id: "flipkart-minutes-1",
    title: "Flipkart Minutes 10-Min Rider",
    company: "Flipkart Minutes",
    city: "Bengaluru",
    neighbourhood: "Electronic City",
    location: "Electronic City Phase 1, Bengaluru",
    salary: "₹25k - ₹33k",
    brandColor: "#1D4ED8",
    logoText: "minutes",
    vehicle: "Bike / EV Scooter",
    shift: "Hyperlocal Quick Delivery Roster",
    payout: "Weekly Direct Transfer",
  },

  // 19. SWIGGY PICKER PACKER
  {
    id: "swiggy-picker-1",
    title: "Swiggy Store Fulfillment Partner",
    company: "Swiggy Picker Packer",
    city: "Bengaluru",
    neighbourhood: "Marathahalli",
    location: "Marathahalli Instamart Hub, Bengaluru",
    salary: "₹20k - ₹26k",
    brandColor: "#EA580C",
    logoText: "packer",
    vehicle: "No Vehicle Required (Indoor Store)",
    shift: "Fixed 8-Hour Store Shift",
    payout: "Weekly Direct Bank Transfer",
  },
];

export function HiringCompaniesSection() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [activeModalJob, setActiveModalJob] = useState(null);
  const [quickApplyJob, setQuickApplyJob] = useState(null);

  // Extract unique cities, neighbourhoods, and companies dynamically
  const cities = useMemo(() => ["All", ...Array.from(new Set(JOB_LISTINGS.map((j) => j.city)))], []);
  const companies = useMemo(() => ["All", ...Array.from(new Set(JOB_LISTINGS.map((j) => j.company)))], []);
  
  const neighbourhoods = useMemo(() => {
    const pool = selectedCity === "All" ? JOB_LISTINGS : JOB_LISTINGS.filter((j) => j.city === selectedCity);
    return ["All", ...Array.from(new Set(pool.map((j) => j.neighbourhood)))];
  }, [selectedCity]);

  // Filtered Job Listings
  const filteredJobs = useMemo(() => {
    return JOB_LISTINGS.filter((job) => {
      const matchCity = selectedCity === "All" || job.city === selectedCity;
      const matchNeighbourhood = selectedNeighbourhood === "All" || job.neighbourhood === selectedNeighbourhood;
      const matchCompany = selectedCompany === "All" || job.company === selectedCompany;
      return matchCity && matchNeighbourhood && matchCompany;
    });
  }, [selectedCity, selectedNeighbourhood, selectedCompany]);

  return (
    <Section
      id="jobs-listing-section"
      bg="#FFFFFF"
      style={{
        paddingTop: 48,
        paddingBottom: 88,
        borderTop: `1px solid ${TOKENS.line}`,
      }}
    >
      <Reveal>
        {/* 1. TOP BLUE PROMO RIBBON (MATCHING USER SCREENSHOT) */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: -16, position: "relative", zIndex: 3 }}>
          <div
            style={{
              background: "#1D4ED8",
              color: "#FFFFFF",
              borderRadius: 8,
              padding: "10px 28px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 1.1vw, 15px)",
              fontWeight: 600,
              boxShadow: "0 4px 14px rgba(29, 78, 216, 0.3)",
              textAlign: "center",
              maxWidth: 620,
              width: "90%",
            }}
          >
            Share your details and get guaranteed delivery job opportunities.
          </div>
        </div>

        {/* 2. FILTER BAR CARD (MATCHING USER SCREENSHOT) */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: 24,
            padding: "30px 28px 24px",
            marginBottom: 36,
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14.5,
                fontWeight: 600,
                color: "#475569",
                minWidth: 64,
              }}
            >
              Filter by
            </span>

            {/* City Dropdown */}
            <div style={{ position: "relative", flex: "1 1 180px", maxWidth: 220 }}>
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedNeighbourhood("All");
                }}
                style={{
                  width: "100%",
                  appearance: "none",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 999,
                  padding: "10px 36px 10px 18px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: selectedCity === "All" ? "#64748B" : "#0F172A",
                  fontWeight: 500,
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="All">City (All)</option>
                {cities.filter((c) => c !== "All").map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown
                size={16}
                color="#94A3B8"
                style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
            </div>

            {/* Neighbourhood Dropdown */}
            <div style={{ position: "relative", flex: "1 1 200px", maxWidth: 260 }}>
              <select
                value={selectedNeighbourhood}
                onChange={(e) => setSelectedNeighbourhood(e.target.value)}
                style={{
                  width: "100%",
                  appearance: "none",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 999,
                  padding: "10px 36px 10px 18px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: selectedNeighbourhood === "All" ? "#64748B" : "#0F172A",
                  fontWeight: 500,
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="All">Neighbourhood (All)</option>
                {neighbourhoods.filter((n) => n !== "All").map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <ChevronDown
                size={16}
                color="#94A3B8"
                style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
            </div>

            {/* Company Dropdown */}
            <div style={{ position: "relative", flex: "1 1 200px", maxWidth: 240 }}>
              <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                style={{
                  width: "100%",
                  appearance: "none",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 999,
                  padding: "10px 36px 10px 18px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: selectedCompany === "All" ? "#64748B" : "#0F172A",
                  fontWeight: 500,
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="All">Company (All)</option>
                {companies.filter((c) => c !== "All").map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown
                size={16}
                color="#94A3B8"
                style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
            </div>

            {(selectedCity !== "All" || selectedNeighbourhood !== "All" || selectedCompany !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCity("All");
                  setSelectedNeighbourhood("All");
                  setSelectedCompany("All");
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#EAA61E",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  marginLeft: "auto",
                }}
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* 3. EXACT JOB CARDS GRID (MATCHING USER SCREENSHOT) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 330px), 1fr))",
            gap: 24,
          }}
        >
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="jx-job-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8EEF5",
                borderRadius: 20,
                padding: "24px 22px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 18px -4px rgba(16, 25, 46, 0.05)",
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 14px 30px -6px rgba(16, 25, 46, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px -4px rgba(16, 25, 46, 0.05)";
              }}
            >
              <div>
                {/* Header: Title + Company on Left, Brand Icon Badge on Right */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                  }}
                >
                  <div style={{ paddingRight: 10 }}>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#10192E",
                        margin: "0 0 4px",
                        lineHeight: 1.25,
                      }}
                    >
                      {job.title}
                    </h3>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13.5,
                        color: "#64748B",
                        fontWeight: 500,
                      }}
                    >
                      {job.company}
                    </div>
                  </div>

                  {/* Brand App Icon Badge Matching Screenshot */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: job.brandColor,
                      color: job.textColor || "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: 12.5,
                      fontFamily: "'Space Grotesk', sans-serif",
                      flexShrink: 0,
                      boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
                      letterSpacing: "-0.02em",
                      textTransform: "lowercase",
                    }}
                  >
                    {job.logoText}
                  </div>
                </div>

                {/* Location Row with Map Pin */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#475569",
                    fontSize: 13.5,
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: 10,
                  }}
                >
                  <MapPin size={15} color="#94A3B8" style={{ flexShrink: 0 }} />
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {job.location}
                  </span>
                </div>

                {/* Salary Row with Wallet Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#1E293B",
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: 20,
                  }}
                >
                  <Wallet size={15} color="#94A3B8" style={{ flexShrink: 0 }} />
                  <span>{job.salary}</span>
                </div>
              </div>

              {/* Bottom Actions Row with Hairline Divider */}
              <div>
                <div
                  style={{
                    height: 1,
                    background: "#F1F5F9",
                    margin: "0 -22px 14px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Know More Action */}
                  <button
                    type="button"
                    onClick={() => setActiveModalJob(job)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#EAA61E",
                      fontSize: 13.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: 0,
                      fontFamily: "'Inter', sans-serif",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                  >
                    Know More
                  </button>

                  {/* APPLY NOW Purple Pill Button Matching User Screenshot */}
                  <button
                    type="button"
                    onClick={() => setQuickApplyJob(job)}
                    className="jx-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      border: "1.5px solid #581C87",
                      background: "#FFFFFF",
                      color: "#581C87",
                      borderRadius: 999,
                      padding: "6px 16px",
                      fontSize: 12.5,
                      fontWeight: 700,
                      letterSpacing: "0.03em",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#581C87";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#FFFFFF";
                      e.currentTarget.style.color = "#581C87";
                    }}
                  >
                    <WhatsAppIcon size={15} color="currentColor" />
                    <span>APPLY NOW</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* KNOW MORE MODAL POPUP */}
      {activeModalJob && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(16, 25, 46, 0.65)",
            backdropFilter: "blur(5px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={() => setActiveModalJob(null)}
        >
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 24,
              maxWidth: 480,
              width: "100%",
              padding: "28px 24px",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.3)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveModalJob(null)}
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                background: "#F1F5F9",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#64748B",
              }}
            >
              <X size={18} />
            </button>

            {/* Header with App Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: activeModalJob.brandColor,
                  color: activeModalJob.textColor || "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 14,
                }}
              >
                {activeModalJob.logoText}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, fontWeight: 700, color: "#10192E", margin: "0 0 2px" }}>
                  {activeModalJob.title}
                </h3>
                <div style={{ fontSize: 13.5, color: "#64748B" }}>
                  {activeModalJob.company} &bull; {activeModalJob.city}
                </div>
              </div>
            </div>

            {/* Details List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24, fontSize: 14, color: "#334155" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Wallet size={16} color="#16A34A" />
                <span><strong>Estimated Earnings:</strong> {activeModalJob.salary}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={16} color="#0284C7" />
                <span><strong>Operating Hub:</strong> {activeModalJob.location}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircle2 size={16} color="#EAA61E" />
                <span><strong>Vehicle Requirement:</strong> {activeModalJob.vehicle}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircle2 size={16} color="#581C87" />
                <span><strong>Shift Timing:</strong> {activeModalJob.shift}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircle2 size={16} color="#16A34A" />
                <span><strong>Payout Structure:</strong> {activeModalJob.payout}</span>
              </div>
            </div>

            {/* Modal WhatsApp Apply Button */}
            <button
              type="button"
              onClick={() => {
                const j = activeModalJob;
                setActiveModalJob(null);
                setQuickApplyJob(j);
              }}
              className="jx-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#581C87",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 999,
                padding: "14px 24px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14.5,
                fontWeight: 700,
                cursor: "pointer",
                width: "100%",
                boxSizing: "border-box",
                boxShadow: "0 10px 25px -4px rgba(88, 28, 135, 0.45)",
              }}
            >
              <WhatsAppIcon size={18} color="#FFFFFF" />
              <span>APPLY NOW ON WHATSAPP</span>
            </button>
          </div>
        </div>
      )}

      {/* Instant Candidate Lead Capture Modal */}
      <CandidateQuickApplyModal
        isOpen={!!quickApplyJob}
        onClose={() => setQuickApplyJob(null)}
        job={quickApplyJob}
      />
    </Section>
  );
}

export default HiringCompaniesSection;
