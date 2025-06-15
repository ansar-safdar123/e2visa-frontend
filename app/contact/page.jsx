'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

  return (
    <div className="">
      

      {/* Contact Section */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Left Side - Contact Information */}
          <div className="p-8 flex flex-col items-center justify-center !text-white bg-[url('/images/auth/signin/signinImg.png')] bg-cover bg-center relative ">
            <div className="absolute inset-0 bg-[#1B263B99] z-0" />
            <div className="relative w-[430px]  z-10 p-8">
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
            <p className=" mb-8">Start a journey with us today!</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="">941.518.7138</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center  rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="">info@e2visa.com</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center  rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="">9040 Town Center Parkway, Lakewood Ranch, FL 34202</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="https://facebook.com" className="w-10 h-10 flex items-center justify-center  rounded-full text-white hover:bg-opacity-90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" className="w-10 h-10 flex items-center justify-center  rounded-full text-white hover:bg-opacity-90 transition-colors">
                
              <Image
                      src="/images/Contact/Vector.png"
                      alt="E2Visa Logo"
                      width={24}
                      height={24}
                      className="h-5 w-5" 
                    />
              </Link>
            </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-[540px]">
                
            <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
            <form className="space-y-6">
             {/* Full Name Input */}
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
                onChange={handleChange}
                placeholder="Enter your name"
                className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="fullName"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Full Name
              </label>
            </div>

            {/* Email Input */}
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
                onChange={handleChange}
                placeholder="Enter your email"
                className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Email
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
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="subject"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Subject
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
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="message"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0A3161] text-white !mt-14 py-4 2xl:py-5 rounded-lg hover:bg-bg-[#102742] transition-colors font-semibold text-sm md:text-base"
            lassName="w-full  text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 