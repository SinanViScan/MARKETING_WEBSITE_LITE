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
    title: "Preparation",
    description:
      "The dental professional first prepares the patient's mouth, ensuring the teeth and gums are clean and dry.",
  },
  {
    id: 2,
    title: "Scanning Process",
    description:
      "Using a handheld intraoral scanner, the device captures thousands of high-resolution images per second as it moves through the patient's mouth, creating a precise digital map of all dental structures.",
  },
  {
    id: 3,
    title: "Real-Time 3D Model",
    description:
      "Advanced software processes the captured images in real-time, stitching them together to create a highly accurate 3D digital model of the patient's teeth, gums, and oral anatomy.",
  },
  {
    id: 4,
    title: "Review and Application",
    description:
      "The digital model is reviewed for accuracy and can be immediately used for treatment planning, creating restorations, or sharing with dental laboratories for custom prosthetics.",
  },
];

const keyFeatures: KeyFeature[] = [
  {
    title: "Superior Patient Comfort",
    description: "Images are calibrated for accurate tracing of dental and skeletal landmarks",
    icon: "/service-detail/dentist-chair.svg",
  },
  {
    title: "Digital Precision ",
    description: "Captures highly detailed and precise 3D digital models of the entire oral anatomy for flawless treatment planning.",
    icon: "/service-detail/teeth-monitor.svg",
  },
  {
    title: "Real-Time Visualization",
    description: "The dental professional & patient can instantly view the 3D impression on-screen, allowing for immediate feedback and adjustments.",
    icon: "/service-detail/scanning.svg",
  },
  {
    title: "Seamless Digital Workflow",
    description: "The resulting digital files are easily integrated into dental design software and sent to labs instantly, streamlining the entire process.",
    icon: "/service-detail/document-scan.svg",
  },
  {
    title: "Efficiency & Speed",
    description: "Dramatically reduces chairside time compared to traditional impressions, making appointments faster and more productive.",
    icon: "/service-detail/speed.svg",
  },
  {
    title: "Versatile Applications",
    description: "A single scan can be used for a wide range of applications, including crowns, bridges, clear aligners, and orthodontic diagnostics.",
    icon: "/service-detail/teeth-report.svg",
  },
];

export default function IntraOralPage() {
  return (
    <div>
      <Hero
        title="Intraoral Scanner: 
The Future of Digital Impressions"
        subtitle="Experience unparalleled comfort and precision with our advanced 3D intraoral scanning technology."
        imageSrc="/service-detail/intra-oral-hero.webp"
        imageAlt="Intra Oral Hero Image"
      />
      <WhyUs
        pageNumber="02"
        features={features}
        sectionHeader={
          <h2 className="section-header">
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
              Intraoral
            </span>
            Scanning?
          </h2>
        }
        sectionSubtext="As India's first, we use our expert knowledge and advanced technology to give clear, detailed answers for better dental care."
        imageSrc="/service-detail/intra-oral-why-us.webp"
        header="What is Intraoral Scanner?"
        subtitle="An intraoral scanner is a modern dental device used to create a highly accurate 3D digital impression of a patient's mouth. Instead of using traditional, often messy, impression materials, the scanner captures thousands of images per second, which are then stitched together to form a precise, high-resolution model of the teeth, gums, and oral structures. "
      />
      <HowItWorks
        pageNumber="02"
        imageSrc="/service-detail/how-it-works.webp"
        header="How Our Cephalometric X-ray Works"
        subheader="From Scan to Diagnosis in Four Simple Steps"
        steps={steps}
      />
      {/* <CTABookScan /> */}
      <KeyFeatures
        header="Why Our Intraoral Scanner Supports Better Treatment Planning"
        pageNumber="03"
        features={keyFeatures}
      />
      {/* <FAQSection /> */}
    </div>
  );
}
