"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Carousel from "../ui/Carousel";
import Button from "@/components/ui/button";

const CTASection = () => {
  // Color-only carousel items
  const colorItems = [
    { id: 1, color: "bg-red-500" },
    { id: 2, color: "bg-blue-500" },
    { id: 3, color: "bg-green-500" },
    { id: 4, color: "bg-purple-500" },
    { id: 5, color: "bg-orange-500" },
    { id: 6, color: "bg-cyan-500" },
    { id: 7, color: "bg-pink-500" },
    { id: 8, color: "bg-indigo-500" },
  ];

  const handleItemClick = (item: {
    id: string | number;
    color?: string;
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    onClick?: () => void;
  }) => {
    console.log("Clicked carousel item:", item);
  };

  return (
    <section
      className="py-12 lg:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(276.28deg, #FEF2F2 0%, #FFFFFF 99.26%)",
      }}
    >
      <div className="">
        <div className="flex flex-col items-center gap-8">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left responsive-margin w-full">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 flex items-center flex-col w-full ">
                <h2 className="text-responsive-2xl lg:mb-8 lg:text-[58px] font-medium leading-tight text-[#101828]">
                  Let&apos;s Build Something That Matters
                </h2>
                <p className="text-responsive-sm lg:text-2xl font-normal text-[#475467] leading-relaxed">
                  Join us in creating meaningful impact through innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Color Carousel */}
          <div className="mt-8 lg:mt-10 w-full overflow-hidden">
            <Carousel
              items={colorItems}
              showText={false}
              showImage={false}
              showOnlyImage={false}
              mobileCardWidth={180}
              mobileCardHeight={180}
              desktopCenterCardWidth={370}
              desktopCenterCardHeight={450}
              desktopAdjacentCardWidth={270}
              desktopAdjacentCardHeight={280}
              onItemClick={handleItemClick}
            />
          </div>
          <div className="flex responsive-margin flex-row items-center max-sm:gap-2 gap-4 lg:gap-6">
            <Button 
              variant="primary" 
              size="sm" 
              className="py-2"
            >
              <span className="text-responsive-sm lg:text-sm font-medium">
                Apply Now
              </span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 bg-white rounded-full flex items-center justify-center ml-1">
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#101828]" />
              </div>
            </Button>

            <Button 
              variant="dashed" 
              size="sm" 
              className="py-2"
            >
              <span className="text-responsive-sm lg:text-sm font-normal">
                Upload Resume
              </span>
            </Button>
          </div>

          <p className="text-responsive-sm lg:text-xl font-normal text-black">
            Questions? Email us at{" "}
            <span className="text-primary-800">
              careers@viscandiagnostics.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
