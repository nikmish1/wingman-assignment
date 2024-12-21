"use client";

import useFetchOrders from "@/hooks/useFetchOrders";
import { Dashboard } from "./Dashboard";

export default function Home() {
  const { data, loading } = useFetchOrders();

  return loading ? <div>Loading...</div> : <Dashboard orders={data as []} />;
}
