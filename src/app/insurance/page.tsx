import FAQSection from "@/components/bookscan/FAQSection";
import ToolsSection from "@/components/centers/ToolsSection";
import BenefitsSection, {
  BenefitCard,
} from "@/components/doctors/BenefitsSection";
import HowItWorksDoc, { Step } from "@/components/doctors/HowItWorksDoc";
import InsuranceHero from "@/components/insurance/InsuranceHero";
import CTABookScan from "@/components/services/serviceSections/CTABookScan";

const steps: Step[] = [
  {
    id: 1,
    title: "Accelerate Claim Processing",
    description:
      "Get instant access to digital, AI-verified dental reports for faster approvals.",
  },
  {
    id: 2,
    title: "Minimize Fraud & Errors",
    description:
      "AI-powered verification detects inconsistencies and fraudulent claims, reducing manual review time and preventing costly errors.",
  },
  {
    id: 3,
    title: "Improve Customer Experience",
    description:
      "Faster claim processing and transparent digital reports lead to quicker approvals and higher customer satisfaction rates.",
  },
];
// Force static rendering - insurance page doesn't depend on user-specific data
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds
export const revalidate = 60;

const benefitCards: BenefitCard[] = [
  {
    title: "Nationwide Diagnostic Network",
    description:
      "Images are calibrated for accurate tracing of dental and skeletal landmarks",
    icon: "/insurance/network.svg",
  },
  {
    title: "Better Customer Experience",
    description:
      "Supports overjet, overbite, skeletal class, and airway analysis",
    icon: "/centers/communication.svg",
  },
  {
    title: "Seamless Integration",
    description: "Designed for minimal radiation exposure in young patients",
    icon: "/centers/communication.svg",
  },

  {
    title: "Reduced Fraud & Errors",
    description: "From scan uploads to final reports—everything runs online.",
    icon: "/insurance/errors.svg",
  },
  {
    title: "Improved Operational Efficiency",
    description: "Access professional radiologists for real-time case support.",
    icon: "/insurance/increase.svg",
  },
  {
    title: "Faster Claim Approvals",
    description:
      "Patients can view and download reports anytime, from anywhere.",
    icon: "/insurance/approved.svg",
  },
];

export default function InsurancePage() {
  return (
    <main className="min-h-screen">
      <InsuranceHero />
      <HowItWorksDoc
        pageNumber="02"
        pageName="Why Partner With Us"
        imageSrc="/insurance/why-partner-with-us.webp"
        header={
          <>
            <h2 className="section-header max-md:text-center">
              Simplify claims and streamline
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
                Dental diagnostics.
              </span>
            </h2>
            <p className="text-[#344054] max-w-2xl">
              Partnering with ViScan helps insurance providers speed up claim
              approvals, reduce manual errors, and access accurate, AI-backed
              dental reports—all through a seamless digital platform.
            </p>
          </>
        }
        subheader=""
        steps={steps}
      />
      <ToolsSection
        title={
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl  leading-tight">
              Everything You Need to
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
                Simplify Dental Claims
              </span>
            </h2>
          </>
        }
        subtext="Partner with ViScan to speed up dental claims, reduce fraud, and improve customer experience with AI-powered, real-time reports."
      />
      <BenefitsSection
        pageNumber="01"
        pillLabel="Why Choose Us?"
        backgroundClassName="bg-transparent"
        title={
          <div className="max-w-lg">Key Benefits for Insurance Providers</div>
        }
        subtitle="Partnering with ViScan helps you reach more dentists, increase case volumes, and deliver faster, AI-powered reports through a seamless digital workflow."
        cards={benefitCards}
      />
      {/* <CTABookScan
        title="Be a partner for a healthier future"
        buttonText="Contact Us Now"
        imageSrc="/service-detail/cta.webp"
        imageAlt="Dental scan"
      />
      <FAQSection /> */}
    </main>
  );
}
