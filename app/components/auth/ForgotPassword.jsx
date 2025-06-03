'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically make an API call to handle password reset
    // For now, we'll just console log
    console.log('Password reset requested for:', email);
    // You can add the API integration here later
  };

  return (
    <div className="min-h-[700px] flex items-center justify-center px-4 bg-[url('/images/auth/signin/signinImg.png')] bg-cover bg-center relative">
        <div className="signin-bg rounded-2xl shadow-lg px-12 py-20 w-full my-[50px] max-w-[927px]">
        <h1 className="text-[32px] 2xl:text-[48px] font-bold text-center mb-8 2xl:mb-16 text-[#424242]">Forgot Password</h1>
        <div className="flex items-center justify-center w-full">

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-[540px]">
          {/* Email Input */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Image
                  src="/images/auth/signin/mail.png"
                  alt="Email icon"
                  width={23}
                  height={20}
                />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label htmlFor="email" className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">Email</label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0A3161] !mt-20 text-white py-4 2xl:py-5 rounded-lg hover:bg-[#102742] transition-colors font-semibold text-2xl"
          >
            Reset Password
          </button>

          {/* Back to Login Link */}
          <div className="text-center text-[18px] font-medium mt-10 2xl:mt-10 text-[#1E1E1E]">
            Remember your password?{' '}
            <Link href="/signin" className="text-[#0A3161] font-medium hover:underline">
              Login here
            </Link>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 