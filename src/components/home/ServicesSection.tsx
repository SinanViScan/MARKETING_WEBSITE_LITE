"use client"
import Carousel from "../ui/Carousel";
import ButtonWithArrow from "@/components/ui/button-with-arrow";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
// import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServicesSection({pageNumber="05",showButton=true}:{pageNumber?:string,showButton?:boolean}) {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      id: 1,
      title: "Advanced 3D\nCBCT Scans",
      image: "/service/advanced-3D.avif",
      imageAlt: "Advanced 3D CBCT Scans",
      href: "/services/cbct"
    },
    {
      id: 2,
      title: "OPG",
      image: "/service/opg.avif",
      imageAlt: "OPG Imaging",
      href: "/services/opg"
    },
    {
      id: 3,
      title: "Soft Tissue\nScreening",
      image: "/service/soft-tissue-screening.avif",
      imageAlt: "Soft Tissue Screening",
      href: "/services/sts"
    },
    {
      id: 4,
      title: "Pathology\nServices",
      image: "/service/pathology-service.avif",
      imageAlt: "Pathology Services",
      href: "/services/pathology"
    },
    {
      id: 5,
      title: "Seamless\nTele-Reporting",
      image: "/service/tele-report.avif",
      imageAlt: "Seamless Tele-Reporting",
      href: "/services/tele"
    },
    {
      id: 6,
      title: "L Ceph\nImaging",
      image: "/service/lceph.avif",
      imageAlt: "L Ceph Imaging",
      href: "/services/lceph"
    },
    {
      id: 7,
      title: "Intraoral\nScanner",
      image: "/service/intra-oral.avif",
      imageAlt: "Intraoral Scanner",
      href: "/services/intra-oral"
    }
  ];

  return (
    <section className="py-6">
      <div className="mx-auto ">
        {/* Top Section: Our Services pill, section number, divider, heading, and description */}
        <div className="mb-10 responsive-margin">
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
              Our Services
            </span>
            <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
          </div>
          <hr className="border-gray-200 mb-8" />
          
          {/* Mobile & Tablet Layout (up to md) */}
          <div className="block md:hidden">
            <div className="text-center">
              <AnimatedSection delay={0.1}>
                <h2 className="section-header text-white mb-6">
                  Advanced Testing,
                  <br />
                  <span
                    className="text-transparent font-medium"
                    style={{
                      background:
                        "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Personalized
                  </span>{" "}
                  Care
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="section-subtext text-gray-300 mb-6 max-w-lg mx-auto">
                  From pathology and radiology to home sample collection, our services are designed to deliver fast, reliable, and patient-friendly diagnostics.
                </p>
              </AnimatedSection>
              {showButton&&<div className="flex justify-center">
                <Link href="/services">
                  <ButtonWithArrow 
                    variant="primary" 
                    size="sm"
                    arrowHoverAnimation={true}
                  >
                    View All Services
                  </ButtonWithArrow>
                </Link>
              </div>}
            </div>
          </div>

          {/* Desktop Layout (md and above) */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="section-header text-white">
                  Advanced Testing,
                  <br />
                  <span
                    className="text-transparent font-medium"
                    style={{
                      background:
                        "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Personalized
                  </span>{" "}
                  Care
                </h2>
              {showButton&&<div className="flex flex-col sm:flex-row max-sm:mx-auto gap-4 mt-6 max-w-[165px]">
                <Link href="/services">
                  <ButtonWithArrow 
                    variant="primary" 
                    size="sm"
                    arrowHoverAnimation={true}
                  >
                    View All Services
                  </ButtonWithArrow>
                </Link>
              </div>}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col">
                <p className="section-subtext text-gray-300">
                  From pathology and radiology to home sample collection, our services are designed to deliver fast, reliable, and patient-friendly diagnostics.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Service Cards Grid - Responsive Layout */}
        <div className="relative ">
          <Carousel
            items={services}
            showText={true}
            showImage={true}
            showOnlyImage={false}
            mobileCardWidth={170}
            mobileCardHeight={170}
            desktopCenterCardWidth={340}
            desktopCenterCardHeight={420}
            desktopAdjacentCardWidth={265}
            desktopAdjacentCardHeight={275}
            disableAutoPlay={false}
          />

          {/* Navigation Arrows - Desktop only (commented out for auto-play) */}
          {/* <div className="hidden sm:flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)}
              className="w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-colors hover-scale-sm"
            >
              <ArrowLeft className="w-4 h-4 text-slate-950" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % services.length)}
              className="w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-colors hover-scale-sm"
            >
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}