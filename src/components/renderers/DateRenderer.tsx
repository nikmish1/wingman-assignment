import { format } from "date-fns";

type DateRendererProps = {
  value: string;
};
export const DateRenderer = ({ value }: DateRendererProps) => {
  return (
    <>
      <div>{format(new Date(value), "dd MMM `yyyy")}</div>
      <div className="text-gray-550 text-sm">
        {format(new Date(value), "hh:mm a")}
      </div>
    </>
  );
};
