"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { addToCart } from "@/app/action/action";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Swal from "sweetalert2";
import { Product } from "@/types/products";

export default function ProductPage() {
  // Assert that the params object has a slug property.
  const { slug } = useParams() as { slug: string | string[] };

  // If slug is an array, use  first element; otherwise use slug as a string.
  const slugStr: string = typeof slug === "string" ? slug : slug ? slug[0] : "";

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const getProduct = async (slug: string) => {
    try {
      const data = await client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
          _id,
          productName,
          _type,
          image,
          price,
          description,
          colors,
          inventory, 
          category, 
          "slug": slug.current  
        }`,
        { slug }
      );
      setProduct(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching product:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slugStr) {
      getProduct(slugStr);
    }
  }, [slugStr]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  if (!product)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Product not found
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="rounded-lg max-w-5xl w-full md:flex bg-white shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-100">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-md transform transition duration-500 hover:scale-105"
            />
          )}
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-wide">
            {product.productName}
          </h1>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            {product.description}
          </p>
          <p className="text-xl font-semibold text-red-600 mt-4">
            Price: ${Number(product.price).toFixed(2)}
          </p>
          <p className="text-sm text-gray-800 font-bold mt-2">
            Color: {product.colors}
          </p>
          <p className="text-sm text-gray-800 font-bold mt-2">
            Category: {product.category}
          </p>

          <button
            className="bg-black text-center text-white w-full p-3 rounded-md mt-6 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105"
            onClick={(e) => handleAddToCart(e, product)}
          >
            Add to cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
