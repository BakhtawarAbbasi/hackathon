import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TopNavbar = () => {
    return (
        <div className="w-full h-10 bg-gray-200 flex justify-between items-center px-8">
            {/* Left Side (Logo) */}
            <div className="flex items-center">
                <Link href="/">
                    <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
                        <Image src="/Toplogo.png" alt="Logo" width={20} height={20} />
                    </div>
                </Link>
            </div>

            {/* Right Side (Links) */}
            <div className="flex items-center space-x-4 text-sm text-gray-800">
                <Link href="/Products" className="hover:text-gray-600 hover:underline transition-colors duration-200">
                    Shop
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/Contact" className="hover:text-gray-600 hover:underline transition-colors duration-200">
                    Help
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/JoinUs" className="hover:text-gray-600 hover:underline transition-colors duration-200">
                    Join Us
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/Login" className="hover:text-gray-600 hover:underline transition-colors duration-200">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default TopNavbar;