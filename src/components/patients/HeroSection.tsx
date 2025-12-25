"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import Button from "@/components/ui/button";

export default function PatientHeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(66.94deg, #EBB5F3 0%, #FEF2F2 54.36%, #FEE2E1 66.42%, #C59BC7 128.81%)",
      }}
    >
      {/* dotted overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16,24,40,0.2) 1px, rgba(0,0,0,0) 1px)",
          backgroundSize: "14px 14px",
          backgroundPosition: "0 0",
        }}
      />
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10 lg:min-h-[560px]">
          {/* Left content */}
          <div className="px-2 lg:px-6 py-4 lg:pl-8">
            <div className="flex max-lg:justify-center items-center mb-5 gap-3">
              <div className="relative w-[42px] h-[42px]">
                <Image
                  src="/doctors/doctor-hero-icon.svg"
                  alt="Diagnostics Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#101828]">Vi-Scan Diagnostics provides</h3>
            </div>

            <h1 className="text-[#101828] mt-2 sm:text-4xl max-lg:text-center text-3xl md:text-5xl xl:text-6xl font-medium leading-tight">
              Hassle-Free Scans, Expert Reports You Can Rely On
            </h1>
            <p className="mt-4 max-lg:text-center max-lg:mx-auto text-sm md:text-base text-[#475467] max-w-xl">
              High-resolution scans with lower radiation—ideal for dental implant planning, orthodontics, endodontics, OMS, ENT & sleep apnea.
            </p>

            <div className="mt-5 flex max-lg:justify-center">
              <Button variant="primary" size="md" className="px-3 flex max-lg:mx-auto text-sm shadow-sm">
                <div className="bg-white rounded-full p-2 mr-1.5">
                  <CalendarDays className="w-3 h-3 text-primary-900" />
                </div>
                Book Your Scan Now
              </Button>
            </div>
          </div>

          {/* Right: single hero image (desktop and mobile) */}
          <div className="relative order-2 lg:order-none w-full mt-8 lg:mt-0">
            <div className="relative mx-auto w-full h-72  sm:h-96  md:h-[460px]  lg:h-[520px]  overflow-hidden ">
              <Image src="/patients/patients-hero-img.webp" alt="Patient" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
