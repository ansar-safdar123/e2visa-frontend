"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const COUNTRIES_API_URL = process.env.NEXT_PUBLIC_API_URL + '/api/countries/list';
const STATES_API_URL = process.env.NEXT_PUBLIC_API_URL + '/api/states/list';
const COUNTIES_API_URL = process.env.NEXT_PUBLIC_API_URL + '/api/counties/list';
const REGISTER_API_URL = process.env.NEXT_PUBLIC_API_URL + '/api/register';

const SignUp = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    userType: '',
    userTypeId: '',
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    timeframe: "",
    city: "",
    address: "",
    country: "",
    county: "",
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
  const [countries, setCountries] = useState([]);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [countriesError, setCountriesError] = useState(null);
  const [states, setStates] = useState([]);
  const [statesLoading, setStatesLoading] = useState(false);
  const [statesError, setStatesError] = useState(null);
  const [counties, setCounties] = useState([]);
  const [countiesLoading, setCountiesLoading] = useState(false);
  const [countiesError, setCountiesError] = useState(null);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Get the user type and id from URL in client-side
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const typeId = params.get('typeId');
    if (!type) {
      router.push('/signup-options');
    } else {
      setFormData(prev => ({
        ...prev,
        userType: type,
        userTypeId: typeId || '',
      }));
    }
  }, [router]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountriesLoading(true);
      setCountriesError(null);
      try {
        const res = await fetch(COUNTRIES_API_URL);
        if (!res.ok) throw new Error('Failed to fetch countries');
        const data = await res.json();
        if (data.result && Array.isArray(data.result)) {
          setCountries(data.result);
        } else {
          setCountries([]);
        }
      } catch (err) {
        setCountriesError('Failed to load countries.');
        setCountries([]);
      } finally {
        setCountriesLoading(false);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (!formData.country) {
        setStates([]);
        return;
      }

      // Find the selected country to get its ID
      const selectedCountry = countries.find(country => country.name === formData.country);
      if (!selectedCountry) {
        setStates([]);
        return;
      }

      setStatesLoading(true);
      setStatesError(null);
      try {
        const formDataObj = new FormData();
        formDataObj.append('country_id', selectedCountry.id);

        const res = await fetch(STATES_API_URL, {
          method: 'POST',
          body: formDataObj,
        });

        if (!res.ok) throw new Error('Failed to fetch states');
        const data = await res.json();
        if (data.result && Array.isArray(data.result)) {
          setStates(data.result);
        } else {
          setStates([]);
        }
      } catch (err) {
        setStatesError('Failed to load states.');
        setStates([]);
      } finally {
        setStatesLoading(false);
      }
    };

    fetchStates();
  }, [formData.country, countries]);

  useEffect(() => {
    const fetchCounties = async () => {
      if (!formData.state) {
        setCounties([]);
        return;
      }
      // Find the selected state to get its ID
      const selectedState = states.find(state => state.name === formData.state);
      if (!selectedState) {
        setCounties([]);
        return;
      }
      setCountiesLoading(true);
      setCountiesError(null);
      try {
        const res = await fetch(`${COUNTIES_API_URL}?state_id=${selectedState.id}`, {
          method: 'POST',
        });
        if (!res.ok) throw new Error('Failed to fetch counties');
        const data = await res.json();
        if (data.result && Array.isArray(data.result)) {
          setCounties(data.result);
        } else {
          setCounties([]);
        }
      } catch (err) {
        setCountiesError('Failed to load counties.');
        setCounties([]);
      } finally {
        setCountiesLoading(false);
      }
    };
    fetchCounties();
  }, [formData.state, states]);

  useEffect(() => {
    if (registerError) {
      toast.error(registerError, { position: 'top-right' });
    }
  }, [registerError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors(prev => ({ ...prev, [name]: undefined })); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm your password.";
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.userTypeId) newErrors.userTypeId = "User type is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.county) newErrors.county = "County is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.zipcode.trim()) newErrors.zipcode = "Zipcode is required.";
    if (formData.userType === 'Broker' && !formData.brokerLicense) newErrors.brokerLicense = "Broker license is required.";
    if (formData.userType === 'Attorney' && !formData.attorneyLicense) newErrors.attorneyLicense = "Attorney license is required.";
    if (formData.userType === 'Broker' && formData.broker === 'yes' && !formData.brokerLicense) newErrors.brokerLicense = "Broker license is required.";
    if (formData.userType === 'Attorney' && formData.attorney === 'yes' && !formData.attorneyLicense) newErrors.attorneyLicense = "Attorney license is required.";
    if (formData.userType === 'Buyer' && !formData.broker) newErrors.broker = "Please select if you have a broker.";
    if (formData.userType === 'Buyer' && !formData.attorney) newErrors.attorney = "Please select if you have an attorney.";
    if (!formData.newsletter) newErrors.newsletter = "Please select if you want to register for newsletters.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return; // Don't submit if there are errors
    }
    setRegisterLoading(true);
    setRegisterError(null);
    setRegisterSuccess(null);
    try {
      const form = new FormData();
      form.append('name', formData.fullName);
      form.append('email', formData.email);
      form.append('password', formData.password);
      form.append('password_confirmation', formData.confirmPassword);
      form.append('role_id', formData.userTypeId);
      form.append('phone_number', formData.phone);
      form.append('time_frame_for_immigration', formData.timeframe);
      if (formData.city) form.append('city', formData.city);
      if (formData.address) form.append('address', formData.address);

      // Find selected country and state objects
      const selectedCountry = countries.find(c => c.name === formData.country);
      const selectedState = states.find(s => s.name === formData.state);

      if (selectedCountry) form.append('country_id', selectedCountry.id);
      if (selectedState) form.append('state_id', selectedState.id);
      if (formData.newsletter) {
        form.append(
          'subscribe_for_newsletter',
          formData.newsletter === 'yes' ? '1' : '0'
        );
      }

      if (formData.county) form.append('county', formData.county);
      if (formData.zipcode) form.append('zipcode', formData.zipcode);
      form.append('have_broker', formData.broker === 'yes' ? '1' : '0');
      form.append('have_attorney', formData.attorney === 'yes' ? '1' : '0');
      if (formData.brokerLicense) form.append('broker_license', formData.brokerLicense);
      if (formData.attorneyLicense) form.append('attorney_license', formData.attorneyLicense);

      const res = await fetch(REGISTER_API_URL, {
        method: 'POST',
        body: form,
      });
      const data = await res.json();
      if (res.ok && data.message && data.message.toLowerCase().includes('success')) {
        setRegisterSuccess(data.message);
        toast.success(data.message, { position: 'top-right' });
        setTimeout(() => {
          router.push('/signin');
        }, 1500); // 1.5 seconds delay for user to see the toast
        // Optionally clear form
      } else {
        setRegisterError(data.message || 'Registration failed.');
        if (data.errors) {
          setErrors(prev => ({ ...prev, ...data.errors }));
        }
      }
    } catch (err) {
      setRegisterError('Registration failed.');
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <div className="min-h-[700px] flex items-center justify-center px-4 bg-[url('/images/auth/signin/signinImg.png')] bg-cover bg-center relative">
      <div className="signin-bg rounded-2xl shadow-lg px-4 md:px-12 py-10 md:py-20 w-full my-[50px] max-w-[927px]">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8 2xl:mb-16 text-[#424242]">
          Create Your Free Account

        </h1>
        <div className="flex items-center justify-center w-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-full max-w-[540px]"
          >
            {/* {registerError && (
              <div className="text-red-500 text-center mb-2">{registerError}</div>
            )}
            {registerSuccess && (
              <div className="text-green-600 text-center mb-2">{registerSuccess}</div>
            )} */}
            {/* Full Name Input */}
            <div className={`relative ${errors.fullName && 'pb-3'}`}>
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
                placeholder="Enter your name"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="fullName"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              {errors.fullName && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.fullName}</div>}
            </div>

            {/* Email Input */}
            <div className={`relative ${errors.email && 'pb-3'}`}>
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
                onBlur={() => {
                  const validationErrors = validate();
                  setErrors(prev => ({ ...prev, email: validationErrors.email }));
                }}
                placeholder="Enter your email"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Email <span className="text-red-500">*</span>
              </label>
              {errors.email && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.email}</div>}
            </div>

            {/* Password Input */}
            <div className={`relative ${errors.password && 'pb-3'}`}>
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
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Password <span className="text-red-500">*</span>
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
              {errors.password && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.password}</div>}
            </div>

            {/* Confirm Password Input */}
            <div className={`relative ${errors.confirmPassword && 'pb-3'}`}>
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
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="confirmPassword"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                <Image
                  src={`/images/auth/${showConfirmPassword ? "eye-off" : "eye"
                    }.svg`}
                  alt={showConfirmPassword ? "Hide password" : "Show password"}
                  width={20}
                  height={20}
                />
              </button>
              {errors.confirmPassword && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.confirmPassword}</div>}
            </div>

            {/* Phone Input */}
            <div className={`relative ${(errors.phone || errors.phone_number )&& 'pb-3'}`}>
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
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Phone no <span className="text-red-500">*</span>
              </label>
              {errors.phone && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.phone}</div>}
              {errors.phone_number && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.phone_number}</div>}
            </div>

            {/* Broker License Input - Only shown for broker user type */}
            {formData.userType === 'Broker' && (
             <div className={`relative ${errors.brokerLicense && 'pb-3'}`}>
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
                  className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="brokerLicense"
                  className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Broker License <span className="text-red-500">*</span>
                </label>
                {errors.brokerLicense && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.brokerLicense}</div>}
              </div>
            )}

            {/* Attorney License Input - Only shown for attorney user type */}
            {formData.userType === 'Attorney' && (
            <div className={`relative ${errors.attorneyLicense && 'pb-3'}`}>
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
                  className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="attorneyLicense"
                  className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Attorney License <span className="text-red-500">*</span>
                </label>
                {errors.attorneyLicense && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.attorneyLicense}</div>}
              </div>
            )}

            {/* Timeframe Input */}
            {formData.userType === 'Buyer' && (

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
                  placeholder="Enter your timeframe"
                  className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="timeframe"
                  className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Time frame in months?
                </label>
              </div>
            )}



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
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="address"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Address
              </label>
            </div>

            {/* City Input */}
            <div className={`relative ${errors.city && 'pb-3'}`}>
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Image
                  src="/images/auth/signin/location.png"
                  alt="City icon"
                  width={23}
                  height={20}
                />
              </div>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <label
                htmlFor="city"
                className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                City <span className="text-red-500">*</span>
              </label>
              {errors.city && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.city}</div>}
            </div>

            {/* Country and City Selection */}
            <div className="grid grid-cols-2 gap-4">
            <div className={`relative ${errors.country && 'pb-3'}`}>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                >
                  <option value="">Select Country</option>
                  {countriesLoading && <option disabled>Loading...</option>}
                  {countriesError && <option disabled>{countriesError}</option>}
                  {!countriesLoading && !countriesError && countries.map((country) => (
                    <option key={country.id} value={country.name}>{country.name}</option>
                  ))}
                </select>
                <label
                  htmlFor="country"
                  className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                {errors.country && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.country}</div>}
              </div>
              <div className={`relative ${errors.state && 'pb-3'}`}>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                >
                  <option value="">Select State</option>
                  {statesLoading && <option disabled>Loading...</option>}
                  {statesError && <option disabled>{statesError}</option>}
                  {!statesLoading && !statesError && states.map((state) => (
                    <option key={state.id} value={state.name}>{state.name}</option>
                  ))}
                </select>
                <label
                  htmlFor="state"
                  className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  State <span className="text-red-500">*</span>
                </label>
                {errors.state && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.state}</div>}
              </div>

            </div>

            {/* State and Zipcode */}
            <div className="grid grid-cols-2 gap-4">
            <div className={`relative ${errors.county && 'pb-3'}`}>
                <select
                  id="county"
                  name="county"
                  value={formData.county || ''}
                  onChange={handleChange}
                  className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                >
                  <option value="">Select County</option>
                  {countiesLoading && <option disabled>Loading...</option>}
                  {countiesError && <option disabled>{countiesError}</option>}
                  {!countiesLoading && !countiesError && counties.map((county) => (
                    <option key={county.id} value={county.name}>{county.name}</option>
                  ))}
                </select>
                <label
                  htmlFor="county"
                  className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  County <span className="text-red-500">*</span>
                </label>
                {errors.county && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.county}</div>}
              </div>
              <div className={`relative ${errors.zipcode && 'pb-3'}`}>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  placeholder="Enter country Zipcode"
                  className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                />
                <label
                  htmlFor="zipcode"
                  className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                >
                  Zipcode <span className="text-red-500">*</span>
                </label>
                {errors.zipcode && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.zipcode}</div>}
              </div>
            </div>

            {formData.userType === 'Buyer' && (
              <>
                {/* Broker Selection */}
                <div className={`relative ${errors.broker && 'pb-3'}`}>
                  <select
                    id="broker"
                    name="broker"
                    value={formData.broker}
                    onChange={handleChange}
                    className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <label
                    htmlFor="broker"
                    className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                  >
                    Do you have a Broker? <span className="text-red-500">*</span>
                  </label>
                  {errors.broker && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.broker}</div>}
                </div>

                {/* Attorney Selection */}
                <div className={`relative ${errors.attorney && 'pb-3'}`}>
                  <select
                    id="attorney"
                    name="attorney"
                    value={formData.attorney}
                    onChange={handleChange}
                    className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <label
                    htmlFor="attorney"
                    className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                  >
                    Do you have an Attorney? <span className="text-red-500">*</span>
                  </label>
                  {errors.attorney && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.attorney}</div>}
                </div>
              </>
            )}


            {/* Newsletter Selection */}
            <div className={`relative ${errors.newsletter && 'pb-3'}`}>
              <select
                id="newsletter"
                name="newsletter"
                value={formData.newsletter}
                onChange={handleChange}
                className="w-full pl-4 pr-4 py-4 rounded-lg border text-[#40433F] font-medium text-xs lg:text-sm border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label
                htmlFor="newsletter"
                className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F3F7F9] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Register for newsletters? <span className="text-red-500">*</span>
              </label>
              {errors.newsletter && <div className="text-red-500 text-xs mt-1 absolute -bottom-2">{errors.newsletter}</div>}
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-[#0A3161] text-white !mt-14 py-4 2xl:py-5 rounded-lg hover:bg-bg-[#102742] transition-colors font-semibold text-xs lg:text-sm"
              disabled={registerLoading}
            >
              {registerLoading ? 'Registering...' : 'Submit'}
            </button>

            {/* Login Link */}
            <div className="text-center lg:text-sm text-xs font-medium mt-6 2xl:mt-10 text-[#1B263B]">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-[#1E1E1E] font-medium hover:underline"
              >
                Sign In Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
