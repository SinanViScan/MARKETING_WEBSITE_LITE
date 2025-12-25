"use client";

import { Suspense, lazy } from "react";
import JourneySection from "./JourneySection";

// Lazy load below-the-fold sections for better code splitting and performance
// Each component has its own Suspense boundary to prevent blocking
const MissionSection = lazy(() => import("./MissionSection"));
const TimelineSection = lazy(() => import("./TimelineSection"));
const TeamSection = lazy(() => import("./TeamSection"));
const ServicesSection = lazy(() => import("../home/ServicesSection"));
// Use about-specific ServicesSection instead of home version to reduce bundle size
const HeroSection = lazy(() => import("./HeroSection"));

// Lightweight loading fallback component
const SectionSkeleton = () => (
  <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
);

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Load journey section immediately (contains LCP image) */}
      <JourneySection />
      
      {/* Split Suspense boundaries - each component loads independently
          This prevents one slow component from blocking others */}
      {/* <Suspense fallback={null}>
        <MissionSection />
      </Suspense> */}
      
      <Suspense fallback={null}>
        <TimelineSection />
      </Suspense>
      
      {/* <Suspense fallback={null}>
        <TeamSection />
      </Suspense> */}
      
      <Suspense fallback={null}>
        <ServicesSection />
      </Suspense>
      
      {/* Hero section at the bottom - lowest priority */}
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
    </div>
  );
};

export default AboutPage; 