"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useContext,
  useState,
} from "react";

import {
  AuthContext,
} from "../../context/AuthContext";

export default function LoginPage() {

  const router = useRouter();

  const { login } =
    useContext(AuthContext);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const userData = {
      name: "Imtiaz Sharif",
      email,
    };

    login(userData);

    alert("Login Successful");

    router.push("/");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md p-10 rounded-[35px] shadow-xl">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-black mb-4">
            Welcome Back
          </h1>

          <p className="text-gray-500">
            Login to your account
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div>

            <label className="block mb-2 font-semibold">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
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
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-5 rounded-2xl text-xl font-bold hover:bg-gray-800 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 mt-8">

          Don&apos;t have an account?

          <Link
            href="/register"
            className="text-black font-bold ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </main>
  );
}