"use client";

import { useState } from "react";
import Image from "next/image";
import ButtonWithArrow from "@/components/ui/button-with-arrow";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AppleIcon from "@/components/ui/icons/AppleIcon";
import GooglePlayIcon from "@/components/ui/icons/GooglePlayIcon";

const tabs = [
  "For Dentist",
  "For Patients",
  "Diagnostic Centers",
  "Insurance Provider",
  "Dental Labs",
];

const tabContent = {
  0: {
    title: (
      <>
        Elevate your{" "}
        <span
          className="text-transparent font-medium"
          style={{
            background:
              "linear-gradient(254.12deg, #EBB5F3 21.01%, #FEF2F2 35.28%, #FEE2E1 38.44%, #C59BC7 54.81%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Dental Practice
        </span>
        <br />
        effortlessly today
      </>
    ),
    description:
      "Access, view, and analyze all your dental radiology studies with our intuitive PACS & Web-Viewer, designed for seamless integration and clarity.",
    image: "/home/feature-section/platform-dashboard.png",
    imageAlt: "Platform Dashboard",
    testimonial: "Empower your practice with seamless diagnostics, on-demand, transparent and dependable.",
    testimonialImage: "/home/hero/Dentist 1.svg",
  },
  1: {
    title: (
      <>
        Experience{" "}
        <span
          className="text-transparent font-medium"
          style={{
            background:
              "linear-gradient(254.12deg, #EBB5F3 21.01%, #FEF2F2 35.28%, #FEE2E1 38.44%, #C59BC7 54.81%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Smarter
        </span>{" "}
        dental <br /> with confidence
      </>
    ),
    description:
      "Access, view, and understand all your dental scans and reports on the go . Designed to keep your treatment planning simple, clear, and always within reach.",
    image: "/home/feature-section/platform-dashboard.png",
    imageAlt: "Patient Dashboard",
    testimonial: "Get precise reports quickly for confident, convenient dental health management.",
    testimonialImage: "/home/hero/Dentist 1.svg",
  },
  2: {
    title: (
      <>
        Grow your{" "}
        <span
          className="text-transparent font-medium"
          style={{
            background:
              "linear-gradient(254.12deg, #EBB5F3 21.01%, #FEF2F2 35.28%, #FEE2E1 38.44%, #C59BC7 54.81%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Diagnostics Business
        </span>
        <br />
        faster than ever.
      </>
    ),
    description:
      "Organise all your vi-scan referrals, dental imaging, radiology workflow and patient management in one place with ViZ. Designed for unified records, seamless workflows, and maximum clarity.",
    image: "/home/feature-section/platform-dashboard.png",
    imageAlt: "Diagnostic Center Dashboard",
    testimonial: "Boost your volume, streamline operations, and gain comprehensive support.",
    testimonialImage: "/home/hero/Dentist 1.svg",
  },
  3: { 
    title: (
      <>
        Streamline{" "}
        <span
          className="text-transparent font-medium"
          style={{
            background:
              "linear-gradient(254.12deg, #EBB5F3 21.01%, #FEF2F2 35.28%, #FEE2E1 38.44%, #C59BC7 54.81%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Dental Claims
        </span>
        <br />
        effortlessly and securely
      </>
    ),
    description:
      "Access scans, review cases, and validate approvals with our secure interface, designed to streamline claims, support audits, and deliver consistent, clinical-grade clarity for all stakeholders",
    image: "/home/feature-section/platform-dashboard.png",
    imageAlt: "Insurance Provider Dashboard",
    testimonial: "Partner for accurate data, efficient processes, and improved claim management.",
    testimonialImage: "/home/hero/Dentist 1.svg",
  },
  4: {
    title: (
      <>
        Grow your
        <span
          className="text-transparent font-medium"
          style={{
            background:
              "linear-gradient(254.12deg, #EBB5F3 21.01%, #FEF2F2 35.28%, #FEE2E1 38.44%, #C59BC7 54.81%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Diagnostics Business
        </span>
        <br />
        faster than ever
      </>
    ),
    description:
      "Shift to comprehensive prosthetic planning with access to case details, DICOM files, images and a lot more. Designed to improve coordination, and ensure superior results.",
    image: "/home/feature-section/platform-dashboard.png",
    imageAlt: "Dental Lab Dashboard",
    testimonial: "Boost your volume, streamline operations, and gain comprehensive support.",
    testimonialImage: "/home/hero/Dentist 1.svg",
  },
};

export default function AboutUsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [displayedTab, setDisplayedTab] = useState(0);
  const content = tabContent[displayedTab as keyof typeof tabContent];
  const isEvenTab = displayedTab % 2 === 1; // Even index (1, 3) means swap layout

  const handleTabChange = (newIndex: number) => {
    if (newIndex === activeTab || isAnimating) return;
    
    setSlideDirection(newIndex > activeTab ? 'right' : 'left');
    setIsAnimating(true);
    setActiveTab(newIndex);
    
    // After slide-out animation, update content and slide back in
    setTimeout(() => {
      setDisplayedTab(newIndex);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  return (
    <section className="bg-white responsive-margin">
      <div className="mx-auto ">
        {/* Top Section: About Viz pill, section number, divider, heading, and description */}
        <div className="mb-12 max-sm:mb-8">
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
              About Viz
            </span>
            <span className="text-xs text-gray-500 font-medium">(02)</span>
          </div>
          <hr className="border-gray-200 mb-8 " />
          <div className="grid md:grid-cols-2 gap-8 max-sm:gap-4 max-md:justify-center items-start">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="section-header max-md:text-center">
                  ViZ: Your Intelligent
                  <br />
                  <span
                    className="text-transparent font-medium"
                    style={{
                      background:
                        "linear-gradient(#C59BC7 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Imaging
                  </span>{" "}
                  Hub
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex max-sm:justify-center">
                <p className="section-subtext max-md:text-center">
                  Our intuitive SaaS platform offers secure access to precise
                  reports and 3D DICOM viewers, enabling confident treatment
                  decisions and seamless patient management.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex justify-start max-sm:px-0 sm:px-0 xs:pl-8 sm:pl-0 max-lg:mb-8 max-w-full">
          <div className="bg-white max-md:border-r-0 border border-neutral-50 rounded-3xl max-md:rounded-r-none p-0.5 flex overflow-x-auto scrollbar-hide max-w-full relative">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => handleTabChange(index)}
                className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 relative z-10 ${
                  activeTab === index
                    ? "bg-[#440C46] text-white"
                    : "text-[#101828] hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div 
          className={`grid px-3 lg:grid-cols-2 mt-10 gap-16 items-center transition-all duration-500 ease-out ${isEvenTab ? "lg:grid-flow-col-dense" : ""}`}
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating 
              ? `translateX(${slideDirection === 'right' ? '-30px' : '30px'})` 
              : 'translateX(0)',
          }}
        >
          {/* Image Section - Swaps position for even tabs (indices 1, 3) */}
          <div className={`relative ${isEvenTab ? "lg:col-start-1 lg:order-1" : "lg:col-start-2 lg:order-2"}`}>
            {/* Mobile Image */}
            <div className="relative flex max-sm:my-5 lg:hidden max-sm:px-0 xs:px-8 sm:px-0 justify-end">
              <Image
                src={content.image}
                alt={content.imageAlt}
                width={600}
                height={300}
                className="max-sm:w-full object-contain max-sm:h-auto max-sm:rounded-2xl"
              />
            </div>
            {/* Desktop Image */}
            <div className={`relative hidden lg:flex ${isEvenTab ? "justify-start" : "justify-end"}`}>
              <Image
                src={content.image}
                alt={content.imageAlt}
                width={600}
                height={300}
              />
            </div>
          </div>

          {/* Text Content Section - Swaps position for even tabs (indices 1, 3) */}
          <div className={`space-y-8 max-w-full overflow-hidden ${isEvenTab ? "lg:col-start-2 lg:order-2" : "lg:col-start-1 lg:order-1"}`}>
            <div className="flex max-sm:flex-col max-sm:gap-4">
              <div className="flex flex-col space-y-6">
                <div className="space-y-6 lg:mt-5 xl:mt-0">
                  <h2 className="section-header max-sm:text-center font-medium">
                    {content.title}
                  </h2>
                  <p className="lg:text-base max-sm:text-center sm:pr-4 lg:pr-0 text-[#344054] leading-relaxed">
                    {content.description}
                  </p>
                </div>

                <div className="flex flex-col max-sm:self-center sm:flex-row gap-4 max-sm:max-w-28">
                  <ButtonWithArrow
                    variant="primary"
                    size="sm"
                    arrowSize="w-4 h-4 max-sm:w-3 max-sm:h-3"
                    arrowCirclePadding="p-2 max-sm:p-1"
                    arrowMargin="ml-1"
                    arrowHoverAnimation={true}
                  >
                    Know More
                  </ButtonWithArrow>
                </div>
                {/* App Store Buttons */}
                <div className="sm:flex max-lg:hidden lg:hidden flex-row max-sm:justify-center gap-4 max-sm:gap-2">
                  <div className="bg-white border border-black text-black px-4 py-2 max-sm:px-3 max-sm:py-1 rounded-lg flex items-center max-sm:space-x-2 space-x-3">
                    <AppleIcon className="text-black" width={20} height={24} />
                    <div>
                      <div className="text-responsive-xs">Download on the</div>
                      <div className="text-sm max-lg:text-xs font-semibold">
                        App Store
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-black text-black px-4 py-2 max-sm:px-3 max-sm:py-1 rounded-lg flex items-center max-sm:space-x-2 space-x-3">
                    <GooglePlayIcon width={21} height={24} />
                    <div>
                      <div className="text-responsive-xs">GET IT ON</div>
                      <div className="text-sm max-lg:text-xs font-semibold">
                        Google Play
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="max-sm:flex max-lg:hidden flex flex-row max-sm:justify-center gap-4 max-sm:gap-2">
              <div className="bg-white border border-black text-black px-4 py-2 max-sm:px-3 max-sm:py-1 rounded-lg flex items-center max-sm:space-x-2 space-x-3">
                <AppleIcon className="text-black" width={20} height={24} />
                <div>
                  <div className="app-store-label">Download on the</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </div>
              <div className="bg-white border border-black text-black px-4 py-2 max-sm:px-3 max-sm:py-1 rounded-lg flex items-center max-sm:space-x-2 space-x-3">
                <GooglePlayIcon width={21} height={24} />
                <div>
                  <div className="app-store-label">GET IT ON</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="flex max-sm:justify-center items-center space-x-0">
              <Image
                src={content.testimonialImage}
                alt="Testimonial"
                width={60}
                height={60}
                className="rounded-full"
              />
              <p className="text-[#475467]">
                {content.testimonial}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
