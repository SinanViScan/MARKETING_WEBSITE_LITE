"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/button";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import TwitterIcon from "@/components/ui/icons/TwitterIcon";
import LinkedInIcon from "@/components/ui/icons/LinkedInIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Jessica Morgan",
      role: "Radiologist",
      image: "/about-us/team-member.avif",
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      role: "CEO",
      image: "/about-us/team-member.avif",
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      role: "Founder",
      image: "/about-us/team-member.avif",
    },
    {
      id: 4,
      name: "Dr. Emily Davis",
      role: "Advisor",
      image: "/about-us/team-member.avif",
    },
    {
      id: 5,
      name: "Dr. Robert Wilson",
      role: "Radiologist",
      image: "/about-us/team-member.avif",
    },
    {
      id: 6,
      name: "Dr. Lisa Anderson",
      role: "Dental Surgeon",
      image: "/about-us/team-member.avif",
    },
    {
      id: 7,
      name: "Dr. David Kim",
      role: "Orthodontist",
      image: "/about-us/team-member.avif",
    },
    {
      id: 8,
      name: "Dr. Maria Rodriguez",
      role: "Pediatric Dentist",
      image: "/about-us/team-member.avif",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(5);

  // Calculate how many cards can be visible based on actual container width
  const calculateVisibleCards = (width: number) => {
    const cardWidth = 280; // Fixed card width
    const gap = 32; // Gap between cards
    const padding = 32; // Left and right padding (16px each)

    const availableWidth = width - padding;
    const cardsThatFit = Math.floor(availableWidth / (cardWidth + gap));

    return Math.max(1, Math.min(cardsThatFit, 5)); // At least 1, max 5
  };

  // Update container width and visible card count using ResizeObserver (avoids forced reflow)
  useEffect(() => {
    const container = document.querySelector(".team-carousel-container") as HTMLElement;
    if (!container) return;

    // Use ResizeObserver instead of window resize + clientWidth to avoid forced reflow
    const resizeObserver = new ResizeObserver((entries) => {
      // Batch DOM reads using requestAnimationFrame
      requestAnimationFrame(() => {
        for (const entry of entries) {
          const width = entry.contentRect.width;
          setVisibleCardCount(calculateVisibleCards(width));
        }
      });
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const nextSlide = () => {
    const maxIndex = Math.max(0, teamMembers.length - visibleCardCount);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const canGoNext =
    currentIndex < Math.max(0, teamMembers.length - visibleCardCount);
  const canGoPrev = currentIndex > 0;

  return (
    <section className="py-10 max-sm:py-6 lg:py-20 bg-transparent">
      <div className="responsive-container">
        {/* Header */}
        <div className="mb-3 max-sm:mb-4 ">
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
              Our Team
            </span>
            <span className="text-xs text-gray-500 font-medium">(05)</span>
          </div>
          <hr className="border-gray-200 mb-8 " />
          <div className="grid md:grid-cols-2 gap-4 xl:gap-6 max-sm:gap-4 max-md:justify-center items-start">
            <div>
              <h2 className="section-header max-md:text-center">
                Meet our &nbsp;
                <span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Specialists
                </span>
              </h2>
            </div>
            <div className="flex max-sm:justify-center">
              <p className="section-subtext max-md:text-center">
                Get to know our team of qualified radiologists
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Team Button */}
        <div className="flex justify-start max-md:justify-center my-7">
          <Button variant="primary" size="md">
            Join Our Team
            <div className="bg-white rounded-full p-1.5 ml-2">
              <ArrowRight className="w-4 h-4 text-black" />
            </div>
          </Button>
        </div>

        {/* Team Members Grid */}
      </div>

      {/* Team Members Display */}
      <div className="relative">
        {/* Mobile: Horizontal scrolling */}
        <div className="block sm:hidden">
          <div className="team-carousel-container flex gap-4 overflow-x-auto pb-4 scrollbar-hide pl-4 pr-4 py-8 animate-fade-in-up delay-800">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-[280px] relative z-10 animate-fade-in-right hover-lift"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer p-2 hover-scale">
                  {/* Image */}
                  <div
                    className="relative h-40 sm:h-56 rounded-3xl"
                    style={{
                      background:
                        "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-lg sm:text-base font-medium text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {member.role}
                      </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-colors">
                        <LinkedInIcon className="text-white" width={16} height={15} />
                      </div>
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
                        style={{
                          background:
                            "linear-gradient(white, white) padding-box, linear-gradient(292.18deg, #EBB5F3 10.07%, #FEF2F2 44.68%, #FEE2E1 52.35%, #C59BC7 92.06%) border-box",
                          border: "1px solid transparent",
                          borderRadius: "50%",
                        }}
                      >
                        <InstagramIcon className="text-slate-900" width={14} height={14} />
                      </div>
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
                        style={{
                          background:
                            "linear-gradient(white, white) padding-box, linear-gradient(292.18deg, #EBB5F3 10.07%, #FEF2F2 44.68%, #FEE2E1 52.35%, #C59BC7 92.06%) border-box",
                          border: "1px solid transparent",
                          borderRadius: "50%",
                        }}
                      >
                        <TwitterIcon className="text-slate-900" width={14} height={14} />
                      </div>
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
                        style={{
                          background:
                            "linear-gradient(white, white) padding-box, linear-gradient(292.18deg, #EBB5F3 10.07%, #FEF2F2 44.68%, #FEE2E1 52.35%, #C59BC7 92.06%) border-box",
                          border: "1px solid transparent",
                          borderRadius: "50%",
                        }}
                      >
                        <FacebookIcon className="text-slate-900" width={11} height={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid with navigation */}
        <div className="hidden sm:block">
          <div className="team-carousel-container flex gap-8 overflow-hidden px-4 mb-8 py-8 pr-4 pb-8 animate-fade-in-up delay-800">
            <div
              className="flex gap-8 carousel-slide"
              style={{ 
                transform: `translateX(-${currentIndex * (280 + 32)}px)`,
                willChange: 'transform'
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group cursor-pointer flex-shrink-0 w-[280px] relative z-10 animate-fade-in-right hover-lift"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden group-hover:scale-105 transition-transform duration-300 p-1 hover-scale">
                    {/* Image */}
                    <div
                      className="relative h-40 sm:h-56 rounded-3xl"
                      style={{
                        background:
                          "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="text-lg sm:text-base font-medium text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          {member.role}
                        </p>
                      </div>

                      {/* Social Icons */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-colors">
                          <LinkedInIcon className="text-white" width={16} height={15} />
                        </div>
                        <div
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
                          style={{
                            background:
                              "linear-gradient(white, white) padding-box, linear-gradient(292.18deg, #EBB5F3 10.07%, #FEF2F2 44.68%, #FEE2E1 52.35%, #C59BC7 92.06%) border-box",
                            border: "1px solid transparent",
                            borderRadius: "50%",
                          }}
                        >
                          <InstagramIcon className="text-slate-900" width={14} height={14} />
                        </div>
                        <div
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
                          style={{
                            background:
                              "linear-gradient(white, white) padding-box, linear-gradient(292.18deg, #EBB5F3 10.07%, #FEF2F2 44.68%, #FEE2E1 52.35%, #C59BC7 92.06%) border-box",
                            border: "1px solid transparent",
                            borderRadius: "50%",
                          }}
                        >
                          <TwitterIcon className="text-slate-900" width={14} height={14} />
                        </div>
                        <div
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
                          style={{
                            background:
                              "linear-gradient(white, white) padding-box, linear-gradient(292.18deg, #EBB5F3 10.07%, #FEF2F2 44.68%, #FEE2E1 52.35%, #C59BC7 92.06%) border-box",
                            border: "1px solid transparent",
                            borderRadius: "50%",
                          }}
                        >
                          <FacebookIcon className="text-slate-900" width={11} height={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 animate-fade-in-up delay-1200">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              aria-label="Previous team members"
              className={`w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-colors hover-scale ${
                !canGoPrev ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft className="w-4 h-4 text-slate-950" />
            </button>
            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              aria-label="Next team members"
              className={`w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-colors hover-scale ${
                !canGoNext ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
