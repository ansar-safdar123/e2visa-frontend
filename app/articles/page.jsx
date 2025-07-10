'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/app/components/common/LoadingSpinner';

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
}

const BlogCard = ({ blog }) => (
    <Link href={`/articles/${blog.id}`} className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={blog.banner || "/images/blog/placeholder.png"}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{blog.content ? blog.content.replace(/<[^>]+>/g, '').slice(0, 100) + (blog.content.length > 100 ? '...' : '') : ''}</p>
        <p className="text-xs text-gray-500">{formatDate(blog.active_date)}</p>
        {blog.user && (
          <p className="text-xs text-gray-400 mt-2">By {blog.user.name}</p>
        )}
      </div>
    </Link>
  );

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/blogs-list');
        const data = await res.json();
        if (res.ok && data.result) {
          setBlogs(data.result);
        } else {
          setError(data.message || 'Failed to fetch blogs');
        }
      } catch (err) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
       {/* Hero Section with Background Image */}
       <div className="relative h-[300px] ">
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/images/blog/blog.png"
            alt="Listings Header"
            fill
            className="object-cover"
          />
        </div>
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/50 z-[5]"></div>
        <div className="relative z-[10] container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blogs</h1>
          <div className="flex items-center text-white text-lg">
            <Link href="/" className="hover:text-[#2EC4B6]">Home</Link>
            <span className="mx-2">/</span>
            <span>Articles</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">

       {/* Search Bar */}
          <div className="flex items-center gap-4 justify-center mt-10">
            <div className="flex items-center justify-center flex-wrap gap-4">
            <div className="relative min-w-[300px] lg:min-w-[556px]">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4  py-3 lg:py-4 bg-[#1B263B14] rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
              />
              <div className="absolute inset-y-0 left-3 flex items-center">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            {/* <div className="flex items-center border border-[#40433F] rounded-lg justify-center lg:w-16 w-12 lg:h-16 h-12">
              <Image src="/images/findABusiness/Vector.png" alt="filter" width={20} height={20} />
            </div> */}
            <button
              className="bg-[#0A3161]  text-white px-6 py-3 lg:py-4 rounded-lg hover:bg-[#102742]  "
            >
              Search Now
            </button>
            </div>
          </div>
        <h1 className="text-2xl md:text-3xl xl:mb-16 font-bold text-[#40433F] text-center  mt-16 mb-12">Blog List</h1>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-500 mb-8">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 