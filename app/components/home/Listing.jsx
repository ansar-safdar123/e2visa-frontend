"use client";

import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";

export const topListings = [
  {
    id: 1,
    title: "Test Shop Main Street Business",
    image: "/images/listing/img1.png",
    status: "Leased",
    verified: true,
    rating: 5,
    location: 'California',
    askingPrice: 449000,
    grossRevenue: 1000000,
    description: `Michael Finley stands out as a business broker for his comprehensive understanding of the entrepreneurial landscape, enhanced by his academic achievements and practical experience. His professionalism, coupled with a genuine commitment to client success, makes him an invaluable partner for those looking to buy or sell a business.

    Michael Finley is a proud Marine Corps and Operation Iraqi Freedom (OIF) veteran with a robust foundation in leadership and strategic planning. Although originally from Chicago, Michael has found his paradise in Southwest Florida, where he enjoys life with his wife and two young children. Michael's professional path is underpinned by an impressive array of entrepreneurial ventures, signaling not just a career but a calling to innovate, develop, and lead successful businesses.
    
    Michael's entrepreneurial journey is characterized by the successful founding and development of several businesses. This hands-on experience, combined with an MBA, equips him with a profound understanding of business strategy, financial acumen, and operational excellence. His deep-rooted passion for entrepreneurship is matched by his commitment to lifelong learning and professional development.`,
       
    EBITDA: 200000,
    cashFlow: 250000,
    inventory: {
      included: true,
      value: 9000
    },
    rent: 3600,
    established: 1996,
    employees: {
      fullTime: 1,
      partTime: 8,
      contractors: 'N/A',
      ownerHours: 30
    },
    details: {
      homeBased: false,
      franchise: true,
      relocatable: false,
      lenderPrequalified: false,
      sbaPrequalified: false
    },
    reasonForSale: 'The reason for selling is the Seller would like to pursue other interests.',
    adjustedEBITDA: 200000,
  },
  {
    id: 2,
    title: "Test Shop Main Street Business",
    image: "/images/listing/img2.png",
    status: "Available",
    verified: true,
    rating: 5,
    location: 'New York',
    askingPrice: 550000,
    grossRevenue: 1200000,
    description: `Michael Finley stands out as a business broker for his comprehensive understanding of the entrepreneurial landscape, enhanced by his academic achievements and practical experience. His professionalism, coupled with a genuine commitment to client success, makes him an invaluable partner for those looking to buy or sell a business.

    Michael Finley is a proud Marine Corps and Operation Iraqi Freedom (OIF) veteran with a robust foundation in leadership and strategic planning. Although originally from Chicago, Michael has found his paradise in Southwest Florida, where he enjoys life with his wife and two young children. Michael's professional path is underpinned by an impressive array of entrepreneurial ventures, signaling not just a career but a calling to innovate, develop, and lead successful businesses.
    
    Michael's entrepreneurial journey is characterized by the successful founding and development of several businesses. This hands-on experience, combined with an MBA, equips him with a profound understanding of business strategy, financial acumen, and operational excellence. His deep-rooted passion for entrepreneurship is matched by his commitment to lifelong learning and professional development.`,
       
    EBITDA: 300000,
    cashFlow: 280000,
    inventory: {
      included: true,
      value: 12000
    },
    rent: 4200,
    established: 2000,
    employees: {
      fullTime: 2,
      partTime: 6,
      contractors: 'N/A',
      ownerHours: 25
    },
    details: {
      homeBased: false,
      franchise: false,
      relocatable: false,
      lenderPrequalified: true,
      sbaPrequalified: true
    },
    reasonForSale: 'Owner retiring after 23 successful years in business.',
    adjustedEBITDA: 300000,
  },
  {
    id: 3,
    title: "Test Shop Main Street Business",
    image: "/images/listing/img3.png",
    status: "Available",
    verified: true,
    rating: 5,
    location: 'Texas',
    askingPrice: 350000,
    grossRevenue: 800000,
    description: `Michael Finley stands out as a business broker for his comprehensive understanding of the entrepreneurial landscape, enhanced by his academic achievements and practical experience. His professionalism, coupled with a genuine commitment to client success, makes him an invaluable partner for those looking to buy or sell a business.

    Michael Finley is a proud Marine Corps and Operation Iraqi Freedom (OIF) veteran with a robust foundation in leadership and strategic planning. Although originally from Chicago, Michael has found his paradise in Southwest Florida, where he enjoys life with his wife and two young children. Michael's professional path is underpinned by an impressive array of entrepreneurial ventures, signaling not just a career but a calling to innovate, develop, and lead successful businesses.
    
    Michael's entrepreneurial journey is characterized by the successful founding and development of several businesses. This hands-on experience, combined with an MBA, equips him with a profound understanding of business strategy, financial acumen, and operational excellence. His deep-rooted passion for entrepreneurship is matched by his commitment to lifelong learning and professional development.`,
       
    EBITDA: 150000,
    cashFlow: 180000,
    inventory: {
      included: true,
      value: 8000
    },
    rent: 3200,
    established: 2015,
    employees: {
      fullTime: 1,
      partTime: 5,
      contractors: 'N/A',
      ownerHours: 40
    },
    details: {
      homeBased: false,
      franchise: false,
      relocatable: true,
      lenderPrequalified: true,
      sbaPrequalified: false
    },
    reasonForSale: 'Owner relocating to another state.',
    adjustedEBITDA: 150000,
  },
  {
    id: 4,
    title: "Test Shop Main Street Business",
    image: "/images/listing/img4.png",
    status: "Under Offer",
    verified: false,
    rating: 5,
    location: 'Florida',
    askingPrice: 275000,
    grossRevenue: 600000,
    description: `Michael Finley stands out as a business broker for his comprehensive understanding of the entrepreneurial landscape, enhanced by his academic achievements and practical experience. His professionalism, coupled with a genuine commitment to client success, makes him an invaluable partner for those looking to buy or sell a business.

    Michael Finley is a proud Marine Corps and Operation Iraqi Freedom (OIF) veteran with a robust foundation in leadership and strategic planning. Although originally from Chicago, Michael has found his paradise in Southwest Florida, where he enjoys life with his wife and two young children. Michael's professional path is underpinned by an impressive array of entrepreneurial ventures, signaling not just a career but a calling to innovate, develop, and lead successful businesses.
    
    Michael's entrepreneurial journey is characterized by the successful founding and development of several businesses. This hands-on experience, combined with an MBA, equips him with a profound understanding of business strategy, financial acumen, and operational excellence. His deep-rooted passion for entrepreneurship is matched by his commitment to lifelong learning and professional development.`,
       
    EBITDA: 120000,
    cashFlow: 140000,
    inventory: {
      included: true,
      value: 15000
    },
    rent: 2800,
    established: 2010,
    employees: {
      fullTime: 1,
      partTime: 3,
      contractors: '1',
      ownerHours: 35
    },
    details: {
      homeBased: false,
      franchise: false,
      relocatable: false,
      lenderPrequalified: false,
      sbaPrequalified: false
    },
    reasonForSale: 'Owner pursuing new business venture.',
    adjustedEBITDA: 120000,
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
    arrows: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    arrows: true,

        }
      }
    ]
  };

  return (
    <div className="bg-[#40433F] py-[52px] text-white">
      <div className="container mx-auto px-4">
       
        <h1 className="text-center xl:text-3xl text-2xl text-white font-bold mb-20">Top Listings</h1>

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
              font-size: 40px;
              opacity: 0.75;
            }
            @media (max-width: 640px) {
              :global(.slick-prev) {
                left: 0;
              }
              :global(.slick-next) {
                right: 0;
              }
            }
          `}</style>
          <Slider {...settings}>
            {topListings.map((listing) => (
              <div key={listing.id} className="">
                <Link href={`/buy-business/${listing.id}`}>
                  <div className="relative listing-card-border w-full pt-[14px] pb-[19px] px-[18px] cursor-pointer">
                    {listing.verified && (
                      <div className="absolute top-7 right-8 bg-[#2EC4B6] z-30 text-white text-xs lg:text-sm px-2 py-1 rounded-full">
                        Verified
                      </div>
                    )}
                    <div className="relative w-full h-[197px]">
                      <Image
                        fill
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-[15px]">
                      <h2 className="text-xs lg:text-sm leading-6 font-semibold mb-1">
                        {listing.title}
                      </h2>
                      <div className="flex items-center justify-between">
                        <p className="text-xs lg:text-sm ">Leased</p>
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
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
