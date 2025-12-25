import Image from "next/image";
import FeatureCard from "./FeatureCard";

type Feature = {
  title: string;
  description: string;
  icon: string; // public asset path
};

const features: Feature[] = [
  {
    title: "Expanded Patient Base",
    description:
      "Boost footfall by connecting with more dentists and patients.",
    icon: "/centers/user-network.svg",
  },
  {
    title: "Effortless Workflow",
    description: "Simplify bookings, uploads, and data with our platform.",
    icon: "/centers/teeth-report.svg",
  },
  {
    title: "Unified Reporting Solutions",
    description: "Get fast, expert reports from our radiologist network.",
    icon: "/centers/puzzle-piece.svg",
  },
  {
    title: "Enhanced Brand Visibility",
    description: "Be a trusted name in dental diagnostics with Vi-Scan.",
    icon: "/centers/gear.svg",
  },
  {
    title: "Smooth Tech Integration",
    description:
      "Seamlessly connect with your existing setup for a smoother workflow.",
    icon: "/centers/visibility.svg",
  },
  {
    title: "Revenue Growth",
    description: "Boost revenue by joining the Vi-Scan diagnostic network.",
    icon: "/centers/graph.svg",
  },
];

export default function WhyPartnerSection() {
  return (
    <section className="responsive-margin py-10">
      <div
        className="rounded-3xl  w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
        }}
      >
        <div className="w-full h-full">
            <div className="flex gap-0 h-full w-full">
             <div className="w-[40%] relative flex flex-col">
              <div className="mb-6 p-10">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-4 py-1.5 rounded-full text-gray-700 text-xs font-medium relative bg-transparent border border-[#FFFFFF] backdrop-blur-sm"
                    style={{
                      border: "1px solid #FFFFFF",
                    }}
                  >
                    Partner with VI-Scan
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    (01)
                  </span>
                </div>
                <hr className="border-gray-200" />
                <h1 className="text-4xl  font-medium mt-5 max-w-[340px]">
                  <span className="text-slate-900">Join the Future of </span>
                  {/* &nbsp; */}
                  <br className="max-lg:hidden" />
                  <span className="text-white">Dental Diagnostics</span>
                </h1>
                                 <p className="text-slate-700/80 text-sm xl:text-base mt-6 max-w-sm">
                   Elevate your center&apos;s services and expand your reach by
                   joining our network, designed to streamline operations and
                   drive growth.
                 </p>
              </div>
                <div className="flex justify-start w-full h-80 relative flex-1">
                 <Image
                   src="/centers/partner-section-img.svg"
                   alt="Partner with VI-Scan"
                   fill
                   className="object-contain"
                 />
                 <div
                   className="absolute bottom-0 left-0 w-full h-[300px]"
                   style={{
                     background:
                       "linear-gradient(180deg, rgba(204, 164, 202, 0) 31.16%, #C99FC8 101.5%)",
                   }}
                 />
               </div>
            </div>
            <div className="w-[60%] h-full  relative  z-10">
              <Image
                src="/centers/background-rectangle.svg"
                alt="Why Partner"
                // width={600}
                // height={600}
                fill
                className="object-fill absolute -z-10 mt-16 XL:mt-28 right-0 w-full h-full"
              />
              <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto py-16">
                <div className="flex flex-col gap-6">
                  {features.slice(0, 3).map((feature, index) => (
                    <FeatureCard
                      key={index}
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-6 mt-16">
                  {features.slice(3, 7).map((feature, index) => (
                    <FeatureCard
                      key={index}
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
