"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Button from "@/components/ui/button";
import Image from "next/image";

interface FormData {
  referralSource: string;
  centerName: string;
  location: string;
  phone: string;
  email: string;
  services: string[];
  otherServices: string;
  turnaroundTime: string;
  operationalHours: string;
  customHours: {
    [key: string]: {
      enabled: boolean;
      openTime: string;
      closeTime: string;
    };
  };
  expectations: string[];
  otherExpectations: string;
}

const referralSources = [
  "Referral from Dentist",
  "Social Media (Instagram/Facebook/LinkedIn)",
  "Online Search (Google, Bing, etc.)",
  "Friends/Family Recommendation",
  "Events/Conferences",
  "Other"
];

const diagnosticServices = [
  { name: "Pathology", icon: "/register/pathology.svg" },
  { name: "Radiology", icon: "/register/radiology.svg" },
  { name: "Specialized Diagnostics", icon: "/register/specialized.svg" },
  { name: "Preventive & Screening", icon: "/register/screening.svg" },
  { name: "Tele-diagnostics & Reporting", icon: "/register/reporting.svg" },
  { name: "Other", icon: "/register/other.svg" }
];

const turnaroundTimes = [
  "Same day (within 12 hrs)",
  "24 hrs",
  "48 hrs",
  "More than 48 hrs"
];

const operationalHours = [
  "24x7",
  "9 AM - 6 PM",
  "10 AM - 8 PM",
  "Custom hours"
];

const expectations = [
  "Increased patient flow",
  "Faster & seamless reporting",
  "Online visibility & branding",
  "Integration with hospitals/clinics",
  "Other"
];

const daysOfWeek = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

// Custom Time Picker Component
interface TimePickerProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

const TimePicker = ({ value, onChange, disabled = false, placeholder = "Select time" }: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState(9);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>('AM');
  const containerRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  useEffect(() => {
    if (value) {
      const [time, period] = value.split(' ');
      const [hour, minute] = time.split(':');
      setSelectedHour(parseInt(hour));
      setSelectedMinute(parseInt(minute));
      setSelectedPeriod(period as 'AM' | 'PM');
    }
  }, [value]);

  // Auto-scroll to center selected items with smooth animation
  useEffect(() => {
    if (isOpen) {
      // Center selected hour with smooth scroll
      if (hoursRef.current) {
        const hourElement = hoursRef.current.children[selectedHour - 1] as HTMLElement;
        if (hourElement) {
          const containerHeight = hoursRef.current.clientHeight;
          const elementTop = hourElement.offsetTop;
          const elementHeight = hourElement.clientHeight;
          const scrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2);
          hoursRef.current.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }
      }

      // Center selected minute with smooth scroll
      if (minutesRef.current) {
        const minuteElement = minutesRef.current.children[selectedMinute] as HTMLElement;
        if (minuteElement) {
          const containerHeight = minutesRef.current.clientHeight;
          const elementTop = minuteElement.offsetTop;
          const elementHeight = minuteElement.clientHeight;
          const scrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2);
          minutesRef.current.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }
      }

      // Center selected period with smooth scroll
      if (periodRef.current) {
        const periodIndex = selectedPeriod === 'AM' ? 0 : 1;
        const periodElement = periodRef.current.children[periodIndex] as HTMLElement;
        if (periodElement) {
          const containerHeight = periodRef.current.clientHeight;
          const elementTop = periodElement.offsetTop;
          const elementHeight = periodElement.clientHeight;
          const scrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2);
          periodRef.current.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [isOpen, selectedHour, selectedMinute, selectedPeriod]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTimeSelect = () => {
    const formattedHour = selectedHour.toString().padStart(2, '0');
    const formattedMinute = selectedMinute.toString().padStart(2, '0');
    const timeString = `${formattedHour}:${formattedMinute} ${selectedPeriod}`;
    onChange(timeString);
    setIsOpen(false);
  };

  const formatDisplayValue = () => {
    if (!value) return placeholder;
    return value;
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full p-2 text-xs border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-primary-500 text-left ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {formatDisplayValue()}
      </button>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 mx-2 right-0 mt-0.5 bg-white shadow rounded-lg z-50 p-3">
          <div className="flex items-center justify-center space-x-2 mb-2">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div ref={hoursRef} className="h-36 overflow-y-auto space-y-1 scrollbar-hide relative">
                {hours.map((hour, index) => {
                  const isSelected = selectedHour === hour;
                  const distanceFromCenter = Math.abs(index - (selectedHour - 1));
                  const opacity = Math.max(0.3, 1 - (distanceFromCenter * 0.2));
                  
                  return (
                    <div
                      key={hour}
                      onClick={() => setSelectedHour(hour)}
                      className={`px-3 py-1 cursor-pointer text-xs transition-all duration-200 ${
                        isSelected
                          ? 'bg-gray-100 rounded'
                          : 'hover:bg-gray-50'
                      }`}
                      style={{ opacity }}
                    >
                      {hour}
                    </div>
                  );
                })}
              </div>
            </div>

            <span className="text-base font-bold">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div ref={minutesRef} className="h-36 overflow-y-auto space-y-1 scrollbar-hide relative">
                {minutes.map((minute, index) => {
                  const isSelected = selectedMinute === minute;
                  const distanceFromCenter = Math.abs(index - selectedMinute);
                  const opacity = Math.max(0.3, 1 - (distanceFromCenter * 0.2));
                  
                  return (
                    <div
                      key={minute}
                      onClick={() => setSelectedMinute(minute)}
                      className={`px-3 py-1 cursor-pointer text-xs transition-all duration-200 ${
                        isSelected
                          ? 'bg-gray-100 rounded'
                          : 'hover:bg-gray-50'
                      }`}
                      style={{ opacity }}
                    >
                      {minute.toString().padStart(2, '0')}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AM/PM */}
            <div className="flex flex-col items-center">
              <div ref={periodRef} className="h-36 overflow-y-auto space-y-1 scrollbar-hide relative">
                {['AM', 'PM'].map((period, index) => {
                  const isSelected = selectedPeriod === period;
                  const periodIndex = selectedPeriod === 'AM' ? 0 : 1;
                  const distanceFromCenter = Math.abs(index - periodIndex);
                  const opacity = Math.max(0.3, 1 - (distanceFromCenter * 0.2));
                  
                  return (
                    <div
                      key={period}
                      onClick={() => setSelectedPeriod(period as 'AM' | 'PM')}
                      className={`px-3 py-1 cursor-pointer text-xs transition-all duration-200 ${
                        isSelected
                          ? 'bg-gray-100 rounded'
                          : 'hover:bg-gray-50'
                      }`}
                      style={{ opacity }}
                    >
                      {period.toLowerCase()}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-1">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleTimeSelect}
              className="px-3 py-1 text-xs rounded-full bg-primary-700 text-white  hover:bg-primary-800"
            >
              Select
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function CenterRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0); // Start from 0 for intro step
  const [showCustomHours, setShowCustomHours] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    referralSource: "",
    centerName: "",
    location: "",
    phone: "",
    email: "",
    services: [],
    otherServices: "",
    turnaroundTime: "",
    operationalHours: "",
    customHours: {
      Monday: { enabled: false, openTime: "", closeTime: "" },
      Tuesday: { enabled: false, openTime: "", closeTime: "" },
      Wednesday: { enabled: false, openTime: "", closeTime: "" },
      Thursday: { enabled: false, openTime: "", closeTime: "" },
      Friday: { enabled: false, openTime: "", closeTime: "" },
      Saturday: { enabled: false, openTime: "", closeTime: "" },
      Sunday: { enabled: false, openTime: "", closeTime: "" }
    },
    expectations: [],
    otherExpectations: ""
  });

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateCustomHours = (day: string, field: 'enabled' | 'openTime' | 'closeTime', value: boolean | string) => {
    setFormData(prev => ({
      ...prev,
      customHours: {
        ...prev.customHours,
        [day]: {
          ...prev.customHours[day],
          [field]: value
        }
      }
    }));
  };

  const renderIntroStep = () => (
    <div className="w-full flex-1 flex flex-col">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-8">
        {/* Left Content */}
          <div className="">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 mb-4">
              Tell us about your center
            </h1>
            <p className="text-xs sm:text-sm xl:text-base text-gray-600 leading-relaxed">
              In this step, we&apos;ll ask you for basic details about your diagnostic center, 
              including the type of services you provide, your location, and the equipment 
              you use. This helps us create your profile and connect you with the right network.
            </p>
          </div>

        {/* Right Illustration */}
        <div className="relative h-96 lg:h-[400px]">
          <Image
            src="/register/form-introduction.webp"
            alt="Diagnostic Center Introduction"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </div>
      </div>
      
      {/* Progress Bar & Navigation - Fixed at bottom */}
      <div className="mt-auto">
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-primary-600 h-2 transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center px-4 mt-4">
          <Button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center px-4 align-middle py-1.5 rounded-full bg-white border border-primary-900 text-primary-900 hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="bg-primary-900 rounded-full p-1.5 mr-2">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            className="flex items-center px-4 py-1.5 rounded-full bg-primary-900 text-white hover:bg-primary-800"
          >
            Next
            <div className="bg-white rounded-full p-1.5 ml-2">
              <ArrowRight className="w-4 h-4 text-primary-900" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="w-full flex-1 flex flex-col">
      <div className="text-center mb-8">
        <div className="text-sm text-gray-500 mb-2">Step {currentStep}/6</div>
        <h1 className="text-3xl font-medium text-gray-800 mb-8">How did you hear about us?</h1>
      </div>
      
      <div className="space-y-3 mb-8 w-full max-w-2xl mx-auto">
        {referralSources.map((source) => (
          <div
            key={source}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              formData.referralSource === source
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => updateFormData("referralSource", source)}
          >
            <span className="text-gray-700 font-medium">{source}</span>
          </div>
        ))}
      </div>
      
      {/* Progress Bar & Navigation - Fixed at bottom */}
      <div className="mt-auto">
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-primary-600 h-2 transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center px-4 mt-4">
          <Button
            onClick={handleBack}
            className="flex items-center px-4 align-middle py-1.5 rounded-full bg-white border border-primary-900 text-primary-900 hover:bg-primary-50"
          >
            <div className="bg-primary-900 rounded-full p-1.5 mr-2">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            className="flex items-center px-4 py-1.5 rounded-full bg-primary-900 text-white hover:bg-primary-800"
          >
            Next
            <div className="bg-white rounded-full p-1.5 ml-2">
              <ArrowRight className="w-4 h-4 text-primary-900" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="w-full flex-1 flex flex-col">
      <div className="py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-gray-500 mb-2">Step {currentStep}/6</div>
        <h1 className="text-3xl font-medium text-gray-800 mb-8">Basic Information</h1>
      </div>
      
      <div className="space-y-8 max-w-2xl mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Center Name</label>
          <input
            type="text"
            placeholder="Enter your center name"
            className="w-full p-3 text-sm border bg-gray-50 border-gray-200 rounded-full focus:outline-none focus:border-primary-500"
            value={formData.centerName}
            onChange={(e) => updateFormData("centerName", e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            placeholder="Enter your center address"
            className="w-full p-3 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-primary-500"
            value={formData.location}
            onChange={(e) => updateFormData("location", e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-primary-500"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full p-3 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-primary-500"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
            />
          </div>
        </div>
      </div>
      </div>
      
      {/* Progress Bar & Navigation - Fixed at bottom */}
      <div className="mt-auto">
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-primary-600 h-2 transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center px-4 mt-4">
          <Button
            onClick={handleBack}
            className="flex items-center px-4 align-middle py-1.5 rounded-full bg-white border border-primary-900 text-primary-900 hover:bg-primary-50"
          >
            <div className="bg-primary-900 rounded-full p-1.5 mr-2">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            className="flex items-center px-4 py-1.5 rounded-full bg-primary-900 text-white hover:bg-primary-800"
          >
            Next
            <div className="bg-white rounded-full p-1.5 ml-2">
              <ArrowRight className="w-4 h-4 text-primary-900" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="w-full flex-1 flex flex-col">
      <div className="py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-gray-500 mb-2">Step {currentStep}/6</div>
        <h1 className="text-3xl font-medium text-gray-800 mb-8">Which diagnostic services do you offer?</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-xl mx-auto">
        {diagnosticServices.map((service) => (
          <div
            key={service.name}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
              formData.services.includes(service.name)
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => {
              const newServices = formData.services.includes(service.name)
                ? formData.services.filter(s => s !== service.name)
                : [...formData.services, service.name];
              updateFormData("services", newServices);
            }}
          >
            <div className="text-2xl max-w-12 max-h-12 p-2 mx-auto bg-gray-50 rounded-md mb-2">
              <Image
                src={service.icon}
                alt={service.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <span className="text-gray-500 text-xs font-medium">{service.name}</span>
          </div>
        ))}
      </div>
      
      {formData.services.includes("Other") && (
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Please specify your other services"
            className="w-full p-3 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-primary-500"
            value={formData.otherServices}
            onChange={(e) => updateFormData("otherServices", e.target.value)}
          />
        </div>
      )}
      </div>
      
      {/* Progress Bar & Navigation - Fixed at bottom */}
      <div className="mt-auto">
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-primary-600 h-2 transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center px-4 mt-4">
          <Button
            onClick={handleBack}
            className="flex items-center px-4 align-middle py-1.5 rounded-full bg-white border border-primary-900 text-primary-900 hover:bg-primary-50"
          >
            <div className="bg-primary-900 rounded-full p-1.5 mr-2">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            className="flex items-center px-4 py-1.5 rounded-full bg-primary-900 text-white hover:bg-primary-800"
          >
            Next
            <div className="bg-white rounded-full p-1.5 ml-2">
              <ArrowRight className="w-4 h-4 text-primary-900" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="w-full flex-1 flex flex-col">
      <div className="py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-gray-500 mb-2">Step {currentStep}/6</div>
        <h1 className="text-3xl font-medium text-gray-800 mb-8">Average Turnaround Time for Reports</h1>
      </div>
      
      <div className="space-y-3 max-w-xl mx-auto">
        {turnaroundTimes.map((time) => (
          <div
            key={time}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              formData.turnaroundTime === time
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => updateFormData("turnaroundTime", time)}
          >
            <span className="text-gray-700 font-medium">{time}</span>
          </div>
        ))}
      </div>
      </div>
      
      {/* Progress Bar & Navigation - Fixed at bottom */}
      <div className="mt-auto">
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-primary-600 h-2 transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center px-4 mt-4">
          <Button
            onClick={handleBack}
            className="flex items-center px-4 align-middle py-1.5 rounded-full bg-white border border-primary-900 text-primary-900 hover:bg-primary-50"
          >
            <div className="bg-primary-900 rounded-full p-1.5 mr-2">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            className="flex items-center px-4 py-1.5 rounded-full bg-primary-900 text-white hover:bg-primary-800"
          >
            Next
            <div className="bg-white rounded-full p-1.5 ml-2">
              <ArrowRight className="w-4 h-4 text-primary-900" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="w-full flex-1 flex flex-col">
      <div className="py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-gray-500 mb-2">Step {currentStep}/6</div>
        <h1 className="text-3xl font-medium text-gray-800 mb-8">Operational Hours</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6 max-w-xl mx-auto">
        {operationalHours.map((hours) => (
          <div
            key={hours}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
              formData.operationalHours === hours
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => updateFormData("operationalHours", hours)}
          >
            <span className="text-gray-700 font-medium">{hours}</span>
          </div>
        ))}
      </div>
      
        {formData.operationalHours === "Custom hours" && (
          <div className="max-w-xl mx-auto">
            <button 
              onClick={() => setShowCustomHours(!showCustomHours)}
              className="w-full p-4 border border-gray-200 rounded-lg text-left text-gray-500 hover:border-gray-300 transition-all flex items-center justify-between"
            >
              Customize
              {showCustomHours ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {showCustomHours && (
              <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Customize</span>
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                </div>
                
                <div className="space-y-3">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.customHours[day].enabled}
                        onChange={(e) => updateCustomHours(day, 'enabled', e.target.checked)}
                        className="w-4 h-4 text-primary-600 border-primary-300 rounded focus:ring-primary-500 accent-primary-600"
                      />
                      <span className="text-sm text-gray-700 w-20">{day}</span>
                      <div className="flex-1">
                        <TimePicker
                          value={formData.customHours[day].openTime}
                          onChange={(value) => updateCustomHours(day, 'openTime', value)}
                          disabled={!formData.customHours[day].enabled}
                          placeholder="Open Time"
                        />
                      </div>
                      <div className="flex-1">
                        <TimePicker
                          value={formData.customHours[day].closeTime}
                          onChange={(value) => updateCustomHours(day, 'closeTime', value)}
                          disabled={!formData.customHours[day].enabled}
                          placeholder="Close Time"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Progress Bar & Navigation - Fixed at bottom */}
      <div className="mt-auto">
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-primary-600 h-2 transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center px-4 mt-4">
          <Button
            onClick={handleBack}
            className="flex items-center px-4 align-middle py-1.5 rounded-full bg-white border border-primary-900 text-primary-900 hover:bg-primary-50"
          >
            <div className="bg-primary-900 rounded-full p-1.5 mr-2">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            className="flex items-center px-4 py-1.5 rounded-full bg-primary-900 text-white hover:bg-primary-800"
          >
            Next
            <div className="bg-white rounded-full p-1.5 ml-2">
              <ArrowRight className="w-4 h-4 text-primary-900" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="w-full flex-1 flex flex-col">
      <div className="py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-gray-500 mb-2">Step {currentStep}/6</div>
        <h1 className="text-3xl font-medium text-gray-800 mb-8">What do you expect from this partnership?</h1>
      </div>
      
      <div className="space-y-3 mb-6 max-w-xl mx-auto">
        {expectations.map((expectation) => (
          <div
            key={expectation}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              formData.expectations.includes(expectation)
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => {
              const newExpectations = formData.expectations.includes(expectation)
                ? formData.expectations.filter(e => e !== expectation)
                : [...formData.expectations, expectation];
              updateFormData("expectations", newExpectations);
            }}
          >
            <span className="text-gray-700 font-medium">{expectation}</span>
          </div>
        ))}
      </div>
      
      {formData.expectations.includes("Other") && (
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Please specify your other expectations"
            className="w-full p-3 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-primary-500"
            value={formData.otherExpectations}
            onChange={(e) => updateFormData("otherExpectations", e.target.value)}
          />
        </div>
      )}
      </div>
      
      {/* Progress Bar & Navigation - Fixed at bottom */}
      <div className="mt-auto">
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-primary-600 h-2 transition-all duration-300"
            style={{ width: `${(currentStep / 6) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center px-4 mt-4">
          <Button
            onClick={handleBack}
            className="flex items-center px-4 align-middle py-1.5 rounded-full bg-white border border-primary-900 text-primary-900 hover:bg-primary-50"
          >
            <div className="bg-primary-900 rounded-full p-1.5 mr-2">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            Back
          </Button>
          
          <Button
            onClick={handleFinish}
            className="flex items-center px-3 py-1.5 rounded-full bg-primary-900 text-white hover:bg-primary-800"
          >
            Finish
            <div className="bg-white rounded-full p-1.5 ml-2">
              <ArrowRight className="w-4 h-4 text-primary-900" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderIntroStep();
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      case 6: return renderStep6();
      default: return renderIntroStep();
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto py-4 px-4">
        {/* Fixed height container for consistent layout */}
        <div className="min-h-[700px] flex flex-col">
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
}
