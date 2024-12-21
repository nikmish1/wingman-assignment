import { Card } from "@/components";
import { INCREASE_DESCREASE } from "@/constants";
import {
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
} from "react-icons/hi2";

type GlanceCardProps = {
  title: string;
  percentageChange: number;
  value: string;
  icon: React.ElementType;
};
export const GlanceCard = ({
  title,
  percentageChange,
  value,
  icon,
}: GlanceCardProps) => {
  const arrowColor = percentageChange > 0 ? "text-green-500" : "text-red-500";
  const increaseOrDecrease =
    percentageChange > 0
      ? INCREASE_DESCREASE.INCREASE
      : INCREASE_DESCREASE.DECREASE;

  const ArraowIcon =
    percentageChange > 0 ? HiMiniArrowTrendingUp : HiMiniArrowTrendingDown;

  return (
    <Card title={title} TitleIcon={icon}>
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-medium">{value}</div>
        <div className="flex gap-2 text-gray-550 align-center">
          <ArraowIcon className={`${arrowColor} text-lg`} />
          <span>{`${Math.abs(percentageChange)}%`}</span>
          {increaseOrDecrease}
        </div>
      </div>
    </Card>
  );
};
