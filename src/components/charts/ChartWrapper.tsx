import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Charts"), { ssr: false });

const ChartWrapper = () => {
  return <Chart />;
};

export default ChartWrapper;
