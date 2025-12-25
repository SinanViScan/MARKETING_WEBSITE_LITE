"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { shouldUseDarkTheme } from "@/lib/theme";

/**
 * Global theme manager that handles dark/light theme switching
 * Uses CSS class toggle for better performance (no layout thrashing)
 */
export default function ThemeManager() {
  const pathname = usePathname();
  const isDarkTheme = shouldUseDarkTheme(pathname);

  useEffect(() => {
    // Simple class toggle - CSS handles the styling via :root.dark selector
    document.documentElement.classList.toggle('dark', isDarkTheme);
  }, [isDarkTheme]);

  return null;
}

