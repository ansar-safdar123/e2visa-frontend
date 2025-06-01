'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className='relative w-full h-[200px] bg-cover bg-center'
        style={{
          backgroundImage: `url('/images/privacy-policy/img.jpg')`
        }}
      >
        <div className='absolute inset-0 bg-black/50 z-0'></div>
        <div className='relative h-full flex flex-col items-center justify-center text-center text-white z-10'>
          <h1 className='text-3xl md:text-5xl font-semibold mb-4'>
            Privacy Policy
          </h1>
          <p className='text-base md:text-lg font-medium'>
            <Link href="/" className="hover:text-[#40433F] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>

      <div className="">
        <div className="bg-white container rounded-lg p-8 md:p-12">
          {/* Last Updated Section */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Last Updated</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                April 28, 2022
              </p>
            </div>
          </section>

          {/* Introduction Section */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Introduction</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.<br/><br/>
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Interpretation Section */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Interpretation</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>
          </section>

          {/* Definitions Section */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Definitions</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                For the purposes of this Privacy Policy:<br/><br/>
                • Account means a unique account created for You to access our Service or parts of our Service.<br/><br/>
                • Business, for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.<br/><br/>
                • Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to E2 Visa LLC, 3928 Pin Oaks St, Sarasota, FL 34232.<br/><br/>
                • For the purpose of the GDPR, the Company is the Data Controller.<br/><br/>
                • Consumer, for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.<br/><br/>
                • Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.<br/><br/>
                • Country refers to: Florida, United States<br/><br/>
                • Data Controller, for the purposes of the GDPR (General Data Protection Regulation), refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.<br/><br/>
                • Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.<br/><br/>
                • Do Not Track (DNT) is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.<br/><br/>
                • Personal Data is any information that relates to an identified or identifiable individual.<br/><br/>
                • For the purposes of GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity.<br/><br/>
                • For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.<br/><br/>
                • Sale, for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's personal information to another business or a third party for monetary or other valuable consideration.<br/><br/>
                • Service refers to the Website.<br/><br/>
                • Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are considered Data Processors.<br/><br/>
                • Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.<br/><br/>
                • Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).<br/><br/>
                • Website refers to E2 Visa, accessible from https://e2visa.com/<br/><br/>
                • You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.<br/><br/>
                • Under GDPR (General Data Protection Regulation), You can be referred to as the Data Subject or as the User as you are the individual using the Service.
              </p>
            </div>
          </section>

          {/* Collecting and Using Your Personal Data */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Collecting and Using Your Personal Data</h2>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold text-[#40433F] mb-4">Types of Data Collected</h3>
              
              <h4 className="text-lg font-bold text-[#40433F] mb-2">Personal Data</h4>
              <p className="text-base text-[#40433F] mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:<br/><br/>
                • Email address<br/>
                • First name and last name<br/>
                • Phone number<br/>
                • Address, State, Province, ZIP/Postal code, City<br/>
                • Usage Data
              </p>

              <h4 className="text-lg font-bold text-[#40433F] mb-2">Usage Data</h4>
              <p className="text-base text-[#40433F] mb-4">
                Usage Data is collected automatically when using the Service.<br/><br/>
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.<br/><br/>
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.<br/><br/>
                We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
              </p>

              <h4 className="text-lg font-bold text-[#40433F] mb-2">Information from Third-Party Social Media Services</h4>
              <p className="text-base text-[#40433F] mb-4">
                The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:<br/><br/>
                • Google<br/>
                • Facebook<br/>
                • Twitter<br/>
                • LinkedIn<br/><br/>
                If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.<br/><br/>
                You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
              </p>

              <h4 className="text-lg font-bold text-[#40433F] mb-2">Tracking Technologies and Cookies</h4>
              <p className="text-base text-[#40433F]">
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:<br/><br/>
                • Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.<br/><br/>
                • Flash Cookies. Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies.<br/><br/>
                • Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).<br/><br/>
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
              </p>
            </div>
          </section>

          {/* Use of Your Personal Data */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Use of Your Personal Data</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                The Company may use Personal Data for the following purposes:<br/><br/>
                • To provide and maintain our Service, including to monitor the usage of our Service.<br/><br/>
                • To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.<br/><br/>
                • For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.<br/><br/>
                • To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.<br/><br/>
                • To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.<br/><br/>
                • To manage Your requests: To attend and manage Your requests to Us.<br/><br/>
                • To deliver targeted advertising to You: We may use Your information to develop and display content and advertising (and work with third-party vendors who do so) tailored to Your interests and/or location and to measure its effectiveness.<br/><br/>
                • For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.<br/><br/>
                • For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
              </p>
            </div>
          </section>

          {/* GDPR Privacy */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">GDPR Privacy</h2>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold text-[#40433F] mb-4">Legal Basis for Processing Personal Data under GDPR</h3>
              <p className="text-base text-[#40433F] mb-4">
                We may process Personal Data under the following conditions:<br/><br/>
                • Consent: You have given Your consent for processing Personal Data for one or more specific purposes.<br/><br/>
                • Performance of a contract: Provision of Personal Data is necessary for the performance of an agreement with You and/or for any pre-contractual obligations thereof.<br/><br/>
                • Legal obligations: Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.<br/><br/>
                • Vital interests: Processing Personal Data is necessary in order to protect Your vital interests or of another natural person.<br/><br/>
                • Public interests: Processing Personal Data is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Company.<br/><br/>
                • Legitimate interests: Processing Personal Data is necessary for the purposes of the legitimate interests pursued by the Company.
              </p>

              <h3 className="text-xl font-bold text-[#40433F] mb-4">Your Rights under the GDPR</h3>
              <p className="text-base text-[#40433F]">
                The Company undertakes to respect the confidentiality of Your Personal Data and to guarantee You can exercise Your rights.<br/><br/>
                You have the right under this Privacy Policy, and by law if You are within the EU, to:<br/><br/>
                • Request access to Your Personal Data<br/>
                • Request correction of Your Personal Data<br/>
                • Object to processing of Your Personal Data<br/>
                • Request erasure of Your Personal Data<br/>
                • Request transfer of Your Personal Data<br/>
                • Withdraw Your consent
              </p>
            </div>
          </section>

          {/* CCPA Privacy */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">CCPA Privacy</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                This privacy notice section for California residents supplements the information contained in Our Privacy Policy and it applies solely to all visitors, users, and others who reside in the State of California.<br/><br/>
                Your Rights under the CCPA include:<br/><br/>
                • The right to notice<br/>
                • The right to request<br/>
                • The right to say no to the sale of Personal Data<br/>
                • The right to delete Personal Data<br/>
                • The right not to be discriminated against
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Children's Privacy</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.<br/><br/>
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
              </p>
            </div>
          </section>

          {/* Links to Other Websites */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Links to Other Websites</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.<br/><br/>
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </p>
            </div>
          </section>

          {/* Changes to this Privacy Policy */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Changes to this Privacy Policy</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.<br/><br/>
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.<br/><br/>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </section>

          {/* Contact Us Section */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Contact Us</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                If you have any questions about this Privacy Policy, You can contact us:<br/><br/>
                By email: info@e2visa.com<br/>
                By visiting this page on our website: <Link href="https://e2visa.com/" className="text-[#40433F] hover:underline">https://e2visa.com/</Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 