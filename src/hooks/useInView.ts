"use client";
import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use IntersectionObserver directly - no synchronous layout reads
    // IntersectionObserver handles viewport detection efficiently without forced reflow
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Use requestIdleCallback or requestAnimationFrame to batch state updates
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setIsInView(true);
          });
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
}







