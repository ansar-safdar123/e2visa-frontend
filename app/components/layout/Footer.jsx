"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-bar text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="E2Visa Logo"
                width={62}
                height={57}
              />
              <p className="text-2xl font-medium">E2VISA</p>
            </div>
            <div className="flex gap-3 items-center">
              <h1 className="text-[18px] font-medium">
                All rights reserved &copy; {new Date().getFullYear()} e2visa.
              </h1>
              <Link href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#1B2333] text-white">
        <div className="container mx-auto py-20 px-4">
          <div className="flex justify-between pb-10 gap-3">
            <div className="">
              <div className="flex items-center gap-6">
                <div className="w-[53px] h-[56px] relative">
                  <Image
                    src="/images/footer/arrow.png"
                    alt="E2Visa Logo"
                    fill
                  />
                </div>
                <h1 className="text-[64px] font-normal uppercase tracking-widest ">
                  <span className="block">contact</span>
                </h1>
              </div>
              <h1 className="text-[64px] leading-13 font-normal uppercase tracking-widest ">
                <span className="block">us today</span>
              </h1>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold ">Get a Free consultation</h3>
              <div className="flex gap-3">
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
                    className="rounded-full px-6 py-4 pl-14 bg-[#FFFFFF] font-medium text-[#64748B] outline-none text-sm w-[304px]"
                  />
                </div>
                <button className="bg-[#2EC4B6] text-left rounded-full pl-5 cursor-pointer relative text-white py-2 w-[196px] font-bold text-base ">
                  GET STARTED
                  <span className="w-[44px] h-[44px] flex items-center justify-center absolute top-1/2 p-4 -translate-y-1/2 right-2 bg-white rounded-full">
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
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Section */}
            <div className="space-y-4 ">
              <p className="font-medium text-lg">
                Contact us today to schedule a consultation and discover how we
                can help your business thrive.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold ">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "Cookies Policy",
                  "Terms & Conditions",
                  "Disclaimer",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className=" text-base font-bold"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Contact Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-[40px] h-[40px] flex items-center justify-center p-3 bg-white rounded-full">
                    <Image
                      src="/images/footer/phone.png"
                      alt="Email"
                      width={40}
                      height={40}
                    />
                  </span>
                  <p className=" font-medium">941.518.7138</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-[40px] h-[40px] flex items-center justify-center p-3 bg-white rounded-full">
                    <Image
                      src="/images/footer/emailIcon.png"
                      alt="Email"
                      width={40}
                      height={40}
                    />
                  </span>
                  <p className=" font-medium">info@c2visa.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-[40px] h-[40px] flex items-center justify-center p-3 bg-white rounded-full">
                    <Image
                      src="/images/footer/location.png"
                      alt="Email"
                      width={40}
                      height={40}
                    />
                  </span>
                  <p className=" font-medium">
                    {" "}
                    9040 Town Center Pathway, Lakewood Ranch, FL 34202
                  </p>
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
