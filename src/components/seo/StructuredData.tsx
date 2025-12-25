export default function StructuredData() {
  const organizationSchema = {
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
  };

  const websiteSchema = {
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
  };

  const medicalServiceSchema = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalServiceSchema) }}
      />
    </>
  );
}

