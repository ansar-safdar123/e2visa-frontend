'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <div className="min-h-[700px] flex items-center justify-center px-4 bg-[url('/images/auth/signin/signinImg.png')] bg-cover bg-center relative">
        {/* <div className="absolute inset-0 bg-[#1B263B]/80 z-0" /> */}
        <div class="signin-bg rounded-2xl shadow-lg px-12 py-20 w-full my-[50px] max-w-[927px]">
        <h1 className="text-[32px] 2xl:text-[48px] font-bold text-center mb-8 2xl:mb-16 text-[#424242]">Welcome Back!</h1>
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
                placeholder="email@gmail.com"
                className="pl-12 w-full pr-4 py-4 rounded-full border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
                <label htmlFor="email" className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">Email</label>

            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-8">
            
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Image
                  src="/images/auth/signin/lock.png"
                  alt="Lock icon"
                  width={23}
                  height={20}
                />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="pl-12 w-full pr-4 py-4 rounded-full border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"

              />
                <label htmlFor="password" className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">Password</label>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                <Image
                  src={`/images/auth/${showPassword ? 'eye-off' : 'eye'}.svg`}
                  alt={showPassword ? "Hide password" : "Show password"}
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-15 2xl:mb-20">
            <Link
              href="/forgot-password"
              className="text-[#616161] hover:text-[#2EC4B6] text-xl font-semibold"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#2EC4B6] text-white  py-4 2xl:py-5 rounded-full hover:bg-[#25a093] transition-colors font-semibold text-2xl"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="text-center text-[18px] font-medium mt-6 2xl:mt-10 text-[#1B263B]">
            Don't have an account?{' '}
            <Link href="/signup-options" className="text-[#1E1E1E] font-medium hover:underline">
              Register
            </Link>
          </div>
        </form>
        </div>
      </div>

    </div>
  );
};

export default SignIn; 