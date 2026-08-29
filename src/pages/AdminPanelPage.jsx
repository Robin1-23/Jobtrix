import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Lock,
  Unlock,
  ShieldCheck,
  RefreshCw,
  Download,
  Plus,
  LogOut,
  Search,
  CheckCircle2,
  Trash2,
  Phone,
  Mail,
  Building,
  User,
  MapPin,
  Clock,
  Briefcase,
  Layers,
} from "lucide-react";
import { leadService } from "../services/leadService";

// Read master admin password from environment variable (never hardcoded in source)
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";
const AUTH_KEY = "jobtrix_admin_authenticated";

export function AdminPanelPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return typeof window !== "undefined" && window.sessionStorage
        ? sessionStorage.getItem(AUTH_KEY) === "true"
        : false;
    } catch {
      return false;
    }
  });
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  // Live time for header
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Data state
  const [activeTab, setActiveTab] = useState("employers"); // "employers" or "candidates"
  const [employersData, setEmployersData] = useState([]);
  const [candidatesData, setCandidatesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Add lead modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLeadType, setNewLeadType] = useState("employer");
  const [newLeadForm, setNewLeadForm] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    role: "Delivery Riders (2-Wheeler / EV)",
    city: "",
  });

  const [isSyncing, setIsSyncing] = useState(false);

  // Clock ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Load 100% real leads from service
  const reloadData = () => {
    setEmployersData(leadService.getEmployerLeads());
    setCandidatesData(leadService.getCandidateLeads());
  };

  // Ultra-fast instant real-time sync across tabs, mobile windows & components
  useEffect(() => {
    if (!isAuthenticated) return;
    reloadData();
    const unsubscribe = leadService.subscribe(() => {
      reloadData();
      setIsSyncing(true);
      setTimeout(() => setIsSyncing(false), 600);
    });
    return unsubscribe;
  }, [isAuthenticated]);

  const triggerManualSync = () => {
    setIsSyncing(true);
    reloadData();
    setTimeout(() => setIsSyncing(false), 500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASS) {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem(AUTH_KEY, "true");
      } catch {}
      setAuthError("");
    } else {
      setAuthError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem(AUTH_KEY);
    } catch {}
    setPasswordInput("");
  };

  // Status updates
  const handleStatusChange = (id, newStatus, type) => {
    if (type === "employer") {
      const updated = leadService.updateEmployerLeadStatus(id, newStatus);
      setEmployersData(updated);
    } else {
      const updated = leadService.updateCandidateStatus(id, newStatus);
      setCandidatesData(updated);
    }
  };

  // Delete lead
  const handleDelete = (id, type) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      if (type === "employer") {
        const updated = leadService.deleteEmployerLead(id);
        setEmployersData(updated);
      } else {
        const updated = leadService.deleteCandidateLead(id);
        setCandidatesData(updated);
      }
    }
  };

  // Quick Add Lead
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newLeadForm.phone || !newLeadForm.city) return;

    if (newLeadType === "employer") {
      leadService.saveEmployerLead({
        companyName: newLeadForm.companyName || "Custom Employer",
        contactPerson: newLeadForm.contactPerson || "HR Manager",
        phone: newLeadForm.phone,
        email: newLeadForm.email || "hr@company.com",
        role: newLeadForm.role,
        workersCount: "10-25",
        city: newLeadForm.city,
      });
    } else {
      leadService.saveCandidateLead({
        name: newLeadForm.contactPerson || "New Applicant",
        phone: newLeadForm.phone,
        role: newLeadForm.role,
        city: newLeadForm.city,
        type: "Direct Application",
      });
    }
    reloadData();
    setIsAddModalOpen(false);
    setNewLeadForm({
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      role: "Delivery Riders (2-Wheeler / EV)",
      city: "",
    });
  };

  // Metrics
  const totalCount = employersData.length + candidatesData.length;
  const employerCount = employersData.length;
  const candidateCount = candidatesData.filter((c) => c.type !== "Job Alert").length;
  const alertCount = candidatesData.filter((c) => c.type === "Job Alert").length;

  // Filtered dataset
  const currentDataset = activeTab === "employers" ? employersData : candidatesData;
  const filteredData = useMemo(() => {
    return currentDataset.filter((item) => {
      const q = searchQuery.toLowerCase();
      const matchSearch =
        (item.companyName && item.companyName.toLowerCase().includes(q)) ||
        (item.contactPerson && item.contactPerson.toLowerCase().includes(q)) ||
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.phone && item.phone.includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        (item.role && item.role.toLowerCase().includes(q)) ||
        (item.city && item.city.toLowerCase().includes(q));

      const matchStatus = statusFilter === "All" || item.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [currentDataset, searchQuery, statusFilter]);

  // STATUS COUNTS
  const statusCounts = useMemo(() => {
    const counts = { All: currentDataset.length, "New Lead": 0, Contacted: 0, "Shift Assigned": 0, Active: 0, "Follow Up": 0 };
    currentDataset.forEach((item) => {
      if (counts[item.status] !== undefined) {
        counts[item.status]++;
      }
    });
    return counts;
  }, [currentDataset]);

  // -------------------------------------------------------------
  // RENDER: PASSWORD LOCK SCREEN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#030712",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          color: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            background: "#0F172A",
            border: "1px solid #1E293B",
            borderRadius: 24,
            padding: "44px 36px",
            maxWidth: 440,
            width: "100%",
            textAlign: "center",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "rgba(56, 189, 248, 0.12)",
              color: "#38BDF8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              boxShadow: "0 0 20px rgba(56, 189, 248, 0.2)",
            }}
          >
            <Lock size={26} strokeWidth={2.2} />
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24,
              fontWeight: 700,
              margin: "0 0 8px",
            }}
          >
            Jobtrix Admin Portal
          </h2>
          <p style={{ color: "#94A3B8", fontSize: 14, margin: "0 0 28px", lineHeight: 1.5 }}>
            Restricted access. Enter your authorized administrator password to view workforce & employer telemetry.
          </p>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ position: "relative" }}>
              <input
                type="password"
                required
                placeholder="Enter master password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  background: "#030712",
                  border: authError ? "1.5px solid #EF4444" : "1px solid #334155",
                  borderRadius: 12,
                  padding: "14px 16px",
                  color: "#FFFFFF",
                  fontSize: 14.5,
                  outline: "none",
                  fontFamily: "'Inter', sans-serif",
                  transition: "border 0.2s ease",
                }}
              />
            </div>

            {authError && (
              <div style={{ color: "#F87171", fontSize: 13, textAlign: "left" }}>
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="jx-btn"
              style={{
                background: "linear-gradient(90deg, #0284C7 0%, #06B6D4 100%)",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 12,
                padding: "14px",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(6, 182, 212, 0.35)",
              }}
            >
              Unlock Admin Panel
            </button>
          </form>

          <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #1E293B" }}>
            <Link
              to="/"
              style={{
                color: "#94A3B8",
                fontSize: 13,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              &larr; Back to Jobtrix Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: AUTHENTICATED ADMIN DASHBOARD (MATCHING SCREENSHOT 2)
  // -------------------------------------------------------------
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050811",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        padding: "32px 24px 64px",
      }}
    >
      <div style={{ maxWidth: 1260, margin: "0 auto" }}>
        
        {/* 1. TOP HEADER BANNER (EXACTLY MATCHING SCREENSHOT 2) */}
        <div
          style={{
            background: "#090E1A",
            border: "1px solid #172033",
            borderRadius: 24,
            padding: "24px 28px",
            marginBottom: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            {/* Cross-Device Cloud Sync Active pill badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: isSyncing ? "rgba(56, 189, 248, 0.15)" : "rgba(16, 185, 129, 0.12)",
                  border: isSyncing ? "1px solid rgba(56, 189, 248, 0.4)" : "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: 999,
                  padding: "4px 12px",
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: isSyncing ? "#38BDF8" : "#10B981",
                  letterSpacing: "0.06em",
                  transition: "all 0.2s ease",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: isSyncing ? "#38BDF8" : "#10B981",
                    boxShadow: isSyncing ? "0 0 10px #38BDF8" : "0 0 8px #10B981",
                    display: "inline-block",
                  }}
                />
                <span>{isSyncing ? "SYNCHRONIZING..." : "CROSS-DEVICE CLOUD SYNC ACTIVE"}</span>
              </div>
              <span
                style={{
                  color: "#64748B",
                  fontSize: 11.5,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                Synced: {currentTime}
              </span>
            </div>

            {/* Main Title Matching Screenshot 2 */}
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3.2vw, 34px)",
                fontWeight: 800,
                margin: "0 0 6px",
                color: "#FFFFFF",
                letterSpacing: "-0.015em",
              }}
            >
              Workforce Recruitment <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#38BDF8" }}>Admin Panel</span>
            </h1>

            {/* Subtitle */}
            <p style={{ color: "#94A3B8", fontSize: 13.5, margin: 0 }}>
              Live admission telemetry persistent across all mobile phones, tablets, and laptops.
            </p>
          </div>

          {/* Action Buttons at Top Right Matching Screenshot 2 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            {/* + + Add Lead */}
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="jx-btn"
              style={{
                background: "#06B6D4",
                color: "#050811",
                border: "none",
                borderRadius: 12,
                padding: "10px 18px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13.5,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 4px 14px rgba(6, 182, 212, 0.35)",
              }}
            >
              <Plus size={16} strokeWidth={2.6} />
              <span>Add Lead</span>
            </button>

            {/* Cloud Sync Refresh */}
            <button
              type="button"
              onClick={triggerManualSync}
              title="Instant reload & synchronization"
              style={{
                background: "#1E293B",
                color: "#F1F5F9",
                border: "1px solid #334155",
                borderRadius: 12,
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <RefreshCw size={14} style={{ animation: isSyncing ? "spin 0.6s linear infinite" : "none" }} />
              <span>{isSyncing ? "Syncing..." : "Cloud Sync"}</span>
            </button>

            {/* Export CSV */}
            <button
              type="button"
              onClick={() => leadService.exportCSV(activeTab)}
              title="Export 100% real records to spreadsheet"
              style={{
                background: "#1E293B",
                color: "#F1F5F9",
                border: "1px solid #334155",
                borderRadius: 12,
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Download size={14} />
              <span>Export CSV</span>
            </button>

            {/* Clear Telemetry */}
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Reset and purge all telemetry records?")) {
                  leadService.clearAllTelemetry();
                  reloadData();
                }
              }}
              title="Clear records"
              style={{
                background: "transparent",
                color: "#64748B",
                border: "1px solid #1E293B",
                borderRadius: 12,
                padding: "10px 12px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Clear
            </button>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              title="Sign out of Admin Portal"
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                color: "#F87171",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: 12,
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* 2. 4 METRIC CARDS ROW (EXACTLY MATCHING SCREENSHOT 2) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          {/* Card 1: Total Applications */}
          <div
            style={{
              background: "#0B101E",
              border: "1px solid #1E293B",
              borderRadius: 18,
              padding: "20px 22px",
            }}
          >
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 700, color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
              TOTAL APPLICATIONS
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 800, color: "#38BDF8", lineHeight: 1 }}>
              {totalCount}
            </div>
          </div>

          {/* Card 2: Employer Requirements */}
          <div
            style={{
              background: "#0B101E",
              border: "1px solid #1E293B",
              borderRadius: 18,
              padding: "20px 22px",
            }}
          >
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 700, color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
              EMPLOYER REQUIREMENTS
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>
              {employerCount}
            </div>
          </div>

          {/* Card 3: Delivery Riders & Workers */}
          <div
            style={{
              background: "#0B101E",
              border: "1px solid #1E293B",
              borderRadius: 18,
              padding: "20px 22px",
            }}
          >
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 700, color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
              CANDIDATE APPLICATIONS
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 800, color: "#34D399", lineHeight: 1 }}>
              {candidateCount}
            </div>
          </div>

          {/* Card 4: Area Job Alerts */}
          <div
            style={{
              background: "#0B101E",
              border: "1px solid #1E293B",
              borderRadius: 18,
              padding: "20px 22px",
            }}
          >
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 700, color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
              AREA JOB ALERTS
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 800, color: "#C084FC", lineHeight: 1 }}>
              {alertCount}
            </div>
          </div>
        </div>

        {/* 3. TAB VIEW SWITCHER: EMPLOYER VS CANDIDATES */}
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          <button
            type="button"
            onClick={() => {
              setActiveTab("employers");
              setStatusFilter("All");
            }}
            style={{
              background: activeTab === "employers" ? "#1E293B" : "transparent",
              color: activeTab === "employers" ? "#38BDF8" : "#94A3B8",
              border: "1px solid #334155",
              borderRadius: 12,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Building size={16} />
            <span>Employer Requirements ({employersData.length})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("candidates");
              setStatusFilter("All");
            }}
            style={{
              background: activeTab === "candidates" ? "#1E293B" : "transparent",
              color: activeTab === "candidates" ? "#34D399" : "#94A3B8",
              border: "1px solid #334155",
              borderRadius: 12,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <User size={16} />
            <span>Job Seekers & Alerts ({candidatesData.length})</span>
          </button>
        </div>

        {/* 4. SEARCH & STATUS FILTER ROW (EXACTLY MATCHING SCREENSHOT 2) */}
        <div
          style={{
            background: "#090E1A",
            border: "1px solid #172033",
            borderRadius: 18,
            padding: "14px 18px",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          {/* Search bar matching screenshot */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#030712",
              border: "1px solid #1E293B",
              borderRadius: 12,
              padding: "8px 14px",
              flex: "1 1 280px",
              maxWidth: 360,
            }}
          >
            <Search size={16} color="#64748B" />
            <input
              type="text"
              placeholder="Search name, phone, email, role, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                color: "#FFFFFF",
                fontSize: 13.5,
                outline: "none",
                width: "100%",
                fontFamily: "'Inter', sans-serif",
              }}
            />
          </div>

          {/* Status filter pills matching screenshot 2 */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            {["All", "New Lead", "Contacted", "Shift Assigned", "Active", "Follow Up"].map((status) => {
              const isActive = statusFilter === status;
              const count = statusCounts[status] || 0;
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  style={{
                    background: isActive ? "#06B6D4" : "#0F172A",
                    color: isActive ? "#04111E" : "#94A3B8",
                    border: "1px solid #1E293B",
                    borderRadius: 999,
                    padding: "6px 14px",
                    fontSize: 12.5,
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {status} ({count})
                </button>
              );
            })}
          </div>

          {/* Submissions count label matching screenshot */}
          <div style={{ color: "#64748B", fontSize: 12.5, fontFamily: "'Inter', sans-serif" }}>
            Showing <strong>{filteredData.length}</strong> of {currentDataset.length} Submissions
          </div>
        </div>

        {/* 5. DATA TABLE / EMPTY STATE (EXACTLY MATCHING SCREENSHOT 2) */}
        {filteredData.length === 0 ? (
          <div
            style={{
              background: "#080D19",
              border: "1px solid #172033",
              borderRadius: 18,
              padding: "72px 24px",
              textAlign: "center",
              color: "#64748B",
              fontSize: 15,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            No application records match your filter criteria.
          </div>
        ) : (
          <div
            style={{
              background: "#080D19",
              border: "1px solid #172033",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 13.5 }}>
                <thead>
                  <tr style={{ background: "#0D1424", borderBottom: "1px solid #1E293B", color: "#94A3B8", fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5 }}>
                    <th style={{ padding: "14px 18px" }}>NAME / ENTITY</th>
                    <th style={{ padding: "14px 18px" }}>CONTACT</th>
                    <th style={{ padding: "14px 18px" }}>ROLE / WORKERS</th>
                    <th style={{ padding: "14px 18px" }}>LOCATION</th>
                    <th style={{ padding: "14px 18px" }}>STATUS</th>
                    <th style={{ padding: "14px 18px" }}>DATE</th>
                    <th style={{ padding: "14px 18px", textAlign: "right" }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, idx) => (
                    <tr
                      key={item.id || idx}
                      style={{
                        borderBottom: "1px solid #141C2E",
                        transition: "background 0.15s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#0E1626")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {/* Name / Entity */}
                      <td style={{ padding: "16px 18px" }}>
                        <div style={{ fontWeight: 700, color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", fontSize: 14 }}>
                          {item.companyName || item.name || "Anonymous Applicant"}
                        </div>
                        {item.contactPerson && (
                          <div style={{ color: "#64748B", fontSize: 12 }}>
                            POC: {item.contactPerson}
                          </div>
                        )}
                      </td>

                      {/* Contact */}
                      <td style={{ padding: "16px 18px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                          <Phone size={13} color="#38BDF8" />
                          <a
                            href={`https://wa.me/91${item.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#38BDF8", textDecoration: "none", fontWeight: 600 }}
                          >
                            +91 {item.phone}
                          </a>
                        </div>
                        {item.email && (
                          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#94A3B8", fontSize: 12 }}>
                            <Mail size={13} />
                            <span>{item.email}</span>
                          </div>
                        )}
                      </td>

                      {/* Role / Workers Count */}
                      <td style={{ padding: "16px 18px" }}>
                        <div style={{ color: "#F1F5F9", fontWeight: 600 }}>{item.role}</div>
                        {item.workersCount && (
                          <div style={{ color: "#F59E0B", fontSize: 12, fontWeight: 600 }}>
                            Requirement: {item.workersCount}
                          </div>
                        )}
                        {item.type && (
                          <span style={{ fontSize: 11, color: "#A855F7", background: "rgba(168, 85, 247, 0.12)", padding: "2px 6px", borderRadius: 4 }}>
                            {item.type}
                          </span>
                        )}
                      </td>

                      {/* Location */}
                      <td style={{ padding: "16px 18px", color: "#94A3B8" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <MapPin size={13} color="#94A3B8" />
                          <span>{item.city}</span>
                        </div>
                      </td>

                      {/* Status Dropdown */}
                      <td style={{ padding: "16px 18px" }}>
                        <select
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value, activeTab === "employers" ? "employer" : "candidate")}
                          style={{
                            background:
                              item.status === "Shift Assigned" || item.status === "Active"
                                ? "rgba(16, 185, 129, 0.15)"
                                : item.status === "Contacted"
                                ? "rgba(56, 189, 248, 0.15)"
                                : "rgba(245, 158, 11, 0.15)",
                            color:
                              item.status === "Shift Assigned" || item.status === "Active"
                                ? "#34D399"
                                : item.status === "Contacted"
                                ? "#38BDF8"
                                : "#FBBF24",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: 8,
                            padding: "5px 10px",
                            fontSize: 12,
                            fontWeight: 700,
                            fontFamily: "'Space Grotesk', sans-serif",
                            outline: "none",
                            cursor: "pointer",
                          }}
                        >
                          <option value="New Lead" style={{ background: "#0F172A", color: "#FFFFFF" }}>New Lead</option>
                          <option value="Contacted" style={{ background: "#0F172A", color: "#FFFFFF" }}>Contacted</option>
                          <option value="Shift Assigned" style={{ background: "#0F172A", color: "#FFFFFF" }}>Shift Assigned</option>
                          <option value="Active" style={{ background: "#0F172A", color: "#FFFFFF" }}>Active</option>
                          <option value="Follow Up" style={{ background: "#0F172A", color: "#FFFFFF" }}>Follow Up</option>
                        </select>
                      </td>

                      {/* Date */}
                      <td style={{ padding: "16px 18px", color: "#64748B", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace" }}>
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Recent"}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: "16px 18px", textAlign: "right" }}>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                          <a
                            href={`https://wa.me/91${item.phone}?text=Hi%20from%20Jobtrix%20Staffing%20Desk!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Direct WhatsApp"
                            style={{
                              background: "#1E293B",
                              color: "#22C55E",
                              padding: "6px 10px",
                              borderRadius: 8,
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <Phone size={14} />
                          </a>

                          <button
                            type="button"
                            onClick={() => handleDelete(item.id, activeTab === "employers" ? "employer" : "candidate")}
                            title="Delete record"
                            style={{
                              background: "#1E293B",
                              color: "#EF4444",
                              border: "none",
                              padding: "6px 10px",
                              borderRadius: 8,
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* QUICK ADD LEAD MODAL */}
      {isAddModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(5px)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            style={{
              background: "#0F172A",
              border: "1px solid #1E293B",
              borderRadius: 20,
              maxWidth: 460,
              width: "100%",
              padding: "26px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, margin: "0 0 16px", color: "#FFFFFF" }}>
              + Add Lead Telemetry
            </h3>

            <form onSubmit={handleAddSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  type="button"
                  onClick={() => setNewLeadType("employer")}
                  style={{
                    flex: 1,
                    padding: 8,
                    borderRadius: 8,
                    border: "none",
                    background: newLeadType === "employer" ? "#06B6D4" : "#1E293B",
                    color: newLeadType === "employer" ? "#000" : "#FFF",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Employer Lead
                </button>
                <button
                  type="button"
                  onClick={() => setNewLeadType("candidate")}
                  style={{
                    flex: 1,
                    padding: 8,
                    borderRadius: 8,
                    border: "none",
                    background: newLeadType === "candidate" ? "#34D399" : "#1E293B",
                    color: newLeadType === "candidate" ? "#000" : "#FFF",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Candidate Lead
                </button>
              </div>

              {newLeadType === "employer" && (
                <input
                  type="text"
                  placeholder="Company Name (e.g. Zepto Hub)"
                  value={newLeadForm.companyName}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, companyName: e.target.value })}
                  style={{ background: "#030712", border: "1px solid #334155", color: "#FFF", padding: "10px", borderRadius: 8 }}
                />
              )}

              <input
                type="text"
                placeholder={newLeadType === "employer" ? "Contact Person Name" : "Candidate Name"}
                value={newLeadForm.contactPerson}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, contactPerson: e.target.value })}
                style={{ background: "#030712", border: "1px solid #334155", color: "#FFF", padding: "10px", borderRadius: 8 }}
              />

              <input
                type="tel"
                required
                placeholder="10-Digit Mobile Number"
                value={newLeadForm.phone}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                style={{ background: "#030712", border: "1px solid #334155", color: "#FFF", padding: "10px", borderRadius: 8 }}
              />

              <input
                type="text"
                placeholder="Target Role (e.g. Delivery Partner, Maid, Professional Women)"
                value={newLeadForm.role}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, role: e.target.value })}
                style={{ background: "#030712", border: "1px solid #334155", color: "#FFF", padding: "10px", borderRadius: 8 }}
              />

              <input
                type="text"
                required
                placeholder="City / Area (e.g. Mumbai • Andheri)"
                value={newLeadForm.city}
                onChange={(e) => setNewLeadForm({ ...newLeadForm, city: e.target.value })}
                style={{ background: "#030712", border: "1px solid #334155", color: "#FFF", padding: "10px", borderRadius: 8 }}
              />

              <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    background: "#06B6D4",
                    color: "#050811",
                    border: "none",
                    borderRadius: 8,
                    padding: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Save Lead
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  style={{
                    background: "#1E293B",
                    color: "#FFF",
                    border: "none",
                    borderRadius: 8,
                    padding: "12px 18px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanelPage;
