"use client"
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, ChevronDown, Star, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import ButtonWithArrow from "@/components/ui/button-with-arrow";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CentersSection({pageNumber="06"}:{pageNumber?:string}) {
  const centers = [
    {
      id: 1,
      name: "VI-SCAN diagnostics",
      location: "Ghatkopar, Mumbai -75",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 2,
      name: "VI-SCAN diagnostics",
      location: "Kayan, Mumbai -75",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 3,
      name: "VI-SCAN diagnostics",
      location: "Ghatkopar, Mumbai -75",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 4,
      name: "VI-SCAN diagnostics",
      location: "Ghatkopar, Mumbai -75",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 5,
      name: "VI-SCAN diagnostics Noida",
      location: "Ghatkopar, Mumbai -75",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 6,
      name: "VI-SCAN diagnostics",
      location: "Andheri, Mumbai -69",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 7,
      name: "VI-SCAN diagnostics",
      location: "Bandra, Mumbai -50",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 8,
      name: "VI-SCAN diagnostics",
      location: "Worli, Mumbai -18",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 9,
      name: "VI-SCAN diagnostics",
      location: "Powai, Mumbai -76",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 10,
      name: "VI-SCAN diagnostics",
      location: "Vashi, Navi Mumbai -400703",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 11,
      name: "VI-SCAN diagnostics",
      location: "Thane, Mumbai -400601",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 12,
      name: "VI-SCAN diagnostics",
      location: "Dadar, Mumbai -28",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 13,
      name: "VI-SCAN diagnostics",
      location: "Chembur, Mumbai -71",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 14,
      name: "VI-SCAN diagnostics",
      location: "Kurla, Mumbai -70",
      rating: 5,
      image: "/centers/center-image.svg"
    },
    {
      id: 15,
      name: "VI-SCAN diagnostics",
      location: "Sion, Mumbai -22",
      rating: 5,
      image: "/centers/center-image.svg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [containerWidth, setContainerWidth] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(5);

  // Calculate how many cards can be visible based on actual container width
  const calculateVisibleCards = (width: number) => {
    const cardWidth = 300; // Fixed card width
    const gap = 24; // Gap between cards
    const padding = 32; // Left and right padding (16px each)
    
    const availableWidth = width - padding;
    const cardsThatFit = Math.floor(availableWidth / (cardWidth + gap));
    
    return Math.max(1, Math.min(cardsThatFit, 5)); // At least 1, max 5
  };

  // Update container width and visible card count using ResizeObserver (avoids forced reflow)
  useEffect(() => {
    const container = document.querySelector('.centers-carousel-container') as HTMLElement;
    if (!container) return;

    // Use ResizeObserver instead of window resize + clientWidth to avoid forced reflow
    const resizeObserver = new ResizeObserver((entries) => {
      // Batch DOM reads using requestAnimationFrame
      requestAnimationFrame(() => {
        for (const entry of entries) {
          const width = entry.contentRect.width;
          setVisibleCardCount(calculateVisibleCards(width));
        }
      });
    });

    resizeObserver.observe(container);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const nextSlide = () => {
    const maxIndex = Math.max(0, centers.length - visibleCardCount);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const canGoNext = currentIndex < Math.max(0, centers.length - visibleCardCount);
  const canGoPrev = currentIndex > 0;

  return (
    <section className="py-6">
      <div className="mx-auto">
        {/* Top Section: Our Centers pill, section number, divider, heading, and description */}
        <div className="mb-12 responsive-margin">
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-4 py-1.5 rounded-full text-gray-700 text-sm font-medium relative transition-transform hover:scale-105"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
                border: "1px solid transparent",
                borderRadius: "999px",
              }}
            >
              Our Centers
            </span>
            <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
          </div>
          <hr className="border-gray-200 mb-8" />
          
          {/* Mobile & Tablet Layout (up to md) */}
          <div className="block md:hidden">
            <div className="text-center">
              <AnimatedSection delay={0.1}>
                <h2 className="section-header text-white mb-6">
                  Discover our advanced dental
                  &nbsp;<span
                    className="text-transparent font-medium"
                    style={{
                      background:
                        "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    centers
                  </span>{" "}
                  near you for better care.
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="section-subtext text-gray-300 mb-6 max-w-lg mx-auto">
                  With our rapidly expanding network across India, finding a Vi-Scan Diagnostics center for your precise imaging needs is easier than ever.
                </p>
              </AnimatedSection>
              <div className="flex justify-center gap-2">
                <Link href="/labs">
                  <ButtonWithArrow 
                    variant="primary" 
                    size="sm"
                    className="px-3 py-1.5"
                    arrowHoverAnimation={true}
                  >
                    View All Centers
                  </ButtonWithArrow>
                </Link>
                <Button 
                  variant="dashed" 
                  size="sm"
                  className="py-2"
                >
                  <MapPin className="w-4 h-4 text-primary-900" />
                  <span className="text-primary-900 font-medium">Maharashtra</span>
                  <ChevronDown className="w-4 h-4 text-primary-900" />
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout (md and above) */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
            <div className="max-w-md">
              <h2 className="section-header text-white">
                Discover our advanced dental
                &nbsp;<span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  centers
                </span>{" "}
                near you for better care.
              </h2>
              <div className="flex flex-col sm:flex-row max-sm:mx-auto gap-4 mt-6 max-w-[165px]">
                <Link href="/labs">
                  <ButtonWithArrow 
                    variant="primary" 
                    size="sm"
                    arrowHoverAnimation={true}
                  >
                    View All Centers
                  </ButtonWithArrow>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              {/* Location Filter */}
              <div className="mb-4">
                <Button 
                  variant="dashed" 
                  size="md" 
                  className="px-3"
                >
                  <MapPin className="w-4 h-4 text-primary-900" />
                  <span className="text-primary-900 font-medium">Maharashtra</span>
                  <ChevronDown className="w-4 h-4 text-primary-900" />
                </Button>
              </div>
              <p className="section-subtext text-gray-300">
                With our rapidly expanding network across India, finding a Vi-Scan Diagnostics center for your precise imaging needs is easier than ever.
              </p>
            </div>
          </div>
        </div>

        {/* Centers Display */}
        <div className="relative">
          {/* Mobile: Horizontal scrolling */}
          <div className="block sm:hidden">
            <div className="centers-carousel-container flex gap-4 overflow-x-auto scrollbar-hide pl-4 pr-4 py-4 pb-4">
              {centers.map((center) => (
                <div 
                  key={center.id} 
                  className="flex-shrink-0 w-[250px] relative z-10 transition-transform hover:-translate-y-1 hover:z-20"
                >
                  <div className="relative overflow-hidden rounded-2xl h-[280px] mb-4 group cursor-pointer transition-transform hover:scale-[1.02]">
                    <Image
                      src={center.image}
                      alt={center.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="text-start">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {center.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{center.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(center.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid with navigation */}
          <div className="hidden sm:block">
            <div className="centers-carousel-container flex gap-6 overflow-hidden px-4 mb-8 py-8 pr-4 pb-16">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (300 + 24)}px)` }}
              >
                {centers.map((center) => (
                  <div 
                    key={center.id}
                    className="group cursor-pointer flex-shrink-0 w-[300px] relative z-10 transition-transform hover:-translate-y-1 hover:z-20"
                  >
                    <div className="relative overflow-hidden rounded-2xl h-[340px] mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={center.image}
                        alt={center.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="text-start">
                      <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
                        {center.name}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span className="truncate">{center.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(center.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                disabled={!canGoPrev}
                aria-label="Previous centers"
                className={`w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-all ${
                  !canGoPrev ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-90'
                }`}
              >
                <ArrowLeft className="w-4 h-4 text-slate-950" />
              </button>
              <button
                onClick={nextSlide}
                disabled={!canGoNext}
                aria-label="Next centers"
                className={`w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-all ${
                  !canGoNext ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-90'
                }`}
              >
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 