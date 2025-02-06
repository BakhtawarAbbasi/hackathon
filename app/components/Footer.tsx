import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black font-['Helvetica Neue'] text-white px-6 py-8 md:px-10 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* column 1 */}
            <h3 className="mb-4 text-white text-lg font-semibold">FIND A STORE</h3>
            <ul>
              <li><a href="#" className="hover:underline leading-6">BECOME A MEMBER</a></li>
              <li><a href="#" className="hover:underline leading-6">SIGN UP FOR EMAIL</a></li>
              <li><a href="#" className="hover:underline leading-6">Send Us Feedback</a></li>
              <li><a href="#" className="hover:underline leading-6">STUDENT DISCOUNTS</a></li>
            </ul>
          </div>
          <div>

            {/* Column 2 */}
            <h3 className="mb-4 text-white text-lg font-semibold">GET HELP</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:underline leading-6">Order Status</a></li>
              <li><a href="#" className="hover:underline leading-6">Delivery</a></li>
              <li><a href="#" className="hover:underline leading-6">Returns</a></li>
              <li><a href="#" className="hover:underline leading-6">Payment Options</a></li>
              <li><a href="/Contact" className="hover:underline leading-6">Contact Us On Nike.com Inquiries</a></li>
              <li><a href="/Contact" className="hover:underline leading-6">Contact Us On All Other Inquiries</a></li>
            </ul>
          </div>
          <div>

            {/* Column 3 */}
            <h3 className="mb-4 text-white text-lg font-semibold">ABOUT NIKE</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:underline leading-6">News</a></li>
              <li><a href="#" className="hover:underline leading-6">Careers</a></li>
              <li><a href="#" className="hover:underline leading-6">Investors</a></li>
              <li><a href="#" className="hover:underline leading-6">Sustainability</a></li>
            </ul>
          </div>

          {/* social link */}
          <div className="flex flex-col justify-between items-start lg:items-end">
            <div className="flex space-x-4">
              <a href="#" className="hover:underline"><Image src="/twitter.png" alt="Twitter" height={24} width={24} /></a>
              <a href="#" className="hover:underline"><Image src="/facebook.png" alt="Facebook" height={24} width={24} /></a>
              <a href="#" className="hover:underline"><Image src="/youtube.png" alt="YouTube" height={24} width={24} /></a>
              <a href="#" className="hover:underline"><Image src="/instagram.png" alt="Instagram" height={24} width={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">&copy; 2023 Nike, Inc. All Rights Reserved</div>
          <div className="flex flex-wrap space-x-4 justify-center md:justify-end">
            <a href="#" className="hover:underline">Guides</a>
            <a href="#" className="hover:underline">Terms of Sale</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Nike Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
