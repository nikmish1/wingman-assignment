import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "This Week",
    consultation: 4000,
    orderplaced: 2400,
  },
  {
    name: "Last Week",
    consultation: 3000,
    orderplaced: 1398,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 40,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} />
        <YAxis axisLine={false} />
        <Tooltip />
        <Bar
          dataKey="orderplaced"
          fill="#CCFBEF"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="consultation"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
