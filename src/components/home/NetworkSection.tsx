"use client"
import Link from "next/link";
import Image from "next/image";
import ButtonWithArrow from "@/components/ui/button-with-arrow";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Cities array with image paths
const cities = [
  { name: "Bangalore", image: "/home/why-choose/bangalore.svg" },
  { name: "Chennai", image: "/home/why-choose/chennai.svg" },
  { name: "Mumbai", image: "/home/why-choose/mumbai.svg" },
  { name: "Delhi", image: "/home/why-choose/delhi.svg" },
  { name: "Hyderabad", image: "/home/why-choose/hyderabad.svg" },
  { name: "Ahmedabad", image: "/home/why-choose/ahmedabad.svg" },
];

export default function ViScanNetworkSection() {
  

  return (

    <section className="mt-10  py-4  rounded-2xl">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center responsive-margin">
        
        {/* Left Side - Map */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Map Container */}
          <div className="w-full max-w-md lg:max-w-none h-80 sm:h-96 lg:h-[500px] relative rounded-3xl overflow-hidden">
            <Image
              src="/home/why-choose/states.webp"
              alt="Vi-Scan Network Coverage Map"
              fill
              className="object-contain contrast-125 brightness-95"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div>
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 leading-tight mb-3">
                Vi-Scan: Always Within Your Reach.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-gray-600 text-base lg:text-base leading-relaxed mb-6 sm:mb-4 px-4 sm:px-0">
                Connecting you to advanced dental diagnostics, nationwide.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex justify-center lg:justify-start">
              <Link href="/labs">
                <ButtonWithArrow 
                  variant="secondary" 
                  size="sm"
                  className="px-3 py-2"
                  arrowHoverAnimation={true}
                >
                  View All Centers
                </ButtonWithArrow>
              </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Statistics */}
          <div className="flex gap-6 sm:gap-8 items-center justify-center lg:justify-start">
            <div>
              <div className="text-2xl sm:text-3xl font-medium text-gray-900 mb-1">12+</div>
              <div className="text-gray-600 text-xs sm:text-sm font-normal">Cities</div>
            </div>
            <div className="w-[1px] rounded-full h-12 sm:h-16 bg-slate-950 transform rotate-[30deg]"></div>
            <div>
              <div className="text-2xl sm:text-3xl font-medium text-gray-900 mb-1">25+</div>
              <div className="text-gray-600 text-xs sm:text-sm font-normal">Centers</div>
            </div>
          </div>

          {/* City List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-items-center lg:justify-items-start">
            {cities.map((city) => (
              <div 
                key={city.name}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/50 transition-all duration-300 w-full sm:w-auto justify-center lg:justify-start hover:scale-105 hover:translate-x-1 active:scale-95"
              >
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={city.image}
                    alt={`${city.name} icon`}
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base group-hover:text-gray-900 transition-colors duration-300">
                  {city.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}