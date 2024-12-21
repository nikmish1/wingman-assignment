"use client";

import { Dashboard } from "./Dashboard";

import { useEffect, useState } from "react";

async function fetchOrders() {
  const data = await fetch("http://localhost:3000/api/orders");
  return data.json();
}

export default function Home() {
  const [orders, setOrders] = useState<[]>([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  return <Dashboard orders={orders} />;
}
