"use client";
import DataTable from "./DataTable";
import Heading from "./Heading";

import { TimeSpentRenderer } from "./renderers/TimeSpentRenderer";
import { DateRenderer } from "./renderers/DateRenderer";
import { NumberColumn, Product, ProductColumn, StringColumn } from "@/types";
import { ProductRenderer } from "./renderers/ProductRenderer";
import { OrderValueRenderer } from "./renderers/OrderValueRenderer";
import { CommissionRenderer } from "./renderers/CommissionRenderer";
import { ChatUrlRenderer } from "./renderers/ChatUrlRenderer";
import Card from "./Card";

const columnDefinations: (StringColumn | ProductColumn | NumberColumn)[] = [
  {
    key: "product",
    cellRenderer: (value: Product) => <ProductRenderer value={value} />,
    label: "Product",
  },
  {
    key: "date",
    label: "Date",
    cellRenderer: (value: string) => {
      return <DateRenderer value={value} />;
    },
  },
  {
    key: "timespent",
    label: "Time Spent",
    cellRenderer: (value: number) => <TimeSpentRenderer value={value} />,
  },
  {
    key: "ordervalue",
    label: "Order Value",
    cellRenderer: (value: string) => <OrderValueRenderer value={value} />,
  },
  {
    key: "commission",
    label: "Commission",
    cellRenderer: (value: string) => {
      return <CommissionRenderer value={value} />;
    },
  },
  {
    key: "chatUrl",
    label: "",
    cellRenderer: () => <ChatUrlRenderer />,
  },
];

type OrdersProps = {
  orders: [];
  loading?: boolean;
};
const Orders = ({ orders, loading }: OrdersProps) => {
  return (
    <Card className="m-4 flex flex-col" title="">
      <Heading className="my-2 font-medium text-3xl">Orders</Heading>
      {loading && <div>Loading...</div>}
      <DataTable
        rows={orders}
        columns={columnDefinations}
        className="border border-gray-300 rounded-2.5xl shadow-sm"
      />
    </Card>
  );
};

export default Orders;
