"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import {
  PhoneCall,
  Star,
  CalendarDays,
  Users,
  MessageCircleMore,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useRef } from "react";

export type PackageDetailProps = {
  title?: string;
  subtitle?: string;
  price?: string;
  originalPrice?: string;
  imageSrc?: string;
  testsIncluded?: string;
  tatHours?: string;
  requisites?: { label: string; icon?: React.ReactNode }[];
};
export default function PackageDetail({
    title = "Safe Extraction Panel",
    subtitle = "Also Known As: Tax Saver Checkup • Essential",
    price = "₹499",
    originalPrice = "₹799",
    imageSrc = "/service-detail/blood-collection.webp",
    testsIncluded = "91",
    tatHours = "3",
    requisites = [
      { label: "Blood Sample", icon: <BloodSampleIcon className="w-4 h-4" /> },
      { label: "No Fasting Required", icon: <NoFastingIcon className="w-4 h-4" /> },
    ],
  }: PackageDetailProps) {
    const discountPercent = computeDiscountPercent(originalPrice, price);
  
    return (
      <div className="py-8">
        <div className="flex   w-full h-auto flex-row p-2 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {/* Image */}
          <div className="w-[80px] sm:w-[150px] h-auto bg-gray-100 relative rounded-lg overflow-hidden">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>
  
          {/* Content */}
          <div className="flex flex-col justify-between gap-1  p-2 md:p-4 flex-1">
            {/* Title + Subtitle */}
            <div>
              <h1 className="text-base sm:text-xl lg:text-2xl font-medium text-primary-900 tracking-tight">
                {title}
              </h1>
              <p className="mt-0 mb-1 text-xs lg:text-sm text-slate-900">{subtitle}</p>
            </div>
  
            {/* Price + Meta */}
           <div>
           <div className="mt-0 flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="line-through text-gray-400">
                  {originalPrice}
                </span>
                <div className="text-slate-900 font-semibold">{price}</div>
                <span className="text-[11px] rounded-md bg-[#906e91] text-white px-1.5">
                  {discountPercent}
                </span>
              </div>
              <div className="inline-flex text-xs md:text-sm items-center gap-1 text-gray-600">
                <Users className="w-4 h-4" /> 1k users booked this
              </div>
            </div>
  
            {/* Reviews */}
            <div className="mt-3 inline-flex items-center gap-2 md:gap-4 text-sm">
             <div className="flex gap-1 items-center">
             <RatingStars rating={4.5} />
             <span className="text-slate-700 text-[10px] sm:text-sm">4.5</span>
             </div>
              <span className="text-gray-600 flex gap-1 text-[10px] sm:text-xs items-center"><MessageCircleMore  className="sm:w-4 sm:h-4 h-3 w-3" />512 reviews</span>
            </div>
           </div>
  
            {/* Actions */}
          </div>
            <div className="flex max-sm:hidden flex-col my-auto justify-center h-full  gap-2">
              <Button
                variant="primary"
                className="gap-2 text-xs sm:text-sm w-full sm:w-auto whitespace-nowrap"
              >
                <CalendarDays className="w-4 h-4" /> Book Appointment
              </Button>
              <Button
                variant="outline"
                className="gap-2 text-xs sm:text-sm text-primary-900 bg-white w-full sm:w-auto whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-primary-900" /> Call Us
              </Button>
            </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="grid max-xl:hidden grid-cols-3 gap-2">
            <InfoTile title="Reports within" value={`${tatHours} hours`} />
            <InfoTile title="Tests included" value={testsIncluded} />
            <RequisiteCarousel items={requisites} />
          </div>
          <div className="grid xl:hidden grid-cols-2 gap-2">
            <InfoTile title="Reports within" value={`${tatHours} hours`} />
            <InfoTile title="Tests included" value={testsIncluded} />
            <div className="col-span-2">
              <RequisiteCarousel items={requisites} />
            </div>
          </div>
    </div>
        <div className="grid pl-3 grid-cols-2 xl:grid-cols-4  gap-4 mt-4">
          <StatBadgeCard badgeContent="60" topLabel="Mins Home" bottomLabel="Collection" />
          <StatBadgeCard badgeContent="1M" topLabel="Happy" bottomLabel="Customers" />
          <StatBadgeCard badgeContent="4.9" topLabel="Google" bottomLabel="Ratings" />
          <StatBadgeCard badgeContent={<CertifiedIcon className="w-4 h-4" />} topLabel="Certified" bottomLabel="Labs" />
      </div>
    </div>
  );
}
  

function computeDiscountPercent(original: string, current: string): string {
  const orig = parseInt(original.replace(/[^0-9]/g, ""), 10);
  const cur = parseInt(current.replace(/[^0-9]/g, ""), 10);
  if (
    !isFinite(orig) ||
    !isFinite(cur) ||
    orig <= 0 ||
    cur <= 0 ||
    cur >= orig
  ) {
    return "Offer";
  }
  const pct = Math.round(((orig - cur) / orig) * 100);
  return `${pct}% Off`;
}

function RatingStars({ rating = 0 }: { rating?: number }) {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="inline-flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="sm:w-4 sm:h-4 h-3 w-3  fill-amber-400" />
      ))}
      {hasHalf && (
        <div className="relative sm:w-4 sm:h-4 h-3 w-3">
          <Star className="sm:w-4 sm:h-4 h-3 w-3 text-amber-400" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
            <Star className="sm:w-4 sm:h-4 h-3 w-3 fill-amber-400" />
          </div>
        </div>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="sm:w-4 sm:h-4 h-3 w-3 text-amber-400" />
      ))}
    </div>
  );
}

function InfoTile({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex bg-[#F2F4F7] p-2 sm:p-3 rounded-lg flex-col justify-between gap-1 sm:gap-2">
      <h2 className="text-xs sm:text-sm font-normal text-gray-500 tracking-tight">{title}</h2>
      <p className="text-sm sm:text-xl font-medium text-slate-900 tracking-tight">{value}</p>
    </div>
  );
}

function RequisitePill({
  icon,
  label,
}: {
  icon?: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex gap-2 items-center shrink-0">
      <div className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] bg-white rounded-md p-1 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-xs sm:text-sm font-normal text-slate-800 tracking-tight">{label}</p>
    </div>
  );
}

function RequisiteCarousel({
  items,
  title = "Requisites",
}: {
  items: { label: string; icon?: React.ReactNode }[];
  title?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const delta = Math.max(120, el.clientWidth * 0.5);
    el.scrollBy({ left: direction === "left" ? -delta : delta, behavior: "smooth" });
  };

  return (
    <div className="flex bg-[#F2F4F7] p-3 rounded-lg flex-col justify-between gap-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xs sm:text-sm font-normal text-gray-500 tracking-tight">{title}</h2>
        <div className="flex gap-2">
          <button
            aria-label="Scroll left"
            onClick={() => handleScroll("left")}
            className="text-sm font-normal text-gray-500 tracking-tight"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full p-1" />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => handleScroll("right")}
            className="text-sm font-normal text-gray-500 tracking-tight"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full p-1" />
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex gap-2 sm:gap-3 items-center w-full overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {items.map((item, index) => (
          <RequisitePill key={`${item.label}-${index}`} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
}

function BloodSampleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className}>
      <path
        fill="#de63f2"
        d="m237.66 86.34l-60-60a8 8 0 0 0-11.32 0L37.11 155.57a44.77 44.77 0 0 0 63.32 63.32L212.32 107l22.21-7.4a8 8 0 0 0 3.13-13.25Zm-32.19 6.07a8 8 0 0 0-3.13 1.93l-39.57 39.57c-8.47 2.9-21.75 4-39.07-5c-10.6-5.54-20.18-8-28.56-8.73L172 43.31l45.19 45.19Z"
      />
    </svg>
  );
}

function NoFastingIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path
        fill="#de63f2"
        d="M3.743 2.816A.88.88 0 0 1 5.5 2.88v4.494a.625.625 0 1 0 1.25 0V2.75a.75.75 0 0 1 1.5 0v4.624a.625.625 0 1 0 1.25 0V2.88a.88.88 0 0 1 1.757-.064C11.3 3.428 11.5 6.37 11.5 8c0 1.35-.67 2.544-1.692 3.267c-.216.153-.268.315-.263.397c.123 1.878.455 7.018.455 7.833a2.5 2.5 0 0 1-5 0c0-.816.332-5.955.455-7.833c.005-.082-.047-.244-.263-.397A4 4 0 0 1 3.5 8c0-1.63.2-4.572.243-5.184M13 7.75A5.75 5.75 0 0 1 18.75 2a.75.75 0 0 1 .75.75v8.5c0 .318.106 1.895.225 3.642l.005.083c.13 1.908.27 3.983.27 4.522a2.5 2.5 0 0 1-5 0c0-.514.128-2.611.252-4.534c.062-.971.125-1.912.172-2.61l.023-.353h-.697A1.75 1.75 0 0 1 13 10.25z"
      />
    </svg>
  );
}

function StatBadgeCard({
  badgeContent,
  topLabel,
  bottomLabel,
}: {
  badgeContent: React.ReactNode;
  topLabel: string;
  bottomLabel: string;
}) {
  return (
    <div className="flex relative bg-[#F2F4F7] justify-center rounded-2xl flex-col gap-2">
      <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] absolute -ml-3 text-sm sm:text-base  flex justify-center items-center text-white font-semibold bg-primary-800 rounded-full">
        {badgeContent}
      </div>
      <div className="flex flex-col  items-center p-2">
        <div>
          <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-900 tracking-tight">{topLabel}</p>
          <p className="text-xs sm:text-sm font-normal text-gray-500 tracking-tight">{bottomLabel}</p>
        </div>
      </div>
    </div>
  );
}

function CertifiedIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={className}>
      <path
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m6.51.714l-.677.497a3 3 0 0 1-.378.257a1.6 1.6 0 0 1-.279.116c-.109.033-.222.05-.449.085l-.83.127c-.655.1-.983.151-1.24.304c-.23.135-.421.327-.557.557c-.153.26-.203.588-.304 1.24l-.127.83c-.035.227-.052.341-.085.45q-.045.145-.116.278c-.054.1-.121.193-.257.378l-.497.677C.322 7.044.126 7.311.05 7.6a1.6 1.6 0 0 0 0 .787c.075.292.272.56.664 1.09l.497.677c.136.185.204.278.257.378q.07.134.116.28c.033.108.05.221.085.448l.127.83c.1.655.151.982.304 1.24c.135.23.327.422.557.557c.26.153.588.203 1.24.304l.83.127c.227.035.341.053.449.086q.145.044.279.116c.1.053.193.12.378.257l.677.497c.534.392.801.588 1.09.664c.258.067.529.067.787 0c.292-.076.56-.272 1.09-.664l.677-.497c.185-.136.278-.204.378-.257q.134-.072.279-.116c.109-.033.222-.05.449-.086l.83-.127c.655-.1.982-.15 1.24-.304c.23-.135.422-.327.557-.557c.153-.26.203-.588.304-1.24l.127-.83c.035-.227.052-.34.085-.449q.045-.145.116-.279c.054-.1.121-.193.257-.378l.497-.677c.392-.534.588-.8.664-1.09a1.6 1.6 0 0 0 0-.787c-.075-.292-.272-.56-.664-1.09l-.497-.677a3 3 0 0 1-.257-.378a1.6 1.6 0 0 1-.116-.279a3 3 0 0 1-.085-.449l-.127-.83c-.1-.655-.151-.983-.304-1.24a1.6 1.6 0 0 0-.557-.557c-.26-.153-.588-.203-1.24-.304l-.83-.127a3 3 0 0 1-.449-.085a1.5 1.5 0 0 1-.279-.116a3 3 0 0 1-.378-.257L9.477.714C8.943.322 8.676.126 8.387.05a1.6 1.6 0 0 0-.787 0c-.292.076-.56.272-1.09.664m5.33 5.41a.683.683 0 0 0-.11-.973a.715.715 0 0 0-.992.108l-3.31 4.06l-1.77-1.36a.715.715 0 0 0-.994.089a.683.683 0 0 0 .09.975l2.32 1.81a.715.715 0 0 0 1.003-.1l3.76-4.62z"
      />
    </svg>
  );
}
