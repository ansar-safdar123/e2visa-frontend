'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Image from 'next/image';

const ProfileSetting = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (user) {
      // Split the name into first and last name
      const [firstName = '', lastName = ''] = (user.name || '').split(' ');
      
      setFormData({
        firstName,
        lastName,
        email: user.email || '',
        phone: user.phone || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white rounded-xl py-4 px-3 lg:px-6">
      <h2 className="text-2xl lg:text-4xl text-[#40433F] font-semibold mb-6">Profile Setting</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Image
              src="/images/profile/userblack.png"
              alt="User icon"
              width={23}
              height={20}
            />
          </div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder=" "
            className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-xl border text-[#9E9E9E] font-medium text-lg border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <label 
            htmlFor="firstName" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            First Name
          </label>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Image
              src="/images/profile/userblack.png"
              alt="User icon"
              width={23}
              height={20}
            />
          </div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder=" "
            className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-xl border text-[#9E9E9E] font-medium text-lg border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <label 
            htmlFor="lastName" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            Last Name
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
            onChange={handleChange}
            placeholder=" "
            className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-xl border text-[#9E9E9E] font-medium text-lg border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <label 
            htmlFor="email" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Image
              src="/images/profile/mobile.png"
              alt="Phone icon"
              width={23}
              height={20}
            />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder=" "
            className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-xl border text-[#9E9E9E] font-medium text-lg border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <label 
            htmlFor="phone" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            Phone no
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0A3161] max-w-[540px] text-white py-4 rounded-xl hover:bg-[#0d294c] transition-colors text-lg font-medium"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileSetting; 