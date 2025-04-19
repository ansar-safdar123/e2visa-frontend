import Image from "next/image";
import React from "react";

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
  return (
    <div className="py-[92px] bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] text-center font-bold text-[#1C2533] mb-10">
          Featured Professionals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {professionals.map((pro, index) => (
            <div
              key={pro.id}
              className={`w-[282px] rounded-2xl  bg-white transition-all 
              ${index % 2 === 0 ? "mt-0" : "mt-6"}`}
            >
              <div className="w-[282px] h-[376px] relative">
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="w-full h-full rounded-[22px]"
                />
                <div className="text-center w-full absolute left-1/2 -translate-x-1/2  bottom-5 text-[15.25px] p-3">
                  <div className="professional-name-tags w-full px-4 py-2 rounded-full inline-block font-semibold">
                    {pro.name}
                    <br />
                    <span className="text-gray-600 text-xs font-normal">{pro.title}</span>
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

export default FeaturedProfessionals;
