"use client";

import Hero from "./serviceSections/Hero";
import WhyUs, { Feature } from "./serviceSections/WhyUs";
import HowItWorks, { Step } from "./serviceSections/HowItWorks";
import UnderstandingReports, {
  ReportTab,
} from "./serviceSections/UnderstandingReports";
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
    title: "Advanced Tech",
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
    title: "AI Powered",
    svgNode: <IconDesktopSupport />,
    bg: "bg-[#EFEAFF]",
  },
  {
    title: "Quality Control",
    svgNode: <IconScan />,
    bg: "bg-[#F8EFF8]",
  },
  {
    title: "Specialist Radiologists",
    svgNode: <PersonWithTeeth />,
    bg: "bg-[#EFEAFF]",
  },
];

const keyFeatures: KeyFeature[] = [
  {
    title: "Rapid 24-Hour Turnaround",
    description:
      "Get professional reports quickly, enabling faster patient consultation and treatment initiation.",
    icon: "/service-detail/stopwatch.svg",
  },
  {
    title: "Expert Dental Radiologists",
    description:
      "Benefit from interpretations by a group of highly specialized radiologists, ensuring the best quality service.",
    icon: "/service-detail/stethoscope.svg",
  },
  {
    title: "Advanced Technology & Tools",
    description:
      "Our radiologists utilize the latest technology for precise analysis.",
    icon: "/service-detail/microchip.svg",
  },
  {
    title: "Rigorous Quality Control",
    description:
      "Every report undergoes a strict protocol for consistent and accurate results.",
    icon: "/service-detail/shield.svg",
  },
  {
    title: "Comprehensive & Reliable",
    description:
      "Receive very detailed, accurate, and reliable reports every time.",
    icon: "/service-detail/badge.svg",
  },
  {
    title: "Holistic Reporting",
    description: "Covers CBCT, IOPA, and OPG scans.",
    icon: "/service-detail/browser.svg",
  },
];

const steps: Step[] = [
  {
    id: 1,
    title: "Submit a New Case",
    description:
      "Fill patient details and upload radiology scans via our secure online form",
  },
  {
    id: 2,
    title: "Case Assigned to Radiologist",
    description:
      "A specialist dental radiologist is assigned to your case and begins a detailed review of the images and clinical notes.",
  },
  {
    id: 3,
    title: "Get Report via Email",
    description:
      "Receive a comprehensive, signed report in your email. Follow-up clarifications are available if needed.",
  },
];

export default function TelePage() {
  return (
    <div>
      <Hero
        title="Expert Insights, Delivered Within 24 Hours"
        subtitle="Professional online interpretation and reporting of your dental radiology studies by expert radiologists, ensuring comprehensive and accurate results."
        imageSrc="/service-detail/tele-hero.webp"
        imageAlt="Tele Hero Image"
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
            Teleradiology
          </span>
          ?
        </h2> }
        sectionSubtext="Trusted by clinics for fast, accurate, and affordable reporting by expert oral radiologists."
        imageSrc="/service-detail/tele-report-why-us.webp"
        header="What is Dental Telereporting?"
        subtitle="Dental tele-reporting, as offered by Vi-Scan Diagnostics, is a professional online service for the interpretation and reporting of dental radiology studies. This service provides comprehensive and very detailed reports, prepared by expert dental radiologists who utilize advanced technology and tools."
      />
      <HowItWorks
        pageNumber="04"
        imageSrc="/service-detail/how-works-tele.webp"
        header="Get Your Dental Tele-Report in 3 Simple Steps"
        subheader="A smooth, online process that connects you with expert radiologists in minutes."
        steps={steps}
      />
      {/* <CTABookScan /> */}
      {/* <UnderstandingReports
        pageNumber="03"
        header="Holistic Dental Teleradiology Provider"
        tabs={
          [
            {
              key: "cbct",
              label: "CBCT Reporting",
              imageSrc: "/service-detail/cbct-img.webp",
              title: "CBCT Interpretation",
              description:
                "CBCT (Cone Beam Computed Tomography) interpretation involves a step-by-step analysis of all abnormal radiographic findings or features within a CBCT scan. The primary goal is to recognize and collect as much information as possible from the various image reconstructions.\n\nCBCT scans are mainly prescribed to assist in diagnosis, pre-surgical planning, and to assess the results of certain types of treatments or periodic evaluations. The analysis of the collected information from a CBCT scan can lead the clinician to a diagnosis or, more frequently, to a short list of possible diagnoses.\nSources",
            },
            {
              key: "iopa",
              label: "IOPA Reporting",
              imageSrc: "/service-detail/how-it-works.webp",
              title: "IOPA Interpretation",
              description:
                "Intraoral periapical (IOPA) radiographs are reviewed for periapical status, caries, restorative margins, and periodontal support to assist in endodontic and prosthodontic decision-making.",
            },
            {
              key: "opg",
              label: "OPG Reporting",
              imageSrc: "/service-detail/profile.webp",
              title: "OPG Interpretation",
              description:
                "Orthopantomogram (OPG) interpretation provides a panoramic overview for assessing dentition, impacted teeth, lesions, bone patterns, and TMJ region—useful for baseline evaluation and treatment planning.",
            },
          ] as ReportTab[]
        }
      /> */}

      <KeyFeatures pageNumber="05" features={keyFeatures} />
      {/* <FAQSection /> */}
    </div>
  );
}
