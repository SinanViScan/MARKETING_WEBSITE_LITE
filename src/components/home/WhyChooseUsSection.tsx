import Link from "next/link";
import ButtonWithArrow from "@/components/ui/button-with-arrow";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import LinkedInIcon from "@/components/ui/icons/LinkedInIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import YouTubeIcon from "@/components/ui/icons/YouTubeIcon";
import HourglassIcon from "@/components/ui/icons/HourglassIcon";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white pt-10 responsive-margin">
      <div className="mx-auto">
        {/* Top Section: Why Choose Us pill, section number, divider, heading, and description */}
        <div className="mb-12">
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
              Why Choose Us
            </span>
            <span className="text-xs text-gray-500 font-medium">(03)</span>
          </div>
          <hr className="border-gray-200 mb-8" />
          <div className="grid md:grid-cols-2 gap-8 items-start max-sm:items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="section-header">
                  Your Partner in
                  <br /> Exceptional &nbsp;
                  <span
                    className="text-transparent font-medium"
                    style={{
                      background:
                        "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Dental Care
                  </span>
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="max-sm:items-center flex flex-col">
                <p className="section-subtext">
                  We combine cutting-edge imaging technology with advanced AI
                  assisted quality checks, expert radiologist review,
                  collaborative treatment planning, ensuring the most accurate
                  and reliable diagnostic insights.
                </p>
                <div className="flex space-x-2 mt-3">
                  <a
                    href="https://www.facebook.com/ViScanDiagnostics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <FacebookIcon
                      className="text-white"
                      width={11}
                      height={16}
                    />
                  </a>
                  {/* <div className="w-8 h-8 bg-black rounded-full flex cursor-pointer items-center justify-center hover:bg-gray-800 transition-colors">
                    <TwitterIcon
                      className="text-white"
                      width={14}
                      height={14}
                    />
                  </div> */}
                  <a
                    href="https://in.linkedin.com/company/vi-scan-diagnostics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-700 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-800 transition-colors"
                  >
                    <LinkedInIcon
                      className="text-white"
                      width={15}
                      height={14}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/viscan_diagnostics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center cursor-pointer justify-center hover:opacity-90 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                    }}
                  >
                    <InstagramIcon
                      className="text-white"
                      width={14}
                      height={14}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCwchI5vi9HbZDKP2UIt3mMQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-red-600 rounded-full cursor-pointer flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <YouTubeIcon
                      className="text-white"
                      width={16}
                      height={12}
                    />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.3}>
            <div className="flex  sm:flex-row max-sm:mx-auto gap-4 mt-2 max-w-[186px]">
              <Link href="/about">
                <ButtonWithArrow
                  variant="primary"
                  size="sm"
                  className="max-sm:mt-4 max-sm:mx-auto"
                  arrowHoverAnimation={true}
                >
                  Read More About Us
                </ButtonWithArrow>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid gap-9 items-start">
          {/* Left Content */}

          {/* Right Content - Feature Cards */}
          <div className="grid overflow-hidden grid-cols-1 xl:flex  xl:space-x-4 max-xl:gap-4">
            <div className="bg-[#F2F4F7] min-h-[170px] rounded-3xl p-6 xl:max-w-[630px] 3xl:max-w-[50%]">
              <h3 className="text-responsive-xl  font-medium text-[#101828] mb-2">
                India&apos;s Leading Diagnostic Network
              </h3>
              <div className="flex max-xs:flex-col items-start justify-between gap-2">
                <p className="text-[#667085] w-[100%] xs:w-[50%] sm:w-[70%] text-responsive-base leading-relaxed">
                  Benefit from our rapidly expanding chain of advanced centers,
                  offering trusted, high-quality services.
                </p>
                <Image
                  src="/home/why-choose/report-read.webp"
                  alt="Dentist typing on laptop"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="relative scale-110 -bottom-4 object-cover"
                />
              </div>
            </div>

            {/* Second Card - Seamless Digital Integration */}
            <div className="bg-gradient-to-br min-h-[170px] overflow-hidden from-[#E1A1BC] to-[#FDF0F2] rounded-3xl xl:flex-1">
              <div className="flex max-sm:flex-col h-full items-start justify-between">
                <div className="flex-1 p-6">
                  <h3 className="text-responsive-xl max-sm:text-center font-normal text-white mb-2">
                    Seamless Digital Integration
                  </h3>
                  <p className="text-white  max-sm:text-center pr-4 text-responsive-base leading-relaxed">
                    Our SaaS platform enables seamless digital integration
                    across the dental ecosystem, consolidating patient data, 2D
                    and 3D scan files, and end-to-end workflow automation.
                  </p>
                </div>
                <div className="sm:w-[280px] w-[50%] relative max-sm:w-full max-sm:h-[180px] h-full sm:h-[180px] overflow-hidden flex items-end self-end sm:justify-end justify-center">
                  <div className="w-full h-[90%] transform overflow-hidden flex items-center justify-center">
                    <Image
                      src="/home/why-choose/mobile-layer-img.webp"
                      alt="Mobile app interface"
                      width={180}
                      height={180}
                      className="w-full h-full max-sm:object-contain  rounded-t-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:flex max-xl:gap-4 xl:space-x-4">
            {/* Third Card - 1-3 Hour Rapid Reports */}
            <div className="bg-[#F2F4F7] min-h-[170px]  rounded-3xl w-[100%] overflow-hidden relative">
              <div className="p-6 relative">
                <div className="flex  max-sm:justify-center items-center space-x-2 mb-2">
                  <HourglassIcon
                    className="text-[#1D2939]"
                    width={24}
                    height={25}
                  />
                  <h3 className="text-responsive-xl font-medium text-[#101828]">
                    2-6 Hour Rapid Report Option
                  </h3>
                </div>
                <p className="text-[#667085]  max-sm:text-center text-responsive-base leading-relaxed mb-0">
                  We deliver precise diagnostic reports within 2-6 hours,
                  empowering dentists and patients to begin treatments the very
                  same day, in an informed and data backed manner, eliminating
                  unnecessary delays.
                </p>
              </div>

              {/* Images container */}
              <div className="flex  relative h-[250px]">
                <div className="w-[70%] py-6 sm:pl-6 flex mx-auto align-top  sm:justify-end justify-center ">
                  <Image
                    src="/home/why-choose/opg-report.webp"
                    alt="OPG Report"
                    width={280}
                    height={180}
                    className="w-full object-cover rounded-3xl"
                  />
                </div>
                <div className="w-[50%] max-sm:hidden flex justify-center items-end">
                  <Image
                    src="/home/why-choose/dental-report.webp"
                    alt="Report showing animation"
                    width={280}
                    height={280}
                    loading="lazy"
                    className="object-contain scale-125"
                  />
                </div>
              </div>
              {/* </div> */}
            </div>

            {/* Fourth Card - Statistics Card */}
            <div className="flex w-full max-lg:mt-8 relative 2xl:w-[700px] sm:h-[420px] h-[280px] z-10 items-center lg:-mt-4 justify-end rounded-3xl bg-white">
              {/* Largest Circle - 150k+ OPGS Captured */}
              <div className="border border-1 border-[#F2F4F7] absolute top-0 max-lg:left-1/2 max-lg:-translate-x-1/2  right-0 rounded-full   mx-auto w-[455px] h-[455px] max-lg:w-[364px] max-lg:h-[364px] max-w-[90vw] max-h-[90vw] sm:w-[455px] sm:h-[455px] text-center flex items-center justify-start">
                <div className="flex relative -ml-[3px] items-center">
                  <div className="w-[6px] h-[6px] absolute top-[calc(50%+35px)] left-0 bg-[#DF88EA] rounded-full"></div>
                  <div className="text-left ml-3 mt-24 z-10">
                    <div className="stats-number font-medium text-[#1D2939]">
                      200k+
                    </div>
                    <div className="stats-label font-medium max-md:font-normal text-[#667085] whitespace-nowrap">
                      Patients Diagnosed
                    </div>
                  </div>
                </div>

                {/* Second Circle - 100k+ Patients Diagnosed */}
                <div className="border bg-[#F2F4F7] border-1 border-[#F2F4F7] absolute top-[11px] max-xs:top-[2px] right-5 rounded-full  max-lg:w-[269px] max-lg:h-[269px]  w-[338px] h-[338px] max-w-[70vw] max-h-[70vw] sm:w-[338px] sm:h-[338px] text-center flex items-center justify-start">
                  <div className="flex relative -ml-[3px] items-center">
                    <div className="w-[6px] h-[6px] absolute top-[calc(50%+25px)] left-0 bg-[#DF88EA] rounded-full"></div>
                    <div className="text-left ml-3 z-10 mt-20">
                      <div className="stats-number font-medium text-[#1D2939]">
                        100k+
                      </div>
                      <div className="stats-label font-medium max-md:font-normal  text-[#667085] whitespace-nowrap">
                        Implants Planned
                      </div>
                    </div>
                  </div>

                  {/* Third Circle - 50k+ Centres Onboarded */}
                  <div className="border bg-white border-1 border-[#F2F4F7] absolute top-[24px] right-5 max-xs:top-[14px] rounded-full max-lg:w-[147px] max-lg:h-[147px] w-[185px] h-[185px] max-w-[40vw] max-h-[40vw] sm:w-[185px] sm:h-[185px] text-center flex items-center justify-start">
                    <div className="flex relative -ml-[3px] items-center">
                      <div className="w-[6px] h-[6px] absolute top-[calc(50%+10px)] left-0 bg-[#DF88EA] rounded-full"></div>
                      <div className="text-left ml-3 z-10 mt-16">
                        <div className="stats-number font-medium text-[#1D2939]">
                          10k+
                        </div>
                        <div className="stats-label max-md:font-normal  font-medium text-[#667085] whitespace-nowrap">
                          Dentist Network
                        </div>
                      </div>
                    </div>

                    {/* Smallest Circle - 10k+ Dentists Served */}
                    <div className="bg-[#F2F4F7] border-[#F2F4F7] absolute top-[20px] right-2.5 rounded-full max-xs:top-[14px] max-lg:w-[61px] max-lg:h-[61px] w-[75px] h-[75px] max-w-[20vw] max-h-[20vw] sm:w-[75px] sm:h-[75px] text-center flex items-center justify-start">
                      <div className="flex relative -ml-[2px] items-center">
                        <div className="w-[6px] h-[6px] absolute top-[50%] left-0 bg-[#DF88EA] rounded-full"></div>
                        <div className="text-left ml-3 z-10 mt-12">
                          <div className="stats-number font-medium text-[#1D2939]">
                            70+
                          </div>
                          <div className="stats-label max-md:font-normal font-medium text-[#667085] whitespace-nowrap">
                            Diagnostic Centers
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
