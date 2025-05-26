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
      title: "Are You An Agent/Broker?",
      description:
        "We're an ethical site giving the power back to the agent - we offer less expensive marketing, without third party services stealing your leads. If someone inquires to your listing, you get that lead for very low fees.",
    },
    {
      id: "03",
      title: "Looking To Immigrate?",
      description:
        "Find an immigration attorney or consultants you can deal with directly, buy your home, buy your business and get advice all in one place.",
    },
    {
      id: "04",
      title: "Agents/Attorneys Benefits",
      description:
        "The more you interact with buyers and clients in the forum, the more site visitors will notice you. Licensed individuals who pay a fee receive badges within the forum and can interact freely.",
    },
    {
      id: "05",
      title: "Get Published",
      description:
        "Participate by sending us articles, if they're right for our site we'll publish your work in our newsletter and post it on our social media platforms.",
    },
    {
      id: "06",
      title: "Direct Connections",
      description:
        "We don't sell leads. The agent you contact is the agent you'll be dealing with directly - we're not like other sites where you go to the highest bidder.",
    },
    {
      id: "07",
      title: "Top Professionals",
      description:
        "Find the right business broker, immigration attorney, immigration consultant real estate agent and more.",
    },
    {
      id: "08",
      title: "Have A Question?",
      description:
        "Find live advice or search the forum for all of your answers.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center xl:text-4xl text-2xl text-[#40433F] font-bold my-10">What Sets Us Apart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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
              <h3 className="text-[#40433F] font-semibold text-sm xl:text-base mb-2">
                {feature.title}
              </h3>
              <p className="font-normal text-[#40433F] text-sm xl:text-base">
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
