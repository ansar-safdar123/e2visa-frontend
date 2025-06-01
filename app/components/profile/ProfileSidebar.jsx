'use client';

import Image from 'next/image';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const router = useRouter();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/signin');
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
        <div className="w-24 h-24 rounded-full overflow-hidden border border-[#2EC4B6] mb-4 flex-shrink-0">
          <Image
            src={user?.image || "/images/auth/signin/user2.png"}
            alt="Profile"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
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
            className={`w-full flex items-center text-[#40433F] space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === item.id
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