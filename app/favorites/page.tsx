"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const FavoritesPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Handle Add to Cart
  const handleAddToCart = (e: React.MouseEvent, product: any) => {
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

  // Handle Remove from Wishlist
  const handleRemoveFromWishlist = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    removeFromWishlist(product._id);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.productName} removed from wishlist`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="mx-8 px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
        Your Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <div className="py-20">
          <h1 className="text-6xl font-bold text-gray-300 text-center">
            Your wishlist is empty
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group transform hover:-translate-y-2"
            >
              <Link href={`/productdetails/${product.slug.current}`}>
                <div className="relative overflow-hidden rounded-md">
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.productName}
                      width={300}
                      height={300}
                      className="w-full object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="mt-4 text-center">
                  <h2 className="font-bold text-lg">{product.productName}</h2>
                  <p className="mt-2 text-xl font-semibold text-red-500">
                    {product.price ? `$${product.price}` : "Price not available"}
                  </p>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <button
                className="bg-black text-white w-full p-2 rounded-md mt-2 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to cart 🛒
              </button>

              {/* Remove from Wishlist Button */}
              <button
                className="bg-red-400 text-white w-full p-2 rounded-md mt-2 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 hover:bg-red-500"
                onClick={(e) => handleRemoveFromWishlist(e, product)}
              >
                Remove from Wishlist ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;