import { Dashboard } from "./Dashboard";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/orders");
  const orders = await data.json();

  return <Dashboard orders={orders} />;
}
