"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface SidebarProps {
  setSelectedCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedCategory }) => {
  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isKidsOpen, setIsKidsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const [selectedGender, setSelectedGender] = useState('');
  const [selectedKids, setSelectedKids] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleGenderChange = (value: string) => {
    setSelectedGender(value === selectedGender ? '' : value);
  };

  const handleKidsChange = (value: string) => {
    setSelectedKids(value === selectedKids ? '' : value);
  };

  const handlePriceChange = (value: string) => {
    setSelectedPrice(value === selectedPrice ? '' : value);
  };

  return (
    <div className="w-full md:w-64 p-2 pl-0 h-screen overflow-y-auto">
      <h2 className="font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li><a href="#" className="block" onClick={() => handleCategoryChange('All')}>All Products</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Shoes')}>Shoes</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Sports Bras')}>Sports Bras</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Tops & T-Shirts')}>Tops & T-Shirts</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Hoodies & Sweatshirts')}>Hoodies & Sweatshirts</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Jackets')}>Jackets</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Trousers & Tights')}>Trousers & Tights</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Shorts')}>Shorts</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Tracksuits')}>Tracksuits</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Jumpsuits & Rompers')}>Jumpsuits & Rompers</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Skirts & Dresses')}>Skirts & Dresses</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Socks')}>Socks</a></li>
        <li><a href="#" className="block" onClick={() => handleCategoryChange('Accessories & Equipment')}>Accessories & Equipment</a></li>
      </ul>

      <div className="mt-6 border-y border-gray-300 p-4 ">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold">Gender</h2>
          <button onClick={() => setIsGenderOpen(!isGenderOpen)}>
            {isGenderOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        {isGenderOpen && (
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedGender === 'Men'} onChange={() => handleGenderChange('Men')} />
                <span>Men</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedGender === 'Women'} onChange={() => handleGenderChange('Women')} />
                <span>Women</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedGender === 'Unisex'} onChange={() => handleGenderChange('Unisex')} />
                <span>Unisex</span>
              </label>
            </li>
          </ul>
        )}
      </div>

      <div className="mt-6 border-y border-gray-300 p-4 ">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold">Kids</h2>
          <button onClick={() => setIsKidsOpen(!isKidsOpen)}>
            {isKidsOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        {isKidsOpen && (
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedKids === 'Boys'} onChange={() => handleKidsChange('Boys')} />
                <span>Boys</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedKids === 'Girls'} onChange={() => handleKidsChange('Girls')} />
                <span>Girls</span>
              </label>
            </li>
          </ul>
        )}
      </div>

      <div className="mt-6 border-y border-gray-300 p-4 ">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold">Shop By Price</h2>
          <button onClick={() => setIsPriceOpen(!isPriceOpen)}>
            {isPriceOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        {isPriceOpen && (
          <ul className="space-y-2">
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedPrice === 'Under $2,500.00'} onChange={() => handlePriceChange('Under $2,500.00')} />
                <span>Under $2,500.00</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedPrice === '$2,501.00 - $5,000.00'} onChange={() => handlePriceChange('$2,501.00 - $5,000.00')} />
                <span>$2,501.00 - $5,000.00</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedPrice === 'Over $5,000.00'} onChange={() => handlePriceChange('Over $5,000.00')} />
                <span>Over $5,000.00</span>
              </label>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
