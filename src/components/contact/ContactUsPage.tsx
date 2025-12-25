'use client';

import React from 'react';
import ContactFormSection from '@/components/contact/ContactFormSection';
import MapSection from './MapSection';


const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-[#FCFCFC]">      
      <ContactFormSection />

      {/* <CentersSection /> */}

      <MapSection />
    </div>
  );
};

export default ContactUsPage; 