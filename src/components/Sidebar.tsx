import { IoChatbubble } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { PiUsersFourFill } from "react-icons/pi";

import React from "react";
import Logo from "./Logo";

const SideBarMenuDirections = ["middle", "bottom"] as const;

const SideBarMenu = {
  top: [
    {
      title: "Dashboard",
      logo: <Logo />,
      position: "top",
    },
  ],
  middle: [
    {
      title: "Home",
      logo: <MdHomeFilled />,
      selected: true,
    },
    {
      title: "chat",
      logo: <IoChatbubble />,
    },
    {
      title: "People",
      logo: <PiUsersFourFill />,
    },
  ],
  bottom: [
    {
      title: "Settings",
      logo: <IoSettingsSharp />,
      position: "bottom",
    },
  ],
};

const SideBarMenuItem = ({
  logo,
  selected,
}: {
  title?: string;
  logo: React.ReactNode;
  selected?: boolean;
}) => {
  const selectedClass = selected
    ? "bg-white text-primary rounded-lg m-2 h-9 w-9"
    : "";
  return (
    <div
      className={`flex flex-row items-center justify-center rounded-lg m-2 h-9 w-9 ${selectedClass}`}
    >
      {logo}
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="bg-primary text-disabled text-lg h-screen w-16 flex flex-col">
      <div className="my-8 mb-14">
        {SideBarMenu.top.map((item) => {
          return <SideBarMenuItem key={item.title} {...item} />;
        })}
      </div>
      {SideBarMenuDirections.map((direction) => {
        const bottomClass = direction === "bottom" ? "mt-auto" : "";

        return (
          <div key={direction} className={`flex flex-col gap-6 ${bottomClass}`}>
            {SideBarMenu[direction].map((item) => {
              return <SideBarMenuItem key={item.title} {...item} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
