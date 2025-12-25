"use client";
import { ArrowRight, ArrowLeft, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Albert Flores",
      location: "Ghatkopar Branch",
      image: "/about-us/testimonial-img.svg",
      isPlaying: false,
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      location: "Andheri East Branch",
      image: "/about-us/testimonial-img.svg",
      isPlaying: true,
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      location: "Dadar Branch",
      image: "/about-us/testimonial-img.svg",
      isPlaying: false,
    },
    {
      id: 4,
      name: "Albert Flores",
      location: "Ghatkopar Branch",
      image: "/about-us/testimonial-img.svg",
      isPlaying: false,
    },
    {
      id: 5,
      name: "Sarah Johnson",
      location: "Bandra Branch",
      image: "/about-us/testimonial-img.svg",
      isPlaying: false,
    },
    {
      id: 6,
      name: "Michael Chen",
      location: "Worli Branch",
      image: "/about-us/testimonial-img.svg",
      isPlaying: false,
    },
    {
      id: 7,
      name: "Emily Rodriguez",
      location: "Powai Branch",
      image: "/about-us/testimonial-img.svg",
      isPlaying: false,
    },
    {
      id: 8,
      name: "David Kim",
      location: "Vashi Branch",
      image: "/about-us/testimonial-img.svg",
      isPlaying: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(4);

  // Update visible card count using CSS-based calculation (no forced reflow)
  // Using fixed container width calculation instead of measuring DOM
  useEffect(() => {
    // Calculate based on viewport width using CSS breakpoints, not DOM measurements
    const updateVisibleCards = () => {
      // Use window.innerWidth instead of container.clientWidth to avoid forced reflow
      // Batch the read using requestAnimationFrame
      requestAnimationFrame(() => {
        const viewportWidth = window.innerWidth;
        // Approximate container width based on viewport (max-w-[1200px] with padding)
        const containerWidth = Math.min(viewportWidth - 64, 1200); // 64px for padding
        const cardWidth = 280;
        const gap = 24;
        const cardsThatFit = Math.floor((containerWidth - gap) / (cardWidth + gap));
        setVisibleCardCount(Math.min(cardsThatFit, 4));
      });
    };

    updateVisibleCards();
    
    // Use ResizeObserver on window or debounced resize
    let rafId: number | null = null;
    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateVisibleCards);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const nextSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - visibleCardCount);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const canGoNext = currentIndex < Math.max(0, testimonials.length - visibleCardCount);
  const canGoPrev = currentIndex > 0;

  return (
    <section className="pt-6 responsive-margin">
      <div className="mx-auto">
        {/* Top Section: Testimonials pill, section number, divider, heading, and description */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-4 py-1.5 rounded-full text-gray-700 text-sm font-medium relative hover-scale"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
                border: "1px solid transparent",
                borderRadius: "999px",
              }}
            >
              Testimonials
            </span>
            <span className="text-xs text-gray-500 font-medium">(08)</span>
          </div>
          <hr className="border-gray-200 mb-8" />

          <div className="text-center">
            <AnimatedSection delay={0.1}>
              <h2 className="section-header text-gray-900 leading-tight mb-6">
                Hear From Our{" "}
                <span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Valued
                </span>{" "}
                <br />
                Partners & Patients
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-subtext text-gray-600 leading-relaxed max-w-2xl mx-auto">
                See the difference Vi-Scan Diagnostics makes, directly from those
                who experience it.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Mobile: Horizontal scrolling */}
          <div className="block md:hidden">
            <div className="flex gap-8  overflow-x-auto pb-4  scrollbar-hide pl-4 pr-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-[280px] relative group cursor-pointer hover-lift"
                >
                      <div className="relative overflow-hidden rounded-2xl h-[320px]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          loading="lazy"
                          sizes="(max-width: 768px) 280px, 280px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Video Play/Pause Button */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-gray-500/30 backdrop-blur-sm border-2 border-dashed border-white rounded-full flex items-center justify-center hover:bg-gray-500/50 transition-colors">
                      {testimonial.isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-1" />
                      )}
                    </div>

                    {/* Name and Location - Overlay on bottom */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Carousel with navigation */}
          <div className="hidden md:block">
            <div className="flex justify-center">
              <div className="flex gap-4 lg:gap-6 overflow-hidden px-4 mb-8 max-w-[1220px] py-8">
                <div
                  className="flex gap-4 lg:gap-6 carousel-slide"
                  style={{ 
                    transform: `translateX(-${currentIndex * (280 + 24)}px)`,
                    willChange: 'transform'
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="group cursor-pointer flex-shrink-0 w-[280px] relative hover-lift"
                    >
                      <div className="relative overflow-hidden rounded-2xl h-[320px] md:h-[400px] lg:h-[480px] xl:h-[520px]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          loading="lazy"
                          sizes="(max-width: 768px) 280px, 280px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Video Play/Pause Button */}
                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-gray-500/30 backdrop-blur-sm border-2 border-dashed border-white rounded-full flex items-center justify-center hover:bg-gray-500/50 transition-colors">
                          {testimonial.isPlaying ? (
                            <Pause className="w-5 h-5 text-white" />
                          ) : (
                            <Play className="w-5 h-5 text-white ml-1" />
                          )}
                        </div>

                        {/* Name and Location - Overlay on bottom */}
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg font-semibold mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-200">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                disabled={!canGoPrev}
                aria-label="Previous testimonials"
                className={`w-10 h-10 rounded-full bg-white border border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-colors ${
                  !canGoPrev ? "opacity-50 cursor-not-allowed" : "hover-scale-sm"
                }`}
              >
                <ArrowLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                disabled={!canGoNext}
                aria-label="Next testimonials"
                className={`w-10 h-10 rounded-full bg-white border border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-colors ${
                  !canGoNext ? "opacity-50 cursor-not-allowed" : "hover-scale-sm"
                }`}
              >
                <ArrowRight className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
