import dynamic from "next/dynamic";

const ComposedChart = dynamic(() => import("./ComposedChart"), { ssr: false });
const BarChart = dynamic(() => import("./BarChart"), { ssr: false });

const ComposedChartWrapper = () => {
  return <ComposedChart />;
};

const BarChartWrapper = () => {
  return <BarChart />;
};

const ChartWrappers = {
  ComposedChart: ComposedChartWrapper,
  BarChart: BarChartWrapper,
};

export default ChartWrappers;
