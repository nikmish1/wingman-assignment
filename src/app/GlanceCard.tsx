"use client";
import { Card } from "@/components/Card";
import {
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
} from "react-icons/hi2";

type GlanceCardProps = {
  title: string;
  percentageChange: number;
  value: number;
  icon: React.ElementType;
};
export const GlanceCard = ({
  title,
  percentageChange,
  value,
  icon,
}: GlanceCardProps) => {
  console.log("percentageChange", percentageChange > 0);
  const arrowColor = percentageChange > 0 ? "text-green-500" : "text-red-500";
  const increaseOrDecrease = percentageChange > 0 ? "increase" : "decrease";
  const ArraowIcon =
    percentageChange > 0 ? HiMiniArrowTrendingUp : HiMiniArrowTrendingDown;
  return (
    <Card title={title} TitleIcon={icon}>
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-medium">{value}</div>
        <div className="flex gap-1 text-gray-550">
          <ArraowIcon className={arrowColor} />
          <span>{`${Math.abs(percentageChange)}%`}</span>
          {increaseOrDecrease}
        </div>
      </div>
    </Card>
  );
};
