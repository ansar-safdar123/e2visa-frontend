"use client";

import Image from "next/image";
import React from "react";

const WhatSetsUsApart = () => {
  const features = [
    {
      id: "01",
      title: "Are You A Buyer?",
      description:
        "Our site is free for buyers and we're the first site to facilitate transactions directly between agents you choose and you.",
    },
    {
      id: "02",
      title: "Have A Question?",
      description:
        "Find live advice or search the forum for all of your answers.",
    },
    {
      id: "03",
      title: "Looking To Immigrate?",
      description:
        "Find an immigration attorney or consultants you can deal with directly, buy your home, buy your business and get advice all in one place.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center xl:text-4xl text-2xl text-[#40433F] font-bold my-10">What Sets Us Apart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border border-gray-200 rounded-lg p-6"
            >
              <div className="mb-4">
                <Image
                  src="/images/setsUsApart/tick.png"
                  alt="Search"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
              <h3 className="text-[#40433F] font-bold xl:text-2xl text-lg  mb-2">
                {feature.title}
              </h3>
              <p className="font-medium text-[#40433F] text-sm xl:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
         
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
