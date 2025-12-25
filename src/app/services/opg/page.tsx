import type { Metadata } from "next";
import OpgPage from "@/components/services/OpgPage";

// Force static rendering - service page doesn't depend on user-specific data
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
  title: "OPG Imaging Services - ViScan Diagnostics | Dental X-Ray Imaging",
  description: "Get high-quality OPG (Orthopantomogram) dental X-ray imaging at ViScan Diagnostics. Fast, accurate panoramic dental radiographs available at 25+ centers across India. Book your OPG scan today.",
  keywords: [
    "OPG imaging",
    "dental X-ray",
    "panoramic radiograph",
    "OPG scan",
    "dental imaging",
    "orthopantomogram",
    "dental radiography",
    "OPG services India"
  ],
  openGraph: {
    title: "OPG Imaging Services - ViScan Diagnostics",
    description: "High-quality OPG (Orthopantomogram) dental X-ray imaging at 25+ diagnostic centers across India.",
    url: "https://viscandiagnostics.com/services/opg",
    siteName: "ViScan Diagnostics",
    images: [
      {
        url: "/service/opg.webp",
        width: 1200,
        height: 630,
        alt: "OPG Imaging Services - ViScan Diagnostics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OPG Imaging Services - ViScan Diagnostics",
    description: "High-quality OPG dental X-ray imaging at 25+ centers across India.",
    images: ["/service/opg.webp"],
  },
  alternates: {
    canonical: "/services/opg",
  },
};

export default function OPGServicePage() {
  return <OpgPage />;
}


