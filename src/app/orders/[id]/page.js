"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProtectedRoute from "../../../components/ProtectedRoute";

export default function OrderDetailsPage() {
  const params = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/order-items/?order=${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [params.id]);

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-100 p-10">

        <div className="max-w-5xl mx-auto">

          <Link
            href="/orders"
            className="inline-block mb-8 bg-black text-white px-6 py-3 rounded-xl"
          >
            ← Back To Orders
          </Link>

          <h1 className="text-4xl font-black mb-8">
            Order #{params.id}
          </h1>

          {loading ? (
            <div className="bg-white p-8 rounded-3xl">
              Loading...
            </div>
          ) : items.length === 0 ? (
            <div className="bg-white p-8 rounded-3xl">
              No Items Found
            </div>
          ) : (
            <div className="space-y-4">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-3xl shadow"
                >
                  <h2 className="text-xl font-bold">
                    {item.product_name}
                  </h2>

                  <p>
                    Price: ${item.price}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p className="font-bold mt-2">
                    Total: $
                    {item.price * item.quantity}
                  </p>
                </div>
              ))}

            </div>
          )}

        </div>

      </main>
    </ProtectedRoute>
  );
}