"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/quires";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Swal from "sweetalert2";
import { useCart } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext"; // Import useWishlist

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Use useWishlist
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent Link from navigating
    addToWishlist(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.productName} added to wishlist`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="mx-8 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        Our Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(showAll ? products : products.slice(0, 8)).map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group transform hover:-translate-y-2"
          >
            <Link href={`/productdetails/${product.slug.current}`}>
              <div className="relative overflow-hidden rounded-md">
                {product.image && (
                  <div className="relative">
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.productName}
                      width={300}
                      height={300}
                      className="w-full object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Heart Icon */}
                    <div
                      className="absolute top-2 right-2 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={(e) => handleAddToWishlist(e, product)}
                    >
                      <FaHeart className="text-red-500" />
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 text-center">
                <h2 className="font-bold text-lg">{product.productName}</h2>
                <p className="mt-2 text-xl font-semibold text-red-500">
                  {product.price ? `$${product.price}` : "Price not available"}
                </p>
                <button
                  className="bg-black text-white w-full p-2 rounded-md mt-2 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to cart 🛒
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {products.length > 8 && (
        <div className="text-center mt-6">
          <button
            className="bg-black text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-600 transition duration-300"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;