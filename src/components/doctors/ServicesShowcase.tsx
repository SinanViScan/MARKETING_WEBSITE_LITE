"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ShowcaseItem = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ServicesShowcase({ pageNumber = "06" }: { pageNumber?: string }) {
  const items: ShowcaseItem[] = [
    {
      id: 1,
      title: "Comprehensive Data Collection",
      description:
        "Seamlessly gather data from multiple sources including CRM systems, user feedback, website analytics, and more. Our platform integrates effortlessly with your existing tools to provide a holistic view of your business.",
      imageSrc: "/doctors/analytics.svg",
      imageAlt: "Revenue dashboard",
    },
    {
      id: 2,
      title: "Comprehensive Data Collection",
      description:
        "Seamlessly gather data from multiple sources including CRM systems, user feedback, website analytics, and more. Our platform integrates effortlessly with your existing tools to provide a holistic view of your business.",
      imageSrc: "/doctors/analytics.svg",
      imageAlt: "Target vs Reality chart",
    },
    {
      id: 3,
      title: "Comprehensive Data Collection",
      description:
        "Seamlessly gather data from multiple sources including CRM systems, user feedback, website analytics, and more. Our platform integrates effortlessly with your existing tools to provide a holistic view of your business.",
      imageSrc: "/doctors/analytics.svg",
      imageAlt: "Customer satisfaction",
    },
    {
      id: 4,
      title: "Comprehensive Data Collection",
      description:
        "Seamlessly gather data from multiple sources including CRM systems, user feedback, website analytics, and more. Our platform integrates effortlessly with your existing tools to provide a holistic view of your business.",
      imageSrc: "/doctors/analytics.svg",
      imageAlt: "KPI overview",
    },
  ];

  return (
    <section className="pt-20">
      <div className="mx-auto">
        {/* Top: pill + number + divider + heading and intro */}
        <div className="mb-12 responsive-margin">
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
            <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
          </div>
          <hr className="border-gray-200 mb-8" />

          <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="section-header text-[#101828]">
                Your Trusted Dental
                <br />
                Care
                <span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  &nbsp;Diagnostics
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 max-w-[185px]">
                <Link href="/services">
                  <Button variant="primary" size="sm">
                    View All Services
                    <div className="bg-white rounded-full p-1.5 ml-2">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="section-subtext text-[#475467]">
                At Vi-Scan Diagnostics, we’re India’s leading dental diagnostic chain, dedicated to empowering professionals with precise insights for healthy patient smiles.
              </p>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="block md:hidden">
            <div className="text-center">
              <h2 className="section-header text-[#101828] mb-4">
                Your Trusted Dental
                <br />
                Care
                <span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  &nbsp;Diagnostics
                </span>
              </h2>
              <p className="section-subtext text-[#475467] max-w-lg mx-auto">
                At Vi-Scan Diagnostics, we’re India’s leading dental diagnostic chain, dedicated to empowering professionals with precise insights for healthy patient smiles.
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/services">
                  <Button variant="primary" size="sm">
                    View All Services
                    <div className="bg-white rounded-full p-1.5 ml-2">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating image-text blocks */}
        <div className="responsive-margin space-y-20">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const imageOrder = isEven ? "order-1" : "order-2";
            const textOrder = isEven ? "order-2" : "order-1";
            
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-full mx-auto"
              >
                {/* Image */}
                <div className={`${imageOrder} relative flex justify-center`}>
                  <div
                    className="absolute -inset-x-6 -inset-y-4 rounded-[999px] blur-[110px] opacity-40 z-0 "
                    style={{
                      background:
                        "linear-gradient(252.16deg, #EBB5F3 17.42%, #FEF2F2 40.88%, #FEE2E1 46.08%, #C59BC7 73.01%)",
                    }}
                  />
                  <div className={`relative z-10 w-full sm:h-56 md:h-64 flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={360}
                      height={220}
                      className="w-full sm:w-[280px] md:w-[340px] h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`${textOrder} flex flex-col justify-center items-center md:items-start`}>
                  <div className="w-full max-w-full">
                    <h3 className="text-[#101828] text-xl md:text-2xl font-medium mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#475467] text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-5">
                      <Link href="/services">
                        <Button variant="primary" size="sm">
                          Learn More
                          <div className="bg-white rounded-full p-1.5 ml-2">
                            <ArrowRight className="w-4 h-4 text-black" />
                          </div>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


