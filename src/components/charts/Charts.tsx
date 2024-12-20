import {
  ComposedChart,
  Bar,
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

const data = [
  {
    name: "Mon",
    consultaions: 4000,
    experts: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    consultaions: 3000,
    experts: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    consultaions: 2000,
    experts: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    consultaions: 2780,
    experts: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    consultaions: 1890,
    experts: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    consultaions: 2390,
    experts: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    consultaions: 3490,
    experts: 4300,
    amt: 2100,
  },
];

const CustomizedDot = () => {
  return <></>;
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<string, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-300 rounded-2xl shadow-sm">
        {payload.map((item, index) => {
          return (
            <p key={index} className="label">
              {`${item.name} : ${item.value}`}{" "}
            </p>
          );
        })}
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart height={350} data={data}>
        <XAxis dataKey="name" axisLine={false} />
        <YAxis
          axisLine={false}
          label={{ value: "CONSULTAIONS", angle: -90, position: "insideLeft" }}
          yAxisId="left"
        />
        <YAxis
          axisLine={false}
          label={{
            value: "EXPERTS ONLINE",
            angle: 90,
            position: "insideRight",
          }}
          yAxisId="right"
          orientation="right"
        />
        <Tooltip content={CustomTooltip} />
        <CartesianGrid strokeDasharray="4 4" />
        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar yAxisId="left" dataKey="experts" barSize={32} fill="#FFF3C6" />

        <Line
          yAxisId="left"
          type="monotone"
          dataKey="consultaions"
          strokeWidth={2}
          stroke="#8A94A6"
          strokeDasharray="5 5"
          dot={<CustomizedDot />}
        />
        <Line
          yAxisId="right"
          dataKey="amt"
          strokeWidth={2}
          type="monotone"
          stroke="#15B79F"
          dot={<CustomizedDot />}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
