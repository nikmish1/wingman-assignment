import { Card, Chart } from "@/components";
import { IoChatbubble } from "react-icons/io5";
import { BsBarChartLineFill } from "react-icons/bs";
import ForcastInfo from "@/components/ForcastInfo";

export const Insights = () => {
  return (
    <div className="grid rid-cols-2 md:grid-cols-4 gap-4">
      <Card
        title="CONSULTAIONS"
        TitleIcon={IoChatbubble}
        className="p-4 col-span-2"
      >
        <Chart.ComposedChart />
      </Card>
      <Card
        title="VS PAST PERIOD"
        TitleIcon={BsBarChartLineFill}
        className="p-4 col-span-1"
      >
        <Chart.BarChart />
      </Card>
      <Card
        title="FORCAST"
        TitleIcon={IoChatbubble}
        titleIconColor="text-white"
        className="bg-gradient-to-br from-[#2ab9a4] via-[#2fb5a2]  to-[#109f8c] rounded-2xl shadow-lg text-white"
      >
        <div className="mt-4 space-y-4">
          <ForcastInfo percentageChange={20} />
          <ForcastInfo percentageChange={-20} />
        </div>
      </Card>
    </div>
  );
};
