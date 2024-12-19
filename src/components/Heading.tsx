type HeadingProps = {
  text: string;
};
export const Heading = ({ text }: HeadingProps) => {
  return <div className="text-2xl font-semibold">{text}</div>;
};
