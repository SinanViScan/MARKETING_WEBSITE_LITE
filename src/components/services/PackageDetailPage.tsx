"use client";

import { PackageCardProps } from "../ui/PackageCard";
import AboutPackage from "./packages/AboutPackage";
import PackageDetail from "./packages/PackageDetail";
import SuggestedTestSection from "./packages/SuggestedTestSection";
import ClinicsNearSection, { ClinicItem } from "./packages/ClinicsNear";
import PopularBlogsSection from "./packages/PopularBlogsSection";
import FAQSection from "../bookscan/FAQSection";

const suggested: PackageCardProps[] = [
  {
    id: 1,
    title: "Safe Extraction Panel",
    price: "₹499",
    originalPrice: "₹699",
    imageSrc: "/service-detail/blood-collection.webp",
    parametersText: "91",
    reportTATText: "10",
    keyTestsText: "CBC with ESR, PT/INR (Coagulation profile) +5 More",
  },
  {
    id: 2,
    title: "Safe Extraction Panel",
    price: "₹499",
    originalPrice: "₹699",
    imageSrc: "/service-detail/blood-collection.webp",
    parametersText: "91",
    reportTATText: "10",
    keyTestsText: "CBC with ESR, PT/INR (Coagulation profile) +5 More",
  },
  {
    id: 3,
    title: "Safe Extraction Panel",
    price: "₹499",
    originalPrice: "₹699",
    imageSrc: "/service-detail/blood-collection.webp",
    parametersText: "91",
    reportTATText: "10",
    keyTestsText: "CBC with ESR, PT/INR (Coagulation profile) +5 More",
  },
];

export default function PathologyPage() {
  return (
    <>
      <div className="responsive-margin grid grid-cols-1 pb-10 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div className="xl:col-span-3 lg:col-span-2">
          <PackageDetail />
          <AboutPackage />
          <div className="max-lg:hidden">
            <FAQSection margin={false}/>
          </div>
        </div>
        <div>
          <SuggestedTestSection items={suggested} />
          <div className="mt-6">
            <ClinicsNearSection items={clinicsNear} />
          </div>
          <div className="mt-6">
            <PopularBlogsSection items={popularBlogs} />
          </div>
        </div>
        <div className="lg:hidden">
            <FAQSection margin={false}/>
          </div>
      </div>
    </>
  );
}

const clinicsNear: ClinicItem[] = [
  {
    id: 1,
    name: "VI-SCAN diagnostics Noida",
    location: "Ghatkopar, Mumbai - 75",
    imageSrc: "/service-detail/blood-collection.webp",
    rating: 4.5,
  },
  {
    id: 2,
    name: "VI-SCAN diagnostics Noida",
    location: "Ghatkopar, Mumbai - 75",
    imageSrc: "/service-detail/blood-collection.webp",
    rating: 4.5,
  },
  {
    id: 3,
    name: "VI-SCAN diagnostics Noida",
    location: "Ghatkopar, Mumbai - 75",
    imageSrc: "/service-detail/blood-collection.webp",
    rating: 4.5,
  },
];

const popularBlogs = [
  {
    id: 1,
    category: "Dental Care",
    description:
      "Elevating India's dental sector with advanced radiology and diagnostic technologies",
    image: "/book-a-scan/for-patient.webp",
  },
  {
    id: 2,
    category: "Diagnostics",
    description: "Understanding OPG scans and their role in dental diagnostics",
    image: "/book-a-scan/for-patient.webp",
  },
  {
    id: 3,
    category: "Radiology",
    description: "How AI is transforming scan interpretation and reporting",
    image: "/book-a-scan/for-patient.webp",
  },
];
