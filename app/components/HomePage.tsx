
import React from 'react';
import Image from 'next/image';
import ProductSlider from './ProductSlider';
import Gearup from './Gearup';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col p-4 md:p-8">
      {/* Header Section */}
      <div className="bg-[#F5F5F5] text-center mb-0 py-2 h-[58px]">
        <h1 className="text-[15px] font-bold">Hello Nike App</h1>
        <p className="text-[11px] md:text-base">Download the app to access everything Nike. <Link href="/Product" className='font-semibold cursor-pointer underline'> Get Your Great</Link></p>
      </div>

      {/* Hero Section */}
      <div className='flex flex-col gap-[48px]'>
        <Image
          src="/back1.png"
          alt="Nike Air Max Pulse"
       
          width={1344}
          height={700}
          className="object-cover"
        />

        <div className="text-center py-6 bg-[#FFFFFF]">
          <h2 className="text-sm text-[#111111]">First Look</h2>
          <h3 className="text-2xl md:text-4xl font-semibold text-[#111111] mt-2 ">NIKE AIR MAX PULSE</h3>
          <p className="text-xs md:text-base mt-4 mx-auto max-w-lg">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse &mdash; designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex flex-wrap justify-center mt-6 gap-4">
            <button className="bg-[#111111] text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:text-black hover:bg-[#E5E5E5] hover:shadow-lg hover:-translate-y-1">
              Notify Me
            </button>


            <Link href="/Products">
              <button className="bg-[#111111] text-white  transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:text-black hover:bg-[#E5E5E5] px-4 py-2 rounded-full">Shop Air Max</button>
            </Link>
          </div>
        </div>
      </div>


      {/* Product Slider */}
      <div className="container mx-auto">
        <ProductSlider />
      </div>

      {/* Featured Section */}
      <div>
        <h1 className="font-bold text-lg md:text-2xl mb-4">Featured</h1>
        <Image
          src="/back2.png"
          alt="Step into what feels good"
          width={1344}
          height={700}
          className="object-cover"
        />

        <div className="text-center py-6 bg-[#FFFFFF]">
          <h3 className="text-2xl md:text-4xl font-semibold text-[#111111] mt-2">STEP INTO WHAT FEELS GOOD</h3>
          <p className="text-sm md:text-base mt-4 mx-auto max-w-lg">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <button className="bg-[#111111] text-white  transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:text-black hover:bg-[#E5E5E5] px-4 py-2 rounded-full mt-4">Find your shoe</button>
        </div>
      </div>

      {/* Gearup Section */}
      <div className="container mx-auto">
        <Gearup />
      </div>

      {/* Dont Miss Section */}
      <div>
        <h1 className="font-bold text-lg md:text-2xl mb-4">Don&apos;t Miss</h1>
        <Image
          src="/back3.png"
          alt="Fight Essentials"
        
          width={1344}
          height={700}
          className="object-cover"
        />
        <div className="text-center py-6 bg-[#FFFFFF]">
          <h3 className="text-2xl md:text-4xl font-semibold text-[#111111] mt-2">FIGHT ESSENTIAL</h3>
          <p className="text-sm md:text-base mt-4 mx-auto max-w-lg">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <Link href="/Products">
            <button className="bg-[#111111] text-white  transition-all duration-300 ease-in-out hover:text-black hover:bg-[#E5E5E5] hover:shadow-lg hover:-translate-y-1 px-4 py-2 rounded-full mt-4">Shop</button>
          </Link>
        </div>
      </div>

      {/* Image Grid Section */}
      <div>
        <h1 className="font-bold text-lg md:text-2xl my-8">Don&apos;t Miss</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image src="/back4.png" alt="" height={400} width={400} className="rounded-lg object-cover" />
          <Image src="/back5.png" alt="" height={400} width={400} className="rounded-lg object-cover" />
          <Image src="/back6.png" alt="" height={400} width={400} className="rounded-lg object-cover" />
        </div>
      </div>

      {/* Footer Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mt-12 p-4">
        <div>
          <h1 className="font-bold mb-4">Icons</h1>
          <ul className="space-y-2 text-[#757575]">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-4">Shoes</h1>
          <ul className="space-y-2 text-[#757575]">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-4">Clothing</h1>
          <ul className="space-y-2 text-[#757575]">
            <li>All Clothing</li>
            <li>Modest Clothing</li>
            <li>Hoodies &amp; Pullovers</li>
            <li>Shirts &amp; Tops</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-4">Kids</h1>
          <ul className="space-y-2 text-[#757575]">
            <li>Infant &amp; Toddler Shoes</li>
            <li>Kids&apos; Shoes</li>
            <li>Kids&apos; Jordan Shoes</li>
            <li>Kids&apos; Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
