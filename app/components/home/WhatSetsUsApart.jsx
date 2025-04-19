"use client";

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
    <section className="py-16 px-4 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Sets Us Apart
      </h2>

      <div className="max-w-7xl mx-auto relative">
        {/* Carousel container */}
        <div className="flex gap-6 justify-center items-stretch">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-[384px] bg-white rounded-[20px] p-8 border border-[#E5E7EB]"
            >
              <span className="text-[#2EC4B6] text-base font-medium mb-4 block">
                {feature.id}
              </span>
              <h3 className="text-xl font-semibold mb-4 text-[#1F2937]">
                {feature.title}
              </h3>
              <p className="text-[#4B5563] text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            className="w-8 h-8 rounded-full bg-[#2EC4B6] flex items-center justify-center text-white"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="w-8 h-8 rounded-full bg-[#2EC4B6] flex items-center justify-center text-white"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
