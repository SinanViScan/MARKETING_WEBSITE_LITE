import CentersHero from "@/components/centers/CentersHero";
import WhyPartnerSection from "../../components/centers/WhyPartnerSection";
import ToolsSection from "@/components/centers/ToolsSection";
import HowItWorksDoc, { Step } from "@/components/doctors/HowItWorksDoc";
import CTABookScan from "@/components/services/serviceSections/CTABookScan";
import BenefitsSection, {
  BenefitCard,
} from "@/components/doctors/BenefitsSection";
import FAQSection from "@/components/bookscan/FAQSection";

const steps: Step[] = [
  {
    id: 1,
    title: "Connect with 10k+ Dentists",
    description:
      "Join 10,000+ dentists using our platform to streamline diagnostics and boost care.",
  },
  {
    id: 2,
    title: "Offer Instant AI & Expert Reports",
    description:
      "Provide faster, accurate reports with AI assistance and expert radiologist review for better patient care.",
  },
  {
    id: 3,
    title: "End-to-End Digital Workflow",
    description:
      "Streamline your entire diagnostic process from booking to report delivery with our digital platform.",
  },
];

// Force static rendering - centers page doesn't depend on user-specific data
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds
export const revalidate = 60;

const benefitCards: BenefitCard[] = [
  {
    title: "Expand Your Reach",
    description:
      "Connect with 10,000+ dentists and grow your referral network.",
    icon: "/doctors/deal-icon.svg",
  },
  {
    title: "Remote Telereporting Support",
    description: "Access professional radiologists for real-time case support.",
    icon: "/centers/communication.svg",
  },
  {
    title: "Faster Report Turnaround",
    description:
      "Leverage AI + expert reviews for quicker, accurate reporting.",
    icon: "/centers/tooth-scan.svg",
  },

  {
    title: "End-to-End Digital Workflow",
    description: "From scan uploads to final reports—everything runs online.",
    icon: "/centers/work-flow.svg",
  },
  {
    title: "Boost Case Volume",
    description: "Access professional radiologists for real-time case support.",
    icon: "/centers/increase.svg",
  },
  {
    title: "Patient Dashboard Access",
    description:
      "Patients can view and download reports anytime, from anywhere.",
    icon: "/centers/db.svg",
  },
];

export default function CentersPage() {
  return (
    <main className="">
      <CentersHero />
      <WhyPartnerSection />
      <HowItWorksDoc
        pageNumber="02"
        pageName="Why Partner With Us"
        imageSrc="/centers/partner-with-us.webp"
        header={
          <h2 className="section-header max-md:text-center">
            Empowering the Future of
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
              Digital Dentistry
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
              Seamless Tools for
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
                Smarter Diagnostics
              </span>
            </h2>
          </>
        }
        subtext="Offer your dentists a seamless experience with easy scan uploads, remote telereporting support, and an online dashboard for patients to access reports anytime."
      />
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
        title={
          <div className="max-w-lg">
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
              &nbsp;Diagnostic Centers
            </span>
          </div>
        }
        subtitle="Partnering with ViScan helps you reach more dentists, increase case volumes, and deliver faster, AI-powered reports through a seamless digital workflow."
        cards={benefitCards}
      />
      {/* <FAQSection /> */}
    </main>
  );
}
