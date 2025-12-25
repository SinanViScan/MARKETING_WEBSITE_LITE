import React from "react";

interface LinkedInIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function LinkedInIcon({
  className = "",
  width = 18,
  height = 17,
}: LinkedInIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.4202 10.2054V16.6477H13.6856V10.6379C13.6856 9.12831 13.1471 8.09744 11.7938 8.09744C10.763 8.09744 10.1496 8.79238 9.87894 9.46425C9.77969 9.70363 9.75519 10.0368 9.75519 10.3741V16.6478H6.01931C6.01931 16.6478 6.06962 6.46819 6.01931 5.41438H9.75519V7.00675C9.74844 7.019 9.73756 7.03106 9.73069 7.04331H9.75519V7.00675C10.2516 6.24256 11.1369 5.15038 13.1212 5.15038C15.5787 5.15038 17.4202 6.7565 17.4202 10.2054ZM2.11344 0C0.835 0 0 0.839125 0 1.94075C0 3.01919 0.810563 3.88131 2.0645 3.88131H2.08763C3.3905 3.88131 4.20106 3.01925 4.20106 1.94075C4.17656 0.839188 3.3905 0 2.11344 0ZM0.221688 16.6478H3.95487V5.41438H0.221688V16.6478Z"
        fill="currentColor"
      />
    </svg>
  );
}

