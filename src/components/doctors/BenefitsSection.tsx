"use client";

import Image from "next/image";
import type { ReactNode } from "react";

export type BenefitCard = {
  title: string;
  description: string;
  icon?: string; // public path under /public
  svgNode?: ReactNode; // inline SVG if desired
  cardBackgroundClassName?: string; // optional per-card background class (e.g., "bg-[#F0F0F0]")
};

export interface BenefitsSectionProps {
  pageNumber?: string;
  pillLabel?: string;
  backgroundClassName?: string; // e.g., "bg-[#FCF5FE]"
  title: ReactNode; // allows gradient spans
  subtitle?: string;
  cards: BenefitCard[];
  darkMode?: boolean; // Enable dark mode styling
}

export default function BenefitsSection({
  pageNumber = "01",
  pillLabel = "Why Choose Us?",
  backgroundClassName = "bg-[#FCF5FE]",
  title,
  subtitle,
  cards,
  darkMode = false,
}: BenefitsSectionProps) {
  // Dark mode classes
  const sectionBg = darkMode ? "" : backgroundClassName;
  const pillBorder = darkMode ? "border-white" : "border-gray-200";
  const pillText = darkMode ? "text-white" : "text-gray-700";
  const pillBg = darkMode ? "bg-transparent" : "bg-inherit";
  const pageNumberText = darkMode ? "text-white" : "text-gray-500";
  const hrBorder = darkMode ? "border-gray-700" : "border-gray-200";
  const headerText = darkMode ? "text-white" : "text-[#101828]";
  const subtitleText = darkMode ? "" : "text-[#667085]";
  const titleText = darkMode ? "text-white" : "text-[#101828]";
  const descriptionText = darkMode ? "text-white opacity-80" : "text-[#667085]";
  const iconBg = darkMode ? "" : "bg-[#FCF5FE]";

  return (
    <section 
      className={`${sectionBg} px-2 sm:px-4 md:px-6 lg:px-10 py-12`}
      style={darkMode ? { backgroundColor: '#0D0D0D' } : {}}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-4 py-1.5 rounded-full text-sm font-medium border ${pillBorder} ${pillText} ${pillBg}`}
          >
            {pillLabel}
          </span>
          <span className={`text-xs font-medium ${pageNumberText}`}>({pageNumber})</span>
        </div>
        <hr className={hrBorder} />
      </div>

      {/* Title & subtitle */}
      <div className="text-center px-1 space-y-3 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-3xl py-8 flex flex-col items-center mx-auto">
        <h2 className={`section-header ${headerText}`}>
          {title}
        </h2>
        {subtitle && (
          <p 
            className={`section-subtext ${subtitleText}`}
            style={darkMode ? { color: '#F3D5F9' } : {}}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {cards.map(({ title, description, icon, svgNode, cardBackgroundClassName }) => (
          <div
            key={title}
            className={`rounded-2xl p-5 md:p-6 flex flex-col gap-3 shadow-sm ${darkMode ? 'backdrop-blur-md' : ''} ${!darkMode ? (cardBackgroundClassName ?? "bg-white border border-gray-100") : ''}`}
            style={darkMode ? { 
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            } : {}}
          >
            <div 
              className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center`}
              style={darkMode ? { backgroundColor: '#DF88EA' } : {}}
            >
              {svgNode ? (
                <span className="inline-flex items-center justify-center">{svgNode}</span>
              ) : (
                icon && <Image src={icon} alt={title} width={24} height={24} />
              )}
            </div>
            <div className={`${titleText} font-semibold text-lg md:text-xl`}>{title}</div>
            <p className={`${descriptionText} text-base md:text-lg leading-relaxed`}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


