"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function DentalLabsHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/dental-labs/dental-labs-hero.webp"
        alt="Diagnostic Center"
        fill
        className="object-cover"
        priority
      />
      {/* Dark scrim for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content card anchored bottom-left */}
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="flex items-center h-[420px] sm:h-[520px] md:h-[640px]">
          <div className="max-w-xl sm:max-w-2xl">
          <div className="bg-white/20 backdrop-blur-[1px] ml-5 sm:ml-8 xl:ml-12 flex border-[1.5px] border-white/50 justify-center items-center w-fit px-4 py-2 mb-4 rounded-xl">
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

            <div className=" rounded-tr-3xl gap-3  px-5 sm:px-7 md:px-8 xl:px-12  shadow-sm">
              {/* Headline */}
              <h1 className="text-white text-2xl mt-5 sm:text-3xl md:text-5xl font-medium leading-tight">
                Power Smarter
                <br />
                Dental Workflows
              </h1>
              <p className="mt-3 text-white text-sm sm:text-base max-w-md">
              From accurate scans to STL-ready outputs, we help dental labs deliver faster, more precise prosthetics and
              </p>

              <div className="mt-5">
                <Button variant="primary" size="md" className="px-4">
                  <div className="bg-white rounded-full p-2 mr-2">
                    <Mail className="w-4 h-4 text-primary-900" />
                  </div>
                  Book Your Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
