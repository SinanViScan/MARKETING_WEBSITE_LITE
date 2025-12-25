"use client";

import React, { useState } from "react";
import BlogCard from "@/components/ui/BlogCard";

export type BlogItem = {
  id?: number;
  category: string;
  description: string;
  image?: string;
};

type PopularBlogsSectionProps = {
  header?: string;
  items: BlogItem[];
  onSeeAll?: () => void;
};

export default function PopularBlogsSection({
  header = "Popular Blogs",
  items,
  onSeeAll,
}: PopularBlogsSectionProps) {
  const [active, setActive] = useState(0);
  const safeItems = items && items.length > 0 ? items : [];
  const current = safeItems[active];

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

      {safeItems.length > 0 ? (
        <>
          {/* Large card with dots on lg+ */}
          <div className="hidden lg:block mt-5">
            <BlogCard
              id={current?.id}
              category={current?.category || ""}
              description={current?.description || ""}
              image={current?.image}
              className="h-56 xl:h-80"
            />
            <div className="flex items-center justify-center gap-2 mt-2">
              {safeItems.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to blog ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-4 bg-primary-900" : "w-1.5 bg-gray-300"
                  }`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          {/* Horizontal row on < lg */}
          <div className="lg:hidden  overflow-x-auto scrollbar-hide">
            <div className="flex mt-3 gap-3 pr-2">
              {safeItems.map((b, i) => (
                <div key={b.id ?? i} className="min-w-[240px] w-[240px]">
                  <BlogCard
                    id={b.id}
                    category={b.category}
                    description={b.description}
                    image={b.image}
                    className="h-52 w-[240px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </aside>
  );
}


