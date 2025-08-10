"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import LoadingSpinner from "@/app/components/common/LoadingSpinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + " custom-slick-arrow custom-slick-next"}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2EC4B6",
        borderRadius: "50%",
        width: 35,
        height: 35,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        border: "none",
        zIndex: 20,
        right: -22,
        transition: "background 0.2s, box-shadow 0.2s",
      }}
      onClick={onClick}
      aria-label="Next"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + " custom-slick-arrow custom-slick-prev"}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2EC4B6",
        borderRadius: "50%",
        width: 35,
        height: 35,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        border: "none",
        zIndex: 20,
        left: -22,
        transition: "background 0.2s, box-shadow 0.2s",
      }}
      onClick={onClick}
      aria-label="Previous"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
    </button>
  );
}

export default function ListingsTabs() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      setLoading(true);
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/new-business-listings');
        const data = await res.json();
        if (res.ok && data.result) {
          setListings(data.result);
          console.log("data.result", data.result)
        } else {
          setListings([]);
        }
      } catch {
        setListings([]);
      } finally {
        setLoading(false);
      }
    }
    fetchListings();
  }, []);

  // const settings = {
  //   dots: false,
  //   infinite: false, // <-- Make it never loop
  //   speed: 500,
  //   slidesToShow: Math.min(4, listings.length),
  //   slidesToScroll: 1,

  //   arrows: true,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   responsive: [
  //     { breakpoint: 1024, settings: { slidesToShow: Math.min(3, listings.length), slidesToScroll: 1, infinite: false } },
  //     { breakpoint: 768, settings: { slidesToShow: Math.min(2, listings.length), slidesToScroll: 1, arrows: true, infinite: false } },
  //     { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: true, infinite: false } }
  //   ]
  // };

  const settings = {
    dots: false,
    infinite: false, // Only infinite if enough items
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(3, listings.length),
          slidesToScroll: 1,
          infinite: listings.length > 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, listings.length),
          slidesToScroll: 1,
          infinite: listings.length > 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: listings.length > 2,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: listings.length > 1,
          arrows: true
        }
      }
    ]
  };
  const fallbackSvg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
      <circle cx='32' cy='20' r='12' fill='#ccc'/>
      <path d='M16 54c0-8.837 7.163-16 16-16s16 7.163 16 16' fill='#666'/>
    </svg>
  `);

  // Check if mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#40433F] py-[52px] text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center xl:text-3xl text-2xl text-white font-bold mb-20">New Listings</h1>
        <div className="w-full relative">
          <style jsx>{`
            :global(.slick-prev),
            :global(.slick-next) {
              z-index: 10;
              width: 35px;
              height: 35px;
            }
            :global(.slick-prev:before),
            :global(.slick-next:before) {
              display: none !important;
            }
            :global(.slick-slide > div) {
              padding: 0 8px;
            }
            :global(.slick-list) {
              margin: 0 -8px;
            }
            :global(.custom-slick-arrow) {
              opacity: 1 !important;
              background: #2EC4B6 !important;
              color: #fff !important;
              border: none !important;
              border-radius: 50% !important;
              width: 35px !important;
              height: 35px !important;
              display: flex !important;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 8px rgba(0,0,0,0.12);
              transition: all 0.2s ease;
            }
            :global(.custom-slick-arrow) {

              box-shadow: 0 2px 8px rgba(0,0,0,0.12);
            }
            :global(.custom-slick-next) {
              right: -15px !important;
            }
            :global(.custom-slick-prev) {
              left: -15px !important;
            }
            @media (max-width: 768px) {
              :global(.slick-slide > div) {
                padding: 0 4px;
              }
              :global(.slick-list) {
                margin: 0 -4px;
              }
              :global(.custom-slick-arrow) {
                width: 30px !important;
                height: 30px !important;
              }
              :global(.custom-slick-next) {
                right: -5px !important;
              }
              :global(.custom-slick-prev) {
                left: -5px !important;
              }
            }
          `}</style>
          {loading ? (
            <LoadingSpinner />
          ) : listings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10">
              <h2 className="text-3xl font-bold mb-2">Oops!</h2>
              <p className="text-lg">No Listings Found</p>
            </div>
          ) : !isMobile && listings.length < 4 ? (
            <div className="flex flex-wrap justify-center gap-4">
              {listings.map((listing, index) => (
                <div key={listing.id} className="w-full max-w-[280px] flex-shrink-0">
                  <Link href={`/buy-business/${listing.id}`}>
                    <div className="relative bg-white rounded-xl p-4 h-full transition-all hover:shadow-lg">
                      {listing.is_featured === "Yes" && (
                        <div className="absolute top-3 right-0 rounded-l-full bg-[#2EC4B6] z-30 text-white text-xs px-3 py-1">
                          Featured
                        </div>
                      )}
                      <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                        <Image
                          fill
                          src={
                            listing.business_images?.[0]?.image_path
                              ? `${process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL}/${listing.business_images[0].image_path}`
                              : `data:image/svg+xml;utf8,${fallbackSvg}`
                          }
                          alt={listing.business_name || "Business Image"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4">

                        <h2 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 h-12">

                          {listing.business_name.length > 50 ? listing.business_name.slice(0, 50) + '...' : listing.business_name}

                        </h2>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-gray-600 truncate max-w-[60%]">
                            {listing.listing_type}
                          </p>
                          <p className="text-sm font-medium text-gray-900">${parseInt(listing.asking_price,10)}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <Slider {...settings}>
              {listings.map((listing, index) => (
                <div key={listing.id} className="px-1">
                  <Link href={`/buy-business/${listing.id}`}>
                    <div className="relative  bg-white rounded-xl p-4 h-full transition-all hover:shadow-lg">
                      {listing.is_featured === "Yes" && (
                        <div className="absolute top-3 right-0 rounded-l-full bg-[#2EC4B6] z-30 text-white text-xs px-3 py-1">
                          Featured
                        </div>
                      )}
                      <div className="relative w-full h-full min-h-[180px] rounded-lg ">
                        <Image
                          fill
                          src={
                            listing.business_images?.[0]?.image_path
                              ? `${process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL}/${listing.business_images[0].image_path}`
                              : `data:image/svg+xml;utf8,${fallbackSvg}`
                          }
                          alt={listing.business_name || "Business Image"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <h2 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 h-12">
                          {listing.business_name.length > 50 ? listing.business_name.slice(0, 50) + '...' : listing.business_name}
                        </h2>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-gray-600 truncate max-w-[60%]">
                            {listing.listing_type}
                          </p>
                          <p className="text-sm font-medium text-gray-900">${parseInt(listing.asking_price,10)}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}
