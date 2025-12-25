"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import ButtonWithArrow from "@/components/ui/button-with-arrow";

interface VizPlatformSectionProps {
  pageNumber?: string;
}

export default function VizPlatformSection({ pageNumber = "03" }: VizPlatformSectionProps) {
  return (
    <section className="pt-16 responsive-margin">
      <div className="mx-auto">
        {/* Header: pill label, page number, divider */}
        <div className="mb-8">
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
              Viz Platform
            </span>
            <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
          </div>
          <hr className="border-gray-200" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
          <div>
            {/* Mobile/Tablet: center align header + subtext */}
            <div className="block md:hidden">
              <h2 className="section-header text-center">
                Seamless Tools for
                <br />
                <span
                  className="text-transparent"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Smarter
                </span>{" "}
                Diagnostics
              </h2>
              <p className="section-subtext  max-md:mx-auto text-center mt-2">
                Offer your dentists a seamless experience with easy scan uploads, remote
                tele-reporting support, and an online dashboard for patients to access
                reports anytime.
              </p>
            </div>

            {/* md+: header left, subtext right (two-column) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-1 gap-6 items-start">
              <h2 className="section-header md:mb-0">
                Seamless Tools for
                <br />
                <span
                  className="text-transparent"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Smarter
                </span>{" "}
                Diagnostics
              </h2>
              <p className="section-subtext md:mt-0">
                Offer your dentists a seamless experience with easy scan uploads, remote
                tele-reporting support, and an online dashboard for patients to access
                reports anytime.
              </p>
            </div>
            <div className="flex gap-4 mt-6 max-md:justify-center">
              <ButtonWithArrow 
                variant="secondary" 
                size="sm" 
                className="px-3 py-2"
                arrowColor="text-primary-900"
                arrowHoverAnimation={true}
              >
                Take a Demo
              </ButtonWithArrow>
              <Button variant="dashed" size="sm" className="px-6">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] max-h-[460px] rounded-xl overflow-hidden">
            <Image
              src="/viz/viz.avif"
              alt="Viz Platform Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

