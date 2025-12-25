"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from "@/components/ui/button";

interface JobCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

const JobCard: React.FC<JobCardProps> = ({ title, description, imageSrc, tags }) => {
  return (
    <div className="bg-white border border-[#F3D5F9] rounded-[10px] overflow-hidden">
      <div className="flex h-full max-lg:p-1">
        {/* Image on the left - consistent across all screen sizes */}
        <div className="w-[130px] lg:w-[240px]  rounded-[10px] flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
        
        {/* Content on the right */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="flex flex-col gap-3 lg:gap-4 h-full">
            <div className="flex flex-col gap-2 lg:gap-3">
              <h3 className="text-responsive-lg font-medium text-[#101828] leading-tight">
                {title}
              </h3>
              <div className="flex gap-1 xs:gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white border border-[#B43ABF] rounded-full text-responsive-xs font-medium text-[#B43ABF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="lg:text-base text-sm max-sm:text-xs text-[#667085] leading-relaxed max-xs:line-clamp-3">
                {description}
              </p>

            </div>
            
            {/* Apply Button - positioned at bottom */}
            <div className="mt-auto">
              <Button 
                variant="primary" 
                size="sm" 
              >
                <span className="text-responsive-sm font-medium">Apply Now</span>
                <div className="w-6 h-6 lg:w-7 lg:h-7 bg-white rounded-full flex items-center justify-center ml-1">
                  <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#101828]" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OpenPositionsSection = () => {
  const jobs = [
    {
      title: "Radiologists",
      description: "Review and report on CBCT, OPG, and other dental imaging scans to support clinics with accurate and timely diagnostics. Flexible remote opportunities available.",
      imageSrc: "/career/radiologist.webp",
      tags: ["Onsite", "Full-time"]
    },
    {
      title: "Data Annotators",
      description: "Label and annotate dental images to train and improve our AI diagnostic systems (Vi.AI). Ideal for detail-oriented professionals or students in medical/dental fields.",
      imageSrc: "/career/radiologist.webp",
      tags: ["Onsite", "Full-time"]
    },
    {
      title: "Field Operations & Marketing",
      description: "Manage clinic onboarding, grow partnerships, and lead field initiatives to expand our diagnostic network across cities.",
      imageSrc: "/career/radiologist.webp",
      tags: ["Onsite", "Full-time"]
    },
    {
      title: "Tech & Product",
      description: "Design, build, and optimize digital tools and backend platforms that power Viscan's diagnostics, reporting, and telereporting systems.",
      imageSrc: "/career/radiologist.webp",
      tags: ["Onsite", "Full-time"]
    },
    {
      title: "Internships",
      description: "Learn and contribute across product, design, operations, and marketing. Real-world exposure to healthtech and diagnostics in a fast-growing startup environment.",
      imageSrc: "/career/radiologist.webp",
      tags: ["Onsite", "Full-time"]
    }
  ];

  return (
    <section className="bg-[#F9FAFB] py-12 lg:py-20">
      <div className="responsive-container">
        {/* Header with Tab */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-start gap-6 lg:gap-10 mb-8 lg:mb-12">
          {/* Left side - empty for desktop, content for mobile */}
          <div className="hidden lg:block w-[207px]">
                      <span
              className="px-4 py-1.5 rounded-full text-gray-700 text-responsive-sm font-medium relative"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
                border: "1px solid transparent",
                borderRadius: "999px",
              }}
            >
              Open Positions
            </span>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden w-full">
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-4 py-1.5 rounded-full text-gray-700 text-responsive-sm font-medium relative"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
                border: "1px solid transparent",
                borderRadius: "999px",
              }}
            >
              Open Positions
            </span>
            <span className="text-xs text-gray-500 font-medium">(02)</span>
          </div>
            
            {/* Mobile Title and Description */}
            {/* <div className="text-center px-4">
              <h2 className="text-2xl font-normal text-[#101828] leading-tight mb-4">
                Diagnostics Centers,<br />
                Closer To You
              </h2>
              <p className="text-sm font-normal text-[#475467] leading-relaxed">
                Expanding Access to Advanced Dental<br />
                Diagnostics Near You.
              </p>
            </div> */}
          </div>

          {/* Right side - Job Grid */}
          <div className="flex-1 max-w-full lg:max-w-none">
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {jobs.map((job, index) => (
                <JobCard
                  key={index}
                  title={job.title}
                  description={job.description}
                  imageSrc={job.imageSrc}
                  tags={job.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenPositionsSection;