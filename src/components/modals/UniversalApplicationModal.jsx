import React, { useState, useEffect } from "react";
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Phone, 
  Building2, 
  User, 
  MapPin, 
  Briefcase, 
  MessageCircle,
  Sparkles,
  Check
} from "lucide-react";
import { leadService } from "../../services/leadService";

// Strict Indian Mobile Number Regex (10 digits starting with 6-9)
const PHONE_REGEX = /^[6-9]\d{9}$/;

export function UniversalApplicationModal({ isOpen, onClose, initialMode = "seeker", initialPhone = "" }) {
  const [activeTab, setActiveTab] = useState(initialMode); // "seeker" | "employer"

  // Seeker form state
  const [seekerName, setSeekerName] = useState("");
  const [seekerPhone, setSeekerPhone] = useState(initialPhone);
  const [seekerRole, setSeekerRole] = useState("Delivery Partner");
  const [seekerCity, setSeekerCity] = useState("Delhi NCR");
  const [seekerVehicle, setSeekerVehicle] = useState("Bike / Two-Wheeler");

  // Employer form state
  const [empName, setEmpName] = useState("");
  const [empCompany, setEmpCompany] = useState("");
  const [empPhone, setEmpPhone] = useState(initialPhone);
  const [empRole, setEmpRole] = useState("Delivery & Courier");
  const [empCount, setEmpCount] = useState("10-25");
  const [empCity, setEmpCity] = useState("Delhi NCR");

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (initialMode) setActiveTab(initialMode);
    if (initialPhone) {
      setSeekerPhone(initialPhone);
      setEmpPhone(initialPhone);
    }
  }, [initialMode, initialPhone, isOpen]);

  if (!isOpen) return null;

  const handlePhoneFilter = (val, setter) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    setter(digits);
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleSeekerSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!seekerName.trim()) errs.name = "Please enter your name.";
    if (!PHONE_REGEX.test(seekerPhone)) {
      errs.phone = "Enter a valid 10-digit mobile number.";
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const ref = "CAND-" + Date.now().toString().slice(-4);
    leadService.saveCandidateLead({
      name: seekerName.trim(),
      phone: seekerPhone.trim(),
      role: seekerRole,
      city: seekerCity,
      experience: seekerVehicle,
      source: "Mobile Quick Apply Modal",
    });

    setReferenceId(ref);
    setIsSubmitted(true);

    const waMsg = encodeURIComponent(
      `Hi Robin Jain, my name is ${seekerName.trim()}. I just submitted my application on Jobtrix (Ref: ${ref}) for ${seekerRole} in ${seekerCity}. Please share joining details.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919991239374?text=${waMsg}`, "_blank");
    }, 450);
  };

  const handleEmployerSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!empName.trim()) errs.name = "Please enter your name.";
    if (!empCompany.trim()) errs.company = "Please enter your company name.";
    if (!PHONE_REGEX.test(empPhone)) {
      errs.phone = "Enter a valid 10-digit mobile number.";
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const ref = "EMP-" + Date.now().toString().slice(-4);
    leadService.saveEmployerLead({
      contactPerson: empName.trim(),
      companyName: empCompany.trim(),
      phone: empPhone.trim(),
      role: empRole,
      workersCount: empCount,
      city: empCity,
      notes: "Submitted via Quick Apply Modal",
    });

    setReferenceId(ref);
    setIsSubmitted(true);

    const waMsg = encodeURIComponent(
      `Hi Robin Jain, I am ${empName.trim()} from ${empCompany.trim()}. We need ${empCount} ${empRole} staff in ${empCity} (Ref: ${ref}). Let's connect.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919991239374?text=${waMsg}`, "_blank");
    }, 450);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(10, 15, 29, 0.78)",
        backdropFilter: "blur(6px)",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 12px",
        overflowY: "auto",
      }}
      onClick={handleReset}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 22,
          maxWidth: 480,
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 25px 60px -10px rgba(0, 0, 0, 0.35)",
          position: "relative",
          margin: "auto",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. TOP HEADER */}
        <div
          style={{
            background: "#0F172A",
            padding: "22px 22px 18px",
            color: "#FFFFFF",
            position: "relative",
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleReset}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(255, 255, 255, 0.12)",
              border: "none",
              borderRadius: "50%",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#FFFFFF",
            }}
          >
            <X size={16} />
          </button>

          {/* Small Top Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              borderRadius: 999,
              padding: "3px 10px",
              fontSize: 11,
              fontWeight: 700,
              color: "#FBBF24",
              marginBottom: 10,
            }}
          >
            <Sparkles size={12} />
            <span>JOBTRIX APPLICATION DESK</span>
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 3.2vw, 24px)",
              fontWeight: 700,
              margin: "0 0 4px",
              letterSpacing: "-0.015em",
            }}
          >
            {activeTab === "seeker" ? "Apply for Verified Frontline Jobs" : "Hire Verified Workforce"}
          </h2>
          
          <p style={{ color: "#94A3B8", fontSize: 12.5, margin: "0 0 16px" }}>
            {activeTab === "seeker"
              ? "100% Free (₹0 Fee) • Direct joining with top Indian brands"
              : "Pre-screened candidates ready for on-site deployment in 24 hours"}
          </p>

          {/* DUAL-PURPOSE SEGMENTED SWITCHER */}
          <div
            style={{
              display: "flex",
              background: "rgba(255, 255, 255, 0.08)",
              padding: 3,
              borderRadius: 10,
              gap: 4,
            }}
          >
            <button
              type="button"
              onClick={() => { setActiveTab("seeker"); setIsSubmitted(false); setErrors({}); }}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: 8,
                border: "none",
                background: activeTab === "seeker" ? "#F59E0B" : "transparent",
                color: activeTab === "seeker" ? "#0F172A" : "#FFFFFF",
                fontWeight: 700,
                fontSize: 12.5,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              🧑‍🔧 I'm a Job Seeker
            </button>

            <button
              type="button"
              onClick={() => { setActiveTab("employer"); setIsSubmitted(false); setErrors({}); }}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: 8,
                border: "none",
                background: activeTab === "employer" ? "#F59E0B" : "transparent",
                color: activeTab === "employer" ? "#0F172A" : "#FFFFFF",
                fontWeight: 700,
                fontSize: 12.5,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              🏢 I'm an Employer
            </button>
          </div>
        </div>

        {/* 2. BODY / FORM */}
        <div style={{ padding: "22px 20px" }}>
          {isSubmitted ? (
            /* Success screen */
            <div style={{ textAlign: "center", padding: "16px 8px" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "rgba(22, 163, 74, 0.1)",
                  color: "#16A34A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                }}
              >
                <Check size={28} strokeWidth={2.5} />
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#10192E",
                  margin: "0 0 6px",
                }}
              >
                Application Submitted!
              </h3>

              <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.6, margin: "0 0 20px" }}>
                Reference ID: <strong style={{ color: "#10192E" }}>{referenceId}</strong>.<br />
                We have redirected your inquiry directly to Robin Jain on WhatsApp.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a
                  href={
                    activeTab === "seeker"
                      ? `https://wa.me/919991239374?text=${encodeURIComponent("Hi Robin Jain, my application reference is " + referenceId + ". Please share joining details.")}`
                      : `https://wa.me/919991239374?text=${encodeURIComponent("Hi Robin Jain, our hiring inquiry reference is " + referenceId + ". Let's connect.")}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#16A34A",
                    color: "#FFFFFF",
                    padding: "13px 18px",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Open WhatsApp Chat</span>
                </a>

                <button
                  onClick={handleReset}
                  style={{
                    background: "transparent",
                    color: "#64748B",
                    border: "none",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "6px",
                  }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : activeTab === "seeker" ? (
            /* JOB SEEKER APPLICATION FORM */
            <form onSubmit={handleSeekerSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              
              {/* Full Name */}
              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#374151", marginBottom: 5 }}>
                  Full Name *
                </label>
                <div style={{ position: "relative" }}>
                  <User size={16} color="#9CA3AF" style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)" }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singh"
                    value={seekerName}
                    onChange={(e) => setSeekerName(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F9FAFB",
                      border: errors.name ? "1.5px solid #EF4444" : "1px solid #D1D5DB",
                      borderRadius: 8,
                      padding: "10px 12px 10px 34px",
                      fontSize: 13.5,
                      outline: "none",
                    }}
                  />
                </div>
                {errors.name && <div style={{ color: "#EF4444", fontSize: 11.5, marginTop: 3 }}>{errors.name}</div>}
              </div>

              {/* Phone with +91 */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 700, color: "#374151" }}>
                    WhatsApp / Mobile Number *
                  </label>
                  <span style={{ fontSize: 11, color: seekerPhone.length === 10 ? "#16A34A" : "#9CA3AF", fontWeight: 600 }}>
                    {seekerPhone.length}/10 Digits
                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", fontSize: 13, fontWeight: 700, color: "#6B7280" }}>
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="99912 39374"
                    value={seekerPhone}
                    onChange={(e) => handlePhoneFilter(e.target.value, setSeekerPhone)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F9FAFB",
                      border: errors.phone ? "1.5px solid #EF4444" : "1px solid #D1D5DB",
                      borderRadius: 8,
                      padding: "10px 12px 10px 46px",
                      fontSize: 14,
                      fontWeight: 600,
                      outline: "none",
                    }}
                  />
                </div>
                {errors.phone && <div style={{ color: "#EF4444", fontSize: 11.5, marginTop: 3 }}>{errors.phone}</div>}
              </div>

              {/* Role & City Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#374151", marginBottom: 5 }}>
                    Preferred Role *
                  </label>
                  <select
                    value={seekerRole}
                    onChange={(e) => setSeekerRole(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F9FAFB",
                      border: "1px solid #D1D5DB",
                      borderRadius: 8,
                      padding: "10px 10px",
                      fontSize: 13,
                      outline: "none",
                    }}
                  >
                    <option value="Delivery Partner">Delivery Partner (Rider)</option>
                    <option value="Housekeeping / Maid">Housekeeping / Cleaning</option>
                    <option value="Warehouse Staff">Warehouse / Packing</option>
                    <option value="Security Guard">Security Guard</option>
                    <option value="Retail Associate">Retail / Helper</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#374151", marginBottom: 5 }}>
                    City / Area *
                  </label>
                  <select
                    value={seekerCity}
                    onChange={(e) => setSeekerCity(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F9FAFB",
                      border: "1px solid #D1D5DB",
                      borderRadius: 8,
                      padding: "10px 10px",
                      fontSize: 13,
                      outline: "none",
                    }}
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>
              </div>

              {/* Vehicle Options (for Delivery Roles) */}
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#4B5563", marginBottom: 5 }}>
                  Vehicle Status
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  {["Bike / Scooter", "Bicycle / EV", "No Vehicle"].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setSeekerVehicle(v)}
                      style={{
                        flex: 1,
                        padding: "7px 4px",
                        borderRadius: 6,
                        border: seekerVehicle === v ? "1.5px solid #10192E" : "1px solid #E5E7EB",
                        background: seekerVehicle === v ? "#10192E" : "#F9FAFB",
                        color: seekerVehicle === v ? "#FFFFFF" : "#4B5563",
                        fontSize: 11.5,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  background: "#10192E",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 10,
                  padding: "13px",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: 6,
                }}
              >
                <span>Submit Free Application</span>
                <ArrowRight size={15} />
              </button>

              <div style={{ textAlign: "center", fontSize: 11.5, color: "#9CA3AF" }}>
                🔒 100% Free Forever. No registration or placement fee charged.
              </div>
            </form>
          ) : (
            /* EMPLOYER APPLICATION FORM */
            <form onSubmit={handleEmployerSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              
              {/* Contact Person & Company Name */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 5 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={empName}
                    onChange={(e) => setEmpName(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F9FAFB",
                      border: errors.name ? "1.5px solid #EF4444" : "1px solid #D1D5DB",
                      borderRadius: 8,
                      padding: "10px 10px",
                      fontSize: 13,
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 5 }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. QuickLogistics"
                    value={empCompany}
                    onChange={(e) => setEmpCompany(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F9FAFB",
                      border: errors.company ? "1.5px solid #EF4444" : "1px solid #D1D5DB",
                      borderRadius: 8,
                      padding: "10px 10px",
                      fontSize: 13,
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Phone with +91 */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 700, color: "#374151" }}>
                    Mobile Number *
                  </label>
                  <span style={{ fontSize: 11, color: empPhone.length === 10 ? "#16A34A" : "#9CA3AF", fontWeight: 600 }}>
                    {empPhone.length}/10 Digits
                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", fontSize: 13, fontWeight: 700, color: "#6B7280" }}>
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="99912 39374"
                    value={empPhone}
                    onChange={(e) => handlePhoneFilter(e.target.value, setEmpPhone)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F9FAFB",
                      border: errors.phone ? "1.5px solid #EF4444" : "1px solid #D1D5DB",
                      borderRadius: 8,
                      padding: "10px 12px 10px 46px",
                      fontSize: 14,
                      fontWeight: 600,
                      outline: "none",
                    }}
                  />
                </div>
                {errors.phone && <div style={{ color: "#EF4444", fontSize: 11.5, marginTop: 3 }}>{errors.phone}</div>}
              </div>

              {/* Role & Volume Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 10 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#374151", marginBottom: 5 }}>
                    Staff Role *
                  </label>
                  <select
                    value={empRole}
                    onChange={(e) => setEmpRole(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F9FAFB",
                      border: "1px solid #D1D5DB",
                      borderRadius: 8,
                      padding: "10px 10px",
                      fontSize: 13,
                      outline: "none",
                    }}
                  >
                    <option value="Delivery & Courier">Delivery & Courier</option>
                    <option value="Housekeeping & Maid">Housekeeping / Cleaning</option>
                    <option value="Warehouse & Logistics">Warehouse Staff</option>
                    <option value="Facility & Security">Security Guard</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#374151", marginBottom: 5 }}>
                    Headcount *
                  </label>
                  <select
                    value={empCount}
                    onChange={(e) => setEmpCount(e.target.value)}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#F9FAFB",
                      border: "1px solid #D1D5DB",
                      borderRadius: 8,
                      padding: "10px 10px",
                      fontSize: 13,
                      outline: "none",
                    }}
                  >
                    <option value="10-25">10 – 25 Staff</option>
                    <option value="25-50">25 – 50 Staff</option>
                    <option value="50-100">50 – 100 Staff</option>
                    <option value="100+">100+ Enterprise</option>
                  </select>
                </div>
              </div>

              {/* City */}
              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#374151", marginBottom: 5 }}>
                  Deployment City *
                </label>
                <select
                  value={empCity}
                  onChange={(e) => setEmpCity(e.target.value)}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: "#F9FAFB",
                    border: "1px solid #D1D5DB",
                    borderRadius: 8,
                    padding: "10px 10px",
                    fontSize: 13,
                    outline: "none",
                  }}
                >
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Other">Other City</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  background: "#10192E",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 10,
                  padding: "13px",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: 6,
                }}
              >
                <span>Request Staff Deployment</span>
                <ArrowRight size={15} />
              </button>

              <div style={{ textAlign: "center", fontSize: 11.5, color: "#9CA3AF" }}>
                🔒 On-site deployment within 24 hours. Zero upfront recruiter fees.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default UniversalApplicationModal;
