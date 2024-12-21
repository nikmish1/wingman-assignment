"use client";

import Orders from "@/components/Orders";
import useFetchOrders from "@/hooks/useFetchOrders";

const Sales = () => {
  const { data, loading } = useFetchOrders();

  if (loading) {
    return <div>Loading...</div>;
  }
  return <Orders orders={data as []} />;
};

export default Sales;
