"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  id?: number;
  category: string;
  description: string;
  image?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  delay?: number;
}

const BlogCard = ({ 
  id,
  category, 
  description, 
  image, 
  className = "", 
  style,
  onClick,
}: BlogCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link 
      href={`/blog/${id || 1}`}
      aria-label={`Read article: ${category} - ${description}`}
    >
      <div
        className={`group cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 ${className}`}
        style={style}
        onClick={handleClick}
      >
        {/* Card Image */}
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          {image ? (
            <Image
              src={image}
              alt={category}
              fill
              className="object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 340px, (max-width: 1280px) 33vw, 400px"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
              <span className="text-gray-600 font-semibold">
                Image Placeholder
              </span>
            </div>
          )}
          
          {/* Gradient Overlay - intensifies on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl transition-all duration-500 group-hover:from-black/80 group-hover:via-black/30"></div>

          {/* Arrow Icon - animates on hover */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110 group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5 text-primary-900 transition-transform duration-300" />
          </div>

          {/* Content Container */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
            {/* Category Tag */}
            <span className="inline-block bg-white/95 backdrop-blur-sm text-primary-900 px-4 py-1.5 rounded-full text-xs font-medium mb-3 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
              {category}
            </span>
            
            {/* Description */}
            <p className="text-white lg:text-base text-sm leading-relaxed transition-all duration-300 group-hover:text-white/95">
              {description}
            </p>
            
            {/* Read More - appears on hover */}
            <div className="flex items-center gap-2 mt-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <span className="text-white/90 text-sm font-medium">Read More</span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard; 