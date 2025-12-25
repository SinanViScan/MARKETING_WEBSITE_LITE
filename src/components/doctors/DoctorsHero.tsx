"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function DoctorsHero() {
  return (
    <section className="relative responsive-margin rounded-3xl overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-5 xl:grid-cols-2  gap-2 items-stretch lg:h-[650px] xl:h-[700px]">
          {/* Left */}
          <div
            className="relative lg:col-span-3 xl:col-span-1 px-6 py-10 lg:pl-8 rounded-3xl overflow-hidden h-full"
            style={{
              background:
                "linear-gradient(247.99deg, #EBB5F3 -35.73%, #FEF2F2 27.32%, #FEE2E1 41.31%, #C59BC7 113.67%)",
            }}
          >
            {/* Eyebrow */}
            <div>
              <div className="flex max-lg:justify-center items-center mb-5 gap-3">
                <div className="relative w-[42px] h-[42px]">
                  <Image
                    src="/doctors/doctor-hero-icon.svg"
                    alt="Diagnostics Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[#101828]">Vi-Scan Diagnostics provides</h3>
              </div>

              <h1 className="text-[#101828] mt-10 sm:text-3xl max-lg:text-center max-lg:justify-center text-2xl md:text-4xl mb-8 xl:text-5xl font-medium leading-tight">
                Empowering Your Practice: Precision Diagnostics at Your Fingertips
              </h1>
              <p className="mt-4 max-lg:text-center max-lg:mx-auto max-sm:text-xs text-base xl:text-lg text-[#475467] max-w-xl">
                Vi-Scan is your essential partner for elevating diagnostic accuracy, streamlining workflows, and enhancing patient care.
              </p>

              {/* <div className="mt-8  flex max-lg:justify-center">
              <Button
                variant="white"
                size="lg"
                className="px-5 py-3 max-lg:text-xs max-lg:px-3 max-lg:py-2 text-primary-900 shadow-sm"
              >
                Join Our Network
                <span className="ml-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#440C46]">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </Button>
            </div> */}

              {/* Info cards */}
              <div className=" mt-20 max-lg:hidden flex gap-3">
                {/* Doctors count */}
                <div className=" xs:left-0 ">
                  <div className="bg-white/90 px-2 py-3 backdrop-blur-sm rounded-2xl">
                    <div className="bg-primary-50 relative overflow-hidden w-[100px] xs:w-[160px] p-3 cursor-default rounded-2xl">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center">
                          <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Profile 1" width={36} height={36} className="w-full h-full object-cover" />
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden -ml-2">
                            <Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" alt="Profile 2" width={36} height={36} className="w-full h-full object-cover" />
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden -ml-2">
                            <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Profile 3" width={36} height={36} className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <div className="bg-primary-300 rounded-full p-1">
                          <ArrowUpRight className="w-5 h-5 text-primary-900" />
                        </div>
                      </div>
                      <p className="text-primary-900 text-sm">More than 100+ Doctors on Vi-Scan.</p>
                    </div>
                  </div>
                </div>
                {/* AI insights */}
                <div className="rounded-2xl p-2 bg-[#2F0E31] border-4 border-primary-900/50  max-w-[250px] gap-2 text-white flex flex-row-reverse items-center justify-between">
                  <div className="max-w-[50%]">
                    <p className="text-xs sm:text-sm opacity-90">
                      Unlock AI-powered insights for precision and efficiency in patient care.
                    </p>
                  </div>
                  <div className="relative w-full h-full">
                    <span className="mb-3 -ml-1 absolute bottom-0 z-10 inline-block text-[10px] bg-white text-black rounded-full px-5 py-2.5"><Image src="/doctors/360-icon.svg" alt="Teeth" fill className="object-contain p-1" /></span>
                    <Image src="/doctors/teeth.webp" alt="Teeth" fill className="object-contain " />
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div
            className="relative lg:hidden lg:col-span-3 xl:col-span-1 px-6 py-10 lg:pl-8 rounded-3xl overflow-hidden h-full"
            style={{
              background:
                "linear-gradient(247.99deg, #EBB5F3 -35.73%, #FEF2F2 27.32%, #FEE2E1 41.31%, #C59BC7 113.67%)",
            }}
          >

            {/* Info cards */}
            <div className=" lg:hidden grid gap-3">
              {/* Doctors count */}
              <div className=" xs:left-0  flex justify-center">
                <div className="bg-white/90 px-2  py-3 backdrop-blur-sm max-w-[250px] rounded-2xl">
                  <div className="bg-primary-50 relative overflow-hidden  p-3 cursor-default rounded-2xl">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden">
                          <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Profile 1" width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden -ml-2">
                          <Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" alt="Profile 2" width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden -ml-2">
                          <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Profile 3" width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="bg-primary-300 rounded-full p-1">
                        <ArrowUpRight className="w-5 h-5 text-primary-900" />
                      </div>
                    </div>
                    <p className="text-primary-900 max-xs:text-xs text-sm">More than 100+ Doctors on Vi-Scan.</p>
                  </div>
                </div>
              </div>
              {/* AI insights */}
              <div className="rounded-2xl px-2 py-3 bg-[#2F0E31] max-w-[280px] border-4 border-primary-900/50  gap-2 text-white flex mx-auto flex-row-reverse items-center justify-between">
                <div className="max-w-[50%]">
                  <p className="max-xs:text-xs text-sm opacity-90">
                    Unlock AI-powered insights for precision and efficiency in patient care.
                  </p>
                </div>
                <div className="relative w-full h-full">
                  <span className="mb-0  absolute bottom-0 z-10 inline-block text-[10px] bg-white text-black rounded-full px-5 py-2.5"><Image src="/doctors/360-icon.svg" alt="Teeth" fill className="object-contain p-1" /></span>
                  <Image src="/doctors/teeth.webp" alt="Teeth" fill className="object-contain " />
                </div>
              </div>
            </div>
          </div>



          {/* Right */}
          <div className="relative lg:col-span-2 xl:col-span-1 h-full rounded-3xl overflow-hidden">
            <div className="relative h-full rounded-3xl border border-[#EAECF0] overflow-hidden bg-white">
              <Image
                src="/doctors/doctor-hero-img.webp"
                alt="Doctor"
                width={700}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
