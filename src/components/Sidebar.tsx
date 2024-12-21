import { FaFeatherPointed } from "react-icons/fa6";
import { IoChatbubble } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import React from "react";

const SideBarMenuDirections = ["middle", "bottom"] as const;

const SideBarMenu = {
  top: [
    {
      title: "Dashboard",
      logo: <FaFeatherPointed />,
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
      logo: <IoChatbubble />,
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
    ? "bg-white text-[#115E56] rounded-lg m-2 h-9 w-9"
    : "";
  return (
    <div
      className={`flex flex-row items-center justify-center h-14 ${selectedClass}`}
    >
      {logo}
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="bg-[#115E56] text-white text-lg h-screen w-16 flex flex-col">
      <div className="mb-6">
        {SideBarMenu.top.map((item) => {
          return <SideBarMenuItem key={item.title} {...item} />;
        })}
      </div>
      {SideBarMenuDirections.map((direction) => {
        const bottomClass = direction === "bottom" ? "mt-auto" : "";

        return (
          <div key={direction} className={`flex flex-col ${bottomClass}`}>
            {SideBarMenu[direction].map((item) => {
              return <SideBarMenuItem key={item.title} {...item} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
