"use client";

import React from 'react';
import ProfessionalDetail from '../../components/professional/ProfessionalDetail';
import { useParams } from 'next/navigation';

// This is our mock data - in a real application, this would come from an API or database
const professionals = [
  {
    id: 1,
    name: "Michael Finley",
    title: "Hedgestone Business Adviser",
    image: "/images/FeaturedProfessionls/img1.png",
    about: `Michael Finley stands out as a business broker for his comprehensive understanding of the entrepreneurial landscape, enhanced by his academic achievements and practical experience. His professionalism, coupled with a genuine commitment to client success, makes him an invaluable partner for those looking to buy or sell a business.

Michael Finley is a proud Marine Corps and Operation Iraqi Freedom (OIF) veteran with a robust foundation in leadership and strategic planning. Although originally from Chicago, Michael has found his paradise in Southwest Florida, where he enjoys life with his wife and two young children. Michael's professional path is underpinned by an impressive array of entrepreneurial ventures, signaling not just a career but a calling to innovate, develop, and lead successful businesses.

Michael's entrepreneurial journey is characterized by the successful founding and development of several businesses. This hands-on experience, combined with an MBA, equips him with a profound understanding of business strategy, financial acumen, and operational excellence. His deep-rooted passion for entrepreneurship is matched by his commitment to lifelong learning and professional development.`,
    email: "hedgestone@gmail.com",
    phone: "+111-44456662",
    expertise: [
      "Business Strategy Development",
      "Financial Analysis",
      "Operational Excellence",
      "Strategic Planning",
      "Business Valuation",
      "Merger & Acquisition Advisory"
    ]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Business Broker",
    image: "/images/FeaturedProfessionls/img2.png",
    about: "Sarah Johnson is a seasoned business broker with over 15 years of experience in facilitating successful business transactions.",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 234-5678",
    expertise: [
      "Business Valuation",
      "Negotiation",
      "Market Analysis",
      "Deal Structuring"
    ]
  },
  {
    id: 3,
    name: "David Chen",
    title: "Business Broker",
    image: "/images/FeaturedProfessionls/img3.png",
    about: "David Chen specializes in technology and retail business acquisitions, with a strong track record of successful deals.",
    email: "david.chen@example.com",
    phone: "+1 (555) 345-6789",
    expertise: [
      "Technology Sector Expertise",
      "Retail Business Valuation",
      "Cross-border Transactions",
      "Due Diligence"
    ]
  },
  {
    id: 4,
    name: "Emily Martinez",
    title: "Business Broker",
    image: "/images/FeaturedProfessionls/img4.png",
    about: "Emily Martinez brings a wealth of experience in family business transitions and succession planning.",
    email: "emily.martinez@example.com",
    phone: "+1 (555) 456-7890",
    expertise: [
      "Family Business Transitions",
      "Succession Planning",
      "Business Valuation",
      "Strategic Advisory"
    ]
  }
];

export default function ProfessionalPage() {
  const params = useParams();
  const professional = professionals.find(p => p.id === parseInt(params.id));

  return <ProfessionalDetail professional={professional} />;
} 