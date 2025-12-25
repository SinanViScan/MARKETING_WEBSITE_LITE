"use client"

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CarouselItem {
  id: string | number;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  color?: string;
  onClick?: () => void;
  href?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  showText?: boolean;
  showImage?: boolean;
  showOnlyImage?: boolean;
  mobileCardWidth?: number;
  mobileCardHeight?: number;
  desktopCenterCardWidth?: number;
  desktopCenterCardHeight?: number;
  desktopAdjacentCardWidth?: number;
  desktopAdjacentCardHeight?: number;
  className?: string;
  onItemClick?: (item: CarouselItem) => void;
  // External control props
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  disableAutoPlay?: boolean;
}

export default function Carousel({
  items,
  showText = true,
  showImage = false,
  showOnlyImage = false,
  mobileCardWidth = 180,
  mobileCardHeight = 180,
  desktopCenterCardWidth = 370,
  desktopCenterCardHeight = 450,
  desktopAdjacentCardWidth = 270,
  desktopAdjacentCardHeight = 280,
  className = "",
  onItemClick,
  currentIndex: externalCurrentIndex,
  onIndexChange,
  disableAutoPlay = false
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Use external index if provided, otherwise use internal state
  const isControlled = externalCurrentIndex !== undefined;
  const currentIndex = isControlled ? externalCurrentIndex : internalIndex;
  
  const setCurrentIndex = useCallback((index: number) => {
    if (isControlled && onIndexChange) {
      onIndexChange(index);
    } else {
      setInternalIndex(index);
    }
  }, [isControlled, onIndexChange]);

  // Auto-play functionality
  useEffect(() => {
    // Only auto-play on desktop/tablet (hidden sm:block section)
    // Skip if controlled externally or disabled
    if (items.length === 0 || isPaused || disableAutoPlay || isControlled) return;

    intervalRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(nextIndex);
    }, 4000); // Change every 4 seconds (gives time for smooth transition)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length, isPaused, disableAutoPlay, isControlled, setCurrentIndex, currentIndex]);

  // Get visible items (center + 2 on each side for desktop)
  const getVisibleItems = () => {
    const result = [];
    
    for (let i = -3; i <= 3; i++) {
      const index = (currentIndex + i + items.length) % items.length;
      result.push({
        ...items[index],
        position: i,
        originalIndex: index
      });
    }
    
    return result;
  };

  const visibleItems = getVisibleItems();

  // Go to next item (forward only)
  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    setIsPaused(true);
    // Resume after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  }, [currentIndex, items.length, setCurrentIndex]);

  const handleItemClick = (item: CarouselItem & { originalIndex: number; position?: number }) => {
    // For center card with href, let the Link handle navigation
    // For non-center cards, just go forward
    if (item.position !== 0) {
      goToNext();
      return;
    }
    
    // Center card behavior
    if (onItemClick) {
      onItemClick(item);
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  // Modern forward cursor - black circle with white arrow
  const forwardCursorSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Ccircle cx='14' cy='14' r='13' fill='%231a1a1a'/%3E%3Cpath d='M10 14h8M15 10l4 4-4 4' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 14 14, pointer`;

  const renderCardContent = (item: CarouselItem) => {
    if (showOnlyImage && item.image) {
      return (
        <Image
          src={item.image}
          alt={item.imageAlt || item.title || "Carousel item"}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      );
    }

    if (showImage && item.image) {
      return (
        <>
          <Image
            src={item.image}
            alt={item.imageAlt || item.title || "Carousel item"}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {showText && (
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
          )}
        </>
      );
    }

    if (item.color) {
      return (
        <>
          <div className={`w-full h-full ${item.color} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}></div>
          {showText && (
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
          )}
        </>
      );
    }

    return null;
  };

  const renderCardText = (item: CarouselItem & { position?: number }, textClass: string, isInsideLink = false) => {
    if (!showText) return null;

    // Handle line breaks in title
    const renderTitle = (title: string | React.ReactNode) => {
      if (typeof title === 'string' && title.includes('\n')) {
        return title.split('\n').map((line, index, array) => (
          <React.Fragment key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </React.Fragment>
        ));
      }
      return title;
    };

    const isCenter = item.position === 0;
    // Don't render nested Link if already inside a Link (mobile cards)
    const showReadMore = item.href && isCenter && !isInsideLink;

    return (
      <div className="absolute bottom-6 left-6 right-6">
        {item.title && (
          <h3 className={`text-white leading-tight ${textClass}`}>
            {renderTitle(item.title)}
          </h3>
        )}
        {item.description && (
          <p className="text-white text-sm mt-2 opacity-90">
            {item.description}
          </p>
        )}
        {/* Read More - appears on hover for center card (not shown if inside a link) */}
        {showReadMore && item.href && (
          <Link 
            href={item.href}
            className="flex items-center gap-2 mt-3 text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:gap-3"
            aria-label={item.title ? `Learn more about ${typeof item.title === 'string' ? item.title.replace(/\n/g, ' ') : item.title}` : 'Learn more about this service'}
          >
            <span>{item.title ? `Learn more about ${typeof item.title === 'string' ? item.title.replace(/\n/g, ' ') : item.title}` : 'Learn more'}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    );
  };

  return (
    <div className={`relative ${className}`}>
      {/* Mobile: Horizontal scrolling cards */}
      <div className="block sm:hidden pl-4">
        <div 
          className="flex gap-4 overflow-x-auto scrollbar-hide carousel-scroll"
        >
          {items.map((item, index) => {
            const hasLink = !!item.href;
            const cardContent = (
              <div
                className="relative overflow-hidden rounded-xl flex-shrink-0 group cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{
                  width: `${mobileCardWidth}px`,
                  height: `${mobileCardHeight}px`,
                  touchAction: 'manipulation'
                }}
                onClick={!hasLink ? () => handleItemClick({ ...item, originalIndex: index }) : undefined}
              >
                {renderCardContent(item)}
                {renderCardText({ ...item, position: 0 }, "text-sm font-semibold", hasLink)}
              </div>
            );

            return hasLink ? (
              <Link key={item.id} href={item.href!} className="flex-shrink-0">
                {cardContent}
              </Link>
            ) : (
              <div key={item.id}>{cardContent}</div>
            );
          })}
        </div>
      </div>

      {/* Tablet & Desktop: Carousel view with different card sizes */}
      <div 
        className="hidden sm:block overflow-hidden"
        style={{ cursor: forwardCursorSvg }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={goToNext}
      >
        <div 
          className="relative flex items-center justify-center py-8"
          style={{ minHeight: `${desktopCenterCardHeight + 100}px` }}
        >
          {visibleItems.map((item) => {
            const isCenter = item.position === 0;
            const isAdjacent = Math.abs(item.position) === 1;
            const isOuter = Math.abs(item.position) === 2;
            const negative = item.position < 0;

            // Calculate horizontal position based on card position
            let translateX = 0;
            let translateY = 0;
            let width, height;
            let textClass;
            let zIndex = 1;
            
            if (isCenter) {
              translateX = 0;
              translateY = 0;
              width = desktopCenterCardWidth;
              height = desktopCenterCardHeight;
              textClass = "lg:text-3xl sm:text-2xl font-bold";
              zIndex = 10;
            } else if (isAdjacent) {
              translateX = negative ? -(desktopCenterCardWidth/2 + desktopAdjacentCardWidth/2 + 24) : (desktopCenterCardWidth/2 + desktopAdjacentCardWidth/2 + 24);
              translateY = negative ? -60 : 60;
              width = desktopAdjacentCardWidth;
              height = desktopAdjacentCardHeight;
              textClass = "lg:text-xl sm:text-lg font-semibold";
              zIndex = 5;
            } else if (isOuter) {
              translateX = negative ? -(desktopCenterCardWidth/2 + desktopAdjacentCardWidth + desktopAdjacentCardWidth/2 + 48) : (desktopCenterCardWidth/2 + desktopAdjacentCardWidth + desktopAdjacentCardWidth/2 + 48);
              translateY = negative ? 40 : -40;
              width = desktopAdjacentCardWidth;
              height = desktopAdjacentCardHeight;
              textClass = "lg:text-base sm:text-sm font-medium";
              zIndex = 3;
            } else {
              translateX = negative ? -(desktopCenterCardWidth/2 + desktopAdjacentCardWidth*2 + desktopAdjacentCardWidth/2 + 72) : (desktopCenterCardWidth/2 + desktopAdjacentCardWidth*2 + desktopAdjacentCardWidth/2 + 72);
              translateY = negative ? -20 : 20;
              width = desktopAdjacentCardWidth;
              height = desktopAdjacentCardHeight;
              textClass = "lg:text-base sm:text-sm font-medium";
              zIndex = 1;
            }

            // Opacity based on position - center is full, others are slightly dimmed
            const opacity = isCenter ? 1 : isAdjacent ? 0.85 : 0.7;

            return (
              <div
                key={item.originalIndex}
                className={`absolute overflow-hidden rounded-2xl group transition-all duration-500 ease-out ${
                  isCenter 
                    ? 'hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer' 
                    : 'hover:scale-[1.02] hover:opacity-100'
                }`}
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  transform: `translateX(${translateX}px) translateY(${translateY}px)`,
                  transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  zIndex: zIndex,
                  willChange: 'transform, opacity',
                  opacity: opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent container click
                  handleItemClick(item);
                }}
              >
                {renderCardContent(item)}
                {renderCardText(item, textClass)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 