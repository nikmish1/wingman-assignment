import React, { PropsWithChildren } from "react";

type CardProps = {
  TitleIcon?: React.ElementType;
  title?: string;
  className?: string;
};

export const Card = ({
  title = "",
  TitleIcon,
  children,
  className,
}: PropsWithChildren<CardProps>) => {
  return (
    <div
      className={`p-[24] border border-gray-300 rounded-2.5xl shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 mb-6">
        {TitleIcon && <TitleIcon className="text-gray-550" />}
        {title && (
          <div className="text-lg font-semibold leading-7 tracking-wide text-gray-900">
            {" "}
            {title}{" "}
          </div>
        )}
      </div>

      <div>{children}</div>
    </div>
  );
};
