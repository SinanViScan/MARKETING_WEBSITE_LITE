import React from "react";

const MissionSection = () => {
  return (
    <section className="py-8 lg:py-10">
      <div className="responsive-container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Video */}
          <div className="relative h-[350px] w-full">
            <video
              src="/about-us/dental-video.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Top overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8 lg:px-16 max-w-[80%]">
              <p className="text-sm xs:text-lg sm:text-xl lg:text-xl font-light sm:font-normal text-white leading-relaxed">
                We’re here to ensure that every treatment begins with clarity
                and ends with better oral health. Our mission has always been to
                bridge the gap between patients and dentists with clear,
                reliable diagnostic information. As dentistry becomes more
                complex, we’ve focused on building a system that improves
                accuracy, speeds up reporting, and gives both patients and
                clinicians the confidence to make the right decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
