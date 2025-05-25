'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CookiesPolicy() {
  const cookieTypes = [
    {
      title: "Necessary / Essential Cookies",
      type: "Session Cookies",
      admin: "Us",
      purpose: "These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services."
    },
    {
      title: "Cookies Policy / Notice Acceptance Cookies",
      type: "Persistent Cookies",
      admin: "Us",
      purpose: "These Cookies identify if users have accepted the use of cookies on the Website."
    },
    {
      title: "Functionality Cookies",
      type: "Persistent Cookies",
      admin: "Us",
      purpose: "These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website."
    },
    {
      title: "Tracking and Performance Cookies",
      type: "Persistent Cookies",
      admin: "Third-Parties",
      purpose: "These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new pages, features or new functionality of the Website to see how our users react to them."
    },
    {
      title: "Targeting and Advertising Cookies",
      type: "Persistent Cookies",
      admin: "Third-Parties",
      purpose: "These Cookies track your browsing habits to enable Us to show advertising which is more likely to be of interest to You. These Cookies use information about your browsing history to group You with other users who have similar interests. Based on that information, and with Our permission, third party advertisers can place Cookies to enable them to show adverts which We think will be relevant to your interests while You are on third party websites."
    },
    {
      title: "Social Media Cookies",
      type: "Persistent Cookies",
      admin: "Third-Parties",
      purpose: "In addition to Our own Cookies, We may also use various third party plug-ins from social media networking websites such as Facebook, Instagram, Twitter or Google+ to report usage statistics of the Website and to provide social media features. These third party plug-ins may store Cookies. We do not control these Social Media Cookies. Please refer to the relevant social media networking's website privacy policies for information about their cookies."
    }
  ];

  const browsers = [
    {
      name: "Chrome",
      url: "https://support.google.com/accounts/answer/32050",
      provider: "Google"
    },
    {
      name: "Internet Explorer",
      url: "http://support.microsoft.com/kb/278835",
      provider: "Microsoft"
    },
    {
      name: "Firefox",
      url: "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored",
      provider: "Mozilla"
    },
    {
      name: "Safari",
      url: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
      provider: "Apple"
    }
  ];

  return (
    <div className="min-h-screen bg-[#40433F]">
      {/* Hero Section */}
      <div className='w-full h-[full]'>

      <Image
                  src="/images/Cookies/cookie.png"
                  alt="Search"
                  width={324}
                  height={324}
                  className="cursor-pointer w-full h-full"
                />
                  </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg p-8 md:p-12 max-w-7xl mx-auto">
          {/* Personal Statement Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#40433F] mb-4">Personal Statement</h2>
            <p className="text-gray-700 leading-relaxed">
              This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy. We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
            </p>
          </section>

          {/* Purposes Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#40433F] mb-4">Purposes of this Cookies Policy:</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to E2 Visa LLC, 3928 Pin Oaks St, Sarasota, FL 34232.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Website refers to E2 Visa, accessible from https://e2visa.com/
              </p>
              <p className="text-gray-700 leading-relaxed">
                You means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
              </p>
            </div>
          </section>

          {/* Types of Cookies Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#40433F] mb-4">Type of Cookies We Use:</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser. We use both session and persistent Cookies for the purposes set out below:
            </p>
            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-[#40433F] mb-2">{cookie.title}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Type:</span> {cookie.type}</p>
                    <p><span className="font-medium">Administered by:</span> {cookie.admin}</p>
                    <p><span className="font-medium">Purpose:</span> {cookie.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Browser Instructions Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#40433F] mb-4">Browsing:</h2>
            <div className="space-y-4">
              {browsers.map((browser, index) => (
                <p key={index} className="text-gray-700">
                  For the {browser.name} web browser, please visit this page from {browser.provider}:{' '}
                  <a href={browser.url} target="_blank" rel="noopener noreferrer" className="text-[#2EC4B6] hover:underline">
                    {browser.url}
                  </a>
                </p>
              ))}
              <p className="text-gray-700">
                For any other web browser, please visit your web browser's official web pages.
              </p>
            </div>
          </section>

          {/* More Information Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#40433F] mb-4">More Information about Cookies</h2>
            <p className="text-gray-700">
              You can learn more about cookies here:{' '}
              <a 
                href="https://www.termsfeed.com/blog/cookies/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#2EC4B6] hover:underline"
              >
                All About Cookies by TermsFeed
              </a>
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#40433F] mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Cookies Policy, You can contact us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>By email: <a href="mailto:info@e2visa.com" className="text-[#2EC4B6] hover:underline">info@e2visa.com</a></li>
              <li>By visiting this page on our website: <a href="https://e2visa.com/" className="text-[#2EC4B6] hover:underline">https://e2visa.com/</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 