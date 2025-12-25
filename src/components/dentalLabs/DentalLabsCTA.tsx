import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

export default function DentalLabsCTA() {
  return (
    <section className="p-4 sm:p-6 lg:p-8">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/dental-labs/cta-background.webp"
            alt="Partnership Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile SVG Overlay */}
        <div className="lg:hidden absolute inset-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 361 434"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M-29 -6.91895L268.444 -6.91895L423 440.081L125.556 440.081L-29 -6.91895Z"
              fill="#440C46"
              fillOpacity="0.7"
            />
          </svg>
        </div>

        {/* Desktop SVG Overlay */}
        <div className="hidden lg:block absolute inset-0 left-0 md:-left-14">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1014 707"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[60%] h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M-318.25 0.77832L509.765 0.77832L1013.34 706.778H185.326L-318.25 0.77832Z"
              fill="#440C46"
              fillOpacity="0.7"
            />
          </svg>
        </div>

        {/* Mobile Layout - Two rows */}
        <div className="lg:hidden relative z-10  h-full grid grid-rows-2">
          {/* Top row - Content */}
          <div className="flex items-center max-sm:justify-center sm:pl-28 py-8 sm:py-12 lg:py-16">
            <div className="max-w-sm">
              {/* Main Headline */}
              <h2 className="text-xl sm:text-3xl font-medium text-white leading-tight mb-4">
                Empowering
                <br />
                Diagnostics
                <br />
                Together
              </h2>

              {/* Sub-headline */}
              <p className="text-sm text-white/90 leading-relaxed mb-6 max-w-[230px] sm:max-w-xs">
                Expand your reach, boost revenue, and simplify operations with our tech-driven diagnostic platform.
              </p>

              {/* CTA Button */}
              <Button className="bg-[#440C46] text-white px-3 py-2 rounded-full hover:bg-[#5a1a5d] transition-colors font-semibold text-sm group">
                <span>Partner with Us</span>
                <div className="p-2  rounded-full bg-white ml-2"><ArrowRight className="w-4 h-4 group-hover:translate-x-1  text-primary-900  transition-transform" /></div>
              </Button>
            </div>
          </div>

          {/* Bottom row - Image */}
          <div className="flex items-end justify-center">
            <div className="relative w-full h-full xl:max-w-sm">
              <Image
                src="/dental-labs/dental-labs-cta-img.webp"
                alt="Partnership Handshake"
                fill
                className="object-contain object-bottom "
                priority
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:block relative z-10 h-full ">
          {/* Handshake Image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-full">
            <Image
              src="/dental-labs/dental-labs-cta-img.webp"
              alt="Partnership Handshake"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Content positioned within SVG area */}
          <div className="h-full flex items-center">
            <div className="container mx-auto pl-0 xl:pl-16  py-8 sm:py-12 lg:py-16">
              <div className="max-w-lg lg:pl-8 xl:pl-0  xl:max-w-xl">
                {/* Main Headline */}
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight mb-6">
                  Empowering
                  <br />
                  Diagnostics
                  <br />
                  Together
                </h2>

                {/* Sub-headline */}
                <p className="text-xs lg:text-sm text-white/90 leading-relaxed mb-8 max-w-sm lg:max-w-sm">
                  Expand your reach, boost revenue, and simplify operations with our tech-driven diagnostic platform.
                </p>

                {/* CTA Button */}
                <Button className="bg-[#440C46] text-white px-4 py-2 rounded-full hover:bg-[#5a1a5d] transition-colors font-semibold text-xs group">
                  <span>Partner with Us</span>
                  <div className="p-2  rounded-full bg-white ml-2"><ArrowRight className="w-4 h-4 group-hover:translate-x-1  text-primary-900  transition-transform" /></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
