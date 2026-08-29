import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { RosterTicker } from "../components/ticker/RosterTicker";
import { ValuePropsSection } from "../components/sections/ValuePropsSection";
import { TwoPathsSection } from "../components/sections/TwoPathsSection";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { SectorsStudioSection } from "../components/sections/SectorsStudioSection";
import { ClientLogosSection } from "../components/sections/ClientLogosSection";

export function HomePage() {
  return (
    <div>
      {/* Hero Section for Employers */}
      <HeroSection />

      <div style={{ height: 56 }} />

      {/* Live Hiring Telemetry */}
      <RosterTicker />

      {/* Value Propositions */}
      <ValuePropsSection />

      {/* Two Paths (Recruitment & Staffing) */}
      <TwoPathsSection />

      {/* How The Bot Works */}
      <HowItWorksSection />

      {/* Sectors We Serve Studio */}
      <SectorsStudioSection />

      {/* Social Proof: Gig Economy Leaders */}
      <ClientLogosSection />
    </div>
  );
}

export default HomePage;
