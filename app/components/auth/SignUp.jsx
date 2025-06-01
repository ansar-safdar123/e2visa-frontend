"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    userType: '',
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    timeframe: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zipcode: "",
    broker: "",
    attorney: "",
    newsletter: "",
    brokerLicense: "",
    attorneyLicense: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Get the user type from URL in client-side
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    
    if (!type) {
      router.push('/signup-options');
    } else {
      setFormData(prev => ({
        ...prev,
        userType: type
      }));
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to register the user
    // For now, we'll simulate a successful registration
    const userData = {
      name: formData.fullName,
      email: formData.email,
      image: '/images/auth/signin/user2.png'
    };
    login(userData);
    router.push('/');
  };

  return (
    <div className="min-h-[700px] flex items-center justify-center px-4 bg-[url('/images/auth/signin/signinImg.png')] bg-cover bg-center relative">
      <div className="signin-bg rounded-2xl shadow-lg px-12 py-20 w-full my-[50px] max-w-[927px]">
        <h1 className="text-[32px] 2xl:text-[48px] font-bold text-center mb-8 2xl:mb-16 text-[#424242]">
        Create Your Free Account

        </h1>
        <div className="flex items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-full max-w-[540px]"
          >
            {/* Full Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Image
                  src="/images/auth/signin/user.png"
                  alt="User icon"
                  width={23}
                  height={20}
                />
              </div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="fullName"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Full Name
              </label>
            </div>

            {/* Email Input */}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@gmail.com"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Email
              </label>
            </div>

            {/* Password Input */}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                <Image
                  src={`/images/auth/${showPassword ? "eye-off" : "eye"}.svg`}
                  alt={showPassword ? "Hide password" : "Show password"}
                  width={20}
                  height={20}
                />
              </button>
            </div>

            {/* Confirm Password Input */}
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
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="confirmPassword"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Confirm Password
              </label>
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                <Image
                  src={`/images/auth/${
                    showConfirmPassword ? "eye-off" : "eye"
                  }.svg`}
                  alt={showConfirmPassword ? "Hide password" : "Show password"}
                  width={20}
                  height={20}
                />
              </button>
            </div>

            {/* Phone Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Image
                  src="/images/auth/signin/phone.png"
                  alt="Phone icon"
                  width={23}
                  height={20}
                />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone no"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Phone no
              </label>
            </div>

            {/* Broker License Input - Only shown for broker user type */}
            {formData.userType === 'broker' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Image
                    src="/images/auth/signin/lock.png"
                    alt="License icon"
                    width={23}
                    height={20}
                  />
                </div>
                <input
                  type="text"
                  id="brokerLicense"
                  name="brokerLicense"
                  value={formData.brokerLicense}
                  onChange={handleChange}
                  placeholder="Enter your broker license number"
                  className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="brokerLicense"
                  className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Broker License
                </label>
              </div>
            )}

            {/* Attorney License Input - Only shown for attorney user type */}
            {formData.userType === 'attorney' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Image
                    src="/images/auth/signin/lock.png"
                    alt="License icon"
                    width={23}
                    height={20}
                  />
                </div>
                <input
                  type="text"
                  id="attorneyLicense"
                  name="attorneyLicense"
                  value={formData.attorneyLicense}
                  onChange={handleChange}
                  placeholder="Enter your attorney license number"
                  className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="attorneyLicense"
                  className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Attorney License
                </label>
              </div>
            )}

            {/* Timeframe Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Image
                  src="/images/auth/signin/lock.png"
                  alt="Calendar icon"
                  width={23}
                  height={20}
                />
              </div>
              <input
                type="text"
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                placeholder="Enter timeframe"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="timeframe"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Time frame for immigrating to the US?
              </label>
            </div>

            {/* Address Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Image
                  src="/images/auth/signin/location.png"
                  alt="Location icon"
                  width={23}
                  height={20}
                />
              </div>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="address"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Address
              </label>
            </div>

            {/* Country and City Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                >
                  <option value="">Select Country</option>
                  {/* Add country options */}
                </select>
                <label
                  htmlFor="country"
                  className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Country
                </label>
              </div>
              <div className="relative">
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                >
                  <option value="">Select City</option>
                  {/* Add city options */}
                </select>
                <label
                  htmlFor="city"
                  className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  City
                </label>
              </div>
            </div>

            {/* State and Zipcode */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter State"
                  className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="state"
                  className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  State
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  placeholder="Enter Zipcode"
                  className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="zipcode"
                  className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Zipcode
                </label>
              </div>
            </div>

            {/* Broker Selection */}
            <div className="relative">
              <select
                id="broker"
                name="broker"
                value={formData.broker}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label
                htmlFor="broker"
                className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Do you have a Broker?
              </label>
            </div>

            {/* Attorney Selection */}
            <div className="relative">
              <select
                id="attorney"
                name="attorney"
                value={formData.attorney}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label
                htmlFor="attorney"
                className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Do you have an Attorney?
              </label>
            </div>

            {/* Newsletter Selection */}
            <div className="relative">
              <select
                id="newsletter"
                name="newsletter"
                value={formData.newsletter}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-[22px] border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label
                htmlFor="newsletter"
                className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Register for newsletters?
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-[#0A3161] text-white !mt-14 py-4 2xl:py-5 rounded-lg hover:bg-bg-[#102742] transition-colors font-semibold text-2xl"
            >
              Submit
            </button>

            {/* Login Link */}
            <div className="text-center text-[18px] font-medium mt-6 2xl:mt-10 text-[#1B263B]">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-[#1E1E1E] font-medium hover:underline"
              >
                Sign in here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
