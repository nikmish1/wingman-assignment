"use client";

import { Dashboard } from "./Dashboard";

import { useEffect, useState } from "react";

async function fetchOrders() {
  const data = await fetch(`${process.env.NEXT_API_URL}/api/orders`);
  return data.json();
}

export default function Home() {
  const [orders, setOrders] = useState<[]>([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  return <Dashboard orders={orders} />;
}
