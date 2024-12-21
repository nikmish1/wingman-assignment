import Orders from "@/components/Orders";

const Sales = async () => {
  const data = await fetch("http://localhost:3000/api/orders");
  const orders = await data.json();
  return <Orders orders={orders} />;
};

export default Sales;
