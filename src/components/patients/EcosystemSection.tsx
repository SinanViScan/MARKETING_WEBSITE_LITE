"use client";

import Image from "next/image";

export default function EcosystemSection({ imageSrc = "/patients/providing.svg" }: { imageSrc?: string }) {

  return (
    <section className="responsive-margin py-4">
      <div className="rounded-3xl bg-[#FCF5FE]  px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left copy */}
          <div>
            <h2 className="text-[#101828] max-lg:text-center text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
              Bridging the Gaps in
              <br />
              the
              <span
                className="text-transparent ml-2"
                style={{
                  background:
                    "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
                Dental Ecosystem
              </span>
            </h2>
            <p className="mt-4 max-lg:text-center max-lg:mx-auto text-[#475467] text-sm leading-relaxed max-w-md">
              Our platform seamlessly connects dentists, diagnostic centers, patients,
              insurance providers, and radiologists, creating a unified and effortless
              experience from scan to diagnosis.
            </p>
          </div>

          {/* Right illustration image */}
          <div className="relative max-sm:h-[200px] h-[420px]">
            <Image src={imageSrc} alt="Ecosystem" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

