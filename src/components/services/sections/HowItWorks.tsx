"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HowItWorksProps {
  pageNumber?: string;
}

const steps = [
  {
    title: "Book a scan or refer a patient",
    description:
      "Easily schedule a diagnostic scan / refer directly from your dashboard.",
    image: "/home/hero/video-img-1.webp",
    alt: "Book a scan",
  },
  {
    title: "Visit nearby Centre",
    description:
      "Drop by a nearby partnered center for seamless diagnostics.",
    image: "/home/partner/diagnostic-center.webp",
    alt: "Visit nearby centre",
  },
  {
    title: "Radiology report generated",
    description:
      "Scans are analyzed by expert radiologists using Vi.AI.",
    image: "/blog-detail/blog-detail-img-2.webp",
    alt: "Radiology report generated",
  },
  {
    title: "Report sent on dashboard",
    description:
      "Access reports directly on your secure doctor dashboard.",
    image: "/home/why-choose/opg-report.webp",
    alt: "Reports on dashboard",
  },
];

export default function HowItWorks({ pageNumber = "04" }: HowItWorksProps) {
  return (
    <section className="py-10  responsive-margin">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-4 py-1.5 rounded-full text-gray-700 text-sm font-medium relative"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
                border: "1px solid transparent",
                borderRadius: "999px",
              }}
            >
              How it works?
            </span>
            <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
          </div>
          <hr className="border-gray-200" />
        </div>

        {/* Title and description row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Mobile/Tablet: center align header + subtext */}
          <div className="block md:hidden lg:col-span-12">
            <h2 className="section-header text-center">
              Simple Steps,
              <br />
              Smarter {" "}
              <span
                className="text-transparent"
                style={{
                  background:
                    "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
                Diagnostics
              </span>
            </h2>
            <p className="section-subtext text-center max-md:mx-auto">
              From booking to reporting — our streamlined process ensures fast,
              accurate, and hassle-free dental diagnostics for every patient and
              practitioner.
            </p>
            <div className="mt-4 flex justify-center">
              <Button variant="primary" size="sm" className="px-4 py-2">
                View All Services
                <div className="bg-white rounded-full p-1.5 ml-2 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-primary-900" />
                </div>
              </Button>
            </div>
          </div>

          {/* md+: header left, subtext right */}
          <div className="hidden md:grid md:grid-cols-2 lg:col-span-12 gap-6 items-start">
            <div>
              <h2 className="section-header md:mb-0">
                Simple Steps,
                <br />
                Smarter {" "}
                <span
                  className="text-transparent"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Diagnostics
                </span>
              </h2>
              <div className="mt-4">
                <Button variant="primary" size="sm" className="px-4 py-2">
                  View All Services
                  <div className="bg-white rounded-full p-1.5 ml-2 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-primary-900" />
                  </div>
                </Button>
              </div>
            </div>
            <div className="section-subtext md:mt-0">
              From booking to reporting — our streamlined process ensures fast,
              accurate, and hassle-free dental diagnostics for every patient and
              practitioner.
            </div>
          </div>
        </div>

        {/* Steps cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white border border-gray-200 rounded-3xl p-4 flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-purple-50">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={320}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#101828] font-semibold text-base mb-2">
                {step.title}
              </h3>
              <p className="text-[#667085] text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


