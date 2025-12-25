import Hero from "./sections/Hero";
import ServicesSection from "../home/ServicesSection";
import VizPlatformSection from "./sections/VizPlatformSection";
import HowItWorks from "./sections/HowItWorks";
import FAQSection from "../bookscan/FAQSection";

export default function ServicesPage() {
  return (
    <>
      <Hero/>
      <ServicesSection showButton={false} pageNumber="02"/>
      <VizPlatformSection pageNumber="03" />
      {/* <HowItWorks pageNumber="04" /> */}
      {/* <FAQSection pageNumber="04"/> */}
    </>
  );
}
