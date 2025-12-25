import Image from "next/image";
import Button from "@/components/ui/button";
import ButtonWithArrow from "@/components/ui/button-with-arrow";

export default function ToolsSection({
  title,
  subtext,
}: {
  title: React.ReactNode;
  subtext: string;
}) {
  return (
    <section className="responsive-margin py-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-4 py-1.5 rounded-full text-gray-700 text-sm font-medium"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
                border: "1px solid transparent",
              }}
            >
              What You Get
            </span>
            <span className="text-xs text-gray-500 font-medium">(03)</span>
          </div>
          <hr className="border-gray-200" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            {title}

            <p className="text-sm xl:text-base text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <ButtonWithArrow
                className="bg-primary-900 text-white px-5 py-2.5 rounded-full hover:bg-primary-800 transition"
                arrowColor="text-primary-900"
                arrowHoverAnimation
              >
                Take a Demo
              </ButtonWithArrow>

              <Button
                variant="outline"
                className="border-2 border-dashed border-primary-900 text-primary-900 px-6 py-2.5 rounded-full hover:bg-gray-50 transition"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="relative">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/5">
              <Image
                src="/viz/viz.avif"
                alt="Vi-Scan Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
