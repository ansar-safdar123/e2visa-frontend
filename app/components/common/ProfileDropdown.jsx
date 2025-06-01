'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const ProfileDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    logout();
    router.push('/signin');
  };

  const handleProfileClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 focus:outline-none"
      >
        <div className="w-7 h-w-7 rounded-full overflow-hidden ">
          <Image
            src={user?.image || "/images/auth/signin/user2.png"}
            alt="Profile"
            width={40}
            height={40}
            className="w-full h-full object-cover brightness-0 invert"
          />
        </div>
        {/* <span className="text-[#1E1E1E] font-medium">
          {user?.name || 'User Name'}
        </span> */}
        <Image
          src="/images/header/dropdown.png"
          alt="Dropdown"
          width={12}
          height={12}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-[#1E1E1E]">{user?.name || 'User Name'}</p>
            <p className="text-sm text-gray-500">{user?.email || 'user@example.com'}</p>
          </div>
          
          <Link
            href="/profile"
            onClick={handleProfileClick}
            className="block px-4 py-2 text-sm text-[#1E1E1E] hover:bg-gray-50 cursor-pointer"
          >
            My Profile
          </Link>
          
         
          
          <div className="border-t border-gray-100 mt-2">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown; 