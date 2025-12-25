import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { getPageBackground, getTextColor, getHeaderBackground, getFooterBackground } from "@/lib/theme";

// Import ThemeManager normally - it's small and needed for theme functionality
import ThemeManager from "@/components/theme/ThemeManager";
import { QueryProvider } from "@/components/providers/QueryProvider";
import LoadingCursor from "@/components/ui/LoadingCursor";

const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: true,
  loading: () => (
    <header className={`${getHeaderBackground()} responsive-container sticky top-0 z-50`}>
      <div className="flex items-center justify-between py-2 h-16" />
    </header>
  ),
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: true,
  loading: () => (
    <footer className={`${getFooterBackground()} border-t border-gray-200`}>
      <div className="h-32" />
    </footer>
  ),
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ViScan Diagnostics - Advanced Dental Imaging & Diagnostic Services in India",
    template: "%s | ViScan Diagnostics"
  },
  description: "ViScan Diagnostics offers advanced dental imaging services including CBCT scans, OPG, LCEPH, and pathology services. Connect with 25+ diagnostic centers across 12+ cities in India for precise dental diagnostics.",
  keywords: [
    "dental diagnostics",
    "CBCT scans",
    "OPG imaging",
    "dental radiology",
    "pathology services",
    "dental imaging",
    "diagnostic centers",
    "dental X-ray",
    "tele-reporting",
    "dental healthcare India"
  ],
  authors: [{ name: "ViScan Diagnostics Team" }],
  creator: "ViScan Diagnostics",
  publisher: "ViScan Diagnostics",
  applicationName: "ViScan Diagnostics",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://viscandiagnostics.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://viscandiagnostics.com',
    title: 'ViScan Diagnostics - Advanced Dental Imaging & Diagnostic Services',
    description: 'Connect with 25+ diagnostic centers across India for advanced dental imaging services including CBCT scans, OPG, and pathology services.',
    siteName: 'ViScan Diagnostics',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ViScan Diagnostics - Advanced Dental Imaging Services',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ViScan Diagnostics - Advanced Dental Imaging Services',
    description: '25+ diagnostic centers across India offering CBCT scans, OPG, and pathology services for precise dental diagnostics.',
    images: ['/og-image.jpg'],
    creator: '@viscandiagnostics',
    site: '@viscandiagnostics',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ViScan Diagnostics',
  },
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Healthcare',
  classification: 'Medical Services',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'geo.region': 'IN',
    'geo.placename': 'India',
    'ICBM': '28.6139, 77.2090',
    'DC.title': 'ViScan Diagnostics - Advanced Dental Imaging Services',
    'DC.creator': 'ViScan Diagnostics',
    'DC.subject': 'Dental Diagnostics, Medical Imaging',
    'DC.description': 'Advanced dental imaging and diagnostic services across India',
    'DC.publisher': 'ViScan Diagnostics',
    'DC.contributor': 'ViScan Diagnostics Team',
    'DC.date': '2025',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://viscandiagnostics.com',
    'DC.language': 'en',
    'DC.coverage': 'India',
    'DC.rights': 'Copyright © 2025 ViScan Diagnostics',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#440C46" },
    { media: "(prefers-color-scheme: dark)", color: "#440C46" }
  ],
  colorScheme: "light",
};

// Structured data as inline JSON-LD scripts (no React component - reduces bundle size)
const structuredDataScripts = {
  organization: {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "ViScan Diagnostics",
    "alternateName": "ViScan",
    "url": "https://viscandiagnostics.com",
    "logo": "https://viscandiagnostics.com/logo.webp",
    "description": "ViScan Diagnostics offers advanced dental imaging services including CBCT scans, OPG, LCEPH, and pathology services across India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd floor, No. Royal Arcade, 60, 17th Cross Road, Sector 6, HSR Layout",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560102",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-96069-80274",
      "contactType": "Customer Service",
      "email": "connect@viscandiagnostics.com",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://www.facebook.com/viscandiagnostics",
      "https://www.twitter.com/viscandiagnostics",
      "https://www.linkedin.com/company/viscandiagnostics",
      "https://www.instagram.com/viscandiagnostics",
      "https://www.youtube.com/viscandiagnostics"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "medicalSpecialty": [
      "Dental Radiology",
      "Diagnostic Imaging",
      "Pathology"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "100+"
    }
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ViScan Diagnostics",
    "url": "https://viscandiagnostics.com",
    "description": "Advanced dental imaging and diagnostic services across India",
    "publisher": {
      "@type": "Organization",
      "name": "ViScan Diagnostics"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://viscandiagnostics.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },
  medicalService: {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "ViScan Diagnostics",
    "image": "https://viscandiagnostics.com/og-image.jpg",
    "description": "Advanced dental imaging and diagnostic services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd floor, No. Royal Arcade, 60, 17th Cross Road, Sector 6, HSR Layout",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560102",
      "addressCountry": "IN"
    },
    "telephone": "+91-96069-80274",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "medicalSpecialty": [
      "Dental Radiology",
      "Diagnostic Imaging",
      "Pathology"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Diagnostic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CBCT Scans",
            "description": "Advanced 3D CBCT dental imaging"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "OPG Imaging",
            "description": "Panoramic dental X-ray imaging"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pathology Services",
            "description": "Comprehensive pathology testing"
          }
        }
      ]
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://64fe1169028cb9939579f2bd318b3389.r2.cloudflarestorage.com" />
        <link rel="dns-prefetch" href="https://64fe1169028cb9939579f2bd318b3389.r2.cloudflarestorage.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataScripts.organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataScripts.website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataScripts.medicalService) }}
        />
      </head>
      <body
        // suppressHydrationWarning
        className={cn(
          'min-h-screen max-web-container mx-auto',
          getPageBackground('default'),
          getTextColor('default'),
          'antialiased',
          outfit.className
        )}
      >
        <QueryProvider>
          <Suspense fallback={null}>
            <LoadingCursor />
          </Suspense>
          <ThemeManager />
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}