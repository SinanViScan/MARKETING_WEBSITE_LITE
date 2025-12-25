"use client";

import { motion } from "framer-motion";
import BookingForm from "@/components/bookscan/BookingForm";

export default function BookScan({ pageNumber = "04", pillLabel = "Book a Scan" }: { pageNumber?: string; pillLabel?: string }) {
  return (
    <section className="responsive-margin py-8 sm:hidden">
      {/* Header pill + page number */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <motion.span
            className="px-4 py-1.5 rounded-full text-gray-700 text-sm font-medium relative"
            style={{
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
              border: "1px solid transparent",
              borderRadius: "999px",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {pillLabel}
          </motion.span>
          <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Centered title */}
      <h2 className="section-header max-md:text-center text-center py-6">Register to Access</h2>

      {/* Form */}
      <BookingForm audience="patient" />
    </section>
  );
}


