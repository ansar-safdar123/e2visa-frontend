'use client';

import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = ({ activeTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigation logic based on activeTab
    let path = '/';
    if (activeTab === 'business') path = '/buy-business';
    else if (activeTab === 'estate') path = '/real-estate';
    else if (activeTab === 'professional') path = '/professionals';
    router.push(path);
  };

  return (
    <form onSubmit={handleSearch} className="flex md:flex-row flex-col w-full max-w-3xl gap-2">
      <div className="relative flex-grow">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search city, country or state"
            className="w-full py-2 xl:py-4 bg-white/10 backdrop-blur-md text-[#FFFFFF] rounded-lg pl-12 xl:pl-14 pr-44 xl:pr-[200px] outline-none focus:ring-2 font-[300] focus:ring-white/30"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute xl:left-5 left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70">
            <Image
              src="/images/HeroSection/Search.png"
              alt="Search"
              width={23.7}
              height={24}
              className="cursor-pointer"
            />
          </div>
          
          {/* Industries dropdown positioned inside the search input */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="relative">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="appearance-none bg-transparent text-[#FFFFFF] pr-8 pl-3 py-2 outline-none font-[300] cursor-pointer  [&>option]:px-3 rounded-md"
              >
                <option value="All Industries" className='text-black px-3'>All Industries</option>
                <option value="Technology" className=' text-black px-3'>Technology</option>
                <option value="Healthcare" className=' text-black px-3'>Healthcare</option>
                <option value="Finance" className=' text-black px-3'>Finance</option>
                <option value="Manufacturing" className=' text-black px-3'>Manufacturing</option>
                <option value="Retail" className=' text-black px-3'>Retail</option>
              </select>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="px-[15px] mt-2 md:mt-0 xl:px-[33.63px] xl:text-base text-xs xl:py-4 py-2 rounded-lg text-[#1B263B] bg-white hover:bg-gray-100 "
      >
        Search Now
      </button>
    </form>
  );
};

export default SearchBar; 