"use client";
import ToolsSection from "@/components/centers/ToolsSection";
import DentalLabsHero from "@/components/dentalLabs/DentalLabsHero";
import DentalLabsCTA from "@/components/dentalLabs/DentalLabsCTA";
import HowItWorksDoc, { Step } from "@/components/doctors/HowItWorksDoc";
import React from "react";
import BenefitsSection, {
  BenefitCard,
} from "@/components/doctors/BenefitsSection";
import FAQSection from "@/components/bookscan/FAQSection";

const steps: Step[] = [
  {
    id: 1,
    title: "AI-ready Imaging",
    description: "Easily convert DICOMs to STL for 3D printing & design tools",
  },
  {
    id: 2,
    title: "Workflow Alignment",
    description:
      "Seamlessly integrate with your existing lab management systems and workflows",
  },
  {
    id: 3,
    title: "Nationwide Access",
    description:
      "Connect with dental professionals and patients across the country through our extensive network",
  },
];

const benefitCards: BenefitCard[] = [
  {
    title: "STL & DICOM Ready",
    description:
      "Get scan outputs in formats optimized for CAD/CAM workflows no time lost in conversions.",
    icon: "/centers/work-flow.svg",
  },
  {
    title: "High-Resolution, Standardized Imaging",
    description:
      "Count on consistent quality to minimize errors and rework on crowns, bridges, or aligners.",
    icon: "/dental-labs/benefit-2.svg",
  },
  {
    title: "Collaborative Case Planning",
    description:
      "Access radiologist-reviewed reports and work hand-in-hand with clinicians for improved results.",
    icon: "/doctors/deal-icon.svg",
  },

  {
    title: "Referral Access to Vi-Scan Centers",
    description:
      "Send patients directly to any of our nationwide scan centers for seamless data flow.",
    icon: "/dental-labs/referral.svg",
  },
  {
    title: "Partner-First Service Model",
    description:
      "Get onboarding, training, and technical support, so your lab never faces downtime.",
    icon: "/centers/increase.svg",
  },
  {
    title: "Co-Branded Opportunities",
    description:
      "Promote bundled services like “Scan + Crown” or “Aligner Planning” with your lab’s branding.",
    icon: "/dental-labs/benefits-6.svg",
  },
];

export default function DentalLabsPage() {
  return (
    <main className="min-h-screen ">
      <DentalLabsHero />
      <HowItWorksDoc
        pageNumber="02"
        pageName="Why Partner With Us"
        imageSrc="/dental-labs/partner-img.webp"
        header={
          <h2 className="section-header max-md:text-center">
            Your Diagnostic Backbone
            <br /> for{" "}
            <span
              className="text-transparent font-medium"
              style={{
                background:
                  "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Greater Accuracy
            </span>
          </h2>
        }
        subheader=""
        steps={steps}
      />
      <ToolsSection
        title={
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl  leading-tight">
              Your Practice, At a
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  background:
                    "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Glance
              </span>
            </h2>
          </>
        }
        subtext="Track referrals, monitor scan reports, and manage patients, all in one intuitive dashboard built for dental professionals."
      />
      <DentalLabsCTA />
      <BenefitsSection
        pageNumber="01"
        pillLabel="Why Choose Us?"
        backgroundClassName="bg-[#FFFFFFF]"
        title={
          <div className="max-w-lg">
            Key Benefits for{" "}
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
              Dental Labs
            </span>
          </div>
        }
        subtitle="Whether you fabricate aligners, crowns, bridges, or implants, Vi-Scan equips you with the imaging clarity and case data you need delivered securely, fast, and in the formats you prefer."
        cards={benefitCards}
      />
      <FAQSection />
    </main>
  );
}
