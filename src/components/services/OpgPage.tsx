"use client";

import Hero from "./serviceSections/Hero";
import WhyUs, { Feature } from "./serviceSections/WhyUs";
import HowItWorks, { Step } from "./serviceSections/HowItWorks";
import KeyFeatures, { KeyFeature } from "./serviceSections/KeyFeatures";
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
      "A panoramic X-ray machine rotates around the patient's head, capturing a comprehensive view of the entire dentition and jaw structures in a single image.",
  },
  {
    id: 3,
    title: "Image Processing & Optimization",
    description:
      "The captured X-ray image is digitally processed and enhanced to ensure optimal clarity and detail for accurate diagnosis and treatment planning.",
  },
  {
    id: 4,
    title: "Radiology Review & Reporting",
    description:
      "Our experienced radiologists carefully analyze the OPG image and provide detailed reports highlighting any abnormalities, impacted teeth, or other dental concerns.",
  },
];

const keyFeatures: KeyFeature[] = [
  {
    title: "Comprehensive Overview",
    description:
      "Comprehensive panoramic view of all dental structures",
    icon: "/service-detail/teeth-and-gums.svg",
  },
  {
    title: "Early Anomaly Detection",
    description: "Uncovers hidden pathologies and anomalies.",
    icon: "/service-detail/dental-record.svg",
  },
  {
    title: "Bone Level Assessment",
    description: "Crucial for implant and periodontal planning.",
    icon: "/service-detail/dental-x-ray.svg",
  },
  {
    title: "Holistic Planning Aid",
    description:
      "Supports accurate, integrated treatment strategies.",
    icon: "/service-detail/dental-report.svg",
  },
  {
    title: "Pre-Surgical Clarity",
    description:
      "Visualizes vital structures for safe procedures.",
    icon: "/service-detail/dental-cleaning.svg",
  },
  {
    title: "Clear Communication",
    description: "Simplifies explaining conditions and treatment.",
    icon: "/service-detail/x-ray-clear-communication.svg",
  },
];

export default function OpgPage() {
  return (
    <div>
      <Hero
        title="Orthopantomogram: Your Panoramic Dental View"
        subtitle="Essential screening for a comprehensive overview of your entire dentition and facial skeleton."
        imageSrc="/service-detail/opg-hero.webp"
        imageAlt="OPG Hero Image"
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
            OPG
          </span>
          Services?
        </h2>}
        sectionSubtext="As India's first, we use our expert knowledge and advanced technology to give clear, detailed answers for better dental care."
        imageSrc="/service-detail/opg-why-us.webp"
        header="What is OPG?"
        subtitle="An OPG, or Orthopantomogram, is a widely used panoramic X-ray that captures a single, comprehensive image of your entire dentition, including the upper and lower jaws, and surrounding facial structures. This essential screening radiograph provides a broad overview of teeth, bones, and soft tissues, allowing dental professionals to identify a range of issues from impacted wisdom teeth & jaw abnormalities to periodontal disease. "
      />
      <HowItWorks
        pageNumber="04"
        imageSrc="/service-detail/how-it-works.webp"
        header="How Our OPG X-ray Works"
        subheader="From Scan to Diagnosis in Four Simple Steps"
        steps={steps}
      />
      {/* <CTABookScan /> */}
      <KeyFeatures header="Why Our OPG Imaging Supports Better Treatment Planning" pageNumber="05" features={keyFeatures} />
      {/* <FAQSection /> */}
    </div>
  );
}
