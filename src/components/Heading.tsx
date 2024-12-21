import { PropsWithChildren } from "react";

type HeadingProps = {
  className?: string;
};

const Heading = ({ className, children }: PropsWithChildren<HeadingProps>) => {
  return (
    <div className={`text-2xl font-semibold ${className}`}>{children}</div>
  );
};

export default Heading;
