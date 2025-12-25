"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ButtonWithArrow from "@/components/ui/button-with-arrow";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface SparkleData {
  size: number;
  left: number;
  top: number;
  opacity: number;
  delay: number;
  duration: number;
}

const ProductSection = () => {
  const [sparkles, setSparkles] = useState<SparkleData[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted on client side
    setIsMounted(true);
    // Generate random sparkle data only on the client side
    const sparkleData: SparkleData[] = Array.from({ length: 40 }).map(() => ({
      size: Math.random() * 8 + 4, // Size between 4-12px
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.3,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setSparkles(sparkleData);
  }, []);

  return (
    <section className="relative  overflow-hidden">
      {/* This wrapper keeps image fixed in position */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 w-full max-w-[600px] h-[280px] max-xs:h-[200px] lg:h-[350px] xl:h-[400px] mt-14 -ml-32 xs:-ml-40 sm:-ml-56 xs:mt-8 sm:mt-12 md:mt-36 xl:mt-28">
        <Image
          src="/home/hero/hero-img.webp"
          alt="Dental Imaging"
          fill
          className="object-contain rotate-[19.99deg]"
          loading="lazy"
        />
      </div>

      {/* Section content below it */}
      <div
        className="lg:mt-20 mt-16 relative pt-56 lg:pt-72 custom-clip z-0"
        style={{ background: "#101828" }}
      >
        {/* Sparkles Background - only render after mount to avoid hydration mismatch */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sparkles.map((sparkle, i) => (
              <svg
                key={i}
                className="absolute sparkle"
                width={sparkle.size}
                height={sparkle.size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  left: `${sparkle.left}%`,
                  top: `${sparkle.top}%`,
                  opacity: sparkle.opacity,
                  animationDelay: `${sparkle.delay}s`,
                  animationDuration: `${sparkle.duration}s`,
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.6029 1.10088C13.0578 -0.366961 10.9422 -0.366961 10.3971 1.10088L7.92328 7.77091L1.12247 10.1971C-0.374156 10.7318 -0.374156 12.8066 1.12247 13.3413L7.92328 15.7675L10.3971 22.4376C10.9422 23.9054 13.0578 23.9054 13.6029 22.4376L16.0767 15.7675L22.8775 13.3413C24.3742 12.8066 24.3742 10.7318 22.8775 10.1971L16.0767 7.77091L13.6029 1.10088Z"
                  fill="white"
                />
              </svg>
            ))}
          </div>
        )}
        <div className="relative z-10">
          <AnimatedSection delay={0.1}>
            <div className="flex justify-center">
              <h2 className="text-responsive-4xl text-center font-medium text-white leading-tight mb-2">
                Unlock Visual Clarity
                <br />
                <span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(251.6deg, #ED91FB 21.52%, #FFE1E1 50.16%, #FFD4D2 56.51%, #C76ECA 89.38%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Understand Your Scan Instantly
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-responsive-base max-w-xl text-center mx-auto max-sm:text-center max-sm:px-8 md:px-8 lg:pr-0 text-white mt-2 lg:mt-5 leading-relaxed">
              Analytics for Everyone and Transform Your Data into Actionable
              Insights
            </p>
          </AnimatedSection>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://aidev.viscandiagnostics.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row gap-4">
                <ButtonWithArrow
                  variant="secondary"
                  size="sm"
                  className="px-3 py-1.5"
                  arrowHoverAnimation={true}
                >
                  Take a Demo
                </ButtonWithArrow>
              </div>
            </a>
            {/* <div className="flex flex-row gap-4">
              <Button
                variant="transparent"
                size="sm"
                className="px-6 py-1.5"
                // fullWidth
              >
                Learn More
              </Button>
            </div> */}
          </div>
        </div>

        {/* Image positioned below buttons */}
        <div className="relative mt-6 h-[360px] max-md:h-[280px] w-full flex justify-center items-center overflow-hidden">
          {/* Left back tablet */}
          <div className="absolute z-0 -translate-x-[160px] rotate-[-8deg] opacity-55">
            <div className="relative w-[520px] h-[320px] max-md:w-[340px] max-md:h-[210px]">
              <Image
                src="/home/ai/dashboard.avif"
                alt="AI dashboard left"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right back tablet */}
          <div className="absolute z-0 translate-x-[160px] rotate-[8deg] opacity-55">
            <div className="relative w-[520px] h-[320px] max-md:w-[340px] max-md:h-[210px]">
              <Image
                src="/home/ai/dashboard.avif"
                alt="AI dashboard right"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Center main tablet */}
          <div className="relative z-10">
            <div className="relative w-[600px] h-[360px] max-md:w-[380px] max-md:h-[240px]">
              <Image
                src="/home/ai/dashboard.avif"
                alt="AI dashboard main"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>


        {/* Gradient black overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 sm:h-[300px] h-[150px] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>
    </section>
  );
};

export default ProductSection;
