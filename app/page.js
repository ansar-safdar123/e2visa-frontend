import HeroSection from "./components/home/HeroSection";
import FeaturedSection from "./components/home/FeaturedSection";
import WhatSetsUsApart from "./components/home/WhatSetsUsApart";
import ListingsTabs from "./components/home/Listing";
import FeaturedProfessionals from "./components/home/FeaturedProfessionals";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedSection />
      <WhatSetsUsApart />
      <ListingsTabs />
      <FeaturedProfessionals />
    </div>
  );
}
