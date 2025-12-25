"use client";

import Hero from "./serviceSections/Hero";
import WhyUs, { Feature } from "./serviceSections/WhyUs";
import HowItWorks, { Step } from "./serviceSections/HowItWorks";
// Removed unused UnderstandingReports and ReportTab imports
import CTABookScan from "./serviceSections/CTABookScan";
import PackagesSection, {
  PackageItem,
} from "./serviceSections/PackagesSection";
import FAQSection from "../bookscan/FAQSection";
import {
  IconCertifiedBadge,
  IconDesktopSupport,
  IconPanelCard,
  IconScan,
  IconShieldRibbon,
  PersonWithTeeth,
} from "./icons/FeatureIcons";

export const features: Feature[] = [
  {
    title: "Easy ,Fast ,Secure",
    svgNode: <IconShieldRibbon />,
    // bg: "bg-[#F8EFF8] h-[91%] flex self-end",
    bg: "bg-[#F8EFF8]",
  },
  {
    title: "Rapid Report in 3 Hrs",
    svgNode: <IconPanelCard />,
    // bg: "bg-[#F3D5F9] h-[91%] flex self-end",
    bg: "bg-[#F3D5F9]",
  },
  {
    title: "Certified Labs",
    svgNode: <IconCertifiedBadge />,
    // bg: "bg-[#FDF4FF] h-[80%] w-[80%] flex self-start",
    bg: "bg-[#FDF4FF]",
  },
  {
    title: "AI-Powered",
    svgNode: <IconDesktopSupport />,
    bg: "bg-[#EFEAFF]",
  },
  {
    title: "Clinical Clarity",
    svgNode: <IconScan />,
    bg: "bg-[#F8EFF8]",
  },
  {
    title: "Professional Medics",
    svgNode: <PersonWithTeeth />,
    bg: "bg-[#EFEAFF]",
  },
];

const steps: Step[] = [
  {
    id: 1,
    title: "Convenient Booking & Collection",
    description:
      "Easily request a dental-specific blood test package and schedule an appointment through the Vi-Scan platform.",
  },
  {
    id: 2,
    title: "Expert Laboratory Analysis",
    description:
      "Samples are processed at certified partner labs using dental-focused panels and strict QA protocols for reliable, fast turnaround.",
  },
  {
    id: 3,
    title: "Secure, Actionable Results",
    description:
      "Receive encrypted results with clinician-friendly notes and flags, accessible via Vi-Scan and email for immediate treatment planning.",
  },
];

export default function PathologyPage() {
  return (
    <div>
      <Hero
        title="India's First Dental-Specific Blood Collection Packages"
        subtitle="Elevating Patient Care and Practice Efficiency with Tailored Diagnostic Insights"
        imageSrc="/service-detail/pathology-hero.webp"
        imageAlt="Pathology Hero Image"
      />
      <WhyUs
        pageNumber="02"
        sectionHeader={<h2 className="section-header">
          Why Choose Vi-Scan for
          <br className="hidden sm:block" />
          Dental
          <span
            className="text-transparent ml-2 mr-2"
            style={{
              background:
                "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Pathology
          </span>
          Services?
        </h2> }
        sectionSubtext="As India's first, we use our expert knowledge and advanced technology to give clear, detailed answers for better dental care."
        features={features}
        imageSrc="/service-detail/blood-test.webp"
        header="Precision Blood Collection for Dental Diagnostics"
        subtitle="Streamline your patient care with blood collection services tailored specifically for dental procedures."
      />
      {/* <PackagesSection
        pageNumber="02"
        header="Vi- Scan Dental Specific Exclusive Packages"
        subheader="Our multi-directional data flow enables a streamlined and efficient digital journey for every dental diagnostic need"
        packages={
          [
            {
              id: 1,
              title: "Safe Extraction Panel",
              price: "₹499",
              originalPrice: "₹699",
              imageSrc: "/service-detail/blood-collection.webp",
              parametersText: "91",
              reportTATText: "10",
              keyTestsText:
                "CBC with ESR, PT/INR (Coagulation profile) +5 More",
            },
            {
              id: 2,
              title: "Safe Extraction Panel",
              price: "₹499",
              originalPrice: "₹699",
              imageSrc: "/service-detail/blood-collection.webp",
              parametersText: "91",
              reportTATText: "10",
              keyTestsText:
                "CBC with ESR, PT/INR (Coagulation profile) +5 More",
            },
            {
              id: 3,
              title: "Safe Extraction Panel",
              price: "₹499",
              originalPrice: "₹699",
              imageSrc: "/service-detail/blood-collection.webp",
              parametersText: "91",
              reportTATText: "10",
              keyTestsText:
                "CBC with ESR, PT/INR (Coagulation profile) +5 More",
            },
            {
              id: 4,
              title: "Safe Extraction Panel",
              price: "₹499",
              originalPrice: "₹699",
              imageSrc: "/service-detail/blood-collection.webp",
              parametersText: "91",
              reportTATText: "10",
              keyTestsText:
                "CBC with ESR, PT/INR (Coagulation profile) +5 More",
            },
            {
              id: 5,
              title: "Safe Extraction Panel",
              price: "₹499",
              originalPrice: "₹699",
              imageSrc: "/service-detail/blood-collection.webp",
              parametersText: "91",
              reportTATText: "10",
              keyTestsText:
                "CBC with ESR, PT/INR (Coagulation profile) +5 More",
            },
            {
              id: 6,
              title: "Safe Extraction Panel",
              price: "₹499",
              originalPrice: "₹699",
              imageSrc: "/service-detail/blood-collection.webp",
              parametersText: "91",
              reportTATText: "10",
              keyTestsText:
                "CBC with ESR, PT/INR (Coagulation profile) +5 More",
            },
          ] as PackageItem[]
        }
      /> */}
      <HowItWorks
        pageNumber="04"
        imageSrc="/service-detail/pathology-how-work.webp"
        header="A Seamless Ecosystem for Precision Diagnostics"
        subheader="Our multi-directional data flow enables a streamlined and efficient digital journey for every dental diagnostic need"
        steps={steps}
      />
      {/* <CTABookScan />
      <FAQSection /> */}
    </div>
  );
}
