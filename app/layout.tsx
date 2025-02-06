import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import TopNavbar from "./components/TopNavbar";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "E-commerce Hackaton",
  description: "E-commerce Website for Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <CartProvider>
        <TopNavbar/>
        <Navbar/>
        {children}
        <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
