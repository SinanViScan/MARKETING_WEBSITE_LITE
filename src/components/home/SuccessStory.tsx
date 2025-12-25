"use client";
import Image from "next/image";

// Add custom styles to hide scrollbar
const scrollStyles = `
  .scroll-container::-webkit-scrollbar {
    display: none;
  }
  
  .scroll-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function SuccessStory() {
  const milestones = [
    {
      id: 1,
      year: "2021",
      description: "Enhancing the visibility of dentists",
      image: "/home/why-choose/your-story.svg",
    },
    {
      id: 2,
      year: "2022",
      description: "Advanced diagnostic technologies",
      image: "/home/why-choose/corporate.svg",
    },
    {
      id: 3,
      year: "2023",
      description: "Enhancing the visibility of dentists",
      image: "/home/why-choose/ceo-story.svg",
    },
    {
      id: 4,
      year: "2024",
      description: "Elevating Dental Healthcare In India",
      image: "/home/why-choose/ceo-insights.svg",
    }
  ];

  // Card component with hover effects
  const StoryCard = ({ milestone, index }: { milestone: typeof milestones[0], index: number }) => (
    <div
      className="group bg-white rounded-2xl p-4 flex-shrink-0 w-64 text-left cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-400/30 relative overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Year Badge */}
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-gray-500 transition-all duration-300 group-hover:text-purple-600 group-hover:font-semibold">
            {milestone.year}
          </span>
          <div className="h-px w-0 bg-purple-400 transition-all duration-500 group-hover:w-8" />
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-900">
          {milestone.description}
        </p>

        {/* Divider Line - animates on hover */}
        <div className="relative h-0.5 mb-4 bg-gray-100 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 group-hover:w-full" />
        </div>

        {/* Logo Image */}
        <div className="flex justify-start">
          <div className="h-[60px] w-[150px] rounded-lg flex items-center justify-start relative transition-transform duration-500 group-hover:scale-105">
            <Image
              src={milestone.image}
              alt={`${milestone.year} logo`}
              width={150}
              height={60}
              className="object-contain transition-all duration-500 group-hover:brightness-110"
            />
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150" />
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scrollStyles }} />
      <section 
        className="py-14 mt-10"
        style={{
          background: "linear-gradient(250.03deg, #EBB5F3 -44.45%, #FEF2F2 33.37%, #FEE2E1 70.17%, #C59BC7 139.93%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center xl:justify-center w-full">
            {/* Mobile and Tablet: Horizontal scrolling */}
            <div className="flex gap-5 overflow-x-auto pb-4 px-4 xl:hidden w-full scroll-smooth snap-x snap-mandatory scroll-container">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="snap-start">
                  <StoryCard milestone={milestone} index={index} />
                </div>
              ))}
            </div>

            {/* Desktop (xl and above): Normal layout */}
            <div className="hidden xl:flex gap-6 justify-center items-center">
              {milestones.map((milestone, index) => (
                <StoryCard key={milestone.id} milestone={milestone} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
