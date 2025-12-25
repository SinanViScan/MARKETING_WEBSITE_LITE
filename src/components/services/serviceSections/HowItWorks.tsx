"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  pageNumber?: string;
  imageSrc: string;
  header: string;
  subheader: string;
  steps: Step[];
}

export type Step = {
  id: number;
  title: string;
  description: string;
};


export default function HowItWorks({ pageNumber = "04", imageSrc, header, subheader , steps }: HowItWorksProps) {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section className="responsive-margin py-12">
      {/* Header */}
      <div className="mb-8">
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
            How it works
          </span>
          <span className="text-xs text-gray-500 font-medium">
            ({pageNumber})
          </span>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Title + subtitle, matching global pattern */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Mobile/Tablet: center align header + subtext */}
        <div className="block md:hidden lg:col-span-12">
          <h2 className="section-header max-md:mx-auto max-w-xs text-center ">
            {header}
          </h2>
          <p className="section-subtext text-center max-md:mx-auto">
            {subheader}
          </p>
        </div>

        {/* md+: header left, subtext right */}
        <div className="hidden md:grid md:grid-cols-2 mb-3 lg:col-span-12 gap-6 items-start">
          <div>
            <h2 className="section-header pr-4 max-w-md md:mb-0">
              {header}
            </h2>
          </div>
          <div className="section-subtext  my-auto md:mt-0">
            {subheader}
          </div>
        </div>
      </div>

      {/* Content row */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Illustrative image */}
        <div className="md:col-span-6">
          <div className="relative w-full h-64 sm:h-80 md:h-[360px] overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt="Consultation"
              fill
              className="object-cover"
              priority
            />
            <div className="grid grid-cols-2 w-[65px] top-2  absolute h-[30px] right-2 gap-1">
              <div className="bg-white rounded-full flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 2.44434H12C12.3812 2.44434 12.747 2.59565 13.0166 2.86523C13.2862 3.13482 13.4375 3.50059 13.4375 3.88184V6.97363L13.4941 6.97852C14.9769 7.11464 16.3946 7.65273 17.5947 8.53418C18.7948 9.41562 19.7322 10.6073 20.3057 11.9814C20.8791 13.3555 21.0671 14.86 20.8496 16.333C20.6321 17.806 20.0173 19.1921 19.0713 20.3418L18.9873 20.4443H21C21.1823 20.4443 21.3574 20.5166 21.4863 20.6455C21.6153 20.7744 21.6875 20.9495 21.6875 21.1318C21.6875 21.3142 21.6153 21.4892 21.4863 21.6182C21.3574 21.7471 21.1823 21.8193 21 21.8193H3C2.81766 21.8193 2.6426 21.7471 2.51367 21.6182C2.38474 21.4892 2.3125 21.3142 2.3125 21.1318C2.3125 20.9495 2.38474 20.7744 2.51367 20.6455C2.6426 20.5166 2.81766 20.4443 3 20.4443H17.0146L17.0312 20.4307C18.0762 19.5857 18.8486 18.4504 19.25 17.168C19.6514 15.8855 19.6638 14.5125 19.2871 13.2227C18.9104 11.9331 18.161 10.7836 17.1328 9.91895C16.1043 9.05414 14.8423 8.51296 13.5068 8.36328L13.4375 8.35547V13.6318C13.4375 14.0131 13.2862 14.3789 13.0166 14.6484C12.747 14.918 12.3812 15.0693 12 15.0693H7.5C7.11875 15.0693 6.75298 14.918 6.4834 14.6484C6.21381 14.3789 6.0625 14.0131 6.0625 13.6318V3.88184C6.0625 3.50059 6.21381 3.13482 6.4834 2.86523C6.75298 2.59565 7.11875 2.44434 7.5 2.44434ZM6.75 16.6943H12.75C12.9323 16.6943 13.1074 16.7666 13.2363 16.8955C13.3653 17.0244 13.4375 17.1995 13.4375 17.3818C13.4375 17.5642 13.3653 17.7392 13.2363 17.8682C13.1074 17.9971 12.9323 18.0693 12.75 18.0693H6.75C6.56766 18.0693 6.3926 17.9971 6.26367 17.8682C6.13474 17.7392 6.0625 17.5642 6.0625 17.3818C6.0625 17.1995 6.13474 17.0244 6.26367 16.8955C6.3926 16.7666 6.56766 16.6943 6.75 16.6943ZM7.4375 13.6943H12.0625V3.81934H7.4375V13.6943Z"
                    fill="#101828"
                    stroke="#101828"
                    strokeWidth="0.125"
                  />
                </svg>
              </div>
              <div className="bg-white flex justify-center items-center rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1246 3.19336C16.215 3.19336 16.3048 3.2115 16.3883 3.24609C16.4715 3.28061 16.5472 3.33086 16.611 3.39453L22.2184 9.00195V9.00293L22.2369 9.02051C22.3199 9.10338 22.3797 9.20657 22.4117 9.31934C22.4438 9.43203 22.4464 9.55102 22.4196 9.66504C22.3926 9.77915 22.3366 9.88516 22.2574 9.97168C22.1784 10.058 22.0785 10.1222 21.9674 10.1592L19.8854 10.8535L19.8717 10.8584L19.861 10.8682L9.37073 21.3584C8.59528 22.1337 7.54344 22.5693 6.4469 22.5693C5.35032 22.5693 4.29848 22.1338 3.52307 21.3584C2.74767 20.583 2.31222 19.5311 2.31213 18.4346C2.31213 17.338 2.74779 16.2862 3.52307 15.5107L15.6383 3.39453C15.7021 3.33065 15.7785 3.28068 15.8619 3.24609C15.9453 3.21156 16.0344 3.19341 16.1246 3.19336ZM10.9323 14.2402C9.29341 13.3886 8.03055 13.4912 7.22034 13.7686L7.20667 13.7725L4.49573 16.4834V16.4844C3.99394 17.005 3.7166 17.7017 3.72327 18.4248C3.73001 19.1478 4.01964 19.8393 4.53088 20.3506C5.04213 20.8618 5.7337 21.1515 6.45667 21.1582C7.17973 21.1649 7.87644 20.8875 8.39709 20.3857H8.39807L13.6246 15.1592L13.7194 15.0635L13.5856 15.0527C12.8085 14.985 11.9185 14.7566 10.9323 14.2412V14.2402ZM16.0807 4.89746L8.87561 12.1045L8.77991 12.1992L8.9137 12.2109C9.59387 12.2702 10.3608 12.4517 11.2028 12.8418L11.568 13.0225C13.2068 13.874 14.4697 13.7725 15.2799 13.4951L15.2936 13.4902L15.3043 13.4795L19.0123 9.76953L19.0133 9.77051C19.0889 9.69509 19.1815 9.63814 19.2828 9.60449L20.3815 9.2373L20.4772 9.20605L20.4059 9.13379L16.1696 4.89746L16.1246 4.85352L16.0807 4.89746Z"
                    fill="#101828"
                    stroke="#101828"
                    strokeWidth="0.125"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="md:col-span-6 space-y-3">
          {steps.map((step) => {
            const isOpen = openId === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setOpenId(step.id)}
                className={[
                  "w-full text-left rounded-2xl border transition-colors",
                  isOpen
                    ? "bg-[#EEEEFF] border-[#D0D5DD]"
                    : "bg-white hover:bg-gray-50 border-gray-200",
                ].join(" ")}
                aria-expanded={isOpen}
                aria-controls={`howitworks-panel-${step.id}`}
              >
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-[#101828] font-semibold">{step.title}</p>
                    {isOpen && (
                      <div
                        id={`howitworks-panel-${step.id}`}
                        className="overflow-hidden accordion-content open"
                      >
                        <p className="text-[#667085] text-sm mt-2 max-w-xl">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white animate-fade-in duration-fast" aria-hidden>
                    {isOpen ? (
                      <ArrowUpRight className="w-4 h-4 text-[#101828]" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-[#101828]" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
