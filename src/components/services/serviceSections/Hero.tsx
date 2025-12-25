"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/button";
import { Calendar } from "lucide-react";

// Props to customize titles per service page
interface ServiceHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}


export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: ServiceHeroProps) {

  return (
    <section className="relative responsive-margin max-lg:m-0 lg:rounded-3xl overflow-hidden bg-gradient-desktop ">
      <div className="max-w-[1600px]  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="block">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover "
          style={{ transform: "scaleX(-1)" }}
        />
        {/* Overlay for small/medium devices: subtle top fade */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-black/40  to-black/40" />
        {/* Overlay for large devices and above: left-to-right fade to transparent on right */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

        <motion.div
          className="relative  py-8 md:py-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative  overflow-hidden h-[320px] md:h-[420px] lg:h-[520px]">
            {/* Unified layout: single column on mobile, two on md+ */}
            <div className="grid grid-cols-1  lg:grid-cols-2 h-full w-full">
              <div className="h-full w-full bg-transparent max-w-lg flex flex-col justify-center md:justify-end">
                <div className="p-3 flex flex-col justify-center sm:p-6 md:p-10 w-full h-full space-y-4 xl:space-y-8">
                  
                  <h3 className="text-white mb-2 font-light">
                    Vi-Scan Diagnostics Provides
                  </h3>
                  <h1 className="text-white max-w-xl  sm:max-w-2xl text-[20px] xs:text-[26px] sm:text-[28px] md:text-[30px] lg:text-[50px] leading-tight">
                    {title}
                  </h1>
                  <p className="text-white/85 text-responsive-base max-xs:text-xs max-w-2xl">
                    {subtitle}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Button variant="primary" className="py-2 px-4" size="sm">
                      <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center mr-2">
                        <Calendar className="w-4 h-4 text-[#440C46]" />
                      </span>
                      Book&nbsp;A&nbsp;Scan&nbsp;Now
                    </Button>
                  </div>

                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
