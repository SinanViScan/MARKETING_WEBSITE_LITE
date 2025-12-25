"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Button from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

import HeroCardsSection from "./HeroCardsSection";
import PlayIcon from "../ui/icons/PlayIcon";

export default function HeroSection() {
  return (
    <section className="relative responsive-margin rounded-3xl overflow-hidden bg-gradient-desktop bg-gradient-mobile">
      <div className="max-w-[1600px]  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 xl:gap-12 gap-0  max-lg:gap-12 items-center  max-h-[1500px] lg:min-h-[800px] ">
          <div className="relative  lg:pl-6">
            {/* Row container */}
            <div className="flex items-center lg:mb-5 pt-5 lg:pt-0 justify-center lg:justify-start gap-3">
              {/* Icon Container */}
              <div className="relative  w-[40px] h-[50px] lg:w-[60px] lg:h-[60px]">
                <Image
                  src="/home/hero/dental-diagnostics.svg"
                  alt="Dental Diagnostics"
                  width={60}
                  height={60}
                />
                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary-900 mb-3 mt-[2px] lg:mt-3 ml-[1px] rounded-full p-2 lg:p-3 shadow-lg transform scale-75 lg:scale-90">
                    <PlayIcon className="text-white" width={15} height={15} />
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <AnimatedSection
                delay={0.05}
                initialY={10}
                initialScale={0.98}
                immediate
              >
                <div>
                  <h3 className="text-white font-light">
                    Vi-Scan Diagnostics Provides
                  </h3>
                </div>
              </AnimatedSection>
            </div>

            <div className="space-y-4 mb-5">
              <AnimatedSection
                delay={0.1}
                initialY={15}
                initialScale={0.98}
                immediate
              >
                <h1 className="sm:text-5xl text-4xl max-lg:text-center max-lg:mx-auto md:text-[55px] xl:text-[65px]  2xl:text-[80px] font-medium text-white leading-tight">
                  Diagnostics for
                  <br />a healthier smile.
                </h1>
              </AnimatedSection>
              <AnimatedSection
                delay={0.15}
                initialY={15}
                initialScale={0.98}
                immediate
              >
                <p className="lg:text-[17.5px] max-w-md lg:max-w-xl  sm:text-[16px] max-lg:mx-auto max-lg:text-center text-white opacity-80 ">
                  Precision imaging, detailed reports and effortless access —
                  all in one click. Confidence for dentists. Clarity for
                  patients. Designed for better care.
                </p>
              </AnimatedSection>
            </div>

            <Link href="/bookscan">
              <Button
                variant="white"
                size="lg"
                className="px-5 flex max-lg:mx-auto max-sm:text-sm  max-lg:text-center shadow-sm"
              >
                <CalendarDays className="w-4 h-4 mr-2" />
                Book Appointment Now
              </Button>
            </Link>
            {/* Cards and Locations Section for larger screens */}
            <HeroCardsSection variant="desktop" />
          </div>

          {/* Right Content - Interactive Elements */}
          <div className="relative">
            {/* Main hero image */}
            <div className="relative">
              {/* Background SVG with animation - positioned under teeth image only */}
              <div className="relative w-full max-w-[600px] mx-auto h-[300px]  md:h-[600px]">
                {/* Cards for smaller screens - positioned below teeth */}

                {/* Background SVG */}
                <div
                  style={{
                    animationDelay: "800ms",
                    animationTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                    animationDuration: "800ms",
                  }}
                >
                  <Image
                    src="/home/hero/Key=0ms.svg"
                    alt="Background Pattern"
                    fill
                    className="object-contain lg:object-cover  z-0"
                    priority
                  />
                </div>

                {/* Teeth Image */}
                <Image
                  src="/home/hero/hero-img.webp"
                  alt="Dental Imaging"
                  fill
                  className="object-contain z-10"
                  priority
                />
                <div className="absolute transform translate-x-3/3  max-xs:right-3  top-2  md:top-12 xl:right-10 lg:right-0 xs:right-24 sm:right-40 md:right-20 flex justify-center max-xs:z-0 items-center z-10 md:w-[200px] md:h-[200px] w-[100px] lg:w-[140px] lg:h-[170px] xs:w-[130px] xs:h-[130px] h-[150px] rounded-full md:p-4 p-2">
                  <div className="grid grid-rows-2 gap-1 w-full h-full">
                    <div className="flex items-center justify-center rounded-md">
                      <Image
                        src="/home/hero/01.png"
                        alt="Card 1"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex relative items-center justify-center bg-white rounded-md">
                      <Image
                        src="/home/hero/05.png"
                        alt="Card 2"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <div className="bg-slate-900 absolute flex justify-center items-center  -mt-1 -mr-2 rounded-full top-0 right-0 w-5 h-5">
                        <PlayIcon className="w-2 h-2 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stay Healthy */}
                <div className="absolute transform max-sm:translate-x-3/3 bottom-16   sm:bottom-20  md:bottom-36 xl:left-24 lg:left-12 left-1/4 sm:left-48 md:left-20 flex justify-center items-center z-10 bg-white/45 md:w-[150px] md:h-[150px] w-[90px] h-[90px] rounded-full md:p-4 p-2 ">
                  <div className="flex items-center md:space-x-2 space-x-1">
                    <div className="md:w-2 md:h-2 w-1 h-1 bg-yellow-400 rounded-full"></div>
                    <span className="md:text-xs text-10px font-normal">
                      Stay Healthy
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end  w-full">
                <div className=" flex flex-wrap lg:justify-end justify-center max-w-[400px] z-50 gap-x-2 gap-y-2">
                  {[
                    "Dentistry",
                    "Dental Implants",
                    "Aligners",
                    "Dental X-Ray",
                    "Oral Health",
                  ].map((category, index) => (
                    <div
                      key={category}
                      className={`px-4 py-1.5 rounded-full text-sm font-normal whitespace-nowrap ${
                        index === 1
                          ? "bg-white text-black"
                          : "bg-white/20 text-white border border-white"
                      }`}
                    >
                      {index !== 1 ? "●" : ""}&nbsp;{category}
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient element at bottom right */}
              <div
                className="max-lg:hidden absolute -bottom-20 -right-20 w-[652px] h-[252px] rounded-full opacity-80 blur-[282px] z-0"
                style={{
                  background: "#9B7A8A",
                }}
              ></div>
            </div>
            <HeroCardsSection variant="mobile" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 0.2;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 800ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
      `}</style>
    </section>
  );
}
