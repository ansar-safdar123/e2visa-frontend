'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ProfileDropdown from '../common/ProfileDropdown';
import { useAuth } from '@/app/context/AuthContext';

const Header = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfessionalDropdownOpen, setIsProfessionalDropdownOpen] = useState(false);
  const professionalDropdownRef = useRef(null);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/buy-business', label: 'Find A Business' },
    { href: '/real-estate', label: 'Find A Real Estate' },
    { href: '/professionals', label: 'Find A Professional' },
    // { href: '/forum', label: 'Forum' },
    { href: '/articles', label: 'Articles' },
    { href: '/contact', label: 'Contact Us' },

  ];

  const professionalDropdownItems = [
    { href: '/professionals', label: 'Find Business Broker' },
    { href: '/professionals/attorney', label: 'Find Attorney - Immigration/Real Estate/Business' },
    { href: '/professionals/real-estate-agent', label: 'Find Real Estate Agent' },
    { href: '/professionals/commercial-real-estate-agent', label: 'Find Commercial Real Estate Agent' },
    { href: '/professionals/immigration-consultant', label: 'Find Immigration Consultant' },
    { href: '/professionals/cpa-accountant', label: 'Find CPA/Accountant' },
    { href: '/professionals/appraiser', label: 'Find Appraiser, Business/Real Estate' },
    { href: '/professionals/affiliate-services', label: 'Find Affiliate Services' },
    { href: '/professionals/lender-loan-officer', label: 'Find Lender/Loan Officer' },
    { href: '/professionals/home-inspector', label: 'Find Home Inspector' },
    { href: '/professionals/insurance', label: 'Find Insurance' },
    { href: '/professionals/financial-advisor', label: 'Find Financial Advisor' },
    { href: '/professionals/consultant-general', label: 'Find Consultant - General' },
    { href: '/professionals/title-company', label: 'Find Title Company' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        professionalDropdownRef.current &&
        !professionalDropdownRef.current.contains(event.target)
      ) {
        setIsProfessionalDropdownOpen(false);
      }
    }
    if (isProfessionalDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfessionalDropdownOpen]);

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
            {menuItems.map((item) => {
              if (item.label === 'Find A Professional') {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    ref={professionalDropdownRef}
                  >
                    <button
                      type="button"
                      className="flex items-center cursor-pointer hover:text-gray-300 transition-colors focus:outline-none"
                      onClick={() => setIsProfessionalDropdownOpen((open) => !open)}
                    >
                      <span className={`${isActive(item.href) ? 'text-[#2EC4B6] font-bold' : ''}`}>{item.label}</span>
                      <svg className={`ml-1 w-4 h-4 transition-transform ${isProfessionalDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <div className={`absolute w-fit left-0 mt-2  bg-white text-[#40433F] rounded-lg shadow-lg z-50 transition-opacity duration-200 ${isProfessionalDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                      <ul className="py-2">
                        {professionalDropdownItems.map((subitem) => (
                          <li key={subitem.href}>
                            <Link 
                              href={subitem.href} 
                              className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap w-fit text-[15px]"
                              onClick={() => setIsProfessionalDropdownOpen(false)}
                            >
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-gray-300 transition-colors ${
                    isActive(item.href) ? 'text-[#2EC4B6] font-bold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center xl:gap-4 gap-2">
            {/* Auth Buttons - Always visible */}
            <div className="flex items-center space-x-2 xl:space-x-4 text-[#1B263B] text-[14px] font-medium">
              {/* <Link 
                href="/contact"
                className="xl:text-base text-xs px-3 md:px-[15px] xl:px-[33.63px] py-2 xl:py-4 text- rounded-lg bg-white hover:bg-gray-100"
              >
                Contact Us
              </Link> */}
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
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white hover:text-gray-300 transition-colors ${
                isActive(item.href) ? 'text-[#2EC4B6] font-bold' : ''
              }`}
              onClick={toggleSidebar}
            >
              {item.label}
            </Link>
          ))}
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