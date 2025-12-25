"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Star,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  MessageCircleMore,
  Clock,
} from "lucide-react";
import ClinicsNearSection, {
  ClinicItem,
} from "@/components/services/packages/ClinicsNear";
import PopularBlogsSection, {
  BlogItem,
} from "@/components/services/packages/PopularBlogsSection";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import ClinicMap from "@/components/ui/ClinicMap";

export default function ClinicProfilePage() {
  const clinicData = {
    name: "Vi-Scan Diagnostics",
    logo: "/centers/hero-img.webp",
    availability: "24x7",
    location: "Ghatkopar, Mumbai",
    phone: "+911234567890",
    rating: 4.5,
    reviewCount: 512,
    address:
      "Siddhachal Arcade, Link Road, Near Sathya Sai General Hospital, Andheri, Mumbai - 400048",
    services: ["CBCT", "OPG", "L Ceph", "Soft Tissue Screening", "Pathology"],
  };

  const reviews = [
    {
      id: 1,
      name: "Samriddhi Singh",
      date: "December 30, 2024",
      timeAgo: "9 months ago",
      rating: 5,
      reason: "Visited For High-Risk Pregnancy Care",
      services: ["CBCT", "OPG"],
      review:
        "Excellent service and very professional staff. The CBCT scan was quick and the results were clear. Highly recommended for anyone looking for quality diagnostic services.",
    },
    {
      id: 2,
      name: "Samriddhi Singh",
      date: "December 30, 2024",
      timeAgo: "9 months ago",
      rating: 5,
      reason: "Visited For High-Risk Pregnancy Care",
      services: ["L Ceph", "Soft Tissue Screening"],
      review:
        "Outstanding experience! The L Ceph and soft tissue screening were performed with great care. The facility is modern and the staff is very knowledgeable.",
    },
    {
      id: 3,
      name: "Samriddhi Singh",
      date: "December 30, 2024",
      timeAgo: "9 months ago",
      rating: 5,
      reason: "Visited For High-Risk Pregnancy Care",
      services: ["L Ceph", "Soft Tissue Screening"],
      review:
        "Outstanding experience! The L Ceph and soft tissue screening were performed with great care. The facility is modern and the staff is very knowledgeable.",
    },
  ];

  const ratingBreakdown = [
    { stars: 5, count: 400, percentage: 70 },
    { stars: 4, count: 120, percentage: 20 },
    { stars: 3, count: 40, percentage: 7 },
    { stars: 2, count: 20, percentage: 2 },
    { stars: 1, count: 10, percentage: 1 },
  ];

  const clinicsNear: ClinicItem[] = [
    {
      id: 1,
      name: "VI-SCAN diagnostics Noida",
      location: "Ghatkopar, Mumbai - 75",
      imageSrc: "/centers/hero-img.webp",
      rating: 4.5,
    },
    {
      id: 2,
      name: "VI-SCAN diagnostics Noida",
      location: "Ghatkopar, Mumbai - 75",
      imageSrc: "/centers/partner-with-us.webp",
      rating: 4.5,
    },
  ];

  const popularBlogs: BlogItem[] = [
    {
      id: 1,
      category: "Dental Care",
      description:
        "Elevating India's dental sector with advance radiology and diagnostic technologies",
      image: "/book-a-scan/for-patient.webp",
    },
    {
      id: 2,
      category: "Diagnostics",
      description:
        "Understanding OPG scans and their role in dental diagnostics",
      image: "/book-a-scan/for-patient.webp",
    },
    {
      id: 3,
      category: "Radiology",
      description: "How AI is transforming scan interpretation and reporting",
      image: "/book-a-scan/for-patient.webp",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-2.5 h-2.5 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : i < rating
            ? "text-yellow-400 fill-current opacity-50"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <main className="min-h-screen ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <div className="text-xs text-gray-600">
            <span className="hover:text-primary-600 cursor-pointer">
              Centers
            </span>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{clinicData.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Clinic Information Card */}
            <div className="border rounded-lg p-2">
              <div className="lg:flex grid items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-[100px] md:w-[150px] xl:w-[200px] h-full bg-black rounded-lg flex items-center justify-center">
                    <Image
                      src={clinicData.logo}
                      alt={clinicData.name}
                      width={400}
                      height={400}
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-sm font-medium text-primary-900 mb-1">
                      {clinicData.name}
                    </h1>
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-1">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="text-[10px]">
                          {clinicData.availability}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 " />
                        <span className="text-[10px]">
                          {clinicData.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        <span className="text-[10px]">{clinicData.phone}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-1">
                      <div className="flex items-center gap-1">
                        {renderStars(clinicData.rating)}
                        <span className="text-[9px] ml-1 font-normal text-gray-600">
                          {clinicData.rating}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-600 flex gap-1 items-center">
                        {" "}
                        <MessageCircleMore className="w-3 h-3" />
                        {clinicData.reviewCount} reviews
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {clinicData.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-[8px] font-medium text-primary-900 bg-white border border-primary-200 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-col max-lg:mt-2 justify-end gap-1 my-auto">
                  <button className="flex items-center text-[10px] gap-2 px-4 py-1.5 bg-primary-800 text-white rounded-full hover:bg-primary-700 transition-colors">
                    <Calendar className="w-3 h-3" />
                    Book Appointment
                  </button>
                  <button aria-label="Call us" className="flex items-center text-[10px] gap-2 px-4 py-1.5 bg-white text-primary-600 border border-dashed border-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                    <Phone className="w-3 h-3" />
                    Call Us
                  </button>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-white border rounded-lg p-4 ">
              <div className="flex flex-col border-b pb-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Location
                </h2>
                <p className="text-gray-600 mb-4">{clinicData.address}</p>
                <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                  Get Directions
                </button>
                <div className="lg:hidden">
                  <ClinicMap className="my-4" mapClassName="h-48" />
                </div>
              </div>
              {/* Photos Section */}
              <div className=" rounded-lg  pt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Photos
                </h2>
                <div className="flex gap-3 overflow-x-auto">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-24 h-16 bg-gray-200 rounded-lg overflow-hidden"
                    >
                      <Image
                        src="/centers/hero-img.webp"
                        alt={`Clinic photo ${i}`}
                        width={96}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex-shrink-0 w-24 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-medium">+7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Section */}
            <div className="rounded-lg p-4 border">
              {/* <div className="flex items-center justify-between mb-4"> */}

              {/* </div> */}

              {/* Review Header and Rating - Side by side on large screens */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                {/* Left Column - Review Prompt */}
                <div className="mb-6 lg:mb-0 lg:flex-1 lg:pr-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Review
                  </h2>
                  <p className="text-xs text-primary-700 mb-1">
                    Rate the Doctor
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    Tell others what you think.
                  </p>
                  <button aria-label="Write a review" className="flex items-center gap-1 px-3 py-1 text-xs bg-white text-gray-600 border border-gray-600 rounded-full hover:bg-primary-50 border-dashed transition-colors">
                    <MessageCircleMore className="w-3 h-3" />
                    Write A Review
                  </button>
                </div>

                {/* Right Column - Rating Breakdown */}
                <div className="lg:flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-gray-900 mb-2">
                        4.5
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        {renderStars(4.5)}
                      </div>
                      <div className="text-[10px] text-gray-600">
                        653 reviews
                      </div>
                    </div>
                    <div className="flex-1 max-w-xs ml-8">
                      {ratingBreakdown.map((item) => (
                        <div
                          key={item.stars}
                          className="flex items-center gap-2 mb-2"
                        >
                          <span className="text-[10px] text-gray-600 w-5">
                            {item.stars}
                          </span>
                          <div className="flex-1 bg-gray-200 rounded-full h-1">
                            <div
                              className={`h-1 rounded-full ${
                                item.stars === 5
                                  ? "bg-green-700"
                                  : item.stars === 4
                                  ? "bg-green-500"
                                  : item.stars === 3
                                  ? "bg-yellow-500"
                                  : item.stars === 2
                                  ? "bg-orange-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] text-gray-600 w-8">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-medium flex items-center gap-1 text-gray-900 text-xs">
                            {review.name}
                            <CheckCircle className="w-3 h-3 text-green-500" />
                          </span>
                          <span className="text-xs text-gray-500">
                            {review.timeAgo}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                          {review.reason}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {review.services.map((service, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-[10px] font-medium text-primary-900 bg-white border border-primary-200 rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-700">{review.review}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button aria-label="View all reviews" className="flex items-center gap-2 border border-primary-900 rounded-full border-dashed text-xs mx-auto px-4 py-2 text-primary-900 hover:text-primary-800 transition-colors">
                  View All Reviews
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 px-3">
            {/* Map Section */}
            <div className="bg-white rounded-lg max-lg:hidden">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Map</h3>
              <ClinicMap className="mb-4" mapClassName="h-96" />
            </div>

            {/* Clinics Near You */}
            <ClinicsNearSection
              header="Clinics Near You"
              items={clinicsNear}
              onSeeAll={() => console.log("See all clinics")}
            />

            {/* Popular Blogs */}
            <PopularBlogsSection
              header="Popular Blogs"
              items={popularBlogs}
              onSeeAll={() => console.log("See all blogs")}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
