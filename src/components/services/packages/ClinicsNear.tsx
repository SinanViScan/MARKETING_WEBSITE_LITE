"use client";

import Image from "next/image";
import { MapPin, Star, ArrowRight } from "lucide-react";

export type ClinicItem = {
  id?: string | number;
  name: string;
  location: string; // e.g. "Ghatkopar, Mumbai - 75"
  imageSrc: string;
  rating?: number; // 0-5
  ratingCount?: number;
};

export type ClinicsNearSectionProps = {
  header?: string;
  items: ClinicItem[];
  onSeeAll?: () => void;
};

export default function ClinicsNearSection({
  header = "Clinics Near You",
  items,
  onSeeAll,
}: ClinicsNearSectionProps) {
  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium text-slate-700">{header}</h4>
        <button
          onClick={onSeeAll}
          className="text-[11px] text-primary-900 font-medium hover:underline"
        >
          See all
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {items.map((clinic, idx) => (
          <ClinicsNearCard key={clinic.id ?? idx} {...clinic} />
        ))}
      </div>
    </aside>
  );
}

function ClinicsNearCard({
  name,
  location,
  imageSrc,
  rating = 4.5,
}: ClinicItem) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="flex gap-3 p-2">
        <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-xl">
          <Image src={imageSrc} alt={name} fill className="object-cover" sizes="56px" />
        </div>
        <div className="flex-1 min-w-0">
          <h5 className="text-[13px] font-semibold text-primary-900 leading-tight">
            {name}
          </h5>
          <div className="flex items-center gap-1 text-[11px] text-slate-600 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-primary-900" /> {location}
          </div>
          <div className="mt-1 flex items-center gap-1 text-amber-500">
            {renderStars(rating)}
          </div>
        </div>
      </div>
      <div className="px-2 pb-3">
        <button
          className="w-full text-sm py-1.5 rounded-2xl border-2 border-dashed border-primary-200 text-primary-900 inline-flex items-center justify-center gap-2"
        >
          View Profile <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}

function renderStars(rating: number) {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalf ? 1 : 0);

  const nodes: React.ReactNode[] = [];
  for (let i = 0; i < fullStars; i++) {
    nodes.push(<Star key={`full-${i}`} className="w-4 h-4 fill-amber-400 text-amber-400" />);
  }
  if (hasHalf) {
    nodes.push(
      <div key="half" className="relative w-4 h-4">
        <Star className="w-4 h-4 text-amber-400" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        </div>
      </div>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    nodes.push(<Star key={`empty-${i}`} className="w-4 h-4 text-amber-400" />);
  }
  return nodes;
}

