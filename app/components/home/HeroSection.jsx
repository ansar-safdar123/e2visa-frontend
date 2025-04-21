"use client";

import SearchBar from "../ui/SearchBar";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] flex justify-center py-20 px-4">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[#1B263B]"></div>

      {/* Content */}
      <div className="relative z-10 text-center mb-40 mx-auto">
        <h1 className="text-white text-[32px] mb-[64px] 2xl:text-[56px] font-semibold">E2VISA: A COMMUNITY OF RESOURCES</h1>
        <p className="text-lg text-white/90 mb-[64px]">
          Buy a business, find an immigration attorney, buy a home and more
          while getting real time advice all in one place
        </p>

        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
