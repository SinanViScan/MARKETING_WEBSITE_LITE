"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/button";

export type BookingAudience = "dentist" | "patient" | "other";

export interface BookingFormProps {
  audience?: BookingAudience;
}

const BookingForm: React.FC<BookingFormProps> = ({ audience = "dentist" }) => {
  const [activeTab, setActiveTab] = useState<BookingAudience>(audience);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showScanTypeDropdown, setShowScanTypeDropdown] = useState(false);
  const [showCentreDropdown, setShowCentreDropdown] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    scanType: "",
    preferredCentre: "",
    appointmentDate: "",
    appointmentTime: "",
    additionalMessage: "",
    clinicName: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { audience: activeTab, formData });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [] as (Date | null)[];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  };

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" });

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const timeSlots = [
    "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30",
    "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
  ];

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".date-picker-container") &&
          !target.closest(".time-picker-container") &&
          !target.closest(".scan-type-dropdown") &&
          !target.closest(".centre-dropdown")) {
        setShowDatePicker(false);
        setShowTimePicker(false);
        setShowScanTypeDropdown(false);
        setShowCentreDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const centers = [
    { id: 1, name: "VI-SCAN diagnostics", location: "Ghatkopar, Mumbai -75" },
    { id: 2, name: "VI-SCAN diagnostics", location: "Andheri (w), Mumbai - 43" },
  ];

  return (
    <div className="mx-auto">
      <div className="bg-white rounded-3xl shadow-lg overflow-visible">
        <div className="grid lg:grid-cols-5">
          {/* Form Image */}
          <div className="relative h-64 lg:h-auto lg:col-span-2">
            <Image
              src={activeTab === "dentist" ? "/book-a-scan/for-dentist.webp" : "/book-a-scan/for-patient.webp"}
              alt={activeTab === "dentist" ? "Dental diagnostics" : "Patient diagnostics"}
              fill
              className="object-cover max-lg:rounded-t-3xl lg:rounded-l-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 bg-primary-800/30 backdrop-blur-md xl:max-w-[80%] mx-auto rounded-2xl p-4 text-white">
              {activeTab === "patient" ? (
                <h3 className="text-responsive-xl text-center font-medium mb-2">Website Exclusive: Instant Savings on Diagnostics!</h3>
              ) : (
                <h3 className="text-responsive-xl text-center font-medium mb-2">Quick & hassle-free appointment in just a few steps.</h3>
              )}
              {activeTab === "patient" && (
                <p className="text-responsive-base text-center text-xs sm:text-sm md:text-base lg:text-lg">
                  Schedule your dental scans or blood tests directly through the Vi-Scan website and enjoy a special Discount.
                </p>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="p-3 sm:p-4 lg:p-10 lg:col-span-3 relative overflow-visible" style={{ zIndex: 1 }}>
            {/* Tab controls if consumer wants to toggle */}
            <div className="flex justify-center mb-6 md:hidden">
              <div className="bg-white border border-gray-200 rounded-full p-1 inline-flex">
                <button onClick={() => setActiveTab("dentist")} className={`px-4 py-2 sm:py-3 rounded-full text-xs ${activeTab === "dentist" ? "bg-primary-900 text-white" : "text-gray-900"}`}>For Dentist</button>
                <button onClick={() => setActiveTab("patient")} className={`px-4 py-2 sm:py-3 rounded-full text-xs ${activeTab === "patient" ? "bg-primary-900 text-white" : "text-gray-900"}`}>For Patients</button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {activeTab === "dentist" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Dentist Name" value={formData.name} onChange={(v) => handleInputChange("name", v)} placeholder="Enter dentist name" />
                  <Field label="Clinic Name" value={formData.clinicName} onChange={(v) => handleInputChange("clinicName", v)} placeholder="Enter clinic name" />
                </div>
              ) : (
                <Field label="Name" value={formData.name} onChange={(v) => handleInputChange("name", v)} placeholder="Enter your name" />
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PhoneField value={formData.phone} onChange={(v) => handleInputChange("phone", v)} />
                <Field label="Email" type="email" value={formData.email} onChange={(v) => handleInputChange("email", v)} placeholder="Enter your email" />
              </div>

              {/* Scan type + center dropdowns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <DropdownField
                  label="Scan Type"
                  value={formData.scanType}
                  placeholder="Select scan type"
                  open={showScanTypeDropdown}
                  setOpen={setShowScanTypeDropdown}
                  options={[
                    { value: "cbct", label: "CBCT Scan" },
                    { value: "opg", label: "OPG & L Ceph" },
                    { value: "soft-tissue", label: "Soft Tissue Screening" },
                    { value: "pathology", label: "Pathology" },
                    { value: "tele-reporting", label: "Tele-Reporting" },
                  ]}
                  onSelect={(val) => handleInputChange("scanType", val)}
                />
                <DropdownField
                  label="Preferred Centre"
                  value={formData.preferredCentre}
                  placeholder="Select preferred center"
                  open={showCentreDropdown}
                  setOpen={setShowCentreDropdown}
                  options={centers.map((c) => ({ value: c.id.toString(), label: `${c.name} - ${c.location}` }))}
                  onSelect={(val) => handleInputChange("preferredCentre", val)}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <Label text="Appointment Date" />
                  <div className="relative date-picker-container">
                    <button type="button" onClick={() => setShowDatePicker(!showDatePicker)} className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-left flex items-center justify-between">
                      <span className={`text-xs ${formData.appointmentDate ? "text-gray-900" : "text-[#98A2B3]"}`}>
                        {formData.appointmentDate ? formatDate(new Date(formData.appointmentDate)) : "Select appointment date"}
                      </span>
                      <Calendar className="text-gray-400 w-5 h-5" />
                    </button>
                    {showDatePicker && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-4 min-w-full max-h-[400px] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                          <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft className="w-4 h-4" /></button>
                          <h3 className="font-medium text-gray-900">{currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h3>
                          <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (<div key={d} className="text-xs font-medium text-gray-500 text-center py-2">{d}</div>))}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                          {getDaysInMonth(currentMonth).map((day, idx) => (
                            <button key={idx} type="button" onClick={() => { if (day) { const today = new Date(); const sel = new Date(day); if (sel >= today) { handleInputChange("appointmentDate", day.toISOString().split("T")[0]); setShowDatePicker(false);} } }} disabled={!day || day < new Date()} className={`p-2 text-sm rounded-full ${!day || day < new Date() ? "text-gray-300 cursor-not-allowed" : day.toDateString() === new Date(formData.appointmentDate).toDateString() ? "bg-primary-800 text-white" : "hover:bg-gray-100 text-gray-700"}`}>{day ? day.getDate() : ""}</button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Time */}
                <div>
                  <Label text="Appointment Time" />
                  <div className="relative time-picker-container">
                    <button type="button" onClick={() => setShowTimePicker(!showTimePicker)} className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-left flex items-center justify-between">
                      <span className={`text-xs ${formData.appointmentTime ? "text-gray-900" : "text-[#98A2B3]"}`}>{formData.appointmentTime ? formatTime(formData.appointmentTime) : "Select appointment time"}</span>
                      <Clock className="text-gray-400 w-5 h-5" />
                    </button>
                    {showTimePicker && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-4 min-w-full">
                        <div className="grid grid-cols-3 gap-2 max-h-[400px] overflow-y-auto">
                          {timeSlots.map((time) => (
                            <button key={time} type="button" onClick={() => { handleInputChange("appointmentTime", time); setShowTimePicker(false);} } className={`p-3 text-sm rounded-xl ${formData.appointmentTime === time ? "bg-primary-800 text-white" : "hover:bg-gray-100 text-gray-700"}`}>{formatTime(time)}</button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Label text="Additional Message" />
                <textarea value={formData.additionalMessage} onChange={(e) => handleInputChange("additionalMessage", e.target.value)} placeholder="Enter your message" rows={4} className="w-full px-4 py-3 border border-[#D0D5DD] rounded-2xl focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] resize-none bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3]" />
              </div>

              <div className="flex justify-end">
                <Button type="submit" variant="secondary" size="md">
                  Book a Scan
                  <div className="bg-white rounded-full p-1 ml-1"><ArrowRight className="w-3 h-3 text-slate-900" /></div>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function Label({ text }: { text: string }) {
  return <label className="block text-responsive-sm font-medium text-gray-700 mb-2">{text}</label>;
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string; }) {
  return (
    <div>
      <Label text={label} />
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3]" required />
    </div>
  );
}

function PhoneField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="min-w-0">
      <Label text="Phone" />
      <div className="flex min-w-0 group">
        <div className="bg-[#F9FAFB] px-4 py-3 border border-[#D0D5DD] border-r-0 rounded-l-full text-[#98A2B3] text-xs whitespace-nowrap group-focus-within:border-[#EBB5F3]">+91</div>
        <input type="tel" value={value} onChange={(e) => onChange(e.target.value)} placeholder="00000 00000" className="flex-1 min-w-0 px-4 py-3 border border-[#D0D5DD] rounded-r-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3]" required />
      </div>
    </div>
  );
}

function DropdownField({ label, value, placeholder, open, setOpen, options, onSelect }: { label: string; value: string; placeholder: string; open: boolean; setOpen: (b: boolean) => void; options: { value: string; label: string }[]; onSelect: (v: string) => void; }) {
  return (
    <div>
      <Label text={label} />
      <div className="relative scan-type-dropdown">
        <button type="button" onClick={() => setOpen(!open)} className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-left flex items-center justify-between">
          <span className={`text-xs ${value ? "text-gray-900" : "text-[#98A2B3]"}`}>{value ? options.find((o) => o.value === value)?.label : placeholder}</span>
          <ChevronDown className={`text-gray-400 w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-[400px] overflow-y-auto min-w-full">
            {options.map((opt, idx) => (
              <button key={opt.value} type="button" onClick={() => { onSelect(opt.value); setOpen(false); }} className={`w-full px-4 py-3 text-left hover:bg-gray-50 text-xs ${value === opt.value ? "bg-primary-50 text-primary-800 font-medium" : "text-gray-700"} ${idx === 0 ? "rounded-t-2xl" : ""} ${idx === options.length - 1 ? "rounded-b-2xl" : ""}`}>{opt.label}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;


