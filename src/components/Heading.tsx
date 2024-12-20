type HeadingProps = {
  text: string;
};
const Heading = ({ text }: HeadingProps) => {
  return <div className="text-2xl font-semibold">{text}</div>;
};

export default Heading;
