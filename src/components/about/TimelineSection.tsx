"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import { Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  year: string;
  period: string;
  title: string;
  description: string;
  image: string;
  // badges: {
  //   icon: React.ReactNode;
  //   text: string;
  // }[];
}

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isManualScroll = useRef(false);

  const timelineData: TimelineItem[] = [
    {
      year: "2019",
      period: "Jan 2019 - Dec 2019",
      title: " Piloted the Model",
      description:
        "We tested early dental diagnostic centres by setting up a few locations and running the entire workflow in an analog environment. This hands-on experience helped us understand the gaps, bottlenecks, and real operational needs of scaling dental diagnostics.",
      image: "/about-us/first.avif",
      // badges: [
      //   { icon: <Calendar className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "10+ Centers" },
      //   { icon: <X className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "Digital Diagnostics" },
      // ],
    },
    {
      year: "2020",
      period: "Jan 2020 - Dec 2022",
      title: "COVID Disruption & Learning Years",
      description:
        "As we prepared to expand, the industry shut down during COVID. These years became a period of learning, research, and planning — shaping our vision for a tech-led, scalable diagnostic platform.",
      image: "/about-us/second.avif",
      // badges: [
      //   { icon: <Calendar className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "25+ Centers" },
      //   { icon: <X className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "AI Integration" },
      // ],
    },
    {
      year: "2023",
      period: "Jan 2023 - Dec 2023",
      title: "Expansion, Insight & Product Discovery",
      description:
        "With the industry reopening, we began serving more patients and expanded our base across various locations. We quickly realised that scaling without technology was not sustainable. This led us to begin building ViZ, running pilots, gathering user feedback, testing beta versions, and assembling our in-house product and engineering team.",
      image: "/about-us/third.avif",
      // badges: [
      //   { icon: <Calendar className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "50+ Centers" },
      //   { icon: <X className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "3D CBCT Tech" },
      // ],
    },
    {
      year: "2025",
      period: "Oct 2025 - Present",
      title: "Platform Launch & Rapid Growth",
      description:
        "We launched ViZ at scale, onboarding 3,000+ doctors with over 20% active users and processing 20,000+ scans through the platform. Overall, we have scanned more than 2 lakh patients and served over 10,000 dentists across India. With 40+ affiliate locations onboarded, our network has grown to 60+ centres — and we’re on track to reach 100+ soon.",
      image: "/about-us/fourth.avif",
      // badges: [
      //   { icon: <Calendar className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "100+ Centers" },
      //   { icon: <X className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "Cloud Platform" },
      // ],
    },
    {
      year: "2026",
      period: "Future Vision",
      title: "Bringing AI Into Live Diagnostics",
      description:
        "In 2026, we will begin integrating AI into our live diagnostic workflows, including scan quality management, tooth and pathology detection on OPG, and IOPAR-based mapping. We are also launching LLM-powered, patient-friendly reports that make dental findings easier to understand. Alongside this, we are developing Gen-AI tools that allow patients to visualise probable outcomes and decide whether to proceed with treatment or wait. This will mark our shift into an intelligent diagnostic layer that enhances precision for doctors and brings true clarity to patients.",
      image: "/about-us/fifth.avif",
      // badges: [
      //   { icon: <Calendar className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "Global Reach" },
      //   { icon: <X className="w-4 h-4 max-xs:w-3 max-xs:h-3" />, text: "ML Diagnostics" },
      // ],
    },
  ];

  useEffect(() => {
    const timelineContainer = timelineRef.current;
    if (!timelineContainer) return;

    // Delay initialization to avoid forced reflow on initial render
    // Use requestIdleCallback or setTimeout to defer non-critical setup
    const initObserver = () => {
      // Use IntersectionObserver for better detection
      const observerOptions = {
        root: timelineContainer,
        rootMargin: "-40% 0px -40% 0px", // Consider item active when 40% visible
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setActiveIndex(index);
          }
        });
      }, observerOptions);

      // Observe all year elements
      yearRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });

      return observer;
    };

    // Fallback scroll handler for better compatibility - batched DOM reads
    let rafId: number | null = null;
    const handleScroll = () => {
      // Don't update if this is a manual scroll from clicking
      if (isManualScroll.current) {
        return;
      }
      
      // Batch all DOM reads in a single requestAnimationFrame to avoid forced reflow
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        // Batch all layout reads together - read all properties at once
        const scrollLeft = timelineContainer.scrollLeft;
        const scrollWidth = timelineContainer.scrollWidth;
        const containerWidth = timelineContainer.offsetWidth;
        const maxScroll = scrollWidth - containerWidth;
        
        // If scrolled to the end, set to last index
        if (scrollLeft >= maxScroll - 10) {
          setActiveIndex(timelineData.length - 1);
          return;
        }

        // Calculate which timeline item is in view based on actual positions
        const itemWidth = 570 + 32; // min-w-[570px] + mr-8 (32px)
        const newIndex = Math.round(scrollLeft / itemWidth);
        const clampedIndex = Math.max(0, Math.min(newIndex, timelineData.length - 1));
        
        if (clampedIndex !== activeIndex) {
          setActiveIndex(clampedIndex);
        }
      });
    };

    // Initialize observer after a small delay to avoid blocking initial render
    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    
    // Defer observer initialization to avoid forced reflow on initial render
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window.requestIdleCallback as (callback: () => void) => number)(() => {
        observer = initObserver();
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      timeoutId = setTimeout(() => {
        observer = initObserver();
      }, 100);
    }

    timelineContainer.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
      timelineContainer.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [activeIndex, timelineData.length]);

  const handleYearClick = (index: number) => {
    // Set active index immediately so content updates right away
    setActiveIndex(index);
    
    // Mark as manual scroll to prevent scroll handler from interfering
    isManualScroll.current = true;
    
    const yearElement = yearRefs.current[index];
    const container = timelineRef.current;
    
    if (yearElement && container) {
      // Batch all DOM reads in requestAnimationFrame to avoid forced reflow
      requestAnimationFrame(() => {
        // Get the position of the element relative to its offsetParent
        const elementLeft = yearElement.offsetLeft;
        const elementWidth = yearElement.offsetWidth;
        const containerWidth = container.offsetWidth;
        
        // Calculate scroll position to center the clicked item
        // Center the element in the container
        const targetScroll = elementLeft - (containerWidth / 2) + (elementWidth / 2);
        
        // Ensure we don't scroll past the boundaries
        const maxScroll = container.scrollWidth - containerWidth;
        const clampedScroll = Math.max(0, Math.min(targetScroll, maxScroll));
        
        container.scrollTo({
          left: clampedScroll,
          behavior: "smooth",
        });
        
        // Reset manual scroll flag after animation completes
        setTimeout(() => {
          isManualScroll.current = false;
        }, 600); // Match the smooth scroll duration
      });
    }
  };

  const activeTimeline = timelineData[activeIndex];

  return (
    <section className="py-10 lg:py-20 sm:pl-36 overflow-hidden">
      <div className="responsive-container">
        <div className="overflow-hidden">
          {/* Header */}
          <div className="text-start mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-normal text-gray-900 leading-tight">
              <span
                className="text-transparent font-medium"
                style={{
                  background:
                    "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
                Revolutionizing
              </span>{" "}
              Dental Diagnostics
            </h2>
          </div>

          {/* Timeline Bar */}
          <div className="space-y-2 xl:space-y-6 mb-8 lg:mb-16">
            <div className="w-full h-1 bg-gradient-to-r from-[#EBB5F3] via-[#FEF2F2]  to-[#C59BC7] rounded"></div>
            <div
              ref={timelineRef}
              className="flex items-center overflow-x-auto scrollbar-hide timeline-scroll scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex min-w-max overflow-y-hidden pr-[50vw]">
                {timelineData.map((item, index) => (
                  <span
                    key={item.year}
                    data-index={index}
                    ref={(el) => {
                      yearRefs.current[index] = el;
                    }}
                    onClick={() => handleYearClick(index)}
                    className={`h-full min-w-[570px] year-text-size font-medium  cursor-pointer transition-colors duration-300 ${
                      index === activeIndex
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-600"
                    }`}
                  >
                    {item.year}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            {/* Image with Badges Overlay */}
            <div className="relative order-1 lg:order-1">
              <div className="rounded-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={activeTimeline.image}
                      alt={activeTimeline.title}
                      width={600}
                      height={600}
                      className="w-full h-auto rounded-2xl"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute bottom-6 left-4 right-4 flex justify-between items-center"
                  >
                    {activeTimeline.badges.map((badge, idx) => (
                      <div
                        key={idx}
                        className="bg-[#440C46] text-white px-3 py-2 rounded-full flex items-center max-xs:gap-1 gap-2"
                      >
                        {badge.icon}
                        <span className="text-sm max-xs:text-xs">{badge.text}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence> */}
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 order-2 lg:order-2 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 flex flex-col justify-between h-full"
                >
                  <span className="text-sm text-gray-600">
                    {activeTimeline.period}
                  </span>
                  <div>
                    <h3 className="text-2xl mb-2 sm:text-3xl lg:text-3xl font-medium text-gray-900">
                      {activeTimeline.title}
                    </h3>
                    <p className="subtexts text-gray-700 leading-relaxed">
                      {activeTimeline.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
