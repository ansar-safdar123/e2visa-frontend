'use client';

import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-3xl gap-2">
      <div className="relative flex-grow">
        
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full p-5 bg-white/10 backdrop-blur-md text-[background: #FFFFFF;
] rounded-full pl-14 pr-4 outline-none focus:ring-2 font-[300] focus:ring-white/30"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70">

         <Image
              src="/images/HeroSection/Search.png"
              alt="E2Visa Logo"
              width={23.7}
              height={24}
              className="cursor-pointer"
              />
              </div>
        
      </div>
      <div className="bg-white rounded-full w-[63px] h-[63px] flex items-center justify-center">
      <Image
              src="/images/HeroSection/filter.png"
              alt="E2Visa Logo"
              width={21}
              height={24}
              className="cursor-pointer"
            />
      </div>
      <Button variant="primary" size="lg" type="submit">
        Search Now
      </Button>
    </form>
  );
};

export default SearchBar; 