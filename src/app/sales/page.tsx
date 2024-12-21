"use client";

import Orders from "@/components/Orders";

import { useEffect, useState } from "react";

const Sales = () => {
  const [orders, setOrders] = useState<[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await fetch("http://localhost:3000/api/orders");
      const orders = await data.json();
      setOrders(orders);
    };

    fetchOrders();
  }, []);

  return <Orders orders={orders} />;
};

export default Sales;
