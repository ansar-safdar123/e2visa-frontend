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
    <div className="container mx-auto  px-4 py-8">
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
              <h1 className="text-[32px] font-bold  mb-4">{professional.name}</h1>
              <div className="space-y-2">
                {/* <p className="text-sm text-gray-500">
                  {professional.title}
                </p> */}
                <div className="flex items-center gap-2">

                <p className="flex items-center ">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {professional.role}
                </p>    
                <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                  {professional.badge_icon && process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL}/${professional.badge_icon}`}
                      alt={professional.name}
                      width={40}
                      height={40}
                      className="object-cover rounded-full w-full h-full"
                    />
                  ) : (
                    <span className="flex items-center justify-center w-full h-full">
                      <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                        <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                        <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                      </svg>
                    </span>
                  )}
                </div>
                </div>

                <p className="flex items-center ">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {professional.user_information.phone_number}
                </p>
                <p className="flex items-center ">
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
            <h2 className="text-base font-medium  mb-4 border-b  border-black pb-1 w-fit ">About</h2>
            <div className="space-y-4 ">
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