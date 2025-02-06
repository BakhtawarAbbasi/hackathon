"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Link from "next/link";

const ProductSlider: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    // Removed the unused router
    // const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            const query = `*[_type == "product"]{
                _id,
                productName,
                slug,
                price,
                "image": image.asset->url,
                color,
                description,
                purchases
            }`;
            const data = await client.fetch(query);
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const getCurrentProducts = () => {
        if (products.length === 0) return [];
        const repeatedProducts = [...products, ...products];
        return repeatedProducts.slice(currentIndex, currentIndex + 3);
    };

    return (
        <div className="relative w-full p-4 h-[604px]">
            <div className="flex justify-between mb-4">
                <h2 className="text-[22px] text-[#111111] font-bold">Best of Air Max</h2>
                <div className="flex space-x-2 lg:my-2">
                    <p className="text-center pt-2">shop</p>
                    <button
                        onClick={prevSlide}
                        className="bg-[#E5E5E5] w-10 h-10 text-center p-2 rounded-full shadow-md hover:bg-gray-300 transition-all duration-200 ease-in-out"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-[#E5E5E5] w-10 h-10 text-center p-2 rounded-full shadow-md hover:bg-gray-300 transition-all duration-200 ease-in-out"
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center w-full overflow-hidden">
                {getCurrentProducts().map((product) => (
                    <div
                        key={product._id}
                        className="flex-shrink-0 w-full sm:w-1/3 max-w-[400px] px-2 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg rounded-lg"
                    >
                        <Link href={`/ProductDetails/${product.slug.current}`}>
                            <div className="relative h-[400px] overflow-hidden rounded-lg">
                                {product.image && (
                                    <Image
                                        src={urlFor(product.image).url()}
                                        alt={product.productName}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg transition-all duration-300 hover:scale-[1.03]"
                                    />
                                )}
                            </div>
                            <div className="flex justify-between p-2 mt-2">
                                <h3 className="text-sm text-[#111111] font-bold mt-2">
                                    {product.productName}
                                </h3>
                                <p className="text-sm text-red-600 font-semibold mt-2">
                                    ${product.price.toLocaleString()}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSlider;
