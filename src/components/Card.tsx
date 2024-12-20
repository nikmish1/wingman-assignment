import React, { PropsWithChildren } from "react";

type CardProps = {
  TitleIcon?: React.ElementType;
  title?: string;
  className?: string;
  titleIconColor?: string;
};

const Card = ({
  title = "",
  TitleIcon,
  titleIconColor = "text-gray-550",
  children,
  className,
}: PropsWithChildren<CardProps>) => {
  return (
    <div
      className={`p-[24] border border-gray-300 rounded-2.5xl shadow-sm ${className}`}
    >
      {title && (
        <div className="flex items-center gap-2 mb-6">
          {TitleIcon && <TitleIcon className={titleIconColor} />}

          <div className="text-lg font-semibold leading-7 tracking-wide">
            {" "}
            {title}{" "}
          </div>
        </div>
      )}

      <div>{children}</div>
    </div>
  );
};

export default Card;
