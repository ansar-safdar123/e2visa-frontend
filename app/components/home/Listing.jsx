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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(4, listings.length),
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: listings.length < 4, // Enable center mode when less than 4 items
    centerPadding: '0', // Remove any padding around centered items
    variableWidth: true, // Allow items to take their natural width
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: Math.min(3, listings.length), 
          slidesToScroll: 1, 
          infinite: false,
          centerMode: listings.length <= 3,
          variableWidth: true
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: Math.min(2, listings.length), 
          slidesToScroll: 1, 
          arrows: true, 
          infinite: false,
          centerMode: listings.length <= 2,
          variableWidth: true
        } 
      },
      { 
        breakpoint: 480, 
        settings: { 
          slidesToShow: 1, 
          slidesToScroll: 1, 
          arrows: true, 
          infinite: false,
          centerMode: true,
          variableWidth: false
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

  return (
    <div className="bg-[#40433F] py-[52px] text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center xl:text-3xl text-2xl text-white font-bold mb-20">New Listings</h1>
        <div className="listing-slider relative">
          <style jsx>{`
            :global(.slick-prev),
            :global(.slick-next) {
              z-index: 10;
              width: 30px;
              height: 30px;
            }
          
            :global(.slick-prev:before),
            :global(.slick-next:before) {
              display: none !important;
            }
            :global(.custom-slick-arrow) {
              opacity: 1 !important;
              background: #2EC4B6 !important;
              color: #fff !important;
              border: none !important;
              box-shadow: 0 2px 8px rgba(0,0,0,0.12);
              transition: background 0.2s, box-shadow 0.2s;
            }
            :global(.custom-slick-arrow:hover) {
              background: #0A3161 !important;
              box-shadow: 0 4px 16px rgba(0,0,0,0.18);
            }
            :global(.custom-slick-next) {
              right: -15px !important;
            }
            :global(.custom-slick-prev) {
              left: -15px !important;
            }
            
            /* Center align the slider track */
            :global(.slick-track) {
              display: flex;
              justify-content: center;
              margin: 0 auto;
              width: 100% !important;
            }
            
            /* Style for individual slides */
            :global(.slick-slide) {
              float: none;
              display: inline-block;
              vertical-align: top;
              height: 100%;
              padding: 0 8px;
            }
            
            @media (max-width: 640px) {
              :global(.slick-prev) {
                left: 0;
              }
              :global(.slick-next) {
                right: 0;
              }
              :global(.custom-slick-next) {
                right: 0 !important;
              }
              :global(.custom-slick-prev) {
                left: 0 !important;
              }
              
              :global(.slick-slide) {
                padding: 0 4px;
              }
            }
          `}</style>
          {loading ? (
            <LoadingSpinner />
          ) : listings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10">
              <h2 className="text-3xl font-bold text-[#0A3161] mb-2">Oops!</h2>
              <p className="text-lg text-gray-700">No Businesses Found</p>
            </div>
          ) :
            // listings.length > 4 ? (
            //   <Slider {...settings}>
            //     {listings.map((listing) => (
            //       <div key={listing.id}>
            //         <Link href={`/buy-business/${listing.id}`}>
            //           <div className="relative listing-card-border !rounded-xl pt-[14px] pb-[19px] px-[18px] cursor-pointer">
            //             {listing.is_featured === "Yes" && (
            //               <div className="absolute top-7 right-8 bg-[#2EC4B6] z-30 text-white text-xs lg:text-sm px-2 py-1 rounded-full">
            //                 Featured
            //               </div>
            //             )}
            //             <div className="relative w-full h-[197px]">
            //               <Image
            //                 fill
            //                 src={"/images/listing/img1.png"} // Replace with dynamic image if available
            //                 alt={listing.business_name}
            //                 className="w-full h-full object-cover"
            //               />
            //             </div>
            //             <div className="mt-[15px]">
            //               <h2 className="text-xs lg:text-sm leading-6 font-semibold mb-1">
            //                 {listing.business_name.length > 18
            //                   ? listing.business_name.slice(0, 18) + '...'
            //                   : listing.business_name}
            //               </h2>
            //               <div className="flex items-center justify-between">
            //                 <p className="text-xs lg:text-sm ">
            //                   {listing.listing_type.length > 15
            //                     ? listing.listing_type.slice(0, 15) + '...'
            //                     : listing.listing_type}
            //                 </p>
            //                 <div className="text-xs lg:text-sm ">${listing.asking_price}</div>
            //               </div>
            //             </div>
            //           </div>
            //         </Link>
            //       </div>
            //     ))}
            //   </Slider>
            // ) : (
            //   <div className="flex gap-4">
            //     {listings.map((listing) => (
            //       <div key={listing.id} style={{ minWidth: 0, flex: 1 }}>
            //         <Link href={`/buy-business/${listing.id}`}>
            //           <div className="relative listing-card-border !rounded-xl pt-[14px] pb-[19px] px-[18px] cursor-pointer">
            //             {listing.is_featured === "Yes" && (
            //               <div className="absolute top-7 right-8 bg-[#2EC4B6] z-30 text-white text-xs lg:text-sm px-2 py-1 rounded-full">
            //                 Featured
            //               </div>
            //             )}
            //             <div className="relative w-full h-[197px]">
            //               <Image
            //                 fill
            //                 src={"/images/listing/img1.png"} // Replace with dynamic image if available
            //                 alt={listing.business_name}
            //                 className="w-full h-full object-cover"
            //               />
            //             </div>
            //             <div className="mt-[15px]">
            //               <h2 className="text-xs lg:text-sm leading-6 font-semibold mb-1">
            //                 {listing.business_name.length > 12
            //                   ? listing.business_name.slice(0, 12) + '...'
            //                   : listing.business_name}
            //               </h2>
            //               <div className="flex items-center justify-between">
            //                 <p className="text-xs lg:text-sm ">
            //                   {listing.listing_type.length > 12
            //                     ? listing.listing_type.slice(0, 12) + '...'
            //                     : listing.listing_type}
            //                 </p>
            //                 {/* <div className="text-xs lg:text-sm ">${listing.asking_price}</div> */}
            //               </div>
            //             </div>
            //           </div>
            //         </Link>
            //       </div>
            //     ))}
            //     {/* Empty placeholder to keep layout */}
            //     {/* Add placeholders if less than 4 */}
            //     {/* {Array.from({ length: 4 - listings.length }).map((_, idx) => (
            //       <div key={`placeholder-${idx}`} style={{ minWidth: 0, flex: 1, visibility: 'hidden' }}>
            //       </div>
            //     ))} */}
            //   </div>
            // )
            <div className="relative">
              <Slider {...settings}>
                {listings.map((listing) => (
                  <div key={listing.id} className="px-2">
                  <Link href={`/buy-business/${listing.id}`}>
                    <div className="relative listing-card-border !rounded-xl pt-[14px] pb-[19px] px-[18px] cursor-pointer">
                      {listing.is_featured === "Yes" && (
                        <div className="absolute top-7 right-0 rounded-l-full bg-[#2EC4B6] z-30 text-white text-xs lg:text-sm px-2 py-1 ">
                          Featured
                        </div>
                      )}
                      <div className="relative w-full h-[197px]">
                        {/* <Image
                          fill
                          src={
                            listing.business_images && listing.business_images.length > 0
                              ? `${process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL}/${listing.business_images[0].image_path}`
                              : "/images/listing/img1.png"
                          }
                          alt={listing.business_name}
                          className="w-full h-full object-cover"
                        /> */}
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
                      <div className="mt-[15px]">
                        <h2 className="text-xs lg:text-sm leading-6 font-semibold mb-1">
                          {listing.business_name.length > 18
                            ? listing.business_name.slice(0, 18) + '...'
                            : listing.business_name}dddd
                        </h2>
                        <div className="flex items-center justify-between">
                          <p className="text-xs lg:text-sm ">
                            {listing.listing_type.length > 15
                              ? listing.listing_type.slice(0, 15) + '...'
                              : listing.listing_type}
                          </p>
                          <div className="text-xs lg:text-sm ">${listing.asking_price}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  </div>
                ))}
              </Slider>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
