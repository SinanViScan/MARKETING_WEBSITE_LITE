"use client";

import Image from "next/image";
import ButtonWithArrow from "@/components/ui/button-with-arrow";

interface CTABookScanProps {
  title?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  smallheader?: boolean;
}

export default function CTABookScan({
  title = "Book your dental scan now – quick, painless, and precise!",
  buttonText = "Book A Scan now",
  imageSrc = "/service-detail/cta.webp",
  imageAlt = "Book a scan",
  smallheader = false
}: CTABookScanProps) {
  const handleButtonClick = () => {
    // You can add your custom logic here
    console.log('Button clicked!');
    // For example, redirect to booking page:
    // window.location.href = '/bookscan';
  };
  return (
    <section className="overflow-hidden" style={{
      background:
        "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
    }}>
      <div className="relative px-5 md:px-10 ">
        <div className="grid sm:grid-cols-7 lg:grid-cols-12 items-center gap-6">
          {/* Left: Copy */}
          <div className="lg:col-span-7  sm:col-span-3 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:pt-10">
            <h2 className={`text-[#101828] text-[28px] sm:text-[34px] lg:text-[44px] leading-[1.2] font-medium ${smallheader ? 'max-w-md' : 'max-w-xl'}`}>
              {title}
            </h2>
            <ButtonWithArrow 
              variant="primary" 
              size="sm" 
              className="px-5 py-2 mt-6"
              onClick={handleButtonClick}
              arrowColor="text-[#440C46]"
              arrowCirclePadding="p-0"
              arrowClassName="w-7 h-7 flex items-center justify-center"
            >
              {buttonText}
            </ButtonWithArrow>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-5 sm:col-span-4  relative h-[220px] sm:h-[260px] lg:h-[280px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain object-right max-sm:object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


