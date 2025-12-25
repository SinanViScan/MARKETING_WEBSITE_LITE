"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./button";
import type { ButtonProps } from "./button";
import { cn } from "@/lib/utils";

interface ButtonWithArrowProps extends Omit<ButtonProps, "children"> {
  children: React.ReactNode;
  showArrowCircle?: boolean;
  arrowCircleBg?: string;
  arrowColor?: string;
  arrowSize?: string;
  arrowCirclePadding?: string;
  arrowMargin?: string;
  arrowHoverAnimation?: boolean;
  arrowClassName?: string;
}

const ButtonWithArrow = React.forwardRef<HTMLButtonElement, ButtonWithArrowProps>(
  (
    {
      children,
      showArrowCircle = true,
      arrowCircleBg = "bg-white",
      arrowColor = "text-black",
      arrowSize = "w-4 h-4",
      arrowCirclePadding = "p-1.5",
      arrowMargin = "ml-2",
      arrowHoverAnimation = false,
      arrowClassName,
      className,
      ...props
    },
    ref
  ) => {
    const resolvedIconSize =
      arrowSize === "w-3 h-3"
        ? 12
        : arrowSize === "w-5 h-5"
        ? 20
        : arrowSize === "w-6 h-6"
        ? 24
        : 16;

    // Arrow classes
    const arrowClasses = cn(
      arrowSize, 
      arrowColor,
      "transition-all duration-300"
    );
    
    // Circle classes
    const circleClasses = cn(
      arrowCircleBg,
      arrowCirclePadding,
      "transition-all duration-300"
    );

    // Non-animated version
    if (!arrowHoverAnimation) {
      return (
        <Button ref={ref} className={cn(className, "group")} {...props}>
          {children}
          {showArrowCircle ? (
            <div
              className={cn(
                arrowMargin,
                circleClasses,
                "flex items-center justify-center rounded-full shrink-0",
                arrowClassName
              )}
            >
              <ArrowRight className={arrowClasses} size={resolvedIconSize} />
            </div>
          ) : (
            <ArrowRight
              className={cn(arrowClasses, arrowMargin)}
              size={resolvedIconSize}
            />
          )}
        </Button>
      );
    }

    // Animated version - arrow slides right on hover
    return (
      <Button
        ref={ref}
        className={cn(className, "group")}
        {...props}
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          {children}
        </span>
        {showArrowCircle ? (
          <div
            className={cn(
              arrowMargin,
              circleClasses,
              "flex items-center justify-center rounded-full shrink-0 overflow-hidden",
              "transition-all duration-300 group-hover:scale-110",
              arrowClassName
            )}
          >
            <div className="relative flex items-center justify-center">
              {/* Arrow that slides out */}
              <ArrowRight 
                className={cn(
                  arrowClasses,
                  "transition-transform duration-300",
                  "group-hover:translate-x-6 group-hover:opacity-0"
                )} 
                size={resolvedIconSize} 
              />
              {/* Arrow that slides in */}
              <ArrowRight 
                className={cn(
                  arrowClasses,
                  "absolute transition-transform duration-300",
                  "-translate-x-6 opacity-0",
                  "group-hover:translate-x-0 group-hover:opacity-100"
                )} 
                size={resolvedIconSize} 
              />
            </div>
          </div>
        ) : (
          <div className="relative flex items-center">
            <ArrowRight
              className={cn(
                arrowClasses, 
                arrowMargin,
                "transition-transform duration-300",
                "group-hover:translate-x-6 group-hover:opacity-0"
              )}
              size={resolvedIconSize}
            />
            <ArrowRight
              className={cn(
                arrowClasses, 
                arrowMargin,
                "absolute transition-transform duration-300",
                "-translate-x-6 opacity-0",
                "group-hover:translate-x-0 group-hover:opacity-100"
              )}
              size={resolvedIconSize}
            />
          </div>
        )}
      </Button>
    );
  }
);

ButtonWithArrow.displayName = "ButtonWithArrow";

export default ButtonWithArrow;
