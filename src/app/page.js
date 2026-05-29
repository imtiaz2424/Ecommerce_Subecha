"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import { AuthContext } from "../context/AuthContext";

export default function Home() {

  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navbar */}

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-4"
          >

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">

              <span className="text-white text-3xl font-black">
                S
              </span>

            </div>

            <div>

              <h1 className="text-3xl font-black tracking-tight text-gray-900">
                Subecha
              </h1>

              <p className="text-sm text-gray-500">
                Premium Shopping
              </p>

            </div>

          </Link>

          {/* Menu */}

          <div className="hidden md:flex items-center gap-10 text-lg font-semibold">

            <Link
              href="/"
              className="hover:text-violet-600 transition"
            >
              Home
            </Link>

            <Link
              href="/cart"
              className="hover:text-violet-600 transition"
            >
              Cart ({cart.length})
            </Link>

            {user ? (

              <Link
                href="/profile"
                className="hover:text-violet-600 transition"
              >
                Profile
              </Link>

            ) : (

              <Link
                href="/login"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-2xl hover:scale-105 transition shadow-lg"
              >
                Login
              </Link>

            )}

          </div>

        </div>

      </nav>

      {/* Hero Section */}

        <section className="relative overflow-hidden bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 text-white">

          {/* Blur Effects */}

          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 opacity-20 blur-[120px]" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 opacity-20 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-16 items-center relative z-10">

            <div>

              <p className="uppercase tracking-[8px] text-violet-200 mb-6">
                Best Online Shop
              </p>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

                Shop Smart
                <br />

                With Subecha

              </h1>

              <p className="text-xl text-violet-100 mb-10 leading-relaxed">

                Premium products, modern design,
                secure shopping and lightning fast
                delivery all over Bangladesh.

              </p>

              <div className="flex gap-5">

                <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition shadow-xl">
                  Shop Now
                </button>

                <button className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition">
                  Explore
                </button>

              </div>

            </div>

            {/* Hero Image */}

            <div className="relative">

              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />

              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
                alt="Fashion"
                className="relative rounded-[40px] shadow-2xl h-[650px] w-full object-cover border border-white/20"
              />

            </div>

          </div>

        </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-10 rounded-3xl shadow-md text-center">

            <h3 className="text-2xl font-bold mb-4">
              Fast Delivery
            </h3>

            <p className="text-gray-600">
              Super fast delivery all over Bangladesh.
            </p>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md text-center">

            <h3 className="text-2xl font-bold mb-4">
              Premium Quality
            </h3>

            <p className="text-gray-600">
              Best premium quality products for everyone.
            </p>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md text-center">

            <h3 className="text-2xl font-bold mb-4">
              Secure Payment
            </h3>

            <p className="text-gray-600">
              Safe and secure payment system.
            </p>

          </div>

        </div>

      </section>

      {/* Products */}

        <section className="max-w-7xl mx-auto px-8 pb-24">

          <div className="flex justify-between items-center mb-14">

            <div>

              <p className="text-gray-500 uppercase tracking-[5px] mb-3">
                Products
              </p>

              <h2 className="text-5xl font-black">
                Featured Products
              </h2>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {products.map((product) => (

              <Link
                href={`/products/${product.id}`}
                key={product.id}
              >

                <div className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300 cursor-pointer">

                  <div className="overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-96 object-cover hover:scale-110 transition duration-700"
                    />

                  </div>

                  <div className="p-8">

                    <div className="flex justify-between items-start mb-5">

                      <div>

                        <h3 className="text-3xl font-black mb-2">
                          {product.name}
                        </h3>

                        <p className="text-gray-500">
                          Premium Modern Product
                        </p>

                      </div>

                      <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                        New
                      </span>

                    </div>

                    <div className="flex justify-between items-center">

                      <span className="text-4xl font-black">
                        ${product.price}
                      </span>

                      <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition">
                        View Product
                      </button>

                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h2 className="text-3xl font-black mb-4">
            Subecha
          </h2>

          <p className="text-gray-400">
            © 2026 All Rights Reserved
          </p>

        </div>

      </footer>

    </main>
  );
}