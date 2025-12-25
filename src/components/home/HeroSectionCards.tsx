import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface DoctorCardProps {
  title: React.ReactNode;
  doctorImage: string;
  backgroundColor?: string;
  onClick?: () => void;
  imgSize?: string;
  variant?: "desktop" | "mobile";
}

const DoctorCard = ({
  title,
  doctorImage,
  backgroundColor = "bg-white",
  onClick,
  variant,
}: DoctorCardProps) => {
  const isMobile = variant === "mobile";
  return (
    <div
      className={`${backgroundColor} overflow-hidden relative rounded-[20px] sm:rounded-[34px] p-4 max-sm:h-[150px] max-sm:w-[130px] h-[200px] w-[200px] lg:w-[214px] lg:h-[217px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg`}
      onClick={onClick}
    >
      {/* Header with title and arrow */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-gray-800 lg:text-base font-medium leading-tight">
          {title}
        </h2>
        <div className=" rounded-full px-2 ">
          <ArrowUpRight className="w-4 h-4 text-gray-600" />
        </div>
      </div>

        <Image
          src={doctorImage}
          alt="for doctors"
          width={isMobile ? 150 : 170}
          height={isMobile ? 100 : 100}
          className="object-contain max-sm:w-[120px] max-sm:h-[100px] sm:right-3 absolute bottom-0"
        />
    </div>
  );
};

export default DoctorCard;
