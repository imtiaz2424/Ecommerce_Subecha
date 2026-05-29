"use client";

import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../../context/CartContext";

export default function CheckoutPage() {

  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}

        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <h1 className="text-5xl font-black mb-10">
            Checkout
          </h1>

          <form className="space-y-6">

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
              />

            </div>

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="01XXXXXXXXX"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
              />

            </div>

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Delivery Address
              </label>

              <textarea
                placeholder="Enter your address"
                rows="5"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-5 rounded-2xl text-xl font-bold hover:bg-gray-800 transition"
            >
              Place Order
            </button>

          </form>

        </div>

        {/* Right Side */}

        <div className="bg-white p-10 rounded-3xl shadow-lg h-fit">

          <h2 className="text-4xl font-black mb-8">
            Order Summary
          </h2>

          <div className="space-y-5">

            {cart.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-5 border-b pb-5"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-2xl"
                />

                <div className="flex-1">

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    ${item.price}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Total */}

          <div className="mt-10 flex justify-between items-center">

            <h3 className="text-3xl font-black">
              Total
            </h3>

            <p className="text-4xl font-black">
              ${totalPrice}
            </p>

          </div>

          <Link
            href="/cart"
            className="block mt-10 text-center bg-gray-200 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-300 transition"
          >
            Back To Cart
          </Link>

        </div>

      </div>

    </main>
  );
}