"use client";
import React from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCart();
  const router = useRouter();

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      updateCartQuantity(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      updateCartQuantity(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been processed!", "success");
        router.push("/checkout");
      }
    });
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Your Shopping Cart 🛒</h1>

      <div className="max-w-4xl mx-auto">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md mb-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-6">
                {item.image && (
                  <div className="w-24 h-24 relative flex-shrink-0">
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{item.productName}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-3">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 text-sky-800 font-bold py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                      -
                    </button>
                    <span className="mx-3 text-lg font-medium">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 text-sky-800 font-bold py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-20">
            <h1 className="text-6xl font-bold text-gray-300">Your cart is empty</h1>
            <p className="text-blue-600 text-lg font-bold mt-6">Add some items to your cart to get started!</p>
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Total:</h2>
            <p className="text-2xl font-bold text-gray-800">${calculateTotal().toFixed(2)}</p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;