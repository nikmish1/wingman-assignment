"use client";

import Pill from "./Pill";
import { PiChartPieSliceFill, PiChatCircleTextFill } from "react-icons/pi";
import { FaTag } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

const HeaderItems = [
  {
    title: "Summary",
    icon: PiChartPieSliceFill,
    url: "/",
  },
  {
    title: "Sales",
    icon: FaTag,
    url: "/sales",
  },
  {
    title: "Chats",
    icon: PiChatCircleTextFill,
    url: "/chats",
  },
];
export const Header = () => {
  const [selected, setSelected] = useState(0);

  const onSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <header className="flex gap-4 p-4 my-4 border-b-2 border-[#DCDFE4]">
      {HeaderItems.map((item, index) => (
        <Link href={item.url} key={index}>
          <Pill
            key={index}
            selected={index === selected}
            onClick={() => onSelect(index)}
          >
            <div className="flex gap-2 items-center">
              <item.icon className="text-2xl" />
              {item.title}
            </div>
          </Pill>
        </Link>
      ))}
    </header>
  );
};
