"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/button";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 sm:py-10 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Image Section (Hidden on mobile) */}
            <div className="hidden lg:block lg:w-1/2 bg-[#F3D5F9] p-8 lg:p-12">
              <div className="flex flex-col h-full">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="text-center lg:text-left">
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-normal text-[#1D2939] mb-2">
                        Access AI-enhanced scan analysis and specialized blood
                        test reports.
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base lg:text-base text-[#475467]">
                        Manage referrals, reports, and patient data all in one
                        secure place
                      </p>
                    </div>

                    {/* Dashboard Image */}
                    <div className="relative w-full h-48 lg:h-80 rounded-2xl overflow-hidden ">
                      <div className="absolute inset-1 rounded-2xl overflow-hidden">
                        <Image
                          src="/home/ai/dashboard.svg"
                          alt="Dashboard Preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Image Section */}
            <div className="lg:hidden bg-[#F3D5F9] p-4">
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-base sm:text-lg md:text-xl font-normal text-[#1D2939] mb-2">
                    Access AI-enhanced scan analysis and specialized blood test
                    reports.
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-[#475467]">
                    Manage referrals, reports, and patient data all in one
                    secure place
                  </p>
                </div>

                {/* Mobile Dashboard Image */}
                <div className="relative w-full h-60 md:h-96 rounded-2xl overflow-hidden">
                  <div className="absolute inset-1 rounded-2xl overflow-hidden">
                    <Image
                      src="/home/ai/dashboard.svg"
                      alt="Dashboard Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="lg:w-1/2 p-4 sm:p-8 lg:p-12">
              <div className="max-w-md mx-auto">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center lg:text-left">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-medium text-[#1D2939] mb-2">
                      Viz for Doctors Login
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-base text-[#475467]">
                      Your Gateway to Advanced Dental Diagnostics & Practice
                      Management
                    </p>
                  </div>

                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm md:text-base font-normal text-[#1D2939]"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D0D5DD] rounded-full text-xs sm:text-sm text-[#98A2B3] placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#440C46] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="password"
                        className="block text-xs sm:text-sm md:text-base font-normal text-[#1D2939]"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#D0D5DD] rounded-full text-xs sm:text-sm text-[#98A2B3] placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#440C46] focus:border-transparent pr-12"
                          required
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#343330] hover:text-[#1D2939]"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {/* Forgot Password Link */}
                      <div className="text-right">
                        <button
                          type="button"
                          className="text-xs sm:text-sm font-medium text-[#7D2682] hover:text-[#5e086c] transition-colors"
                        >
                          Forgot Password ?
                        </button>
                      </div>
                    </div>

                    {/* Login Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      className="font-bold"
                    >
                      Log In
                    </Button>

                    {/* Register Link */}
                    <div className="text-start max-lg:text-center">
                      <button
                        type="button"
                        className="text-xs sm:text-sm font-medium text-slate-900 transition-colors"
                      >
                        Don&apos;t have an account ?{" "}
                        <span className="text-[#440C46] hover:text-[#5e086c]">
                          Register
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
