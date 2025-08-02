'use client';

import Image from 'next/image';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const router = useRouter();
  const { logout, user } = useAuth();
  const [newImage, setNewImage] = useState(null);


  useEffect(() => {
    const storedUser = localStorage.getItem('userDetail');
    if (storedUser) {
      setNewImage(JSON.parse(storedUser));
    }
  }, []);



  const handleLogout = () => {
    logout();
    localStorage.clear();
    router.push('/signin');
  };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setNewImage(reader.result);
  //       localStorage.setItem('profileImage', reader.result);
  //       console.log('Selected image saved to localStorage:', reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Preview locally
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewImage(reader.result); // Just for preview if needed
    };
    reader.readAsDataURL(file);

    // Prepare image upload
    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = JSON.parse(localStorage.getItem('userDetail'))?.token;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/update-profile-image-update`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await res.json();

      if (res.ok && result.result?.image_url) {
        // Save image URL in localStorage and state
        const updatedUser = {
          ...JSON.parse(localStorage.getItem('userDetail')),
          image: result.result.image_url,
        };
        localStorage.setItem('userDetail', JSON.stringify(updatedUser));
        setNewImage(result.result.image_url); // Store URL, not base64
      } else {
        console.error('Upload failed:', result);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };



  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '/images/profile/dashboard.png'
    },
    {
      id: 'profile',
      label: 'Profile Setting',
      icon: '/images/profile/user.png'
    },
    {
      id: 'password',
      label: 'Change Password',
      icon: '/images/profile/forgotPassword.png'
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center mb-6 gap-4 border-b">
        <label htmlFor="profile-image-upload" className="relative w-24 h-24 rounded-full overflow-hidden border border-[#2EC4B6] mb-4 flex-shrink-0 cursor-pointer group">

          <Image
            src={
              newImage ||
              JSON.parse(localStorage.getItem("userDetail"))?.image ||
              "/images/auth/signin/user2.png"
            }
            alt="Profile"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full"
          />
          <input
            id="profile-image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          {/* bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity  */}
          <div className="absolute inset-0 cursor-pointer flex items-end justify-end p-2">
            <div className='bg-[#2EC4B6] rounded-full p-1 border-2 border-white flex items-center justify-center'>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
          </div>

        </label>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold truncate">{user?.name || 'User Name'}</h3>
          <p className="text-gray-500 text-sm truncate">{user?.email || 'user@example.com'}</p>
        </div>
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center text-[#40433F] space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id
                ? 'bg-[#1B263B1A] '
                : 'hover:bg-gray-50'
              }`}
          >
            <div className='w-10 h-10 rounded-full bg-[#0A3161] flex items-center justify-center'>
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className={activeTab === item.id ? 'brightness-0 invert' : ''}
              />
            </div>
            <span>{item.label}</span>
          </button>
        ))}

        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-gray-50"
        >
          <div className='w-10 h-10 rounded-full bg-[#0A3161] flex items-center justify-center'>
            <Image
              src="/images/profile/logout.svg"
              alt="Logout"
              width={20}
              height={20}
            />
          </div>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar; 