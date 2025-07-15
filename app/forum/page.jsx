'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { toast } from 'react-toastify';

// Helper to get token (adjust as needed for your auth setup)
const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

export default function Forum() {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const forumsPerPage = 6;
  const totalPages = Math.ceil(forums.length / forumsPerPage);
  const paginatedForums = forums.slice((currentPage - 1) * forumsPerPage, currentPage * forumsPerPage);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getToken());
  }, []);

  useEffect(() => {
    fetchForums();
  }, []);

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

 

  const handlePost = async () => {
    let hasError = false;
    if (!title.trim()) {
      setTitleError('Title is required');
      hasError = true;
    }
    if (!content.trim()) {
      setContentError('Content is required');
      hasError = true;
    }
    if (hasError) return;
    setPosting(true);
    setPostError(null);
    try {
      const token = getToken();
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/forum/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      if (res.ok && data.result) {
        setTitle('');
        setContent('');
        fetchForums();
        toast.success('Forum created successfully!', { position: 'top-right' });
      } else {
        setPostError(data.message || 'Failed to create forum.');
        toast.error(data.message || 'Failed to create forum.', { position: 'top-right' });
      }
    } catch (err) {
      setPostError('Failed to create forum.');
      toast.error('Failed to create forum.', { position: 'top-right' });
    } finally {
      setPosting(false);
    }
  };

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
         {token && (
  <>
    {/* Title Input */}
    <div className="relative border rounded-md mb-4 min-h-[60px]">
      <label htmlFor="title-input" className="absolute -top-3 left-4 bg-white px-1 text-[#40433F] font-semibold text-sm">
        Title
      </label>
      {/* Title Icon */}
      <span className="absolute left-4 top-6 text-gray-400">
        {/* Pencil SVG icon */}
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M16.862 3.487a2.06 2.06 0 0 1 2.915 2.914l-9.193 9.193a2 2 0 0 1-.707.464l-4.243 1.415a.5.5 0 0 1-.632-.632l1.415-4.243a2 2 0 0 1 .464-.707l9.193-9.193z" />
        </svg>
      </span>
      <input
        id="title-input"
        type="text"
        placeholder="Enter forum title..."
        className="pl-10 pr-4 pt-6 pb-2 w-full border-none rounded-md focus:outline-none focus:ring-0 text-sm min-h-[40px] bg-transparent"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
          if (titleError) setTitleError('');
        }}
        maxLength={100}
      />
      {titleError && <div className="text-red-500 text-xs mt-1 ml-2">{titleError}</div>}
    </div>
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
        value={content}
        onChange={e => {
          if (e.target.value.length <= 500) setContent(e.target.value);
          if (contentError) setContentError('');
        }}
        maxLength={500}
      />
      <div className="text-xs text-right pr-4 pb-1" style={{ color: content.length >= 500 ? '#e53e3e' : '#40433F' }}>
        {content.length}/500
      </div>
      {contentError && <div className="text-red-500 text-xs mt-1 ml-2">{contentError}</div>}
      <div className="absolute right-0 -bottom-10 flex gap-2">
        <button
          className="px-4 py-1 rounded bg-gray-200 text-gray-700 text-sm"
          onClick={() => { setTitle(''); setContent(''); setPostError(null); }}
          disabled={posting}
        >
          Cancel
        </button>
        <button
          className="px-4 py-1 rounded bg-[#40433F] cursor-pointer text-white text-sm"
          onClick={handlePost}
          disabled={posting}
        >
          {posting ? 'Posting...' : 'Post'}
        </button>
      </div>
      {postError && <div className="text-red-500 text-sm mt-2 ml-2">{postError}</div>}
    </div>
  </>
)}

        {loading && <LoadingSpinner />}
        {error && <div className="text-center text-red-500 py-8">{error}</div>}
        {!loading && !error && paginatedForums.length === 0 && <div className="text-center py-8">No forums found.</div>}
        
        {!loading && !error && paginatedForums.map((forum) => (
          <Link href={`/forum/${forum.id}`} key={forum.id} className="block mt-20">
            <div className="bg-white rounded-lg border border-black p-6 mb-6">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
                  <Image 
                    src={forum.created_by.image ? forum.created_by.image : "/images/FeaturedProfessionls/img4.png"} 
                    alt={forum.created_by.name} 
                    width={40} 
                    height={40} 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <span className="font-semibold text-[#0A3161] mr-2">{forum.created_by.name}</span>
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
        {/* Pagination Controls */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 text-sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`px-3 py-1 rounded text-sm ${currentPage === i + 1 ? 'bg-[#40433F] text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded bg-gray-200 text-gray-700 text-sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
   
    </>
  );
} 