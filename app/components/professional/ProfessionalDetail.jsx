"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import BusinessContactForm from '../../buy-business/[id]/BusinessContactForm';

const ProfessionalDetail = ({ professional }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const formatAboutText = (text) => {
    return text?.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0 text-[#1E1E1E] leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  if (!professional) {
    return <div>Professional not found</div>;
  }

  return (
    <div className="container mx-auto text-[#40433F] px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Professional Details */}
        <div className="lg:w-1/2">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Profile Image */}
            <div className="w-full sm:w-48 sm:h-48 h-72 flex-shrink-0">
              <img
                src={professional.image ? `${process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL}/${professional.image}` : '/images/professionals/image.png'}
                alt={professional.name}
                className="w-full h-full object-cover object-top rounded-lg"
              />
            </div>
            {/* Title and Contact Info */}
            <div className="flex-grow">
              <h1 className="text-[32px] font-bold text-[#40433F] mb-4">{professional.title}</h1>
              <div className="space-y-2">
                <p className="flex items-center text-[#40433F]">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {professional.user_information.phone_number}
                </p>
                <p className="flex items-center text-[#40433F]">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {professional.email}
                </p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-8">
            <h2 className="text-base font-medium  mb-4 border-b text-[#40433F] border-black pb-1 w-fit ">About</h2>
            <div className="space-y-4 text-[#40433F]">
              {formatAboutText(professional.about)}
            </div>
          </div>

        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:w-1/2">
          <BusinessContactForm business={professional} />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail; 