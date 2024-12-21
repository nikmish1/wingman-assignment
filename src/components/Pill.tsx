import { PropsWithChildren } from "react";

type PillProps = {
  selected?: boolean;
  className?: string;
  onClick?: () => void;
};

const Pill = ({
  children,
  selected = true,
  onClick,
  className,
}: PropsWithChildren<PillProps>) => {
  if (selected) {
    className = `bg-[#CCFBEF] border border-[##c2f4e7] ${className}`;
  } else {
    className = `text-gray-500 ${className}`;
  }
  return (
    <button
      onClick={onClick}
      className={`rounded-3xl w-44 text-center text-lg font-medium py-3 px-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Pill;
