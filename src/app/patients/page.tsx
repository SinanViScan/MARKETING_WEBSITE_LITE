"use client";

import { Suspense, lazy, useMemo } from "react";
import PatientHeroSection from "@/components/patients/HeroSection";
import HowItWorksDoc, { Step } from "@/components/doctors/HowItWorksDoc";
import { BenefitCard } from "@/components/doctors/BenefitsSection";

// Lazy load heavy components
const BenefitsSection = lazy(() => import("@/components/doctors/BenefitsSection"));
const EcosystemSection = lazy(() => import("@/components/patients/EcosystemSection"));
const BookScan = lazy(() => import("@/components/patients/BookScan"));
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));

// Skeleton loader component
const SectionSkeleton = () => (
  <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />
);

// Static data - moved outside component for better performance
const cards: BenefitCard[] = [
  {
    title: "Verified Diagnostic Centers",
    description:
      "We partner with verified, high-quality diagnostic centers to ensure reliable results for you and your patients.",
    icon: "/service-detail/badge.svg",
    cardBackgroundClassName: "bg-[#F9FAFB] border-0",
  },
  {
    title: "Expert Dental Radiologists",
    description:
      "Our expert dental radiologists provide clear, detailed reports for your CBCT and other scans to ensure confident diagnoses.",
    icon: "/patients/expert-badge.svg",
    cardBackgroundClassName: "bg-[#F9FAFB] border-0",
  },
  {
    title: "AI-Powered Analysis",
    description:
      "Using cutting-edge AI, we analyze vast datasets to deliver precise, actionable insights and forecasts.",
    icon: "/patients/ai.svg",
    cardBackgroundClassName: "bg-[#F9FAFB] border-0",
  },
  {
    title: "Quick Results",
    description:
      "Get your diagnostic reports quickly with our fast turnaround times and digital delivery.",
    icon: "/patients/timer.svg",
    cardBackgroundClassName: "bg-[#F9FAFB] border-0",
  },
  {
    title: "Affordable Pricing",
    description:
      "High-quality diagnostic imaging at transparent, affordable prices without hidden costs.",
    icon: "/service-detail/currency.svg",
    cardBackgroundClassName: "bg-[#F9FAFB] border-0",
  },
  {
    title: "Convenient Locations",
    description:
      "Find Vi-Scan centers near you across India, making quality diagnostics accessible in your neighborhood.",
    icon: "/patients/location.svg",
    cardBackgroundClassName: "bg-[#F9FAFB] border-0",
  },
];

const steps: Step[] = [
  {
    id: 1,
    title: "Instant Booking from Your Clinic",
    description:
      "Instantly book imaging appointments from your clinic—no calls, no forms. Fast, simple, and seamless for you and your patients.",
  },
  {
    id: 2,
    title: "SMS/WhatsApp Updates on Reports",
    description:
      "Get real‑time notifications when your scan is completed and your radiology report is ready—delivered via SMS/WhatsApp with a secure link.",
  },
  {
    id: 3,
    title: "Access All Reports Online Anytime",
    description:
      "View and download all your scans and reports anytime from your secure Vi‑Scan portal—perfect for sharing with your dentist or for future reference.",
  },
];

export default function PatientsPage() {
  // Memoize JSX elements that are reused
  const howItWorksHeader = useMemo(
    () => (
      <h2 className="section-header max-md:text-center">
        <span
          className="text-transparent font-medium"
          style={{
            background:
              "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Patient Experience
        </span>{" "}
        Made Easy.
      </h2>
    ),
    []
  );

  const benefitsTitle = useMemo(() => <>Why Patients Choose Vi-Scan</>, []);

  return (
    <main className="mb-10">
      <PatientHeroSection />
      <HowItWorksDoc
        pageNumber="02"
        imageSrc="/patients/how-it-works-img.webp"
        header={howItWorksHeader}
        subheader="At our Dental Diagnostic Imaging Center, we put your comfort and convenience first. From easy appointment scheduling to quick, non-invasive scans, every step is designed to make your experience smooth and stress-free."
        steps={steps}
      />
      <Suspense fallback={<SectionSkeleton />}>
        <EcosystemSection />
        <ServicesSection />
        {/* <CentersSection /> */}
        <BookScan pageNumber="04" pillLabel="Book a Scan" />
        {/* <CTABookScan /> */}
        <BenefitsSection
          pageNumber="01"
          pillLabel="Why Choose Us?"
          backgroundClassName="bg-transparent"
          title={benefitsTitle}
          subtitle="Experience the difference of patient-centered care with world-class diagnostic technology."
          cards={cards}
        />
        {/* <TestimonialsSection /> */}
      </Suspense>
    </main>
  );
}
