// Force static rendering for optimal performance - this page doesn't depend on user-specific data
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds in the background
export const revalidate = 60;

import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "ViScan Diagnostics - Advanced Dental Imaging & Diagnostic Services | Home",
  description: "ViScan Diagnostics provides advanced dental imaging and diagnostic services across India. Discover our CBCT scans, OPG imaging, pathology services, and connect with 25+ diagnostic centers in 12+ cities. Book your appointment today.",
  keywords: [
    "dental diagnostics India",
    "CBCT scans",
    "OPG imaging",
    "dental radiology services",
    "pathology services",
    "diagnostic centers",
    "dental imaging",
    "book dental scan",
    "dental healthcare"
  ],
  openGraph: {
    title: "ViScan Diagnostics - Advanced Dental Imaging Services",
    description: "Connect with 25+ diagnostic centers across India for advanced dental imaging services including CBCT scans, OPG, and pathology services.",
    url: "https://viscandiagnostics.com",
    siteName: "ViScan Diagnostics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ViScan Diagnostics - Advanced Dental Imaging Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViScan Diagnostics - Advanced Dental Imaging Services",
    description: "25+ diagnostic centers across India offering CBCT scans, OPG, and pathology services.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

// Only HeroSection loads immediately - it's the most critical above-the-fold content
// All other components are lazy loaded to reduce initial JavaScript bundle and TBT

// Lazy load all sections to reduce initial JavaScript bundle size
const WhyChooseUsSection = nextDynamic(() => import("@/components/home/WhyChooseUsSection"), {
  ssr: true,
  loading: () => <div className="h-[400px] bg-gray-50 animate-pulse" />,
});



const ServicesSection = nextDynamic(() => import("@/components/home/ServicesSection"), {
  ssr: true,
  loading: () => <div className="h-[500px] bg-white animate-pulse" />,
});

const PartnerSection = nextDynamic(() => import("@/components/home/PartnerSection"), {
  ssr: true,
  loading: () => <div className="h-[500px] bg-white animate-pulse" />,
});

const ProductSection = nextDynamic(() => import("@/components/home/ProductSection"), {
  ssr: true,
  loading: () => <div className="h-[400px] bg-gray-50 animate-pulse" />,
});







export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Critical above-the-fold content - loaded immediately */}
      <HeroSection />
      {/* <ViScanNetworkSection /> */}
      {/* <CentersSection /> */}
      <WhyChooseUsSection />
      <PartnerSection />

      {/* Below-the-fold content - lazy loaded with loading states */}
      {/* <AboutUsSection /> */}
      <ProductSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      {/* <SuccessStory /> */}

    </main>
  );
}
