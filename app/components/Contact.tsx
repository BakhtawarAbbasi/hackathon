"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactPage: React.FC = () => {
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);

  const handleHelpfulClick = (helpful: boolean) => {
    setIsHelpful(helpful);
  };

  return (
    <div className="w-full h-auto p-4 md:p-8 mb-12 bg-gray-50">
      {/* Header Section */}
      <header className="text-center mb-8 max-w-[90%] md:max-w-[457.33px] mx-auto">
        <h1 className="text-3xl font-bold mb-4">GET HELP</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
        />
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* Left Section (Text Content) */}
        <section className="flex-1 p-4 bg-white rounded-lg shadow-md">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4 text-[#111111]">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          {/* Description */}
          <p className="mb-4">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy. We accept the following payment options:
            <br />
            <span className="font-semibold">
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </span>
          </p>
          <p className="mb-4">
            Nike Members can store multiple debit or credit cards in their
            profile for faster checkout. If you are not already a member,{" "}
            <Link href="/JoinUs" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
              join us today.
            </Link>
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/JoinUs">
              <button className="bg-black text-white transition-all duration-300 ease-in-out hover:text-black hover:bg-[#E5E5E5] hover:shadow-lg hover:-translate-y-1 px-4 py-2 rounded-full">
                JOIN US
              </button>
            </Link>
            <Link href="/Products">
              <button className="bg-black text-white transition-all duration-300 ease-in-out hover:text-black hover:bg-[#E5E5E5] hover:shadow-lg hover:-translate-y-1 px-4 py-2 rounded-full">
                SHOP NIKE
              </button>
            </Link>
          </div>

          {/* FAQs */}
          <h3 className="text-xl font-semibold mb-4">FAQs</h3>
          <ul className="space-y-4">
            <li>
              <strong>Does my card need international purchases enabled?</strong>
              <p>
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
              </p>
              <p>Please note, some banks may charge a small transaction fee for international orders.</p>
            </li>
            <li>
              <strong>Can I pay for my order with multiple methods?</strong>
              <p>
                No, payment for Nike orders can not be split between multiple payment methods.
              </p>
            </li>
            <li>
              <strong>What payment method is accepted for SNKRS orders?</strong>
              <p>
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </li>
            <li>
              <strong>Why do not I see Apple Pay as an option?</strong>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com, you all need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you all need to use Safari to use Apple Pay on Nike.com.
              </p>
              <p>Was this answer Helpful?</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleHelpfulClick(true)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    isHelpful === true
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleHelpfulClick(false)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    isHelpful === false
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  No
                </button>
              </div>
            </li>
            <li>
              <strong className="text-[#757575]">Related</strong>
              <p className="font-bold pl-6">
                WHAT ARE NIKE DELIVERY OPTIONS?
              </p>
              <p className="font-bold pl-6">
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </p>
            </li>
          </ul>
        </section>

        {/* Right Section (Icons and Text) */}
        <aside className="flex flex-col p-4 items-center lg:items-center bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6 text-center ">CONTACT US</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-14">
            {/* Contact Info */}
            <div className="flex flex-col items-center text-center ">
              <Image src="/phone.png" alt="" width={64} height={64} className="hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="font-semibold">000 800 919 0566</p>
                <p>Products & Orders: 24/7</p>
                <p>7 days a week</p>
                <p>Company Info & Enquiries: 7:30-</p>
                <p>16:30, Monday - Friday</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center ">
              <Image src="/msg.png" alt="" width={64} height={64} className="hover:scale-110 transition-transform duration-300" />
              <div>
                <p>24 hours a day</p>
                <p>7 days a week</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center ">
              <Image src="/messenger.png" alt="" width={64} height={64} className="hover:scale-110 transition-transform duration-300" />
              <div>
                <p>We all reply within</p>
                <p>five business days</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center ">
              <Image src="/locationn.png" alt="" width={64} height={64} className="hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="font-semibold">STORE LOCATOR</p>
                <p>Find Nike retail stores near you</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;