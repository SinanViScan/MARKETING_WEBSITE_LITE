"use client";

import { ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { servicesLinks } from "@/lib/footer-services";
import { getFooterBackground, shouldUseDarkTheme } from "@/lib/theme";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import LinkedInIcon from "@/components/ui/icons/LinkedInIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import YouTubeIcon from "@/components/ui/icons/YouTubeIcon";
import EmailIcon from "@/components/ui/icons/EmailIcon";
import PhoneIcon from "@/components/ui/icons/PhoneIcon";
import LocationIcon from "@/components/ui/icons/LocationIcon";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string; width?: number | string; height?: number | string }>;
  href: string;
  width?: number | string;
  height?: number | string;
  label: string;
}

interface FooterSection {
  title: string;
  key: "company" | "product" | "services" | "contact";
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    key: "company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Careers", href: "/career" },
      { label: "Centers", href: "/labs" },
      // { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Product",
    key: "product",
    links: [
      // { label: "Viz", href: "#" },
      { label: "Book Appointment", href: "/bookscan" },
      { label: "Centers", href: "/labs" },
    ],
  },
  {
    title: "Services",
    key: "services",
    links: servicesLinks,
  },
];

const socialLinks: SocialLink[] = [
  { icon: FacebookIcon, href: "https://www.facebook.com/ViScanDiagnostics/", width: 11, height: 16, label: "Visit our Facebook page" },
  // { icon: TwitterIcon, href: "#", width: 19, height: 16, label: "Visit our Twitter page" },
  { icon: InstagramIcon, href: "https://www.instagram.com/viscan_diagnostics", width: 16, height: 16, label: "Visit our Instagram page" },
  { icon: LinkedInIcon, href: "https://in.linkedin.com/company/vi-scan-diagnostics", width: 17, height: 16, label: "Visit our LinkedIn page" },
  { icon: YouTubeIcon, href: "https://www.youtube.com/channel/UCwchI5vi9HbZDKP2UIt3mMQ", width: 18, height: 16, label: "Visit our YouTube channel" },
];

const bottomFooterLinks: FooterLink[] = [
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  const pathname = usePathname();
  const isDarkTheme = shouldUseDarkTheme(pathname);
  const [openSections, setOpenSections] = useState({
    company: false,
    product: false,
    services: false,
    contact: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className={`relative ${isDarkTheme ? getFooterBackground('dark') : getFooterBackground()} border-t ${isDarkTheme ? 'border-gray-700' : 'border-gray-100'} responsive-container ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} overflow-hidden`}>
      {/* Gradient Ellipse Background */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[600px] h-[1000px] sm:h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse closest-side, #CE59DC 0%, #B43ABF 30%, rgba(180, 58, 191, 0.4) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 xl:col-span-1">
            {/* Mobile: Centered Layout, Desktop: Left-aligned */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="mr-3 -ml-3 relative">
                  <Image
                    src="/logo.webp"
                    alt="VI-SCAN logo"
                    width={130}
                    height={130}
                    className="object-contain rounded-sm 
               w-[90px] sm:w-[100px] md:w-[120px] lg:w-[130px]" // 👈 responsive sizes
                  />
                </div>
              </div>
              <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-500'} mb-6 leading-relaxed lg:text-sm`}>
                Precision dental imaging, empowering <br />
                confident smiles across India.
              </p>
              <div className="flex justify-center md:justify-start items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  // All icons use consistent height of 16px
                  const iconHeight = 16;
                  const iconWidth = typeof social.width === 'number' ? social.width : iconHeight;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="transition-opacity hover:opacity-80 flex items-center"
                      style={{ color: '#7D2682', height: `${iconHeight}px` }}
                    >
                      <Icon
                        className="transition-colors"
                        width={iconWidth}
                        height={iconHeight}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.key}>
              <button
                onClick={() => toggleSection(section.key)}
                className={`flex items-center justify-center md:justify-start w-full lg:text-lg font-semibold mb-6 text-primary-800 md:mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
              >
                <span>{section.title}</span>
                <ChevronUp
                  className={`lg:h-5 lg:w-5 h-3 w-3 transition-transform md:hidden ml-2 ${openSections[section.key] ? "" : "rotate-180"
                    }`}
                />
              </button>
              <ul
                className={`space-y-3 transition-all duration-300 md:block text-center md:text-left ${openSections[section.key] ? "block" : "hidden md:block"
                  }`}
              >
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors lg:text-sm`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:hidden xl:block">
            <button
              onClick={() => toggleSection("contact")}
              className={`flex items-center justify-center md:justify-start w-full lg:text-lg font-semibold mb-6 text-primary-800 md:mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
            >
              <span>Get in touch</span>
              <ChevronUp
                className={`lg:h-5 lg:w-5 h-3 w-3 transition-transform md:hidden ml-2 ${openSections.contact ? "" : "rotate-180"
                  }`}
              />
            </button>
            <div
              className={`space-y-4 transition-all duration-300 md:block text-center md:text-left ${openSections.contact ? "block" : "hidden md:block"
                }`}
            >
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <EmailIcon className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-500'} flex-shrink-0`} width={16} height={12} />
                <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} text-xs md:text-sm break-all`}>
                  connect@viscandiagnostics.com
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <PhoneIcon className={`${isDarkTheme ? 'text-gray-500' : 'text-gray-500'} flex-shrink-0`} width={16} height={16} />
                <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} text-xs md:text-sm`}>
                  +91 96069 80274
                </span>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <LocationIcon className={`${isDarkTheme ? 'text-gray-500' : 'text-gray-500'} mt-0.5 flex-shrink-0`} width={14} height={18} />
                <div>
                  <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} text-xs md:text-sm leading-relaxed`}>
                    2nd floor, No. Royal Arcade, 60, 17th
                    <br />
                    Cross Road, Sector 6, HSR Layout
                    <br />
                    Bengaluru, Karnataka-560102
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={`relative border-t ${isDarkTheme ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-500'} lg:text-sm`}>
              Copyright © 2025 Vi Scan Diagnostics
            </div>
            <div className="flex space-x-6 lg:text-sm">
              <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-500'} max-lg:hidden`}>
                All Rights Reserved
              </span>
              <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-500'} max-lg:hidden`}>|</span>
              {bottomFooterLinks.map((link, index) => (
                <span key={index}>
                  {index > 0 && <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-500'}`}>|</span>}
                  <Link
                    href={link.href}
                    className="text-primary-700 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
