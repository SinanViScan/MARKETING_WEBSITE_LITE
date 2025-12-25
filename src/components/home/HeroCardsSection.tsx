import Link from "next/link";
import DoctorCard from "./HeroSectionCards";
import ViewLocationsCard from "./ViewLocationsCard";

interface HeroCardsSectionProps {
  variant?: "desktop" | "mobile";
}

const HeroCardsSection = ({ variant = "desktop" }: HeroCardsSectionProps) => {
  const isMobile = variant === "mobile";

  // Container classes based on variant
  const cardsContainerClass = isMobile
    ? "lg:hidden my-8 flex justify-center gap-4 z-20"
    : "hidden lg:flex gap-4 mt-6";

  const wrapperClass = isMobile ? "grid relative z-50" : "";

  return (
    <div className={wrapperClass}>
      {/* Doctor Cards */}
      <div className={cardsContainerClass}>
        <Link href="/doctors">
          <DoctorCard
            title={
              <>
                {/* Vi-Scan
                <br /> */}
                For
                <br />
                Doctors
              </>
            }
            doctorImage="/home/hero/ForDoctorsImage.webp"
            variant={variant}
          />
        </Link>
        <Link href="/patients">
          <DoctorCard
            title={
              <>
                {/* Vi-Scan
                <br /> */}
                For
                <br />
                Patients
              </>
            }
            doctorImage="/home/hero/ForPatients.webp"
            variant={variant}
          />
        </Link>
      </div>

      {/* View Locations Card */}
      <ViewLocationsCard variant={variant} />
    </div>
  );
};

export default HeroCardsSection;
