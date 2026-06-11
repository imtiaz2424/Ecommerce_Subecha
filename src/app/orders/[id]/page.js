"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function OrderDetailsPage() {
const params = useParams();

const [order, setOrder] =
useState(null);

const [loading, setLoading] =
useState(true);

useEffect(() => {


if (!params?.id) return;

fetch(
  `http://127.0.0.1:8000/api/orders/${params.id}/`
)
  .then((res) => res.json())
  .then((data) => {
    setOrder(data);
    setLoading(false);
  })
  .catch((err) => {
    console.error(err);
    setLoading(false);
  });


}, [params?.id]);

if (loading) {
return ( <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
Loading... </div>
);
}

if (!order) {
return ( <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
Order Not Found </div>
);
}

return ( <main className="min-h-screen bg-gray-100 p-10">


  <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg">

    <Link
      href="/orders"
      className="inline-block mb-8 bg-black text-white px-5 py-3 rounded-xl"
    >
      ← Back To Orders
    </Link>

    <h1 className="text-4xl font-black mb-8">
      Order Details
    </h1>

    <div className="space-y-4">

      <p className="text-xl">
        Order ID:
        {" "}
        #{order.id}
      </p>

      <p className="text-xl">
        User ID:
        {" "}
        {order.user}
      </p>

      <p className="text-xl">
        Total:
        {" "}
        ${order.total_price}
      </p>

      <p className="text-xl">
        Date:
        {" "}
        {new Date(
          order.created_at
        ).toLocaleString()}
      </p>

    </div>

  </div>

</main>


);
}
