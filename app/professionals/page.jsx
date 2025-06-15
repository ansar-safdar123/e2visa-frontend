'use client';

import Link from 'next/link';
import Image from 'next/image';

const brokers = [
  {
    name: "Kasey Ward",
    address: "7295 VonBaeden Corner Suite 964 North Arlie, ND 04572-4302 Antigua and Barbuda",
    image: "/images/professionals/image.png"
  },
  // Duplicate broker for demo purposes
  {
    name: "Kasey Ward",
    address: "7295 VonBaeden Corner Suite 964 North Arlie, ND 04572-4302 Antigua and Barbuda",
    image: "/images/professionals/image.png"
  },
];

const BrokerCard = ({ broker, featured = false }) => (
  <div className={`bg-white rounded-lg border border-[#40433F] p-6`}>
    <div className="flex items-center space-x-4">
      <Image
        src={broker.image}
        alt={`${broker.name}'s profile`}
        width={60}
        height={60}
      />
      <div>
        <h3 className="font-semibold lg:text-lg text-sm text-gray-800">{broker.name}</h3>
        <p className="lg:text-sm text-xs text-gray-600">{broker.address}</p>
      </div>
    </div>
  </div>
);

export default function Professionals() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-[1]">
        <Image
            src="/images/findABusiness/bg.png"
            alt="Listings Header"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 z-[5]"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4 max-w-3xl mx-auto leading-tight">Search for a Professional to Help You Find a Business</h1>
          <div className="flex items-center justify-center text-white">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Brokers</span>
          </div>
        </div>
      </div>

      {/* Featured Broker Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#40433F] my-8">Featured Broker</h2>
       

        {/* Regular Brokers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mx-28">
          {Array(8).fill(brokers[0]).map((broker, index) => (
            <BrokerCard key={index + 2} broker={broker} />
          ))}
        </div>
      </div>
    </div>
  );
} 