"use client";
import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInViewRepeating(options?: UseInViewOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  // Memoize options to prevent unnecessary effect re-runs
  const threshold = options?.threshold ?? 0.1;
  const rootMargin = options?.rootMargin ?? "50px";

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Use IntersectionObserver for viewport detection
    // IntersectionObserver handles viewport detection efficiently without forced reflow
    let hasSetInitial = false;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Use requestAnimationFrame to batch state updates and avoid forced reflow
        requestAnimationFrame(() => {
          setIsInView(entry.isIntersecting);
          hasSetInitial = true;
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    
    // IntersectionObserver should fire immediately for elements already in view
    // But to ensure above-the-fold content is visible, we'll check after a short delay
    // This prevents forced reflow while ensuring visibility
    const initialCheckTimer = setTimeout(() => {
      if (!hasSetInitial && element) {
        // Create a one-time observer to check initial state
        const initialObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsInView(true);
            }
            initialObserver.disconnect();
          },
          { threshold: 0, rootMargin }
        );
        initialObserver.observe(element);
      }
    }, 100);

    return () => {
      clearTimeout(initialCheckTimer);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isInView };
}

