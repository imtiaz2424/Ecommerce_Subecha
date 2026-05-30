"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("orders");

    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto">
         {/* Back */}
      
        <Link
          href="/"
          className="inline-block mb-10 mt-10 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
        >
          ← Back To Home
        </Link>

        <h1 className="text-4xl font-black mb-8">
          📦 My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white p-8 rounded-3xl text-center">
            <h2 className="text-2xl font-bold">
              No Orders Yet
            </h2>

            <Link
              href="/"
              className="text-violet-600 mt-4 block"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 rounded-3xl shadow-lg"
              >

                {/* Order Info */}
                <div className="flex justify-between mb-4">

                  <p className="font-bold">
                    Order ID: {order.id}
                  </p>

                  <p className="text-gray-500">
                    {order.date}
                  </p>

                </div>

                {/* Items */}
                <div className="border-t pt-4">
                  {order.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between py-1"
                    >
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="mt-4 text-xl font-black">
                  Total: ${order.total}
                </div>

                {/* Address */}
                <p className="text-gray-600 mt-2">
                  📍 {order.address}
                </p>

              </div>
            ))}

          </div>
        )}

       

      </div>
    </main>
  );
}