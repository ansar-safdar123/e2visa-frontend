"use client";

import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="py-[92px] text-[#40433F]">
            <div className="container mx-auto px-4">
                <h1 className="text-center xl:text-4xl text-2xl font-bold mb-20">New Listings</h1>

                <div className="listing-slider">
                    <Slider {...settings}>
                        {newListing.map((listing) => (
                            <div key={listing.id} className=" bg-[#1B263B1A]">
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
                                        <h2 className="text-sm lg:text-2xl leading-6 font-semibold mb-1">
                                            {listing.title}
                                        </h2>
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs lg:text-base mb-2">{listing.status}</p>
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
                    </Slider>
                </div>
            </div>
        </div>
    );
}
