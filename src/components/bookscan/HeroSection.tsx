"use client";

import React, { useState, useMemo, useCallback, memo } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Calendar,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Button from "@/components/ui/button";

// Constants moved outside component to prevent recreation on every render
const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const SCAN_TYPES = [
  { value: "cbct", label: "CBCT Scan" },
  { value: "opg", label: "OPG & L Ceph" },
  { value: "soft-tissue", label: "Soft Tissue Screening" },
  { value: "pathology", label: "Pathology" },
  { value: "tele-reporting", label: "Tele-Reporting" },
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CENTERS = [
  { id: 1, name: "VI-SCAN diagnostics", location: "Ghatkopar, Mumbai -75" },
  { id: 2, name: "VI-SCAN diagnostics", location: "Andheri (w), Mumbai - 43" },
  { id: 3, name: "VI-SCAN diagnostics", location: "Kayan, Mumbai -75" },
  { id: 4, name: "VI-SCAN diagnostics", location: "Bandra West, Mumbai - 50" },
  { id: 5, name: "VI-SCAN diagnostics", location: "Powai, Mumbai - 76" },
  { id: 6, name: "VI-SCAN diagnostics", location: "Thane West, Mumbai - 60" },
  { id: 7, name: "VI-SCAN diagnostics", location: "Navi Mumbai, Panvel - 410206" },
  { id: 8, name: "VI-SCAN diagnostics", location: "Pune, Kharadi - 411014" },
  { id: 9, name: "VI-SCAN diagnostics", location: "Pune, Hinjewadi - 411057" },
  { id: 10, name: "VI-SCAN diagnostics", location: "Nashik, College Road - 422005" },
  { id: 11, name: "VI-SCAN diagnostics", location: "Aurangabad, CIDCO - 431003" },
  { id: 12, name: "VI-SCAN diagnostics", location: "Nagpur, Dharampeth - 440010" },
  { id: 13, name: "VI-SCAN diagnostics", location: "Indore, Vijay Nagar - 452010" },
  { id: 14, name: "VI-SCAN diagnostics", location: "Bhopal, MP Nagar - 462011" },
  { id: 15, name: "VI-SCAN diagnostics", location: "Ahmedabad, Satellite - 380015" },
  { id: 16, name: "VI-SCAN diagnostics", location: "Surat, Vesu - 395007" },
  { id: 17, name: "VI-SCAN diagnostics", location: "Vadodara, Alkapuri - 390007" },
  { id: 18, name: "VI-SCAN diagnostics", location: "Jaipur, Malviya Nagar - 302017" },
  { id: 19, name: "VI-SCAN diagnostics", location: "Udaipur, City Palace Road - 313001" },
  { id: 20, name: "VI-SCAN diagnostics", location: "Jodhpur, Sardarpura - 342001" },
  { id: 21, name: "VI-SCAN diagnostics", location: "Delhi, Connaught Place - 110001" },
  { id: 22, name: "VI-SCAN diagnostics", location: "Delhi, Saket - 110017" },
  { id: 23, name: "VI-SCAN diagnostics", location: "Gurgaon, Cyber City - 122002" },
  { id: 24, name: "VI-SCAN diagnostics", location: "Noida, Sector 62 - 201301" },
  { id: 25, name: "VI-SCAN diagnostics", location: "Faridabad, Sector 15 - 121007" },
  { id: 26, name: "VI-SCAN diagnostics", location: "Chandigarh, Sector 17 - 160017" },
  { id: 27, name: "VI-SCAN diagnostics", location: "Mohali, Phase 7 - 160062" },
  { id: 28, name: "VI-SCAN diagnostics", location: "Panchkula, Sector 5 - 134109" },
  { id: 29, name: "VI-SCAN diagnostics", location: "Lucknow, Gomti Nagar - 226010" },
  { id: 30, name: "VI-SCAN diagnostics", location: "Kanpur, Civil Lines - 208001" },
  { id: 31, name: "VI-SCAN diagnostics", location: "Varanasi, Assi Ghat - 221005" },
  { id: 32, name: "VI-SCAN diagnostics", location: "Patna, Boring Road - 800001" },
  { id: 33, name: "VI-SCAN diagnostics", location: "Ranchi, Kanke Road - 834008" },
  { id: 34, name: "VI-SCAN diagnostics", location: "Jamshedpur, Bistupur - 831001" },
  { id: 35, name: "VI-SCAN diagnostics", location: "Kolkata, Park Street - 700016" },
  { id: 36, name: "VI-SCAN diagnostics", location: "Kolkata, Salt Lake - 700091" },
  { id: 37, name: "VI-SCAN diagnostics", location: "Howrah, Belur - 711202" },
  { id: 38, name: "VI-SCAN diagnostics", location: "Siliguri, Hill Cart Road - 734001" },
  { id: 39, name: "VI-SCAN diagnostics", location: "Guwahati, Fancy Bazar - 781001" },
  { id: 40, name: "VI-SCAN diagnostics", location: "Shillong, Police Bazar - 793001" },
];

// Helper functions moved outside component
const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days: (Date | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }
  return days;
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"dentist" | "patient">("dentist");
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

  // Memoized callbacks to prevent unnecessary re-renders
  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  }, [formData]);

  // Memoize calendar days calculation
  const calendarDays = useMemo(() => getDaysInMonth(currentMonth), [currentMonth]);

  // Memoize selected center info
  const selectedCenter = useMemo(() => {
    if (!formData.preferredCentre) return null;
    return CENTERS.find((c) => c.id.toString() === formData.preferredCentre);
  }, [formData.preferredCentre]);

  // Memoize image source based on active tab
  const imageSrc = useMemo(() => 
    activeTab === "dentist" ? "/book-a-scan/for-dentist.webp" : "/book-a-scan/for-patient.webp",
    [activeTab]
  );

  const imageAlt = useMemo(() => 
    activeTab === "dentist" ? "Dental diagnostics" : "Patient diagnostics",
    [activeTab]
  );

  // Close pickers when clicking outside - optimized with useCallback
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Element;
    if (
      !target.closest(".date-picker-container") &&
      !target.closest(".time-picker-container") &&
      !target.closest(".scan-type-dropdown") &&
      !target.closest(".centre-dropdown")
    ) {
      setShowDatePicker(false);
      setShowTimePicker(false);
      setShowScanTypeDropdown(false);
      setShowCentreDropdown(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  // Memoized handlers for dropdowns
  const handleScanTypeSelect = useCallback((value: string) => {
    handleInputChange("scanType", value);
    setShowScanTypeDropdown(false);
  }, [handleInputChange]);

  const handleCentreSelect = useCallback((id: string) => {
    handleInputChange("preferredCentre", id);
    setShowCentreDropdown(false);
  }, [handleInputChange]);

  const handleDateSelect = useCallback((date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);
    
    if (selectedDate >= today) {
      handleInputChange("appointmentDate", date.toISOString().split("T")[0]);
      setShowDatePicker(false);
    }
  }, [handleInputChange]);

  const handleTimeSelect = useCallback((time: string) => {
    handleInputChange("appointmentTime", time);
    setShowTimePicker(false);
  }, [handleInputChange]);

  const handleMonthChange = useCallback((direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1));
      return newMonth;
    });
  }, []);

  return (
    <section className="relative responsive-margin">
      <div className=" mx-auto pt-8 lg:pt-12">
        <div className="mb-4 lg:mb-8">
          <div className="grid md:grid-cols-2 gap-4 xl:gap-8 items-start max-sm:items-center max-md:text-center">
            <div>
                             <h1 className="section-header">
                 Let&apos;s Connect: Your Questions, Our{" "}
                <span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Expertise
                </span>
              </h1>

              {/* Tab Navigation - Under the header on desktop */}
              <div className="hidden md:flex justify-start mt-4 mb-8 md:mb-0">
                <div className="bg-white border border-gray-200 rounded-full p-1 inline-flex">
                  <button
                    onClick={() => setActiveTab("dentist")}
                    className={`px-4 py-2 sm:py-2 rounded-full text-xs font-normal transition-all ${
                      activeTab === "dentist"
                        ? "bg-primary-900 text-white"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    For Dentist
                  </button>
                  <button
                    onClick={() => setActiveTab("patient")}
                    className={`px-4 py-2 sm:py-2 rounded-full text-xs font-normal transition-all ${
                      activeTab === "patient"
                        ? "bg-primary-900 text-white"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    For Patients
                  </button>
                </div>
              </div>
            </div>
            <div className="max-md:items-center flex flex-col">
              <p className="section-subtext">
                We seamlessly connect dentists, patients, diagnostic centers,
                and radiologists, creating a unified ecosystem that streamlines
                every step of the diagnostic process.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation - Centered on mobile */}
        <div className="flex justify-center mb-12 md:hidden">
          <div className="bg-white border border-gray-200 rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab("dentist")}
              className={`px-4  py-2 sm:py-3 rounded-full text-xs font-normal transition-all ${
                activeTab === "dentist"
                  ? "bg-primary-900 text-white"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
            >
              For Dentist
            </button>
            <button
              onClick={() => setActiveTab("patient")}
              className={`px-4  py-2 sm:py-3 rounded-full text-xs font-normal transition-all ${
                activeTab === "patient"
                  ? "bg-primary-900 text-white"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
            >
              For Patients
            </button>
          </div>
        </div>

        {/* Booking Form */}
        <div className="mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-visible">
            <div className="grid lg:grid-cols-5">
              {/* Form Image */}
              <div className="relative h-64 lg:h-auto lg:col-span-2">
                <Image
                   src={imageSrc}
                   alt={imageAlt}
                   fill
                   className="object-cover max-lg:rounded-t-3xl lg:rounded-l-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl"
                   sizes="(max-width: 1024px) 100vw, 40vw"
                   priority
                 />

                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-primary-800/30 backdrop-blur-md xl:max-w-[80%] mx-auto rounded-2xl p-4 text-white">
                  {activeTab=="patient"?<h3 className="text-responsive-xl text-center font-medium mb-2">
                    
                    Website Exclusive: Instant Savings on Diagnostics!
                  </h3>:<h3 className="text-responsive-xl text-center font-medium mb-2">
                  Quick & hassle-free appointment in just a few steps.
                  </h3>}
                  {activeTab=="patient"&&<p className="text-responsive-base text-center text-xs sm:text-sm md:text-base lg:text-lg">
                    Schedule your dental scans or blood tests directly through
                    the Vi-Scan website and enjoy a special Discount.
                  </p>}
                </div>
              </div>

              {/* Form */}
              <div
                className="p-3 sm:p-4 lg:p-10 lg:col-span-3 relative overflow-visible"
                style={{ zIndex: 1 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {activeTab === "dentist" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                          Dentist Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Enter dentist name"
                          className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                          Clinic Name
                        </label>
                        <input
                          type="text"
                          value={formData.clinicName || ""}
                          onChange={(e) =>
                            handleInputChange("clinicName", e.target.value)
                          }
                          placeholder="Enter clinic name"
                          className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                        required
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="min-w-0">
                      <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <div className="flex min-w-0 group">
                        <div className="bg-[#F9FAFB] px-4 py-3 border border-[#D0D5DD] border-r-0 rounded-l-full text-[#98A2B3] text-xs whitespace-nowrap transition-all duration-200 group-focus-within:border-[#EBB5F3]">
                          +91
                        </div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="00000 00000"
                          className="flex-1 min-w-0 px-4 py-3 border border-[#D0D5DD] rounded-r-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="min-w-0">
                                             <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                         Email
                       </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                                             <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                         Scan Type
                       </label>
                      <div className="relative scan-type-dropdown">
                        <button
                          type="button"
                          onClick={() =>
                            setShowScanTypeDropdown(!showScanTypeDropdown)
                          }
                          className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-left transition-all duration-200 hover:border-[#EBB5F3] cursor-pointer flex items-center justify-between"
                        >
                          <span
                            className={`text-xs ${
                              formData.scanType
                                ? "text-gray-900"
                                : "text-[#98A2B3]"
                            }`}
                          >
                            {formData.scanType || "Select scan type"}
                          </span>
                          <ChevronDown
                            className={`text-gray-400 w-5 h-5 transition-transform duration-200 ${
                              showScanTypeDropdown ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Custom Scan Type Dropdown */}
                        {showScanTypeDropdown && (
                          <div
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-[400px] overflow-y-auto min-w-full"
                            style={{ zIndex: 9999 }}
                          >
                            {SCAN_TYPES.map((option, index) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => handleScanTypeSelect(option.value)}
                                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-xs ${
                                  formData.scanType === option.value
                                    ? "bg-primary-50 text-primary-800 font-medium"
                                    : "text-gray-700"
                                } ${index === 0 ? "rounded-t-2xl" : ""} ${
                                  index === SCAN_TYPES.length - 1
                                    ? "rounded-b-2xl"
                                    : ""
                                }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                                             <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                         Preferred Centre
                       </label>
                      <div className="relative centre-dropdown">
                        <button
                          type="button"
                          onClick={() =>
                            setShowCentreDropdown(!showCentreDropdown)
                          }
                          className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-left transition-all duration-200 hover:border-[#EBB5F3] cursor-pointer flex items-center justify-between"
                        >
                          <span
                            className={`text-xs ${
                              formData.preferredCentre
                                ? "text-gray-900"
                                : "text-[#98A2B3]"
                            }`}
                          >
                            {selectedCenter
                              ? `${selectedCenter.name} - ${selectedCenter.location}`
                              : "Select preferred center"}
                          </span>
                          <ChevronDown
                            className={`text-gray-400 w-5 h-5 transition-transform duration-200 ${
                              showCentreDropdown ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Custom Centre Dropdown */}
                        {showCentreDropdown && (
                          <div
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-[400px] overflow-y-auto min-w-full"
                            style={{ zIndex: 9999 }}
                          >
                            {CENTERS.map((center, index) => (
                              <button
                                key={center.id}
                                type="button"
                                onClick={() => handleCentreSelect(center.id.toString())}
                                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-xs ${
                                  formData.preferredCentre === center.id.toString()
                                    ? "bg-primary-50 text-primary-800 font-medium"
                                    : "text-gray-700"
                                } ${index === 0 ? "rounded-t-2xl" : ""} ${
                                  index === CENTERS.length - 1
                                    ? "rounded-b-2xl"
                                    : ""
                                }`}
                              >
                                <div className="font-medium text-xs">{center.name}</div>
                                <div className="text-xs text-gray-500">
                                  {center.location}
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                                             <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                         Appointment Date
                       </label>
                      <div className="relative date-picker-container">
                        <button
                          type="button"
                          onClick={() => setShowDatePicker(!showDatePicker)}
                          className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-left transition-all duration-200 hover:border-[#EBB5F3] cursor-pointer flex items-center justify-between"
                        >
                          <span
                            className={`text-xs ${
                              formData.appointmentDate
                                ? "text-gray-900"
                                : "text-[#98A2B3]"
                            }`}
                          >
                            {formData.appointmentDate
                              ? formatDate(new Date(formData.appointmentDate))
                              : "Select appointment date"}
                          </span>
                          <Calendar className="text-gray-400 w-5 h-5" />
                        </button>

                        {/* Custom Date Picker */}
                        {showDatePicker && (
                          <div
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-4 min-w-full max-h-[400px] overflow-y-auto"
                            style={{ zIndex: 9999 }}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <button
                                type="button"
                                onClick={() => handleMonthChange("prev")}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <h3 className="font-medium text-gray-900">
                                {currentMonth.toLocaleDateString("en-US", {
                                  month: "long",
                                  year: "numeric",
                                })}
                              </h3>
                              <button
                                type="button"
                                onClick={() => handleMonthChange("next")}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="grid grid-cols-7 gap-1 mb-2">
                              {WEEKDAYS.map((day) => (
                                <div
                                  key={day}
                                  className="text-xs font-medium text-gray-500 text-center py-2"
                                >
                                  {day}
                                </div>
                              ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1">
                              {calendarDays.map((day, index) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                const isDisabled = !day || day < today;
                                const isSelected = day && formData.appointmentDate && 
                                  day.toDateString() === new Date(formData.appointmentDate).toDateString();
                                
                                return (
                                  <button
                                    key={index}
                                    type="button"
                                    onClick={() => day && handleDateSelect(day)}
                                    disabled={isDisabled}
                                    className={`p-2 text-sm rounded-full transition-colors ${
                                      isDisabled
                                        ? "text-gray-300 cursor-not-allowed"
                                        : isSelected
                                        ? "bg-primary-800 text-white"
                                        : "hover:bg-gray-100 text-gray-700"
                                    }`}
                                  >
                                    {day ? day.getDate() : ""}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                                             <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                         Appointment Time
                       </label>
                      <div className="relative time-picker-container">
                        <button
                          type="button"
                          onClick={() => setShowTimePicker(!showTimePicker)}
                          className="w-full px-4 py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-left transition-all duration-200 hover:border-[#EBB5F3] cursor-pointer flex items-center justify-between"
                        >
                          <span
                            className={`text-xs ${
                              formData.appointmentTime
                                ? "text-gray-900"
                                : "text-[#98A2B3]"
                            }`}
                          >
                            {formData.appointmentTime
                              ? formatTime(formData.appointmentTime)
                              : "Select appointment time"}
                          </span>
                          <Clock className="text-gray-400 w-5 h-5" />
                        </button>

                        {/* Custom Time Picker */}
                        {showTimePicker && (
                          <div
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-4 min-w-full"
                            style={{ zIndex: 9999 }}
                          >
                            <div className="grid grid-cols-3 gap-2 max-h-[400px] overflow-y-auto">
                              {TIME_SLOTS.map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => handleTimeSelect(time)}
                                  className={`p-3 text-sm rounded-xl transition-colors ${
                                    formData.appointmentTime === time
                                      ? "bg-primary-800 text-white"
                                      : "hover:bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {formatTime(time)}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                                         <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                       Additional Message
                     </label>
                    <textarea
                      value={formData.additionalMessage}
                      onChange={(e) =>
                        handleInputChange("additionalMessage", e.target.value)
                      }
                      placeholder="Enter your message"
                      rows={4}
                      className="w-full px-4 py-3 border border-[#D0D5DD] rounded-2xl focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] resize-none bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="secondary"
                      size="md"
                    >
                      Book a Scan
                      <div className="bg-white rounded-full p-1 ml-1">
                        <ArrowRight className="w-3 h-3 text-slate-900" />
                      </div>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
