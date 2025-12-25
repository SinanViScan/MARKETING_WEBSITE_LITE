import React from 'react';
import HeroSection from './HeroSection';
import OpenPositionsSection from './OpenPositionsSection';
import RadiologistSpecialSection from './RadiologistSpecialSection';
import WhyWorkWithUsSection from './WhyWorkWithUsSection';
import CTASection from './CTASection';

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <HeroSection />
      <OpenPositionsSection />
      <RadiologistSpecialSection />
      <WhyWorkWithUsSection />
      <CTASection />
    </div>
  );
};

export default CareerPage;