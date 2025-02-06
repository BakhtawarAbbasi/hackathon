"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-16 bg-white shadow-sm flex justify-between items-center px-4 lg:px-8 relative">
      {/* Left Side (Logo) */}
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/vector.png" alt="Logo" width={30} height={30} className="hover:opacity-80 transition-opacity" />
          </div>
        </Link>
      </div>

      {/* Center Links for Desktop */}
      <div className="hidden lg:flex items-center space-x-8 text-sm text-gray-800 font-medium">
        <Link href="/" className="hover:text-gray-500 transition-colors duration-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-500 transition-colors duration-200">
          About
        </Link>
        <Link href="/catalog" className="hover:text-gray-500 transition-colors duration-200">
          Catalog
        </Link>
        <Link href="/" className="hover:text-gray-500 transition-colors duration-200">
          Kids
        </Link>
        <Link href="/" className="hover:text-gray-500 transition-colors duration-200">
          Sale
        </Link>
        
      </div>

      {/* Right Side (Icons) */}
      <div className="flex items-center space-x-6">
        {/* Search for Desktop */}
        <div className="hidden sm:flex items-center">
          <Searchbar />
        </div>

        {/* Heart Icon */}
        <Link href="/favorites">
          <div className="relative text-gray-800 hover:text-gray-500 transition-colors duration-200">
            <FaHeart className="text-2xl" />
          </div>
        </Link>

        {/* Cart Icon with Count */}
        <Link href="/cart">
          <div className="relative text-gray-800 hover:text-gray-500 transition-colors duration-200">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </Link>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="block lg:hidden text-gray-800">
          {!isMenuOpen ? (
            <HiMenu className="text-2xl hover:text-gray-500 transition-colors duration-200" />
          ) : (
            <HiX className="text-2xl hover:text-gray-500 transition-colors duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-50">
          <div className="flex flex-col items-start space-y-4 px-6 py-4 text-sm text-gray-800 font-medium">
            <Link href="/" className="hover:text-gray-500 transition-colors duration-200" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-500 transition-colors duration-200" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/catalog" className="hover:text-gray-500 transition-colors duration-200" onClick={toggleMenu}>
              Catalog
            </Link>
            <Link href="/" className="hover:text-gray-500 transition-colors duration-200" onClick={toggleMenu}>
              Kids
            </Link>
            <Link href="/" className="hover:text-gray-500 transition-colors duration-200" onClick={toggleMenu}>
              Sale
            </Link>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;