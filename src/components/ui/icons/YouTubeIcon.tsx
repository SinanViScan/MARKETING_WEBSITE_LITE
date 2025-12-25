import React from "react";

interface YouTubeIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function YouTubeIcon({
  className = "",
  width = 20,
  height = 14,
}: YouTubeIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.98681 13.095C1.64234 12.9906 1.32804 12.8049 1.07043 12.5535C0.812817 12.3021 0.619451 11.9925 0.506648 11.6507C-0.137939 9.884 -0.328928 2.50706 0.912499 1.05077C1.32567 0.577034 1.90901 0.285363 2.5359 0.239071C5.86627 -0.119033 16.1558 -0.071285 17.3375 0.35844C17.6699 0.466272 17.9736 0.647927 18.2258 0.889793C18.478 1.13166 18.6722 1.42746 18.7938 1.75505C19.4981 3.58138 19.522 10.2182 18.6983 11.9729C18.4798 12.4297 18.1141 12.7997 17.6598 13.0234C16.4184 13.6441 3.63409 13.6322 1.98681 13.095ZM7.27481 9.63333L13.2432 6.52977L7.27481 3.40232V9.63333Z"
        fill="currentColor"
      />
    </svg>
  );
}

