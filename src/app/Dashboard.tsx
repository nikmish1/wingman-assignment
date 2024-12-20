"use client";

import { GlanceCard } from "../components/GlanceCard";
import { Card, Heading, Select } from "@/components";

import { IoChatbubble } from "react-icons/io5";
import { PiCoinsDuotone, PiCoinFill, PiPiggyBankFill } from "react-icons/pi";
import { Insights } from "./Insights";
import Orders from "@/components/Orders";

const GlanceCards = [
  {
    title: "CONSULTAIONS",
    percentageChange: 15,
    value: "24",
    icon: IoChatbubble,
  },
  {
    title: "CONSULTAIONS",
    percentageChange: -16,
    value: "24",
    icon: IoChatbubble,
  },
  {
    title: "CONSULTAIONS",
    percentageChange: -16,
    value: "24",
    icon: IoChatbubble,
  },
  {
    title: "TOTAL SALES VALUE",
    percentageChange: 15,
    value: "$2,400",
    icon: PiCoinsDuotone,
  },
  {
    title: "AVG ORDER VALUE",
    percentageChange: 15,
    value: "$240",
    icon: PiCoinFill,
  },
  {
    title: "COMMISION PAID",
    percentageChange: -16,
    value: "$240",
    icon: PiPiggyBankFill,
  },
];

type DashboardProps = {
  orders: [];
};

export const Dashboard = ({ orders }: DashboardProps) => {
  return (
    <Card className="m-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between items-center">
          <Heading text="At a Glance" />
          <Select />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:gap-8">
          {GlanceCards.map((card, index) => (
            <GlanceCard key={index} {...card} />
          ))}
        </div>
        <Heading text="Insights" />
        <Insights />
        <Orders orders={orders} />
      </div>
    </Card>
  );
};