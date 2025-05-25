"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const professionals = [
  {
    id: 1,
    name: "Rebekah Rebekah",
    title: "Business Broker",
    image: "/images/FeaturedProfessionls/img1.png", // Replace with actual image paths
  },
  {
    id: 2,
    name: "Rebekah Rebekah",
    title: "Business Broker",
    image: "/images/FeaturedProfessionls/img2.png",
  },
  {
    id: 3,
    name: "Rebekah Rebekah",
    title: "Business Broker",
    image: "/images/FeaturedProfessionls/img3.png",
  },
  {
    id: 4,
    name: "Rebekah Rebekah",
    title: "Business Broker",
    image: "/images/FeaturedProfessionls/img4.png",
  },
];

const FeaturedProfessionals = () => {
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
    <div className="py-[92px] bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] text-center font-bold text-[#1C2533] mb-10">
          Featured Professionals
        </h2>

        <div className="listing-slider">
          <Slider {...settings}>
            {professionals.map((pro, index) => (
              <div
                key={pro.id}
                className='w-full rounded-2xl bg-white transition-all px-2' 
              >
                <div className="w-full h-[376px] relative">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-full h-full object-cover rounded-[22px]"
                  />
                  <div className="text-center absolute left-1/2 -translate-x-1/2 w-full bottom-5 text-[15.25px] p-3">
                    <div className="professional-name-tags w-full px-4 py-2 rounded-lg inline-block font-semibold">
                      {pro.name}
                      <br />
                      <span className="text-gray-600 text-xs font-normal">{pro.title}</span>
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
};

export default FeaturedProfessionals;
