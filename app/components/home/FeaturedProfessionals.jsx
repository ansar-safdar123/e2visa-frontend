"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

// Custom Arrow Components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + " custom-slick-arrow custom-slick-next"}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2EC4B6",
        borderRadius: "50%",
        width: 44,
        height: 44,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        border: "none",
        zIndex: 20,
        right: -30,
        transition: "background 0.2s, box-shadow 0.2s",
      }}
      onClick={onClick}
      aria-label="Next"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + " custom-slick-arrow custom-slick-prev"}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2EC4B6",
        borderRadius: "50%",
        width: 44,
        height: 44,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        border: "none",
        zIndex: 20,
        left: -30,
        transition: "background 0.2s, box-shadow 0.2s",
      }}
      onClick={onClick}
      aria-label="Previous"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
  );
}

const FeaturedProfessionals = () => {
  const router = useRouter();
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/professionals/featured-professionals");
        const data = await res.json();
        if (data && data.result) {
          setProfessionals(data.result);
        }
      } catch (error) {
        // Optionally handle error
        setProfessionals([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProfessionals();
  }, []);

  const handleProfessionalClick = (professionalId) => {
    router.push(`/professional/${professionalId}`);
  };

  const settings = {
    dots: false,
    infinite: professionals.length > 4, // Only infinite if enough items
    speed: 500,
    slidesToShow: Math.min(4, professionals.length),
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, professionals.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, professionals.length),
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };

  return (
    <div className="xl:py-[92px] py-10 bg-white">
      <div className="container mx-auto px-4">
          <h1 className="text-center xl:text-3xl text-[#40433F] text-2xl font-bold mb-20">
          Featured Professionals
        </h1>

        <div className="listing-slider">
          <style jsx>{`
            :global(.slick-prev),
            :global(.slick-next) {
              z-index: 10;
              width: 40px;
              height: 40px;
            }
            :global(.slick-prev) {
              left: -20px;
            }
            :global(.slick-next) {
              right: -20px;
            }
            :global(.slick-prev:before),
            :global(.slick-next:before) {
              display: none !important;
            }
            :global(.custom-slick-arrow) {
              opacity: 1 !important;
              background: #2EC4B6 !important;
              color: #fff !important;
              border: none !important;
              box-shadow: 0 2px 8px rgba(0,0,0,0.12);
              transition: background 0.2s, box-shadow 0.2s;
            }
            :global(.custom-slick-arrow:hover) {
              background: #0A3161 !important;
              box-shadow: 0 4px 16px rgba(0,0,0,0.18);
            }
            :global(.custom-slick-next) {
              right: -30px !important;
            }
            :global(.custom-slick-prev) {
              left: -30px !important;
            }
            @media (max-width: 640px) {
              :global(.slick-prev) {
                left: 0;
              }
              :global(.slick-next) {
                right: 0;
              }
              :global(.custom-slick-next) {
                right: 0 !important;
              }
              :global(.custom-slick-prev) {
                left: 0 !important;
              }
            }
            .slick-slide > div {
              min-width: 250px;
            }
            .professionals-row {
              display: flex;
              gap: 24px;
              justify-content: center;
              flex-wrap: wrap;
            }
            .professional-card {
              width: 100%;
              max-width: 300px;
            }
          `}</style>
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : professionals.length === 0 ? (
            <div className="text-center py-10">No professionals found.</div>
          ) : professionals.length > 4 ? (
            <Slider {...settings}>
              {professionals.map((pro, index) => {
                // Prefer user_information.image if available, else pro.image
                let imagePath = pro.user_information && pro.user_information.image
                  ? pro.user_information.image
                  : pro.image
                    ? pro.image
                    : null;
                let imageUrl;
                if (imagePath && !imagePath.startsWith('/images/')) {
                  imageUrl = process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL + '/' + imagePath.replace(/^\/+/, '');
                } else {
                  imageUrl = imagePath || "/images/FeaturedProfessionls/img1.png";
                }
                return (
                  <div
                    key={pro.id}
                    className='professional-card w-full bg-white transition-all px-2 cursor-pointer hover:shadow-lg'
                    onClick={() => handleProfessionalClick(pro.id)}
                  >
                    <div className="w-full h-[376px] relative">
                      <img
                        src={imageUrl}
                        alt={pro.name}
                        className="w-full h-full object-cover rounded-xl"
                        onError={e => { e.target.src = "/images/FeaturedProfessionls/img1.png"; }}
                      />
                      <div className="text-center absolute left-1/2 -translate-x-1/2 w-full bottom-5 text-[15.25px] p-3">
                        <div className="professional-name-tags w-full px-4 py-2 rounded-lg inline-block font-semibold">
                          {pro.name}
                          <br />
                          <span className="text-gray-600 text-xs font-normal">{pro.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <div className="professionals-row">
              {professionals.map((pro, index) => {
                // Prefer user_information.image if available, else pro.image
                let imagePath = pro.user_information && pro.user_information.image
                  ? pro.user_information.image
                  : pro.image
                    ? pro.image
                    : null;
                let imageUrl;
                if (imagePath && !imagePath.startsWith('/images/')) {
                  imageUrl = process.env.NEXT_PUBLIC_BACKEND_STORAGE_URL + '/' + imagePath.replace(/^\/+/, '');
                } else {
                  imageUrl = imagePath || "/images/FeaturedProfessionls/img1.png";
                }
                return (
                  <div
                    key={pro.id}
                    className='professional-card w-full bg-white transition-all px-2 cursor-pointer hover:shadow-lg'
                    onClick={() => handleProfessionalClick(pro.id)}
                  >
                    <div className="w-full h-[376px] relative">
                      <img
                        src={imageUrl}
                        alt={pro.name}
                        className="w-full h-full object-cover rounded-xl"
                        onError={e => { e.target.src = "/images/FeaturedProfessionls/img1.png"; }}
                      />
                      <div className="text-center absolute left-1/2 -translate-x-1/2 w-full bottom-5 text-[15.25px] p-3">
                        <div className="professional-name-tags w-full px-4 py-2 rounded-lg inline-block font-semibold">
                          {pro.name}
                          <br />
                          <span className="text-gray-600 text-xs font-normal">{pro.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProfessionals;
