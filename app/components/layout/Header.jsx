'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProfileDropdown from '../common/ProfileDropdown';
import { useAuth } from '@/app/context/AuthContext';

const Header = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-[#40433F] text-white py-[17px] relative">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="E2Visa Logo"
              width={42}
              height={37}
              className="cursor-pointer md:w-[62px] md:h-[57px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10 text-sm xl:text-[18px] font-medium">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/buy-business" className="hover:text-gray-300">Buy a Business</Link>
            <Link href="/real-estate" className="hover:text-gray-300">Buy Real Estate</Link>
            <Link href="/professionals" className="hover:text-gray-300">Find a Professional</Link>
            <Link href="/forum" className="hover:text-gray-300">Forum</Link>
            <Link href="/articles" className="hover:text-gray-300">Articles</Link>
          </div>

          <div className="flex items-center xl:gap-4 gap-2">
            {/* Auth Buttons - Always visible */}
            <div className="flex items-center space-x-2 xl:space-x-4 text-[#1B263B] text-[14px] font-medium">
              <Link 
                href="/contact"
                className="xl:text-base text-xs px-3 md:px-[15px] xl:px-[33.63px] py-2 xl:py-4 text- rounded-lg bg-white hover:bg-gray-100"
              
              >

                Contact Us
              </Link>
              <div className="flex items-center">
                {user ? (
                  <ProfileDropdown user={user} />
                ) : (
                  <Link 
                    href="/signin"
                    className="xl:text-base text-xs px-3 md:px-[15px] xl:px-[33.63px] py-2 xl:py-4 text- rounded-lg bg-white hover:bg-gray-100"
                  
                  >

                    Sign In
                  </Link> 
                )}
              </div>
            </div>

            {/* Burger Menu for Mobile */}
            <button
              className="lg:hidden text-white p-2 pr-0"
              onClick={toggleSidebar}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden z-50`}>
        <div className="p-4">
          <button
            className="text-white p-2 float-right"
            onClick={toggleSidebar}
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4 mt-8">
          <Link href="/" className="text-white hover:text-gray-300" onClick={toggleSidebar}>Home</Link>
          <Link href="/buy-business" className="text-white hover:text-gray-300" onClick={toggleSidebar}>Buy a Business</Link>
          <Link href="/real-estate" className="text-white hover:text-gray-300" onClick={toggleSidebar}>Buy Real Estate</Link>
          <Link href="/professionals" className="text-white hover:text-gray-300" onClick={toggleSidebar}>Find a Professional</Link>
          <Link href="/forum" className="text-white hover:text-gray-300" onClick={toggleSidebar}>Forum</Link>
          <Link href="/articles" className="text-white hover:text-gray-300" onClick={toggleSidebar}>Articles</Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Header; 