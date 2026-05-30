"use client";

import { useContext, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { CartContext } from "../../../context/CartContext";
import { WishlistContext } from "../../../context/WishlistContext";
import products from "../../../data/products";

export default function ProductDetails() {
  const params = useParams();

  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } =
    useContext(WishlistContext);

  // ⭐ ratings state
  const [ratings, setRatings] = useState({});

  const product = products.find(
    (item) => item.id == params.id
  );

  // ⭐ load ratings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("ratings");
    if (saved) {
      setRatings(JSON.parse(saved));
    }
  }, []);

  if (!product) {
    return (
      <h1 className="text-center mt-20 text-3xl font-bold">
        Product Not Found
      </h1>
    );
  }

  const isWishlisted = wishlist?.some(
    (item) => item.id === product.id
  );

  // ⭐ save rating
  const handleRate = (value) => {
    const updated = {
      ...ratings,
      [product.id]: value,
    };

    setRatings(updated);

    localStorage.setItem(
      "ratings",
      JSON.stringify(updated)
    );
  };

  const currentRating = ratings[product.id] || 0;

  // ⭐ related products
  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="inline-block mb-10 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
        >
          ← Back To Home
        </Link>

        {/* PRODUCT CARD */}
        <div className="grid lg:grid-cols-2 gap-14 bg-white rounded-[40px] shadow-xl overflow-hidden">

          {/* IMAGE */}
          <div className="overflow-hidden bg-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          {/* CONTENT */}
          <div className="p-12 flex flex-col justify-center">

            <p className="uppercase tracking-[6px] text-gray-500 mb-5">
              {product.category}
            </p>

            <h1 className="text-6xl font-black mb-6">
              {product.name}
            </h1>

            {/* ⭐ RATING SYSTEM */}
            <div className="mb-6">
              <div className="flex gap-2 text-3xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRate(star)}
                    className={
                      star <= currentRating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </button>
                ))}
              </div>

              <p className="text-gray-600 mt-2">
                Rating: {currentRating}/5
              </p>
            </div>

            <p className="text-gray-600 text-xl mb-10">
              Premium quality product with modern design,
              comfortable experience and fast delivery.
            </p>

            <div className="flex items-center gap-6 mb-12">
              <p className="text-5xl font-black">
                ${product.price}
              </p>

              <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                In Stock
              </span>
            </div>

            <div className="flex flex-col gap-4">

              <button
                onClick={() => {
                  addToCart(product);
                  alert("Added to Cart");
                }}
                className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-800 transition"
              >
                Add To Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className="border-2 border-violet-500 text-violet-500 py-4 rounded-2xl font-bold hover:bg-violet-500 hover:text-white transition"
              >
                {isWishlisted
                  ? "❤️ Remove From Wishlist"
                  : "🤍 Add To Wishlist"}
              </button>

              <Link
                href="/cart"
                className="bg-gray-200 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-300 transition text-center"
              >
                View Cart
              </Link>

            </div>

          </div>
        </div>

        {/* ⭐ RELATED PRODUCTS */}
        <div className="mt-20">

          <h2 className="text-3xl font-black mb-8">
            Related Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {relatedProducts.length > 0 ? (
              relatedProducts.map((item) => (
                <Link
                  href={`/products/${item.id}`}
                  key={item.id}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">

                    <img
                      src={item.image}
                      className="w-full h-60 object-cover"
                      alt={item.name}
                    />

                    <div className="p-5">
                      <h3 className="font-bold">
                        {item.name}
                      </h3>

                      <p className="text-xl font-black mt-2">
                        ${item.price}
                      </p>
                    </div>

                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">
                No related products
              </p>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}