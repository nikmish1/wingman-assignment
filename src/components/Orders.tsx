import Image from "next/image";
import DataTable from "./DataTable";
import Heading from "./Heading";
import {
  format,
  hoursToMilliseconds,
  millisecondsToHours,
  millisecondsToMinutes,
} from "date-fns";

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
    key: "date",
    label: "Date",
    cellRenderer: (value) => {
      return (
        <>
          <div>{format(new Date(value), "dd MMM `yyyy")}</div>
          <div className="text-gray-550 text-sm">
            {format(new Date(value), "hh:mm a")}
          </div>
        </>
      );
    },
  },
  {
    key: "timespent",
    label: "Time Spent",
    cellRenderer: (milliseconds: number) => {
      //   const hours = Math.floor(milliseconds / (1000 * 60 * 60));
      //   const minutes = Math.floor(
      //     (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
      //   );

      const hours = millisecondsToHours(milliseconds);
      const remainingMilliseconds = milliseconds % hoursToMilliseconds(hours);

      return (
        <div>{`${hours}h ${millisecondsToMinutes(
          remainingMilliseconds
        )}m`}</div>
      );
    },
  },
  {
    key: "ordervalue",
    label: "Order Value",
    cellRenderer: (value) => {
      return <>${value}</>;
    },
  },
  {
    key: "commission",
    label: "Commission",
    cellRenderer: (value) => {
      return <div className="font-bold">${value}</div>;
    },
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
