'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { topListings } from '../../components/home/Listing';
import { newListings } from '../../components/home/NewListing';
import { toast } from 'react-toastify';
import BusinessContactForm from './BusinessContactForm';
import LoadingSpinner from '@/app/components/common/LoadingSpinner';

const BusinessDetail = ({ params }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
    newsletter: false
  });

  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const fetchBusiness = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/business-detail/${params.id}`);
        const data = await res.json();
        if (res.ok && data.result) {
          setBusiness(data.result);
          console.log('Business detail:', data.result);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBusiness();
  }, [params.id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    const params = new URLSearchParams({
      professional_id: business.user_id,
      full_name: formData.fullName,
      phone_number: formData.phoneNumber,
      email: formData.email,
      message: formData.message,
    });
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/professionals/send-email-to-professional?${params.toString()}`, {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok && data.message) {
        setFormData({ fullName: '', phoneNumber: '', email: '', message: '', newsletter: false });
        setErrors({});
        toast.success(data.message, { position: 'top-right' });
      } else {
        if (data.errors) {
          if (Array.isArray(data.errors)) {
            data.errors.forEach(err => toast.error(err, { position: 'top-right' }));
          } else if (typeof data.errors === 'object') {
            Object.values(data.errors).flat().forEach(err => toast.error(err, { position: 'top-right' }));
          } else if (typeof data.errors === 'string') {
            toast.error(data.errors, { position: 'top-right' });
          }
        } else if (data.message) {
          toast.error(data.message, { position: 'top-right' });
        } else {
          toast.error('Failed to send message.', { position: 'top-right' });
        }
      }
    } catch {
      toast.error('Failed to send message.', { position: 'top-right' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-2xl text-gray-600"><LoadingSpinner /></div>
    </div>;
  if (!business) return <div>No business found.</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Business Image and Contact Form */}
          <div className="space-y-8">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                  <LoadingSpinner />
                </div>
              )}
              <Image
                fill
                src={
                  business.business_images && business.business_images.length > 0
                    ? business.business_images[0].image_path
                    : '/images/listing/img1.png'
                }
                alt={business.business_name}
                className="w-full h-full object-cover"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
                style={imageLoading ? { visibility: 'hidden' } : {}}
              />
              {business.verified && (
                <div className="absolute top-4 right-4 bg-[#2EC4B6] z-30 text-white text-sm px-3 py-1 rounded-full">
                  Verified
                </div>
              )}
            </div>

            {/* Contact Form */}
            <BusinessContactForm business={business} />
          </div>

          {/* Right Column - Business Information */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm">
            <div className="mb-8">
              <h1 className="text-2xl xl:text-3xl font-semibold text-[#40433F] mb-2">{business.business_name} - {business.id}</h1>
              <p className="text-gray-600">{business.listing_heading}</p>
            </div>

            {/* Key Financial Information */}
            <div className="space-y-1 mb-8">
              <div className="flex text-[#40433F] justify-between text-lg xl:text-2xl items-center">
                <span>Asking Price</span>
                <span className="font-semibold">${business.asking_price.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>Gross Revenue</span>
                <span>${business.gross_revenue.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>EBITDA</span>
                <span>${business.ebitda?.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>FF&E:</span>
                <span>${business.ffe.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#40433F] text-lg xl:text-2xl items-center">
                <span>Cash Flow</span>
                <span>${business.cash_flow.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>Inventory</span>
                <span>${business.inventory?.value?.toLocaleString()}</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>Rent</span>
                <span>${business.rent?.toLocaleString()}/per month</span>
              </div>
              <div className="flex text-[#64748B] justify-between items-center">
                <span>Established</span>
                <span>{business.established}</span>
              </div>
            </div>

            {/* Business Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#40433F] mb-4">Business Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{business.listing_summary}</p>
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