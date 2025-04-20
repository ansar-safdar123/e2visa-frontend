"use client";

import Image from "next/image";
import { useState } from "react";

const topListings = [
  {
    id: 1,
    title: "Test Shop Main Street Business",
    image: "/images/listing/img1.png",
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
    id: 3,
    title: "Test Shop Main Street Business",
    image: "/images/listing/img3.png",
    status: "Leased",
    verified: true,
    rating: 5,
  },
  {
    id: 4,
    title: "Test Shop Main Street Business",
    image: "/images/listing/img4.png",
    status: "Leased",
    verified: false,
    rating: 5,
  },
];

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

export default function ListingsTabs() {
  const [activeTab, setActiveTab] = useState("top");

  return (
    <div className="bg-[#1B263B]  py-[92px] text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">

        <div className="flex items-center text-3xl 2xl:text-5xl border mb-[90px] listing-tabs rounded-full w-fit">
          <button
            onClick={() => setActiveTab("top")}
            className={`py-4 px-7 rounded-full font-semibold  ${
              activeTab === "top"
                ? "active-list"
                : ""
            }`}
          >
            Top Listings
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`py-4 px-7 rounded-full font-semibold  ${
              activeTab === "new"
                ? "active-list"
                : ""
            }`}
          >
            New Listings
          </button>
        </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {(activeTab === "top" ? topListings : newListing).map((listing) => (
            <div
              key={listing.id}
              className="relative listing-card-border w-[284px] pt-[14px] pb-[19px] px-[18px]"
            >
              {listing.verified && (
                <div className="absolute top-7 right-8 bg-[#2EC4B6] z-30 text-white text-xs lg:text-sm px-2 py-1 rounded-full">
                  Verified
                </div>
              )}
              <div className="relative w-[247px] h-[197px]">
                <Image
                  fill  
                  src={listing.image}
                  alt="Listing"
                  className="w-full h-full "
                />
              </div>
              <div className="mt-[15px]">
                <h2 className="text-sm lg:text-2xl leading-6 font-semibold mb-1">
                  {listing.title}
                </h2>
                <div className="flex items-center justify-between">
                  <p className="text-xs lg:text-base  mb-2">{listing.status}</p>
                  <div className="flex gap-1">
                    {[...Array(listing.rating)].map((_, index) => (
                      <div
                        className="w-[12.84px] h-[12.27px] relative"
                        key={index}
                      >
                        <Image
                          src="/images/Listing/rating.png"
                          fill
                          alt="rating star"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-right">
          <button className="text-white font-medium text-2xl">View All &gt; </button>
        </div>
      </div>
    </div>
  );
}
