import type { Metadata } from "next";
// import Hero from "@/components/services/sections/Hero";
import ServiceDetailPage from "@/components/services/ServicesPage";

// Force static rendering - services page doesn't depend on user-specific data
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds in the background
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Our Services - ViScan Diagnostics | Dental Imaging & Diagnostic Services",
  description: "Explore ViScan Diagnostics comprehensive dental imaging services including CBCT scans, OPG imaging, LCEPH, pathology services, tele-reporting, and intraoral scanning. Available at 25+ centers across India.",
  keywords: [
    "dental imaging services",
    "CBCT scans",
    "OPG imaging",
    "pathology services",
    "dental diagnostic services",
    "LCEPH imaging",
    "tele-reporting",
    "intraoral scanning"
  ],
  openGraph: {
    title: "Our Services - ViScan Diagnostics",
    description: "Comprehensive dental imaging services including CBCT, OPG, pathology, and more at 25+ centers across India.",
    url: "https://viscandiagnostics.com/services",
    siteName: "ViScan Diagnostics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ViScan Diagnostics Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - ViScan Diagnostics",
    description: "Comprehensive dental imaging services at 25+ centers across India.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/services",
  },
};

// interface ServiceDetailProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

export default async function ServiceDetail() {
  return <ServiceDetailPage />;
}


