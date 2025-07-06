'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const LOGIN_API_URL = process.env.NEXT_PUBLIC_API_URL + '/api/login';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    try {
      const form = new FormData();
      form.append('email', email);
      form.append('password', password);
      const res = await fetch(LOGIN_API_URL, {
        method: 'POST',
        body: form,
      });
      const data = await res.json();
      if (res.ok && data.message && data.message.toLowerCase().includes('success')) {
        // You may want to adjust userData based on your API response
        const userData = {
          email: email,
          // Add more fields if needed from data.result
        };
        login(userData);
        router.push('/');
      } else {
        setLoginError(data.message || 'Login failed.');
      }
    } catch (err) {
      setLoginError('Login failed.');
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="min-h-[700px] flex items-center justify-center px-4 bg-[url('/images/auth/signin/signinImg.png')] bg-cover bg-center relative">
        {/* <div className="absolute inset-0 bg-[#1B263B]/80 z-0" /> */}
        <div className="signin-bg rounded-2xl shadow-lg md:px-12 py-10 md:py-20 w-full md:my-[50px] max-w-[927px]">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8 2xl:mb-16 text-[#424242]">Login to Your Account</h1>
        <div className="flex items-center justify-center w-full">

        <form onSubmit={handleSubmit} className="space-y-6 w-full px-5 sm:max-w-[540px]">
          {loginError && (
            <div className="text-red-500 text-center mb-2">{loginError}</div>
          )}
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
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-xs md:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
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
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-xs md:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"

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
              className="text-[#0A3161] hover:text-[#102742] text-xs md:text-sm font-semibold"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#0A3161] !mt-10 md:!mt-20 text-white  py-4 2xl:py-5 rounded-lg hover:bg-[#102742] transition-colors font-semibold text-xs md:text-sm"
            disabled={loginLoading}
          >
            {loginLoading ? 'Logging in...' : 'Submit'}
          </button>

          {/* Register Link */}
          <div className="text-center text-xs md:text-sm font-medium mt-5 2xl:mt-10 text-[#1E1E1E]">
            If you don't have an account?{' '}
            <Link href="/signup-options" className="text-[#0A3161] font-medium hover:underline">
              Register here
            </Link>
          </div>
        </form>
        </div>
      </div>

    </div>
  );
};

export default SignIn; 