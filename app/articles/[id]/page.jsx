'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const blogs = [
  {
    id: 1,
    title: "Buying a Business in the US? Start Here: The E2 Visa Process",
    image: "/images/blog/1.png",
    description: "If you are thinking about buying a business in the United States using the E2 Visa, start here with our step-by-step.....",
    date: "August 04, 2024",
  },
  {
    id: 2,
    title: "Buying a Business in the US? Start Here: The E2 Visa Process",
    image: "/images/blog/2.png",
    description: "If you are thinking about buying a business in the United States using the E2 Visa, start here with our step-by-step.....",
    date: "August 04, 2024",
  },
  {
    id: 3,
    title: "Buying a Business in the US? Start Here: The E2 Visa Process",
    image: "/images/blog/3.png",
    description: "If you are thinking about buying a business in the United States using the E2 Visa, start here with our step-by-step.....",
    date: "August 04, 2024",
  },
  {
    id: 4,
    title: "Buying a Business in the US? Start Here: The E2 Visa Process",
    image: "/images/blog/1.png",
    description: "If you are thinking about buying a business in the United States using the E2 Visa, start here with our step-by-step.....",
    date: "August 04, 2024",
  },
  {
    id: 5,
    title: "Buying a Business in the US? Start Here: The E2 Visa Process",
    image: "/images/blog/2.png",
    description: "If you are thinking about buying a business in the United States using the E2 Visa, start here with our step-by-step.....",
    date: "August 04, 2024",
  },
  {
    id: 6,
    title: "Buying a Business in the US? Start Here: The E2 Visa Process",
    image: "/images/blog/3.png",
    description: "If you are thinking about buying a business in the United States using the E2 Visa, start here with our step-by-step.....",
    date: "August 04, 2024",
  },
];

export default function BlogDetail({ params }) {
  const [formData, setFormData] = useState({
    fullName: '',
    website: '',
    email: '',
    message: '',
    newsletter: false
  });
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    notFound();
  }

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
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[300px] ">
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/images/blog/1.png"
            alt="Listings Header"
            fill
            className="object-cover"
          />
        </div>
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/50 z-[5]"></div>
        <div className="relative z-[10] container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h1 className="text-xl sm:text-2xl md:text-5xl max-w-3xl text-center text-white mb-4">{blog.title}</h1>
          <div className="flex flex-col md:flex-row items-center text-white text-lg">
            <Link href="/" className="hover:text-[#2EC4B6]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/articles" className="hover:text-[#2EC4B6]">Articles</Link>
            <span className="mx-2">/</span>
            <span className='text-center text-sm sm:text-base md:text-lg'>{blog.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">

        <p className='text-[#40433F] text-lg lg:text-2xl mb-8'>
          There are many industries that take an enormous amount of energy and drive from a business owner if the business is to be successful but sometimes there is a limit to how much energy and drive a business owner can muster, especially over a long period of time. If you own a business that qualifies you for the E2 Visa and you feel like you are at the end of your rope, you should know that there are options available.
        </p>
        <div className="relative w-full h-96 mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">{blog.description}</p>
        <p className="text-sm text-gray-500 mb-8">Published on {blog.date}</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          If you are ready to get rid of your business and move on, but not yet ready to leave the United States, one option might be to find a new business to buy in a different industry and sell the one you currently own.
          <br /><br />
          You will need to speak with your immigration attorney about the timing of such a switch, but buying another business that qualifies for the E2 is one way of staying in the U.S., or even staying in your current local area. Since you've already been through the E2 Visa process once before, you know that not all businesses will qualify for the E2, but many do.
          <br /><br />
          You will need to speak with your business broker about why you feel burned out and if your goals for business ownership have changed, as this information will be pivotal in determining what businesses to look for. Ask yourself why you've reached a point where you are considering moving on from your business.
        </p>

        <p className="text-gray-700 leading-relaxed mb-2 font-bold">Do you work too many hours?</p>
        <p className="text-gray-700 leading-relaxed mb-2 font-bold">Is the work itself too intense or too much physical labor?</p>
        <p className="text-gray-700 leading-relaxed mb-4 font-bold">Are there things about your business that continually frustrate you to the point of wanting out?</p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Depending on the issue at hand, you may be able to resolve your frustrations by hiring additional help, by rearranging the duties and responsibilities of yourself and your staff or by delegating parts of your business to outside vendors. Speak with your immigration attorney and business broker before you make any fundamental changes to the business that might affect your E2 status for the next time you need to renew.
          <br /><br />
          If none of the above solutions will solve your issue, then begin your new business search by talking with your business broker about your goals for business ownership, the amount of capital you would like to invest in a new business, about your passions, dream business opportunities and about your work experience. All of these pieces combined will give your broker a good idea of the type of business that would fit the bill.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4 font-bold">
          If you feel like you've had enough of your current E2 business, look at your options before you throw in the towel. Speak to your immigration attorney and business broker about your choices today.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Do you have questions about the options available to business owners with E2 status? Are you curious about what kinds of businesses would be available? <Link href="#" className="text-[#2EC4B6] font-semibold">Ask us!</Link> Please feel free to leave any comments or questions here, and we would be happy to help.
        </p>

        <div className="text-gray-700 mb-5 leading-relaxed">
          <p className="font-bold">Michael Monnot</p>
          <p>941.518.7138</p>
          <p>Mike@InfinityBusinessBrokers.com</p>
        </div>

        {/* Contact Form */}
        <div className="mt-12 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us Your Questions</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#2EC4B6]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#2EC4B6]"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#2EC4B6]"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#0A3161] hover:bg-[#102742] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors w-full"
            >
              Submit Question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 