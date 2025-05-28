"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  const usefulLinks = [
    { name: "Cookies Policy", href: "/cookies-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Find A Business", href: "/buy-business" },
    { name: "Find A Real Estate", href: "/real-estate" },
    { name: "Find A Professional", href: "/professionals" },
    { name: "Articles", href: "/articles" },
    { name: "Forum", href: "/forum" },
  ];

  return (
    <footer>
      <div className="footer-bar text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between flex-col md:flex-row gap-4 items-center py-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="E2Visa Logo"
                width={62}
                height={57}
              />
              <p className="xl:text-2xl text-base font-medium">E2VISA</p>
            </div>
          
             <div className="space-y-4">
              <h3 className="xl:text-xl text-base font-bold ">Subscribe To Our Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Image
                    src="/images/footer/email.png"
                    alt="Search"
                    width={24}
                    height={24}
                    className="absolute top-1/2 -translate-y-1/2 left-6"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email to get started"
                    className="rounded-lg px-6 py-4 pl-14 bg-[#FFFFFF] font-medium text-[#64748B] outline-none text-sm w-[304px]"
                  />
                </div>
                <button className="bg-[#2EC4B6] text-left rounded-lg pl-5 cursor-pointer relative text-white sm:py-2 py-4 sm:w-[196px] font-bold text-base ">
                  GET STARTED
                  <span className="w-[44px] h-[44px] flex items-center justify-center absolute top-1/2 p-4 -translate-y-1/2 right-2 bg-white rounded-lg">
                    <Image
                      src="/images/footer/upArrow.png"
                      alt="E2Visa Logo"
                      width={24}
                      height={24}
                      className=""
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#40433F] text-white">
        <div className="container mx-auto py-20 px-4">
          <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Contact Section */}
            <div className="space-y-4 ">
              <h1 className="font-normal text-[24px] xl:text-[40px]">Contact us today</h1>
              <p className="font-medium xl:text-lg text-base">
                Contact us today to schedule a consultation and discover how we
                can help your business thrive.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold ">Useful Links</h3>
              <ul className="space-y-3">
                {usefulLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-base font-bold hover:text-gray-300 transition-colors ${
                        isActive(item.href) ? 'text-[#2EC4B6]' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold ">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-base font-bold hover:text-gray-300 transition-colors ${
                        isActive(item.href) ? 'text-[#2EC4B6]' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-full">
                  <Image
                    src="/images/footer/phone.png"
                    alt="Phone"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="font-medium">941.518.7138</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-full">
                  <Image
                    src="/images/footer/emailIcon.png"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="font-medium">info@c2visa.com</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-full">
                  <Image
                    src="/images/footer/location2.png"
                    alt="Location"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="font-medium">
                  9040 Town Center Pathway,<br />
                  Lakewood Ranch, FL 34202
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-full">
                  <Image
                    src="/images/footer/fb.png"
                    alt="Location"
                    width={10}
                    height={10}
                  />
                </div>
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-full">
                  <Image
                    src="/images/footer/X.png"
                    alt="Location"
                    width={14}
                    height={14}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
