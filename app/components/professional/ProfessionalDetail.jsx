"use client";

import React, { useState } from 'react';
import Image from 'next/image';

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
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0 text-[#1E1E1E] leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  if (!professional) {
    return <div>Professional not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Professional Details */}
        <div className="lg:w-1/2">
          <div className="flex gap-6">
            {/* Profile Image */}
            <div className="w-48 h-48 flex-shrink-0">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Title and Contact Info */}
            <div className="flex-grow">
              <h1 className="text-[32px] font-bold text-gray-900 mb-4">{professional.title}</h1>
              <div className="space-y-2">
                <p className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {professional.phone}
                </p>
                <p className="flex items-center text-gray-700">
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
            <h2 className="text-base font-medium  mb-4 border-b border-black pb-1 w-fit ">About</h2>
            <div className="space-y-4">
              {formatAboutText(professional.about)}
            </div>
          </div>

        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:w-1/2">
          <div className="bg-[#A4B5D53D] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#40433F] mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Image
                    src="/images/auth/signin/user.png"
                    alt="User icon"
                    width={23}
                    height={20}
                  />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-base border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="fullName"
                  className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F8F9FA] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Image
                    src="/images/auth/signin/phone.png"
                    alt="Phone icon"
                    width={23}
                    height={20}
                  />
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone no."
                  className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium  text-base border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="phoneNumber"
                  className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F8F9FA] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Image
                    src="/images/auth/signin/mail.png"
                    alt="Email icon"
                    width={23}
                    height={20}
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter you email"
                  className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-base border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F8F9FA] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Write your message here"
                  className="w-full px-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-base border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F8F9FA] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Message
                </label>
              </div>



              <button
                type="submit"
                className="w-full bg-[#0A3161] text-white py-4 rounded-lg hover:bg-[#102742] transition-colors font-medium text-lg"
              >
                Send Message
              </button>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail; 