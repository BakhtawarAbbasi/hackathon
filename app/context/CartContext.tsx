"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/types/products";

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  getCartCount: () => number;
  clearCart: () => void; 
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Load cart from localStorage when the provider mounts.
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // A helper to keep localStorage in sync.
  const syncLocalStorage = (items: Product[]) => {
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item._id === product._id);
      let newCart: Product[];

      if (existingIndex > -1) {
        // Increase quantity if the product exists.
        newCart = [...prevItems];
        newCart[existingIndex].inventory += 1;
      } else {
        // Add product with initial quantity 1.
        newCart = [...prevItems, { ...product, inventory: 1 }];
      }
      syncLocalStorage(newCart);
      return newCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => {
      const newCart = prevItems.filter((item) => item._id !== id);
      syncLocalStorage(newCart);
      return newCart;
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) => {
      const newCart = prevItems.map((item) =>
        item._id === id ? { ...item, inventory: quantity } : item
      );
      syncLocalStorage(newCart);
      return newCart;
    });
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.inventory, 0);
  };

  // Add clearCart function
  const clearCart = () => {
    setCartItems([]); // Clear the cart items
    localStorage.removeItem("cart"); // Remove cart data from localStorage
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        getCartCount,
        clearCart, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};