import Image from "next/image";
import Card from "./Card";
import DataTable from "./DataTable";
import Heading from "./Heading";

const columnDefinations = [
  {
    key: "product",
    cellRenderer: (row) => {
      console.log("got row in cellRen", row);
      return (
        <div className="flex items-center gap-4">
          <Image
            src={row.image}
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <span>{row.name}</span>
        </div>
      );
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
      <DataTable
        rows={orders}
        columns={columnDefinations}
        className="border border-gray-300 rounded-2.5xl shadow-sm"
      />
    </>
  );
};

export default Orders;