"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Product {
    src: string;
    alt: string;
    name: string;
    category: string;
    price: string;
}

const menProducts: Product[] = [
    {
        src: "/gear1.png",
        alt: "Jordan Why Not .6 PF",
        name: "Jordan Why Not .6 PF",
        category: "Women's Shoes",
        price: "₹13,995.00",
    },
    {
        src: "/gear2.png",
        alt: "Zion 2 PF",
        name: "Zion 2 PF",
        category: "Nike Dri-FIT ADV TechKnit Ultra",
        price: "₹10,795.00",
    },
    {
        src: "/item7.png",
        alt: "Air Jordan 1 Mid SE",
        name: "Air Jordan 1 Mid SE",
        category: "Nike Dri-FIT Challenger",
        price: "₹12,295.00",
    },
    {
        src: "/item12.png",
        alt: "Air Jordan 4",
        name: "Air Jordan 4",
        category: "Nike Dri-FIT ADV Run Division",
        price: "₹14,295.00",
    },
];

const womenProducts: Product[] = [
    {
        src: "/gear3.png",
        alt: "Air Jordan 5",
        name: "Air Jordan 5",
        category: "Nike Dri-FIT",
        price: "₹15,995.00",
    },
    {
        src: "/gear4.png",
        alt: "Air Jordan 6",
        name: "Air Jordan 6",
        category: "Nike Dri-FIT",
        price: "₹16,995.00",
    },
    {
        src: "/item6.png",
        alt: "Air Jordan 7",
        name: "Air Jordan 7",
        category: "Nike Dri-FIT",
        price: "₹17,995.00",
    },
    {
        src: "/item8.png",
        alt: "Air Jordan 8",
        name: "Air Jordan 8",
        category: "Nike Dri-FIT",
        price: "₹18,995.00",
    },
];

const GearUp: React.FC = () => {
    const [currentIndexMen, setCurrentIndexMen] = useState(0);
    const [currentIndexWomen, setCurrentIndexWomen] = useState(0);

    const nextSlide = (setCurrentIndex: React.Dispatch<React.SetStateAction<number>>, productsLength: number) => {
        setCurrentIndex(prevIndex => (prevIndex + 2) % productsLength);
    };

    const prevSlide = (setCurrentIndex: React.Dispatch<React.SetStateAction<number>>, productsLength: number) => {
        setCurrentIndex(prevIndex => (prevIndex - 2 + productsLength) % productsLength);
    };

    return (
        <div className="relative h-full my-12 ">
            <h1 className="text-2xl font-bold mb-2">Gear Up</h1>

            <div className="flex justify-between space-x-4">
                {/* Men Section */}
                <div className="w-1/2">
                    <div className="flex justify-end items-end mb-4">
                        <div className="flex space-x-2 lg:my-2">
                            <p className="text-center pt-2">Shop Men</p>
                            <button
                                onClick={() => prevSlide(setCurrentIndexMen, menProducts.length)}
                                className="bg-[#E5E5E5] w-10 h-10 text-center p-2 rounded-full shadow-md"
                            >
                                &lt;
                            </button>
                            <button
                                onClick={() => nextSlide(setCurrentIndexMen, menProducts.length)}
                                className="bg-[#E5E5E5] w-10 h-10 text-center p-2 rounded-full shadow-md"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {menProducts.slice(currentIndexMen, currentIndexMen + 2).map((product, index) => (
                            <div key={index} className="flex-shrink-0 w-full max-w-[400px] px-2 transition-transform duration-300">
                                <div className="relative h-[300px]">
                                    <Image
                                        src={product.src}
                                        alt={product.alt}
                                        fill
                                        // objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <h3 className="text-sm text-[#111111] font-bold mt-2">{product.name}</h3>
                                    <p className="text-sm text-[#111111] font-semibold mt-2">{product.price}</p>
                                </div>
                                <p className="text-sm text-[#757575]">{product.category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Women Section */}
                <div className="w-1/2">
                    <div className="flex justify-end items-end mb-4">
                        <div className="flex space-x-2 lg:my-2">
                            <p className="text-center pt-2">Shop Women</p>
                            <button
                                onClick={() => prevSlide(setCurrentIndexWomen, womenProducts.length)}
                                className="bg-[#E5E5E5] w-10 h-10 text-center p-2 rounded-full shadow-md"
                            >
                                &lt;
                            </button>
                            <button
                                onClick={() => nextSlide(setCurrentIndexWomen, womenProducts.length)}
                                className="bg-[#E5E5E5] w-10 h-10 text-center p-2 rounded-full shadow-md"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {womenProducts.slice(currentIndexWomen, currentIndexWomen + 2).map((product, index) => (
                            <div key={index} className="flex-shrink-0 w-full max-w-[400px] px-2 transition-transform duration-300">
                                <div className="relative h-[300px]">
                                    <Image
                                        src={product.src}
                                        alt={product.alt}
                                        // layout="fill"
                                        fill
                                        // objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <h3 className="text-sm text-[#111111] font-bold mt-2">{product.name}</h3>
                                    <p className="text-sm text-[#111111] font-semibold mt-2">{product.price}</p>
                                </div>
                                <p className="text-sm text-[#757575]">{product.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GearUp;
