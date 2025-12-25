"use client";

import { Suspense, lazy, memo } from "react";
import HeroSection from "./HeroSection";

// Lazy load below-the-fold sections for better code splitting and performance
const CentersSection = lazy(() => import("../home/CentersSection"));
const MapSection = lazy(() => import("../contact/MapSection"));
const FAQSection = lazy(() => import("./FAQSection"));

// Loading fallback component - memoized to prevent unnecessary re-renders
const SectionSkeleton = memo(() => (
  <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
));
SectionSkeleton.displayName = "SectionSkeleton";

const BookScanPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Load hero section immediately for better initial render */}
      <HeroSection />
      
      {/* Lazy load remaining sections */}
      <Suspense fallback={<SectionSkeleton />}>
        <CentersSection pageNumber="02" />
        <MapSection />
        <FAQSection />
      </Suspense>
    </div>
  );
};

export default memo(BookScanPage); 