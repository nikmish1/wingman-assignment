"use client";

import useFetchOrders from "@/hooks/useFetchOrders";
import { Dashboard } from "./Dashboard";

// async function fetchOrders() {
//   const data = await fetch(`api/orders`);
//   return data.json();
// }

export default function Home() {
  const { data, loading } = useFetchOrders();

  return loading ? <div>Loading...</div> : <Dashboard orders={data as []} />;
}
