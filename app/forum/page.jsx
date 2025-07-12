'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function Forum() {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForums = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/forum/list', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        if (res.ok && data.result) {
          setForums(data.result);
        } else {
          setError(data.message || 'Failed to fetch forums.');
        }
      } catch (err) {
        setError('Failed to fetch forums.');
      } finally {
        setLoading(false);
      }
    };
    fetchForums();
  }, []);

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
         {/* What's your Question Input */}
      <div className="relative border rounded-md mb-8 mt-4 min-h-[110px]">
        <label htmlFor="question-input" className="absolute -top-3 left-4 bg-white px-1 text-[#40433F] font-semibold text-sm">
          What's your Question?
        </label>
        <span className="absolute left-4 top-8 text-gray-400">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h4M12 16v-4" />
          </svg>
        </span>
        <textarea
          id="question-input"
          placeholder="Write your question...."
          className="pl-10 pr-36 pt-8 pb-8 w-full border-none rounded-md focus:outline-none focus:ring-0 text-sm min-h-[90px] resize-none bg-transparent"
          style={{ minHeight: '90px' }}
        />
        <div className="absolute right-4 bottom-4 flex gap-2">
          <button className="px-4 py-1 rounded bg-gray-200 text-gray-700 text-sm">Cancel</button>
          <button className="px-4 py-1 rounded bg-[#40433F] text-white text-sm">Post</button>
        </div>
      </div>

        {loading && <LoadingSpinner />}
        {error && <div className="text-center text-red-500 py-8">{error}</div>}
        {!loading && !error && forums.length === 0 && <div className="text-center py-8">No forums found.</div>}
        {!loading && !error && forums.map((forum) => (
          <Link href={`/forum/${forum.id}`} key={forum.id} className="block">
            <div className="bg-white rounded-lg border border-black p-6 mb-6">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
                  <Image src={"/images/FeaturedProfessionls/img4.png"} alt={forum.created_by_name} width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <span className="font-semibold text-[#0A3161] mr-2">{forum.created_by_name}</span>
                  <span className="text-[#9E9E9E] text-xs">· {new Date(forum.created_at).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="text-[#40433F] text-sm lg:text-lg font-medium mb-2">{forum.title}</div>
              <div className="text-[#40433F] text-xs lg:text-sm mb-2">{forum.content}</div>
              <div className="flex cursor-pointer items-center gap-2 mt-3 text-white rounded-md w-fit py-1 px-2 bg-[#40433F80] text-xs">
                <Image src="/images/forums/chat.png" alt='' width={20} height={20} className="object-cover " />
                <span>{forum.comment_count}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
   
    </>
  );
} 