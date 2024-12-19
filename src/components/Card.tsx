import React, { PropsWithChildren } from "react";

type CardProps = {
  TitleIcon: React.ElementType;
  title: string;
  //TitleIcon?: React.ElementType;
};

export const Card = ({
  title = "CONSULTAIONS",
  TitleIcon,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <div className="p-[24] border border-gray-300 rounded-2.5xl shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        {TitleIcon && <TitleIcon className="text-gray-550" />}
        <div className="text-xs font-semibold leading-7 tracking-wide text-gray-550">
          {title}
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};
