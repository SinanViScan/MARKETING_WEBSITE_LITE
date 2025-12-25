"use client";

import Hero from "./serviceSections/Hero";
import WhyUs, { Feature } from "./serviceSections/WhyUs";
import HowItWorks, { Step } from "./serviceSections/HowItWorks";
import CTABookScan from "./serviceSections/CTABookScan";
import KeyFeatures, { KeyFeature } from "./serviceSections/KeyFeatures";
import FAQSection from "../bookscan/FAQSection";
import {
  AnalyzeIcon,
  IconCertifiedBadge,
  IconDesktopSupport,
  IconScan,
  IconShieldRibbon,
  PersonWithTeeth,
} from "./icons/FeatureIcons";

export const features: Feature[] = [
  {
    title: "Secure Digital Reports",
    svgNode: <IconShieldRibbon />,
    // bg: "bg-[#F8EFF8] h-[91%] flex self-end",
    bg: "bg-[#F8EFF8]",
  },
  {
    title: "CBCT-Based Lesion Analysis",
    svgNode: <AnalyzeIcon />,
    // bg: "bg-[#F3D5F9] h-[91%] flex self-end",
    bg: "bg-[#F3D5F9]",
  },
  {
    title: "Support",
    svgNode: <IconCertifiedBadge />,
    // bg: "bg-[#FDF4FF] h-[80%] w-[80%] flex self-start",
    bg: "bg-[#FDF4FF]",
  },
  {
    title: "Correlation",
    svgNode: <IconDesktopSupport />,
    bg: "bg-[#EFEAFF]",
  },
  {
    title: "Early Detection",
    svgNode: <IconScan />,
    bg: "bg-[#F8EFF8]",
  },
  {
    title: "Expert Review",
    svgNode: <PersonWithTeeth />,
    bg: "bg-[#EFEAFF]",
  },
];

const steps: Step[] = [
  {
    id: 1,
    title: "Clinical Suspicion or Referral",
    description:
      "Patient is referred based on visual signs, non-healing ulcers, or high-risk factors.",
  },
  {
    id: 2,
    title: "CBCT Scan Performed",
    description:
      "A CBCT scan is performed to capture detailed 3D imaging for lesion assessment.",
  },
  {
    id: 3,
    title: "Radiologist Analysis",
    description:
      "Expert radiologists analyze imaging to detect and characterize soft tissue changes.",
  },
  {
    id: 4,
    title: "Digital Report & Recommendation",
    description:
      "A structured report with findings and recommended next steps is generated.",
  },
  {
    id: 5,
    title: "Support for Further Diagnostics",
    description:
      "Guidance for follow-up diagnostics and correlation with clinical findings.",
  },
];

const keyFeatures: KeyFeature[] = [
  {
    title: "Advanced Imaging Technologizing",
    description:
      "We use intraoral cameras and CBCT when necessary to detect changes invisible to the naked eye.",
    icon: "/service-detail/x-ray.svg",
  },
  {
    title: "Specialist Review & Reporting",
    description: "Our scans are evaluated by experienced dental radiologists.",
    icon: "/service-detail/stethoscope.svg",
  },
  {
    title: "Quick & Non-Invasive Procedure",
    description: "Our screening takes just minutes—no pain, no downtime.",
    icon: "/service-detail/stopwatch.svg",
  },
  {
    title: "AI-Backed Detection",
    description:
      "We combine human expertise with AI tools for precision and speed.",
    icon: "/service-detail/microchip.svg",
  },
  {
    title: "Prevention-Focused",
    description:
      "Spot early lesions, tissue changes, or potentially malignant disorders before they worsen.",
    icon: "/service-detail/shield.svg",
  },
  {
    title: "Easy Access & Affordable",
    description: "Book appointments online or walk-in—no referral needed.",
    icon: "/service-detail/currency.svg",
  },
];

export default function STSPage() {
  return (
    <div>
      <Hero
        title="Soft Tissue Screening: Early Detection for Oral Health"
        subtitle="Enhance patient safety and outcomes with advanced screening for oral mucosal lesions and pathologies."
        imageSrc="/service-detail/sts-hero.webp"
        imageAlt="STS Hero Image"
      />
      <WhyUs
        pageNumber="02"
        features={features}
        sectionHeader={<h2 className="section-header">
          Why Choose Vi-Scan for
          <br className="hidden sm:block" />
          Dental
          <span
            className="text-transparent ml-2"
            style={{
              background:
                "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Soft Tissue Screening
          </span>
          ?
        </h2> }
        sectionSubtext="We combine advanced tools with expert insight to screen smarter."
        imageSrc="/service-detail/sts-why-us.webp"
        header="What is Soft Tissue Screening?"
        subtitle="Oral cancer screening is the process of checking the oral cavity
              for signs of malignancy or pre-malignancy. Early-stage oral cancer
              often has no symptoms, which makes routine screening vital,
              especially for high-risk patients (e.g., tobacco users, alcohol
              consumption, chronic ulcers)."
      />
      <HowItWorks
        pageNumber="04"
        imageSrc="/service-detail/how-it-works.webp"
        header="How Our Oral Cancer Detection Works"
        subheader="Combining Imaging and Expertise for Reliable Diagnosis"
        steps={steps}
      />
      {/* <CTABookScan /> */}
      <KeyFeatures pageNumber="05" features={keyFeatures} />
      {/* <FAQSection /> */}
    </div>
  );
}
