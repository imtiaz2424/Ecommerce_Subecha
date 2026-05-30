"use client";

import {
  useContext,
} from "react";

import Link from "next/link";

import {
  OrderContext,
} from "../../context/OrderContext";

export default function OrdersPage() {

  const { orders } =
    useContext(OrderContext);

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black mb-10">
          My Orders
        </h1>

        {orders.length === 0 ? (

          <div className="bg-white p-10 rounded-3xl">

            <h2 className="text-3xl font-bold mb-4">
              No Orders Yet
            </h2>

            <Link
              href="/"
              className="bg-black text-white px-6 py-3 rounded-xl"
            >
              Shop Now
            </Link>

          </div>

        ) : (

          <div className="space-y-6">

            {orders.map((order) => (

              <div
                key={order.id}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >

                <h2 className="text-2xl font-bold mb-2">
                  Order #{order.id}
                </h2>

                <p>
                  Date: {order.date}
                </p>

                <p>
                  Status:
                  {" "}
                  {order.status}
                </p>

                <p className="font-bold text-xl mt-2">
                  Total:
                  {" "}
                  ${order.total}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}