"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/button";
import ButtonWithArrow from "@/components/ui/button-with-arrow";
import { servicesLinks } from "@/lib/footer-services";
import { getHeaderBackground, shouldUseDarkTheme } from "@/lib/theme";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const solutionsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSolutions = () => {
    // Close services if open
    if (isServicesOpen) {
      setIsServicesOpen(false);
    }
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const toggleServices = () => {
    // Close solutions if open
    if (isSolutionsOpen) {
      setIsSolutionsOpen(false);
    }
    setIsServicesOpen(!isServicesOpen);
  };

  const handleSolutionsMouseEnter = () => {
    // Clear any pending timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (servicesHoverTimeoutRef.current) {
      clearTimeout(servicesHoverTimeoutRef.current);
      servicesHoverTimeoutRef.current = null;
    }
    // Close services dropdown if open
    if (isServicesOpen) {
      setIsServicesOpen(false);
    }
    // Open solutions dropdown
    setIsSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
      hoverTimeoutRef.current = null;
    }, 150); // Reduced delay for smoother feel
  };

  const handleServicesMouseEnter = () => {
    // Clear any pending timeouts
    if (servicesHoverTimeoutRef.current) {
      clearTimeout(servicesHoverTimeoutRef.current);
      servicesHoverTimeoutRef.current = null;
    }
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    // Close solutions dropdown if open
    if (isSolutionsOpen) {
      setIsSolutionsOpen(false);
    }
    // Open services dropdown
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesHoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      servicesHoverTimeoutRef.current = null;
    }, 150); // Reduced delay for smoother feel
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (servicesHoverTimeoutRef.current) {
        clearTimeout(servicesHoverTimeoutRef.current);
      }
    };
  }, []);

  const isDarkTheme = shouldUseDarkTheme(pathname);
  
  return (
    <header className={`${isDarkTheme ? getHeaderBackground('dark') : getHeaderBackground()} responsive-container sticky top-0 z-50`}>
      {/* <div className=""> */}
      <div className="flex items-center justify-between py-2">
        {/* Logo */}
        <Link
          href="/"
          className="relative w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18"
        >
          <Image
            src="/logo.webp"
            alt="ViScan Diagnostics"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="max-md:hidden flex items-center  space-x-10">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === "/"
                ? "text-primary-800"
                : isDarkTheme 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-primary-800"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              pathname === "/about"
                ? "text-primary-800"
                : isDarkTheme 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-primary-800"
            }`}
          >
            About
          </Link>
          <div
            className="relative group"
            ref={solutionsRef}
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <button
              onClick={toggleSolutions}
              className={`flex items-center space-x-1 transition-colors ${
                isDarkTheme 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-primary-800"
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ease-in-out ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Solutions Dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg border py-1 z-50 transition-all duration-200 ease-in-out ${
                isSolutionsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
                <Link
                  href="/doctors"
                  className={`block px-4 py-2 transition-colors ${
                    isDarkTheme 
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white" 
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-800"
                  }`}
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  For Doctors
                </Link>

                <Link
                  href="/patients"
                  className={`block px-4 py-2 transition-colors ${
                    isDarkTheme 
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white" 
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-800"
                  }`}
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  For Patients
                </Link>

                <Link
                  href="/centers"
                  className={`block px-4 py-2 transition-colors ${
                    isDarkTheme 
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white" 
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-800"
                  }`}
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  For Diagnostic Centers
                </Link>

                <Link
                  href="/insurance"
                  className={`block px-4 py-2 transition-colors ${
                    isDarkTheme 
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white" 
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-800"
                  }`}
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  For Insurance Providers
                </Link>
              </div>
          </div>
          <div
            className="relative group"
            ref={servicesRef}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              onClick={toggleServices}
              className={`flex items-center space-x-1 transition-colors ${
                isDarkTheme 
                  ? "text-gray-300 hover:text-white" 
                  : "text-gray-600 hover:text-primary-800"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ease-in-out ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Services Dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg border py-1 z-50 transition-all duration-200 ease-in-out ${
                isServicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              {servicesLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`block px-4 py-2 transition-colors ${
                    isDarkTheme 
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white" 
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-800"
                  }`}
                  onClick={() => setIsServicesOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/labs"
            className={`transition-colors ${
              isDarkTheme 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-primary-800"
            }`}
          >
            Centers
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Hamburger menu */}
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-center items-center rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ease-in-out ${
                isDarkTheme ? 'bg-white' : 'bg-gray-700'
              } ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ease-in-out mt-1 ${
                isDarkTheme ? 'bg-white' : 'bg-gray-700'
              } ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ease-in-out mt-1 ${
                isDarkTheme ? 'bg-white' : 'bg-gray-700'
              } ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
            />
          </button>
        </div>

        {/* Buttons */}
        <div className="max-md:hidden flex items-center space-x-3">
          {/* AI Solution Button */}
          <a 
            href="https://aidev.viscandiagnostics.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="gray"
              size="md"
              className="max-lg:hidden px-4 hover:bg-[#440C46] hover:text-white"
            >
              <div className="bg-white rounded-full p-1.5 mr-2">
                <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-black" />
              </div>
              AI Solution
            </Button>
          </a>

          {/* ViZ for Doctors Button */}
          <a 
            href="https://doctor.viscandiagnostics.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonWithArrow
              variant="primary"
              size="md"
              className="max-lg:hidden px-4"
              arrowSize="w-3 h-3 lg:w-4 lg:h-4"
              arrowClassName="max-lg:hidden"
            >
              ViZ for Doctors
            </ButtonWithArrow>
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`md:hidden fixed inset-0 top-16 ${isDarkTheme ? 'bg-[#0D0D0D]' : 'bg-white'} z-40 overflow-y-auto`}>
          <div className="px-6 py-8">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-lg transition-colors py-2 ${
                  pathname === "/"
                    ? "text-primary-800"
                    : isDarkTheme 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-600 hover:text-primary-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-lg transition-colors py-2 ${
                  pathname === "/about"
                    ? "text-primary-800"
                    : isDarkTheme 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-600 hover:text-primary-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Solutions Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={toggleSolutions}
                  className={`flex items-center justify-between w-full text-lg transition-colors py-2 ${
                    isDarkTheme 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-600 hover:text-primary-800"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isSolutionsOpen && (
                  <div className={`ml-4 space-y-1 mt-2 border-l-2 ${isDarkTheme ? 'border-gray-700' : 'border-gray-200'} pl-4`}>
                    <Link
                      href="/doctors"
                      className={`block py-2 transition-colors text-base ${
                        isDarkTheme 
                          ? "text-gray-400 hover:text-white" 
                          : "text-gray-600 hover:text-primary-800"
                      }`}
                      onClick={() => {
                        setIsSolutionsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      For Doctors
                    </Link>
                    <Link
                      href="/patients"
                      className={`block py-2 transition-colors text-base ${
                        isDarkTheme 
                          ? "text-gray-400 hover:text-white" 
                          : "text-gray-600 hover:text-primary-800"
                      }`}
                      onClick={() => {
                        setIsSolutionsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      For Patients
                    </Link>
                    <Link
                      href="/centers"
                      className={`block py-2 transition-colors text-base ${
                        isDarkTheme 
                          ? "text-gray-400 hover:text-white" 
                          : "text-gray-600 hover:text-primary-800"
                      }`}
                      onClick={() => {
                        setIsSolutionsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Diagnostic Centers
                    </Link>
                    <Link
                      href="/insurance"
                      className={`block py-2 transition-colors text-base ${
                        isDarkTheme 
                          ? "text-gray-400 hover:text-white" 
                          : "text-gray-600 hover:text-primary-800"
                      }`}
                      onClick={() => {
                        setIsSolutionsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Insurance Providers
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={toggleServices}
                  className={`flex items-center justify-between w-full text-lg transition-colors py-2 ${
                    isDarkTheme 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-600 hover:text-primary-800"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className={`ml-4 space-y-1 mt-2 border-l-2 ${isDarkTheme ? 'border-gray-700' : 'border-gray-200'} pl-4`}>
                    {servicesLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block py-2 transition-colors text-base ${
                          isDarkTheme 
                            ? "text-gray-400 hover:text-white" 
                            : "text-gray-600 hover:text-primary-800"
                        }`}
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#"
                className={`text-lg transition-colors py-2 ${
                  isDarkTheme 
                    ? "text-gray-300 hover:text-white" 
                    : "text-gray-600 hover:text-primary-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Centers
              </a>
            </nav>

            {/* Mobile Menu Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <a 
                href="https://aidev.viscandiagnostics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gray" size="lg" fullWidth>
                  <div className="bg-white rounded-full p-1.5 mr-2">
                    <Sparkles className="w-4 h-4 text-black" />
                  </div>
                  AI Solution
                </Button>
              </a>
              <a 
                href="https://doctor.viscandiagnostics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonWithArrow variant="primary" size="lg" fullWidth>
                  ViZ for Doctors
                </ButtonWithArrow>
              </a>
            </div>
          </div>
        </div>
      )}
      {/* </div> */}
    </header>
  );
}
