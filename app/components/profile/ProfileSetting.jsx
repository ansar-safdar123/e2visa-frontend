'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Image from 'next/image';
import { toast } from 'react-toastify';

const ProfileSetting = () => {
  const { user } = useAuth();
  console.log("user from profile",user)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    about: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let localUser = null;
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('userData');
      if (stored) {
        try {
          localUser = JSON.parse(stored);
        } catch {}
      }
    }
    if (localUser) {
      setFormData({
        fullName: localUser.name || '',
        email: localUser.email || '',
        phone: localUser.phone || localUser.user_information?.phone_number || '',
        about: localUser.about || ''
      });
    } else if (user) {
      setFormData({
        fullName: user.name || '',
        email: user.email || '',
        phone: user.phone || user.user_information?.phone_number || '',
        about: user.about || ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate required fields
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.about.trim()) newErrors.about = 'About is required.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    const form = new FormData();
    form.append('name', formData.fullName);
    form.append('phone_number', formData.phone);
    form.append('about', formData.about);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/user/profile', {
        method: 'POST',
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: form,
      });
      const data = await res.json();
      if (res.ok && data.result && data.result.user) {
        // Save user data to localStorage
        localStorage.setItem('userData', JSON.stringify({
          ...data.result.user,
          phone: data.result.user.user_information?.phone_number || '',
          about: data.result.user.about || ''
        }));
        toast.success(data.message, { position: 'top-right' });
        // Optionally, update the form with the new data
        setFormData({
          fullName: data.result.user.name || '',
          email: data.result.user.email || '',
          phone: data.result.user.user_information?.phone_number || '',
          about: data.result.user.about || ''
        });
      } else {
        toast.error(data.message || 'Failed to update profile.', { position: 'top-right' });
      }
    } catch (err) {
      toast.error('Failed to update profile.', { position: 'top-right' });
    }
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
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder=" "
            className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-xl border text-[#9E9E9E] font-medium text-lg border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <label 
            htmlFor="fullName" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          {errors.fullName && <div className="text-red-500 text-xs mt-1">{errors.fullName}</div>}
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
            readOnly
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
            Phone no <span className="text-red-500">*</span>
          </label>
          {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
        </div>

        {/* About Textarea */}
        <div className="relative">
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About you..."
            className="w-full max-w-[540px] pr-4 pl-4 py-4 rounded-xl border text-[#9E9E9E] font-medium text-lg border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none bg-white min-h-[100px]"
          />
          <label 
            htmlFor="about" 
            className="absolute text-sm text-[#1E1E1E] left-4 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            About <span className="text-red-500">*</span>
          </label>
          {errors.about && <div className="text-red-500 text-xs mt-1">{errors.about}</div>}
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