"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Button from "../ui/button";
import { ArrowRight } from "lucide-react";
export type Feature = {
  title: string;
  // Either provide a public path to an SVG or an inline SVG node
  svg?: string; // e.g. "/icons/secure.svg" under public/
  svgNode?: ReactNode; // inline <svg>...</svg>
  bg: string;
  description?: string;
};


export interface OurServiceSectionProps {
  pageNumber?: string;
  subtitle: string;
  imageSrc: string;
}



export default function OurService({ pageNumber = "02" ,subtitle, imageSrc}: OurServiceSectionProps) {
  const features: Feature[] = [
    {
      title: "In-House Convenience",
      description:
        "Offer patients on-site scanning, eliminating referrals and reducing patient wait times.",
      svg: "/doctors/icon-1.svg",
      bg: "bg-[#F6F3FF]",
    },
    {
      title: "Faster Diagnosis & Planning",
      description:
        "Get immediate access to high-resolution scans, enabling rapid and informed treatment decisions.",
      svg: "/doctors/icon-1.svg",
      bg: "bg-[#F6F3FF]",
    },
    {
      title: "Enhanced Revenue Stream",
      description:
        "Increase your practice's profitability by offering specialized diagnostic services.",
      svg: "/doctors/icon-2.svg",
      bg: "bg-[#F6F3FF]",
    },
    {
      title: "Seamless Integration",
      description:
        "The machine's technology is designed to work seamlessly, providing an end-to-end digital workflow from scan to report.",
      svg: "/doctors/icon-2.svg",
      bg: "bg-[#F6F3FF]",
    },
  ];
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
            Our Services
          </span>
          <span className="text-xs text-gray-500 font-medium">
            ({pageNumber})
          </span>
        </div>
        <hr className="border-gray-200" />
      </div>

      <div className="block md:hidden">
        <div className="text-center">
            <h2 className="section-header text-white mb-6">
             Empower Your Practice
            <br />
            with
            <span
                className="text-transparent font-medium"
                style={{
                background:
                    "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                }}
            >
            Vi-Scan
            </span>{" "}
            </h2>
            <p className="section-subtext text-gray-300 mb-6 max-w-lg mx-auto">
            Own a Vi-Scan CBCT Machine and Bring Advanced Diagnostics In-House.
            </p>
            <div className="flex justify-center">
            <Link href="/services">
                <Button
                variant="primary" 
                size="sm" 
                >
                View All Services
                <div className="bg-white rounded-full p-1.5 ml-2">
                    <ArrowRight className="w-4 h-4 text-black" />
                </div>
                </Button>
            </Link>
            </div>
        </div>
        </div>

          {/* Desktop Layout (md and above) */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="section-header text-white">
                Empower Your Practice
                <br />
                with
                <span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Vi-Scan
                </span>{" "}
              </h2>
              <div className="flex flex-col sm:flex-row max-sm:mx-auto gap-4 mt-6 max-w-[165px]">
                <Link href="/services">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    // fullWidth
                  >
                    View All Services
                    <div className="bg-white rounded-full p-1.5 ml-2">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="section-subtext text-gray-300">
              Own a Vi-Scan CBCT Machine and Bring Advanced Diagnostics In-House.
              </p>
            </div>
          </div>

      <div className="mt-12 rounded-3xl bg-[#FCF5FE] p-4 sm:p-6 lg:p-8 xl:p-10  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="relative w-full h-full max-sm:h-64 xl:h-64 overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt="Soft tissue screening"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <p className="text-[#475467] xl:p-6 text-sm md:text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Why Own a Vi-Scan CBCT Machine? */}
      <div className="mt-12">
        <div className="text-center md:text-left">
          <h3 className="text-2xl max-sm:max-w-[270px] max-sm:mx-auto md:text-3xl lg:text-4xl font-medium text-[#101828]">
            Why Own a Vi-Scan
            <br className="hidden sm:block" />
            <span
              className="text-transparent"
              style={{
                background:
                  "linear-gradient(252.16deg, #EBB5F3 17.42%, #FEF2F2 40.88%, #FEE2E1 46.08%, #C59BC7 73.01%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              &nbsp;CBCT Machine?
            </span>
          </h3>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ title, description, svg, bg }) => (
            <div
              key={title}
              className={[
                "rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col gap-2",
                bg,
              ].join(" ")}
            >
              <div className="w-8 h-8 rounded-xl bg-white/80 flex items-center justify-center">
                {svg && (
                  <Image src={svg} alt={title} width={24} height={24} />
                )}
              </div>
              <div className="text-[#101828] text-sm md:text-base font-medium">
                {title}
              </div>
              <p className="text-[#475467] text-xs md:text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="mt-6 flex justify-center">
          <Link href="/services">
            <Button variant="primary" size="sm">
              Learn More About Machine Ownership
              <div className="bg-white rounded-full p-1.5 ml-2">
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
