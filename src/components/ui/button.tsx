"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white" | "gray" | "transparent" | "dashed";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-[#440C46] text-white hover:bg-[#5e086c] focus:ring-0 focus:ring-offset-0",
      secondary: "bg-primary-900 text-white hover:bg-primary-800 focus:ring-0 focus:ring-offset-0",
      outline: "border-2 border-dashed border-[#440C46] text-[#440C46] hover:bg-[#440C46]/5 focus:ring-0 focus:ring-offset-0",
      ghost: "bg-white text-[#101828] hover:bg-gray-100 focus:ring-0 focus:ring-offset-0",
      white: "bg-white text-black hover:bg-primary-900 hover:text-white focus:ring-0 focus:ring-offset-0",
      gray: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-0 focus:ring-offset-0",
      transparent: "bg-transparent border border-dashed text-white hover:bg-white/10 focus:ring-0 focus:ring-offset-0",
      dashed: "border-2 border-dashed border-[#440C46] text-[#440C46] hover:bg-[#440C46]/5 focus:ring-0 focus:ring-offset-0"
    };

    const sizes = {
      sm: "px-2 py-1 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-4 text-lg"
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          widthClass,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button; 