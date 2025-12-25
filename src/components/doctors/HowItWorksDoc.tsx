"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import ButtonWithArrow from "@/components/ui/button-with-arrow";

interface HowItWorksProps {
  pageNumber?: string;
  pageName?: string;
  imageSrc: string;
  header: ReactNode;
  subheader: string;
  buttonText?: string;
  steps: Step[];
}

export type Step = {
  id: number;
  title: string;
  description: string;
};

export default function HowItWorksDoc({
  pageNumber = "04",
  pageName="How it works",
  imageSrc,
  header,
  subheader,
  buttonText,
  steps,
}: HowItWorksProps) {
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
            {pageName}
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
          {typeof header === "string" ? (
            <h2 className="section-header max-md:mx-auto max-w-xs text-center ">{header}</h2>
          ) : (
            header
          )}
          
          <p className="section-subtext max-w-xs text-center max-md:mx-auto">
            {subheader}
          </p>
          {buttonText && <ButtonWithArrow variant="primary" size="sm" className="px-3 flex mx-auto mt-4" arrowSize="w-3 h-3" arrowCirclePadding="p-1">
              {buttonText}
            </ButtonWithArrow>}
        </div>

        {/* md+: header left, subtext right */}
        <div className="hidden md:grid md:grid-cols-2 mb-3 lg:col-span-12 gap-6 ">
          <div>
            {typeof header === "string" ? (
              <h2 className="section-header pr-4 max-w-lg md:mb-0 ">{header}</h2>
            ) : (
              header
            )}
            {buttonText && <div className="pt-2">
            <ButtonWithArrow variant="primary" size="md" className="px-3" arrowCirclePadding="p-1">
              {buttonText}
            </ButtonWithArrow>
          </div>}
          </div>
          <div className="section-subtext max-w-xs h-full my-auto md:mt-0">{subheader}</div>
        </div>
      </div>

      {/* Content row */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Illustrative image */}
        <div className="md:col-span-6">
          <div className="relative w-full h-64 sm:h-80 md:h-[290px] overflow-hidden rounded-2xl">
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
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 15.8125C3.93234 15.8125 4.1074 15.8847 4.23633 16.0137C4.36526 16.1426 4.4375 16.3177 4.4375 16.5V19.5625H7.5C7.68234 19.5625 7.8574 19.6347 7.98633 19.7637C8.11526 19.8926 8.1875 20.0677 8.1875 20.25C8.1875 20.4323 8.11526 20.6074 7.98633 20.7363C7.8574 20.8653 7.68234 20.9375 7.5 20.9375H3.75C3.56766 20.9375 3.3926 20.8653 3.26367 20.7363C3.13474 20.6074 3.0625 20.4323 3.0625 20.25V16.5C3.0625 16.3177 3.13474 16.1426 3.26367 16.0137C3.3926 15.8847 3.56766 15.8125 3.75 15.8125ZM20.25 15.8125C20.4323 15.8125 20.6074 15.8847 20.7363 16.0137C20.8653 16.1426 20.9375 16.3177 20.9375 16.5V20.25C20.9375 20.4323 20.8653 20.6074 20.7363 20.7363C20.6074 20.8653 20.4323 20.9375 20.25 20.9375H16.5C16.3177 20.9375 16.1426 20.8653 16.0137 20.7363C15.8847 20.6074 15.8125 20.4323 15.8125 20.25C15.8125 20.0677 15.8847 19.8926 16.0137 19.7637C16.1426 19.6347 16.3177 19.5625 16.5 19.5625H19.5625V16.5C19.5625 16.3177 19.6347 16.1426 19.7637 16.0137C19.8926 15.8847 20.0677 15.8125 20.25 15.8125ZM7.5 6.8125H16.5C16.6823 6.8125 16.8574 6.88474 16.9863 7.01367C17.1153 7.1426 17.1875 7.31766 17.1875 7.5V16.5C17.1875 16.6823 17.1153 16.8574 16.9863 16.9863C16.8574 17.1153 16.6823 17.1875 16.5 17.1875H7.5C7.31766 17.1875 7.1426 17.1153 7.01367 16.9863C6.88474 16.8574 6.8125 16.6823 6.8125 16.5V7.5C6.8125 7.31766 6.88474 7.1426 7.01367 7.01367C7.1426 6.88474 7.31766 6.8125 7.5 6.8125ZM8.1875 15.8125H15.8125V8.1875H8.1875V15.8125ZM3.75 3.0625H7.5C7.68234 3.0625 7.8574 3.13474 7.98633 3.26367C8.11526 3.3926 8.1875 3.56766 8.1875 3.75C8.1875 3.93234 8.11526 4.1074 7.98633 4.23633C7.8574 4.36526 7.68234 4.4375 7.5 4.4375H4.4375V7.5C4.4375 7.68234 4.36526 7.8574 4.23633 7.98633C4.1074 8.11526 3.93234 8.1875 3.75 8.1875C3.56766 8.1875 3.3926 8.11526 3.26367 7.98633C3.13474 7.8574 3.0625 7.68234 3.0625 7.5V3.75C3.0625 3.56766 3.13474 3.3926 3.26367 3.26367C3.3926 3.13474 3.56766 3.0625 3.75 3.0625ZM16.5 3.0625H20.25C20.4323 3.0625 20.6074 3.13474 20.7363 3.26367C20.8653 3.3926 20.9375 3.56766 20.9375 3.75V7.5C20.9375 7.68234 20.8653 7.8574 20.7363 7.98633C20.6074 8.11526 20.4323 8.1875 20.25 8.1875C20.0677 8.1875 19.8926 8.11526 19.7637 7.98633C19.6347 7.8574 19.5625 7.68234 19.5625 7.5V4.4375H16.5C16.3177 4.4375 16.1426 4.36526 16.0137 4.23633C15.8847 4.1074 15.8125 3.93234 15.8125 3.75C15.8125 3.56766 15.8847 3.3926 16.0137 3.26367C16.1426 3.13474 16.3177 3.0625 16.5 3.0625Z"
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
            const numberLabel = step.id.toString().padStart(2, "0");
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
                  <div className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#EAECF0] animate-fade-in duration-fast" aria-hidden>
                    <span className="text-xs font-semibold text-[#101828]">
                      {numberLabel}
                    </span>
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
