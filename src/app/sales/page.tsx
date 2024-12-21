import Orders from "@/components/Orders";

const Sales = async () => {
  const data = await fetch("http://localhost:3000/api/orders");
  const orders = await data.json();
  console.log("ordders", orders);
  return (
    <div className="w-[1024] m-6">
      <Orders orders={orders} />
    </div>
  );
};

export default Sales;
