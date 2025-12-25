import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ViewLocationsCardProps {
  variant?: "desktop" | "mobile";
  href?: string;
}

const ViewLocationsCard = ({
  variant = "desktop",
  href = "/labs",
}: ViewLocationsCardProps) => {
  return (
    <div
      className={`${variant === "mobile" ? "lg:hidden" : "max-lg:hidden"} ${variant === "mobile" ? "my-7 mx-auto" : "mt-7"} flex items-center justify-between max-w-md relative z-50`}
    >
      <Link href={href} className="relative z-50">
        <div className="flex items-center justify-between bg-white/50 backdrop-blur-lg px-2 rounded-full border border-white/10 p-1.5 max-w-md cursor-pointer hover:bg-white/70 transition-colors">
          {/* Profile Images */}
          {/* <div className="flex items-center pr-4">
            <div
              className={`${variant === "mobile" ? "w-6 h-6" : "w-9 h-9"} rounded-full bg-gray-200 border-0 overflow-hidden`}
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Profile 1"
                width={variant === "mobile" ? 24 : 36}
                height={variant === "mobile" ? 24 : 36}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`${variant === "mobile" ? "w-6 h-6" : "w-9 h-9"} rounded-full bg-gray-200 border-0 overflow-hidden -ml-2`}
            >
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face"
                alt="Profile 2"
                width={variant === "mobile" ? 24 : 36}
                height={variant === "mobile" ? 24 : 36}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`${variant === "mobile" ? "w-6 h-6" : "w-9 h-9"} rounded-full bg-gray-200 border-0 overflow-hidden -ml-2`}
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Profile 3"
                width={variant === "mobile" ? 24 : 36}
                height={variant === "mobile" ? 24 : 36}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            className={`${variant === "mobile" ? "h-5" : "h-7"} border-r-2 border-gray-400/70`}
          ></div> */}
          {/* Text */}
          <div className="flex-1 ml-3 mr-3">
            <span className={`text-gray-800 font-normal ${variant === "mobile" ? "text-10px" : "text-xs"}`}>
              70+ Diagnostic Centers 
            </span>
          </div>
        </div>
      </Link>

      {/* Arrow Button */}
      <Link href={href} className="relative z-50" aria-label="View all locations">
        <div
          className={`${variant === "mobile" ? "w-9 h-9" : "w-9 h-9"} bg-white/50 backdrop-blur-lg rounded-full flex items-center justify-center ml-4 border-0 cursor-pointer hover:bg-white/70 transition-colors relative z-50`}
        >
          <ArrowUpRight className={`${variant === "mobile" ? "w-4 h-4" : "w-5 h-5"} text-gray-600`} />
        </div>
      </Link>
    </div>
  );
};

export default ViewLocationsCard;
