import type { Metadata } from "next";
import BookScanPage from '@/components/bookscan/BookScanPage';

// Force static rendering - bookscan page can be cached
export const dynamic = "force-static";
// Enable ISR - regenerate every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Book a Scan - ViScan Diagnostics | Schedule Your Dental Imaging Appointment",
  description: "Book your dental imaging appointment at ViScan Diagnostics. Schedule CBCT scans, OPG imaging, pathology tests, and other diagnostic services at 25+ centers across India. Fast and easy online booking.",
  keywords: [
    "book dental scan",
    "schedule appointment",
    "book OPG scan",
    "book CBCT scan",
    "dental imaging appointment",
    "book diagnostic test",
    "online booking"
  ],
  openGraph: {
    title: "Book a Scan - ViScan Diagnostics",
    description: "Schedule your dental imaging appointment at 25+ centers across India. Fast and easy online booking.",
    url: "https://viscandiagnostics.com/bookscan",
    siteName: "ViScan Diagnostics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Book a Scan - ViScan Diagnostics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Scan - ViScan Diagnostics",
    description: "Schedule your dental imaging appointment. Fast and easy online booking.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/bookscan",
  },
};

export default function BookScan() {
  return <BookScanPage />;
} 