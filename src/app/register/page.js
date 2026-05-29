"use client";

import Link from "next/link";

export default function RegisterPage() {

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md p-10 rounded-[35px] shadow-xl">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-black mb-4">
            Create Account
          </h1>

          <p className="text-gray-500">
            Register your new account
          </p>

        </div>

        <form className="space-y-6">

          <div>

            <label className="block mb-2 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-5 rounded-2xl text-xl font-bold hover:bg-gray-800 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center text-gray-500 mt-8">

          Already have an account?

          <Link
            href="/login"
            className="text-black font-bold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </main>
  );
}