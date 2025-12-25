"use client";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingCursor() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle route change loading state
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname, searchParams]);

  // Intercept all link clicks to show loading during client-side navigation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.href &&
        anchor.href.startsWith(window.location.origin) &&
        !anchor.target &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey &&
        anchor.getAttribute("href") !== pathname &&
        !anchor.href.includes('#')
      ) {
        setIsNavigating(true);
      }
    };

    window.addEventListener("click", handleAnchorClick);
    return () => window.removeEventListener("click", handleAnchorClick);
  }, [pathname]);

  const isLoading = isFetching > 0 || isMutating > 0 || isNavigating;

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Modern Top Progress Bar */}
          <motion.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-1 z-[9999] bg-gradient-to-r from-[#440C46] via-[#E09FBB] to-[#EBB5F3]"
            style={{ boxShadow: "0 0 10px rgba(68, 12, 70, 0.5)" }}
          />

          {/* Premium Glassmorphic Loader Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-white/50 dark:bg-black/50 backdrop-blur-[1px]"
          />
        </>
      )}
    </AnimatePresence>
  );
}
