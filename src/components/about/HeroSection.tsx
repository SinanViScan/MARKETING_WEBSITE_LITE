import React from "react";
import Image from "next/image";
import ButtonWithArrow from "@/components/ui/button-with-arrow";

const HeroSection = () => {
  return (
    <section className="relative h-[254px] mt-20 sm:h-[422px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about-us/about-us-hero.avif"
          alt="Dental Diagnostics Hero"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Top overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="about-us-header font-normal text-white leading-tight mb-4 sm:mb-6">
            Diagnostics you can trust,
            <br />
            care you deserve
          </h1>
          <p className="about-us-header-subtext text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Delivering fast, accurate, and accessible diagnostic services
            powered by technology and compassion.
          </p>
          <ButtonWithArrow 
            variant="primary" 
            size="lg" 
            className="max-md:text-sm px-4"
            arrowSize="w-3 h-3 sm:w-4 sm:h-4"
            arrowCirclePadding="p-1 sm:p-1.5"
          >
            Partner with us
          </ButtonWithArrow>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
