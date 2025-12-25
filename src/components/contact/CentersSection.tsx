'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CentersSection = () => {
  const centers = [
    { name: 'Delhi', icon: '🏛️' },
    { name: 'Tamil Nadu', icon: '🏛️' },
    { name: 'Mumbai', icon: '🏛️' },
    { name: 'Hyderabad', icon: '🏛️' },
    { name: 'Karnataka', icon: '🏛️' },
    { name: 'Gujrat', icon: '🏛️' },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-6 py-3 mb-6">
            <span className="text-gray-900 font-medium">Our Centers</span>
            <span className="text-gray-600">(02)</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-normal text-gray-900 mb-4">
            Diagnostics Centers, <br />
            Closer To You
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Expanding Access to Advanced Dental Diagnostics Near You.
          </p>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-8">
          {centers.map((center, index) => (
            <motion.div
              key={center.name}
              className="bg-[#F2F4F7] rounded-2xl p-4 lg:p-6 text-center cursor-pointer hover:bg-[#E5E7EB] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-3 lg:mb-4 bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl">
                {center.icon}
              </div>
              <h3 className="text-sm lg:text-base font-medium text-gray-900">
                {center.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CentersSection; 