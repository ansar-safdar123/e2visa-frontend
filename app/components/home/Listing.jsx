"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import LoadingSpinner from "@/app/components/common/LoadingSpinner";

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
        width: 44,
        height: 44,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        border: "none",
        zIndex: 20,
        right: -30,
        transition: "background 0.2s, box-shadow 0.2s",
      }}
      onClick={onClick}
      aria-label="Next"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
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
        width: 44,
        height: 44,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        border: "none",
        zIndex: 20,
        left: -30,
        transition: "background 0.2s, box-shadow 0.2s",
      }}
      onClick={onClick}
      aria-label="Previous"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
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
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: true } }
    ]
  };

  return (
    <div className="bg-[#40433F] py-[52px] text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center xl:text-3xl text-2xl text-white font-bold mb-20">New Listings</h1>
        <div className="listing-slider relative">
          <style jsx>{`
            :global(.slick-prev),
            :global(.slick-next) {
              z-index: 10;
              width: 40px;
              height: 40px;
            }
            :global(.slick-prev) {
              left: -20px;
            }
            :global(.slick-next) {
              right: -20px;
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
              right: -30px !important;
            }
            :global(.custom-slick-prev) {
              left: -30px !important;
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
            }
          `}</style>
          {loading ? (
            <LoadingSpinner />
          ) : (
          <Slider {...settings}>
              {listings.map((listing) => (
                <div key={listing.id}>
                <Link href={`/buy-business/${listing.id}`}>
                  <div className="relative listing-card-border !rounded-xl w-full pt-[14px] pb-[19px] px-[18px] cursor-pointer">
                      {listing.is_featured === "Yes" && (
                      <div className="absolute top-7 right-8 bg-[#2EC4B6] z-30 text-white text-xs lg:text-sm px-2 py-1 rounded-full">
                          Featured
                      </div>
                    )}
                    <div className="relative w-full h-[197px]">
                      <Image
                        fill
                          src={"/images/listing/img1.png"} // Replace with dynamic image if available
                          alt={listing.business_name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-[15px]">
                      <h2 className="text-xs lg:text-sm leading-6 font-semibold mb-1">
                          {listing.business_name}
                      </h2>
                      <div className="flex items-center justify-between">
                          <p className="text-xs lg:text-sm ">{(() => {
                            const words = listing.listing_type.split(' ');
                            return words.length > 2 ? words.slice(0, 2).join(' ') + ' ...' : listing.listing_type;
                          })()}</p>
                          <div className="text-xs lg:text-sm ">${listing.asking_price}</div>
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
