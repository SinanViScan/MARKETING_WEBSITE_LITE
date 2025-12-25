import type { Metadata } from "next";
import React from 'react';
import ContactUsPage from '@/components/contact/ContactUsPage';

// Force static rendering - contact page can be cached
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact Us - ViScan Diagnostics | Get in Touch with Our Diagnostic Centers",
  description: "Contact ViScan Diagnostics for dental imaging and diagnostic services. Reach out to our team at 25+ centers across India. Call +91 96069 80274 or email connect@viscandiagnostics.com for appointments and inquiries.",
  keywords: [
    "contact ViScan Diagnostics",
    "dental diagnostic centers",
    "book appointment",
    "contact dental imaging",
    "diagnostic services contact",
    "ViScan Diagnostics contact"
  ],
  openGraph: {
    title: "Contact Us - ViScan Diagnostics",
    description: "Get in touch with ViScan Diagnostics for dental imaging services. 25+ centers across India.",
    url: "https://viscandiagnostics.com/contact",
    siteName: "ViScan Diagnostics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ViScan Diagnostics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - ViScan Diagnostics",
    description: "Get in touch with ViScan Diagnostics for dental imaging services.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactUsPage />;
} 