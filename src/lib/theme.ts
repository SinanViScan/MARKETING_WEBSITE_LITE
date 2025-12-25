/**
 * Centralized Theme Configuration
 * 
 * This file manages all background colors, text colors, and theme-related styles
 * for the entire application. Update colors here to change them globally.
 */

export const theme = {
  // Page Background Colors
  page: {
    default: "bg-white",           // Default page background (white)
    light: "bg-[#F9FAFB]",         // Light gray background (for blog, etc.)
    dark: "bg-[#0D0D0D]",          // Dark background (#0D0D0D for dark pages)
    gradient: "bg-gradient-desktop bg-gradient-mobile", // Gradient backgrounds
  },

  // Header Background Colors
  header: {
    default: "bg-white",            // Default header background
    dark: "bg-[#0D0D0D]",          // Dark header background (#0D0D0D)
    transparent: "bg-transparent",  // Transparent header
  },

  // Footer Background Colors
  footer: {
    default: "bg-transparent",      // Default footer background (transparent with gradient)
    light: "bg-white",              // Light footer background
    dark: "bg-[#0D0D0D]",          // Dark footer background (#0D0D0D)
  },

  // Text Colors
  text: {
    // Default text colors (for body, pages, etc.)
    default: "text-black",          // Default text color
    primary: "text-gray-900",      // Primary text color
    secondary: "text-gray-600",    // Secondary text color
    muted: "text-gray-500",        // Muted text color
    light: "text-gray-400",        // Light text color
    white: "text-white",           // White text
    
    // Footer-specific text colors (scoped to footer only)
    // NOTE: For footer, use static Tailwind classes directly (e.g., "text-gray-700")
    // instead of these functions to ensure Tailwind includes them in the build.
    // These are here for reference only.
    footer: {
      default: "text-gray-700",     // Default footer text - use "text-gray-700" directly
      link: "text-gray-600",        // Footer link text - use "text-gray-600" directly
      linkHover: "text-gray-900",   // Footer link hover - use "text-gray-900" directly
      muted: "text-gray-500",       // Footer muted text - use "text-gray-500" directly
      heading: "text-gray-900",     // Footer heading text - use "text-gray-900" directly
    },
  },

  // Border Colors
  border: {
    default: "border-gray-200",     // Default border color
    light: "border-gray-100",       // Light border color
    dark: "border-gray-300",        // Dark border color
  },
} as const;

/**
 * Helper function to get page background class
 */
export function getPageBackground(variant: "default" | "light" | "dark" | "gradient" = "default"): string {
  return theme.page[variant];
}

/**
 * Helper function to get header background class
 */
export function getHeaderBackground(variant: "default" | "dark" | "transparent" = "default"): string {
  return theme.header[variant];
}

/**
 * Helper function to get footer background class
 */
export function getFooterBackground(variant: "default" | "light" | "dark" = "default"): string {
  return theme.footer[variant];
}

/**
 * Helper function to get footer text color class
 * These are scoped to footer only and should be used within footer components
 */
export function getFooterTextColor(variant: "default" | "link" | "linkHover" | "muted" | "heading" = "default"): string {
  return theme.text.footer[variant];
}

/**
 * Helper function to get text color class
 */
export function getTextColor(variant: "default" | "primary" | "secondary" | "muted" | "light" | "white" = "default"): string {
  return theme.text[variant];
}

/**
 * Pages that should use dark theme (black background)
 */
export const DARK_THEME_PAGES = ['/ai'] as const;

/**
 * Check if a pathname should use dark theme
 */
export function shouldUseDarkTheme(pathname: string): boolean {
  return DARK_THEME_PAGES.some(page => pathname === page || pathname.startsWith(`${page}/`));
}

