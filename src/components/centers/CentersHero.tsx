"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export default function CentersHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/centers/hero-img.webp"
        alt="Diagnostic Center"
        fill
        className="object-cover scale-x-[-1]"
        priority
      />
      {/* Dark scrim for readability */}
      <div className="absolute inset-0 bg-black/25" />
      {/* Primary tinted top overlay (solid, no gradient) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[#972D9E]/15" />

      {/* Content card anchored bottom-left */}
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="relative h-[420px] sm:h-[520px] md:h-[640px]">
          <div className="absolute left-0   bottom-0  max-w-xl sm:max-w-2xl">
          <div className="bg-white/20 backdrop-blur-[1px] ml-8 xl:ml-12 flex border-[1.5px] border-white/50 justify-center items-center w-fit px-4 py-2 mb-4 rounded-xl">
            <div className="flex max-lg:justify-center items-center gap-3">
              <div className="relative w-[40px] h-[40px]">
                <Image
                  src="/centers/hero-icon.svg"
                  alt="Diagnostics Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-xs">
                Vi-Scan Diagnostics provides
              </h3>
            </div>
          </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-tr-3xl  p-5 sm:p-7 md:p-8 xl:p-12  shadow-sm">
              {/* Headline */}
              <h1 className="text-[#101828] text-2xl mt-5 sm:text-3xl md:text-5xl font-medium leading-tight">
                Grow with Trusted
                <br />
                Radiology Support
              </h1>
              <p className="mt-3 text-[#475467] text-sm sm:text-base max-w-lg">
                Get access to a steady flow of referred patients and AI-driven
                reporting solutions
              </p>

              <div className="mt-5">
                <Button variant="primary" size="md" className="px-4">
                  <div className="bg-white rounded-full p-2 mr-2">
                    <CalendarDays className="w-4 h-4 text-primary-900" />
                  </div>
                  Book Your Scan Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
