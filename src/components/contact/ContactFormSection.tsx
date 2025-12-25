"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import TwitterIcon from "@/components/ui/icons/TwitterIcon";
import LinkedInIcon from "@/components/ui/icons/LinkedInIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import YouTubeIcon from "@/components/ui/icons/YouTubeIcon";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    stakeholderType: "",
    message: "",
  });

  const [showStakeholderDropdown, setShowStakeholderDropdown] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  const stakeholderTypes = [
    { value: "patient", label: "Patient" },
    { value: "dentist", label: "Dentist" },
    { value: "radiologist", label: "Radiologist" },
    { value: "diagnostic-center", label: "Diagnostic Center" },
    { value: "partner", label: "Partner" },
    { value: "other", label: "Other" },
  ];

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".stakeholder-dropdown")) {
        setShowStakeholderDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-6 lg:py-8">
      <div className="responsive-margin">
        <div className="bg-[#F5F3F6] rounded-3xl px-4 py-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <h1 className="section-header">Get in touch with us</h1>
                  <div className="w-15 h-1 bg-gray-900 rounded-full"></div>
                </div>
                <p className="text-responsive-base max-w-2xl">
                  We&apos;re here to help! Whether you have a question about our
                  services, want to partner with us, or want to provide
                  feedback, our team is ready to assist you.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-responsive-sm text-gray-600">Email</p>
                      <p className="text-responsive-base text-gray-700 font-medium">
                        hello@finpro.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-responsive-sm text-gray-600">Phone</p>
                      <p className="text-responsive-base text-gray-700 font-medium">
                        +91 12345 67890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-responsive-sm text-gray-600">
                        Location
                      </p>
                      <p className="text-responsive-base text-gray-700 font-medium">
                        Bengaluru, Karnataka
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-responsive-sm text-gray-600">
                  Available Monday to Friday, 9 AM - 6PM
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <FacebookIcon className="text-white" width={8} height={12} />
                  </div>
                  <div className="w-6 h-6 bg-black rounded-full flex cursor-pointer items-center justify-center hover:bg-gray-800 transition-colors">
                    <TwitterIcon className="text-white" width={10} height={10} />
                  </div>
                  <div className="w-6 h-6 bg-blue-700 rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <LinkedInIcon className="text-white" width={11} height={10} />
                  </div>
                  <div
                    className="w-6 h-6 rounded-full flex items-center cursor-pointer justify-center hover:opacity-90 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                    }}
                  >
                    <InstagramIcon className="text-white" width={10} height={10} />
                  </div>
                  <div className="w-6 h-6 bg-red-600 rounded-full cursor-pointer flex items-center justify-center hover:bg-red-700 transition-colors">
                    <YouTubeIcon className="text-white" width={12} height={9} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-3xl p-4 lg:p-8">
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Name Field */}
                <div>
                  <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3  max-sm:px-2 max-sm:py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex min-w-0 group">
                    <div className="bg-[#F2F4F7] px-4 py-3 max-sm:px-2 max-sm:py-3 border border-[#D0D5DD] border-r-0 rounded-l-full text-[#98A2B3] text-xs whitespace-nowrap transition-all duration-200 group-focus-within:border-[#EBB5F3]">
                      +91
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="00000 00000"
                      className="flex-1 min-w-0 px-4 py-3 max-sm:px-2 max-sm:py-3 border border-[#D0D5DD] rounded-r-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Email and Stakeholder Type Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
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
                      className="w-full px-4 py-3 max-sm:px-2 max-sm:py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                      Stakeholder Type
                    </label>
                    <div className="relative stakeholder-dropdown">
                      <button
                        type="button"
                        onClick={() =>
                          setShowStakeholderDropdown(!showStakeholderDropdown)
                        }
                        className="w-full px-4 py-3 max-sm:px-2 max-sm:py-3 border border-[#D0D5DD] rounded-full focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] bg-[#F9FAFB] text-left transition-all duration-200 hover:border-[#EBB5F3] cursor-pointer flex items-center justify-between"
                      >
                        <span
                          className={`text-xs ${
                            formData.stakeholderType
                              ? "text-gray-900"
                              : "text-[#98A2B3]"
                          }`}
                        >
                          {formData.stakeholderType
                            ? stakeholderTypes.find(
                                (t) => t.value === formData.stakeholderType
                              )?.label
                            : "Select stakeholder"}
                        </span>
                        <ChevronDown
                          className={`text-gray-400 w-5 h-5 transition-transform duration-200 ${
                            showStakeholderDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {showStakeholderDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 max-h-[400px] overflow-y-auto min-w-full">
                          {stakeholderTypes.map((type, index) => (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => {
                                handleInputChange(
                                  "stakeholderType",
                                  type.value
                                );
                                setShowStakeholderDropdown(false);
                              }}
                              className={`w-full px-4 py-3 max-sm:px-2 max-sm:py-3 text-left hover:bg-gray-50 transition-colors text-xs ${
                                formData.stakeholderType === type.value
                                  ? "bg-primary-50 text-primary-800 font-medium"
                                  : "text-gray-700"
                              } ${index === 0 ? "rounded-t-2xl" : ""} ${
                                index === stakeholderTypes.length - 1
                                  ? "rounded-b-2xl"
                                  : ""
                              }`}
                            >
                              {type.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-responsive-sm font-medium text-gray-700 mb-2">
                    How can we help you?
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-4 py-3 max-sm:px-2 max-sm:py-3 border border-[#D0D5DD] rounded-2xl focus:ring-1 focus:ring-primary-600 focus:border-[#EBB5F3] resize-none bg-[#F9FAFB] text-xs text-gray-900 placeholder-[#98A2B3] transition-all duration-200 hover:border-[#EBB5F3] outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end max-sm:justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="secondary"
                      size="md"
                    >
                      Send Message
                      <div className="bg-white rounded-full p-1 ml-1">
                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-slate-900" />
                      </div>
                    </Button>
                  </motion.div>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
