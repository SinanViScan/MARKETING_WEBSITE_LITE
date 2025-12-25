import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

// Progress calculation function for the quarter goal
const calculateProgressPath = (percentage: number) => {
  // This is a simplified calculation - you can adjust the path based on percentage
  // For now, we'll use the full path for 84%
  if (percentage >= 84) {
    return "M7.8292 86.3224C3.94859 86.3224 0.771991 83.1709 1.09858 79.304C2.41442 63.7245 8.09194 48.7444 17.5769 36.0254C28.4792 21.4058 43.8521 10.5242 61.4924 4.94006C79.1326 -0.644089 98.1346 -0.644084 115.775 4.94008C131.109 9.79431 144.73 18.6516 155.191 30.4876C157.782 33.4194 157.058 37.8883 153.865 40.1489C150.781 42.3316 146.544 41.6303 144.011 38.8271C135.296 29.1824 124.055 21.9572 111.432 17.9613C96.6144 13.2706 80.6528 13.2706 65.835 17.9612C51.0172 22.6519 38.1039 31.7925 28.946 44.0729C21.206 54.4519 16.4844 66.6234 15.2078 79.3076C14.8192 83.1687 11.7098 86.3224 7.8292 86.3224Z";
  }
  // You can add more conditions for different percentages
  return "M7.8292 86.3224C3.94859 86.3224 0.771991 83.1709 1.09858 79.304C2.41442 63.7245 8.09194 48.7444 17.5769 36.0254C28.4792 21.4058 43.8521 10.5242 61.4924 4.94006C79.1326 -0.644089 98.1346 -0.644084 115.775 4.94008C131.109 9.79431 144.73 18.6516 155.191 30.4876C157.782 33.4194 157.058 37.8883 153.865 40.1489C150.781 42.3316 146.544 41.6303 144.011 38.8271C135.296 29.1824 124.055 21.9572 111.432 17.9613C96.6144 13.2706 80.6528 13.2706 65.835 17.9612C51.0172 22.6519 38.1039 31.7925 28.946 44.0729C21.206 54.4519 16.4844 66.6234 15.2078 79.3076C14.8192 83.1687 11.7098 86.3224 7.8292 86.3224Z";
};

export default function InsuranceHero() {
  const quarterGoalPercentage = 84; // You can make this dynamic

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#FDF2FF",
      }}
    >
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute left-0 -top-14 z-0 w-full h-[338px] lg:hidden"
          viewBox="0 0 393 338"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="196.921"
            cy="94.7762"
            r="243.133"
            transform="rotate(15 196.921 94.7762)"
            fill="#FCEBFF"
          />
        </svg>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center  lg:min-h-[560px]">
          {/* Left content */}
          <div className="relative px-2 lg:px-6 py-4 lg:pl-8">
            {/* SVG Circle behind text and buttons */}
            {/* Small device circle */}

            {/* Large device circle */}
            <svg
              className="absolute xl:-top-48 -top-40 h-[500px] -left-16 z-0 hidden lg:block lg:w-[740px] lg:h-[560px] xl:w-[838px] xl:h-[586px]"
              viewBox="0 0 838 586"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="289.784"
                cy="38.2263"
                r="547.445"
                transform="rotate(15 289.784 38.2263)"
                fill="#FCEBFF"
              />
            </svg>

            <div className="relative z-10 flex max-lg:justify-center items-center mb-5 gap-3">
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

            <h1 className="relative z-10 text-[#101828] mt-2 sm:text-4xl max-lg:text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight">
              Transform Dental Insurance Processing
            </h1>
            <p className="relative z-10 mt-4 max-lg:text-center max-lg:mx-auto text-sm md:text-base text-[#475467] max-w-lg">
              Fast, accurate diagnostics that power smarter claims and happier
              customers.
            </p>

            <div className="relative z-10 mt-5 flex max-lg:justify-center">
              <Button
                variant="primary"
                size="md"
                className="px-3 flex max-lg:mx-auto text-sm shadow-sm"
              >
                Contact Sales
                <div className="bg-white rounded-full p-2 ml-1.5">
                  <ArrowRight className="w-3 h-3 text-primary-900" />
                </div>
              </Button>
            </div>
          </div>

          {/* Right: single hero image (desktop and mobile) */}
          <div className="relative order-2 lg:order-none w-full  lg:mt-0">
            {/* Cards overlay */}
            <div className="absolute lg:w-[60%] md:w-[56%] md:pl-16 lg:pl-0 w-[40%] lg:-left-48 h-full z-20 flex flex-col justify-between py-4 sm:py-16 lg:py-8 px-2 lg:px-4">
              {/* Revenue Boost Card - Top Right */}
              <div className="bg-white/40 rounded-t-lg rounded-xl max-w-[160px] xl:max-w-[200px] ml-auto sm:ml-[10%] lg:ml-16 xl:ml-0">
                <div className="pb-0">
                  <div className="mb-1 p-2 xl:p-3">
                    <h4 className="text-xs xl:text-sm font-medium text-gray-800 leading-tight">
                      Boost your revenue with
                    </h4>
                    <h4 className="text-xs xl:text-sm font-medium text-gray-800">
                      Vi-Scan
                    </h4>
                  </div>
                  <div className="relative h-8 xl:h-12 w-full overflow-hidden">
                    <svg
                      className="w-full h-full rounded-b-2xl"
                      viewBox="0 0 186 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <g clipPath="url(#clip0_1008_5362)">
                        <mask
                          id="mask0_1008_5362"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="-50"
                          y="0"
                          width="241"
                          height="74"
                        >
                          <rect
                            x="-49.877"
                            y="0.22168"
                            width="240.357"
                            height="73.1057"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_1008_5362)">
                          <path
                            d="M11.4088 43.2467L-10.0709 64.0571C-13.3755 67.2588 -17.5309 69.4431 -22.0419 70.3497L-43.9789 74.7584C-47.4966 75.4654 -50.0273 78.5554 -50.0273 82.1435C-50.0273 86.2997 -46.661 89.6706 -42.5048 89.6761L174.796 89.9677C188.063 89.9855 198.828 79.2352 198.828 65.9678V14.1132C198.828 10.3788 197.071 6.86194 194.086 4.61848C190.347 1.80817 185.306 1.45475 181.21 3.71577L158.569 16.2162C152.978 19.3033 146.387 20.0344 140.255 18.2475L123.26 13.2951C116.001 11.1801 108.171 12.6087 102.127 17.1506L93.1803 23.8739C87.6684 28.0161 80.6414 29.5876 73.8901 28.188L50.3971 23.3177C43.4312 21.8736 36.1836 23.5943 30.6102 28.0154L11.4088 43.2467Z"
                            fill="url(#paint0_linear_1008_5362)"
                            stroke="#CE59DC"
                            strokeWidth="2.30274"
                          />
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1008_5362"
                          x1="74.4003"
                          y1="8.18182"
                          x2="74.4003"
                          y2="90"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F9CDFF" />
                          <stop offset="1" stopColor="#FDEFFF" />
                        </linearGradient>
                        <clipPath id="clip0_1008_5362">
                          <rect width="186" height="73" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* 24-hour Support Card - Middle Right */}
              <div className="bg-white/40 rounded-xl max-w-[150px] xl:max-w-[180px] ml-auto lg:ml-auto p-2 xl:p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 xl:w-12 xl:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-1 xl:mb-3">
                    <svg
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.166016"
                        y="0.584961"
                        width="47.5472"
                        height="47.5472"
                        rx="9.50943"
                        fill="#F9EBFC"
                      />
                      <path
                        d="M34.2681 12.5195H13.6136C13.2128 12.5203 12.8286 12.6798 12.5453 12.9632C12.2619 13.2466 12.1023 13.6308 12.1016 14.0315V30.6921C12.1016 31.5251 12.7805 32.2041 13.6136 32.2041H21.5159V35.3422H19.3763C19.1395 35.3422 18.9484 35.5333 18.9484 35.7701C18.9484 36.0069 19.1395 36.198 19.3763 36.198H28.5053C28.7421 36.198 28.9333 36.0069 28.9333 35.7701C28.9333 35.5333 28.7421 35.3422 28.5053 35.3422H26.3657V32.2041H34.2681C35.1011 32.2041 35.7801 31.5251 35.7801 30.6921V14.0315C35.7801 13.1985 35.1011 12.5195 34.2681 12.5195ZM13.6136 13.3754H34.2681C34.4421 13.3754 34.609 13.4445 34.732 13.5676C34.8551 13.6906 34.9242 13.8575 34.9242 14.0315V27.3542H12.9574V14.0315C12.9574 13.8575 13.0265 13.6906 13.1496 13.5676C13.2726 13.4445 13.4395 13.3754 13.6136 13.3754ZM34.2681 31.3482H13.6136C13.5274 31.3482 13.4421 31.3312 13.3625 31.2983C13.2829 31.2653 13.2105 31.217 13.1496 31.156C13.0887 31.0951 13.0403 31.0228 13.0074 30.9432C12.9744 30.8636 12.9574 30.7782 12.9574 30.6921V28.2101H34.9242V30.6921C34.9242 30.8661 34.8551 31.033 34.732 31.156C34.609 31.2791 34.4421 31.3482 34.2681 31.3482ZM15.2397 20.9354C15.2397 18.6531 17.094 16.7988 19.3763 16.7988C19.4562 16.7988 19.5189 16.8615 19.5189 16.9414V20.7927H23.3702C23.4501 20.7927 23.5129 20.8555 23.5129 20.9354C23.5129 23.2176 21.6585 25.072 19.3763 25.072C17.094 25.072 15.2397 23.2176 15.2397 20.9354ZM20.9453 19.2237V15.8003C20.9453 15.7204 21.0081 15.6576 21.088 15.6576C23.0536 15.6576 24.654 17.2581 24.654 19.2237C24.654 19.3036 24.5913 19.3663 24.5114 19.3663H21.088C21.0081 19.3663 20.9453 19.3036 20.9453 19.2237ZM26.3657 17.512C26.3657 17.2752 26.5569 17.0841 26.7936 17.0841H32.4993C32.7361 17.0841 32.9272 17.2752 32.9272 17.512C32.9272 17.7488 32.7361 17.9399 32.4993 17.9399H26.7936C26.5569 17.9399 26.3657 17.7488 26.3657 17.512ZM26.3657 20.3648C26.3657 20.128 26.5569 19.9369 26.7936 19.9369H32.4993C32.7361 19.9369 32.9272 20.128 32.9272 20.3648C32.9272 20.6016 32.7361 20.7927 32.4993 20.7927H26.7936C26.5569 20.7927 26.3657 20.6016 26.3657 20.3648ZM26.3657 23.2176C26.3657 22.9809 26.5569 22.7897 26.7936 22.7897H30.217C30.4538 22.7897 30.645 22.9809 30.645 23.2176C30.645 23.4544 30.4538 23.6456 30.217 23.6456H26.7936C26.5569 23.6456 26.3657 23.4544 26.3657 23.2176Z"
                        fill="#CE59DC"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xs xl:text-sm font-semibold text-gray-800 mb-1 xl:mb-2">
                    24 hour support
                  </h4>
                  <p className="text-[10px] xl:text-xs text-gray-600 leading-tight">
                    All round the clock get support for your queries
                  </p>
                </div>
              </div>

              {/* Quarter Goal Card - Bottom Right */}
              <div className="bg-white/40 rounded-xl max-w-[160px] xl:max-w-[180px] ml-auto sm:ml-[10%] xl:ml-16 p-3 xl:p-4">
                <h4 className="text-xs xl:text-sm font-semibold text-gray-800 mb-2 xl:mb-3 text-center">
                  Quarter goal
                </h4>
                <div className="relative w-full h-16 xl:h-20 mb-2 xl:mb-3">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 178 87"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background circle */}
                    <path
                      d="M7.8292 86.3224C3.94859 86.3224 0.772013 83.171 1.09864 79.3042C1.84473 70.4713 3.99609 61.7904 7.48846 53.576C11.9024 43.1941 18.3719 33.7609 26.5278 25.815C34.6836 17.869 44.366 11.5659 55.0222 7.26561C65.6783 2.9653 77.0995 0.751952 88.6336 0.751953C100.168 0.751955 111.589 2.9653 122.245 7.26562C132.901 11.5659 142.583 17.869 150.739 25.815C158.895 33.7609 165.365 43.1941 169.779 53.576C173.271 61.7904 175.422 70.4713 176.168 79.3042C176.495 83.171 173.319 86.3224 169.438 86.3224C165.557 86.3224 162.448 83.1688 162.059 79.3077C161.351 72.2744 159.581 65.3682 156.795 58.8155C153.088 50.0947 147.653 42.1708 140.802 35.4962C133.952 28.8216 125.818 23.527 116.867 19.9147C107.916 16.3024 98.3222 14.4432 88.6336 14.4432C78.9449 14.4432 69.3511 16.3024 60.4 19.9147C51.4488 23.527 43.3156 28.8216 36.4647 35.4962C29.6138 42.1708 24.1794 50.0947 20.4717 58.8154C17.6858 65.3682 15.9157 72.2744 15.2078 79.3077C14.8192 83.1688 11.7098 86.3224 7.8292 86.3224Z"
                      fill="#EBB4F3"
                    />
                    {/* Progress circle - dynamic based on value */}
                    <path
                      d={calculateProgressPath(quarterGoalPercentage)}
                      fill="#CE59DC"
                    />
                    {/* Percentage text */}
                    <text
                      x="89"
                      y="65"
                      textAnchor="middle"
                      className="text-lg xl:text-2xl font-bold fill-gray-800"
                    >
                      {quarterGoalPercentage}%
                    </text>
                  </svg>
                </div>
                <p className="text-[10px] xl:text-xs text-primary-700 text-center">
                  All goals →
                </p>
              </div>
            </div>
            <div className="relative w-full h-[400px]  sm:h-[550px] md:h-[600px] lg:h-[560px] flex justify-end">
              {/* Decorative Circle - Behind the image */}
              {/* Small device circle */}
              <svg
                className="absolute -bottom-0 -right-8 z-0 w-[350px] h-[400px] sm:w-[500px] sm:h-[500px] lg:hidden"
                viewBox="0 0 623 533"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="374.709"
                  cy="375.291"
                  r="374.709"
                  fill="url(#paint0_linear_right_circle_small)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_right_circle_small"
                    x1="962.839"
                    y1="-221.174"
                    x2="-202.283"
                    y2="274.932"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EBB5F3" />
                    <stop offset="0.422047" stopColor="#FEF2F2" />
                    <stop offset="0.515642" stopColor="#FEE2E1" />
                    <stop offset="1" stopColor="#C59BC7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Large device circle */}
              <svg
                className="absolute -bottom-28 -right-24 z-0 hidden lg:block lg:w-[570px] lg:h-[500px] xl:w-[623px] xl:h-[533px]"
                viewBox="0 0 623 533"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="374.709"
                  cy="375.291"
                  r="374.709"
                  fill="url(#paint0_linear_right_circle_large)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_right_circle_large"
                    x1="962.839"
                    y1="-221.174"
                    x2="-202.283"
                    y2="274.932"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EBB5F3" />
                    <stop offset="0.422047" stopColor="#FEF2F2" />
                    <stop offset="0.515642" stopColor="#FEE2E1" />
                    <stop offset="1" stopColor="#C59BC7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Hero Image - Aligned to the right */}
              <div className="relative z-10 w-full h-full ">
                <Image
                  src="/insurance/hero-person.webp"
                  alt="Professional pointing at data"
                  fill
                  className="object-contain object-right"
                  style={{
                    objectPosition: "right bottom",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
