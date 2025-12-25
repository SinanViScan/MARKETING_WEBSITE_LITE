"use client";

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[230px] sm:h-[300px] md:h-[500px]  xl:h-[700px] overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)'
        }}
      ></div>
      
      {/* Main Content Container */}
      <div className="relative h-full flex items-center">
        {/* Text Container */}
        <div className='absolute flex sm:justify-center justify-start items-center  bg-white left-0 bottom-0 z-10 w-[70%]  xs:w-[60%] lg:w-[50%] xl:w-[55%] h-[60%]'>
          <h1 className="career-section-header  sm:max-w-[250px] md:max-w-xs xl:max-w-sm">
           Work with purpose.
           Build the &nbsp;
           <span
             className="text-transparent font-medium"
             style={{
               background:
                 "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
             }}
           >
             future
           </span> &nbsp;of dental diagnostics.
          </h1>
        </div>
        
        {/* Dental Professional Image */}
        <div className="absolute lg:h-[90%] h-[80%] xs:h-[103%] sm:h-[98%] w-[100px] xs:w-[150px] sm:w-[300px] lg:w-[400px] right-16 xs:right-[22%] sm:right-[15%] md:right-[20%] lg:right-[30%] bottom-0 z-30">
          <Image
            src="/home/hero/ForDoctorsImage.webp"
            alt="Dental Professional"
            fill
            className="xl:object-cover sm:object-contain object-cover  rounded-lg lg:rounded-2xl"
          />
        </div>
        
        {/* Video Section */}
        <div className="absolute right-0 top-0 w-[80%] h-[70%]">
          <div 
            className="w-full h-full relative overflow-hidden"
            style={{
              borderTopLeftRadius: '300px',
              borderBottomLeftRadius: '300px'
            }}
          >
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover" 
              style={{
                transform: 'scaleX(-1)'
              }}
            >
              <source src="/about-us/dental-video.mp4" type="video/mp4" />
            </video>
            
            {/* Semi-transparent overlay */}
            <div 
              className="absolute inset-0 bg-black/20"
              style={{
                borderTopLeftRadius: '300px',
                borderBottomLeftRadius: '300px'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;