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

 

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className='relative w-full h-[200px] bg-cover bg-center'
        style={{
          backgroundImage: `url('/images/Terms_Condition/image.png')`
        }}
      >
        <div className='absolute inset-0 bg-black/50 z-0'></div>
        <div className='relative h-full flex flex-col items-center justify-center text-center text-white z-10'>
          <h1 className='text-3xl md:text-5xl font-semibold mb-4'>
            Terms & Conditions
          </h1>
          <p className='text-base md:text-lg font-medium'>
            <Link href="/" className="hover:text-[#40433F]  transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Terms & Conditions</span>
          </p>
        </div>
      </div>

      <div className="">
        <div className="bg-white container rounded-lg p-8 md:p-12">
          {/* Personal Statement Section */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Interpretation and Definitions:</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                Interpretation <br /> The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                <br /> Definitions <br /> For the purposes of these Terms and Conditions: <br /> Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority. <br /> Account means a unique account created for You to access our Service or parts of our Service. <br /> Country refers to: Florida, United States <br /> Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to E2 Visa LLC, 3928 Pin Oaks St, Sarasota, FL 34232. <br /> Content refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content. <br /> Device means any device that can access the Service such as a computer, a cellphone or a digital tablet. <br /> Feedback means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service. <br /> Goods refer to the items offered for sale on the Service. <br /> Orders mean a request by You to purchase Goods from Us.
              </p>
            </div>
          </section>

          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Service refers to the Website:</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                Subscriptions refer to the services or access to the Service offered on a subscription basis by the Company to You. <br /> Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. <br /> Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service. <br /> Website refers to E2 Visa, accessible from https://e2visa.com/ <br /> You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable
              </p>
            </div>
          </section>

           <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Acknowledgment:</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. <br /> Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service. <br /> By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. <br /> You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service. <br /> Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </div>
          </section>

           <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Placing Orders for Goods:</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
                By placing an Order for Goods through the Service, You warrant that You are legally capable of entering into binding contracts. <br /> Your Information <br /> If You wish to place an Order for Goods available on the Service, You may be asked to supply certain information relevant to Your Order including, without limitation, Your name, Your email, Your phone number, Your credit card number, the expiration date of Your credit card, Your billing address, and Your shipping information. <br /> You represent and warrant that:
                (i) You have the legal right to use any credit or debit card(s) or other payment method(s) in connection with any Order; and that
                (ii) the information You supply to us is true, correct and complete. <br /> By submitting such information, You grant us the right to provide the information to payment processing third parties for purposes of facilitating the completion of Your Order.
              </p>
            </div>
           </section>

           <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Order Cancellation</h2>
            </div>
            <div className="md:col-span-3">
              
              <p className="text-base text-[#40433F]">
                We reserve the right to refuse or cancel Your Order at any time for certain reasons including but not limited to: <br />
                • Goods availability <br />
                • Errors in the description or prices for Goods <br />
                • Errors in Your Order <br />
                We reserve the right to refuse or cancel Your Order if fraud or an unauthorized or illegal transaction is suspected.
              </p>
              <p className="text-base text-[#40433F]">
                Your Order Cancellation Rights <br />
                Any Goods you purchase can only be returned in accordance with these Terms and Conditions and Our Returns Policy. Our Returns Policy forms a part of these Terms and Conditions. Please read our Returns Policy to learn more about your right to cancel Your Order. Your right to cancel an Order only applies to Goods that are returned in the same condition as You received them. You should also include all of the products instructions, documents and wrappings. Goods that are damaged or not in the same condition as You received them or which are worn simply beyond opening the original packaging will not be refunded. You should therefore take reasonable care of the purchased Goods while they are in Your possession.
              </p>
              <p className="text-base text-[#40433F]">
                We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.
              </p>
              <p className="text-base text-[#40433F]">
                You will not have any right to cancel an Order for the supply of any of the following Goods: <br />
                • The supply of Goods made to Your specifications or clearly personalized. <br />
                • The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over. <br />
                • The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery. <br />
                • The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items. <br />
                • The supply of digital content which is not supplied on a tangible medium if the performance has begun with Your prior express consent and You have acknowledged Your loss of cancellation right.
              </p>
              <p className="text-base text-[#40433F]">
                Availability, Errors and Inaccuracies <br />
                We are constantly updating Our offerings of Goods on the Service. The Goods available on Our Service may be mispriced, described inaccurately, or unavailable, and We may experience delays in updating information regarding our Goods on the Service and in Our advertising on other websites. We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images, specifications, availability, and services. We reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.
                </p>
              </div>
          </section>

          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Prices Policy:</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
              The Company reserves the right to revise its prices at any time prior to accepting an Order. <br /> The prices quoted may be revised by the Company subsequent to accepting an Order in the event of any occurrence affecting delivery caused by government action, variation in customs duties, increased shipping charges, higher foreign exchange costs and any other matter beyond the control of the Company. In that event, You will have the right to cancel Your Order. <br /> Payments <br /> All Goods purchased are subject to a one-time payment. Payment can be made through various payment methods we have available, such as Visa, MasterCard, Affinity Card, American Express cards or online payment methods (PayPal, for example). <br /> Payment cards (credit cards or debit cards) are subject to validation checks and authorization by Your card issuer. If we do not receive the required authorization, We will not be liable for any delay or non-delivery of Your Order.
 <br /> Subscriptions <br /> Subscription period <br /> The Service or some parts of the Service are available only with a paid Subscription. You will be billed in advance on a recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the type of Subscription plan you select when purchasing the Subscription. <br /> At the end of each period, Your Subscription will automatically renew under the exact same conditions unless You cancel it or the Company cancels it. <br /> Subscription cancellations <br /> You may cancel Your Subscription renewal either through Your Account settings page or by contacting the Company. You will not receive a refund for the fees You already paid for Your <br /> current Subscription period and You will be able to access the Service until the end of Your current Subscription period.
 <br /> Billing <br /> You shall provide the Company with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. <br /> Should automatic billing fail to occur for any reason, the Company will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
 <br /> Fee Changes <br /> The Company, in its sole discretion and at any time, may modify the Subscription fees. Any Subscription fee change will become effective at the end of the then-current Subscription period. <br /> The Company will provide You with reasonable prior notice of any change in Subscription fees to give You an opportunity to terminate Your Subscription before such change becomes effective. <br /> Your continued use of the Service after the Subscription fee change comes into effect constitutes Your agreement to pay the modified Subscription fee amount.
 <br /> Refunds <br /> Except when required by law, paid Subscription fees are non-refundable. <br /> Certain refund requests for Subscriptions may be considered by the Company on a case-by-case basis and granted at the sole discretion of the Company.
 <br /> User Accounts <br /> When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service. <br /> You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service. <br /> You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account. <br /> You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or <br /> entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
              </p>
            </div>
          </section>

          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Content:</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
              Your Right to Post Content <br /> Our Service allows You to post Content. You are responsible for the Content that You post to the Service, including its legality, reliability, and appropriateness. <br /> By posting Content to the Service, You grant Us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of Your rights to any Content You submit, post or display on or through the Service and You are responsible for protecting those rights. You agree that this license includes the right for Us to make Your Content available to other users of the Service, who may also use Your Content subject to these Terms. <br /> You represent and warrant that: 
(i) the Content is Yours (You own it) or You have the right to use it and grant Us the rights and license as provided in these Terms, and 
(ii) the posting of Your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
 <br /> Content Restrictions <br /> The Company is not responsible for the content of the Service's users. You expressly understand and agree that You are solely responsible for the Content and for all activity that occurs under your account, whether done so by You or any third person using Your account. <br /> You may not transmit any Content that is unlawful, offensive, upsetting, intended to disgust, threatening, libelous, defamatory, obscene or otherwise objectionable. Examples of such objectionable Content include, but are not limited to, the following: <br /> •  Unlawful or promoting unlawful activity. <br /> •  Defamatory, discriminatory, or mean-spirited content, including references or commentary about religion, race, sexual orientation, gender, national/ethnic origin, or other targeted groups. <br /> •  Spam, machine – or randomly – generated, constituting unauthorized or unsolicited advertising, chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling. <br /> •  Containing or installing any viruses, worms, malware, trojan horses, or other content that is designed or intended to disrupt, damage, or limit the functioning of any software, hardware or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of a third person. <br /> •  Infringing on any proprietary rights of any party, including patent, trademark, trade secret, copyright, right of publicity or other rights. <br /> •  Impersonating any person or entity including the Company and its employees or representatives. <br /> •  Violating the privacy of any third person. <br /> •  False information and features. <br /> The Company reserves the right, but not the obligation, to, in its sole discretion, determine whether or not any Content is appropriate and complies with this Terms, refuse or remove this Content. The Company further reserves the right to make formatting and edits and change the manner of any Content. The Company can also limit or revoke the use of the Service if You post such objectionable Content. As the Company cannot control all content posted by users and/or third parties on the Service, you agree to use the Service at your own risk. You understand that by using the Service You may be exposed to content that You may find offensive, indecent, incorrect or objectionable, and You agree that under no circumstances will the Company be liable in any way for any content, including any errors or omissions in any content, or any loss or damage of any kind incurred as a result of your use of any content. <br /> Content Backups <br /> Although regular backups of Content are performed, the Company does not guarantee there will be no loss or corruption of data. <br /> Corrupt or invalid backup points may be caused by, without limitation, Content that is corrupted prior to being backed up or that changes during the time a backup is performed. <br /> The Company will provide support and attempt to troubleshoot any known or discovered issues that may affect the backups of Content. But You acknowledge that the Company has no liability related to the integrity of Content or the failure to successfully restore Content to a usable state. <br /> You agree to maintain a complete and accurate copy of any Content in a location independent of the Service. <br /> Copyright Policy <br /> Intellectual Property Infringement <br /> We respect the intellectual property rights of others. It is Our policy to respond to any claim that Content posted on the Service infringes a copyright or other intellectual property infringement of any person. <br /> If You are a copyright owner, or authorized on behalf of one, and You believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, You must submit Your notice in writing to the attention of our copyright agent via email at dmca@e2visa.com and include in Your notice a detailed description of the alleged infringement. <br /> You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing Your copyright. <br /> DMCA Notice and DMCA Procedure for Copyright Infringement Claims <br /> You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail): <br /> •  An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest. <br /> •  A description of the copyrighted work that You claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work. <br /> •  Identification of the URL or other specific location on the Service where the material that You claim is infringing is located. <br /> •  Your address, telephone number, and email address. <br /> •  A statement by You that You have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law. <br /> •  A statement by You, made under penalty of perjury, that the above information in Your notice is accurate and that You are the copyright owner or authorized to act on the copyright owner's behalf. <br /> You can contact our copyright agent via email at dmca@e2visa.com. Upon receipt of a notification, the Company will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged content from the Service.

 <br /> 
              </p>
            </div>
          </section>


          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Intellectual Property:</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
              The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors. <br /> The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. <br /> Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company. <br /> Your Feedback to Us <br /> You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such assignment is ineffective, You agree to grant the Company a non-exclusive, <br /> perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without restriction. <br /> Links to Other Websites <br /> Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. <br /> The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services. <br /> We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit. <br /> Termination <br /> We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. <br /> Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.
              </p>
            </div>
          </section>

          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Limitation of Liability:</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-base text-[#40433F]">
Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service. <br /> To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision <br /> of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. <br /> Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law. <br /> "AS IS" and "AS AVAILABLE" Disclaimer <br /> The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected. <br /> Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components. <br /> Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law. <br /> Governing Law <br /> The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws. <br /> Disputes Resolution <br /> If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company. <br /> For European Union (EU) Users <br /> If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in. <br /> United States Federal Government End Use Provisions <br /> If You are a U.S. federal government end user, our Service is a "Commercial Item" as that term is defined at 48 C.F.R. §2.101. <br /> United States Legal Compliance <br /> You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties. <br /> Severability and Waiver <br /> Severability <br /> If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect. <br /> Waiver <br /> Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach. <br /> Translation Interpretation <br /> These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute. <br /> Changes to These Terms and Conditions <br /> We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion. <br /> By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>
            </div>
          </section>

          <section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#40433F]">Conatct Us:</h2>
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
  )
} 