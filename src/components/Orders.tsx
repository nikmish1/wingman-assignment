import Card from "./Card";
import DataTable from "./DataTable";
import Heading from "./Heading";

const columnDefinations = [
  {
    key: "product",
    cellRenderer: (row) => {
      console.log("got row in cellRen", row);
      return <div>{row.name}</div>;
    },
    label: "Product",
  },
  {
    key: "timespent",
    label: "Time Spent",
  },
  {
    key: "ordervalue",
    label: "Order Value",
  },
  {
    key: "commission",
    label: "Commission",
  },
];

type OrdersProps = {
  orders: [];
};
const Orders = ({ orders }: OrdersProps) => {
  return (
    <>
      <Heading text="Orders" />
      <DataTable rows={orders} columns={columnDefinations} />
    </>
  );
};

export default Orders;
