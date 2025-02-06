"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { getCartItems } from "../action/action";
import Swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire("Error!", "Please fill in all fields before proceeding.", "error");
      return;
    }
    

    try {
      // Create a Stripe Checkout Session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          total,
          formValues
        }),
      });

      const session = await response.json();

      // Load Stripe.js
      const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      if (!stripePublishableKey) {
        throw new Error("Stripe Publishable Key is missing. Please check your environment variables.");
      }

      const stripe = await loadStripe(stripePublishableKey);

      if (stripe) {
        // Redirect to Stripe Checkout
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          console.error("Error redirecting to Stripe Checkout:", error);
          Swal.fire("Error!", "Something went wrong with the payment process.", "error");
        }
      }
    } catch (err) {
      console.error("Error creating order:", err);
      Swal.fire("Error!", "Something went wrong while placing your order.", "error");
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50`}>
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-800">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6 shadow-sm">
            <h2 className="text-xl text-gray-800 font-bold">Billing Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <h3 className="font-semibold text-gray-700">Enter Your Name and Address</h3>
              <div>
                <input
                  id="firstName"
                  placeholder="Enter Your First Name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className={`border w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    formErrors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500 mt-1">First name is required.</p>
                )}
              </div>
              <div>
                <input
                  id="lastName"
                  placeholder="Enter Your Last Name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className={`border w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    formErrors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500 mt-1">Last name is required.</p>
                )}
              </div>
              <div>
                <input
                  id="address"
                  placeholder="Enter Your Address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className={`border w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    formErrors.address ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.address && (
                  <p className="text-sm text-red-500 mt-1">Address is required.</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    id="city"
                    placeholder="City"
                    value={formValues.city}
                    onChange={handleInputChange}
                    className={`border w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                      formErrors.city ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.city && (
                    <p className="text-sm text-red-500 mt-1">City is required.</p>
                  )}
                </div>
                <div>
                  <input
                    id="zipCode"
                    placeholder="Zip Code"
                    value={formValues.zipCode}
                    onChange={handleInputChange}
                    className={`border w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                      formErrors.zipCode ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.zipCode && (
                    <p className="text-sm text-red-500 mt-1">Zip Code is required.</p>
                  )}
                </div>
              </div>

              <h3 className="font-semibold text-gray-700">What&apos;s Your Contact Information?</h3>
              <div>
                <input
                  id="email"
                  placeholder="Enter your Email address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={`border w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500 mt-1">Email is required.</p>
                )}
              </div>
              <div>
                <input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className={`border w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    formErrors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-sm text-red-500 mt-1">Phone is required.</p>
                )}
              </div>
              <button
                className="w-full h-12 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors duration-200"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Order Summary</h2>
            <div className="pt-4">
              <p className="text-sm font-bold mb-2 py-2 flex justify-between">
                <span className="text-lg">Subtotal:</span>{" "}
                <span className="font-bold text-gray-600">${subtotal}</span>
              </p>
              <p className="text-sm font-bold mb-2 py-2 flex justify-between">
                <span className="text-lg">Discount:</span>{" "}
                <span className="font-bold text-gray-600">-${discount}</span>
              </p>
              <p className="text-lg font-bold mb-2 border-y py-4 border-t-slate-300 flex justify-between">
                <span className="text-lg">Total:</span>{" "}
                <span className="text-gray-600">${total.toFixed(2)}</span>
              </p>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.productName}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.productName}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
