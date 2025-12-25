"use client";

import { useInViewRepeating } from "@/hooks/useInViewRepeating";
import { ReactNode, useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  initialScale?: number;
  initialY?: number;
  immediate?: boolean; // For hero/above-the-fold content - appears instantly
  animationType?: 'slide-up-scale' | 'fade-in-up' | 'fade-in' | 'scale-in';
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  immediate = false,
  animationType = 'slide-up-scale',
}: AnimatedSectionProps) {
  const { ref, isInView } = useInViewRepeating({ threshold: 0.1, rootMargin: "200px" });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (immediate || !elementRef.current) return;

    if (isInView) {
      // Add animation class with delay
      const timer = setTimeout(() => {
        elementRef.current?.classList.add('in-view');
      }, delay * 1000);

      return () => clearTimeout(timer);
    } else {
      // Remove in-view class when out of view (for repeat animations)
      elementRef.current?.classList.remove('in-view');
    }
  }, [isInView, delay, immediate]);

  // Check initial visibility on mount for above-the-fold content
  // Use IntersectionObserver to avoid forced reflow
  useEffect(() => {
    if (immediate || !elementRef.current) return;

    // Use IntersectionObserver to check initial visibility without forced reflow
    const checkInitialVisibility = () => {
      const element = elementRef.current;
      if (!element) return;

      const initialObserver = new IntersectionObserver(
        ([entry]) => {
          // If element is initially intersecting, make it visible immediately
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              element.classList.add('in-view');
            });
          }
          initialObserver.disconnect();
        },
        {
          threshold: 0,
          rootMargin: "200px" // Match the rootMargin from useInViewRepeating
        }
      );

      initialObserver.observe(element);
    };

    // Check after a short delay to ensure DOM is ready
    const timer = setTimeout(checkInitialVisibility, 0);
    return () => clearTimeout(timer);
  }, [immediate]);

  // Add js-loaded class to enable animations (progressive enhancement)
  // This hook must be called before any conditional returns
  useEffect(() => {
    if (elementRef.current && !immediate) {
      elementRef.current.classList.add('js-loaded');
    }
  }, [immediate]);

  // For immediate content, render directly without animation wrapper
  // This early return must come AFTER all hooks
  if (immediate) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  // Map animation types to CSS classes
  const animationClass = {
    'slide-up-scale': 'scroll-animate',
    'fade-in-up': 'scroll-animate-up',
    'fade-in': 'content-fade',
    'scale-in': 'scroll-animate-scale',
  }[animationType];

  // Combine refs
  const combinedRef = (node: HTMLDivElement | null) => {
    if (ref) {
      ref.current = node;
    }
    elementRef.current = node;
  };

  return (
    <div
      ref={combinedRef}
      className={`${animationClass} ${className}`}
      style={{
        transitionDelay: delay > 0 ? `${delay}s` : undefined,
      }}
    >
      {children}
    </div>
  );
}

