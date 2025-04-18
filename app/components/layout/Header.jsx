'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#1B263B] text-white py-[17px]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="E2Visa Logo"
              width={62}
              height={57}
              className="cursor-pointer"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10 text-[18px] font-medium">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/buy-business" className="hover:text-gray-300">Buy a Business</Link>
            <Link href="/real-estate" className="hover:text-gray-300">Buy Real Estate</Link>
            <Link href="/professionals" className="hover:text-gray-300">Find a Professional</Link>
            <Link href="/forum" className="hover:text-gray-300">Forum</Link>
            <Link href="/articles" className="hover:text-gray-300">Articles</Link>
          </div>

          <div className="flex items-center space-x-4 text-[#1B263B] text-[14px] font-medium">
            <Link 
              href="/contact"
              className="px-[33.63px] py-4 rounded-full bg-white  hover:bg-gray-100"
            >
              Contact Us
            </Link>
            <Link 
              href="/signin"
              className="px-[33.63px] py-4 rounded-full bg-white hover:bg-gray-100 "
            >
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 