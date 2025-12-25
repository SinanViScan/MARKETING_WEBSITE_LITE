"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";
import ButtonWithArrow from "@/components/ui/button-with-arrow";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "CBCT Services",
      image: "/about-us/service-img.webp"
    },
    {
      id: 2,
      name: "OPG Services",
      image: "/about-us/service-img.webp"
    },
    {
      id: 3,
      name: "LCEPH Services",
      image: "/about-us/service-img.webp"
    },
    {
      id: 4,
      name: "Soft Tissue Screening Services",
      image: "/about-us/service-img.webp"
    },
    {
      id: 5,
      name: "Pathology Services",
      image: "/about-us/service-img.webp"
    },
    {
      id: 6,
      name: "Tele-Reporting Services",
      image: "/about-us/service-img.webp"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(3);

  // Calculate how many cards can be visible based on actual container width
  const calculateVisibleCards = (width: number) => {
    let cardWidth = 300; // Default card width for large screens (now consistent)
    const gap = 32; // Gap between cards
    const padding = 32; // Left and right padding (16px each)
    
    // Responsive card widths
    if (width < 640) { // Small devices
      cardWidth = 180;
    } else if (width < 1024) { // Medium devices
      cardWidth = 300;
    }
    
    const availableWidth = width - padding;
    const cardsThatFit = Math.floor(availableWidth / (cardWidth + gap));
    
    return Math.max(1, Math.min(cardsThatFit, 3)); // At least 1, max 3
  };

  // Update container width and visible card count using ResizeObserver (avoids forced reflow)
  useEffect(() => {
    const container = document.querySelector('.services-carousel-container') as HTMLElement;
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
    const maxIndex = Math.max(0, services.length - visibleCardCount);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const canGoNext = currentIndex < Math.max(0, services.length - visibleCardCount);
  const canGoPrev = currentIndex > 0;

  return (
    <section className="pt-8 lg:pt-16 bg-white">
        <div className="space-y-8 max-sm:space-y-0">
            <div className='responsive-container'>
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
                Our Services
              </span>
              <span className="text-xs text-gray-500 font-medium">(06)</span>
            </div>
            <hr className="border-gray-200 mb-8" />
            <div className="grid md:grid-cols-2 gap-8 max-md:gap-4 max-sm:gap-4 max-md:justify-center items-start">
              <div>
                <h2 className="section-header max-md:text-center">
                  Advanced Testing, <br/>
                  <span
                    className="text-transparent font-medium"
                    style={{
                      background:
                        "linear-gradient(246.94deg,  #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Personalized
                  </span>
                  &nbsp;Care
                </h2>
              </div>
              <div className="flex max-sm:justify-center">
                <p className="section-subtext max-md:text-center">
                From pathology and radiology to home sample collection, our services are designed to deliver fast, reliable, and patient-friendly diagnostics.
                </p>
              </div>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="flex justify-start max-md:justify-center max-sm:mb-0 mb-10">
            <ButtonWithArrow 
              variant="primary" 
              size="md"
              arrowHoverAnimation={true}
            >
              View All Services
            </ButtonWithArrow>
          </div>
          </div>
                     {/* Services Display */}
           <div className="relative">
             {/* Mobile: Horizontal scrolling */}
             <div className="block sm:hidden">
                               <motion.div 
                  className="services-carousel-container flex gap-4 max-sm:gap-0 overflow-x-auto pb-4 scrollbar-hide py-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                 {services.map((service, index) => (
                                       <motion.div 
                      key={service.id} 
                                             className="flex-shrink-0 w-[200px] sm:w-[300px] lg:w-[300px] relative z-10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -5, zIndex: 20 }}
                    >
                                             <motion.div 
                         className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer p-2"
                         whileHover={{ scale: 1.02 }}
                         transition={{ duration: 0.3 }}
                       >
                         {/* Image */}
                         <div className="relative w-[180px] h-[200px] sm:w-[300px] sm:h-[320px] lg:w-[300px] lg:h-[320px] rounded-3xl overflow-hidden mb-4">
                          <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                       {/* Content */}
                       <div className="flex items-center w-full justify-between px-4 pb-4">
                         <h3 className="service-card-title-mobile w-[90%] truncate font-medium text-gray-900 group-hover:text-[#440C46] transition-colors">
                           {service.name}
                         </h3>
                         <div className="w-7 h-7 sm:w-10  sm:h-10 bg-[#F9EBFC] rounded-full flex items-center justify-center group-hover:bg-[#440C46] transition-colors">
                           <ArrowUpRight className="w-4 h-4 text-[#440C46] group-hover:text-white transition-colors" />
                         </div>
                       </div>
                     </motion.div>
                   </motion.div>
                 ))}
               </motion.div>
             </div>

             {/* Desktop: Grid with navigation */}
             <div className="hidden sm:block">
                               <motion.div 
                  className="services-carousel-container  flex gap-8 overflow-hidden mb-8 py-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                                   <motion.div 
                    className="flex gap-6 "
                                         animate={{ 
                       x: -currentIndex * (visibleCardCount === 1 ? 180 : visibleCardCount === 2 ? 300 : 300) + 32 
                     }} // Dynamic card width + 32px gap
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                   {services.map((service, index) => (
                                           <motion.div 
                        key={service.id}
                        className="group  cursor-pointer flex-shrink-0 w-[180px] sm:w-[300px] lg:w-[300px] relative z-10"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        whileHover={{ y: -5, zIndex: 20 }}
                      >
                                                 <motion.div 
                           className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden group-hover:scale-105 transition-transform duration-300 p-1"
                           whileHover={{ scale: 1.02 }}
                           transition={{ duration: 0.3 }}
                         >
                           {/* Image */}
                           <div className="relative w-[180px] h-[200px] sm:w-[300px] sm:h-[320px] lg:w-[300px] lg:h-[320px] rounded-3xl overflow-hidden mb-4">
                                                        <Image
                               src={service.image}
                               alt={service.name}
                               fill
                               className="object-cover"
                             />
                          </div>

                         {/* Content */}
                         <div className="flex items-center justify-between  pb-4">
                           <h3 className="service-card-title-desktop pl-2 font-medium text-gray-900 group-hover:text-[#440C46] transition-colors">
                             {service.name}
                           </h3>
                           <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F9EBFC] rounded-full flex items-center justify-center group-hover:bg-[#440C46] transition-colors">
                             <ArrowUpRight className="w-4 h-4 text-[#440C46] group-hover:text-white transition-colors" />
                           </div>
                         </div>
                       </motion.div>
                     </motion.div>
                   ))}
                 </motion.div>
               </motion.div>

               {/* Navigation Arrows */}
               <motion.div 
                 className="flex justify-center gap-4"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 1.2 }}
               >
                 <motion.button
                   onClick={prevSlide}
                   disabled={!canGoPrev}
                   aria-label="Previous services"
                   className={`w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-colors ${
                     !canGoPrev ? 'opacity-50 cursor-not-allowed' : ''
                   }`}
                   whileHover={canGoPrev ? { scale: 1.1 } : {}}
                   whileTap={canGoPrev ? { scale: 0.9 } : {}}
                 >
                   <ArrowLeft className="w-4 h-4 text-slate-950" />
                 </motion.button>
                 <motion.button
                   onClick={nextSlide}
                   disabled={!canGoNext}
                   aria-label="Next services"
                   className={`w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-950 flex items-center justify-center hover:border-slate-800 transition-colors ${
                     !canGoNext ? 'opacity-50 cursor-not-allowed' : ''
                   }`}
                   whileHover={canGoNext ? { scale: 1.1 } : {}}
                   whileTap={canGoNext ? { scale: 0.9 } : {}}
                 >
                   <ArrowRight className="w-4 h-4 text-slate-950" />
                 </motion.button>
               </motion.div>
             </div>
           </div>
        </div>
    </section>
  );
};

export default ServicesSection; 