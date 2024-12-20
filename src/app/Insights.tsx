import { Card, Chart } from "@/components";

export const Insights = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Card className="p-4">
        <Chart.ComposedChart />
      </Card>
      <Card className="p-4 w-10/12">
        <Chart.BarChart />
      </Card>
    </div>
  );
};
