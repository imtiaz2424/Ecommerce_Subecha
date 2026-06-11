"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import AppProviders from "../context/AppProviders";

import AuthProvider from "../context/AuthContext";
import CartProvider from "../context/CartContext";
import OrderProvider from "../context/OrderContext";
import WishlistProvider from "../context/WishlistContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Subecha",
  description: "E-Commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>

        <AuthProvider>

          <CartProvider>

            <OrderProvider>

              <WishlistProvider>

                <Navbar />

                <main>{children}</main>

              </WishlistProvider>

            </OrderProvider>

          </CartProvider>

        </AuthProvider>

      </body>
    </html>
  );
}