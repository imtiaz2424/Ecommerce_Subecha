"use client";

import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { CartContext } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cart, setCart } = useContext(CartContext);

  const [address, setAddress] = useState("");
  const [orders, setOrders] = useState([]);

  // load previous orders
  useEffect(() => {
    const saved = localStorage.getItem("orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  // total price
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  // place order
  const handleOrder = () => {
    if (!address) {
      alert("Please enter address");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      address,
      date: new Date().toLocaleDateString(),
    };

    const updated = [...orders, newOrder];

    setOrders(updated);

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );

    setCart([]);

    localStorage.removeItem("cart");

    alert("Order Placed Successfully!");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-black mb-6">
          Checkout
        </h1>

        {/* CART ITEMS */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Cart Items
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">
              No items in cart
            </p>
          ) : (
            cart.map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b py-2"
              >
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))
          )}
        </div>

        {/* TOTAL */}
        <h2 className="text-2xl font-black mb-6">
          Total: ${total}
        </h2>

        {/* ADDRESS */}
        <textarea
          placeholder="Enter your address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-4 rounded-xl mb-6"
        />

        {/* BUTTON */}
        <button
          onClick={handleOrder}
          className="bg-black text-white w-full py-4 rounded-2xl text-xl font-bold"
        >
          Place Order
        </button>

        {/* BACK */}
        <Link
          href="/cart"
          className="block text-center mt-4 text-violet-600"
        >
          ← Back to Cart
        </Link>

      </div>
    </main>
  );
}