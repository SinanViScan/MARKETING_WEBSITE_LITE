"use client";

import Hero from "./serviceSections/Hero";
import WhyUs, { Feature } from "./serviceSections/WhyUs";
import HowItWorks, { Step } from "./serviceSections/HowItWorks";
// Removed unused UnderstandingReports and ReportTab imports
import CTABookScan from "./serviceSections/CTABookScan";
import KeyFeatures, { KeyFeature } from "./serviceSections/KeyFeatures";
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
    title: "Clinic Friendly Workflow",
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
    title: "High Resolution",
    svgNode: <IconCertifiedBadge />,
    // bg: "bg-[#FDF4FF] h-[80%] w-[80%] flex self-start",
    bg: "bg-[#FDF4FF]",
  },
  {
    title: "Low Radiation",
    svgNode: <IconDesktopSupport />,
    bg: "bg-[#EFEAFF]",
  },
  {
    title: "Painless Scan",
    svgNode: <IconScan />,
    bg: "bg-[#F8EFF8]",
  },
  {
    title: "Multiple Scan Modes",
    svgNode: <PersonWithTeeth />,
    bg: "bg-[#EFEAFF]",
  },
];

const keyFeatures: KeyFeature[] = [
  {
    title: "True 3D Visualization",
    description:
      "See intricate anatomical structures, bone density, and pathology with unparalleled clarity.",
    icon: "/service-detail/x-ray.svg",
  },
  {
    title: "Precision Treatment Planning",
    description:
      "Supports accurate implant placement, impacted tooth removal, and complex endodontic procedures.",
    icon: "/service-detail/target.svg",
  },
  {
    title: "Reduced Radiation Exposure",
    description:
      "Advanced CBCT protocols deliver lower radiation doses than traditional CT scans.",
    icon: "/service-detail/radiation.svg",
  },
  {
    title: "AI Integration Ready",
    description:
      "Future-ready with Vi.AI—our upcoming AI engine to assist with detection and annotation of CBCT scans.",
    icon: "/service-detail/microchip.svg",
  },
  {
    title: "Accessible CBCT Network via Vi-Scan",
    description:
      "Locate and schedule scans easily across certified partner centres through our digital platform.",
    icon: "/service-detail/shield.svg",
  },
  {
    title: "Seamless Reporting & DICOM Sharing",
    description:
      "Receive radiology reports in under 24 hours, integrated directly with your clinical workflow.",
    icon: "/service-detail/browser.svg",
  },
];

const steps: Step[] = [
  {
    id: 1,
    title: "Submit a New Case",
    description: "You are comfortably seated or standing in the scanner.",
  },
  {
    id: 2,
    title: "Cone Beam Scan",
    description:
      "A low‑radiation cone beam scan captures volumetric data of teeth, jaws, and surrounding structures in a single rotation.",
  },
  {
    id: 3,
    title: "3D image Reconstruction",
    description:
      "Advanced algorithms reconstruct raw projections into high‑resolution 3D volumes with axial, coronal, sagittal and panoramic views.",
  },
  {
    id: 4,
    title: "Expert Radiology Report",
    description:
      "A dental radiologist interprets the images and delivers a structured report with key findings and actionable recommendations.",
  },
];

export default function CBCTPage() {
  return (
    <div>
      <Hero
        title="Advanced 3D CBCT Imaging for Precise Diagnosis"
        subtitle="High-resolution scans with lower radiation—ideal for dental implant planning, orthodontics, endodontics, OMS, ENT & sleep apnea."
        imageSrc="/service-detail/cbct-hero.webp"
        imageAlt="CBCT Hero Image"
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
            CBCT
          </span>
          ?
        </h2> }
        sectionSubtext="Precision imaging. Trusted experts. Faster diagnostics."
        imageSrc="/service-detail/cbct.webp"
        header="What is CBCT (Cone Beam Computed Tomography)?"
        subtitle="CBCT is a specialized type of X-ray technology that generates 3D images of your teeth, jaws, and facial structures with remarkable clarity."
      />
      <HowItWorks
        pageNumber="04"
        imageSrc="/service-detail/cbct-how-work.webp"
        header="A Simple, Patient-Centric Imaging Process"
        subheader="Breakdown of how CBCT scanning works from start to finish."
        steps={steps}
      />
      {/* <CTABookScan /> */}
      <KeyFeatures header="Highlighting the core advantages of using CBCT in diagnostics and treatment planning." pageNumber="05" features={keyFeatures} />
      {/* <FAQSection /> */}
    </div>
  );
}
