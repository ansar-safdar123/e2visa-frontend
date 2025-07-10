'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BuyBusiness = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedListingType, setSelectedListingType] = useState('All Listings');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/categories');
        const data = await res.json();
        if (res.ok && data.result) {
          setCategories(data.result);
        } else {
          setCategories([]);
        }
      } catch {
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) {
      setSubCategories([]);
      setSelectedSubCategory('');
      return;
    }
    const fetchSubCategories = async () => {
      try {
        const formData = new FormData();
        formData.append('category_id', selectedCategory);
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/sub-categories', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        if (res.ok && data.result) {
          setSubCategories(data.result);
        } else {
          setSubCategories([]);
        }
      } catch {
        setSubCategories([]);
      }
    };
    fetchSubCategories();
  }, [selectedCategory]);

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching with:', {
      searchQuery,
      selectedCategory,
      selectedSubCategory,
      selectedLocation,
      selectedListingType
    });
  };
  const newListing = [
    {
      id: 4,
      title: "Test Shop Main Street Business",
      image: "/images/listing/img4.png",
      status: "Leased",
      verified: false,
      rating: 5,
    },
    {
      id: 3,
      title: "Test Shop Main Street Business",
      image: "/images/listing/img3.png",
      status: "Leased",
      verified: true,
      rating: 5,
    },
    {
      id: 2,
      title: "Test Shop Main Street Business",
      image: "/images/listing/img2.png",
      status: "Leased",
      verified: true,
      rating: 5,
    },
    {
      id: 1,
      title: "Test Shop Main Street Business",
      image: "/images/listing/img1.png",
      status: "Leased",
      verified: true,
      rating: 5,
    },
  ];
  return (
    <div className="">
      {/* Hero Section with Background Image */}
      <div className="relative h-[300px] ">
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/images/findABusiness/bg.png"
            alt="Listings Header"
            fill
            className="object-cover"
          />
        </div>
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/50 z-[5]"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find a Business</h1>
          <div className="flex items-center text-white text-lg">
            <Link href="/" className="hover:text-[#2EC4B6]">Home</Link>
            <span className="mx-2">/</span>
            <span>Listings</span>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container text-xs text-[#40433F] lg:text-sm mx-auto px-4 mt-8">
        <div className="">
          {/* Search Bar */}
          {/* <div className="flex items-center gap-4 justify-center mb-10">
            <div className="flex items-center justify-center flex-wrap gap-4">
            <div className="relative min-w-[300px] lg:min-w-[556px]">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 lg:py-5 py-3 bg-[#1B263B14] rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <div className="absolute inset-y-0 left-3 flex items-center">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center border border-[#40433F] rounded-lg justify-center lg:w-16 w-12 lg:h-16 h-12">
              <Image src="/images/findABusiness/Vector.png" alt="filter" width={20} height={20} />
            </div>
            <button
              className="bg-[#0A3161] w-[197px] text-white px-8 lg:py-5 py-3 rounded-lg hover:bg-[#102742] transition-colors whitespace-nowrap min-w-[150px]"
            >
              Search Now
            </button>
            </div>
          </div> */}

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 ">
            <div className=" min-w-full sm:min-w-[222px] relative">
              <label htmlFor="category-dropdown" className="block mb-2 text-sm font-medium text-[#40433F]">Category</label>
              <div className="relative">
                <select
                  id="category-dropdown"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubCategory('');
                  }}
                  className="w-full px-4 pr-10 py-3 border border-[#40433F] rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none bg-white appearance-none"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-[50%] -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#40433F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className=" min-w-full sm:min-w-[222px] relative">
              <label htmlFor="subcategory-dropdown" className="block mb-2 text-sm font-medium text-[#40433F]">Sub Category</label>
              <div className="relative">
                <select
                  id="subcategory-dropdown"
                  value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                  className="w-full px-4 pr-10 py-3 border border-[#40433F] rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none bg-white appearance-none"
                >
                  <option value="">Sub Category</option>
                  {subCategories.map((sub) => (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-[50%] -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#40433F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className=" min-w-full sm:min-w-[222px] relative">
              <label htmlFor="location-dropdown" className="block mb-2 text-sm font-medium text-[#40433F]">Business Type</label>
              <div className="relative">
                <select
                  id="location-dropdown"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 pr-10 py-3 border border-[#40433F] rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none bg-white appearance-none"
                >
                  <option>All Business Type</option>
                  <option>For Sale</option>
                  <option>For Lease</option>
                  <option>For Rent</option>
                </select>
                <div className="absolute right-4 top-[50%] -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#40433F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className=" min-w-full sm:min-w-[222px] relative">
              <label htmlFor="listing-type-dropdown" className="block mb-2 text-sm font-medium text-[#40433F]">Listing Type</label>
              <div className="relative">
                <select
                  id="listing-type-dropdown"
                  value={selectedListingType}
                  onChange={(e) => setSelectedListingType(e.target.value)}
                  className="w-full px-4 pr-10 py-3 border border-[#40433F] rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none bg-white appearance-none"
                >
                  <option>All Listings</option>
                  <option>Featured</option>
                  <option>New</option>
                  <option>Popular</option>
                </select>
                <div className="absolute right-4 top-[50%] -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#40433F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">

          <button
              className="bg-[#0A3161] w-[197px] mt-10 text-white px-8 lg:py-5 py-3 rounded-lg hover:bg-[#102742] transition-colors whitespace-nowrap min-w-[150px]"
              >
              Search Now
            </button>
              </div>
        </div>

        <h1 className="text-2xl md:text-3xl xl:mb-16 font-bold text-[#40433F] text-center lg:mt-40 mt-16 mb-12">Featured Listing</h1>


        <div className="listing-slider flex flex-wrap justify-center gap-4 mb-16">
          {newListing.map((listing) => (
            <div key={listing.id} className="bg-[#1B263B1A] w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] min-w-[280px] max-w-[350px]">
              <div className="relative border rounded-lg border-[#40433F] w-full pt-[14px] pb-[19px] px-[18px]">
                {listing.verified && (
                  <div className="absolute top-7 right-8 bg-[#2EC4B6] z-30 text-white text-xs lg:text-sm px-2 py-1 rounded-full">
                    Verified
                  </div>
                )}
                <div className="relative w-full h-[197px]">
                  <Image
                    fill
                    src={listing.image}
                    alt="Listing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-[15px]">
                  <h2 className="text-xs lg:text-sm leading-6 font-semibold mb-1">
                    {listing.title}
                  </h2>
                  <div className="flex items-center justify-between">
                    <p className="text-xs lg:text-sm mb-2">{listing.status}</p>
                    <div className="flex gap-1">
                      {[...Array(listing.rating)].map((_, index) => (
                        <div className="w-[12.84px] h-[12.27px] relative" key={index}>
                          <Image
                            src="/images/listing/star.png"
                            fill
                            alt="rating star"
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default BuyBusiness; 