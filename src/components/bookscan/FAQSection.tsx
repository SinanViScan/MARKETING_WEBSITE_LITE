"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQSection = ({pageNumber="03", margin=true}:{pageNumber?:string, margin?:boolean}) => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const faqs = [
    {
      question: "What are dental diagnostics services?",
      answer:
        "Dental diagnostics services provide essential assessments to identify oral health issues. These services include comprehensive examinations, X-rays, and advanced imaging techniques to ensure accurate diagnosis and effective treatment planning. Regular check-ups help in early detection of problems, allowing for timely interventions and better overall dental health.",
    },
    {
      question: "How often should I schedule dental diagnostic appointments?",
      answer:
        "It is recommended to schedule dental diagnostic appointments at least once every 6 months for routine check-ups. However, the frequency may vary based on individual oral health conditions, age, and risk factors. Your dentist will provide personalized recommendations based on your specific needs.",
    },
    {
      question: "What methods can I use to enhance my dental diagnostics?",
      answer:
        "To enhance dental diagnostics, maintain good oral hygiene practices including regular brushing and flossing, schedule routine check-ups, follow a balanced diet, avoid tobacco products, and inform your dentist about any changes in your oral health or medical conditions.",
    },
    {
      question: "What is the importance of dental imaging in diagnostics?",
      answer:
        "Dental imaging plays a crucial role in diagnostics by providing detailed visual information about teeth, bones, and soft tissues that are not visible during a regular examination. It helps in early detection of cavities, gum disease, bone loss, and other oral health issues, enabling more accurate diagnosis and treatment planning.",
    },
    {
      question:
        "How do I select the best dental diagnostic services for my needs?",
      answer:
        "To select the best dental diagnostic services, consider factors such as the facility's reputation, qualifications of the dental professionals, available technology and equipment, location and accessibility, cost and insurance coverage, and patient reviews and testimonials.",
    },
  ];

  return (
    <section className="py-8 sm:py-14  ">
      <div className={`${margin ? "responsive-margin" : ""}`}>
        {/* Top Section: Common Questions pill, section number, divider, heading, and description */}
        {/* Header Section with two columns */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-4 py-1 sm:py-1.5 rounded-full text-gray-700 text-xs sm:text-sm font-medium relative"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(89.91deg, #D0D4DD 0.89%, #FFFFFF 99.91%) border-box",
                border: "1px solid transparent",
                borderRadius: "999px",
              }}
            >
              Common Questions
            </span>
            <span className="text-xs text-gray-500 font-medium">({pageNumber})</span>
          </div>
          <hr className="border-gray-200 mb-8" />
          <div className={`${margin ? "grid xl:grid-cols-2 gap-8 items-start max-sm:items-center" : "grid xl:grid-cols-1 gap-8 items-start max-sm:items-center"}`}>
            <div>
              <h2 className="section-header text-center xl:text-left">
                Your{" "}
                <span
                  className="text-transparent font-medium"
                  style={{
                    background:
                      "linear-gradient(246.94deg, #EBB5F3 -28.81%, #FEF2F2 25.55%, #FEE2E1 37.61%, #C59BC7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Questions
                </span>{" "}
                are
                <br /> Answered
              </h2>
            </div>
            {/* Right column now shows the FAQs (was subheader before) */}
            <div className="flex xl:justify-end justify-center w-full">
              <div className="w-full ">
                <div className="bg-transparent rounded-3xl sm:p-0 animate-fade-in-up">
                  {faqs.map((faq, index) => {
                    const hideTopBorder = openFaq === index || index === openFaq + 1;
                    const containerClass = `${index !== 0 && !hideTopBorder ? "border-t border-gray-200 pt-6" : "pt-6"} pb-6`;
                    return (
                    <div
                      key={index}
                      className={containerClass}
                    >
                      <div className={`${openFaq === index ? "bg-[#F9FAFB] rounded-2xl px-4 py-6" : "px-4"}`}>
                        <button
                          onClick={() => toggleFaq(index)}
                          className="flex items-center justify-between w-full text-left hover-scale"
                        >
                          <h3 className="text-sm sm:text-base font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <div
                            className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
                              openFaq === index ? 'rotate-180' : 'rotate-0'
                            }`}
                          >
                            {openFaq === index ? (
                              <Minus className="w-5 h-5 text-gray-600" />
                            ) : (
                              <Plus className="w-5 h-5 text-gray-600" />
                            )}
                          </div>
                        </button>
                        <p
                          className={`mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed overflow-hidden accordion-content ${
                            openFaq === index ? 'open' : ''
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )})}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ list has been moved into header grid right column */}
      </div>
    </section>
  );
};

export default FAQSection;
