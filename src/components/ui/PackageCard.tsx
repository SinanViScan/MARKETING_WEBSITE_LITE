"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { ClipboardList, Hourglass, ArrowRight } from "lucide-react";

export type PackageCardProps = {
  id?: string | number;
  title: string;
  price: string;
  originalPrice?: string;
  imageSrc: string;
  parametersText: string;
  reportTATText: string;
  keyTestsText: string;
};

export default function PackageCard({
  title,
  price,
  originalPrice,
  imageSrc,
  parametersText,
  reportTATText,
  keyTestsText,
}: PackageCardProps) {
  return (
    <article className="rounded-2xl bg-white sm:p-4 flex gap-0">
      <div className="relative w-[30%] h-[100%] shrink-0 overflow-hidden rounded-l-xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 30vw, 40vw"
          priority
        />
      </div>

      <div className="flex-1 p-3 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-primary-900 text-base xl:text-xl font-semibold leading-tight">
            {title}
          </h3>
          <div className="text-right shrink-0">
            <div className="text-primary-700 font-bold">
              {price}/
              {originalPrice ? (
                <span className="text-[11px] text-primary-700 align-bottom line-through">
                  {originalPrice.replace(/^₹?/, "")}
                </span>
              ) : null}
            </div>
          </div>
        </div>

        <p className="text-sm max-w-xs text-gray-500 mt-1 max-lg:hidden">
          Risk of bleeding, delayed healing, undiagnosed systemic issues
          (diabetes, clotting disorders).
        </p>

        <div className="flex max-xl:flex-col justify-between">
          <ul className="mt-2 space-y-1.5 text-sm text-[#475467]">
            <li className="flex items-start gap-2">
              <Hourglass className="w-4 h-4 text-[#7E3281] mt-0.5" />
              <span className="font-medium">
                {parametersText} Parameters{" "}
                <span className="font-normal">included</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ClipboardList className="w-4 h-4 text-[#7E3281] mt-0.5" />
              <span>
                Reports within{" "}
                <span className="font-medium">{reportTATText} hours</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>{keyTestsText}</span>
            </li>
          </ul>

          <div className="flex mt-3 xl:mt-0 flex-row xl:flex-col gap-1">
            <Button
              variant="primary"
              size="sm"
              className="px-2 bg-white text-primary-900 border-2 border-primary-900 whitespace-nowrap"
            >
              View Details
            </Button>

            <Button
              variant="primary"
              size="sm"
              className="gap-1 whitespace-nowrap inline-flex items-center"
            >
              Book Now
              <ArrowRight className="p-1.5 rounded-full bg-white text-black" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
