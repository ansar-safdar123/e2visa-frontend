'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { topListings } from '../../components/home/Listing';
import { newListings } from '../../components/home/NewListing';

const BusinessDetail = ({ params }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
    newsletter: false
  });

  const [business, setBusiness] = useState(null);

  useEffect(() => {
    // This is a mock function to simulate fetching business data
    // In a real application, this would be an API call
    const fetchBusinessData = () => {
      // Find the matching business from both listing arrays
      const matchingBusiness = [...topListings, ...newListings].find(
        listing => listing.id === parseInt(params.id)
      );
      
      if (matchingBusiness) {
        // Use all data from the matching business and add any additional details needed
        setBusiness({
          ...matchingBusiness,
          EBITDA: 200000,
          downPayment: matchingBusiness.askingPrice,
          cashFlow: 250000,
          FFE: 100000,
          inventory: {
            included: true,
            value: 9000
          },
          rent: 3600,
          established: 1996,
          employees: {
            fullTime: 1,
            partTime: 8,
            contractors: 'N/A',
            ownerHours: 30
          },
          details: {
            homeBased: false,
            franchise: true,
            relocatable: false,
            lenderPrequalified: false,
            sbaPrequalified: false
          },
          reasonForSale: 'The reason for selling is the Seller would like to pursue other interests.',
          adjustedEBITDA: 200000,
        });
      } else {
        // Handle case where business is not found
        console.error('Business not found');
      }
    };

    fetchBusinessData();
  }, [params.id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  if (!business) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-2xl text-gray-600">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Business Image and Contact Form */}
          <div className="space-y-8">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src={business.image}
                alt={business.title}
                fill
                className="object-cover"
              />
              {business.verified && (
                <div className="absolute top-4 right-4 bg-[#2EC4B6] z-30 text-white text-sm px-3 py-1 rounded-full">
                  Verified
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="bg-[#A4B5D53D] p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#40433F] mb-6">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
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
                    onChange={handleInputChange}
                    placeholder="Ener your name"
                    className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-base border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                  />
                  <label 
                    htmlFor="fullName" 
                    className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F8F9FA] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                  >
                    Full Name
                  </label>
                </div>

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
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone no."
                    className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium  text-base border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                  />
                  <label 
                    htmlFor="phoneNumber" 
                    className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F8F9FA] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                  >
                    Phone Number
                  </label>
                </div>

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
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="pl-12 w-full pr-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-base border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute text-sm text-[#1E1E1E] left-12 bg-[#F8F9FA] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Write your message here"
                    className="w-full px-4 py-4 rounded-lg border text-[#9E9E9E] font-medium text-base border-[#1B263B] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none resize-none"
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute text-sm text-[#1E1E1E] left-4 bg-[#F8F9FA] px-1 -top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                  >
                    Message
                  </label>
                </div>

                <div className="flex ">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="h-4 w-4 mt-1 text-[#2EC4B6] focus:ring-[#2EC4B6] border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-[#9E9E9E]">
                    Yes, send me the Buyer Newsletter for popular businesses, tips, & email promotions.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A3161] text-white py-4 rounded-lg hover:bg-[#102742] transition-colors font-medium text-lg"
                >
                  Send Message
                </button>

               <div>
               <p className="text-xs text-[#9E9E9E] text-center">
                  By clicking the button, you agree to E2Visa's{' '} 
                </p>
                <div className="flex text-xs justify-center items-center gap-2 !pt-1">
                <Link href="/terms" className="text-black underline">
                    Terms of Use
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-black underline">
                    Privacy Notice
                  </Link>
                </div>
               </div>
              </form>
            </div>
          </div>

          {/* Right Column - Business Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-8">
              <h1 className="text-2xl xl:text-4xl font-semibold text-[#40433F] mb-2">{business.title} - {business.id}</h1>
              <p className="text-gray-600">{business.location}</p>
            </div>

            {/* Key Financial Information */}
            <div className="space-y-1 mb-8">
              <div className="flex text-[#40433F] justify-between text-lg xl:text-2xl items-center">
                <span>Asking Price</span>
                <span className="font-semibold">${business.askingPrice.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>Gross Revenue</span>
                <span>${business.grossRevenue.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>EBITDA</span>
                <span>${business.EBITDA.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>FF&E:</span>
                <span>${business.FFE.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#40433F] text-lg xl:text-2xl items-center">
                <span>Cash Flow</span>
                <span>${business.cashFlow.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>Inventory</span>
                <span>${business.inventory.value.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>Rent</span>
                <span>${business.rent.toLocaleString()}/per month</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>Established</span>
                <span>{business.established}</span>
              </div>
            </div>

            {/* Business Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#40433F] mb-4">Business Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{business.description}</p>
            </div>

            {/* <div className="mb-8">
              <h2 className="text-xl font-bold text-[#40433F] mb-4">Business Location</h2>
              <p className="text-gray-600">City: Confidential</p>
              <p className="text-gray-600">State: {business.location}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#40433F] mb-4">Reason for Sale</h2>
              <p className="text-gray-600">{business.reasonForSale}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#40433F] mb-4">Detailed Information</h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Year Established:</span>
                  <span>{business.established}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Home Based:</span>
                  <span>{business.details.homeBased ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Franchise:</span>
                  <span>{business.details.franchise ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Relocatable:</span>
                  <span>{business.details.relocatable ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Lender Prequalified:</span>
                  <span>{business.details.lenderPrequalified ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">SBA Prequalified:</span>
                  <span>{business.details.sbaPrequalified ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Full-Time Employees:</span>
                  <span>{business.employees.fullTime}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Part-Time Employees:</span>
                  <span>{business.employees.partTime}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Contractors:</span>
                  <span>{business.employees.contractors}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Owner Worked Hours/w:</span>
                  <span>{business.employees.ownerHours}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Adjusted EBITDA:</span>
                  <span>${business.adjustedEBITDA.toLocaleString()}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Inventory Included:</span>
                  <span>{business.inventory.included ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Inventory Value:</span>
                  <span>${business.inventory.value.toLocaleString()}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600">Monthly Rent:</span>
                  <span>${business.rent.toLocaleString()}</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail; 