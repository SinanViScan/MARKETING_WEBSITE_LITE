"use client";

import Image from "next/image";
import type { ReactNode } from "react";
export type Feature = {
  title: string;
  // Either provide a public path to an SVG or an inline SVG node
  svg?: string; // e.g. "/icons/secure.svg" under public/
  svgNode?: ReactNode; // inline <svg>...</svg>
  bg: string;
  // featured: boolean;
};


export interface WhyUsSectionProps {
  pageNumber?: string;
  features: Feature[];
  header: string;
  subtitle: string;
  imageSrc: string;
  sectionHeader: React.ReactNode;
  sectionSubtext: string;
}



export default function WhyUs({ pageNumber = "02", features ,header, subtitle, imageSrc, sectionHeader, sectionSubtext }: WhyUsSectionProps) {
  return (
    <section className="responsive-margin py-12">
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
            Why Us?
          </span>
          <span className="text-xs text-gray-500 font-medium">
            ({pageNumber})
          </span>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Title + subtitle */}
      <div className="text-center space-y-3">
        {sectionHeader}
        {/* <h2 className="section-header">
          Why Choose Vi-Scan for
          <br className="hidden sm:block" />
          Dental
          <span
            className="text-transparent ml-2"
            style={{
              background:
                "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Soft Tissue Screening
          </span>
          ?
        </h2> */}
        <p className="section-subtext max-w-2xl mx-auto">
          {sectionSubtext}
          {/* We combine advanced tools with expert insight to screen smarter. */}
        </p>
      </div>

      {/* Feature grid */}
      <div className="mt-8 grid grid-cols-2 max-w-2xl mx-auto md:grid-cols-3 gap-4 lg:gap-6">
        {features.map(({ title, svg, svgNode, bg }) => (
          <div
            key={title}
            className={[
              "rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3",
              bg,
              // featured ? "md:col-span-2 lg:col-span-2" : "",
            ].join(" ")}
          >
            <div className="w-10 h-10 rounded-2xl  flex items-center justify-center ">
              {svgNode ? (
                <span className="inline-flex items-center w-full h-full justify-center">
                  {svgNode}
                </span>
              ) : (
                svg && <Image src={svg} alt={title} width={32} height={32} />
              )}
            </div>
            <div className="text-[#1D2939] text-sm font-medium leading-snug">
              {title}
            </div>
          </div>
        ))}
      </div>

      {/* What is Soft Tissue Screening */}
      <div className="mt-12 rounded-3xl bg-[#FCF5FE] p-4 sm:p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-80 overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt="detailed image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <h3 className="text-[#101828] text-2xl md:text-3xl lg:text-4xl font-normal max-w-md mb-4">
              {header}
            </h3>
            <p className="text-[#475467] text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
