import React from "react";

interface FacebookIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function FacebookIcon({
  className = "",
  width = 11,
  height = 24,
}: FacebookIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.6416 0C3.77354 0 2.41353 1.95428 2.41353 5.2381V7.65414H0V11.6792H2.41353V23.3584C4.10226 23.288 5.72411 22.9579 7.2381 22.4035V11.6792H10.4586L10.8847 7.65414H7.2381L7.24311 5.6391C7.24311 4.58912 7.34361 4.02757 8.84962 4.02757H10.8622V0H7.6416Z"
        fill="currentColor"
      />
    </svg>
  );
}




