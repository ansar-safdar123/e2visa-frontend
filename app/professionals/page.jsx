'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LoadingSpinner from '../components/common/LoadingSpinner';

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

function Professionals() {
  const searchParams = useSearchParams();
  const roleId = searchParams.get('role');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [professionals, setProfessionals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const professionalsPerPage = 6;
  const totalPages = Math.ceil(professionals.length / professionalsPerPage);
  const paginatedProfessionals = professionals.slice((currentPage - 1) * professionalsPerPage, currentPage * professionalsPerPage);

  useEffect(() => {
    if (!roleId) return;
    setLoading(true);
    setError(null);
    setCurrentPage(1); // Reset to first page on role change
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/professionals/profession?profession_id=${roleId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        if (data.result) {
          setProfessionals(data.result);
        } else {
          setProfessionals([]);
          setError(data.message || 'No professionals found.');
        }
      })
      .catch(() => setError('Failed to fetch professionals.'))
      .finally(() => setLoading(false));
  }, [roleId]);

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
            <span>Professionals</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#40433F] my-8">{roleId ? 'Professionals' : 'Featured Broker'}</h2>
        {loading && <LoadingSpinner />}
        {error && <div className="text-center text-red-500 py-8">{error}</div>}
        {!loading && !error && roleId && (
          <>
            {paginatedProfessionals.length === 0 &&
              <div className="flex flex-col items-center justify-center pt-4 pb-10">
                <h2 className="text-3xl font-bold text-[#0A3161] mb-2">Oops!</h2>
                <p className="text-lg text-gray-700">No Professionals Found</p>
              </div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mx-28">
              {/* <div key={pro.id} className="bg-white rounded-lg border border-[#40433F] p-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={pro.image || "/images/professionals/image.png"}
                    alt={`${pro.name}'s profile`}
                    width={60}
                    height={60}
                  />
                  <div>
                    <h3 className="font-semibold lg:text-lg text-sm text-gray-800">{pro.name}</h3>
                    <p className="lg:text-sm text-xs text-gray-600">{pro.user_information?.address || ''}</p>
                    <p className="lg:text-sm text-xs text-gray-600">{pro.role}</p>
                  </div>
                </div>
              </div> */}
              {paginatedProfessionals.map((pro) => (
                <Link href={`/professional/${pro.id}`} key={pro.id} className="block relative">
                  <div className="bg-white rounded-lg border border-[#40433F] p-6 hover:shadow-lg transition-shadow">
                    {/* Contact badge */}
                    <span className="absolute top-2 right-2 bg-[#0A3161] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm select-none cursor-pointer">
                      Contact
                    </span>
                    <div className="flex items-center space-x-4">
                      {pro.image ? <div className='w-12 h-12'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL}/${pro.image}` || "/images/blog/1.png"}
                          alt={`${pro.name}'s profile`}
                          width={60}
                          height={60}
                          className='object-cover w-full h-full rounded-full'
                        />
                      </div> :

                        <span className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <svg width="48" height="48" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#CBD5E1" />
                            <path d="M10 10.8333C11.3807 10.8333 12.5 9.71408 12.5 8.33333C12.5 6.95258 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95258 7.5 8.33333C7.5 9.71408 8.61929 10.8333 10 10.8333Z" fill="#64748B" />
                            <path d="M5.83325 15.0001C5.83325 13.1591 7.49221 11.6667 9.99992 11.6667C12.5076 11.6667 14.1666 13.1591 14.1666 15.0001V15.8334H5.83325V15.0001Z" fill="#64748B" />
                          </svg>
                        </span>
                      }
                      <div>
                        <h3 className="font-semibold lg:text-lg text-sm text-gray-800">{pro.name}</h3>
                        <p className="lg:text-sm text-xs text-gray-600">{pro.user_information?.address || ''}</p>
                        <p className="lg:text-sm text-xs text-gray-600">{pro.role}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Pagination Controls */}
            {/* {totalPages > 1 && (
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
            )} */}
            {totalPages > 1 && (
  <div className="flex justify-center items-center gap-2 mt-6">
    {/* Previous Button */}
    <button
      className="px-3 py-1 rounded bg-gray-200 text-gray-700 text-sm disabled:opacity-50"
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    >
      Previous
    </button>

    {/* First Page Button */}
    <button
      onClick={() => setCurrentPage(1)}
      className={`px-3 py-1 rounded text-sm ${
        currentPage === 1 ? 'bg-[#40433F] text-white' : 'bg-gray-100 text-gray-700'
      }`}
    >
      1
    </button>

    {/* Dots before current page if needed */}
    {currentPage > 3 && <span className="text-sm">...</span>}

    {/* Current Page Button if not first or last */}
    {currentPage !== 1 && currentPage !== totalPages && (
      <button
        onClick={() => setCurrentPage(currentPage)}
        className="px-3 py-1 rounded text-sm bg-[#40433F] text-white"
      >
        {currentPage}
      </button>
    )}

    {/* Dots after current page if needed */}
    {currentPage < totalPages - 2 && <span className="text-sm">...</span>}

    {/* Last Page Button */}
    {totalPages !== 1 && (
      <button
        onClick={() => setCurrentPage(totalPages)}
        className={`px-3 py-1 rounded text-sm ${
          currentPage === totalPages ? 'bg-[#40433F] text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        {totalPages}
      </button>
    )}

    {/* Next Button */}
    <button
      className="px-3 py-1 rounded bg-gray-200 text-gray-700 text-sm disabled:opacity-50"
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
)}

          </>
        )}
        {/* Show static brokers if no roleId param */}
        {!roleId && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mx-28">
            {Array(8).fill(brokers[0]).map((broker, index) => (
              <BrokerCard key={index + 2} broker={broker} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProfessionalsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Professionals />
    </Suspense>
  );
} 