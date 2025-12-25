import type { Metadata } from "next";
import CTABookScan from "@/components/services/serviceSections/CTABookScan";
import ClinicListing from "@/components/labs/ClinicListing";

// Enable ISR - labs page has dynamic data but can be cached
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Diagnostic Centers - ViScan Diagnostics | Find a Center Near You",
  description: "Find ViScan Diagnostics centers near you. Browse 25+ diagnostic centers across 12+ cities in India offering CBCT scans, OPG imaging, pathology services, and more. Book your appointment at the nearest center.",
  keywords: [
    "diagnostic centers",
    "ViScan Diagnostics centers",
    "dental imaging centers",
    "find diagnostic center",
    "dental scan centers",
    "diagnostic labs near me"
  ],
  openGraph: {
    title: "Diagnostic Centers - ViScan Diagnostics",
    description: "Find 25+ diagnostic centers across India offering dental imaging services.",
    url: "https://viscandiagnostics.com/labs",
    siteName: "ViScan Diagnostics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ViScan Diagnostics Centers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnostic Centers - ViScan Diagnostics",
    description: "Find 25+ diagnostic centers across India.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/labs",
  },
};

export default function LabsPage() {
  return (
    <main className="min-h-screen">
      <CTABookScan
        title="Power your practice with us"
        buttonText="Partner with Us"
        imageSrc="/clinics/cta-img.webp"
        imageAlt="Dental scan"
        smallheader={true}
      />
      <ClinicListing />
    </main>
  );
}
