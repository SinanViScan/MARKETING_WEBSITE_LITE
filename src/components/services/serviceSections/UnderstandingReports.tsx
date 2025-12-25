"use client";

import { useState } from "react";
import Image from "next/image";

export type ReportTab = {
  key: string;
  label: string;
  imageSrc: string;
  title: string;
  description: string;
};

interface UnderstandingReportsProps {
  pageNumber?: string;
  header?: string;
  tabs: ReportTab[];
}

export default function UnderstandingReports({
  pageNumber = "03",
  header = "Holistic Dental Teleradiology Provider",
  tabs,
}: UnderstandingReportsProps) {
  const [activeKey, setActiveKey] = useState<string>(tabs[0]?.key ?? "");
  const active = tabs.find((t) => t.key === activeKey) ?? tabs[0];

  return (
    <section className="responsive-margin py-12">
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
            Understanding Our Reports
          </span>
          <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
        </div>
        <h2 className="section-header text-center">{header}</h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {tabs.map((tab) => {
          const isActive = tab.key === active.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              className={[
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#3C0A40] text-white"
                  : "bg-white text-[#344054] border border-gray-200 hover:bg-gray-50",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:p-8 p-2 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-6 ">
          <div className="relative w-full h-64 sm:h-80 md:h-[360px] overflow-hidden rounded-2xl">
            <Image
              src={active.imageSrc}
              alt={active.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <h3 className="text-[#101828] text-xl md:text-2xl lg:text-2xl font-semibold mb-2">
            {active.title}
          </h3>
          <p className="text-[#475467] text-sm md:text-base leading-relaxed whitespace-pre-line">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}


