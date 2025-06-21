'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Forum() {
  const [selectedPost, setSelectedPost] = useState(null);
  const ForumsData = [
    {
      user: {
        name: 'Johncim',
        avatar: "/images/FeaturedProfessionls/img4.png",
      },
      time: '4 days ago',
      question: 'who have much more details about E2Visa',
      answer: 'The E-2 Visa is a non-immigrant Visa that allows foreigners to enter the U.S. with the purchase of an existing business. The investment must be significantly proportional to the total investment, usually more than half the total value of the enterprise (or, if a new business, an amount normally considered necessary to establish the business).',
      replies: 12,
    },
    {
      user: {
        name: 'Quobyte',
        avatar: "/images/FeaturedProfessionls/img3.png",
      },
      time: '4 days ago',
      question: 'how much money do I need to have available to qualify for the E2 or EB-5 Visa?',
      answer: '',
      replies: 12,
    },
    {
      user: {
        name: 'xys',
        avatar: "/images/FeaturedProfessionls/img1.png",
      },
      time: '4 days ago',
      question: '',
      answer: 'An investment of at least $80,000 to $120,000 is considered substantial. However, it is not fixed and there are consulates who may accept as low as $80,000, while a few demand as much as $500,000. If the investment becomes equal or greater than $500,000, you may be eligible to petition for a permanent immigration status “Green Card” via an EB-5 Visa application.',
      replies: 12,
    },
    {
      user: {
        name: 'Quobyte',
        avatar: "/images/FeaturedProfessionls/img2.png",
      },
      time: '4 days ago',
      question: 'What do I need to invest?',
      answer: '',
      replies: 12,
    },
  ]
  return (
    <>
     {/* Hero Section with Background Image */}
     <div className="relative h-[300px] ">
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/images/forums/image.png"
            alt="Listings Header"
            fill
            className="object-cover"
          />
        </div>
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/50 z-[5]"></div>
        <div className="relative z-[10] container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Forum</h1>
          <div className="flex items-center text-white text-lg">
            <Link href="/" className="hover:text-[#2EC4B6]">Home</Link>
            <span className="mx-2">/</span>
            <span>Forum</span>
          </div>
        </div>
      </div>
      {/* Forum Content Section */}
      <div className="container mx-auto px-4 py-8">
        {ForumsData.map((post, idx) => (
          <Link href={`/forum/${idx}`} key={idx} className="block">
            <div className="bg-white rounded-lg border border-black p-6 mb-6">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
                  <Image src={post.user.avatar} alt={post.user.name} width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <span className="font-semibold text-[#0A3161] mr-2">{post.user.name}</span>
                  <span className="text-[#9E9E9E] text-xs">· {post.time}</span>
                </div>
              </div>
              {post.question && (
                <div className="text-[#40433F] text-sm lg:text-lg font-medium mb-2">{post.question}</div>
              )}
              {post.answer && (
                <div className="text-[#40433F] text-xs lg:text-sm mb-2">{post.answer}</div>
              )}
              <div className="flex cursor-pointer items-center gap-2 mt-3 text-white rounded-md w-fit py-1 px-2 bg-[#40433F80] text-xs">
                <Image src="/images/forums/chat.png" alt='' width={20} height={20} className="object-cover " />
                <span>{post.replies}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
   
    </>
  );
} 