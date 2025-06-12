'use client';

import { useState } from 'react';
import Image from 'next/image';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change here
    console.log('Password change submitted:', formData);
  };

  return (
    <div className="bg-white rounded-xl px-3 lg:px-6">
      <h2 className="text-2xl lg:text-4xl text-[#40433F] font-semibold mb-6">Change Password</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative w-full max-w-[540px]">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Image
              src="/images/auth/signin/lock.png"
              alt="Password icon"
              width={23}
              height={20}
            />
          </div>
          <input
            type={showPasswords.currentPassword ? "text" : "password"}
            id="currentPassword"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            placeholder=""
            className="pl-12 w-full max-w-[540px] pr-12 py-4 rounded-xl border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility('currentPassword')}
            className="absolute inset-y-0 right-4 flex items-center"
          >
            <Image
              src={showPasswords.currentPassword ? "/images/profile/hide.png" : "/images/profile/hide.png"}
              alt="Toggle password visibility"
              width={24}
              height={24}
            />
          </button>
          <label 
            htmlFor="currentPassword" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            Current Password
          </label>
        </div>

        <div className="relative w-full max-w-[540px]">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Image
              src="/images/auth/signin/lock.png"
              alt="Password icon"
              width={23}
              height={20}
            />
          </div>
          <input
            type={showPasswords.newPassword ? "text" : "password"}
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder=""
            className="pl-12 w-full pr-12 py-4 rounded-xl border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility('newPassword')}
            className="absolute inset-y-0 right-4 flex items-center"
          >
            <Image
              src={showPasswords.newPassword ? "/images/profile/hide.png" : "/images/profile/hide.png"}
              alt="Toggle password visibility"
              width={24}
              height={24}
            />
          </button>
          <label 
            htmlFor="newPassword" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            New Password
          </label>
        </div>

        <div className="relative w-full max-w-[540px]">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Image
              src="/images/auth/signin/lock.png"
              alt="Password icon"
              width={23}
              height={20}
            />
          </div>
          <input
            type={showPasswords.confirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder=""
            className="pl-12 w-full max-w-[540px] pr-12 py-4 rounded-xl border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility('confirmPassword')}
            className="absolute inset-y-0 right-4 flex items-center"
          >
            <Image
              src={showPasswords.confirmPassword ? "/images/profile/hide.png" : "/images/profile/hide.png"}
              alt="Toggle password visibility"
              width={24}
              height={24}
            />
          </button>
          <label 
            htmlFor="confirmPassword" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            Confirm New Password
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0A3161] max-w-[540px] text-white py-4 rounded-xl hover:bg-[#0d294c] transition-colors text-lg font-medium"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword; 