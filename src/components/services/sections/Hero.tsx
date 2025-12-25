"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/button";
import { ArrowUpRight, Calendar, PhoneCall } from "lucide-react";
import StarIcon from "@/components/ui/icons/StarIcon";

// Props to customize titles per service page
interface ServiceHeroProps {
  title?: string;
}



// Local SVG icon components for the control row
const CoreIconSettings = () => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip_core_settings)">
      <path
        d="M16.643 12.6326C16.0565 12.6326 15.5657 13.0497 15.4516 13.6029H14.071L12.5101 10.8994C12.5438 10.7927 12.5819 10.6875 12.6244 10.5841C12.669 10.4866 12.7115 10.3881 12.7518 10.2888H13.3365C13.4017 10.2888 13.4643 10.2628 13.5105 10.2167C13.5566 10.1705 13.5825 10.1079 13.5825 10.0427V8.78934H15.2935C15.4076 9.34249 15.8984 9.75966 16.4848 9.75966C17.1555 9.75966 17.7012 9.214 17.7012 8.54325C17.7012 7.8725 17.1555 7.32684 16.4848 7.32684C15.8984 7.32684 15.4076 7.74401 15.2935 8.29716H13.2945C13.3066 8.20716 13.3167 8.11853 13.3244 8.03173H14.3165C14.3818 8.03173 14.4444 8.0058 14.4905 7.95965C14.5367 7.9135 14.5626 7.8509 14.5626 7.78563V5.87521C14.5626 5.80994 14.5367 5.74734 14.4905 5.70119C14.4444 5.65504 14.3818 5.62911 14.3165 5.62911H12.8323L14.071 3.4836H15.4517C15.5658 4.03675 16.0566 4.45391 16.643 4.45391C17.3138 4.45391 17.8594 3.90825 17.8594 3.2375C17.8594 2.56676 17.3138 2.0211 16.643 2.0211C16.0566 2.0211 15.5658 2.43826 15.4517 2.99141H13.929C13.8858 2.99141 13.8433 3.00278 13.8059 3.02438C13.7685 3.04598 13.7375 3.07705 13.7159 3.11446L12.317 5.53736C12.0551 5.40847 11.7465 5.33675 11.3959 5.32406C10.8354 5.30385 10.3909 5.44282 9.99875 5.56552C9.74577 5.64465 9.50379 5.7202 9.24617 5.75026V2.54841C9.79931 2.43429 10.2165 1.94347 10.2165 1.35703C10.2165 0.68632 9.67082 0.140625 9.00007 0.140625C8.32933 0.140625 7.78366 0.686285 7.78366 1.35703C7.78366 1.94347 8.20083 2.43429 8.75398 2.54841V5.75002C8.49649 5.71985 8.2543 5.64465 8.00135 5.56552C7.60922 5.44282 7.16492 5.30385 6.60417 5.32406C6.25096 5.33686 5.94366 5.40851 5.68276 5.53679L4.28421 3.11446C4.26261 3.07705 4.23155 3.04598 4.19414 3.02438C4.15673 3.00278 4.11429 2.99141 4.07109 2.99141H2.54841C2.43429 2.43826 1.94347 2.0211 1.35703 2.0211C0.68632 2.0211 0.140625 2.56676 0.140625 3.2375C0.140625 3.90825 0.686285 4.45391 1.35703 4.45391C1.94347 4.45391 2.43429 4.03675 2.54841 3.4836H3.92903L5.27625 5.81706C5.16959 5.91785 5.07565 6.03376 4.99497 6.16496C4.64168 6.73935 4.59788 7.52024 4.70197 8.29716H2.54844C2.43432 7.74401 1.94351 7.32684 1.35707 7.32684C0.686356 7.32684 0.14066 7.8725 0.14066 8.54325C0.14066 9.214 0.68632 9.75966 1.35707 9.75966C1.94351 9.75966 2.43432 9.34249 2.54844 8.78934H4.7867C4.93024 9.47788 5.16565 10.1271 5.37571 10.5841C5.4182 10.6875 5.45631 10.7927 5.48993 10.8994L3.92906 13.6029H2.54844C2.43432 13.0498 1.94351 12.6326 1.35707 12.6326C0.686356 12.6326 0.14066 13.1783 0.14066 13.849C0.14066 14.5197 0.68632 15.0654 1.35707 15.0654C1.94351 15.0654 2.43432 14.6482 2.54844 14.0951H4.07113C4.11433 14.0951 4.15676 14.0837 4.19417 14.0621C4.23158 14.0405 4.26265 14.0095 4.28425 13.972L5.64975 11.6069C5.71437 12.0663 5.71402 12.5587 5.64796 13.0802C5.6473 13.0854 5.64681 13.0905 5.64648 13.0956C5.58851 14.0144 5.64072 14.8571 5.80173 15.6003C5.94872 16.2786 6.20578 17.1753 6.59598 17.595C6.75327 17.7642 6.94487 17.8581 7.13549 17.8594H7.13971C7.38172 17.8594 7.58637 17.7148 7.70158 17.4621C7.79562 17.2558 7.81362 16.9755 7.84086 16.5512C7.84761 16.4462 7.85496 16.3316 7.86421 16.2066C7.90724 15.6235 7.97027 14.9942 8.13881 14.3432C8.45452 13.1233 8.82686 12.5501 9.00007 12.5191C9.17325 12.5501 9.54556 13.1233 9.86133 14.3432C10.0298 14.9941 10.0929 15.6235 10.1359 16.2066C10.1451 16.3316 10.1525 16.4462 10.1592 16.5511C10.1865 16.9755 10.2045 17.2558 10.2985 17.462C10.4137 17.7148 10.6183 17.8594 10.8604 17.8594H10.8647C11.0553 17.858 11.2469 17.7642 11.4042 17.595C11.7944 17.1753 12.0515 16.2786 12.1984 15.6003C12.3594 14.8571 12.4116 14.0144 12.3537 13.0956C12.3534 13.0905 12.3529 13.0853 12.3522 13.0802C12.2861 12.5587 12.2858 12.0663 12.3504 11.607L13.7159 13.972C13.7375 14.0095 13.7686 14.0405 13.806 14.0621C13.8434 14.0837 13.8858 14.0951 13.929 14.0951H15.4517C15.5658 14.6482 16.0566 15.0654 16.643 15.0654C17.3138 15.0654 17.8594 14.5197 17.8594 13.849C17.8594 13.1783 17.3138 12.6326 16.643 12.6326L16.643 12.6326Z"
        fill="#7D2682"
      />
    </g>
    <defs>
      <clipPath id="clip_core_settings">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CoreIconLaboratory = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 4L10.5 6" stroke="#7D2682" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 4L5.5 6" stroke="#7D2682" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M2.50001 4.98501C2.49563 9.44876 3.96751 13 5.25001 13.9088C5.3225 13.9587 5.40691 13.9887 5.49469 13.9956C5.58248 14.0025 5.67053 13.9861 5.74994 13.948C5.82935 13.91 5.8973 13.8516 5.94691 13.7789C5.99653 13.7061 6.02606 13.6216 6.03251 13.5338C6.12501 12.2694 6.50001 10 8.00001 10C9.50001 10 9.87501 12.2694 9.96938 13.5331C9.97583 13.621 10.0054 13.7055 10.055 13.7783C10.1046 13.851 10.1725 13.9094 10.252 13.9474C10.3314 13.9855 10.4194 14.0019 10.5072 13.995C10.595 13.9881 10.6794 13.9581 10.7519 13.9081C12.0325 12.9988 13.5019 9.44813 13.5019 4.98438C13.4987 4.19081 13.1809 3.4309 12.6181 2.8714C12.0553 2.3119 11.2936 1.99851 10.5 2.00001H5.50001C4.70665 1.99901 3.94528 2.3127 3.38289 2.87228C2.82049 3.43186 2.50299 4.19165 2.50001 4.98501Z"
      stroke="#7D2682" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const CoreIconClipboard = () => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip_core_clipboard)">
      <path
        d="M8.16005 15.7341H2.0824C1.89357 15.7205 1.71759 15.6334 1.59223 15.4915C1.46686 15.3497 1.40209 15.1643 1.41181 14.9752V3.57171C1.40492 3.38443 1.47097 3.20178 1.59605 3.06221C1.72113 2.92265 1.89548 2.83706 2.0824 2.82348H4.17181V3.07407C4.1746 3.27596 4.25701 3.46859 4.4011 3.61004C4.54519 3.75149 4.73931 3.83031 4.94123 3.82936H8.99299C9.19518 3.82936 9.38909 3.74904 9.53206 3.60607C9.67502 3.4631 9.75534 3.26919 9.75534 3.06701V2.82348H11.8483C11.9445 2.82573 12.0394 2.84717 12.1272 2.88655C12.2151 2.92592 12.2942 2.98244 12.36 3.05278C12.4257 3.12312 12.4767 3.20588 12.5101 3.2962C12.5434 3.38652 12.5584 3.48259 12.5542 3.57877V6.49054C12.5551 6.55825 12.5826 6.62289 12.6309 6.67044C12.6791 6.718 12.7441 6.74466 12.8118 6.74465C12.8792 6.74465 12.9438 6.71788 12.9915 6.67022C13.0392 6.62257 13.0659 6.55793 13.0659 6.49054V3.57171C13.0745 3.24466 12.9529 2.92757 12.728 2.69003C12.503 2.45248 12.193 2.31389 11.8659 2.30465H9.75534V2.05407C9.75535 1.85155 9.67514 1.65728 9.53227 1.51375C9.3894 1.37022 9.1955 1.28912 8.99299 1.28818H7.93417C7.8757 1.07176 7.74757 0.880621 7.56958 0.744329C7.39158 0.608036 7.17364 0.53418 6.94946 0.53418C6.72528 0.53418 6.50734 0.608036 6.32935 0.744329C6.15135 0.880621 6.02322 1.07176 5.96476 1.28818H4.94123C4.7381 1.28818 4.5433 1.36887 4.39967 1.5125C4.25603 1.65614 4.17534 1.85094 4.17534 2.05407V2.30465H2.0824C1.75506 2.3139 1.44469 2.45237 1.21916 2.68981C0.993623 2.92725 0.871279 3.24432 0.878874 3.57171V14.9752C0.873166 15.3014 0.99635 15.6167 1.22168 15.8526C1.44701 16.0885 1.7563 16.226 2.0824 16.2352H8.16005C8.22745 16.2352 8.29208 16.2085 8.33974 16.1608C8.38739 16.1132 8.41417 16.0485 8.41417 15.9811C8.41146 15.9152 8.38361 15.8529 8.33634 15.807C8.28907 15.761 8.22597 15.7349 8.16005 15.7341ZM4.68711 2.05407C4.68711 2.02086 4.6937 1.98798 4.70652 1.95735C4.71933 1.92671 4.7381 1.89893 4.76175 1.87561C4.78539 1.8523 4.81343 1.83391 4.84425 1.82153C4.87506 1.80915 4.90802 1.80301 4.94123 1.80348H6.20829C6.27662 1.80348 6.34215 1.77633 6.39047 1.72801C6.43879 1.6797 6.46593 1.61416 6.46593 1.54583C6.4601 1.47624 6.46877 1.4062 6.49139 1.34013C6.51402 1.27407 6.55011 1.21342 6.59738 1.16201C6.64465 1.11061 6.70208 1.06958 6.76602 1.04151C6.82997 1.01345 6.89904 0.998955 6.96887 0.998955C7.03871 0.998955 7.10778 1.01345 7.17172 1.04151C7.23567 1.06958 7.29309 1.11061 7.34036 1.16201C7.38764 1.21342 7.42373 1.27407 7.44635 1.34013C7.46898 1.4062 7.47765 1.47624 7.47181 1.54583C7.47181 1.61416 7.49896 1.6797 7.54728 1.72801C7.5956 1.77633 7.66113 1.80348 7.72946 1.80348H8.99652C9.06298 1.80348 9.12672 1.82988 9.17371 1.87687C9.22071 1.92387 9.24711 1.98761 9.24711 2.05407V3.06701C9.24711 3.13347 9.22071 3.1972 9.17371 3.2442C9.12672 3.29119 9.06298 3.31759 8.99652 3.31759H4.94123C4.87477 3.31759 4.81103 3.29119 4.76403 3.2442C4.71704 3.1972 4.69064 3.13347 4.69064 3.06701L4.68711 2.05407Z"
        fill="#7D2682"
      />
    </g>
    <defs>
      <clipPath id="clip_core_clipboard">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function Hero({ title = "Daily Dental Care for a Healthy Smile" }: ServiceHeroProps) {

  return (
    <section className="relative responsive-margin rounded-3xl overflow-hidden bg-gradient-desktop ">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile layout */}
        <div className="md:hidden py-6">
          {/* Pill */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg
              className="w-auto h-[9px]"
              viewBox="0 0 166 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="158"
                height="1"
                transform="matrix(-1 0 0 1 158 4)"
                fill="url(#paint_mobile_right)"
              />
              <circle cx="161.5" cy="4.5" r="4.5" fill="#FCF5FE" stroke="#A844A1" strokeWidth="0.75" />
              <defs>
                <linearGradient
                  id="paint_mobile_right"
                  x1="0"
                  y1="0.5"
                  x2="158"
                  y2="0.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EBB5F3" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
            <span
              className="text-[#440C46] flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(90deg, #A844A1 0%, #FFFFFF 50%, #440C46 100%) border-box",
                border: "1px solid transparent",
              }}
            >
              <StarIcon className="w-3.5 h-3.5" /> 24x7 Service Available
            </span>
            <svg
              className="w-auto h-[9px]"
              viewBox="0 0 166 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "scaleX(-1)" }}
            >
              <rect
                width="158"
                height="1"
                transform="matrix(-1 0 0 1 158 4)"
                fill="url(#paint_mobile_left)"
              />
              <circle cx="161.5" cy="4.5" r="4.5" fill="#FCF5FE" stroke="#A844A1" strokeWidth="0.75" />
              <defs>
                <linearGradient
                  id="paint_mobile_left"
                  x1="0"
                  y1="0.5"
                  x2="158"
                  y2="0.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EBB5F3" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-center text-black md:text-white text-[28px] leading-snug">
            {title}
          </h1>

          {/* CTAs */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <Button variant="primary" size="sm" className="py-2 px-3">
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center mr-2">
                <Calendar className="w-4 h-4 text-[#440C46]" />
              </span>
              Book Appointment
            </Button>
            <Button variant="dashed" size="sm" className="py-2 px-3">
              <span className="w-7 h-7 rounded-full bg-[#440C46] flex items-center justify-center mr-2">
                <PhoneCall className="w-4 h-4 text-white" />
              </span>
              Contact Us
            </Button>
          </div>

          {/* Main image card with overlays */}
          <div className="mt-5">
            <div className="relative w-full h-[260px] rounded-2xl overflow-hidden">
              <Image
                src="/service-detail/hero.webp"
                alt="Hero"
                fill
                className="object-cover"
              />

              {/* Insights mini card */}
              <div className="absolute bottom-3 right-1 xs:right-3 bg-black/40 backdrop-blur-sm p-2 sm:p-3 border border-white/20 w-[140px] sm:w-[210px] rounded-2xl space-y-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-start text-xs font-normal">Insights</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <Image src="/service-detail/profile.webp" alt="Rhea" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-white text-xs leading-tight">
                    <p>Rhea</p>
                    <p>23 yr (Female)</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-white/90 text-[10px]">
                    <span>Monthly Report</span>
                    <span>Jul 25</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/70 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "90%",
                        background:
                          "linear-gradient(90deg, #A844A1 0%, #EAB7F0 50%, #FFFFFF 100%)",
                      }}
                    />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-2xl font-semibold leading-none">90%</span>
                    <span className="text-white text-xs leading-none">Loading</span>
                  </div>
                </div>
              </div>

              {/* Centres chip */}
              <div className="absolute bottom-3 left-1 xs:left-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-0">
                  <div className="bg-primary-50 relative overflow-hidden w-[100px] xs:w-[130px] p-3 cursor-default rounded-2xl">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                          <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Profile 1" width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden -ml-2">
                          <Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" alt="Profile 2" width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden -ml-2">
                          <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Profile 3" width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="bg-white rounded-full p-1">
                        <ArrowUpRight className="w-4 h-4 text-primary-900" />
                      </div>
                    </div>
                    <p className="text-primary-900 text-xs">More than 50+ centres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet layout */}
        <div className="hidden md:block">
        <Image
          src="/service-detail/hero.webp"
          alt="Hero"
          fill
          className="object-cover "
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-black/5" />

        <motion.div
          className="relative py-8 md:py-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative  overflow-hidden h-[280px] md:h-[420px] lg:h-[520px]">
            <div className="grid grid-cols-2 h-full w-full">
              <div className="h-full w-full bg-transparent flex flex-col justify-center md:justify-end">
                <div className="p-6 md:p-10 w-full h-full xl:space-y-10">
                  {/* Decorative lines + chip */}
                  <div className="flex items-center  justify-start gap-3 mb-4">
                    <svg
                      className="hidden sm:block w-auto h-[9px]"
                      viewBox="0 0 166 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="158"
                        height="1"
                        transform="matrix(-1 0 0 1 158 4)"
                        fill="url(#paint0_linear_right)"
                      />
                      <circle cx="161.5" cy="4.5" r="4.5" fill="#FCF5FE" />
                      <defs>
                        <linearGradient
                          id="paint0_linear_right"
                          x1="0"
                          y1="0.5"
                          x2="158"
                          y2="0.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EBB5F3" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span
                      className="text-primary-900 flex items-center justify-center gap-1 px-3 py-1 rounded-full text-xs md:text-sm font-normal whitespace-nowrap"
                      style={{
                        background:
                          "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)) padding-box, linear-gradient(90deg, #A844A1 0%, #FFFFFF 50%, #440C46 100%) border-box",
                        border: "1px solid transparent",
                      }}
                    >
                      <StarIcon className="w-3 h-3 text-primary-900" /> 24x7
                      Service Available
                    </span>
                    <svg
                      className="hidden sm:block  w-auto h-[9px]"
                      viewBox="0 0 166 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: "scaleX(-1)" }}
                    >
                      <rect
                        width="158"
                        height="1"
                        transform="matrix(-1 0 0 1 158 4)"
                        fill="url(#paint0_linear_left)"
                      />
                      <circle cx="161.5" cy="4.5" r="4.5" fill="#FCF5FE" />
                      <defs>
                        <linearGradient
                          id="paint0_linear_left"
                          x1="0"
                          y1="0.5"
                          x2="158"
                          y2="0.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EBB5F3" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h1 className="text-white max-w-md md:text-[30px] lg:text-[50px] leading-tight">
                    {title}
                  </h1>
                  {/* <p className="text-white/85 text-responsive-base max-w-2xl">
                    {meta.subtitle}
                  </p> */}
                  <div className="mt-6 flex items-center gap-3">
                    <Button variant="primary" className="py-1.5 px-3" size="sm">
                      <span className="w-7 h-7  rounded-full bg-white flex items-center justify-center mr-2">
                        <Calendar className="w-4 h-4 text-[#440C46]" />
                      </span>
                      Book&nbsp;Appointment
                    </Button>
                    <Button variant="white" className="py-1.5 px-3" size="sm">
                      <span className="w-7 h-7 rounded-full bg-[#440C46] flex items-center justify-center mr-2">
                        <PhoneCall className="w-4 h-4 text-white" />
                      </span>
                      Contact&nbsp;Us
                    </Button>
                  </div>

                  <div className="bg-white w-[140px]  mt-5 rounded-2xl p-1">
                    <div
                      className={`bg-primary-50 overflow-hidden relative w-full h  p-3  cursor-pointer transition-all duration-300 hover:scale-105 rounded-2xl hover:shadow-lg`}
                      //   onClick={onClick}
                    >
                      {/* Header with title and arrow */}
                      <div className="flex   justify-between items-start mb-3">
                        <div className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-gray-200 border-0  overflow-hidden">
                            <Image
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                              alt="Profile 1"
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-5 h-5 rounded-full bg-gray-200 border-0  overflow-hidden -ml-2">
                            <Image
                              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face"
                              alt="Profile 2"
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-5 h-5 rounded-full bg-gray-200 border-0 overflow-hidden -ml-2">
                            <Image
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                              alt="Profile 3"
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="bg-white rounded-full p-1 ">
                          <ArrowUpRight className="w-3.5 h-3.5 text-primary-900" />
                        </div>
                      </div>
                      <p className="text-primary-900 mb-1 text-[10.5px] font-normal">
                        More than 50+ centers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full  flex justify-end ">
                <div className="flex flex-col justify-between gap-2">
                  <div className="bg-black/10 backdrop-blur-sm p-3 self-end border border-0.5 border-neutral-200 w-[200px] bg-black rounded-2xl space-y-2">
                    <div className="flex justify-between items-center">
                      <h1 className="text-white text-start text-sm font-normal">
                        Insights
                      </h1>
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1020_16023)">
                            <path
                              d="M22.125 0H1.875C1.37786 0.000460704 0.901214 0.198153 0.549684 0.549684C0.198153 0.901214 0.000460704 1.37786 0 1.875L0 22.125C0.000460704 22.6221 0.198153 23.0988 0.549684 23.4503C0.901214 23.8018 1.37786 23.9995 1.875 24H22.125C22.6221 23.9995 23.0988 23.8018 23.4503 23.4503C23.8018 23.0988 23.9995 22.6221 24 22.125V1.875C23.9995 1.37786 23.8018 0.901214 23.4503 0.549684C23.0988 0.198153 22.6221 0.000460704 22.125 0ZM0.75 4.90869L1.5315 4.67945C2.01118 4.53247 2.52244 4.52277 3.00735 4.65144C3.49227 4.78012 3.93145 5.04203 4.27515 5.4075C4.62486 5.76452 4.86758 6.21235 4.9758 6.70024C5.08402 7.18814 5.05342 7.6966 4.88746 8.168L3.79981 11.4009C3.62875 11.9032 3.62593 12.4474 3.79175 12.9514C4.0385 13.6943 4.16365 14.4721 4.16236 15.2549C4.16021 16.4419 3.87204 17.6109 3.32227 18.6629L3.03136 19.2048L2.59717 16.6245C2.37092 15.2925 2.3413 13.9346 2.50927 12.594L2.68213 11.2053C2.71022 10.9886 2.69134 10.7684 2.62677 10.5596C2.56219 10.3508 2.45343 10.1584 2.30788 9.99537C2.11641 9.78161 1.86958 9.62494 1.59465 9.54269C1.31972 9.46043 1.0274 9.45579 0.75 9.52927V4.90869ZM0.75 10.3358C0.877226 10.2604 1.02306 10.2221 1.17092 10.2254C1.31879 10.2287 1.46277 10.2734 1.5865 10.3545C1.71024 10.4355 1.80877 10.5496 1.8709 10.6838C1.93303 10.818 1.95628 10.967 1.938 11.1138L1.76515 12.5017C1.588 13.9146 1.61908 15.3459 1.8574 16.7498L2.18273 18.6826L0.75 15.5544V10.3358ZM23.25 22.125C23.2497 22.4233 23.131 22.7092 22.9201 22.9201C22.7092 23.131 22.4233 23.2497 22.125 23.25H1.875C1.57673 23.2497 1.29077 23.131 1.07986 22.9201C0.868957 22.7092 0.750326 22.4233 0.75 22.125V17.3551L1.76806 19.5769C1.85122 19.7559 1.98283 19.9081 2.148 20.0162C2.31316 20.1243 2.50529 20.1839 2.70263 20.1885H2.72828C2.75318 20.1885 2.77615 20.1803 2.80074 20.1786L2.8147 20.1775L2.81777 20.1763C2.99143 20.1632 3.15899 20.1065 3.30492 20.0115C3.45084 19.9164 3.57043 19.7861 3.6526 19.6325L3.98512 19.0136C4.59196 17.8535 4.91003 16.5641 4.91235 15.2549C4.91345 14.3915 4.77545 13.5336 4.50366 12.7141C4.389 12.3653 4.39131 11.9885 4.51025 11.6411V11.6396L5.5979 8.40817C5.60876 8.37631 5.6137 8.34404 5.62363 8.31209C5.63347 8.34404 5.63836 8.37631 5.64917 8.40817L6.74121 11.6374C6.8623 12.0005 6.8587 12.3936 6.73096 12.7544C6.39573 13.7726 6.26863 14.8479 6.35721 15.9163C6.44579 16.9846 6.74824 18.0243 7.24658 18.9734L7.59229 19.6274C7.67001 19.7738 7.78169 19.8995 7.91796 19.9938C8.05424 20.0881 8.21114 20.1484 8.37552 20.1696L8.38623 20.1738C8.39346 20.175 8.4001 20.1724 8.40734 20.1731C8.45528 20.1819 8.50379 20.1873 8.55249 20.1892C8.74939 20.1844 8.94095 20.1242 9.1052 20.0155C9.26946 19.9068 9.39977 19.754 9.4812 19.5747L11.2068 15.8123C11.2763 15.6602 11.3881 15.5313 11.5288 15.4409C11.6695 15.3505 11.8331 15.3025 12.0004 15.3025C12.1676 15.3025 12.3313 15.3505 12.472 15.4409C12.6127 15.5313 12.7244 15.6602 12.7939 15.8123L14.5188 19.5747C14.6002 19.754 14.7305 19.9068 14.8948 20.0155C15.059 20.1242 15.2506 20.1844 15.4475 20.1892H15.4768C15.4925 20.1892 15.5068 20.1837 15.5224 20.183C15.5361 20.1827 15.5497 20.1816 15.5632 20.1797L15.5722 20.1763C15.7464 20.1624 15.9142 20.1048 16.0603 20.0089C16.2063 19.913 16.3258 19.7818 16.4077 19.6274L16.7314 19.0151C17.2366 18.0533 17.5433 16.9998 17.6333 15.9171C17.7232 14.8344 17.5946 13.7446 17.2551 12.7126C17.1402 12.3632 17.1415 11.9861 17.2588 11.6374L18.3508 8.40821C18.5549 7.80484 18.5894 7.15702 18.4506 6.5354C18.3117 5.91377 18.0049 5.3422 17.5634 4.88302C17.122 4.42384 16.563 4.09468 15.9473 3.93144C15.3316 3.76819 14.683 3.77713 14.072 3.95728L12.479 4.42678C12.1666 4.51906 11.8342 4.51906 11.5217 4.42678L9.928 3.95728C9.31759 3.7706 8.66714 3.75836 8.05015 3.92196C7.43316 4.08556 6.87422 4.41846 6.4365 4.88305C6.06436 5.26955 5.78653 5.7368 5.62468 6.24834C5.46341 5.73884 5.18682 5.2734 4.8164 4.88819C4.37842 4.42236 3.81872 4.08852 3.20073 3.92451C2.58273 3.7605 1.93115 3.77286 1.31982 3.96021L0.75 4.12711V1.875C0.750326 1.57673 0.868957 1.29077 1.07986 1.07986C1.29077 0.868957 1.57673 0.750326 1.875 0.75H22.125C22.4233 0.750326 22.7092 0.868957 22.9201 1.07986C23.131 1.29077 23.2497 1.57673 23.25 1.875V22.125ZM11.2917 6.71045C11.3185 6.71619 11.3457 6.71914 11.373 6.71924C11.4584 6.7191 11.5411 6.68995 11.6076 6.63657C11.6742 6.5832 11.7206 6.50878 11.7393 6.42554C11.8041 6.13968 11.9339 5.87256 12.1185 5.64489C12.3031 5.41722 12.5377 5.2351 12.804 5.11262L14.2845 4.67651C14.7636 4.53547 15.2724 4.52866 15.7552 4.65682C16.238 4.78498 16.6763 5.04319 17.0225 5.40333C17.3686 5.76346 17.6093 6.21169 17.7183 6.69919C17.8272 7.18668 17.8003 7.69473 17.6404 8.16796L16.5484 11.3972C16.379 11.9001 16.3772 12.4444 16.5432 12.9485C16.8512 13.8846 16.9679 14.873 16.8862 15.855C16.8045 16.8371 16.5263 17.7927 16.0679 18.665L15.78 19.2096L15.3435 16.6274C15.1178 15.2944 15.0887 13.9355 15.2571 12.594L15.4299 11.2082C15.4666 10.9146 15.4182 10.6166 15.2905 10.3496C15.1627 10.0827 14.961 9.85801 14.7092 9.7024C14.4575 9.54679 14.1664 9.46676 13.8704 9.47182C13.5745 9.47688 13.2863 9.56682 13.04 9.73095C12.7324 9.93722 12.3704 10.0474 12 10.0474C11.6296 10.0474 11.2676 9.93722 10.96 9.73095C10.7138 9.56684 10.4256 9.4769 10.1298 9.4718C9.83391 9.4667 9.54282 9.54666 9.2911 9.70218C9.03938 9.8577 8.83762 10.0822 8.7098 10.3491C8.58198 10.6159 8.53348 10.9139 8.57007 11.2075L8.73487 12.5295C8.90828 13.9121 8.87198 15.3128 8.6272 16.6845L8.18807 19.149L7.91017 18.6233C7.45689 17.7578 7.18291 16.8098 7.10463 15.836C7.02635 14.8622 7.14538 13.8826 7.4546 12.9558C7.62431 12.45 7.62328 11.9024 7.45167 11.3972L6.35962 8.16797C6.19973 7.69473 6.17279 7.18668 6.28175 6.69919C6.39071 6.2117 6.63138 5.76346 6.97754 5.40333C7.3237 5.04319 7.76206 4.78498 8.24486 4.65682C8.72766 4.52866 9.23638 4.53547 9.71557 4.67651L11.3101 5.14601C11.3803 5.16675 11.4519 5.17838 11.5231 5.19266C11.2717 5.50539 11.0951 5.87149 11.0069 6.26295C10.9854 6.36007 11.0033 6.46175 11.0567 6.54566C11.1101 6.62957 11.1947 6.68884 11.2917 6.71045ZM9.479 12.4365L9.3142 11.1145C9.29539 10.9634 9.32036 10.8101 9.38614 10.6728C9.45193 10.5355 9.55575 10.42 9.68528 10.34C9.81481 10.26 9.96458 10.2189 10.1168 10.2216C10.269 10.2242 10.4173 10.2705 10.5439 10.355C10.9747 10.6436 11.4815 10.7977 12 10.7977C12.5185 10.7977 13.0253 10.6436 13.456 10.355C13.5828 10.2705 13.7311 10.2242 13.8834 10.2216C14.0357 10.219 14.1855 10.2602 14.315 10.3402C14.4446 10.4203 14.5484 10.5359 14.6141 10.6733C14.6798 10.8107 14.7047 10.9641 14.6858 11.1152L14.5129 12.501C14.3354 13.9148 14.366 15.347 14.6038 16.752L14.9277 18.6686L13.4758 15.5002C13.3466 15.2175 13.1388 14.9779 12.8772 14.8098C12.6156 14.6418 12.3113 14.5525 12.0004 14.5525C11.6895 14.5525 11.3851 14.6418 11.1235 14.8098C10.862 14.9779 10.6542 15.2175 10.5249 15.5002L9.012 18.8004L9.36548 16.8164C9.62355 15.3705 9.66182 13.8939 9.479 12.4365ZM21.375 12.75C21.3257 12.75 21.277 12.7597 21.2315 12.7785C21.1859 12.7973 21.1446 12.8249 21.1098 12.8598C21.0749 12.8946 21.0473 12.9359 21.0285 12.9815C21.0097 13.027 21 13.0757 21 13.125V21.375C21 21.4745 21.0395 21.5698 21.1098 21.6402C21.1802 21.7105 21.2755 21.75 21.375 21.75C21.4745 21.75 21.5698 21.7105 21.6402 21.6402C21.7105 21.5698 21.75 21.4745 21.75 21.375V13.125C21.75 13.0757 21.7403 13.027 21.7215 12.9815C21.7027 12.9359 21.6751 12.8946 21.6402 12.8598C21.6054 12.8249 21.5641 12.7973 21.5185 12.7785C21.473 12.7597 21.4243 12.75 21.375 12.75ZM19.875 18C19.8257 18 19.777 18.0097 19.7315 18.0285C19.6859 18.0473 19.6446 18.0749 19.6098 18.1098C19.5749 18.1446 19.5473 18.1859 19.5285 18.2315C19.5097 18.277 19.5 18.3257 19.5 18.375V21.375C19.5 21.4745 19.5395 21.5698 19.6098 21.6402C19.6802 21.7105 19.7755 21.75 19.875 21.75C19.9745 21.75 20.0698 21.7105 20.1402 21.6402C20.2105 21.5698 20.25 21.4745 20.25 21.375V18.375C20.25 18.3257 20.2403 18.277 20.2215 18.2315C20.2027 18.1859 20.1751 18.1446 20.1402 18.1098C20.1054 18.0749 20.0641 18.0473 20.0185 18.0285C19.973 18.0097 19.9243 18 19.875 18ZM22.125 1.5H19.125C19.0255 1.5 18.9302 1.53951 18.8598 1.60984C18.7895 1.68016 18.75 1.77554 18.75 1.875C18.75 1.97446 18.7895 2.06984 18.8598 2.14016C18.9302 2.21049 19.0255 2.25 19.125 2.25H22.125C22.2245 2.25 22.3198 2.21049 22.3902 2.14016C22.4605 2.06984 22.5 1.97446 22.5 1.875C22.5 1.77554 22.4605 1.68016 22.3902 1.60984C22.3198 1.53951 22.2245 1.5 22.125 1.5ZM22.125 3H20.625C20.5255 3 20.4302 3.03951 20.3598 3.10984C20.2895 3.18016 20.25 3.27554 20.25 3.375C20.25 3.47446 20.2895 3.56984 20.3598 3.64016C20.4302 3.71049 20.5255 3.75 20.625 3.75H22.125C22.2245 3.75 22.3198 3.71049 22.3902 3.64016C22.4605 3.56984 22.5 3.47446 22.5 3.375C22.5 3.27554 22.4605 3.18016 22.3902 3.10984C22.3198 3.03951 22.2245 3 22.125 3Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1020_16023">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="h-9 w-9 rounded-full overflow-hidden">
                        <Image
                          src="/service-detail/profile.webp"
                          alt="Rhea"
                          width={36}
                          height={36}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-white text-xs">
                        <p>Rhea</p>
                        <p>23 yr (Female)</p>
                      </div>
                    </div>
                    {/* Monthly report mini-card */}
                    <div className="mt-2 space-y-3">
                      <div className="flex items-center justify-between text-white/90 text-[10px]">
                        <span>Monthly Report</span>
                        <span>Jul 25</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/70 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: "90%",
                            background:
                              "linear-gradient(90deg, #A844A1 0%, #EAB7F0 50%, #FFFFFF 100%)",
                          }}
                        />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-white text-4xl font-semibold leading-none">
                          90%
                        </span>
                        <span className="text-white text-sm leading-none">
                          Loading
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 w-fit">
                    <div className="inline-flex items-center gap-[1px] bg-black/10 backdrop-blur-sm p-2 border border-neutral-200 rounded-full">
                      <div className="bg-white p-1.5 w-[25px] h-[25px] rounded-full flex items-center justify-center">
                        <CoreIconSettings />
                      </div>
                      <div className="bg-white p-1.5 w-[25px] h-[25px] rounded-full flex items-center justify-center">
                        <CoreIconLaboratory />
                      </div>
                      <div className="bg-white p-1.5 w-[25px] h-[25px] rounded-full flex items-center justify-center">
                        <CoreIconClipboard />
                      </div>
                      <span
                      className="text-primary-900 inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full text-[10px] font-normal whitespace-nowrap"
                      style={{
                        background:
                          "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)) padding-box, linear-gradient(90deg, #A844A1 0%, #FFFFFF 50%, #440C46 100%) border-box",
                        border: "1px solid transparent",
                      }}
                    >
                      <StarIcon className="w-3 h-3 text-primary-900" />
                     Our Core Services
                    </span>
                    </div>
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
