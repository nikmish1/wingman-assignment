import {
  hoursToMilliseconds,
  millisecondsToHours,
  millisecondsToMinutes,
} from "date-fns";

type TimeSpentRendererProps = {
  value: number;
};
export const TimeSpentRenderer = ({ value }: TimeSpentRendererProps) => {
  const hours = millisecondsToHours(value);
  const remainingMilliseconds = value % hoursToMilliseconds(hours);

  return (
    <div>{`${hours}h ${millisecondsToMinutes(remainingMilliseconds)}m`}</div>
  );
};
