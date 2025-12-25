import type { Metadata } from "next";
import AboutPage from '@/components/about/AboutPage';

// Force static rendering - about page doesn't depend on user-specific data
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds in the background
export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us - ViScan Diagnostics | Leading Dental Diagnostic Services in India",
  description: "Learn about ViScan Diagnostics, a leading provider of advanced dental imaging and diagnostic services across India. Discover our mission, team, and commitment to delivering precise dental diagnostics at 25+ centers.",
  keywords: [
    "about ViScan Diagnostics",
    "dental diagnostic company",
    "dental imaging services",
    "diagnostic centers India",
    "dental healthcare",
    "about us"
  ],
  openGraph: {
    title: "About Us - ViScan Diagnostics",
    description: "Leading provider of advanced dental imaging and diagnostic services across India with 25+ centers.",
    url: "https://viscandiagnostics.com/about",
    siteName: "ViScan Diagnostics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About ViScan Diagnostics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - ViScan Diagnostics",
    description: "Leading provider of advanced dental imaging services across India.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return <AboutPage />;
} 