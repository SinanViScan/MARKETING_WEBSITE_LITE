"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

const RadiologistSpecialSection = () => {
  const opportunities = [
    {
      icon: "network",
      title: "Join our diagnostic network across centers and partners",
    },
    {
      icon: "xray",
      title:
        "Annotate real-world CBCT & OPG cases to train cutting-edge AI tools",
    },
    {
      icon: "ai",
      title: "Collaborate on Vi.AI, our in-house dental diagnostic engine",
    },
    {
      icon: "remote",
      title: "Remote & flexible roles available with competitive pay",
    },
  ];

  const renderIcon = (iconType: string) => {
    const iconClasses = "w-12 h-12 lg:w-[60px] lg:h-[60px]";

    switch (iconType) {
      case "network":
        return (
          <div
            className={`${iconClasses} bg-tarnsparent rounded-full flex items-center justify-center`}
          >
            <Image
              src="/career/network.svg"
              alt="Network"
              width={40}
              height={40}
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
          </div>
        );
      case "xray":
        return (
          <div
            className={`${iconClasses} bg-tarnsparent rounded-full flex items-center justify-center`}
          >
            <Image
              src="/career/xray.svg"
              alt="X-Ray"
              width={40}
              height={40}
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
          </div>
        );
      case "ai":
        return (
          <div
            className={`${iconClasses} bg-tarnsparent rounded-full flex items-center justify-center`}
          >
            <Image
              src="/career/ai.svg"
              alt="AI"
              width={40}
              height={40}
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
          </div>
        );
      case "remote":
        return (
          <div
            className={`${iconClasses} bg-tarnsparent rounded-full flex items-center justify-center`}
          >
            <Image
              src="/career/remote.svg"
              alt="Remote"
              width={40}
              height={40}
              className="w-8 h-8 lg:w-10 lg:h-10"
            />
          </div>
        );
      default:
        return (
          <div
            className={`${iconClasses} bg-white rounded-full flex items-center justify-center`}
          >
            <div className="w-6 h-6 bg-purple-600 rounded"></div>
          </div>
        );
    }
  };

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="responsive-margin">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Mobile: Image on top, Content on bottom */}
          <div className="lg:hidden ">
            {/* Image Section - Separate Card */}
            <div className="bg-gray-100 rounded-t-[22px] h-[300px] relative overflow-hidden">
              <Image
                src="/career/radiology.webp"
                alt="Dental Imaging Machine"
                fill
                className="object-cover rounded-t-[22px]"
              />
            </div>

            {/* Content Section - Separate Card */}
            <div className="bg-[#231B26] rounded-b-[22px] p-6 flex flex-col justify-center">
              <div className="text-white text-center">
                {/* Main Heading */}
                <div className="mb-6">
                  <h2 className="text-responsive-2xl text-start font-medium leading-tight mb-4">
                    Are you a{" "}
                    <span
                      className="font-bold"
                      style={{
                        background:
                          "linear-gradient(251.6deg, #ED91FB 21.52%, #FFE1E1 50.16%, #FFD4D2 56.51%, #C76ECA 89.38%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Dental Radiologist?
                    </span>
                  </h2>
                </div>

                {/* Opportunities Section */}
                <div className="mb-6">
                  <h3 className="text-responsive-lg text-start font-semibold mb-4 text-white">
                    Opportunities Include
                  </h3>

                  <div className="space-y-4">
                    {opportunities.map((opportunity, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <div className="flex-shrink-0">
                          {renderIcon(opportunity.icon)}
                        </div>
                        <p className="text-white text-start text-responsive-sm leading-relaxed">
                          {opportunity.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <Button 
                  variant="white" 
                  size="sm" 
                >
                  <span className="text-responsive-sm font-medium">
                    Apply Now
                  </span>
                  <div className="w-6 h-6 bg-[#440C46] ml-1 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop: Side by side layout */}
          <div className="hidden lg:flex flex-1 relative">
            <div className="flex-1 bg-gray-100 rounded-[22px] h-[600px] xl:h-[700px] relative overflow-hidden">
              <Image
                src="/career/radiology.webp"
                alt="Dental Imaging Machine"
                fill
                className="object-cover rounded-[22px]"
              />
            </div>
            <div className="absolute top-0 right-0 h-full w-[55%]">
              <div className="bg-[#231B26]/30 rounded-[22px] p-6 lg:p-8 h-auto lg:h-[600px] flex flex-col justify-center">
                <div className="text-white text-center lg:text-left xl:p-6">
                  {/* Main Heading */}
                  <div className="mb-6 lg:mb-8">
                    <h2 className="text-responsive-2xl lg:text-responsive-4xl font-medium leading-tight mb-4">
                      Are you a{" "}
                      <span
                        className="font-bold max-lg:hidden"
                        style={{
                          background:
                            "linear-gradient(251.6deg, #ED91FB 21.52%, #FFE1E1 50.16%, #FFD4D2 56.51%, #C76ECA 89.38%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        <br />
                        Dental Radiologist?
                      </span>
                      <span
                        className="font-bold lg:hidden"
                        style={{
                          background:
                            "linear-gradient(251.6deg, #ED91FB 21.52%, #FFE1E1 50.16%, #FFD4D2 56.51%, #C76ECA 89.38%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        Dental Radiologist?
                      </span>
                    </h2>
                  </div>

                  {/* Opportunities Section */}
                  <div className="mb-6 lg:mb-8">
                    <h3 className="text-responsive-lg lg:text-responsive-xl font-semibold mb-4 lg:mb-6 text-white">
                      Opportunities Include
                    </h3>

                    <div className="max-lg:space-y-4 lg:grid lg:grid-cols-2 gap-4">
                      {opportunities.map((opportunity, index) => (
                        <div
                          key={index}
                          className="flex  items-center lg:items-start gap-1 lg:grid "
                        >
                          <div className="flex-shrink-0">
                            {renderIcon(opportunity.icon)}
                          </div>
                          <p className="text-white max-lg:text-start text-responsive-sm lg:text-responsive-base leading-relaxed">
                            {opportunity.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Button 
                    variant="white" 
                    size="sm" 
                    className="mx-auto lg:mx-0"
                  >
                    <span className="text-responsive-xs lg:text-responsive-sm font-medium">
                      Apply Now
                    </span>
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#440C46] rounded-full flex items-center justify-center ml-1">
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadiologistSpecialSection;
