// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import { toast } from 'react-toastify';
// // Helper to get token (adjust as needed for your auth setup)
// const getToken = () => {
//   if (typeof window !== 'undefined') {
//     return localStorage.getItem('token');
//   }
//   return null;
// };

// export default function Forum() {
//   const [forums, setForums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [posting, setPosting] = useState(false);
//   const [postError, setPostError] = useState(null);
//   const [titleError, setTitleError] = useState('');
//   const [contentError, setContentError] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const forumsPerPage = 6;
//   const totalPages = Math.ceil(forums.length / forumsPerPage);
//   const paginatedForums = forums?.slice((currentPage - 1) * forumsPerPage, currentPage * forumsPerPage);
//   const [token, setToken] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [loadingSearch, setLoadingSearch] = useState(false);
//   const [errorSearch, setErrorSearch] = useState(null);
//   const BACKEND_STORAGE_URL = process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL;
//   const searchTimeout = useRef(null);
//   const containerRef = useRef(null);
//   const prevPageRef = useRef(currentPage);
//   useEffect(() => {
//     setToken(getToken());
//   }, []);

//   useEffect(() => {
//     fetchForums();
//   }, []);

//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setSearchResults([]);
//       setErrorSearch(null);
//       setLoadingSearch(false);
//       return;
//     }
//     setLoadingSearch(true);
//     setErrorSearch(null);

//     if (searchTimeout.current) clearTimeout(searchTimeout.current);

//     searchTimeout.current = setTimeout(async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/search-forums?query=${encodeURIComponent(searchQuery)}`);
//         const data = await res.json();
//         if (res.ok && data.result) {
//           setSearchResults(data.result);
//         } else {
//           setSearchResults([]);
//           setErrorSearch("No results found.");
//         }
//       } catch (err) {
//         setErrorSearch("Something went wrong.");
//         setSearchResults([]);
//       } finally {
//         setLoadingSearch(false);
//       }
//     }, 400); // 400ms debounce

//     return () => clearTimeout(searchTimeout.current);
//   }, [searchQuery]);

//   const fetchForums = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/forum/list', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const data = await res.json();
//       if (res.ok && data.result) {
//         setForums(data.result);
//       } else {
//         setError(data.message || 'Failed to fetch forums.');
//       }
//     } catch (err) {
//       setError('Failed to fetch forums.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = async () => {
//     setLoadingSearch(true);
//     setErrorSearch(null);
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/search-forums?query=${encodeURIComponent(searchQuery)}`);
//       const data = await res.json();
//       if (res.ok && data.result) {
//         setSearchResults(data.result);
//       } else {
//         setSearchResults([]);
//         setErrorSearch("No results found.");
//       }
//     } catch (err) {
//       setErrorSearch("Something went wrong.");
//       setSearchResults([]);
//     } finally {
//       setLoadingSearch(false);
//     }
//   };



//   const handlePost = async () => {
//     let hasError = false;
//     if (!title.trim()) {
//       setTitleError('Title is required');
//       hasError = true;
//     }
//     if (!content.trim()) {
//       setContentError('Content is required');
//       hasError = true;
//     }
//     if (hasError) return;
//     setPosting(true);
//     setPostError(null);
//     try {
//       const token = getToken();
//       const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/forum/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           ...(token ? { Authorization: `Bearer ${token}` } : {}),
//         },
//         body: JSON.stringify({ title, content }),
//       });
//       const data = await res.json();
//       if (res.ok && data.result) {
//         setTitle('');
//         setContent('');
//         fetchForums();
//         toast.success('Forum created successfully!', { position: 'top-right' });
//       } else {
//         setPostError(data.message || 'Failed to create forum.');
//         toast.error(data.message || 'Failed to create forum.', { position: 'top-right' });
//       }
//     } catch (err) {
//       setPostError('Failed to create forum.');
//       toast.error('Failed to create forum.', { position: 'top-right' });
//     } finally {
//       setPosting(false);
//     }
//   };

//   // Optional: Prevent scroll jump on re-render
//   useLayoutEffect(() => {
//     if (containerRef.current && prevPageRef.current !== currentPage) {
//       // Restore scroll position of pagination container
//       containerRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' });
//       prevPageRef.current = currentPage;
//     }
//   }, [currentPage]);

//   return (
//     <>
//       {/* Hero Section with Background Image */}
//       <div className="relative h-[300px] ">
//         <div className="absolute inset-0 z-[1]">
//           <Image
//             src="/images/forums/image.png"
//             alt="Listings Header"
//             fill
//             className="object-cover"
//           />
//         </div>
//         {/* Black transparent overlay */}
//         <div className="absolute inset-0 bg-black/50 z-[5]"></div>
//         <div className="relative z-[10] container mx-auto px-4 h-full flex flex-col items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Forum</h1>
//           <div className="flex items-center text-white text-lg">
//             <Link href="/" className="hover:text-[#2EC4B6]">Home</Link>
//             <span className="mx-2">/</span>
//             <span>Forum</span>
//           </div>
//         </div>
//       </div>

//       {/* Forum Content Section */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Forum Search Bar */}
//         {paginatedForums.length !== 0 && (
//           <div className="flex items-center gap-4 justify-center mt-10 mb-8">
//             <div className="flex items-center justify-center flex-wrap gap-4">
//               <div className="relative min-w-[300px] lg:min-w-[556px]">
//                 <input
//                   type="text"
//                   placeholder="What are you looking for?"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 lg:py-4 bg-[#1B263B14] rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
//                   onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
//                 />
//                 <div className="absolute inset-y-0 left-3 flex items-center">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//               </div>
//               <button
//                 className="bg-[#0A3161] text-white px-6 py-3 lg:py-4 rounded-lg hover:bg-[#102742]"
//                 onClick={handleSearch}
//               >
//                 Search Now
//               </button>
//             </div>
//           </div>
//         )}
//         {loadingSearch && <LoadingSpinner />}
//         {errorSearch && <div className="text-red-500">{errorSearch}</div>}
//         {/* {searchResults.length > 0 && (
//           <div className="mt-6">
//             {searchResults.map((forum) => (
//               <div key={forum.id} className="p-4 border-b">
//                 <h3 className="font-bold">{forum.title}</h3>
//                 <p>{forum.description}</p>
                
//               </div>
//             ))}
//           </div>
//         )} */}
//         {token && (
//           <>
//             {/* Title Input */}
//             <div className="relative border border-black rounded-md mb-4 min-h-[60px]">
//               <label htmlFor="title-input" className="absolute -top-3 left-4 bg-white px-1 text-[#40433F] font-semibold text-sm">
//                 Title
//               </label>
//               {/* Title Icon */}
//               <span className="absolute left-4 top-6 text-gray-400">
//                 {/* Pencil SVG icon */}
//                 <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path d="M16.862 3.487a2.06 2.06 0 0 1 2.915 2.914l-9.193 9.193a2 2 0 0 1-.707.464l-4.243 1.415a.5.5 0 0 1-.632-.632l1.415-4.243a2 2 0 0 1 .464-.707l9.193-9.193z" />
//                 </svg>
//               </span>
//               <input
//                 id="title-input"
//                 type="text"
//                 placeholder="Enter forum title..."
//                 className="pl-10 pr-4 pt-6 pb-2 w-full border-none bg-white rounded-md focus:outline-none focus:ring-0 text-sm min-h-[40px] bg-transparent"
//                 value={title}
//                 onChange={e => {
//                   setTitle(e.target.value);
//                   if (titleError) setTitleError('');
//                 }}
//                 maxLength={100}
//               />
//               {titleError && <div className="text-red-500 text-xs mt-1 ml-2">{titleError}</div>}
//             </div>
//             {/* What's your Question Input */}
//             <div className="relative border border-black rounded-md mb-8 mt-6 min-h-[110px]">
//               <label htmlFor="question-input" className="absolute -top-3 left-4 bg-white px-1 text-[#40433F] font-semibold text-sm">
//                 What's your Question?
//               </label>
//               <span className="absolute left-4 top-8 text-gray-400">
//                 <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <circle cx="12" cy="12" r="10" />
//                   <path d="M8 12h4M12 16v-4" />
//                 </svg>
//               </span>
//               <textarea
//                 id="question-input"
//                 placeholder="Write your question...."
//                 className="pl-10 pr-36 pt-8 pb-8 w-full border-none rounded-md bg-white focus:outline-none focus:ring-0 text-sm min-h-[90px] resize-none bg-transparent"
//                 style={{ minHeight: '90px' }}
//                 value={content}
//                 onChange={e => {
//                   if (e.target.value.length <= 500) setContent(e.target.value);
//                   if (contentError) setContentError('');
//                 }}
//                 maxLength={500}
//               />
//               <div className="text-xs text-right pr-4 pb-1" style={{ color: content.length >= 500 ? '#e53e3e' : '#40433F' }}>
//                 {content.length}/500
//               </div>
//               {contentError && <div className="text-red-500 text-xs mt-1 ml-2">{contentError}</div>}
//               <div className="absolute right-0 -bottom-10 flex gap-2">
//                 <button
//                   className="px-4 py-1 rounded bg-gray-200 text-gray-700 text-sm"
//                   onClick={() => { setTitle(''); setContent(''); setPostError(null); }}
//                   disabled={posting}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="px-4 py-1 rounded bg-[#0A3161] cursor-pointer text-white text-sm"
//                   onClick={handlePost}
//                   disabled={posting}
//                 >
//                   {posting ? 'Posting...' : 'Post'}
//                 </button>
//               </div>
//               {postError && <div className="text-red-500 text-sm mt-2 ml-2">{postError}</div>}
//             </div>
//           </>
//         )}






//         {loading && <LoadingSpinner />}
//         {error && <div className="text-center text-red-500 py-8">{error}</div>}
//         {/* {!loading && !error && paginatedForums.length === 0 && (
//           <div className="flex flex-col items-center justify-center py-10">
//             <h2 className="text-3xl font-bold text-[#0A3161] mb-2">Oops!</h2>
//             <p className="text-lg text-gray-700">No Record Found</p>
//           </div>
//         )} */}

//         {searchQuery.trim() ? (
//           <>
//             {loadingSearch && <LoadingSpinner />}
//             {errorSearch && <div className="text-red-500">{errorSearch}</div>}
//             {!loadingSearch && !errorSearch && searchResults.length === 0 && (
//               <div className="flex flex-col items-center justify-center py-10">
//                 <h2 className="text-3xl font-bold text-[#0A3161] mb-2">Oops!</h2>
//                 <p className="text-lg text-gray-700">No Record Found</p>
//               </div>
//             )}
//             <div class="pt-2">

//               {!loadingSearch && !errorSearch && searchResults.map((forum) => (
//                 <Link href={`/forum/${forum.id}`} key={forum.id} className="block mt-10">
//                   <div className="bg-white rounded-lg border border-black p-6 mb-6">
//                     <div className="flex items-center mb-2">
//                       <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
//                         {forum.created_by.image && BACKEND_STORAGE_URL ? (
//                           <Image
//                             src={`${BACKEND_STORAGE_URL}/${forum.created_by.image}`}
//                             alt={forum.created_by.name}
//                             width={40}
//                             height={40}
//                             className="object-cover w-full rounded-full h-full"
//                           />
//                         ) : (
//                           <span className="flex items-center justify-center w-full h-full">
//                             <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
//                               <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
//                               <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
//                             </svg>
//                           </span>
//                         )}
//                       </div>
//                       <div>
//                         <span className="font-semibold text-[#0A3161] mr-2">{forum.created_by.name}</span>
//                         <span className="font-semibold text-xs mr-2">{forum.created_by.role}</span>
//                         <span className="text-[#9E9E9E] text-xs">· {new Date(forum.created_at).toLocaleDateString()}</span>
//                       </div>
//                     </div>
//                     <div className="text-[#40433F] text-sm lg:text-lg font-medium mb-2">{forum.title}</div>
//                     <div className="text-[#40433F] text-xs lg:text-sm mb-2">{forum.content}</div>
//                     <div className="flex cursor-pointer items-center gap-2 mt-3 text-white rounded-md w-fit py-1 px-2 bg-[#40433F80] text-xs">
//                       <Image src="/images/forums/chat.png" alt='' width={20} height={20} className="object-cover " />
//                       <span>{forum.comment_count}</span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//           </>
//         ) : (
//           <div class="pt-5">
//             {!loading && !error && paginatedForums.map((forum) => (
//               <Link href={`/forum/${forum.id}`} key={forum.id} className="block mt-4">
//                 <div className="bg-white rounded-lg border border-black p-6 mb-6">
//                   <div className="flex items-center mb-2">
//                     <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
//                       {forum.created_by.image && BACKEND_STORAGE_URL ? (
//                         <Image
//                           src={`${BACKEND_STORAGE_URL}/${forum.created_by.image}`}
//                           alt={forum.created_by.name}
//                           width={40}
//                           height={40}
//                           className="object-cover rounded-full w-full h-full"
//                         />
//                       ) : (
//                         <span className="flex items-center justify-center w-full h-full">
//                           <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
//                             <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
//                             <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
//                           </svg>
//                         </span>
//                       )}
//                     </div>
//                     <div>
//                       <span className="font-semibold text-[#0A3161] mr-2">{forum.created_by.name}</span>
//                       <span className="font-semibold text-xs mr-2">{forum.created_by.role}</span>
//                       <span className="text-[#9E9E9E] text-xs">· {new Date(forum.created_at).toLocaleDateString()}</span>
//                     </div>
//                   </div>
//                   <div className="text-[#40433F] text-sm lg:text-lg font-medium mb-2">{forum.title}</div>
//                   <div className="text-[#40433F] text-xs lg:text-sm mb-2">{forum.content}</div>
//                   <div className="flex cursor-pointer items-center gap-2 mt-3 text-white rounded-md w-fit py-1 px-2 bg-[#40433F80] text-xs">
//                     <Image src="/images/forums/chat.png" alt='' width={20} height={20} className="object-cover " />
//                     <span>{forum.comment_count}</span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
       
//         {!loading && !error && totalPages > 1 && (
//           <div className="flex justify-center items-center gap-2 mt-6">
//             {/* Previous Button */}
//             <button
//               className="px-3 py-1 rounded bg-gray-200 text-gray-700 text-sm disabled:opacity-50"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setCurrentPage((prev) => {
//                   const newPage = Math.max(prev - 1, 1);
//                   window.scrollTo({ top: 500 });
//                   return newPage;
//                 });
//               }}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>

//             {/* Page 1 */}
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 setCurrentPage(1);
//                 window.scrollTo({ top: 500 });
//               }}
//               className={`px-3 py-1 rounded text-sm ${currentPage === 1 ? 'bg-[#40433F] text-white' : 'bg-gray-100 text-gray-700'
//                 }`}
//             >
//               1
//             </button>

//             {/* Ellipsis before current */}
//             {currentPage > 3 && <span className="text-sm">...</span>}

//             {/* Middle Current Page */}
//             {currentPage !== 1 && currentPage !== totalPages && (
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setCurrentPage(currentPage);
//                   window.scrollTo({ top: 500 });
//                 }}
//                 className="px-3 py-1 rounded text-sm bg-[#40433F] text-white"
//               >
//                 {currentPage}
//               </button>
//             )}

//             {/* Ellipsis after current */}
//             {currentPage < totalPages - 2 && <span className="text-sm">...</span>}

//             {/* Last Page */}
//             {totalPages !== 1 && (
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setCurrentPage(totalPages);
//                   window.scrollTo({ top: 500 });
//                 }}
//                 className={`px-3 py-1 rounded text-sm ${currentPage === totalPages ? 'bg-[#40433F] text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//               >
//                 {totalPages}
//               </button>
//             )}

//             {/* Next Button */}
//             <button
//               className="px-3 py-1 rounded bg-gray-200 text-gray-700 text-sm disabled:opacity-50"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setCurrentPage((prev) => {
//                   const newPage = Math.min(prev + 1, totalPages);
//                   window.scrollTo({ top: 500 });
//                   return newPage;
//                 });
//               }}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         )}


//       </div>

//     </>
//   );
// } 

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { toast } from 'react-toastify';

// Helper to get token (adjust as needed for your auth setup)
const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

function Forum() {
  const [forumData, setForumData] = useState(null); // Store entire API response
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [token, setToken] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [errorSearch, setErrorSearch] = useState(null);
  const BACKEND_STORAGE_URL = process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL;
  const searchTimeout = useRef(null);

  useEffect(() => {
    setToken(getToken());
  }, []);

  useEffect(() => {
    fetchForums(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setErrorSearch(null);
      setLoadingSearch(false);
      return;
    }
    setLoadingSearch(true);
    setErrorSearch(null);

    if (searchTimeout.current) clearTimeout(searchTimeout.current);

    searchTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/search-forums?query=${encodeURIComponent(searchQuery)}`);
        const data = await res.json();
        if (res.ok && data.result) {
          setSearchResults(data.result);
        } else {
          setSearchResults([]);
          setErrorSearch("No results found.");
        }
      } catch (err) {
        setErrorSearch("Something went wrong.");
        setSearchResults([]);
      } finally {
        setLoadingSearch(false);
      }
    }, 400); // 400ms debounce

    return () => clearTimeout(searchTimeout.current);
  }, [searchQuery]);

  const fetchForums = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      // Construct URL properly - remove any trailing slashes and ensure proper format
      const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || '';
      const url = `${baseUrl}/api/forum/list?page=${page}`;
      
      console.log('Fetching forums from:', url); // Debug log
      
      const res = await fetch(url, {
        method: 'POST', // Keep as POST as per your original working code
        headers: { 'Content-Type': 'application/json' },
      });
      
      console.log('Response status:', res.status); // Debug log
      
      const data = await res.json();
      console.log('Response data:', data); // Debug log
      
      if (res.ok && data.result) {
        setForumData(data.result); // Store the entire pagination response
      } else {
        setError(data.message || 'Failed to fetch forums.');
      }
    } catch (err) {
      setError('Failed to fetch forums.');
      console.error('Fetch forums error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    setLoadingSearch(true);
    setErrorSearch(null);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/search-forums?query=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      if (res.ok && data.result) {
        setSearchResults(data.result);
      } else {
        setSearchResults([]);
        setErrorSearch("No results found.");
      }
    } catch (err) {
      setErrorSearch("Something went wrong.");
      setSearchResults([]);
    } finally {
      setLoadingSearch(false);
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
        // Refresh current page after creating new forum
        fetchForums(currentPage);
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

  const handlePageChange = (page) => {
    if (page !== currentPage && page >= 1 && page <= (forumData?.last_page || 1)) {
      setCurrentPage(page);
      window.scrollTo({ top: 500 });
    }
  };

  const renderPaginationButton = (page, label, isActive = false, disabled = false) => (
    <button
      key={label}
      onClick={() => !disabled && handlePageChange(page)}
      disabled={disabled}
      className={`px-3 py-1 rounded text-sm ${
        disabled 
          ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500'
          : isActive 
            ? 'bg-[#40433F] text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  const renderPagination = () => {
    if (!forumData || forumData.last_page <= 1) return null;

    const { current_page, last_page } = forumData;
    const pages = [];

    // Previous button
    pages.push(
      renderPaginationButton(
        current_page - 1, 
        'Previous', 
        false, 
        current_page === 1
      )
    );

    // Always show first page
    pages.push(renderPaginationButton(1, '1', current_page === 1));

    // Show ellipsis if current page is far from start
    if (current_page > 3) {
      pages.push(<span key="ellipsis1" className="text-sm px-2">...</span>);
    }

    // Show current page if it's not first or last
    if (current_page !== 1 && current_page !== last_page) {
      pages.push(renderPaginationButton(current_page, current_page.toString(), true));
    }

    // Show ellipsis if current page is far from end
    if (current_page < last_page - 2) {
      pages.push(<span key="ellipsis2" className="text-sm px-2">...</span>);
    }

    // Always show last page if it's different from first
    if (last_page !== 1) {
      pages.push(renderPaginationButton(last_page, last_page.toString(), current_page === last_page));
    }

    // Next button
    pages.push(
      renderPaginationButton(
        current_page + 1, 
        'Next', 
        false, 
        current_page === last_page
      )
    );

    return (
      <div className="flex justify-center items-center gap-2 mt-6">
        {pages}
      </div>
    );
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
        {/* Forum Search Bar */}
        {forumData?.data && forumData.data.length > 0 && (
          <div className="flex items-center gap-4 justify-center mt-10 mb-8">
            <div className="flex items-center justify-center flex-wrap gap-4">
              <div className="relative min-w-[300px] lg:min-w-[556px]">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 lg:py-4 bg-[#1B263B14] rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none"
                  onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
                />
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <button
                className="bg-[#0A3161] text-white px-6 py-3 lg:py-4 rounded-lg hover:bg-[#102742]"
                onClick={handleSearch}
              >
                Search Now
              </button>
            </div>
          </div>
        )}

        {loadingSearch && <LoadingSpinner />}
        {errorSearch && <div className="text-red-500">{errorSearch}</div>}

        {token && (
          <>
            {/* Title Input */}
            <div className="relative border border-black rounded-md mb-4 min-h-[60px]">
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
                className="pl-10 pr-4 pt-6 pb-2 w-full border-none bg-white rounded-md focus:outline-none focus:ring-0 text-sm min-h-[40px] bg-transparent"
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
            <div className="relative border border-black rounded-md mb-8 mt-6 min-h-[110px]">
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
                className="pl-10 pr-36 pt-8 pb-8 w-full border-none rounded-md bg-white focus:outline-none focus:ring-0 text-sm min-h-[90px] resize-none bg-transparent"
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
                  className="px-4 py-1 rounded bg-[#0A3161] cursor-pointer text-white text-sm"
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

        {searchQuery.trim() ? (
          <>
            {loadingSearch && <LoadingSpinner />}
            {errorSearch && <div className="text-red-500">{errorSearch}</div>}
            {!loadingSearch && !errorSearch && searchResults.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10">
                <h2 className="text-3xl font-bold text-[#0A3161] mb-2">Oops!</h2>
                <p className="text-lg text-gray-700">No Record Found</p>
              </div>
            )}
            <div className="pt-2">
              {!loadingSearch && !errorSearch && searchResults.map((forum) => (
                <Link href={`/forum/${forum.id}`} key={forum.id} className="block mt-10">
                  <div className="bg-white rounded-lg border border-black p-6 mb-6">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
                        {forum.created_by.image && BACKEND_STORAGE_URL ? (
                          <Image
                            src={`${BACKEND_STORAGE_URL}/${forum.created_by.image}`}
                            alt={forum.created_by.name}
                            width={40}
                            height={40}
                            className="object-cover w-full rounded-full h-full"
                          />
                        ) : (
                          <span className="flex items-center justify-center w-full h-full">
                            <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                              <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                              <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                            </svg>
                          </span>
                        )}
                      </div>
                      <div>
                        <span className="font-semibold text-[#0A3161] mr-2">{forum.created_by.name}</span>
                        <span className="font-semibold text-xs mr-2">{forum.created_by.role}</span>
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
        ) : (
          <div className="pt-5">
            {!loading && !error && forumData?.data?.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10">
                <h2 className="text-3xl font-bold text-[#0A3161] mb-2">Oops!</h2>
                <p className="text-lg text-gray-700">No Record Found</p>
              </div>
            )}
            
            {!loading && !error && forumData?.data?.map((forum) => (
              <Link href={`/forum/${forum.id}`} key={forum.id} className="block mt-4">
                <div className="bg-white rounded-lg border border-black p-6 mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
                      {forum.created_by.image && BACKEND_STORAGE_URL ? (
                        <Image
                          src={`${BACKEND_STORAGE_URL}/${forum.created_by.image}`}
                          alt={forum.created_by.name}
                          width={40}
                          height={40}
                          className="object-cover rounded-full w-full h-full"
                        />
                      ) : (
                        <span className="flex items-center justify-center w-full h-full">
                          <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                            <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                            <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-[#0A3161] mr-2">{forum.created_by.name}</span>
                      <div className="w-6 h-6 rounded-full overflow-hidden mr-3 border border-gray-200"
                      title={forum.created_by.role} // <-- Tooltip text
                      >
                      {forum.creator_badge_icon && BACKEND_STORAGE_URL ? (
                        <Image
                          src={`${BACKEND_STORAGE_URL}/${forum.creator_badge_icon}`}
                          alt={forum.created_by.name}
                          width={40}
                          height={40}
                          className="object-cover rounded-full w-full h-full"
                        />
                      ) : (
                        <span className="flex items-center justify-center w-full h-full">
                          <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                            <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                            <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                          </svg>
                        </span>
                      )}
                    </div>
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
        )}
       
        {/* Render backend pagination */}
        {renderPagination()}
      </div>
    </>
  );
}

export default Forum;
