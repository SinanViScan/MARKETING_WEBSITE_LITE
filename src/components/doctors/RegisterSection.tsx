"use client";

import Link from "next/link";
import Button from "@/components/ui/button";
import ButtonWithArrow from "@/components/ui/button-with-arrow";
import { useEffect, useState } from "react";
import { ArrowRight, BriefcaseBusiness , User, UserCog, ChevronDown } from "lucide-react";

export default function RegisterSection({ pageNumber = "01" }: { pageNumber?: string }) {
  const [form, setForm] = useState({
    clinicName: "",
    license: "",
    specialization: "",
    scanType: "",
    pincode: "",
    city: "",
    state: "",
  });

  const [showSpecialization, setShowSpecialization] = useState(false);

  const specializationOptions = [
    "General Dentistry",
    "Orthodontics",
    "Endodontics",
    "Prosthodontics",
    "Periodontics",
    "Oral & Maxillofacial Surgery",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest(".specialization-dropdown")) {
        setShowSpecialization(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const steps = [
    { title: "Your personal details", subtitle: "Personal details of user", icon: <User className="w-4 h-4" /> },
    { title: "Your company details", subtitle: "Personal details of user", icon: <BriefcaseBusiness  className="w-4 h-4" /> },
    { title: "Your role", subtitle: "User role in the platform", icon: <UserCog className="w-4 h-4" /> },
  ];
  const currentStep = 2; // matches "Step 2/3" in the UI
  const totalSegments = steps.length - 1;
  const completedSegments = Math.max(0, currentStep - 1);
  const progressPercent = totalSegments > 0 ? (completedSegments / totalSegments) * 100 : 0;
  const trackLeftPct = 100 / (steps.length * 2); // margin so line starts at first icon center
  const trackWidthPct = 100 - trackLeftPct * 2;

  return (
    <section className="responsive-margin py-12 sm:hidden">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span
            className="px-4 py-1.5 rounded-full text-gray-700 text-sm font-medium relative"
            style={{
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
              border: "1px solid transparent",
              borderRadius: "999px",
            }}
          >
            Contact Us?
          </span>
          <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Heading and intro */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="section-header text-[#101828]">
            Register to
            <span
              className="text-transparent font-medium"
              style={{
                background:
                  "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              &nbsp;Access
            </span>
            <br />
            Dental Diagnostic.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 max-w-[150px]">
            <Link href="/services">
              <Button variant="primary" size="sm">
                View All
                <div className=" rounded-full p-1.5 ml-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="section-subtext text-[#475467]">
            Dive into our latest articles, expert interviews, and dental diagnostic advancements.
          </p>
        </div>
      </div>

      {/* Mobile heading */}
      <div className="block md:hidden">
        <div className="text-center">
          <h2 className="section-header text-[#101828] mb-4">
            Register to
            <span
              className="text-transparent font-medium"
              style={{
                background:
                  "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              &nbsp;Access
            </span>
            <br />
            Dental Diagnostic.
          </h2>
          <p className="section-subtext text-[#475467] max-w-lg mx-auto">
            Dive into our latest articles, expert interviews, and dental diagnostic advancements.
          </p>
          <div className="flex justify-center mt-6">
            <Link href="/services">
              <Button variant="primary" size="sm">
                View All
                <div className="rounded-full p-1.5 ml-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stepper + form card */}
      <div className="mt-10 rounded-3xl bg-white/80 shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left stepper (hidden on small) */}
          <div className="hidden md:block bg-[#F4F5F7] px-6 py-8 md:rounded-l-3xl h-full">
            <div className="">
              {steps.map((step, index) => {
                const stepIndex = index + 1;
                const isCompleted = stepIndex <= currentStep;
                const isCurrent = stepIndex === currentStep;
                const showTop = index !== 0;
                const showBottom = index !== steps.length - 1;
                const connectorColor = "#972d9e"; // primary
                const upcomingColor = "#C7C9D1";
                return (
                  <div key={step.title} className="flex items-center gap-4 ">
                    {/* Marker + short connectors matching between icons */}
                    <div className="flex flex-col items-center">
                      <div className={`w-[2px] ${showTop ? "h-10 -mb-2" : "h-0"} rounded-full`} style={{ background: showTop ?connectorColor: "transparent" }} />
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow ${
                          isCompleted
                            ? "bg-primary-700 text-white"
                            : isCurrent
                            ? "bg-white border-2 border-primarybg-primary-700 text-primarybg-primary-700"
                            : "bg-white border border-[#D0D5DD] text-primary-700"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <div className={`w-[2px] ${showBottom ? "h-10 -mt-2" : "h-0"} rounded-full`} style={{ background: showBottom ? ((isCompleted || isCurrent) ? connectorColor : upcomingColor) : "transparent" }} />
                    </div>
                    {/* Labels */}
                    <div className="flex flex-col gap-1">
                      <div className="text-[#101828] font-medium">{step.title}</div>
                      <div className="text-primary-700 text-sm">{step.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right form */}
          <div className="md:col-span-2 px-4 sm:px-8 lg:px-10 py-8">
            {/* Mobile horizontal stepper */}
            <div className="md:hidden mb-6">
              <div className="w-full rounded-t-3xl bg-white/60 p-4 pt-5 relative border-b border-gray-100">
                {/* Base track from first to last icon center */}
                <div
                  className="absolute top-9 h-[2px] bg-[#C7C9D1]"
                  style={{ left: `${trackLeftPct}%`, width: `${trackWidthPct}%` }}
                />
                {/* Progress track */}
                <div
                  className="absolute top-9 h-[2px] bg-primary-700"
                  style={{ left: `${trackLeftPct}%`, width: `${(progressPercent / 100) * trackWidthPct}%` }}
                />
                <div className="grid grid-cols-3 gap-2 relative z-10">
                  {steps.map((step, index) => {
                    const stepIndex = index + 1;
                    const isCompleted = stepIndex <= currentStep;
                    const isCurrent = stepIndex === currentStep;
                    return (
                      <div key={step.title} className="flex flex-col items-center text-center gap-1">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shadow ${
                            isCompleted
                              ? "bg-primary-700 text-white"
                              : isCurrent
                              ? "bg-white border-2 border-primary-700 text-primary-700"
                              : "bg-white border border-[#D0D5DD] text-[#6B3A74]"
                          }`}
                        >
                          {steps[index].icon}
                        </div>
                        <div className="text-[11px] font-medium leading-tight text-[#101828]">{step.title}</div>
                        <div className="text-[10px] text-primary-700 leading-tight">{step.subtitle}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="space-y-1 text-center md:text-left">
              <div className="text-[#667085] text-xs">Step 2/3</div>
              <h3 className="text-[#101828] text-2xl md:text-3xl font-medium">Professional Details</h3>
              <div className="text-[#667085] text-sm">Tell us about your Professional details.</div>
            </div>

            <div className="mt-6 space-y-5">
              {/* Clinic Name */}
              <div>
                <label className="block text-[#667085] text-xs mb-1">Clinic Name</label>
                <input
                  type="text"
                  placeholder="Clinic Name"
                  value={form.clinicName}
                  onChange={(e) => setForm({ ...form, clinicName: e.target.value })}
                  className="w-full px-4 py-3 rounded-full border border-[#D0D5DD] bg-[#F9FAFB] text-sm text-[#101828] outline-none transition-all duration-200 hover:border-[#EBB5F3] focus:ring-1 focus:ring-[#EBB5F3] focus:border-[#EBB5F3] focus:bg-[#F4E6FA]"
                />
              </div>
              {/* Dual inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#667085] text-xs mb-1">Dental License Number</label>
                  <input
                    type="text"
                    placeholder="Enter license number"
                    value={form.license}
                    onChange={(e) => setForm({ ...form, license: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-[#D0D5DD] bg-[#F9FAFB] text-sm outline-none transition-all duration-200 hover:border-[#EBB5F3] focus:ring-1 focus:ring-[#EBB5F3] focus:border-[#EBB5F3] focus:bg-[#F4E6FA]"
                  />
                </div>
                <div className="relative specialization-dropdown z-50">
                  <label className="block text-[#667085] text-xs mb-1">Specialization</label>
                  <button
                    type="button"
                    onClick={() => setShowSpecialization(!showSpecialization)}
                    className="w-full px-4 py-3 rounded-full border border-[#D0D5DD] bg-[#F9FAFB] text-left text-sm pr-10 outline-none transition-all duration-200 hover:border-[#EBB5F3] focus:ring-1 focus:ring-[#EBB5F3] focus:border-[#EBB5F3] focus:bg-[#F4E6FA]"
                  >
                    <span className={`${form.specialization ? "text-[#101828]" : "text-[#98A2B3]"}`}>
                      {form.specialization || "Select your specialization"}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#667085] absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${showSpecialization ? "rotate-180" : ""}`} />
                  </button>
                  {showSpecialization && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-[60] overflow-hidden">
                      {specializationOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setForm({ ...form, specialization: opt });
                            setShowSpecialization(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 ${form.specialization === opt ? "bg-primary-50 text-primary-800 font-medium" : "text-gray-700"}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-[#667085] text-xs mb-1">Clinic Address</label>
                <input
                  type="text"
                  placeholder="Select scan type"
                  value={form.scanType}
                  onChange={(e) => setForm({ ...form, scanType: e.target.value })}
                  className="w-full px-4 py-3 rounded-full border border-[#D0D5DD] bg-[#F9FAFB] text-sm outline-none transition-all duration-200 hover:border-[#EBB5F3] focus:ring-1 focus:ring-[#EBB5F3] focus:border-[#EBB5F3] focus:bg-[#F4E6FA]"
                />
              </div>

              {/* City row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#667085] text-xs mb-1">Pincode</label>
                  <input
                    type="text"
                    placeholder="Enter pincode"
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-[#D0D5DD] bg-[#F9FAFB] text-sm outline-none transition-all duration-200 hover:border-[#EBB5F3] focus:ring-1 focus:ring-[#EBB5F3] focus:border-[#EBB5F3] focus:bg-[#F4E6FA]"
                  />
                </div>
                <div>
                  <label className="block text-[#667085] text-xs mb-1">City</label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-[#D0D5DD] bg-[#F9FAFB] text-sm outline-none transition-all duration-200 hover:border-[#EBB5F3] focus:ring-1 focus:ring-[#EBB5F3] focus:border-[#EBB5F3] focus:bg-[#F4E6FA]"
                  />
                </div>
                <div>
                  <label className="block text-[#667085] text-xs mb-1">State</label>
                  <input
                    type="text"
                    placeholder="Enter state"
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-[#D0D5DD] bg-[#F9FAFB] text-sm outline-none transition-all duration-200 hover:border-[#EBB5F3] focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] focus:bg-[#F9F5FF]"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center md:justify-end gap-3 pt-2">
                <Button variant="dashed" size="sm" className="px-5">
                  <div className="bg-[#440C46] rounded-full p-1.5 mr-2">
                    <ArrowRight className="w-4 h-4 text-white rotate-180" />
                  </div>
                  Previous
                </Button>
                <ButtonWithArrow variant="primary" size="md" className="px-5 py-1.5">
                  Next
                </ButtonWithArrow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


