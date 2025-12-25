"use client"
import Image from "next/image";
import ButtonWithArrow from "@/components/ui/button-with-arrow";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";

export default function PartnerSection() {
  const { ref } = useInView({ rootMargin: "200px" }); // Start loading earlier

  return (
    <section ref={ref} className="pt-20 bg-white responsive-margin">
      <div className="mx-auto">
        {/* Top Section: Partner with Us pill, section number, divider, heading, and description */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-4 py-1.5 rounded-full text-gray-700 text-sm font-medium relative transition-transform hover:scale-105"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
                border: "1px solid transparent",
                borderRadius: "999px",
              }}
            >
              Partner with Us
            </span>
            <span className="text-xs text-gray-500 font-medium">(07)</span>
          </div>
          <hr className="border-gray-200 mb-8" />

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <AnimatedSection delay={0.1}>
              <div className="max-md:flex max-md:flex-col max-md:justify-center">
                <h2 className="section-header max-md:text-center text-gray-900 leading-tight mb-6">
                  Your Vision, Our{" "}
                  <span
                    className="text-transparent font-medium"
                    style={{
                      background:
                        "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Precision
                  </span><br />
                  For All Stakeholders.
                </h2>
                <div className="mt-4">
                  <ButtonWithArrow
                    variant="secondary"
                    size="md"
                    className="px-3 flex max-md:mx-auto"
                    arrowHoverAnimation={true}
                  >
                    Get in Touch
                  </ButtonWithArrow>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col  max-md:text-center max-md:items-center justify-center">
                <p className="section-subtext text-gray-600 leading-relaxed">
                  We empower every stakeholder across India with unparalleled precision and efficiency, leveraging cutting-edge technology and expert analysis for superior patient outcomes and partner growth.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom Section - Two Main Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card: Dental Professionals & Clinics */}
          <div className="bg-[#F9EBFC] cursor-pointer rounded-3xl overflow-hidden transition-transform hover:-translate-y-1">
            <div className="h-64 xs:h-96 2xl:h-96 relative overflow-hidden bg-gray-100">
              <Image
                src="/home/partner/dental-professional.avif"
                alt="Dental Professional"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                unoptimized={false}
              />
            </div>
            <div className="p-8 max-md:flex max-md:flex-col max-md:justify-center">
              <h3 className="text-2xl max-md:text-center font-[600] text-gray-900 mb-4">
                Dental Professionals & Clinics
              </h3>
              <p className="text-gray-600 max-md:text-center text-base leading-relaxed mb-6">
                For dentists, streamline your practice with Vi-Scan&apos;s intuitive SaaS platform. Securely access all your precise reports and 3D DICOM viewers for truly confident decisions and seamless patient management, anywhere, anytime.
              </p>
              <Link href="/doctors">
                <ButtonWithArrow
                  variant="secondary"
                  size="md"
                  className="px-3 flex max-md:mx-auto"
                  arrowHoverAnimation={true}
                >
                  Access your Doctor Portal
                </ButtonWithArrow>
              </Link>
            </div>
          </div>

          {/* Right Card: Diagnostic Centers & Partners */}
          <div className="bg-[#EEEEFF] cursor-pointer rounded-3xl overflow-hidden transition-transform hover:-translate-y-1">
            <div className="h-64 xs:h-96 2xl:h-96 relative overflow-hidden bg-gray-100">
              <Image
                src="/home/partner/diagnostic-center.avif"
                alt="Diagnostic Center"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                unoptimized={false}
              />
            </div>
            <div className="p-8 max-md:flex max-md:flex-col max-md:justify-center">
              <h3 className="text-2xl max-md:text-center font-[600] text-gray-900 mb-4">
                Diagnostic Centers & Partners
              </h3>
              <p className="text-gray-600 max-md:text-center text-base leading-relaxed mb-6">
                Expand your reach and enhance capabilities within India&apos;s leading dental diagnostic network. Our flexible partnership models boost your business, streamline operations with AI-powered tele-reporting, and provide comprehensive support to help your center thrive.
              </p>
              <Link href="/centers">
                <ButtonWithArrow
                  variant="secondary"
                  size="md"
                  className="px-3 flex max-md:mx-auto"
                  arrowHoverAnimation={true}
                >
                  Start your Partnership Today
                </ButtonWithArrow>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 