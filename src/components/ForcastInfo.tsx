import { INCREASE_DESCREASE } from "@/constants";
import {
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
} from "react-icons/hi2";

const getPercetageValue = (percentageChange: number) => {
  return percentageChange > 0 ? (
    <div className="flex items-center">+ {percentageChange}%</div>
  ) : (
    <div className="flex items-center">
      - <span className="ml-6">{Math.abs(percentageChange)}%</span>
    </div>
  );
};

type ForcastInfoProps = {
  percentageChange: number;
};
const ForcastInfo = ({ percentageChange }: ForcastInfoProps) => {
  const increaseOrDecrease =
    percentageChange > 0
      ? INCREASE_DESCREASE.INCREASE
      : INCREASE_DESCREASE.DECREASE;

  const ArraowIcon =
    percentageChange > 0 ? HiMiniArrowTrendingUp : HiMiniArrowTrendingDown;

  const percentageChangeValue = getPercetageValue(percentageChange);

  return (
    <div className="flex flex-col">
      <div className="text-6xl lg:text-5xl font-medium flex h-16">
        <span> {percentageChangeValue}</span>
        <span className="ml-2">
          <ArraowIcon className="text-4xl" />
        </span>
      </div>
      <p className="mt-2 text-base leading-5 font-normal">
        forecasted {increaseOrDecrease} in your sales closed by the end of the
        current month
      </p>
    </div>
  );
};

export default ForcastInfo;
