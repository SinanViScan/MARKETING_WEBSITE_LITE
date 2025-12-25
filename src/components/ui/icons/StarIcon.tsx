import React from "react";

interface StarIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function StarIcon({
  className = "",
  width = 13,
  height = 13,
}: StarIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.92231 0.27629C6.04205 -0.0922346 6.56342 -0.0922353 6.68316 0.276289L7.89678 4.01145C7.95033 4.17626 8.10392 4.28784 8.27721 4.28784H12.2046C12.5921 4.28784 12.7532 4.78369 12.4397 5.01145L9.26238 7.3199C9.12219 7.42176 9.06353 7.60231 9.11707 7.76712L10.3307 11.5023C10.4504 11.8708 10.0287 12.1772 9.71517 11.9495L6.53785 9.64103C6.39765 9.53918 6.20782 9.53918 6.06762 9.64103L2.8903 11.9495C2.57682 12.1772 2.15503 11.8708 2.27477 11.5023L3.48839 7.76712C3.54194 7.60231 3.48328 7.42176 3.34309 7.3199L0.16577 5.01145C-0.147715 4.78369 0.0133944 4.28784 0.400884 4.28784H4.32826C4.50155 4.28784 4.65514 4.17626 4.70868 4.01145L5.92231 0.27629Z"
        fill="currentColor"
      />
    </svg>
  );
}




