import React from "react";
import Image from "next/image";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import TwitterIcon from "@/components/ui/icons/TwitterIcon";
import LinkedInIcon from "@/components/ui/icons/LinkedInIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import YouTubeIcon from "@/components/ui/icons/YouTubeIcon";

const JourneySection = () => {
  return (
    <section
      className="py-8 sm:py-10 lg:py-8 xl:py-0 rounded-2xl"
      style={{
        background:
          "radial-gradient(100% 286.18% at 100% 100%, #FCF5FE 0%, #F5F3F6 100%)",
      }}
    >
      <div className="responsive-container">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Content - Top on mobile, right on desktop */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Header */}
            <div className="mb-3 max-sm:mb-4">
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
                  Our Journey
                </span>
                <span className="text-xs text-gray-500 font-medium">(03)</span>
              </div>
              <hr className="border-gray-200 mb-8" />
              <h2 className="text-3xl sm:text-4xl lg:text-4xl max-lg:text-center xl:pr-28">
                Bringing clarity, connection, and &nbsp;
                <span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  confidence
                </span>
                &nbsp;to dental care.
              </h2>
            </div>

            <div className="bg-white rounded-2xl w-full sm:rounded-3xl p-4 sm:p-6 lg:p-8">
              <p className="subtexts max-lg:text-center w-full text-gray-700 leading-relaxed">
                Vi-Scan began with a simple belief: dental treatment becomes
                better when diagnosis becomes clearer. What started as a small
                diagnostic center is now a cloud-first platform powering the
                entire dental care journey. Today, Vi-Scan brings together
                dentists, radiologists, diagnostic centers, and patients on one
                connected platform — making dental care easier to plan,
                understand, and trust.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex max-lg:justify-center max-lg:pb-4 space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FacebookIcon
                  className="text-white"
                  width={11}
                  height={16}
                />
              </div>
              <div className="w-8 h-8 bg-black rounded-full flex cursor-pointer items-center justify-center hover:bg-gray-800 transition-colors">
                <TwitterIcon
                  className="text-white"
                  width={14}
                  height={14}
                />
              </div>
              <div className="w-8 h-8 bg-blue-700 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-800 transition-colors">
                <LinkedInIcon
                  className="text-white"
                  width={15}
                  height={14}
                />
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center cursor-pointer justify-center hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                }}
              >
                <InstagramIcon
                  className="text-white"
                  width={14}
                  height={14}
                />
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full cursor-pointer flex items-center justify-center hover:bg-red-700 transition-colors">
                <YouTubeIcon
                  className="text-white"
                  width={16}
                  height={12}
                />
              </div>
            </div>
          </div>

          {/* Image - Bottom on mobile, left on desktop */}
          <Image
            src="/about-us/ceo.avif"
            alt="Our Journey"
            width={600}
            height={600}
            priority
            fetchPriority="high"
            className="w-full h-auto order-2  lg:order-1   p-4 sm:pr-5  xl:p-20 "
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
          />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
