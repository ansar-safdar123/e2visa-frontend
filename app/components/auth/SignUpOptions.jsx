'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const userTypes = [
  { id: 'buyer', title: 'Buyer' },
  { id: 'seller', title: 'Seller' },
  { id: 'broker', title: 'Broker' },
  { id: 'attorney', title: 'Attorney' },
  { id: 'real-estate-agent', title: 'Real Estate Agents' },
  { id: 'commercial-agent', title: 'Commercial Real Estate Agents' },
  { id: 'immigration-consultant', title: 'Immigartion Consulatnt' },
  { id: 'cpa-accountant', title: 'CPA/Accountant' },
  { id: 'appraiser', title: 'Appraiser' },
  { id: 'affiliate-services', title: 'Affiliate Services' },
  { id: 'lender', title: 'Lender' },
  { id: 'home-inspector', title: 'Home Inspector' },
  { id: 'insurance', title: 'Insurance' },
  { id: 'financial-advisor', title: 'Financial Advisor' },
  { id: 'consultant', title: 'Consultant' },
  { id: 'title-company', title: 'Title Company' },
];

const SignUpOptions = () => {
  const router = useRouter();

  const handleUserTypeSelect = (userType) => {
    router.push(`/signup?type=${userType}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[url('/images/auth/signin/signinImg.png')] bg-cover bg-center">
      <div className="signin-bg rounded-2xl shadow-lg px-8 py-12 w-full max-w-[1200px]">
        <h1 className="text-[32px] 2xl:text-[48px] font-bold text-center mb-12 text-[#424242]">
          Select User Type
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {userTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleUserTypeSelect(type.id)}
              className="flex flex-col items-center justify-center px-6 py-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 "
            >
              <div className="w-12 h-12 mb-4">
                <Image
                  src="/images/auth/signin/user2.png"
                  alt={type.title}
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-[#1E1E1E] text-center font-medium text-lg">
                {type.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignUpOptions; 