"use client";

import Button from "@/components/ui/button";
import PackageCard from "@/components/ui/PackageCard";
import { ChevronDown } from "lucide-react";

export type PackageItem = {
  id: string | number;
  title: string;
  price: string; // formatted, e.g. "₹499"
  originalPrice?: string; // e.g. "₹699"
  imageSrc: string;
  parametersText: string; // e.g. "91 Parameters included"
  reportTATText: string; // e.g. "Reports within 10 hours"
  keyTestsText: string; // e.g. "CBC with ESR, PT/INR (Coagulation profile) +5 More"
};

interface PackagesSectionProps {
  pageNumber?: string;
  header: string;
  subheader?: string;
  packages: PackageItem[];
}

export default function PackagesSection({
  pageNumber = "02",
  header,
  subheader,
  packages,
}: PackagesSectionProps) {
  return (
    <section className="responsive-margin max-sm:bg-[#FCF5FE] py-12">
      {/* Header badge + page number */}
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
            Packages
          </span>
          <span className="text-xs text-gray-500 font-medium">
            ({pageNumber})
          </span>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Title + subtitle layout like HowItWorks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Mobile/Tablet: center align header + subtext */}
        <div className="block md:hidden lg:col-span-12">
          <h2 className="section-header max-md:mx-auto max-w-xs text-center ">
            {header}
          </h2>
          {subheader ? (
            <p className="section-subtext text-center max-md:mx-auto">
              {subheader}
            </p>
          ) : null}
        </div>

        {/* md+: header left, subtext right */}
        <div className="hidden md:grid md:grid-cols-2 mb-3 lg:col-span-12 gap-6 items-start">
          <div>
            <h2 className="section-header max-w-sm md:mb-0">{header}</h2>
          </div>
          {subheader ? (
            <div className="section-subtext my-auto md:mt-0">{subheader}</div>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {packages.map((item) => (
          <PackageCard key={item.id} {...item} />
        ))}
      </div>

      {/* View more */}
      <div className="mt-10 flex justify-center">
        <Button
          variant="secondary"
          size="sm"
          className="px-3 bg-white border-2 border-primary-900 text-primary-900 py-1 inline-flex items-center gap-1"
        >
          View More{" "}
          <ChevronDown className="p-1 bg-primary-900 rounded-full text-white" />
        </Button>
      </div>
    </section>
  );
}
