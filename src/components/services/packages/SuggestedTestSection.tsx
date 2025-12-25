"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import type { PackageCardProps } from "@/components/ui/PackageCard";
import { ClipboardList, Hourglass, ArrowRight } from "lucide-react";

export type SuggestedTestSectionProps = {
  header?: string;
  items: PackageCardProps[];
};

export default function SuggestedTestSection({
  header = "Suggested tests",
  items,
}: SuggestedTestSectionProps) {
  return (
    <aside className="w-full">
      <h4 className="text-sm font-medium text-slate-700 mb-2">{header}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  gap-3">
        {items.map((item, idx) => (
          <SuggestedTestCard key={item.id ?? idx} {...item} />
        ))}
      </div>
    </aside>
  );
}

function SuggestedTestCard({
  title,
  price,
  originalPrice,
  imageSrc,
  parametersText,
  reportTATText,
  keyTestsText,
}: PackageCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="flex ">
        <div className="relative w-20  shrink-0 overflow-hidden rounded-l-xl">
          <Image src={imageSrc} alt={title} fill className="object-cover" sizes="64px" />
        </div>
        <div className="flex-1 min-w-0 p-2">
          <h5 className="text-[13px] font-semibold text-primary-900 leading-tight">
            {title}
          </h5>
          <div className="text-[13px] mt-0.5">
            <span className="text-primary-700 font-bold">{price}</span>
            {originalPrice ? (
              <span className="text-[11px] text-primary-700 align-bottom line-through ml-0.5">
                {originalPrice.replace(/^₹?/, "")}
              </span>
            ) : null}
          </div>

          <ul className="mt-1.5 space-y-0.5 text-[11px] text-[#475467]">
            <li className="flex items-start gap-2">
              <Hourglass className="w-3.5 h-3.5 text-[#7E3281] mt-0.5" />
              <span>
                <span className="font-medium">{parametersText}</span> Parameters included
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ClipboardList className="w-3.5 h-3.5 text-[#7E3281] mt-0.5" />
              <span>
                Reports within <span className="font-medium">{reportTATText} hours</span>
              </span>
            </li>
            <li className="text-[#6b7280]">{keyTestsText}</li>
          </ul>

          <div className="mt-2 flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              className="px-2 bg-white text-primary-900 border-2 border-primary-900 whitespace-nowrap"
            >
              View Details
            </Button>
            <Button variant="primary" size="sm" className="gap-1 whitespace-nowrap">
              Book Now
              <ArrowRight className="p-1 rounded-full bg-white text-black" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}


