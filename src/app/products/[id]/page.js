"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { CartContext } from "../../../context/CartContext";
import products from "../../../data/products";

export default function ProductDetails() {

  const params = useParams();

  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id == params.id
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Top */}

        <Link
          href="/"
          className="inline-block mb-10 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
        >
          ← Back To Home
        </Link>

        {/* Product */}

        <div className="grid lg:grid-cols-2 gap-14 bg-white rounded-[40px] shadow-xl overflow-hidden">

          {/* Image */}

          <div className="overflow-hidden bg-gray-200">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />

          </div>

          {/* Content */}

          <div className="p-12 flex flex-col justify-center">

            <p className="uppercase tracking-[6px] text-gray-500 mb-5">
              Premium Collection
            </p>

            <h1 className="text-6xl font-black mb-8 leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Premium quality product with modern design,
              comfortable experience and fast delivery
              all over Bangladesh.
            </p>

            <div className="flex items-center gap-6 mb-12">

              <p className="text-5xl font-black">
                ${product.price}
              </p>

              <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                In Stock
              </span>

            </div>

            <div className="flex gap-5">

              <button
                onClick={() => {
                  addToCart(product);
                  alert("Product Added To Cart");
                }}
                className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-800 transition"
              >
                Add To Cart
              </button>

              <Link
                href="/cart"
                className="bg-gray-200 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-300 transition"
              >
                View Cart
              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}