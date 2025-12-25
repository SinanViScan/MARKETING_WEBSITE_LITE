"use client";

import Hero from "./serviceSections/Hero";
import WhyUs, { Feature } from "./serviceSections/WhyUs";
import {
  IconShieldRibbon,
  IconCertifiedBadge,
  IconDesktopSupport,
  AnalyzeIcon,
  IconScan,
  PersonWithTeeth,
} from "./icons/FeatureIcons";
import HowItWorks, { Step } from "./serviceSections/HowItWorks";
import KeyFeatures, { KeyFeature } from "./serviceSections/KeyFeatures";

// Features (icons and layout follow the same structure as STSPage for visual consistency)
export const features: Feature[] = [
  {
    title: "Perfect for Orthodontics",
    svgNode: <IconShieldRibbon />,
    // bg: "bg-[#F8EFF8] h-[91%] flex self-end",
    bg: "bg-[#F8EFF8]",
  },
  {
    title: "Rapid Scan Turnaround",
    svgNode: <AnalyzeIcon />,
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
    title: "Digital Tracing Support",
    svgNode: <IconDesktopSupport />,
    bg: "bg-[#EFEAFF]",
  },
  {
    title: "Clinic-Friendly",
    svgNode: <IconScan />,
    bg: "bg-[#F8EFF8]",
  },
  {
    title: "Minimal Radiation",
    svgNode: <PersonWithTeeth />,
    bg: "bg-[#EFEAFF]",
  },
];

const steps: Step[] = [
  {
    id: 1,
    title: "Patient Positioning",
    description:
      "The patient is positioned with a head stabilizer to ensure reproducibility",
  },
  {
    id: 2,
    title: "X-ray Capture",
    description:
      "Standardized lateral cephalometric exposure is taken with fixed geometry and head orientation.",
  },
  {
    id: 3,
    title: "Image Processing & Optimization",
    description:
      "Image is calibrated and cleaned; landmarks are enhanced to prepare for accurate tracing.",
  },
  {
    id: 4,
    title: "Radiology Review & Reporting",
    description:
      "Cephalometric landmarks are traced and key angles/linear measurements are reported with clinical notes.",
  },
];

const keyFeatures: KeyFeature[] = [
  {
    title: "Landmark Accuracy",
    description:
      "Images are calibrated for accurate tracing of dental and skeletal landmarks",
    icon: "/service-detail/compass.svg",
  },
  {
    title: "Orthodontic Essentials",
    description:
      "Supports overjet, overbite, skeletal class, and airway analysis",
    icon: "/service-detail/teeth.svg",
  },
  {
    title: "Pediatric-Safe Imaging",
    description: "Designed for minimal radiation exposure in young patients",
    icon: "/service-detail/baby.svg",
  },
  {
    title: "DICOM & Ceph Integration",
    description: "Easily import into software like Dolphin, NemoCeph, or Facad",
    icon: "/service-detail/document.svg",
  },
  {
    title: "Growth & Progress Tracking",
    description: "Capture changes over time for long-term orthodontic planning",
    icon: "/service-detail/sheild.svg",
  },
  {
    title: "AI-Ready & Digitally Stored",
    description:
      "Images are compatible with AI tools and archived for easy access",
    icon: "/service-detail/cloud.svg",
  },
];

export default function LCEPPage() {
  return (
    <div>
      <Hero
        title="L-Ceph: Precision for Orthodontic Planning"
        subtitle="Essential lateral views providing crucial skeletal and soft tissue measurements."
        imageSrc="/service-detail/lceph-hero.webp"
        imageAlt="LCEP Hero Image"
      />
      <WhyUs
        pageNumber="02"
        features={features}
        sectionHeader={<h2 className="section-header">
          Why Choose Vi-Scan for
          <br className="hidden sm:block" />
          <span
            className="text-transparent ml-2 mr-2"
            style={{
              background:
                "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            L-Ceph
          </span>
          Services?
        </h2>}
        sectionSubtext="As India's first, we use our expert knowledge and advanced technology to give clear, detailed answers for better dental care."
        imageSrc="/service-detail/lceph.webp"
        header="What is L-Ceph?"
        subtitle="An OPG (Orthopantomogram) is a single panoramic X-ray showing the teeth, jaws, and surrounding structures—commonly used in dental and emergency settings for quick, broad diagnosis. A Lateral Cephalogram (Lat Ceph) is a side-view X-ray of the face used to measure jaw alignment and bite, especially for orthodontic planning."
      />
      <HowItWorks
        pageNumber="04"
        imageSrc="/service-detail/how-it-works.webp"
        header="How Our Cephalometric X-ray Works"
        subheader="From Scan to Diagnosis in Four Simple Steps"
        steps={steps}
      />
      <KeyFeatures
        pageNumber="05"
        features={keyFeatures}
        header="Why Our Ceph Imaging Supports Better Treatment Planning"
      />
      {/* <FAQSection /> */}
    </div>
  );
}
