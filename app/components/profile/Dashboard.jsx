'use client';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    profileType: '',
    // other form fields...
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        if (storedUser?.role) {
          setFormData((prev) => ({ ...prev, profileType: storedUser.role }));
        }
      } catch (e) {
        console.error('Error accessing localStorage:', e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white rounded-xl px-3 py-4 text-[#40433F] lg:px-6">
      <h2 className="text-2xl lg:text-4xl text-[#40433F] font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 gap-6">
        {/* Profile Type Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <img
              src="/images/profile/userblack.png"
              alt="User icon"
              width={23}
              height={20}
            />
          </div>
          <input
            type="text"
            id="profileType"
            name="profileType"
            value={formData.profileType}
            onChange={handleChange}
            placeholder=""
            disabled
            className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-xl border text-[#9E9E9E] font-medium text-lg border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <label 
            htmlFor="profileType" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            Profile Type
          </label>
        </div>

        {/* Business Listings Input */}
        {/* <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <img
              src="/images/profile/listing.png"
              alt="Business icon"
              width={23}
              height={20}
            />
          </div>
          <input
            type="text"
            id="businessListings"
            name="businessListings"
            value={formData.businessListings}
            onChange={handleChange}
            placeholder=" "
            disabled
            className="pl-12 w-full max-w-[540px] pr-4 py-4 rounded-xl border text-[#9E9E9E] font-medium text-lg border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none peer bg-white"
          />
          <label 
            htmlFor="businessListings" 
            className="absolute text-sm text-[#1E1E1E] left-12 bg-white px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all z-10"
          >
            Business Listings
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard; 