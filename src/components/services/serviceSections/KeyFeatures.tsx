"use client";

import Image from "next/image";
import type { ReactNode } from "react";

interface KeyFeaturesProps {
  pageNumber?: string;
  features: KeyFeature[];
  header?: string;
}

export type KeyFeature = {
  title: string;
  description: string;
  // Provide either a public icon path or an inline SVG node
  icon?: string;
  svgNode?: ReactNode;
};


export default function KeyFeatures({header, pageNumber = "05" , features }: KeyFeaturesProps) {
  return (
    <section className="bg-transparent px-2 sm:px-4 md:px-6 lg:px-10 py-12">
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
            Key Features & Benefits
          </span>
          <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Title & subtitle */}
      <div className="text-center px-1 space-y-3 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-3xl mx-auto">
        <h2 className="section-header">
          {header}
          {/* <br className="hidden sm:block" /> */}
          
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-white border border-gray-100 p-5 md:p-6 flex flex-col gap-3 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[#FCF5FE]  flex items-center justify-center">
              {f.svgNode ? (
                <span className="inline-flex items-center justify-center">{f.svgNode}</span>
              ) : (
                f.icon && (
                  // Using next/image for consistency when an external asset path is used
                  <Image src={f.icon} alt={f.title} width={24} height={24} />
                )
              )}
            </div>
            <div className="text-[#101828] font-semibold">{f.title}</div>
            <p className="text-[#667085] text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


