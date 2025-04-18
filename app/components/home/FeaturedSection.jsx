'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

const FeaturedSection = () => {
  return (
    <section className="py-20 min-h-[655px] px-4 bg-white">
      <div className="container relative mx-auto">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

      <Image
              src="/images/FeaturedSection/Featured.png"
              alt="E2Visa Logo"
              width={1036}
              height={640}
              className="cursor-pointer border-[29px] rounded-[53px] border-blue-300"
              />
              </div>
        
      </div>
    </section>
  );
};

export default FeaturedSection; 