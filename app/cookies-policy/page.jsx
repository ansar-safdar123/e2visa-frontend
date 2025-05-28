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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className='relative w-full h-[200px] bg-cover bg-center'
        style={{
          backgroundImage: `url('/images/Cookies/cookie.png')`
        }}
      >
        <div className='absolute inset-0 bg-black/50 z-0'></div>
        <div className='relative h-full flex flex-col items-center justify-center text-center text-white z-10'>
          <h1 className='text-3xl md:text-5xl font-semibold mb-4'>
            Cookies Policy
          </h1>
          <p className='text-base md:text-lg font-medium'>
            <Link href="/" className="hover:text-[#40433F]  transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Cookies Policy</span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="">
        <div className="bg-white container rounded-lg p-8 md:p-12">
          {/* Personal Statement Section */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Personal Statement</h2>
            </div>
            <div className="md:col-span-3">
              <p className="leading-relaxed">
                This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.Interpretation and Definitions Interpretation.The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>
          </section>

          {/* Purposes Section */}
           <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <h2 className="text-2xl font-bold text-[#40433F] mb-4">Purposes of this Cookies Policy:</h2>
            <div className="md:col-span-3">

            <div>
              <p className="leading-relaxed">
                Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to E2 Visa LLC, 3928 Pin Oaks St, Sarasota, FL 34232.
              </p>
              <p className="leading-relaxed">
                Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
              </p>
              <p className="leading-relaxed">
                Website refers to E2 Visa, accessible from https://e2visa.com/
              </p>
              <p className="leading-relaxed">
                You means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
              </p>
            </div>
            </div>
          </section>

          {/* Types of Cookies Section */}
           <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Type of Cookies We Use:</h2>
            </div>
            <div className="md:col-span-3">
              <p className="leading-relaxed mb-6">
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser. We use both session and persistent Cookies for the purposes set out below:
              </p>
              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="rounded-lg">
                    <h3 className="font-bold text-[#40433F] mb-2">{cookie.title}</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Type:</span> {cookie.type}</p>
                      <p><span className="font-medium">Administered by:</span> {cookie.admin}</p>
                      <p><span className="font-medium">Purpose:</span> {cookie.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[#40433F] mb-4">Your Choices Regarding Cookies</h3>
                <p className="leading-relaxed">
                  If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time. If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly. If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.
                </p>
              </div>
            </div>
           </section>

           <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Browser</h2>
            </div>
            <div className="md:col-span-3">
              <div className="">
                <p className="leading-relaxed">
                  For the Chrome web browser, please visit this page from Google:
                  <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-[#40433F] hover:underline break-words">
                    https://support.google.com/accounts/answer/32050
                  </a>
                </p>
                <p className="leading-relaxed">
                  For the Internet Explorer web browser, please visit this page from Microsoft:{' '}
                  <a href="http://support.microsoft.com/kb/278835" target="_blank" rel="noopener noreferrer" className="text-[#40433F] hover:underline">
                    http://support.microsoft.com/kb/278835
                  </a>
                </p>
                <p className="leading-relaxed">
                  For the Firefox web browser, please visit this page from Mozilla:{' '}
                  <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer" className="text-[#40433F] hover:underline">
                    https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                  </a>
                </p>
                <p className="leading-relaxed">
                  For the Safari web browser, please visit this page from Apple:{' '}
                  <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#40433F] hover:underline">
                    https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                  </a>
                </p>
                <p className="leading-relaxed">
                  For any other web browser, please visit your web browser's official web pages.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-[#40433F] mb-4">More Information about Cookies</h3>
                <p className="leading-relaxed">
                  You can learn more about cookies here:{' '}
                  <a href="https://www.termsfeed.com/blog/cookies/" target="_blank" rel="noopener noreferrer" className="text-[#40433F] hover:underline">
                    All About Cookies by TermsFeed
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Contact Us</h2>
            </div>
            <div className="md:col-span-3">
            <p className="text-base text-[#40433F]">
              If you have any questions about this Cookies Policy, You can contact us: <br /> By email:  info@e2visa.com By visiting this page on our website: <a href="https://e2visa.com/" target="_blank" rel="noopener noreferrer">https://e2visa.com/</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
} 