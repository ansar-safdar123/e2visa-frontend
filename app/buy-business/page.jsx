'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useSearchParams } from 'next/navigation';
import FeaturedListings from '../components/home/FeaturedListings';

function BuyBusiness() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category_id') || '';
  const initialCountry = searchParams.get('country') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [categories, setCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedListingType, setSelectedListingType] = useState('All Listings');
  const [countries, setCountries] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredListings, setFeaturedListings] = useState([]);
  const [featuredLoading, setFeaturedLoading] = useState(true);
  const BACKEND_STORAGE_URL = process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(businesses.length / itemsPerPage);
  const paginatedBusinesses = businesses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const [featuredCurrentPage, setFeaturedCurrentPage] = useState(1);
  const featuredItemsPerPage = 4;
  const featuredTotalPages = Math.ceil(featuredListings.length / featuredItemsPerPage);
  const paginatedFeaturedListings = featuredListings.slice((featuredCurrentPage - 1) * featuredItemsPerPage, featuredCurrentPage * featuredItemsPerPage);

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

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/countries/list');
        const data = await res.json();
        if (res.ok && data.result) {
          setCountries(data.result);
        }
      } catch (err) {
        setCountries([]);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchBusinesses = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCountry) params.append('country', selectedCountry);
        if (selectedCategory) params.append('category_id', selectedCategory);
        if (selectedSubCategory) params.append('sub_category_id', selectedSubCategory);
        params.append('search_type', 'business');
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/business/find-business?${params.toString()}`);
        const data = await res.json();
        if (res.ok && data.result) {
          setBusinesses(data.result);
        } else {
          setBusinesses([]);
        }
      } catch {
        setBusinesses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBusinesses();
  }, [selectedCountry, selectedCategory, selectedSubCategory]);

  useEffect(() => {
    const fetchFeaturedListings = async () => {
      setFeaturedLoading(true);
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/featured_listing?search_type=business`, {
          method: 'POST',
          headers: {
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
          },
        });
        const data = await res.json();
        if (res.ok && data.result) {
          setFeaturedListings(data.result);
        } else {
          setFeaturedListings([]);
        }
      } catch {
        setFeaturedListings([]);
      } finally {
        setFeaturedLoading(false);
      }
    };
    fetchFeaturedListings();
  }, []);

  const columnCount = Math.min(businesses.length, 4);
  const gridColsClass = {
    1: "grid-cols-1",
    2: "sm:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "xl:grid-cols-4",
  }[columnCount];

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Build query params
      const params = new URLSearchParams();
      if (selectedCountry) params.append('country', selectedCountry);
      if (selectedCategory) params.append('category_id', selectedCategory);
      if (selectedSubCategory) params.append('sub_category_id', selectedSubCategory);
      params.append('search_type', 'business');

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/business/find-business?${params.toString()}`);
      const data = await res.json();
      if (res.ok && data.result) {
        setBusinesses(data.result);
      } else {
        setBusinesses([]);
      }
    } catch {
      setBusinesses([]);
    } finally {
      setLoading(false);
    }
  };
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
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#40433F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#40433F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            {/* <div className=" min-w-full sm:min-w-[222px] relative">
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
            </div> */}
            {/* Country Dropdown */}
            <div className=" min-w-full sm:min-w-[222px] relative">
              <label htmlFor="country-dropdown" className="block mb-2 text-sm font-medium text-[#40433F]">Country</label>
              <div className="relative">
                <select
                  id="country-dropdown"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 pr-10 py-3 border border-[#40433F] rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none bg-white appearance-none"
                >
                  <option value="">All Countries</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.name}>{country.name}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-[50%] -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#40433F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            {/* <div className=" min-w-full sm:min-w-[222px] relative">
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
            </div> */}
          </div>
          <div className="flex items-center justify-center w-full">

            <button
              className="bg-[#0A3161]  w-[167px] mt-10 text-white px-8 lg:py-5 py-3 rounded-lg hover:bg-[#102742] transition-colors whitespace-nowrap min-w-[150px]"
              onClick={handleSearch}
            >
              Search Now
            </button>
          </div>
        </div>

        {/* Show businesses before Featured Listing */}
        {loading ? (
          <LoadingSpinner />
        ) : businesses.length > 0 ? (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-[#40433F] text-center mt-16 mb-8">Business Listings</h1>
            <div className="listing-slider flex flex-wrap justify-center gap-4 mb-16">

              {paginatedBusinesses.map((business) => (
                <Link key={business.id} href={`/buy-business/${business.id}`}>
                  <div className="bg-[#1B263B1A] w-[280px] flex-shrink-0">
                    <div className="relative border rounded-lg border-[#40433F] w-full pt-[14px] pb-[19px] px-[18px]">
                      {business.verified && (
                        <div className="absolute top-7 right-8 bg-[#2EC4B6] z-30 text-white text-xs lg:text-sm px-2 py-1 rounded-full">
                          Verified
                        </div>
                      )}
                      <div className="relative w-full h-[197px]">
                        <Image
                          fill
                          src={
                            business.business_images && business.business_images.length > 0
                              ? `${BACKEND_STORAGE_URL}/${business.business_images[0].image_path}`
                              : '/images/listing/img1.png'
                          }
                          alt={business.business_name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-[15px] flex flex-col justify-between">
                        <h2 className="text-xs lg:text-sm leading-6 font-semibold mb-1">
                          {business.business_name.length > 50
                            ? business.business_name.slice(0, 50) + '...'
                            : business.business_name}
                        </h2>
                        {/* <p className="text-xs lg:text-sm mb-2">
                          {business.listing_type.length > 28
                            ? business.listing_type.slice(0, 28) + '...'
                            : business.listing_type}
                        </p> */}
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-gray-600 truncate max-w-[60%]">
                            {business.listing_type}
                          </p>
                          <p className="text-sm font-medium text-gray-900">${parseInt(business.asking_price, 10)}</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {/* </div> */}
            </div>
            {/* Pagination Controls */}
            {/* {totalPages > 1 && (
              <div className="flex  justify-center items-center gap-2 mb-8">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-[#40433F] text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )} */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-8">
                {/* Prev Button */}
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                  Prev
                </button>

                {/* First Page */}
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-[#40433F] text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                >
                  1
                </button>

                {/* Middle Section */}
                {currentPage > 3 && <span key="dots-start">...</span>}

                {/* Show current page in middle if it's not 1 or last */}
                {currentPage !== 1 && currentPage !== totalPages && (
                  <button
                    key={currentPage}
                    onClick={() => setCurrentPage(currentPage)}
                    className="px-3 py-1 rounded bg-[#40433F] text-white"
                  >
                    {currentPage}
                  </button>
                )}

                {currentPage < totalPages - 2 && <span key="dots-end">...</span>}

                {/* Last Page */}
                {totalPages !== 1 && (
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-[#40433F] text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    {totalPages}
                  </button>
                )}

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}


          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <h2 className="text-3xl font-bold text-[#0A3161] mb-2">Oops!</h2>
            <p className="text-lg text-gray-700">No Businesses Found</p>
          </div>
        )}
        <h1 className="text-2xl md:text-3xl xl:mb-16 font-bold text-[#40433F] text-center  mt-16 mb-12">Featured Listing</h1>


        <FeaturedListings
          listings={featuredListings}
          loading={featuredLoading}
          title="Featured Listing"
        />
      </div>


    </div>
  );
};

export default function BuyBusinessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuyBusiness />
    </Suspense>
  )
} 