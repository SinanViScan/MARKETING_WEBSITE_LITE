"use client";

import { Suspense, lazy, useMemo } from "react";
import DoctorsHero from "@/components/doctors/DoctorsHero";
import HowItWorksDoc, { Step } from "@/components/doctors/HowItWorksDoc";
import { BenefitCard } from "@/components/doctors/BenefitsSection";

// Lazy load heavy components
const OurService = lazy(() => import("@/components/doctors/OurService"));
const CentersSection = lazy(() => import("@/components/home/CentersSection"));
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const ServicesShowcase = lazy(() => import("@/components/doctors/ServicesShowcase"));
const RegisterSection = lazy(() => import("@/components/doctors/RegisterSection"));
const BenefitsSection = lazy(() => import("@/components/doctors/BenefitsSection"));
const FAQSection = lazy(() => import("@/components/bookscan/FAQSection"));
const CTABookScan = lazy(() => import("@/components/services/serviceSections/CTABookScan"));

// Skeleton loader component
const SectionSkeleton = () => (
  <div className="w-full h-64  animate-pulse rounded-lg" />
);

// Static data - moved outside component for better performance
const steps: Step[] = [
  {
    id: 1,
    title: "Register on Our Platform",
    description:
      "Easily sign up to join our network of empowered dental professionals.",
  },
  {
    id: 2,
    title: "Explore Our Services",
    description:
      "Browse our comprehensive diagnostic offerings—including CBCT, OPG, L‑Ceph, pathology, and tele‑reporting—to find the right tools for your clinical needs.",
  },
  {
    id: 3,
    title: "Start Referring Patients",
    description:
      "Refer patients seamlessly and receive fast, accurate reports and images through Vi‑Scan's secure platform—optimized for efficient clinical workflows.",
  },
];

const benefitCards: BenefitCard[] = [
  {
    title: "Centralized Access to Advanced Imaging",
    description:
      "Easily view, share, and analyze CBCT scans and patient records from a single, secure platform—no more juggling between systems.",
    icon: "/doctors/testing-icon-1.svg",
  },
  {
    title: "Improve Case Collaboration",
    description: "Collaborate with specialists, labs, and referrers seamlessly—share cases, get opinions, and streamline multi-specialty workflows.",
    icon: "/doctors/deal-icon.svg",
  },
  {
    title: "Boost Clinic Efficiency",
    description: "Automated scheduling, image storage, and reporting reduce administrative load so your team can focus more on patients.",
    icon: "/doctors/boost.svg",
  },
  {
    title: "Faster, Smarter Diagnostics",
    description:
      "AI-assisted tools and high-resolution 3D imaging help you diagnose with greater confidence and speed, even in complex cases.",
    icon: "/service-detail/shield.svg",
  },
  {
    title: "Enhance Patient Trust",
    description:
      "Offer visually detailed, easy-to-understand diagnostics that improve patient communication and treatment acceptance.",
    icon: "/service-detail/badge.svg",
  },
  {
    title: "Access to Specialized Panels",
    description: "Utilize India's first dental-specific blood collection packages for comprehensive pre-operative assessment & holistic care.",
    icon: "/service-detail/browser.svg",
  },
];

export default function DoctorsPage() {
  // Memoize JSX elements that are reused
  const howItWorksHeader = useMemo(
    () => (
      <h2 className="section-header max-md:text-center">
        Your Pathway to
        <br />
        <span
          className="text-transparent font-medium"
          style={{
            background:
              "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Diagnotstic
        </span>{" "}
        Excellence
      </h2>
    ),
    []
  );

  const benefitsTitle = useMemo(
    () => (
      <>
        Key Benefits for
        <span
          className="text-transparent font-medium"
          style={{
            background:
              "linear-gradient(240.01deg, #EBB5F3 -28.89%, #FEF2F2 6.75%, #FEE2E1 14.65%, #C59BC7 55.55%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          &nbsp;Dentists
        </span>
      </>
    ),
    []
  );
  return (
    <main className="min-h-screen">
      <DoctorsHero />
      {/* <HowItWorksDoc
        pageNumber="02"
        imageSrc="/doctors/how-it-work-doc.webp"
        header={howItWorksHeader}
        buttonText="View All"
        subheader="Here are the 3 steps for how dentists can partner with Vi-Scan :"
        steps={steps}
      /> */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
        <OurService
          pageNumber="02"
          subtitle="Take control of your diagnostic capabilities and elevate patient care to a new level. With Vi-Scan, you can now own a state-of-the-art CBCT machine, a powerful tool that brings unparalleled precision and convenience directly to your clinic. This seamless integration allows you to perform scans on-site, reduce patient travel time, and accelerate treatment planning, all while providing the highest standard of care."
          imageSrc="/doctors/equipments.webp"
        />
        {/* <CentersSection /> */}
        {/* <ServicesShowcase pageNumber="06" /> */}
        <RegisterSection pageNumber="01" />
        {/* <CTABookScan
          title="Be a partner for a healthier future"
          buttonText="Contact Us Now"
          imageSrc="/service-detail/cta.webp"
          imageAlt="Dental scan"
        /> */}
        <BenefitsSection
          pageNumber="01"
          pillLabel="Why Choose Us?"
          backgroundClassName="bg-transparent"
          title={benefitsTitle}
          subtitle="In today's time, delivering precise diagnoses & efficient care is paramount. Vi‑Scan provides a comprehensive digital platform specifically designed to empower dentists like you."
          cards={benefitCards}
        />
        {/* <FAQSection /> */}
      </Suspense>
    </main>
  );
}
